"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=r,m=f["".concat(u,".").concat(p)]||f[p]||g[p]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),u=n(91980),s=n(67392),c=n(50012);function f(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??f(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=g(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:n,groupId:a}),[f,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),d(e)}),[s,d,i]),tabValues:i}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),g=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==l&&(f(t),u(a))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:g},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=d(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},70723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>c,toc:()=>g});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),o=n(85162),l=n(52072);const u={title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",authors:["thomaspoignant"],tags:["GO Feature Flag","linter","lint"]},s="Lint your feature flag config in you CI/CD pipelines \u274c\u2705",c={permalink:"/blog/2023/02/20/lint-your-feature-flags",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-02-20-lint-your-feature-flags/index.mdx",source:"@site/blog/2023-02-20-lint-your-feature-flags/index.mdx",title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",description:"As GO Feature Flag continues to evolve, we're excited to announce a new feature that will make it easier for our users to manage their feature flags.",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"linter",permalink:"/blog/tags/linter"},{label:"lint",permalink:"/blog/tags/lint"}],readingTime:3.285,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",authors:["thomaspoignant"],tags:["GO Feature Flag","linter","lint"]},prevItem:{title:"Multiple Configuration Flags for GO Feature Flag \ud83d\uddc4\ufe0f",permalink:"/blog/2023/03/17/multiple-config-file"},nextItem:{title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",permalink:"/blog/2023/02/01/introducing-v1.0.0"}},f={authorsImageUrls:[void 0]},g=[{value:"Introducing <code>go-feature-flag-lint</code>",id:"introducing-go-feature-flag-lint",level:2},{value:"Configure your CI/CD pipelines",id:"configure-your-cicd-pipelines",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:g},m="wrapper";function d(e){let{components:t,...u}=e;return(0,r.kt)(m,(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," continues to evolve, we're excited to announce a new feature that will make it easier for our users to manage their feature flags.\nWe are introducing the ability to ",(0,r.kt)("strong",{parentName:"p"},"lint your feature flag configuration"),", which will help ensure that your feature flag configurations are correct and ",(0,r.kt)("strong",{parentName:"p"},"error-free"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"command line output",src:n(42263).Z,width:"1782",height:"566"})),(0,r.kt)("h2",{id:"introducing-go-feature-flag-lint"},"Introducing ",(0,r.kt)("inlineCode",{parentName:"h2"},"go-feature-flag-lint")),(0,r.kt)("p",null,"Managing feature flags can be challenging, especially when it comes to configuring them correctly.\nWith our new command line ",(0,r.kt)("a",{parentName:"p",href:"/docs/linter"},(0,r.kt)("inlineCode",{parentName:"a"},"go-feature-flag-lint")),", we are providing a tool that helps you avoid making mistakes in your feature flag configuration."),(0,r.kt)("p",null,"To use the feature flag configuration linting feature, simply run the command line, it will analyze your configuration to ensure that it is free of errors.\nIf there are any issues, ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," will provide you with a detailed report that identifies the problem to help you to fix it."),(0,r.kt)("p",null,"To get the maximum benefit from this feature, we recommend integrating it into your ",(0,r.kt)("strong",{parentName:"p"},"CI/CD pipelines")," to catch any issues before they make it to production."),(0,r.kt)("p",null,"The benefits of using our feature flag configuration linting feature, along with integrating it into your CI/CD pipelines, include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensuring that your feature flag configuration is correct, which will reduce the risk of issues and errors in your application."),(0,r.kt)("li",{parentName:"ul"},"Saving time and effort by automating the process of checking your feature flag configuration.")),(0,r.kt)("h2",{id:"configure-your-cicd-pipelines"},"Configure your CI/CD pipelines"),(0,r.kt)("p",null,"Integrating the feature flag configuration linting into your CI/CD pipeline is simple.\nFirst, you will need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," CLI tool, which can be used to run the linting process.\nNext, you can add a new step to your pipeline that runs the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," CLI tool to lint your feature flag configuration file."),(0,r.kt)("p",null,"If there are any issues detected, the CLI tool will exit with a non-zero status code, which will cause your pipeline to fail.\nBy integrating the feature flag configuration linting into your CI/CD pipeline, you can catch any issues with your feature flag configuration before it is deployed to production, reducing the risk of errors and issues."),(0,r.kt)("p",null,"Here's some examples of how to integrate the feature flag configuration linting into a CI/CD pipeline for popular CI/CD services:"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"githubaction",label:"Github Action",attributes:{className:l.Z.github},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: \"Build\"\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    types: [ opened, synchronize, reopened ]\n\njobs:\n  Lint:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v3\n\n      - name: Download go-feature-flag-lint\n        run: curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n\n      - name: Run go-feature-flag-lint\n        run: ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.yaml # please put the right file name\n"))),(0,r.kt)(o.Z,{value:"circleci",label:"CircleCi",attributes:{className:l.Z.circleci},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2.1\njobs:\n  build:\n    docker:\n     - image: cimg/base:2022.05\n\n    steps:\n      - checkout\n      - run: curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n      - run: ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.yaml # please put the right file name\n"))),(0,r.kt)(o.Z,{value:"gitlab",label:"Gitlab",attributes:{className:l.Z.gitlab},mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"image: ubuntu\nlint-job:\n  stage: build\n\n  before_script:\n    - apt-get -qq update\n    - apt-get install -y jq curl\n\n  script:\n    - curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n    - ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.yaml # please put the right file name\n")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We are thrilled to be introducing this new feature, which we believe will make a significant difference in how our users manage their feature flags. With the introduction of feature flag configuration linting, we are providing a tool that will make it easier for you to manage your feature flags and get the most out of GO Feature Flag."),(0,r.kt)("p",null,"If you have any questions about this feature or would like more information, please don't hesitate to get in touch with our support team. We're always here to help!"))}d.isMDXComponent=!0},52072:(e,t,n)=>{n.d(t,{Z:()=>a});const a={gitlab:"gitlab_mHAN",github:"github_WvKj",circleci:"circleci_0_Jr"}},42263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output-c9655f022f6bb296d6f3426a517b9148.png"}}]);