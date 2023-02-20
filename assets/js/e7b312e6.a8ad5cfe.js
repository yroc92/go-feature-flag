"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,v=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Custom Retriever",l={unversionedId:"flag_file/custom",id:"version-v0.26.1/flag_file/custom",title:"Custom Retriever",description:"To create a custom retriever you must have a struct that implements the Retriever interface.",source:"@site/versioned_docs/version-v0.26.1/flag_file/custom.md",sourceDirName:"flag_file",slug:"/flag_file/custom",permalink:"/docs/v0.26.1/flag_file/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.26.1/flag_file/custom.md",tags:[],version:"v0.26.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Where to store my file?",permalink:"/docs/v0.26.1/flag_file/"},next:{title:"File",permalink:"/docs/v0.26.1/flag_file/file"}},c={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-retriever"},"Custom Retriever"),(0,o.kt)("p",null,"To create a custom retriever you must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that implements the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever"},(0,o.kt)("inlineCode",{parentName:"a"},"Retriever"))," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},"type Retriever interface {\n    Retrieve(ctx context.Context) ([]byte, error)\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Retrieve")," \tfunction is supposed to load the file and to return a []byte of your flag configuration file."),(0,o.kt)("p",null,"If you want to specify the format of the file, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ffclient.Config.FileFormat")," option to specify if it is\na ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"TOML")," file."),(0,o.kt)("p",null,"You can check existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Retriever")," ",(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/fileretriever/retriever.go"},"file"),",\n",(0,o.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/s3retriever/retriever.go"},"s3"),", ...)")," to have an idea on how to do build your own."))}f.isMDXComponent=!0}}]);