"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(r),d=o,g=y["".concat(l,".").concat(d)]||y[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:60,description:"Description of the available endpoints in the relay proxy."},i="Relay proxy endpoints",p={unversionedId:"relay_proxy/relay_proxy_endpoints",id:"version-v1.0.1/relay_proxy/relay_proxy_endpoints",title:"Relay proxy endpoints",description:"Description of the available endpoints in the relay proxy.",source:"@site/versioned_docs/version-v1.0.1/relay_proxy/relay_proxy_endpoints.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/relay_proxy_endpoints",permalink:"/docs/relay_proxy/relay_proxy_endpoints",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.1/relay_proxy/relay_proxy_endpoints.md",tags:[],version:"v1.0.1",sidebarPosition:60,frontMatter:{sidebar_position:60,description:"Description of the available endpoints in the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Configure the relay proxy",permalink:"/docs/relay_proxy/configure_relay_proxy"},next:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/migrate_v0_v1"}},l={},s=[{value:"Swagger",id:"swagger",level:3},{value:"OpenAPI documentation",id:"openapi-documentation",level:2}],c={toc:s},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relay-proxy-endpoints"},"Relay proxy endpoints"),(0,o.kt)("p",null,"The most updated documentation about the relay proxy endpoints is the Swagger docs ",(0,o.kt)("em",{parentName:"p"},"(see ",(0,o.kt)("a",{parentName:"em",href:"#swagger"},"Swagger section")," to see how to access to the documentation)"),"."),(0,o.kt)("h3",{id:"swagger"},"Swagger"),(0,o.kt)("p",null,"Swagger endpoint is serving a ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"swagger UI")," to test your REST endpoints.\nBy default, this endpoint is not exposed, you need to have this configuration in your ",(0,o.kt)("strong",{parentName:"p"},"relay proxy")," configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\nenableSwagger: true\nhost: my-proxy-domain.com # the DNS to access the proxy\n")),(0,o.kt)("p",null,"When enabled, you can go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/swagger/")," endpoint with your browser, and you will have access to the Swagger UI for the relay proxy. "),(0,o.kt)("h2",{id:"openapi-documentation"},(0,o.kt)("a",{parentName:"h2",href:"/API_relayproxy"},"OpenAPI documentation")),(0,o.kt)("p",null,"If you don't want to install the relay proxy to check the endpoints, you can go to this ",(0,o.kt)("a",{parentName:"p",href:"/API_relayproxy"},(0,o.kt)("strong",{parentName:"a"},"OpenAPI documentation"))," directly."))}u.isMDXComponent=!0}}]);