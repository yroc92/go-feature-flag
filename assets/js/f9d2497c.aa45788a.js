"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:21,description:"How to create a rule to target specific users"},i="How to target specific users",o={unversionedId:"configure_flag/rule_format",id:"version-v1.8.0/configure_flag/rule_format",title:"How to target specific users",description:"How to create a rule to target specific users",source:"@site/versioned_docs/version-v1.8.0/configure_flag/rule_format.md",sourceDirName:"configure_flag",slug:"/configure_flag/rule_format",permalink:"/docs/v1.8.0/configure_flag/rule_format",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.0/configure_flag/rule_format.md",tags:[],version:"v1.8.0",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"How to create a rule to target specific users"},sidebar:"tutorialSidebar",previous:{title:"How to configure a flag",permalink:"/docs/v1.8.0/configure_flag/flag_format"},next:{title:"Rollout strategies",permalink:"/docs/v1.8.0/category/rollout-strategies"}},p={},u=[{value:"Rule format",id:"rule-format",level:2},{value:"Format details",id:"format-details",level:3},{value:"Query format",id:"query-format",level:3},{value:"Examples",id:"examples",level:4},{value:"Environments",id:"environments",level:2}],d={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-target-specific-users"},"How to target specific users"),(0,r.kt)("h2",{id:"rule-format"},"Rule format"),(0,r.kt)("p",null,"A rule is a configuration that allows to serve a variation based on some conditions."),(0,r.kt)("h3",{id:"format-details"},"Format details"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"20%"},"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("br",null),(0,r.kt)("i",null,"(optional)")),(0,r.kt)("td",null,"Name of your rule.",(0,r.kt)("br",null),"This is needed when your are updating a rule using a ",(0,r.kt)("a",{href:"./rollout/scheduled"},"scheduled rollout"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"query")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Query represents an antlr query in the nikunjy/rules format.",(0,r.kt)("br",null),(0,r.kt)("b",null,"This field is mandatory in every rule used in the targeting field"),"."),(0,r.kt)("p",null,(0,r.kt)("i",null,"See ",(0,r.kt)("a",{href:"#query-format"},"query format")," to have the syntax.")),(0,r.kt)("p",null,(0,r.kt)("i",null,"Note: if you use the field ",(0,r.kt)("code",null,"query")," in a ",(0,r.kt)("code",null,"defaultRule")," it will be ignored.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"variation"),(0,r.kt)("br",null),(0,r.kt)("i",null,"(optional)")),(0,r.kt)("td",null,"Name of the variation to return.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"percentage"),(0,r.kt)("br",null),(0,r.kt)("i",null,"(optional)")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Represents the percentage we should give to each variation."),(0,r.kt)("pre",null,"percentage:",(0,r.kt)("br",null),"  variationA: 10.59",(0,r.kt)("br",null),"  variationB: 9.41",(0,r.kt)("br",null),"  variationC: 80"),(0,r.kt)("p",null,"The format is the name of the variation and the percentage for this one."),(0,r.kt)("p",null,(0,r.kt)("b",null,"Note: if your total is not equals to 100% this rule will be considered as invalid.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"progressiveRollout"),(0,r.kt)("br",null),(0,r.kt)("i",null,"(optional)")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Allow to ramp up the percentage of your flag over time."),(0,r.kt)("p",null,"You can decide at which percentage you starts with and at what percentage you ends with in your release ramp. Before the start date we will serve the initial percentage and, after we will serve the end percentage."),(0,r.kt)("p",null,(0,r.kt)("i",null,"See ",(0,r.kt)("a",{href:"./rollout/progressive"},"progressive rollout")," to have more info on how to use it.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"disable"),(0,r.kt)("br",null),(0,r.kt)("i",null,"(optional)")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Set to ",(0,r.kt)("code",null,"true")," if you want to disable the rule."),(0,r.kt)("p",null,(0,r.kt)("b",null,"Default:")," ",(0,r.kt)("code",null,"true"),"."))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"variation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"percentage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"progressiveRollout")," are optional but you ",(0,r.kt)("strong",{parentName:"p"},"must have one of the 3"),"."),(0,r.kt)("p",{parentName:"admonition"},"If you have more than one field we will use the first one in that order\n",(0,r.kt)("inlineCode",{parentName:"p"},"progressiveRollout")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"percentage")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"variation"),".")),(0,r.kt)("h3",{id:"query-format"},"Query format"),(0,r.kt)("p",null,"The rule format is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nikunjy/rules"},(0,r.kt)("inlineCode",{parentName:"a"},"nikunjy/rules"))," library."),(0,r.kt)("p",null,"All the operations can be written capitalized or lowercase (ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"eq")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EQ")," can be used).\nLogical Operations supported are ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),"."),(0,r.kt)("p",null,"Compare Expression and their definitions (",(0,r.kt)("inlineCode",{parentName:"p"},"a|b")," means you can use either one of the two ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"eq"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"equals to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ne"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"not equals to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"lt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},"less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"gt"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"le"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},"less than equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ge"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"co")),(0,r.kt)("td",{parentName:"tr",align:null},"contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sw")),(0,r.kt)("td",{parentName:"tr",align:null},"starts with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ew")),(0,r.kt)("td",{parentName:"tr",align:null},"ends with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"in")),(0,r.kt)("td",{parentName:"tr",align:null},"in a list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pr")),(0,r.kt)("td",{parentName:"tr",align:null},"present")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"not")),(0,r.kt)("td",{parentName:"tr",align:null},"not of a logical expression")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a specific user: ",(0,r.kt)("inlineCode",{parentName:"p"},'key eq "example@example.com"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select all identified users: ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous ne true"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a user with a custom property: ",(0,r.kt)("inlineCode",{parentName:"p"},'userId eq "12345"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select on multiple criteria:\n",(0,r.kt)("em",{parentName:"p"},"All users with ids finishing by ",(0,r.kt)("inlineCode",{parentName:"em"},"@test.com")," that have the role ",(0,r.kt)("inlineCode",{parentName:"em"},"backend engineer")," in the ",(0,r.kt)("inlineCode",{parentName:"em"},"pro")," environment for the\ncompany ",(0,r.kt)("inlineCode",{parentName:"em"},"go-feature-flag"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'(key ew "@test.com") and (role eq "backend engineer") and (env eq "pro") and (company eq "go-feature-flag")\n')))),(0,r.kt)("h2",{id:"environments"},"Environments"),(0,r.kt)("p",null,"When you initialise ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," you can set an ",(0,r.kt)("a",{parentName:"p",href:"../go_module/configuration/#option_environment"},"environment")," for the instance of this SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Init(ffclient.Config{\n    // ...\n    Environment:    "prod",\n    // ...\n})\n')),(0,r.kt)("p",null,"When an environment is set, it adds a new field in your user called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"env"))," that you can use in your queries.\nIt means that you can decide to activate a flag only for some ",(0,r.kt)("strong",{parentName:"p"},"environment"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of flag configuration based on the environment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'my-flag:\n  variations:\n    A: "A"\n    B: "B"\n    C: "C"\n  targeting:\n    - name: Target pre environment\n      query: env eq "pre"\n      variation: A\n    - name: Target pro environment\n      query: env eq "pro"\n      variation: B\n  defaultRule:\n    variation: C\n')))}m.isMDXComponent=!0}}]);