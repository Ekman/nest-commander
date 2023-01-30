import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveredClassWithMeta, DiscoveryService } from '@golevelup/nestjs-discovery';
import { Command, Option } from 'commander';
import { CommanderOptionsType } from './command-factory.interface';
import {
  CommandMetadata,
  CommandRunner,
  HelpOptions,
  OptionChoiceForMetadata,
  OptionMetadata,
  RunnerMeta,
} from './command-runner.interface';
import {
  cliPluginError,
  CommanderOptions,
  CommandMeta,
  HelpMeta,
  OptionChoiceMeta,
  OptionMeta,
  SubCommandMeta,
} from './constants';
import { InjectCommander } from './command.decorators';

export class CommandRunnerService implements OnModuleInit {
  private subCommands?: DiscoveredClassWithMeta<CommandMetadata>[];

  constructor(
    private readonly discoveryService: DiscoveryService,
    @InjectCommander() private readonly commander: Command,
    @Inject(CommanderOptions) private readonly options: CommanderOptionsType,
    private readonly logger: Logger,
  ) {}

  async onModuleInit() {
    const providers = await this.discoveryService.providersWithMetaAtKey<CommandMetadata>(
      CommandMeta,
    );
    const commands = await this.populateCommandMapInstances(providers);
    await this.setUpCommander(commands);

    if (this.options.usePlugins) {
      this.commander.showHelpAfterError(`
${this.commander.helpInformation()}
${cliPluginError(this.options.cliName ?? 'nest-commander', this.options.pluginsAvailable)}`);
    }
    if (this.options.errorHandler) {
      this.commander.exitOverride(this.options.errorHandler);
    }
  }

  private async populateCommandMapInstances(
    providers: DiscoveredClassWithMeta<CommandMetadata>[],
  ): Promise<RunnerMeta[]> {
    const commands: RunnerMeta[] = [];
    for (const provider of providers) {
      const optionProviders =
        await this.discoveryService.providerMethodsWithMetaAtKey<OptionMetadata>(
          OptionMeta,
          (found) => found.name === provider.discoveredClass.name,
        );
      const helpProviders = await this.discoveryService.providerMethodsWithMetaAtKey<HelpOptions>(
        HelpMeta,
        (found) => found.name === provider.discoveredClass.name,
      );
      commands.push({
        command: provider.meta,
        instance: provider.discoveredClass.instance as CommandRunner,
        params: optionProviders,
        help: helpProviders,
      });
    }
    return commands;
  }

  private async setUpCommander(commands: RunnerMeta[]): Promise<void> {
    for (const command of commands) {
      const newCommand = await this.buildCommand(command);
      this.commander.addCommand(newCommand, command.command.options);
    }
  }

  private async buildCommand(command: RunnerMeta): Promise<Command> {
    const newCommand = this.commander.createCommand(command.command.name);
    command.instance.setCommand(newCommand);
    if (command.command.arguments) {
      this.mapArgumentDescriptions(
        newCommand,
        command.command.arguments,
        command.command.argsDescription,
      );
    }
    newCommand.description(command.command.description ?? '');
    for (const option of command.params) {
      const {
        flags,
        description,
        defaultValue = undefined,
        required = false,
        choices = [],
        name: optionName = '',
        env = undefined,
      } = option.meta;
      const handler = option.discoveredMethod.handler.bind(command.instance);
      const commandOption = new Option(flags, description)
        .default(defaultValue)
        .preset(defaultValue)
        .makeOptionMandatory(required);
      // choices can be a true boolean or an array of string options for commander.
      // If a boolean, then we know that we are expected to go find the OptionChoiceFOr method.
      if (choices === true || (Array.isArray(choices) && choices.length)) {
        let optionChoices = [];
        if (choices === true) {
          const choicesMethods =
            await this.discoveryService.providerMethodsWithMetaAtKey<OptionChoiceForMetadata>(
              OptionChoiceMeta,
              (item) => item.instance === command.instance,
            );
          const cMethod = choicesMethods
            .filter((choiceMethod) => choiceMethod.meta.name === optionName)
            .map((method) => method.discoveredMethod)[0];
          optionChoices = cMethod.handler.call(command.instance);
        } else {
          optionChoices = choices;
        }
        commandOption.choices(optionChoices);
      }
      if (env) {
        commandOption.env(env);
      }
      commandOption.argParser(handler);
      newCommand.addOption(commandOption);
    }
    for (const help of command.help ?? []) {
      newCommand.addHelpText(help.meta, help.discoveredMethod.handler.bind(command.instance));
    }
    command.command.aliases?.forEach((alias) => newCommand.alias(alias));
    newCommand.action(async () => {
      try {
        command.instance.run.bind(command.instance);
        return await command.instance.run(newCommand.args, newCommand.opts());
      } catch (err) {
        if ((err as Error).message.includes('Cannot read properties of undefined')) {
          const className = /\s+at\s(\w+)\.run/.exec((err as Error).stack ?? '')?.[1];
          this.logger.error(
            `A service tried to call a property of "undefined" in the ${className} class. Did you use a request scoped provider without the @RequestModule() decorator?`,
            '',
            'CommandRunnerService',
          );
        } else {
          throw err;
        }
      }
    });
    if (command.command.subCommands?.length) {
      this.subCommands ??= await this.discoveryService.providersWithMetaAtKey<CommandMetadata>(
        SubCommandMeta,
      );
      const subCommandsMetaForCommand = this.subCommands.filter((subMeta) =>
        command.command.subCommands
          ?.map((subCommand) => subCommand.name)
          .includes(subMeta.discoveredClass.name),
      );
      const subCommands = await this.populateCommandMapInstances(subCommandsMetaForCommand);
      for (const subCommand of subCommands) {
        newCommand.addCommand(await this.buildCommand(subCommand), {
          isDefault: subCommand.command.options?.isDefault ?? false,
        });
      }
    }
    return newCommand;
  }

  private mapArgumentDescriptions(
    command: Command,
    args = '',
    argDescriptions: Record<string, string> = {},
  ): void {
    const trueArgDefs: Record<string, string> = {};

    const splitArgs = args.split(' ');
    for (const arg of splitArgs) {
      let added = false;
      for (const key of Object.keys(argDescriptions).filter((key) => arg.includes(key))) {
        added = true;
        trueArgDefs[arg] = argDescriptions[key];
      }
      command.argument(arg, added ? trueArgDefs[arg] : '');
    }
  }

  async run(args?: string[]): Promise<void> {
    await this.commander.parseAsync(args || process.argv);
  }
}
