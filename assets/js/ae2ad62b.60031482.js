(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[82992],{88770:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>X});var l=t(67294),r=t(87536),n=t(27778),i=t(52263);const s={flagContainer:"flagContainer_wy3i"};var c=t(87462),o=t(86010);const m={editorInputContainer:"editorInputContainer_jqCm",editorCut:"editorCut_Erbg",error:"error_AEli",editorPlaceholder:"editorPlaceholder_MvV8",editorInput:"editorInput_WHYK",errorMessage:"errorMessage_K08I"};var u=t(32866),d=t(45697),v=t.n(d);function p(e){let{label:a,displayText:t,className:n,required:i,type:s,validation:d,defaultValue:v,disablePlaceholder:p=!1,disableInlineErr:f=!1}=e;const{register:E}=(0,r.Gc)();return l.createElement("div",{className:(0,o.Z)(n||m.editorInputContainer)},l.createElement("input",(0,c.Z)({id:`${a}.input`,defaultValue:v,className:m.editorInput,type:"number"===s?"number":"text",placeholder:" "},E(a,{required:{value:i,message:"This field is required"},...d}))),p&&l.createElement("span",null,t),l.createElement("div",{className:m.editorCut}),l.createElement("label",{htmlFor:`${a}.input`,className:(0,o.Z)(m.editorPlaceholder)},t),!f&&l.createElement(u.B,{name:a,render:g}))}function g(e){let{message:a}=e;return l.createElement("div",{className:m.errorMessage},a)}p.propTypes={label:v().string.isRequired,displayText:v().string,className:v().string,required:v().bool,type:v().string,validation:v().object,defaultValue:v().any,disablePlaceholder:v().bool,disableInlineErr:v().bool};const f={container:"container_JzDm",switch:"switch_G9oQ",r:"r_b74C",layer:"layer_jPCr",knobs:"knobs_MQYY",checkbox:"checkbox_UUwg",displayText:"displayText_acVt"};function E(e){let{label:a,displayText:t,defaultChecked:n=!1}=e;const{register:i}=(0,r.Gc)();return l.createElement("div",{className:f.container},l.createElement("div",{className:(0,o.Z)(f.displayText)},t),l.createElement("div",null,l.createElement("div",{className:(0,o.Z)(f.switch,f.r)},l.createElement("input",(0,c.Z)({type:"checkbox",className:f.checkbox},i(a),{defaultChecked:n})),l.createElement("div",{className:f.knobs}),l.createElement("div",{className:f.layer}))))}E.propTypes={label:v().string.isRequired,displayText:v().string,defaultChecked:v().bool};const b={selector:"selector_zSAl"};function N(e){let{title:a,content:t,label:n,required:i}=e;const{register:s}=(0,r.Gc)();return l.createElement("div",{className:b.selector},l.createElement("select",(0,c.Z)({defaultValue:"0"},s(n,i)),l.createElement("option",{disabled:!0,defaultChecked:!0,value:null},a),t.map(((e,a)=>l.createElement("option",{value:e.value,key:`variation_type_${e.value}_${e.displayText}`},e.displayName)))))}N.propTypes={title:v().string,content:v().array,label:v().string.isRequired,required:v().bool};const y={buttonPlus:"buttonPlus_vxig",bg:"bg_ZMMU",variation:"variation_m8Hn",icons:"icons_NekN",icon:"icon_PBCB",targeting:"targeting_UFjj"};var h=t(55417),_=t(92949);const k={container:"container_SLwd"};function $(e){let{label:a}=e;const{register:t}=(0,r.Gc)(),{colorMode:n}=(0,_.I)(),{onChange:i,onBlur:s,name:c,ref:o}=t(`${a}.value`);return l.createElement("div",{className:k.container,"data-color-mode":n},l.createElement(h.Z,{value:"",language:"json",placeholder:" Please enter JSON.",padding:7,className:k.container,onChange:i,onBlur:s,name:c,ref:o,style:{fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"}}))}$.propTypes={label:v().string.isRequired};const x=["\ud83d\udfe2","\ud83d\udfe0","\ud83d\udd34","\ud83d\udfe3","\u26aa\ufe0f","\ud83d\udd35","\u26ab\ufe0f","\ud83d\udfe1","\ud83d\udfe4"];function q(e){let{type:a,label:t}=e;const{control:n}=(0,r.Gc)(),{fields:i,append:s,remove:c}=(0,r.Dq)({control:n,name:t,rules:{minLength:1}});function m(e){let{index:a}=e;c(a)}return l.createElement("div",null,l.createElement("h2",null,"Variations"),l.createElement("div",{className:"grid grid-pad"},i.map(((e,r)=>l.createElement(T,{type:a,key:e.id,label:`${t}.${r}`,index:r,remove:m,icon:x[r%x.length]})))),l.createElement("button",{className:y.buttonPlus,onMouseDown:()=>s({})},l.createElement("span",{className:"fa-stack fa-1x"},l.createElement("i",{className:(0,o.Z)("fa-solid fa-circle fa-stack-2x",y.bg)}),l.createElement("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"}))))}function T(e){let{type:a,label:t,remove:n,index:i,icon:s}=e;const{register:c}=(0,r.Gc)();return l.createElement("div",{className:y.variation},l.createElement("div",{className:(0,o.Z)("col-4-12 mobile-col-5-12",y.icons)},l.createElement("div",{className:y.icon},s),l.createElement(p,{displayText:"Name",label:`${t}.name`,register:c,required:!0})),l.createElement("div",{className:(0,o.Z)("col-6-12 mobile-col-7-12")},((e,a,t)=>e&&"JSON"===e.toUpperCase()?l.createElement($,{register:t,required:!0,label:a}):l.createElement(p,{displayText:"Flag Value",label:a,register:t,type:e,required:!0}))(a,t+".value",c)),l.createElement("div",{className:"col-1-12 mobile-col-1-12"},l.createElement("button",{className:y.buttonPlus,onMouseDown:e=>{e.preventDefault(),n(i)}},l.createElement("span",{className:"fa-stack fa-1x"},l.createElement("i",{className:(0,o.Z)("fa-solid fa-circle fa-stack-2x",y.bg)}),l.createElement("i",{className:"fa-solid fa-minus fa-stack-1x fa-inverse"})))))}q.propTypes={type:v().string,label:v().string.isRequired},T.propTypes={type:v().string,label:v().string.isRequired,remove:v().func.isRequired,index:v().number.isRequired,icon:v().string};const C={ruleContainer:"ruleContainer__VKe",ruleName:"ruleName_UKzC",circle:"circle_Gmme",inputQuery:"inputQuery_ajTA",ifContainer:"ifContainer_dti2",serveTitle:"serveTitle_zpaJ",serve:"serve_AhaS",percentageInput:"percentageInput_tEMG",dateInput:"dateInput_aE4X",percentageContainer:"percentageContainer_Mre8",error:"error_izBb",rolloutDesc:"rolloutDesc_kHMj",progressiveRollout:"progressiveRollout_x7nm",progressiveRolloutPercentage:"progressiveRolloutPercentage_qZik",formError:"formError_TtL5"};var V=t(39960),w=(t(61061),t(72933)),R=t(92305);function Z(e){let{variations:a,label:t,selectedVar:n=""}=e;const{register:i,watch:s}=(0,r.Gc)();return"percentage"!==n?null:l.createElement("div",{className:"grid-pad grid"},l.createElement("div",{className:(0,o.Z)("col-1-1",C.rolloutDesc)},"A percentage rollout means that your users are divided in different buckets and you serve different variations to them. Note that a user will always have the same variation."),l.createElement("div",{className:"col-1-2"},l.createElement("ul",{className:C.percentageContainer},a.map(((e,a)=>l.createElement("li",{key:`${t}.${e.name}`},l.createElement(p,{label:`${t}.${a}.value`,required:!0,defaultValue:0,type:"number",displayText:`%  ${x[a%x.length]} ${e.name}`,className:C.percentageInput,disablePlaceholder:!0,disableInlineErr:!0,validation:{valueAsNumber:!0,required:{value:!0,message:"Percentage field is required"},min:{value:0,message:"Percentage should be between 0 and 100"},max:{value:100,message:"Percentage should be between 0 and 100"}}}),l.createElement("input",(0,c.Z)({type:"hidden"},i(`${t}.${a}.name`),{value:e.name})))))),l.createElement(D,{percentages:s(t)})))}function D(e){let{percentages:a}=e;if(!a||!(0,w.isArray)(a)||a.length<=0)return null;const t=a.filter((e=>e&&!isNaN(e.value))).reduce(((e,a)=>e+a.value),0);return t>100?l.createElement("div",{className:C.error},"The total percentage cannot be more than 100%"):l.createElement(R.Progress,{percent:t})}Z.propTypes={variations:v().array,label:v().string.isRequired,selectedVar:v().string},D.propTypes={percentages:v().array};var P=t(96486),I=t.n(P),S=t(9198),F=t.n(S);function M(e){let{name:a,initialValue:t,label:n,variations:i,defaultDate:s}=e;const{register:c,control:m,formState:{errors:u}}=(0,r.Gc)();return l.createElement("div",null,l.createElement("div",{className:(0,o.Z)("grid",C.progressiveRollout)},l.createElement("div",null,a),l.createElement("div",null,l.createElement(r.Qr,{control:m,name:`${n}.date`,defaultValue:s,rules:{required:{value:!0,message:"Date field is required"}},render:e=>{let{field:a}=e;return l.createElement(F(),{className:C.dateInput,placeholderText:"Select date",showTimeSelect:!0,onChange:e=>a.onChange(e),selected:a.value,dateFormat:"Pp"})}})),l.createElement("div",null,"and serve"),l.createElement("div",null,l.createElement(N,{title:"Variation",content:i.map(((e,a)=>({value:e.name,displayName:`${x[a%x.length]} ${e.name}`}))).filter((e=>void 0!==e.value&&""!==e.value))||[],register:c,label:`${n}.selectedVar`,required:!0})),l.createElement("div",{className:C.progressiveRolloutPercentage},"to\xa0",l.createElement(p,{label:`${n}.percentage`,required:!0,defaultValue:t,type:"number",displayText:"%",className:C.percentageInput,disablePlaceholder:!0,disableInlineErr:!0,validation:{valueAsNumber:!0,min:{value:0,message:"Percentage should be between 0 and 100"},max:{value:100,message:"Percentage should be between 0 and 100"}}})),l.createElement("div",null,l.createElement(V.Z,{to:"/docs/configure_flag/rollout/progressive",target:"_blank"},l.createElement("i",{className:"fa-regular fa-circle-question"})))),l.createElement("div",null,l.createElement(G,{errors:u,label:n})))}function G(e,a){const t=I().get(e,a);return I().isNil(t)?null:l.createElement("ul",{className:C.formError},Object.keys(t).map((e=>l.createElement("li",{key:e},t[e].message))))}function j(e){let{variations:a,label:t,selectedVar:r}=e;if("progressive"!==r)return null;let n=new Date;return n=n.setDate(n.getDate()+10),l.createElement("div",{className:"grid grid-pad"},l.createElement("div",{className:(0,o.Z)("col-1-1",C.rolloutDesc)},"A progressive rollout allows you to increase the percentage of your flag over time.",l.createElement("br",null),"You can select a release ramp where the percentage of your flag will increase progressively between the start date and the end date."),l.createElement(M,{name:"Start on the",label:`${t}.initial`,variations:a,initialValue:0,defaultDate:new Date}),l.createElement(M,{name:"Stop on the",label:`${t}.end`,variations:a,initialValue:100,defaultDate:new Date(n)}))}function O(e){let{variations:a,label:t,isDefaultRule:n}=e;const{register:i,watch:s}=(0,r.Gc)(),c=[{value:"percentage",displayName:"\ufe0f\u2197\ufe0f a percentage rollout"},{value:"progressive",displayName:"\u2197\ufe0f a progressive rollout"}];return l.createElement("div",{className:(0,o.Z)("grid-pad grid",C.ruleContainer)},!n&&l.createElement("div",{className:"col-1-1"},l.createElement("div",{className:"content"},l.createElement(p,{label:`${t}.name`,displayText:"Rule name",className:(0,o.Z)(m.editorInputContainer,C.ruleName),required:!0}))),!n&&l.createElement("div",{className:(0,o.Z)("grid")},l.createElement("div",{className:"col-9-12"},l.createElement("div",{className:(0,o.Z)("content",C.inputQuery)},l.createElement("div",{className:C.ifContainer},l.createElement("div",{className:(0,o.Z)(C.circle)},"IF")),l.createElement(p,{label:`${t}.query`,displayText:"Query",required:!0}),l.createElement(V.Z,{to:"/docs/configure_flag/rule_format",target:"_blank"},l.createElement("i",{className:"fa-regular fa-circle-question"}))))),l.createElement("div",{className:"col-5-12"},l.createElement("div",{className:(0,o.Z)("content",C.serve)},l.createElement("div",{className:C.serveTitle},"Serve"),l.createElement(N,{title:"Variation",content:function(e){const a=function(e){return e.map(((e,a)=>({value:e.name,displayName:`${x[a%x.length]} ${e.name}`}))).filter((e=>void 0!==e.value&&""!==e.value))||[]}(e);return a.length>=2?[...a,...c]:a}(a),register:i,label:`${t}.selectedVar`,required:!0}))),l.createElement("div",{className:"col-1-1"},l.createElement(Z,{selectedVar:s(`${t}.selectedVar`),variations:a,label:`${t}.percentages`}),l.createElement(j,{selectedVar:s(`${t}.selectedVar`),variations:a,label:`${t}.progressive`})))}M.propTypes={name:v().string,initialValue:v().number,label:v().string.isRequired,variations:v().array,defaultDate:v().any},j.propTypes={variations:v().array,label:v().string.isRequired,selectedVar:v().string},O.propTypes={variations:v().array,label:v().string.isRequired,isDefaultRule:v().bool};const A={button:"button_Kroe",bg:"bg_rAJd",targeting:"targeting_TgyP",variation:"variation_eQWz",icons:"icons_PYIv",icon:"icon_fDeV"};function J(e){let{label:a,variations:t}=e;const{control:n}=(0,r.Gc)(),{fields:i,append:s,remove:c}=(0,r.Dq)({control:n,name:a}),m=e=>c(e);return l.createElement("div",null,l.createElement("h2",null,"Target specific users"),i.length<=0&&l.createElement("div",null,"Add Rule"),i.map(((e,r)=>l.createElement("div",{key:e.id,className:(0,o.Z)(A.targeting)},l.createElement(O,{variations:t,label:`${a}.${r}`,isDefaultRule:!1}),l.createElement("button",{className:A.button,onMouseDown:m},l.createElement("span",{className:"fa-stack fa-1x"},l.createElement("i",{className:(0,o.Z)("fa-solid fa-circle fa-stack-2x",A.bg)}),l.createElement("i",{className:"fa-solid fa-xmark fa-stack-1x fa-inverse"})))))),l.createElement("button",{className:A.button,onMouseDown:()=>s({name:`Rule ${i.length+1}`})},l.createElement("span",{className:"fa-stack fa-1x"},l.createElement("i",{className:(0,o.Z)("fa-solid fa-circle fa-stack-2x",A.bg)}),l.createElement("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"}))))}function L(e){let{label:a}=e;const{watch:t}=(0,r.Gc)();return l.createElement("div",{className:s.flagContainer},l.createElement("div",{className:"grid-pad grid"},l.createElement("div",{className:"col-6-12 mobile-col-1-2"},l.createElement(p,{displayText:"Flag Name",label:`${a}.flagName`,required:!0})),l.createElement("div",{className:"col-3-12 mobile-col-1-2"},l.createElement(E,{id:"disable",label:`${a}.disable`,displayText:"Disable"})),l.createElement("div",{className:"col-3-12 mobile-col-1-2"},l.createElement(E,{id:"disable",label:`${a}.trackEvents`,displayText:"Track event",defaultChecked:!0}))),l.createElement("div",{className:"grid-pad grid"},l.createElement("div",{className:(0,o.Z)("col-3-12 mobile-col-1-2")},l.createElement(N,{title:"Flag type",content:[{value:"boolean",displayName:"\u2611\ufe0f boolean"},{value:"string",displayName:"\ud83d\udd24 string"},{value:"number",displayName:"\ud83d\udd22 number"},{value:"json",displayName:"\ud83d\udda5 JSON"}],label:`${a}.type`,required:!0})),l.createElement("div",{className:(0,o.Z)("col-1-12","mobile-col-1-1")}),l.createElement("div",{className:"col-2-12 mobile-col-1-2"},l.createElement(p,{id:"version",label:`${a}.version`,displayText:"Version"}))),l.createElement(q,{label:`${a}.variations`,type:t(`${a}.type`)}),l.createElement(J,{label:`${a}.targeting`,variations:t(`${a}.variations`)}),l.createElement("div",null,l.createElement("h2",null,"Default"),l.createElement(O,{label:`${a}.defaultRule`,variations:t(`${a}.variations`),isDefaultRule:!0})))}J.propTypes={label:v().string.isRequired,variations:v().array},L.propTypes={label:v().string.isRequired};var Q=t(53951),z=t(38388),B=t(5022);const U={invalidForm:"invalidForm_J4Lp",space:"space_Hu3V"};function Y(e){function a(e,a){switch(a){case"json":try{return JSON.parse(e.value)}catch(t){return}case"number":return Number(e)||void 0;case"boolean":return"boolean"==typeof e?e:void 0!==e&&("string"==typeof e||e instanceof String)&&"true"===e.toLowerCase();default:return String(e)||void 0}}function t(e){let a,t,l;const{selectedVar:r}=e;switch(r){case"percentage":t={},e.percentages.forEach((e=>t[e.name]=e.value));break;case"progressive":l={initial:{variation:e.progressive.initial.selectedVar,percentage:e.progressive.initial.percentage||0,date:e.progressive.initial.date},end:{variation:e.progressive.end.selectedVar,percentage:e.progressive.end.percentage||100,date:e.progressive.end.date}};break;default:a=r}return{name:e.name||void 0,query:e.query,variation:a,percentage:t,progressiveRollout:l}}const l={};return e.GOFeatureFlagEditor.filter((e=>void 0!==e.flagName&&""!==e.flagName)).forEach((e=>l[e.flagName]=function(e){const l=e.type,r={};e.variations.filter((e=>void 0!==e.name&&""!==e.name&&void 0!==e.value&&""!==e.value)).forEach((e=>r[e.name]=a(e.value,l)));const n=e.targeting.map((e=>t(e))),i=a(e.trackEvents,"boolean"),s=a(e.disable,"boolean"),c=t(e.defaultRule);return{variations:r,disable:s||void 0,trackEvents:i?void 0:i,version:""===e.version?void 0:e.version,targeting:n.length>0?n:void 0,defaultRule:c}}(e))),l}function K(){return l.createElement("div",{className:U.invalidForm},"Error in your configuration, please review the form.")}function H(){const{watch:e,formState:{errors:a}}=(0,r.Gc)(),t=e(),n=a&&0===Object.keys(a).length&&Object.getPrototypeOf(a)===Object.prototype;return l.createElement("div",{className:"col-4-12"},!n&&l.createElement(K,null),n&&l.createElement(N,{title:"Format",content:[{value:"yaml",displayName:"YAML"},{value:"json",displayName:"JSON"},{value:"toml",displayName:"TOML"}],required:!1,label:"flagFormat"}),l.createElement("div",{className:U.space}),n&&l.createElement(Q.default,{className:"JSON"},function(e,a){switch(a){case"json":return JSON.stringify(e,null,2);case"toml":return B.stringify(e);default:return z.default.stringify(e,null,2)}}(Y(t),t.flagFormat)))}function W(){const e="GOFeatureFlagEditor",a=(0,r.cI)({mode:"onChange",defaultValues:{GOFeatureFlagEditor:[{flagName:"my-first-flag",variations:[{name:"Variation_1",value:!0},{name:"Variation_2",value:!1}],targeting:[],defaultRule:{}}]}}),{fields:t,append:n}=(0,r.Dq)({control:a.control,name:e,rules:{minLength:1}});return l.createElement("div",{className:"grid-pad grid"},l.createElement(r.RV,a,l.createElement("div",{className:"col-8-12"},l.createElement("form",{onSubmit:a.handleSubmit((e=>{e.preventDefault()}))},t.map(((a,t)=>l.createElement(L,{label:`${e}.${t}`,key:a.id}))),l.createElement("button",{className:A.button,onClick:e=>{e.preventDefault(),n({flagName:`new-flag-${t.length}`,variations:[{name:"Variation_1",value:!0},{name:"Variation_2",value:!1}],targeting:[],defaultRule:{}})}},l.createElement("span",{className:"fa-stack fa-1x"},l.createElement("i",{className:(0,o.Z)("fa-solid fa-circle fa-stack-2x",A.bg)}),l.createElement("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"})),"Add another flag"))),l.createElement(H,null)))}function X(){const{siteConfig:e}=(0,i.Z)();return l.createElement(n.Z,{title:`${e.title}`,description:"Description will go into a meta tag in <head />"},l.createElement(W,null))}},15101:()=>{},42116:()=>{},34904:()=>{},6918:()=>{},84819:()=>{},23197:()=>{},60996:()=>{}}]);