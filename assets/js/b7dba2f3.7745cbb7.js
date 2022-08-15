"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[780],{7942:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=o,h=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=t(2081),o=t(4604),r=(t(959),t(7942)),i=["components"],s={title:"Commander",sidebar_label:"Commander"},l=void 0,m={unversionedId:"features/commander",id:"features/commander",title:"Commander",description:"For nest-commander, a command is something that the CLI runner should do. This could be like @nestjs/cli's start or build commands, or it could be something like git's add or commit. To specify a command, all you need to do is decorate a class that extends the CommandRunner abstract class with the @Command() decorator. No need to use @Injectable() or anything else, the @Command() decorator will take care of allowing dependencies to be injected into the class.",source:"@site/docs/features/commander.md",sourceDirName:"features",slug:"/features/commander",permalink:"/docs/features/commander",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/features/commander.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1660498634,formattedLastUpdatedAt:"Aug 14, 2022",frontMatter:{title:"Commander",sidebar_label:"Commander"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/introduction/installation"},next:{title:"Inquirer",permalink:"/docs/features/inquirer"}},d={},p=[{value:"Setting the Command Name and Arguments",id:"setting-the-command-name-and-arguments",level:2},{value:"Setting Options for the Command",id:"setting-options-for-the-command",level:2},{value:"Setting Choices for your Options",id:"setting-choices-for-your-options",level:3},{value:"Adding Custom Help",id:"adding-custom-help",level:2},{value:"Getting the Commander Instance",id:"getting-the-commander-instance",level:2},{value:"Getting the Current Command",id:"getting-the-current-command",level:2},{value:"Sub Commands",id:"sub-commands",level:2},{value:"The Full Command",id:"the-full-command",level:2}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"nest-commander"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," is something that the CLI runner should do. This could be like ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/cli"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," commands, or it could be something like ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),". To specify a command, all you need to do is decorate a class that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandRunner")," abstract class with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," decorator. No need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@Injectable()")," or anything else, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," decorator will take care of allowing dependencies to be injected into the class."),(0,r.kt)("h2",{id:"setting-the-command-name-and-arguments"},"Setting the Command Name and Arguments"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," decorator takes in a set of options that allows the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"commander")," package to handle the command properly. The options are things like the command's ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", its ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"argsDescription")," and general ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", all of which will get passed to commander and handled ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tj/commander.js"},"as described by their docs"),"."),(0,r.kt)("p",null,"To set a command's name, and make it the default actions, you would need to use the decorator as follows. Let's make a command with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec"),". It will also take in a shell command to execute. We'll call this, ",(0,r.kt)("inlineCode",{parentName:"p"},"task"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/task.command.ts"',title:'"src/task.command.ts"'},"@Command({\n  name: 'my-exec',\n  arguments: '<task>',\n  options: { isDefault: true }\n})\nexport class TaskRunner extends CommandRunner {\n  async run(\n    inputs: string[],\n    options: Record<string, any>\n  ): Promise<void> {}\n}\n")),(0,r.kt)("p",null,"You'll notice for the ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments")," we use angle brackets around the argument name. This specifies that the argument is required for the command, and commander will throw an error if it is not supplied. If, however, we wanted to make the argument optional, we could wrap it in square brackets instead like ",(0,r.kt)("inlineCode",{parentName:"p"},"[task]"),"."),(0,r.kt)("p",null,"Now, to run this command, we'll need to set up the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/factory"},"CommandFactory")," and make use of one of the execution methods as described later in the docs. For now, we'll just assume this application is installed globally under the ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," name. Running the above command would then look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"crun my-exec 'echo Hello World!'\n# OR\ncrun 'echo Hello World!'\n")),(0,r.kt)("p",null,"We can use either of these ",(0,r.kt)("em",{parentName:"p"},"because")," we set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"options: { isDefault: true }")," options."),(0,r.kt)("p",null,"This command doesn't do anything yet, but we'll get to the implementation of it later. For now, let's explore how we can set options for the command."),(0,r.kt)("h2",{id:"setting-options-for-the-command"},"Setting Options for the Command"),(0,r.kt)("p",null,"Options allow users to change certain behaviors of the command. Going back to Nest's CLI the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command can take a ",(0,r.kt)("inlineCode",{parentName:"p"},"--watch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," option to start up in different modes. For ",(0,r.kt)("inlineCode",{parentName:"p"},"nest-commander")," each of these options goes on its own method of the class it modifies. Going back to our ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command, say we wanted to allow the use of a different shell for running the command. The easiest way to add this in would be to allow the user to use a flag, like ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," and then the name of the shell to use. Adding this option would then make our class look like the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/task.command.ts"',title:'"src/task.command.ts"'},"@Command({\n  name: 'my-exec',\n  arguments: '<task>',\n  options: { isDefault: true }\n})\nexport class TaskRunner extends CommandRunner {\n  async run(\n    inputs: string[],\n    options: Record<string, any>\n  ): Promise<void> {}\n  @Option({\n    flags: '-s, --shell <shell>',\n    description: 'A different shell to spawn than the default'\n  })\n  parseShell(val: string) {\n    return val;\n  }\n}\n")),(0,r.kt)("p",null,"The reason for each option to be tied to a method handler is because options from the command line come in as strings. Most of the time, this is fine and works well, but there are times where it ends up having problems, like passing booleans. These methods allow developers to set up their own parsing methods for each option, so that when ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec")," is called, all of the inputs are validated and ready to be used immediately."),(0,r.kt)("p",null,"You'll also notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," property has several parts to it, a ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," short flag, a ",(0,r.kt)("inlineCode",{parentName:"p"},"--shell")," long flag, and ",(0,r.kt)("inlineCode",{parentName:"p"},"<shell>"),". This means that the user can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--shell")," to add this option, but if either is used they ",(0,r.kt)("strong",{parentName:"p"},"must")," provide a shell option. The ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," name ends up being a key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter for the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec")," method, and can be retrieved later using ",(0,r.kt)("inlineCode",{parentName:"p"},"options.shell"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," is used when the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag is passed, and will help provide more information to the CLI consumer."),(0,r.kt)("p",null,"You can add as many of these ",(0,r.kt)("inlineCode",{parentName:"p"},"@Option()")," methods as necessary for your command, so long as they do not duplicate option names. Each method may only have one ",(0,r.kt)("inlineCode",{parentName:"p"},"@Option()")," decorator as well."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more details on everything that is possible with options, take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/commander#options"},(0,r.kt)("inlineCode",{parentName:"a"},"commander"),"'s Options documentation"),".")),(0,r.kt)("p",null,"You can also make an option completely required, like an argument, by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"required: true")," in the metadata for the option."),(0,r.kt)("h3",{id:"setting-choices-for-your-options"},"Setting Choices for your Options"),(0,r.kt)("p",null,"Commander also allows us to set up pre-defined choices for options. To do so we have two options: setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"choices")," array directly as a part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Option()")," decorator, or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OptionChoiceFor()")," decorator and a class method, similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/inquirer"},"InquirerService"),". With using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OptionChoiceFor()")," decorator, we are also able to make use of class providers that are injected into the command via Nest's DI which allows devs to read for the choices from a file or database if that happens to be necessary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Option, OptionChoiceFor } from 'nest-commander';\n\n@Command({ name: 'my-exec' })\nexport class RunCommand extends CommandRunner {\n  constructor(\n    private readonly choiceProvider: {\n      getChoicesForRun: () => string[];\n    }\n  ) {\n    super();\n  }\n\n  async run(args: any, options: { runWithColor: 'yes' | 'no' }) {\n    console.log(options);\n  }\n\n  @Option({\n    flags: '-c, --color [runWithColor]',\n    name: 'withColor',\n    description: 'Should the command use color in the output'\n  })\n  parseColorOption(option: string) {\n    return option;\n  }\n\n  @OptionChoiceFor({ name: 'withColor' }) // make sure this matches the `name` of an `@Options()` decorator\n  getColorChoices() {\n    return this.choiceProvider.getChoicesForRun();\n  }\n}\n")),(0,r.kt)("h2",{id:"adding-custom-help"},"Adding Custom Help"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"commander")," sets help to the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," flag. If you need extra help added to the command, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Help()")," decorator on a class method that returns a string. The valid values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Help()")," decorator are ",(0,r.kt)("inlineCode",{parentName:"p"},"before"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterAll"),", just like for commander's ",(0,r.kt)("inlineCode",{parentName:"p"},"addHelpText")," method."),(0,r.kt)("h2",{id:"getting-the-commander-instance"},"Getting the Commander Instance"),(0,r.kt)("p",null,"If for some reason you need access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"commander")," instance, as of ",(0,r.kt)("inlineCode",{parentName:"p"},"nest-commander@2.4.0")," you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectCommander()")," to get the instance used."),(0,r.kt)("h2",{id:"getting-the-current-command"},"Getting the Current Command"),(0,r.kt)("p",null,"Similarly, if you need to get the current Commander commander instance, you can access it via ",(0,r.kt)("inlineCode",{parentName:"p"},"this.command")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is only available in version 3.0.0 and on.")),(0,r.kt)("h2",{id:"sub-commands"},"Sub Commands"),(0,r.kt)("p",null,"It may also be that you want to add subcommands to your command, similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up"),". This is possible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@SubCommand()")," decorator. Using this decorator, you can have your original implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," decorator, with arguments as normal, and you can have sub commands, as specific arguments that take in even more options. With our ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec")," example above, lets say we wanted to add a subcommand, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),". We'd make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"parents")," option for the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec")," command and reference the subcommand class, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Command({\n  name: 'my-exec',\n  arguments: '<task>',\n  subCommands: [FooCommand]\n})\nexport class RunCommand extends CommandRunner {}\n")),(0,r.kt)("p",null,"Now we just make a subcommand with the same metadata options as the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," decorator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@SubCommand({ name: 'foo', arguments: '[phooey]' })\nexport class FooCommand extends CommandRunner {\n  // command runner implementation\n}\n")),(0,r.kt)("p",null,"After adding the subcommand to the appropriate module's ",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," array, nest-commander will set up the command so you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"crun my-exec foo hello!")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"FooCommand#run")," method will be ran instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"RunCommand#run"),". You can also chain commands as deep as you want, by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"subCommands")," to the subcommand's metadata."),(0,r.kt)("p",null,"Subcommands can also take an ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases")," array for sub command aliases. We could add ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases: ['f']")," to the above ",(0,r.kt)("inlineCode",{parentName:"p"},"FooCommand")," and run it with ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec f")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec foo")," and get the same result. ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases")," must be passed as an array."),(0,r.kt)("h2",{id:"the-full-command"},"The Full Command"),(0,r.kt)("p",null,"Let's say all we want to do is have our ",(0,r.kt)("inlineCode",{parentName:"p"},"my-exec")," command run the task in another shell, and that's it. If we take our above command we can see that it can be ran like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"crun my-exec 'echo Hello World!'\n# OR\ncrun 'echo Hello World!'\n# OR\ncrun 'echo Hello World!' --shell zsh\n# OR\ncrun my-exec 'echo Hello World!' -s zsh\n")),(0,r.kt)("p",null,"To create this kind of program, we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/task.command.ts"',title:'"src/task.command.ts"'},"import { spawn } from 'child_process';\nimport { Command, CommandRunner, Option } from 'nest-commander';\nimport { userInfo } from 'os';\n\n@Command({\n  name: 'my-exec',\n  arguments: '<task>',\n  options: { isDefault: true }\n})\nexport class TaskRunner extends CommandRunner {\n  async run(\n    inputs: string[],\n    options: Record<string, string>\n  ): Promise<void> {\n    const echo = spawn(inputs[0], {\n      shell: options.shell ?? userInfo().shell\n    });\n    echo.stdout.on('data', (data: Buffer) => {\n      console.log(data.toString());\n    });\n  }\n  @Option({\n    flags: '-s, --shell <shell>',\n    description: 'A different shell to spawn than the default'\n  })\n  parseShell(val: string) {\n    return val;\n  }\n}\n")),(0,r.kt)("p",null,"And now the ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskRunner")," is setup and ready to be used."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The above command is meant to be a basic example, and should not be taken as a fully fleshed out CLI example. There's error handling, input validation, and security that should all be considered. Please do not use the above command in a production environment without adding the mentioned necessities ",(0,r.kt)("strong",{parentName:"p"},"at the very least"),".")))}u.isMDXComponent=!0}}]);