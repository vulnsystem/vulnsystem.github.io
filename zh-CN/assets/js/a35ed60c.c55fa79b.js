"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4190],{99238:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(24246),i=(t(27378),t(40624)),s=t(41876),o=t(13415),c=t(64149),a=t(36712),d=t(52615);const u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function l({href:e,children:n}){return(0,r.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function m({href:e,icon:n,title:t,description:s}){return(0,r.jsxs)(l,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:t,children:[n," ",t]}),s&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function h({item:e}){const n=(0,s.LM)(e);return n?(0,r.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var t}function p({item:e}){const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var t;const i=(0,s.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);var o;return(0,r.jsx)(m,{href:e.href,icon:n,title:e.label,description:null!==(o=e.description)&&void 0!==o?o:null==i?void 0:i.description})}function g({item:e}){switch(e.type){case"link":return(0,r.jsx)(p,{item:e});case"category":return(0,r.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x({className:e}){const n=(0,s.jA)();return(0,r.jsx)(j,{items:n.items,className:e})}function j(e){const{items:n,className:t}=e;if(!n)return(0,r.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}({},e));const o=(0,s.MN)(n);return(0,r.jsx)("section",{className:(0,i.Z)("row",t),children:o.map(((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},n)))})}},12633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(24246),i=t(71670),s=t(99238);const o={slug:"/migration"},c="Upgrading Docusaurus",a={id:"migration/index",title:"Upgrading Docusaurus",description:"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.",source:"@site/versioned_docs/version-3.0.1/migration/index.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/zh-CN/docs/migration",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{slug:"/migration"},sidebar:"docs",previous:{title:"Client architecture",permalink:"/zh-CN/docs/advanced/client"},next:{title:"To Docusaurus v3",permalink:"/zh-CN/docs/migration/v3"}},d={},u=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus versioning is based on the ",(0,r.jsx)(n.code,{children:"major.minor.patch"})," scheme and respects ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:(0,r.jsx)(n.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(27378);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);