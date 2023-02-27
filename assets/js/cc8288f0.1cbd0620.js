"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[22545],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),g=r,d=m["".concat(l,".").concat(g)]||m[g]||f[g]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:20,description:"How to select who should have the flag activated."},i="Performing flag evaluations",s={unversionedId:"go_module/target_user",id:"version-v1.0.1/go_module/target_user",title:"Performing flag evaluations",description:"How to select who should have the flag activated.",source:"@site/versioned_docs/version-v1.0.1/go_module/target_user.md",sourceDirName:"go_module",slug:"/go_module/target_user",permalink:"/docs/v1.0.1/go_module/target_user",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.1/go_module/target_user.md",tags:[],version:"v1.0.1",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to select who should have the flag activated."},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/v1.0.1/go_module/configuration"},next:{title:"Retrieve your feature flags configuration",permalink:"/docs/v1.0.1/go_module/store_file/"}},l={},u=[{value:"Users",id:"users",level:2},{value:"Anonymous users",id:"anonymous-users",level:2},{value:"Variation",id:"variation",level:2},{value:"Get all flags for a specific user",id:"get-all-flags-for-a-specific-user",level:2}],p={toc:u},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"performing-flag-evaluations"},"Performing flag evaluations"),(0,r.kt)("h2",{id:"users"},"Users"),(0,r.kt)("p",null,"Feature flag targeting and rollouts are all determined by the user you pass to your ",(0,r.kt)("strong",{parentName:"p"},"Variation")," calls.\nThe SDK defines a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#User"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," struct and a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#UserBuilder"},(0,r.kt)("inlineCode",{parentName:"a"},"UserBuilder"))," to make this easy."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'// User with only a key\nuser1 := ffuser.NewUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n AddCustom("firstname", "John").\n AddCustom("lastname", "Doe").\n AddCustom("email", "john.doe@example.com").\n Build()\n')),(0,r.kt)("p",null,"The most common attribute is the user's key and ",(0,r.kt)("strong",{parentName:"p"},"this is the only mandatory user attribute."),(0,r.kt)("br",{parentName:"p"}),"\n","The key should also uniquely identify each user. You can use a primary key, an e-mail address, or a hash, as long as the same user always has the same key.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"We recommend using a hash if possible."),(0,r.kt)("br",{parentName:"p"}),"\n","All the other attributes are optional."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Custom attributes are one of the most powerful features.",(0,r.kt)("br",{parentName:"p"}),"\n","They let you have rules on these attributes and target users according to any data that you want.")),(0,r.kt)("h2",{id:"anonymous-users"},"Anonymous users"),(0,r.kt)("p",null,"You can also distinguish logged-in users from anonymous users in the SDK, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'// User with only a key\nuser1 := ffuser.NewAnonymousUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n  Anonymous(true).\n  AddCustom("firstname", "John").\n  AddCustom("lastname", "Doe").\n  AddCustom("email", "john.doe@example.com").\n  Build()\n')),(0,r.kt)("p",null,"You will still need to generate a unique key for anonymous users. Session IDs or UUIDs work best for this."),(0,r.kt)("p",null,"Anonymous users work just like regular users, this information just helps you to add a rule to target a specific population."),(0,r.kt)("h2",{id:"variation"},"Variation"),(0,r.kt)("p",null,"The Variation methods determine whether a flag is enabled or not for a specific user.\nThere is a Variation method for each type:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"BoolVariation"))," , ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"IntVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64Variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Float64Variation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"StringVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONArrayVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONVariation"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'result, _ := ffclient.BoolVariation("your.feature.key", user, false)\n\n// result is now true or false depending on the setting of\n// this boolean feature flag\n')),(0,r.kt)("p",null,"Variation methods take the feature ",(0,r.kt)("strong",{parentName:"p"},"flag key"),", a ",(0,r.kt)("strong",{parentName:"p"},"user"),", and a ",(0,r.kt)("strong",{parentName:"p"},"default value"),"."),(0,r.kt)("p",null,"The default value is return when an error is encountered ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"ffclient")," not initialized, variation with wrong type, flag does not exist ...).")),(0,r.kt)("p",null,"In the example, if the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"your.feature.key")," does not exists, result will be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Not that you will always have a usable value in the result. "),(0,r.kt)("h2",{id:"get-all-flags-for-a-specific-user"},"Get all flags for a specific user"),(0,r.kt)("p",null,"If you want to send the information about a specific user to a front-end, you will want a snapshot of all the flags for\nthis user at a specific time."),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"ffclient.AllFlagsState")," returns a snapshot of flag values and metadata.",(0,r.kt)("br",{parentName:"p"}),"\n","The function is evaluating all available flags for the user and return a ",(0,r.kt)("inlineCode",{parentName:"p"},"flagstate.AllFlagsState")," object containing the\ninformation you need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'user := ffuser.NewUser("example")\n// AllFlagsState will give you the value for all the flags available.\nallFlagsState := ffclient.AllFlagsState(u)\n\n// If you want to send it to a front-end you can Marshal it by calling MarshalJSON()\nforFE, err := allFlagsState.MarshalJSON()\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MarshalJSON()")," function will return something like bellow, that can be directly used by your front-end application. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'linenums="1"',linenums:'"1"'},'{\n    "flags": {\n        "test-flag0": {\n            "value": true,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag1": {\n            "value": "true",\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag2": {\n            "value": 1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag3": {\n            "value": [\n                "yo",\n                "ya"\n            ],\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag4": {\n            "value": {\n                "test": "yo"\n            },\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag5": {\n            "value": 1.1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": false\n        }\n    },\n    "valid": true\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is no tracking done when evaluating all the flag at once.")))}f.isMDXComponent=!0}}]);