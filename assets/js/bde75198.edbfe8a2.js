"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[50904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=r,d=g["".concat(s,".").concat(p)]||g[p]||c[p]||i;return n?a.createElement(d,o(o({ref:t},f),{},{components:n})):a.createElement(d,o({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:10,description:"Use the module in your GO application with nothing to install."},o="Using the GO module",l={unversionedId:"getting_started/using-go-module",id:"version-v1.6.0/getting_started/using-go-module",title:"Using the GO module",description:"Use the module in your GO application with nothing to install.",source:"@site/versioned_docs/version-v1.6.0/getting_started/using-go-module.md",sourceDirName:"getting_started",slug:"/getting_started/using-go-module",permalink:"/docs/v1.6.0/getting_started/using-go-module",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.6.0/getting_started/using-go-module.md",tags:[],version:"v1.6.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Use the module in your GO application with nothing to install."},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/v1.6.0/category/getting-started"},next:{title:"Using Open Feature SDKs",permalink:"/docs/v1.6.0/getting_started/using-openfeature"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Create a feature flag configuration",id:"create-a-feature-flag-configuration",level:2},{value:"SDK Initialisation",id:"sdk-initialisation",level:2},{value:"Evaluate your flags",id:"evaluate-your-flags",level:2}],f={toc:u},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-go-module"},"Using the GO module"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/thomaspoignant/go-feature-flag\n")),(0,r.kt)("h2",{id:"create-a-feature-flag-configuration"},"Create a feature flag configuration"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML")," file containing your first flag configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flag-config.yaml"',title:'"flag-config.yaml"'},'# 20% of the users will use the variation "my-new-feature"\ntest-flag:\n  variations:\n    my-new-feature: true\n    my-old-feature: false\n  defaultRule:\n    percentage:\n      my-new-feature: 20\n      my-old-feature: 80\n')),(0,r.kt)("p",null,"This flag split the usage of this flag, 20% will use the variation ",(0,r.kt)("inlineCode",{parentName:"p"},"my-new-feature")," and 80% the variation ",(0,r.kt)("inlineCode",{parentName:"p"},"my-old-feature"),"."),(0,r.kt)("h2",{id:"sdk-initialisation"},"SDK Initialisation"),(0,r.kt)("p",null,"First, you need to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"ffclient")," with the location of your backend file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever:      &fileretriever.Retriever{\n        Path: "flag-config.yaml",\n    },\n})\ndefer ffclient.Close()\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This example will load a file from your local computer and will refresh the flags every 3 seconds (if you omit the\nPollingInterval, the default value is 60 seconds).")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a basic configuration to test locally, in production it is better to use a remote place to store your feature flag configuration file."),(0,r.kt)("p",{parentName:"admonition"},"Look at the list of available options in the ",(0,r.kt)("a",{parentName:"p",href:"../go_module/store_file/"},(0,r.kt)("strong",{parentName:"a"},"Store your feature flag file")," page"),".")),(0,r.kt)("h2",{id:"evaluate-your-flags"},"Evaluate your flags"),(0,r.kt)("p",null,"Now you can evaluate your flags anywhere in your code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'user := ffuser.NewUser("user-unique-key")\nhasFlag, _ := ffclient.BoolVariation("test-flag", user, false)\nif hasFlag {\n    // flag "test-flag" is true for the user\n} else {\n    // flag "test-flag" is false for the user\n}\n')),(0,r.kt)("p",null,"You can find more examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples"},"examples/")," directory."))}c.isMDXComponent=!0}}]);