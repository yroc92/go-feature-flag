"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[24135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=s(r),u=o,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},y),{},{components:r})):n.createElement(f,i({ref:t},y))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:60,description:"Description of the available endpoints in the relay proxy."},i="Relay proxy endpoints",p={unversionedId:"relay_proxy/relay_proxy_endpoints",id:"version-v1.10.2/relay_proxy/relay_proxy_endpoints",title:"Relay proxy endpoints",description:"Description of the available endpoints in the relay proxy.",source:"@site/versioned_docs/version-v1.10.2/relay_proxy/relay_proxy_endpoints.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/relay_proxy_endpoints",permalink:"/docs/v1.10.2/relay_proxy/relay_proxy_endpoints",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.2/relay_proxy/relay_proxy_endpoints.md",tags:[],version:"v1.10.2",sidebarPosition:60,frontMatter:{sidebar_position:60,description:"Description of the available endpoints in the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Configure the relay proxy",permalink:"/docs/v1.10.2/relay_proxy/configure_relay_proxy"},next:{title:"Deploy the relay proxy",permalink:"/docs/v1.10.2/relay_proxy/deploy_relay_proxy"}},l={},s=[{value:"Swagger",id:"swagger",level:3},{value:"OpenAPI documentation",id:"openapi-documentation",level:2}],y={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relay-proxy-endpoints"},"Relay proxy endpoints"),(0,o.kt)("p",null,"The most updated documentation about the relay proxy endpoints is the Swagger docs ",(0,o.kt)("em",{parentName:"p"},"(see ",(0,o.kt)("a",{parentName:"em",href:"#swagger"},"Swagger section")," to see how to access to the documentation)"),"."),(0,o.kt)("h3",{id:"swagger"},"Swagger"),(0,o.kt)("p",null,"Swagger endpoint is serving a ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"swagger UI")," to test your REST endpoints.\nBy default, this endpoint is not exposed, you need to have this configuration in your ",(0,o.kt)("strong",{parentName:"p"},"relay proxy")," configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\nenableSwagger: true\nhost: my-proxy-domain.com # the DNS to access the proxy\n")),(0,o.kt)("p",null,"When enabled, you can go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/swagger/")," endpoint with your browser, and you will have access to the Swagger UI for the relay proxy. "),(0,o.kt)("h2",{id:"openapi-documentation"},(0,o.kt)("a",{parentName:"h2",href:"/API_relayproxy"},"OpenAPI documentation")),(0,o.kt)("p",null,"If you don't want to install the relay proxy to check the endpoints, you can go to this ",(0,o.kt)("a",{parentName:"p",href:"/API_relayproxy"},(0,o.kt)("strong",{parentName:"a"},"OpenAPI documentation"))," directly."))}d.isMDXComponent=!0}}]);