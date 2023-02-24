"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[58764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,h=c["".concat(u,".").concat(f)]||c[f]||p[f]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="Scheduled rollout",i={unversionedId:"rollout/scheduled",id:"version-v0.25.2/rollout/scheduled",title:"Scheduled rollout",description:"Scheduling introduces the ability for users to changes their flags for future points in time.",source:"@site/versioned_docs/version-v0.25.2/rollout/scheduled.md",sourceDirName:"rollout",slug:"/rollout/scheduled",permalink:"/docs/v0.25.2/rollout/scheduled",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/rollout/scheduled.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Progressive rollout",permalink:"/docs/v0.25.2/rollout/progressive"},next:{title:"Data format / Export data",permalink:"/docs/v0.25.2/data_collection/"}},u={},s=[{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3},{value:"Configuration fields",id:"configuration-fields",level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduled-rollout"},"Scheduled rollout"),(0,a.kt)("p",null,"Scheduling introduces the ability for users to changes their flags for future points in time.",(0,a.kt)("br",{parentName:"p"}),"\n","While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."),(0,a.kt)("p",null,"For example, you may want to turn a feature ON for internal testing tomorrow and then enable it for your \u2018beta\u2019 user segment four days later."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"yaml"},"YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'linenums="1" hl_lines="6-13"',linenums:'"1"',hl_lines:'"6-13"'},'scheduled-flag:\n  true: "B"\n  false: "A"\n  default: "Default"\n  # highlight-start\n  rollout:\n    scheduled:\n      steps:\n        - date: 2020-04-10T00:00:00.10+02:00\n          rule: beta eq "true"\n          percentage: 100\n        \n        - date: 2022-05-12T15:36:00.10+02:00\n          rule: beta eq "false"\n  # highlight-end\n')),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scheduled-flag": {\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    # highlight-start\n    "rollout": {\n      "scheduled": {\n        "steps": [\n          {\n            "date": "2020-04-09T22:00:00.100Z",\n            "rule": "beta eq \\"true\\"",\n            "percentage": 100\n          },\n          {\n            "date": "2022-05-12T13:36:00.100Z",\n            "rule": "beta eq \\"false\\""\n          }\n        ]\n      }\n    }\n  # highlight-end\n  }\n}\n')),(0,a.kt)("h3",{id:"toml"},"TOML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[scheduled-flag]\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n  # highlight-start\n  [scheduled-flag.rollout]\n\n    [scheduled-flag.rollout.scheduled]\n\n      [[scheduled-flag.rollout.scheduled.steps]]\n      date = 2020-04-09T22:00:00.100Z\n      rule = "beta eq \\"true\\""\n      percentage = 100.0\n\n      [[scheduled-flag.rollout.scheduled.steps]]\n      date = 2022-05-12T13:36:00.100Z\n      rule = "beta eq \\"false\\""\n  # highlight-end\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can change any fields that are available on your flag.",(0,a.kt)("br",{parentName:"p"}),"\n","Since your configuration has not been changed manually, it does not trigger any notifier.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"steps"))),(0,a.kt)("td",{parentName:"tr",align:null},"The only mandatory field in a ",(0,a.kt)("strong",{parentName:"td"},"step")," is the ",(0,a.kt)("inlineCode",{parentName:"td"},"date"),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"If no date is provided the step will be skipped."),(0,a.kt)("br",null),(0,a.kt)("br",null),"The other attributes of your ",(0,a.kt)("inlineCode",{parentName:"td"},"step")," are what you want to update your flag, so every field available in the ",(0,a.kt)("a",{parentName:"td",href:"../flag_format"},"flag format")," can be updated.",(0,a.kt)("br",null),"The new value in a field will override the existing one.")))))}p.isMDXComponent=!0}}]);