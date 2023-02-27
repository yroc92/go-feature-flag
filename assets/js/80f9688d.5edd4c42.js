"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[43346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(u,".").concat(d)]||p[d]||c[d]||a;return r?o.createElement(m,i(i({ref:t},f),{},{components:r})):o.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1},i="Retrieve your feature flags configuration",l={unversionedId:"go_module/store_file/index",id:"go_module/store_file/index",title:"Retrieve your feature flags configuration",description:"The module supports different ways of retrieving the flag file.",source:"@site/docs/go_module/store_file/index.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/",permalink:"/docs/next/go_module/store_file/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/go_module/store_file/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performing flag evaluations",permalink:"/docs/next/go_module/target_user"},next:{title:"HTTP endpoint",permalink:"/docs/next/go_module/store_file/http"}},u={},s=[],f={toc:s},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retrieve-your-feature-flags-configuration"},"Retrieve your feature flags configuration"),(0,n.kt)("p",null,"The module supports different ways of retrieving the flag file.",(0,n.kt)("br",{parentName:"p"}),"\n","Available retriever are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/s3"},"S3 Bucket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/http"},"HTTP endpoint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/github"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/file"},"File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/kubernetes_configmaps"},"Kubernetes configmap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/go_module/store_file/google_cloud_storage"},"Google Cloud storage"))),(0,n.kt)("p",null,"To retrieve a file you need to provide a ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever"},"retriever")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"ffclient.Config{}")," during the initialization.",(0,n.kt)("br",{parentName:"p"}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/go_module/store_file/custom"},"custom retriever"),"."))}c.isMDXComponent=!0}}]);