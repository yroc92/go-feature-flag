"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[12588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(a),p=o,h=g["".concat(i,".").concat(p)]||g[p]||f[p]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[g]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},22949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={slug:"automate-your-product-release-cycles-using-go-feature-flag",title:"Automate Your Product Release Cycles Using Go Feature Flag",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},l=void 0,u={permalink:"/blog/automate-your-product-release-cycles-using-go-feature-flag",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md",source:"@site/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md",title:"Automate Your Product Release Cycles Using Go Feature Flag",description:"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.",date:"2021-05-26T00:00:00.000Z",formattedDate:"May 26, 2021",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"v0.x.x",permalink:"/blog/tags/v-0-x-x"}],readingTime:4.42,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"GO Feature Flag owner",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{slug:"automate-your-product-release-cycles-using-go-feature-flag",title:"Automate Your Product Release Cycles Using Go Feature Flag",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},prevItem:{title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",permalink:"/blog/2022/07/01/feature-flags-devobs-podcast"},nextItem:{title:"Introduction blog post",permalink:"/blog/introduction-blog-post"}},i={authorsImageUrls:[void 0]},s=[{value:"How To Use go-feature-flag",id:"how-to-use-go-feature-flag",level:2},{value:"Progressive Rollout",id:"progressive-rollout",level:2},{value:"Scheduling Workflows",id:"scheduling-workflows",level:2},{value:"Experimentation Rollout",id:"experimentation-rollout",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},g="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1615).Z,width:"6000",height:"4000"})),(0,o.kt)("p",null,"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging."),(0,o.kt)("p",null,"While it seems easy to launch something new, a poorly executed rollout can end up being your worst nightmare."),(0,o.kt)("p",null,"In this article, I will present to you how to use the Go module go-feature-flag to roll out your new features smoothly and help you be confident during the rollout phase. If you are not familiar with the concept of feature flags or feature toggles, I encourage you to read this ",(0,o.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/articles/feature-toggles.html"},"article by Martin Fowler"),"."),(0,o.kt)("p",null,"go-feature-flag is a Go module to easily manage your flags. You can refer to this article I wrote a few months ago to understand how it works."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use-go-feature-flag"},"How To Use go-feature-flag"),(0,o.kt)("p",null,"The library is super simple to use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the module:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go get github.com/thomaspoignant/go-feature-flag\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Init the client with the location of your configuration file for your flags:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := ffclient.Init(ffclient.Config{\n    PollInterval: 60,\n    Retriever: &ffclient.HTTPRetriever{\n        URL:    "http://example.com/flag-config.yaml",\n    },\n})\ndefer ffclient.Close()\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Put your new features conditionally based on the flag value:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'user := ffuser.NewUser("user-unique-key")\nhasFlag, _ := ffclient.BoolVariation("test-flag", user, false)\nif hasFlag {\n    // flag "test-flag" is true for the user\n} else {\n    // flag "test-flag" is false for the user\n}\n')),(0,o.kt)("p",null,"You can have way more configuration, but I\u2019ll let you check the ",(0,o.kt)("a",{parentName:"p",href:"https://thomaspoignant.github.io/go-feature-flag/"},"documentation")," for that."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"progressive-rollout"},"Progressive Rollout"),(0,o.kt)("p",null,"When you release a new feature that can have a strong impact on your system, you probably don\u2019t want to go all-in with this new feature for all your users."),(0,o.kt)("p",null,"For example, you are deploying something that can be CPU-consuming and you want to have time to check if your servers handle it correctly. This is typically a great use case for a progressive rollout."),(0,o.kt)("p",null,"It progressively increases how many users are impacted by your feature flag to avoid a big-bang rollout for all your users at once. During that time, it allows you to monitor your system and be confident that your infrastructure can handle this new load."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"progressive-flag:\n  true: true\n  false: false\n  default: false\n  rollout:\n    progressive:\n      percentage:\n        initial: 0\n        end: 100\n      releaseRamp:\n        start: 2021-03-20T00:00:00.10-05:00\n        end: 2021-03-21T00:00:00.10-05:00\n")),(0,o.kt)("p",null,"To do that in go-feature-flag, you will configure your flag like in the example above. You set up a progressive rollout with an initial percentage value and a release ramp. Over time, more and more users can be affected by the flag and will have the new feature."),(0,o.kt)("p",null,"Depending on how critical this feature is, you can have a long or a short release ramp. If something goes wrong, you can edit your flag to stop the rollout at any time."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"scheduling-workflows"},"Scheduling Workflows"),(0,o.kt)("p",null,"Scheduling introduces the ability for users to change their flags for future points in time. While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."),(0,o.kt)("p",null,"For example, you may want to turn a feature on for internal testing tomorrow and then enable it for your \u201cbeta\u201d user segment four days later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'scheduled-flag:\n  true: true\n  false: false\n  default: false\n  percentage: 0\n  rollout:\n    scheduled:\n      steps:\n        - date: 2020-04-10T00:00:00.00+02:00\n          rule: internal eq true\n          percentage: 100        - date: 2020-04-14T00:00:00.00+02:00\n          rule: internal eq true and beta eq true        - date: 2020-04-18T00:00:00.00+02:00\n          rule: ""\n')),(0,o.kt)("p",null,"In this example, you can see that we are updating the flag multiple times to perform actions in the future. Let\u2019s detail what will happen in this configuration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Before ",(0,o.kt)("inlineCode",{parentName:"li"},"2020\u201304\u201310"),", the flag is not served."),(0,o.kt)("li",{parentName:"ol"},"After the first update of the flag (",(0,o.kt)("inlineCode",{parentName:"li"},"2020\u201304\u201310"),"), we have 100% of the internal users who received the flag as true."),(0,o.kt)("li",{parentName:"ol"},"Four days later, we add the users who have a ",(0,o.kt)("inlineCode",{parentName:"li"},"bet"),"a flag as ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ol"},"Finally, four days later, we open the feature to all users.")),(0,o.kt)("p",null,"As you can see, this is really powerful because your release management is now ready without doing any manual deployment/action, and this scheduling can be done by a non-technical user (aka your product manager)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"experimentation-rollout"},"Experimentation Rollout"),(0,o.kt)("p",null,"Sometimes you also want to experiment, collect the data, and decide later if you want to roll out the feature to all your users."),(0,o.kt)("p",null,"To do that correctly, you can configure your flag with a start date and an end date for a subset of your users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'experimentation-flag:\n  percentage: 50\n  true: true\n  false: false\n  default: false\n  rule: userId sw "9"\n  rollout:\n    experimentation:\n      start: 2021-03-20T00:00:00.10-05:00\n      end: 2021-03-21T00:00:00.10-05:00\n')),(0,o.kt)("p",null,"In this example, 50% of your users with a userId that starts with 9 will be impacted by the flag between the start and the end dates of the experimentation."),(0,o.kt)("p",null,"With the module, you can also collect the data of your variation (see the ",(0,o.kt)("a",{parentName:"p",href:"https://thomaspoignant.github.io/go-feature-flag/data_collection/"},"documentation")," for more info) to join them with the data of what you are testing."),(0,o.kt)("p",null,"So you can see the results of your experimentation and decide whether you want to roll out this flag for real or not."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Using feature flags really is a great thing, but it becomes even better if you use some advanced rollout strategies."),(0,o.kt)("p",null,"If you start using them, you will love it because you decouple the deployment and the release and you can have fine-grained control over what your users can do."))}f.isMDXComponent=!0},1615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/head-fde6026d2dea516f2cc2afbb10cf20c4.jpg"}}]);