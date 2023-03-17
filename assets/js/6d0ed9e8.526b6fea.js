"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,f=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="S3 Exporter",l={unversionedId:"go_module/data_collection/s3",id:"version-v1.1.0/go_module/data_collection/s3",title:"S3 Exporter",description:"The S3 exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v1.1.0/go_module/data_collection/s3.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/s3",permalink:"/docs/v1.1.0/go_module/data_collection/s3",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.1.0/go_module/data_collection/s3.md",tags:[],version:"v1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Export data",permalink:"/docs/v1.1.0/go_module/data_collection/"},next:{title:"Google Cloud Storage Exporter",permalink:"/docs/v1.1.0/go_module/data_collection/google_cloud_storage"}},p={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-exporter"},"S3 Exporter"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"S3 exporter")," will collect the data and create a new file in a specific folder everytime we send the data."),(0,r.kt)("p",null,"Everytime the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory")," is reached a new file will be added to S3."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If for some reason the S3 upload failed, we will keep the data in memory and retry to add the next time we reach ",(0,r.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"export in S3 screenshot",src:n(30342).Z,width:"2224",height:"504"})),(0,r.kt)("p",null,"Check this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_s3"},"complete example")," to see how to export the data in S3."),(0,r.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &s3exporter.Exporter{\n            Format: "csv",\n            FileName: "flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}",\n            CsvTemplate: "{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n",\n            Bucket:    "my-bucket",\n            S3Path:    "/go-feature-flag/variations/",\n            Filename:  "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            AwsConfig: &aws.Config{\n               Region: aws.String("eu-west-1"),\n           },\n        },\n    },\n    // ...\n}\n')),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bucket ")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of your S3 Bucket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AwsConfig ")),(0,r.kt)("td",{parentName:"tr",align:null},"An instance of ",(0,r.kt)("inlineCode",{parentName:"td"},"aws.Config")," that configure your access to AWS ",(0,r.kt)("em",{parentName:"td"},"(see ",(0,r.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html"},"this documentation for more info"),")"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CsvTemplate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using another format than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go"},"internal/exporter/feature_event.go")," to see what are the fields available.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filename")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,r.kt)("br",null),"Available replacement are ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Hostname}}"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Timestamp}"),"} and ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Format}}"),(0,r.kt)("br",null),"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," Format is the output format you want in your exported file. Available format are ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"JSON"))," and ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"CSV")),". ",(0,r.kt)("em",{parentName:"td"},"(Default: ",(0,r.kt)("inlineCode",{parentName:"em"},"JSON"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S3Path ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," The location of the directory in S3.")))),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/s3exporter"},"godoc for full details"),"."))}u.isMDXComponent=!0},30342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/s3-exporter-b41d2e1b6de562b6a4fe26f78d5b7d83.png"}}]);