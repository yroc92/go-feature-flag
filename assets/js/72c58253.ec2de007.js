"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[83825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},g),{},{components:n})):r.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release"]},l=void 0,i={permalink:"/blog/2023/02/01/introducing-v1.0.0",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-01-introducing-v1.0.0/index.md",source:"@site/blog/2023-02-01-introducing-v1.0.0/index.md",title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",description:"GO Feature Flag logo",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"Open Feature",permalink:"/blog/tags/open-feature"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.895,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"GO Feature Flag owner",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release"]},prevItem:{title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",permalink:"/blog/2023/02/20/lint-your-feature-flags"},nextItem:{title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",permalink:"/blog/2022/07/01/feature-flags-devobs-podcast"}},u={authorsImageUrls:[void 0]},s=[],g={toc:s},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GO Feature Flag logo",src:n(72024).Z,width:"1531",height:"597"})),(0,a.kt)("h1",{id:"-announcing-go-feature-flag-v100-get-more-from-your-feature-flags"},"\ud83d\ude80 Announcing GO Feature Flag v1.0.0, get more from your feature flags"),(0,a.kt)("p",null,"We are so happy to finally announce that ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," v1.0.0 is released. \ud83c\udf89 \ud83e\udd73 \ud83d\ude80"),(0,a.kt)("p",null,"It was a long journey before this release but we are happy to propose you an even better experience with feature flags always keeping simplicity in mind and building a lightweight solution."),(0,a.kt)("p",null,"Our goal is still the same, we want you to experience the world of feature flags with a lightweight self-hosted solution."),(0,a.kt)("p",null,"With this new version you will now be able to enhance your usage of feature flagging with opening the creation of more complex and more advance toggles."))}c.isMDXComponent=!0},72024:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-34a26e8932ddeca9afc888ec3d0198a3.png"}}]);