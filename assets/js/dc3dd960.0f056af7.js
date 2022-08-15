"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[996],{7942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(2081),o=n(4604),i=(n(959),n(7942)),r=["components"],l={title:"Execution and Publishinig",sidebar_label:"Execution and Publishing"},s=void 0,c={unversionedId:"executing/local",id:"executing/local",title:"Execution and Publishinig",description:"Before Running",source:"@site/docs/executing/local.md",sourceDirName:"executing",slug:"/executing/local",permalink:"/docs/executing/local",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/executing/local.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1660498634,formattedLastUpdatedAt:"Aug 14, 2022",frontMatter:{title:"Execution and Publishinig",sidebar_label:"Execution and Publishing"},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/schematics/usage"},next:{title:"API",permalink:"/docs/api"}},p={},d=[{value:"Before Running",id:"before-running",level:2},{value:"Local Execution (Using Node)",id:"local-execution-using-node",level:2},{value:"Local Execution (Without Node explicitly)",id:"local-execution-without-node-explicitly",level:3},{value:"Nest CLI",id:"nest-cli",level:2},{value:"Ts-Node",id:"ts-node",level:2},{value:"Packaging the CLI",id:"packaging-the-cli",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"before-running"},"Before Running"),(0,i.kt)("p",null,"To execute the command locally, whether for testing, prototyping, or just every day use without a package install, you first need to build the application from the Typescript code to JavaScript so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," processor can handle the code properly. You can use any method of compilation you find preferable, Typescript's ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs/cli"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"esbuild")),", ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"swc")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack"),". Just make sure that the compiler understands and can handle decorators, and the output code is transpiled correctly."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You do not need to compile the code if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),", but make sure that decorators are still taken into account.")),(0,i.kt)("h2",{id:"local-execution-using-node"},"Local Execution (Using Node)"),(0,i.kt)("p",null,"Once the code is compiled, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," to kick of the command using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"node ./dist/main [args] [options]\n")),(0,i.kt)("p",null,"This does make use of the packages locally installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", but other than that there's nothing fancy necessary."),(0,i.kt)("h3",{id:"local-execution-without-node-explicitly"},"Local Execution (Without Node explicitly)"),(0,i.kt)("p",null,"You can also add a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shebang_(Unix)"},"shebang")," to the top of your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," and make the file executable by using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chmod"},"chmod"),", then just use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./dist/main [args] [options]\n")),(0,i.kt)("p",null,"but this generally is not necessary to do."),(0,i.kt)("h2",{id:"nest-cli"},"Nest CLI"),(0,i.kt)("p",null,"You can also use the Nest CLI to build and start the command. It is advised, however, to not do this unless you are only using a default command wth no options and no arguments, as the Nest CLI does not pass on extra flags to the underlying command being ran."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nest start --watch\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," is great for the auto restart during dev mode with no args, but it is not the advised way to run the command."),(0,i.kt)("h2",{id:"ts-node"},"Ts-Node"),(0,i.kt)("p",null,"If you don't feel like compiling the application every time you make a small change, or don't want to set up a file watcher to watch for you, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-node"))," to start up the command. Just like with the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," variants, you just need to pass the main path to the command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ts-node src/main.ts [args] [options]\n# OR is ts-node is not installed globally\nnpx|yarn|pnpm ts-node src/main.ts [args] [options]\n")),(0,i.kt)("h2",{id:"packaging-the-cli"},"Packaging the CLI"),(0,i.kt)("p",null,"The last option, and probably the most useful one, is using a package manager to distribute the CLI via an npm package. You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and give your CLI a name along with a path to the main file and on installation npm will set up the path in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," if a local install or the global ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable for a global package install. If we take the ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," application we've made so far, we can set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "crun",\n  "description": "A command line runner using nest-commander",\n  "bin": {\n    "crun": "dist/main"\n  },\n  "scripts": {\n    "build": "nest build"\n  },\n  "dependencies": {\n    "@nestjs/common": "^7.0.0",\n    "@nestjs/core": "^7.0.0",\n    "nest-commander": "^1.2.0"\n  },\n  "devDependencies": {\n    "@nestjs/cli": "^7.0.0",\n    "@nestjs/schematics": "^7.0.0",\n    "@nestjs/testing": "^7.0.0",\n    "jest": "^26.0.0",\n    "nest-commander-schematics": "^1.1.0",\n    "nest-commander-testing": "^1.1.0",\n    "typescript": "^4.3.0"\n  }\n}\n')),(0,i.kt)("p",null,"Now if we were to publish this package and someone were to install it, the ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," command would be available either globally via a global install, so ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," could be used on the command line directly, or locally via a local install, so ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," could be used in a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," script or using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx/yarn/pnpm"),"."))}m.isMDXComponent=!0}}]);