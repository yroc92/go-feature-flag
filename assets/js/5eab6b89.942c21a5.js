"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:4},i="Webhook Exporter",l={unversionedId:"go_module/data_collection/webhook",id:"version-v1.8.1/go_module/data_collection/webhook",title:"Webhook Exporter",description:"The Webhook exporter will collect the data and send them via an HTTP POST request to the specified endpoint.",source:"@site/versioned_docs/version-v1.8.1/go_module/data_collection/webhook.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/webhook",permalink:"/docs/v1.8.1/go_module/data_collection/webhook",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.1/go_module/data_collection/webhook.md",tags:[],version:"v1.8.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"File Exporter",permalink:"/docs/v1.8.1/go_module/data_collection/file"},next:{title:"Log Exporter",permalink:"/docs/v1.8.1/go_module/data_collection/log"}},p={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Webhook format",id:"webhook-format",level:2},{value:"Signature",id:"signature",level:2}],s={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhook-exporter"},"Webhook Exporter"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Webhook exporter")," will collect the data and send them via an HTTP POST request to the specified endpoint.\nEverytime the ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory")," is reached a new call is performed.  "),(0,o.kt)("p",null,"!!! Info\nIf for some reason the call failed, we will keep the data in memory and retry to add the next time we reach ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),"."),(0,o.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &webhookexporter.Exporter{\n            EndpointURL: " https://webhook.url/",\n            Secret:      "secret-for-signing",\n            Meta:        map[string]string{\n                "extraInfo": "info",\n            },\n        },\n    },\n    // ...\n}\n')),(0,o.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EndpointURL ")),(0,o.kt)("td",{parentName:"tr",align:null},"EndpointURL of your webhook")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Secret ")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)"),(0,o.kt)("br",null),"Secret used to sign your request body and fill the ",(0,o.kt)("inlineCode",{parentName:"td"},"X-Hub-Signature-256")," header.",(0,o.kt)("br",null),"See ",(0,o.kt)("a",{parentName:"td",href:"#signature"},"signature section")," for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Meta")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)"),(0,o.kt)("br",null),"Add all the information you want to see in your request.")))),(0,o.kt)("h2",{id:"webhook-format"},"Webhook format"),(0,o.kt)("p",null,"If you have configured a webhook, a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request will be sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"EndpointURL")," with a body in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "events": [\n        {\n            "kind": "feature",\n            "contextKind": "anonymousUser",\n            "userKey": "14613538188334553206",\n            "creationDate": 1618909178,\n            "key": "test-flag",\n            "variation": "Default",\n            "value": false,\n            "default": false\n        },\n        // ...\n    ]\n}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"This header ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"X-Hub-Signature-256"))," is sent if the webhook is configured with a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"secret")),".",(0,o.kt)("br",{parentName:"p"}),"\n","This is the ",(0,o.kt)("strong",{parentName:"p"},"HMAC hex digest")," of the request body, and is generated using the ",(0,o.kt)("strong",{parentName:"p"},"SHA-256")," hash function and the ",(0,o.kt)("strong",{parentName:"p"},"secret as the HMAC key"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The recommendation is to always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," and on your API/webhook always verify the signature key to be sure that you don't have a man in the middle attack.")))}c.isMDXComponent=!0}}]);