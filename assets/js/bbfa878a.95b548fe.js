"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[70820],{92503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),r=n(86010),i=n(95999),c=n(86668),o=n(39960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return l.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return l.createElement(t,(0,a.Z)({},m,{className:(0,r.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:n}),m.children,l.createElement(o.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},18568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(67294),l=n(52263),r=n(39960),i=n(95999),c=n(80143),o=n(69865),s=n(92503);const m=void 0;function d(){return a.createElement(i.Z,{id:"versionsPage.versionEntry.link"},"Documentation")}function u(){return a.createElement(i.Z,{id:"versionsPage.versionEntry.releaseNotes"},"Release Notes")}function E(){const{siteConfig:{organizationName:e,projectName:t}}=(0,l.Z)(),n=(0,c.gB)(m),E=(0,c.yW)(m),h=n.find((e=>"current"===e.name)),v=n.filter((e=>e!==E&&"current"!==e.name)),g=`https://github.com/${e}/${t}`;return a.createElement(o.Z,{title:"Versions",description:"GO Feature Flag Versions page listing all versions"},a.createElement("main",{className:"container margin-vert--lg"},a.createElement(s.Z,{as:"h1"},a.createElement(i.Z,{id:"versionsPage.title"},"GO Feature Flag documentation versions")),a.createElement("div",{className:"margin-bottom--lg"},a.createElement(s.Z,{as:"h3",id:"next"},a.createElement(i.Z,{id:"versionsPage.current.title"},"Current version (Stable)")),a.createElement("p",null,a.createElement(i.Z,{id:"versionsPage.current.description"},"Here you can find the documentation for current released version.")),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,E.label),a.createElement("td",null,a.createElement(r.Z,{to:E.path},a.createElement(d,null))),a.createElement("td",null,a.createElement(r.Z,{to:`${g}/releases/tag/${E.name}`},a.createElement(u,null))))))),h!==E&&a.createElement("div",{className:"margin-bottom--lg"},a.createElement(s.Z,{as:"h3",id:"latest"},a.createElement(i.Z,{id:"versionsPage.next.title"},"Next version (Unreleased)")),a.createElement("p",null,a.createElement(i.Z,{id:"versionsPage.next.description"},"Here you can find the documentation for work-in-process unreleased version.")),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,h.label),a.createElement("td",null,a.createElement(r.Z,{to:h.path},a.createElement(d,null))))))),v.length>0&&a.createElement("div",{className:"margin-bottom--lg"},a.createElement(s.Z,{as:"h3",id:"archive"},a.createElement(i.Z,{id:"versionsPage.archived.title"},"Past versions")),a.createElement("p",null,a.createElement(i.Z,{id:"versionsPage.archived.description"},"Here you can find documentation for previous versions of GO Feature Flag.")),a.createElement("table",null,a.createElement("tbody",null,v.map((e=>a.createElement("tr",{key:e.name},a.createElement("th",null,e.label),a.createElement("td",null,a.createElement(r.Z,{to:e.path},a.createElement(d,null))),a.createElement("td",null,a.createElement(r.Z,{href:`${g}/releases/tag/${e.name}`},a.createElement(u,null)))))))))))}}}]);