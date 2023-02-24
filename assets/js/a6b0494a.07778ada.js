"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[37015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="Experimentation rollout / A/B Testing",i={unversionedId:"rollout/experimentation",id:"version-v0.27.2/rollout/experimentation",title:"Experimentation rollout / A/B Testing",description:"An experimentation rollout is when your flag is configured to be served only for a determined time.",source:"@site/versioned_docs/version-v0.27.2/rollout/experimentation.md",sourceDirName:"rollout",slug:"/rollout/experimentation",permalink:"/docs/v0.27.2/rollout/experimentation",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.27.2/rollout/experimentation.md",tags:[],version:"v0.27.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Canary Release",permalink:"/docs/v0.27.2/rollout/canary"},next:{title:"Progressive rollout",permalink:"/docs/v0.27.2/rollout/progressive"}},p={},s=[{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"A/B testing",id:"ab-testing",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"experimentation-rollout--ab-testing"},"Experimentation rollout / A/B Testing"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"experimentation rollout")," is when your flag is configured to be served only for a determined time."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It means that before the rollout start date, the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," value is served to all users."),(0,a.kt)("li",{parentName:"ol"},"Between the dates the flag is evaluated."),(0,a.kt)("li",{parentName:"ol"},"After the end date the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," value is served to all users.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"yaml"},"YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'experimentation-flag:\n  percentage: 50\n  true: "B"\n  false: "A"\n  default: "Default"\n  # highlight-start\n  rollout:\n    experimentation:\n      start: 2021-03-20T00:00:00.10-05:00\n      end: 2021-03-21T00:00:00.10-05:00\n  # highlight-end\n')),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experimentation-flag": {\n    "percentage": 50,\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    // highlight-start\n    "rollout": {\n      "experimentation": {\n        "start": "2021-03-20 00:00:00 -0500",\n        "end": "2021-03-21 00:00:00 -0500"\n      }\n    },\n    // highlight-end\n  }\n}\n')),(0,a.kt)("h3",{id:"toml"},"TOML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[experimentation-flag]\npercentage = 50.0\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n\n# highlight-start\n[experimentation-flag.rollout]\n\n    [experimentation-flag.rollout.experimentation]\n    start = 2021-03-20T05:00:00.100Z\n    end = 2021-03-21T05:00:00.100Z\n# highlight-end\n')),(0,a.kt)("p",null,"Check this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/rollout_scheduled"},"example")," to see how it works. "),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The dates are in the format supported natively by your flag file format.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"start"))),(0,a.kt)("td",{parentName:"tr",align:null},"The date the flag will be started to be served.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"end"))),(0,a.kt)("td",{parentName:"tr",align:null},"The date the flag will be stopped to be served.")))),(0,a.kt)("h2",{id:"ab-testing"},"A/B testing"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A/B test is the shorthand for a simple controlled experiment.",(0,a.kt)("br",{parentName:"p"}),"\n","As the name implies, two versions (A and B) of a single variable are compared, which are identical except for one variation that might affect a user's behavior.",(0,a.kt)("br",{parentName:"p"}),"\n","A/B tests are widely considered the simplest form of controlled experiment."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"(source wikipedia)")))),(0,a.kt)("p",null,"To have a proper A/B testing solution with the module you should use the experimentation rollout combined with the ",(0,a.kt)("a",{parentName:"p",href:"../data_collection/"},"export of your data"),"."),(0,a.kt)("p",null,"This combination will allow to have your experimentation running for a dedicated time, and you will have the data to knows exactly which user was on which version of the flag."),(0,a.kt)("p",null,"To setup the duration of your A/B test you can use a tool ",(0,a.kt)("a",{parentName:"p",href:"https://vwo.com/tools/ab-test-duration-calculator/"},"ab-test-duration-calculator")," from vwo, that will help you to set up the test duration correctly."))}m.isMDXComponent=!0}}]);