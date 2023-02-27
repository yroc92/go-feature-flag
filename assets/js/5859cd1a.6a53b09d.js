"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[27258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=g(a),p=r,m=f["".concat(s,".").concat(p)]||f[p]||c[p]||n;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<n;g++)i[g]=a[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>g});var o=a(87462),r=(a(67294),a(3905));const n={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},i=void 0,l={unversionedId:"index",id:"version-v0.28.2/index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v0.28.2/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.28.2/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.28.2/index.md",tags:[],version:"v0.28.2",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/v0.28.2/quickstart"}},s={},g=[{value:"What is go-feature-flag?",id:"what-is-go-feature-flag",level:2}],u={toc:g},f="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/ci.yml"},(0,r.kt)("img",{src:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/ci.yml/badge.svg",alt:"Build Status"})),(0,r.kt)("a",{href:"https://coveralls.io/github/thomaspoignant/go-feature-flag"},(0,r.kt)("img",{src:"https://coveralls.io/repos/github/thomaspoignant/go-feature-flag/badge.svg",alt:"Coverage Status"})),(0,r.kt)("a",{href:"https://sonarcloud.io/dashboard?id=thomaspoignant_go-feature-flag"},(0,r.kt)("img",{src:"https://sonarcloud.io/api/project_badges/measure?project=thomaspoignant_go-feature-flag&metric=alert_status",alt:"Sonarcloud Status"})),(0,r.kt)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/codeql-analysis.yml"},(0,r.kt)("img",{src:"https://github.com/thomaspoignant/go-feature-flag/workflows/CodeQL/badge.svg",alt:"Build Status"})),(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/releases"},(0,r.kt)("img",{src:"https://img.shields.io/github/v/release/thomaspoignant/go-feature-flag",alt:"Release version"})),(0,r.kt)("a",{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag"},(0,r.kt)("img",{src:"https://godoc.org/github.com/thomaspoignant/go-feature-flag?status.svg",alt:"GoDoc"})),(0,r.kt)("img",{src:"https://img.shields.io/github/go-mod/go-version/thomaspoignant/go-feature-flag?logo=go%20version",alt:"Go version"}),(0,r.kt)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/LICENSE"},(0,r.kt)("img",{src:"https://img.shields.io/github/license/thomaspoignant/go-feature-flag",alt:"License"})),(0,r.kt)("a",{href:"https://github.com/avelino/awesome-go/#server-applications"},(0,r.kt)("img",{src:"https://awesome.re/mentioned-badge-flat.svg",alt:"Mentioned in Awesome Go"})),(0,r.kt)("a",{href:"https://gophers.slack.com/messages/go-feature-flag"},(0,r.kt)("img",{src:"https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=green",alt:"Join us on slack"}))),(0,r.kt)("h1",{id:"go-feature-flag"},"go-feature-flag"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Feature flags with no complex system to maintain!")),(0,r.kt)("h2",{id:"what-is-go-feature-flag"},"What is go-feature-flag?"),(0,r.kt)("p",null,"A simple and complete feature flag solution, without any complex backend system to install, all you need is a file as your backend."),(0,r.kt)("p",null,"No server is needed, just add a file to your central system and all your services will react to the changes in this file."),(0,r.kt)("p",null,"If you are not familiar with feature flags, also called feature Toggles, you can read this ",(0,r.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/articles/feature-toggles.html"},"article from Martin Fowler"),"\nwhere he explains why this is a great pattern."),(0,r.kt)("p",null,"I've also written an ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986"},"article")," that explains why feature flags can fasten your iteration cycle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"go-feature-flags supports:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storing your configuration flags file on various locations (",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_file/http"},(0,r.kt)("inlineCode",{parentName:"a"},"HTTP")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_file/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"S3")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_file/github"},(0,r.kt)("inlineCode",{parentName:"a"},"GitHub")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_file/file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")),")."),(0,r.kt)("li",{parentName:"ul"},"Configuring your flags in various ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_format"},"format")," (",(0,r.kt)("inlineCode",{parentName:"li"},"JSON"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TOML")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"YAML"),")."),(0,r.kt)("li",{parentName:"ul"},"Adding complex ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/flag_format#rule-format"},"rules")," to target your users."),(0,r.kt)("li",{parentName:"ul"},"Use complex rollout strategy for your flags :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/rollout/experimentation"},"Run A/B testing experimentation"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/rollout/progressive"},"Progressively rollout a feature"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/rollout/scheduled"},"Schedule your flag updates"),"."))),(0,r.kt)("li",{parentName:"ul"},"Exporting your flags usage data (",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/data_collection/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"s3")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/data_collection/log"},(0,r.kt)("inlineCode",{parentName:"a"},"log"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/data_collection/file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")),")."),(0,r.kt)("li",{parentName:"ul"},"Getting notified when a flag has been changed (",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/notifier/webhook"},(0,r.kt)("inlineCode",{parentName:"a"},"webhook"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.28.2/notifier/slack"},(0,r.kt)("inlineCode",{parentName:"a"},"slack")),").")))}c.isMDXComponent=!0}}]);