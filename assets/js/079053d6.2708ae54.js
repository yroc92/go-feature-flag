"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Custom exporter",l={unversionedId:"data_collection/custom",id:"version-v0.28.1/data_collection/custom",title:"Custom exporter",description:"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.",source:"@site/versioned_docs/version-v0.28.1/data_collection/custom.md",sourceDirName:"data_collection",slug:"/data_collection/custom",permalink:"/docs/v0.28.1/data_collection/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.28.1/data_collection/custom.md",tags:[],version:"v0.28.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export data",permalink:"/docs/v0.28.1/data_collection/"},next:{title:"File Exporter",permalink:"/docs/v0.28.1/data_collection/file"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-exporter"},"Custom exporter"),(0,o.kt)("p",null,"To create a custom exporter you must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that implements the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/internal/exporter#Exporter"},(0,o.kt)("inlineCode",{parentName:"a"},"exporter.Exporter"))," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Exporter interface {\n  // Export will send the data to the exporter.\n  Export(context.Context, *log.Logger, []exporter.FeatureEvent) error\n\n    // IsBulk return false if we should directly send the data as soon as it is produce\n    // and true if we collect the data to send them in bulk.\n    IsBulk() bool\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Export")," is called asynchronously with a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"exporter.FeatureEvent")," that have been collected.",(0,o.kt)("br",{parentName:"p"}),"\n","It is your responsibility to store them where you want."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IsBulk")," function should return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the exporter can handle the results in stream mode.",(0,o.kt)("br",{parentName:"p"}),"\n","If you decide to manage it in streaming mode, everytime we call a variation the ",(0,o.kt)("inlineCode",{parentName:"p"},"Export")," function will be called\nwith only on event in the list."))}u.isMDXComponent=!0}}]);