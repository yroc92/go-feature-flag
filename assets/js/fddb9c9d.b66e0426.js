"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[34926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),c=r,d=f["".concat(u,".").concat(c)]||f[c]||g[c]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:20,description:"Deploy the relay proxy and use the OpenFeature SDKs"},i="Using Open Feature SDKs",l={unversionedId:"getting_started/using-openfeature",id:"version-v1.10.2/getting_started/using-openfeature",title:"Using Open Feature SDKs",description:"Deploy the relay proxy and use the OpenFeature SDKs",source:"@site/versioned_docs/version-v1.10.2/getting_started/using-openfeature.md",sourceDirName:"getting_started",slug:"/getting_started/using-openfeature",permalink:"/docs/v1.10.2/getting_started/using-openfeature",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.2/getting_started/using-openfeature.md",tags:[],version:"v1.10.2",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"Deploy the relay proxy and use the OpenFeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"Using the GO module",permalink:"/docs/v1.10.2/getting_started/using-go-module"},next:{title:"Configure your feature flags",permalink:"/docs/v1.10.2/category/configure-your-feature-flags"}},u={},p=[{value:"Create a feature flag configuration",id:"create-a-feature-flag-configuration",level:2},{value:"Create a relay proxy configuration file",id:"create-a-relay-proxy-configuration-file",level:2},{value:"Install the relay proxy",id:"install-the-relay-proxy",level:2},{value:"Use Open Feature SDK",id:"use-open-feature-sdk",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Init your Open Feature client",id:"init-your-open-feature-client",level:3},{value:"Evaluate your flag",id:"evaluate-your-flag",level:3}],s={toc:p},f="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-open-feature-sdks"},"Using Open Feature SDKs"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OpenFeature provides a shared, standardized feature flagging client - ",(0,r.kt)("em",{parentName:"p"},"an SDK")," - which can be plugged into various 3rd-party feature flagging providers.\nWhether you're using an open-source system or a commercial product, whether it's self-hosted or cloud-hosted, OpenFeature provides a consistent, unified API for developers to use feature flagging in their applications.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://docs.openfeature.dev"},"Documentation")))),(0,r.kt)("p",null,"GO Feature Flag believe in ",(0,r.kt)("strong",{parentName:"p"},"OpenSource")," and ",(0,r.kt)("strong",{parentName:"p"},"standardization"),", this is the reason why we decided not implementing any custom SDK and rely only on ",(0,r.kt)("strong",{parentName:"p"},"Open Feature"),"."),(0,r.kt)("p",null,"To be compatible with Open Feature, ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," is providing a lightweight self-hosted API server ",(0,r.kt)("em",{parentName:"p"},"(called ",(0,r.kt)("a",{parentName:"em",href:"../category/use-the-relay-proxy"},"relay proxy"),")")," that is using the GO Feature Flag module internally.",(0,r.kt)("br",{parentName:"p"}),"\n","When the ",(0,r.kt)("strong",{parentName:"p"},"relay proxy")," is running in your infrastructure, you can use the ",(0,r.kt)("strong",{parentName:"p"},"Open Feature SDKs")," in combination with ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag providers")," to evaluate your flags. "),(0,r.kt)("p",null,"This schema is an overview on how ",(0,r.kt)("strong",{parentName:"p"},"Open Feature")," is working, you can have more information about all the concepts in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev"},"Open Feature documentation")),".\n",(0,r.kt)("img",{src:n(30156).Z,width:"1740",height:"574"})),(0,r.kt)("h2",{id:"create-a-feature-flag-configuration"},"Create a feature flag configuration"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML")," file containing your first flag configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flag-config.yaml"',title:'"flag-config.yaml"'},'# 20% of the users will use the variation "my-new-feature"\ntest-flag:\n  variations:\n    my-new-feature: true\n    my-old-feature: false\n  defaultRule:\n    percentage:\n      my-new-feature: 20\n      my-old-feature: 80\n')),(0,r.kt)("p",null,"This flag split the usage of this flag, 20% will use the variation ",(0,r.kt)("inlineCode",{parentName:"p"},"my-new-feature")," and 80% the variation ",(0,r.kt)("inlineCode",{parentName:"p"},"my-old-feature"),"."),(0,r.kt)("h2",{id:"create-a-relay-proxy-configuration-file"},"Create a relay proxy configuration file"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML")," file containing the configuration of your relay proxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="goff-proxy.yaml"',title:'"goff-proxy.yaml"'},"listen: 1031\npollingInterval: 1000\nstartWithRetrieverError: false\nretriever:\n  kind: file\n  path: /goff/flag-config.yaml\nexporter:\n  kind: log\n")),(0,r.kt)("h2",{id:"install-the-relay-proxy"},"Install the relay proxy"),(0,r.kt)("p",null,"And we will run the ",(0,r.kt)("strong",{parentName:"p"},"relay proxy")," locally to make the API available.",(0,r.kt)("br",{parentName:"p"}),"\n","The default port will be ",(0,r.kt)("inlineCode",{parentName:"p"},"1031"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Launch the container\ndocker run \\\n  -p 1031:1031 \\\n  -v $(pwd)/flag-config.yaml:/goff/flag-config.yaml \\\n  -v $(pwd)/goff-proxy.yaml:/goff/goff-proxy.yaml \\\n  thomaspoignant/go-feature-flag-relay-proxy:latest\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you don't want to use docker to install the ",(0,r.kt)("strong",{parentName:"em"},"relay proxy")," you can follow the ",(0,r.kt)("a",{parentName:"em",href:"/docs/v1.10.2/relay_proxy/install_relay_proxy"},"documentation")),"."),(0,r.kt)("h2",{id:"use-open-feature-sdk"},"Use Open Feature SDK"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In this example we are using the javascript SDK, but it is still relevant for all the languages"),"."),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n")),(0,r.kt)("h3",{id:"init-your-open-feature-client"},"Init your Open Feature client"),(0,r.kt)("p",null,"In your app initialization your have to create a client using the Open Feature SDK and initialize it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n")),(0,r.kt)("h3",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,r.kt)("p",null,"Now you can evaluate your flags anywhere in your code using this client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n  console.log(\"new feature\");\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n")))}g.isMDXComponent=!0},30156:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"}}]);