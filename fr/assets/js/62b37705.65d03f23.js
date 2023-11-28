"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8901],{61132:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(24246),o=(r(27378),r(40624));const c={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(24246),o=r(27378),c=r(40624),s=r(75527),a=r(3620),i=r(44479),l=r(62821),u=r(52196),d=r(53589);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function f(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function y(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return f(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,l._X)(n),s=(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[c,s]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,c=y(e),[s,a]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[l,u]=h({queryString:r,groupId:n}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),f=(()=>{const e=null!=l?l:p;return m({value:e,tabValues:c})?e:null})();(0,i.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,c]),tabValues:c}}var g=r(29088);const O={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function P({className:e,block:t,selectedValue:r,selectValue:o,tabValues:a}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),c=a[n].value;c!==r&&(l(t),o(c))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:a.map((({value:e,label:t,attributes:o})=>(0,n.jsx)("li",w(x({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:r}){const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=c.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=j(e);return(0,n.jsxs)("div",{className:(0,c.Z)("tabs-container",O.tabList),children:[(0,n.jsx)(P,x({},e,t)),(0,n.jsx)(k,x({},e,t))]})}function C(e){const t=(0,g.Z)();return(0,n.jsx)(S,w(x({},e),{children:f(e.children)}),String(t))}},94544:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246),o=(r(27378),r(29088));function c({children:e,fallback:t}){return(0,o.Z)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},87048:(e,t,r)=>{r.d(t,{CW:()=>y,FS:()=>v,Fr:()=>m,Hc:()=>x,I1:()=>b,SR:()=>f,UM:()=>O,Zl:()=>j,mC:()=>d,mq:()=>g,rv:()=>w});var n=r(24246),o=r(27378),c=r(32054),s=r(92053),a=r(36712),i=r(13415),l=r(38112);const u=o.createContext(null);function d({children:e}){const[t,r]=(0,o.useState)(null),c=(0,o.useRef)(!0);return(0,o.useEffect)((()=>(c.current=!0,()=>{c.current=!1})),[]),(0,o.useEffect)((()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then((e=>e.json())).then((e=>{if(!c.current)return;const t=Object.keys(e.versions).at(-1),n=e.time[t];r({name:t,time:n})}))}),[]),(0,n.jsx)(u.Provider,{value:t,children:e})}function p(){var e;const t=null===(e=(0,c.J)("default").preferredVersion)||void 0===e?void 0:e.name,r=(0,s.gB)("default");var n;const o=(null!==(n=r.find((e=>"current"!==e.name)))&&void 0!==n?n:r[0]).name;return t&&"current"!==t?t:o}function b(){const e=(0,o.useContext)(u);return e?(0,n.jsx)("span",{children:(0,n.jsx)(a.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,n.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,n.jsx)("span",{children:(0,n.jsx)(a.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function f(){const e=p();return(0,n.jsx)("span",{children:e})}function y(){return(0,n.jsx)("span",{children:3})}function m(){return(0,n.jsx)("span",{children:2})}function h({branch:e}){return(0,n.jsx)(i.Z,{to:`https://github.com/facebook/docusaurus/tree/${e}`,children:(0,n.jsx)("code",{children:e})})}function j(){return(0,n.jsx)(h,{branch:"docusaurus-v2"})}function g(){return(0,n.jsx)(h,{branch:"main"})}function O({children:e}){return(0,o.useContext)(u)?null:e}function v({children:e}){return(0,o.useContext)(u)?e:null}function x(){var e,t;const r=null!==(t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.name)&&void 0!==t?t:"0.0.0-4922",c=p();return(0,n.jsx)(l.Z,{language:"diff",children:`-  "@docusaurus/core": "^${c}",\n-  "@docusaurus/preset-classic": "^${c}",\n+  "@docusaurus/core": "${r}",\n+  "@docusaurus/preset-classic": "${r}",\n`})}function w(){var e;const t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.time;return t?(0,n.jsx)(a.Z,{values:{time:(0,n.jsx)("b",{children:new Date(t).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},38112:(e,t,r)=>{r.d(t,{Z:()=>De});var n={};r.r(n),r.d(n,{ButtonExample:()=>I});var o=r(24246),c=r(27378),s=r(40624),a=r(29088),i=r(32711),l=r(36712),u=r(4423),d=r(94544),p=r(30691),b=r(78844),f=r(73919);function y(){const{prism:e}=(0,f.L)(),{colorMode:t}=(0,b.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var m=r(88941);const h={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function x({children:e}){return(0,o.jsx)("div",{className:(0,s.Z)(h.playgroundHeader),children:e})}function w(){return(0,o.jsx)("div",{children:"Loading..."})}function P(){return(0,o.jsx)(d.Z,{fallback:(0,o.jsx)(w,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Z,{fallback:e=>(0,o.jsx)(p.Ac,g({},e)),children:(0,o.jsx)(i.i5,{})}),(0,o.jsx)(i.IF,{})]})})}function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:h.playgroundPreview,children:(0,o.jsx)(P,{})})]})}function S(){const e=(0,a.Z)();return(0,o.jsx)(i.uz,{className:h.playgroundEditor},String(e))}function C(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}function E(e){var t,{children:r,transformCode:n}=e,c=v(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:a}}=s,l=y();var d;const p=null!==(d=null===(t=c.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return(0,o.jsx)("div",{className:h.playgroundContainer,children:(0,o.jsx)(i.nu,O(g({code:r.replace(/\n$/,""),noInline:p,transformCode:null!=n?n:e=>`${e};`,theme:l},c),{children:"top"===a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(C,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(k,{})]})}))})}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}function B(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function I(e){return(0,o.jsx)("button",B(D({type:"button"},e),{style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const T=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){L(e,t,r[t])}))}return e}({React:c},c,n);var Z,V,_=r(89583),A=r(6324),$=r.n(A);const q=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),R=RegExp("\\{(?<range>[\\d,-]+)\\}"),F={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function H(e,t){const r=e.map((e=>{const{start:r,end:n}=F[e];return`(?:${r}\\s*(${t.flatMap((e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)})).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function M(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:c}=t;if(c&&R.test(c)){const e=c.match(R).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=$()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"],t);case"jsx":case"tsx":return H(["js","jsBlock","jsx"],t);case"html":return H(["js","jsBlock","html"],t);case"python":case"py":case"bash":return H(["bash"],t);case"markdown":case"md":return H(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return H(["tex"],t);case"lua":case"haskell":case"sql":return H(["lua"],t);case"wasm":return H(["wasm"],t);default:return H(Object.keys(F).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(n,o),a=r.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let b=0;b<a.length;){const e=a[b].match(s);if(!e){b+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${b},`:u[t]?i[u[t]].start=b:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${b-1},`),a.splice(b,1)}r=a.join("\n");const p={};return Object.entries(i).forEach((([e,{range:t}])=>{$()(t).forEach((t=>{var r;null!==(r=(Z=p)[V=t])&&void 0!==r||(Z[V]=[]),p[t].push(e)}))})),{lineClassNames:p,code:r}}const W={codeBlockContainer:"codeBlockContainer_jDV4"};function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function G(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Y(e){var{as:t}=e,r=G(e,["as"]);const n=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((([e,n])=>{const o=t[e];o&&"string"==typeof n&&(r[o]=n)})),r}(y());return(0,o.jsx)(t,z(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){U(e,t,r[t])}))}return e}({},r),{style:n,className:(0,s.Z)(r.className,W.codeBlockContainer,_.k.common.codeBlock)}))}const Q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function X({children:e,className:t}){return(0,o.jsx)(Y,{as:"pre",tabIndex:0,className:(0,s.Z)(Q.codeBlockStandalone,"thin-scrollbar",t),children:(0,o.jsx)("code",{className:Q.codeBlockLines,children:e})})}var J=r(51114);const K={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ee(e,t){const[r,n]=(0,c.useState)(),o=(0,c.useCallback)((()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,n]);(0,c.useEffect)((()=>{o()}),[o]),function(e,t,r=K){const n=(0,J.zX)(t),o=(0,J.Ql)(r);(0,c.useEffect)((()=>{const t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()}),[e,n,o])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var te=r(26101);const re={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ne(e,t,r[t])}))}return e}function ce(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function se({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const a=n({line:e,className:(0,s.Z)(t,r&&re.codeLine)}),i=e.map(((e,t)=>(0,o.jsx)("span",oe({},c({token:e,key:t})),t)));return(0,o.jsxs)("span",ce(oe({},a),{children:[r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:re.codeLineNumber}),(0,o.jsx)("span",{className:re.codeLineContent,children:i})]}):i,(0,o.jsx)("br",{})]}))}var ae=r(34370);function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function ue(e){return(0,o.jsx)("svg",le(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ie(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function be(e){return(0,o.jsx)("svg",pe(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){de(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const fe={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ye({code:e,className:t}){const[r,n]=(0,c.useState)(!1),a=(0,c.useRef)(void 0),i=(0,c.useCallback)((()=>{(0,ae.Z)(e),n(!0),a.current=window.setTimeout((()=>{n(!1)}),1e3)}),[e]);return(0,c.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":r?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,fe.copyButton,r&&fe.copyButtonCopied),onClick:i,children:(0,o.jsxs)("span",{className:fe.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(ue,{className:fe.copyButtonIcon}),(0,o.jsx)(be,{className:fe.copyButtonSuccessIcon})]})})}function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function je(e){return(0,o.jsx)("svg",he(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){me(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const ge={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function Oe({className:e,onClick:t,isEnabled:r}){const n=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,r&&ge.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,o.jsx)(je,{className:ge.wordWrapButtonIcon,"aria-hidden":"true"})})}function ve({children:e,className:t="",metastring:r,title:n,showLineNumbers:a,language:i}){const{prism:{defaultLanguage:l,magicComments:u}}=(0,f.L)();var d;const p=function(e){return null==e?void 0:e.toLowerCase()}(null!==(d=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==d?d:l),b=y(),m=function(){const[e,t]=(0,c.useState)(!1),[r,n]=(0,c.useState)(!1),o=(0,c.useRef)(null),s=(0,c.useCallback)((()=>{const r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),a=(0,c.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,r=e>t||o.current.querySelector("code").hasAttribute("style");n(r)}),[o]);return ee(o,a),(0,c.useEffect)((()=>{a()}),[e,a]),(0,c.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:s}}(),h=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(q))||void 0===t?void 0:t.groups.title)&&void 0!==r?r:""}(r)||n,{lineClassNames:j,code:g}=M(e,{metastring:r,language:p,magicComments:u}),O=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return(0,o.jsxs)(Y,{as:"div",className:(0,s.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`),children:[h&&(0,o.jsx)("div",{className:Q.codeBlockTitle,children:h}),(0,o.jsxs)("div",{className:Q.codeBlockContent,children:[(0,o.jsx)(te.y$,{theme:b,code:g,language:null!=p?p:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:c})=>(0,o.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,s.Z)(e,Q.codeBlock,"thin-scrollbar"),style:t,children:(0,o.jsx)("code",{className:(0,s.Z)(Q.codeBlockLines,O&&Q.codeBlockLinesWithNumbering),children:r.map(((e,t)=>(0,o.jsx)(se,{line:e,getLineProps:n,getTokenProps:c,classNames:j[t],showLineNumbers:O},t)))})})}),(0,o.jsxs)("div",{className:Q.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,o.jsx)(Oe,{className:Q.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,o.jsx)(ye,{className:Q.codeButton,code:g})]})]})]})}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function we(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Pe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ke(e,t,r[t])}))}return e}const Ce=(Ee=function(e){var{children:t}=e,r=Pe(e,["children"]);const n=(0,a.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?ve:X;return(0,o.jsx)(i,we(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){xe(e,t,r[t])}))}return e}({},r),{children:s}),String(n))},function(e){return e.live?(0,o.jsx)(E,Se({scope:T},e)):(0,o.jsx)(Ee,Se({},e))});var Ee;function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function De(e){return(0,o.jsx)(Ce,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ne(e,t,r[t])}))}return e}({},e))}},75449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(24246),o=r(71670),c=r(97555),s=r(61132),a=r(87048);const i={},l="Canary releases",u={id:"canary",title:"Canary releases",description:"Docusaurus has a canary releases system.",source:"@site/community/4-canary.mdx",sourceDirName:".",slug:"/canary",permalink:"/fr/community/canary",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/fr",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701146517,formattedLastUpdatedAt:"28 nov. 2023",sidebarPosition:4,frontMatter:{},sidebar:"community",previous:{title:"Contributing",permalink:"/fr/community/contributing"},next:{title:"Release process",permalink:"/fr/community/release-process"}},d={},p=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",level:2},{value:"Using a canary release",id:"using-a-canary-release",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"canary-releases",children:"Canary releases"}),"\n","\n","\n",(0,n.jsxs)(a.mC,{children:[(0,n.jsx)(t.p,{children:"Docusaurus has a canary releases system."}),(0,n.jsxs)(t.p,{children:["It permits you to ",(0,n.jsx)(t.strong,{children:"test new unreleased features"})," as soon as the pull requests are merged on the ",(0,n.jsx)(t.a,{href:"/fr/community/release-process#next-version",children:"next version"})," of Docusaurus."]}),(0,n.jsxs)(t.p,{children:["It is a good way to ",(0,n.jsx)(t.strong,{children:"give feedback to maintainers"}),", ensuring the newly implemented feature works as intended."]}),(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Using a canary release in production might seem risky, but in practice, it's not."}),(0,n.jsx)(t.p,{children:"A canary release passes all automated tests and is used in production by the Docusaurus site itself."})]}),(0,n.jsx)(a.UM,{children:(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The canary version shown below ",(0,n.jsx)(t.strong,{children:"may not be up-to-date"}),". Please go to the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm page"})," to find the actual version name."]})})}),(0,n.jsx)(a.FS,{children:(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The canary version shown below is directly fetched from npm and ",(0,n.jsx)(t.strong,{children:"is up-to-date"}),". You can directly use these numbers in your package.json."]})})}),(0,n.jsx)(t.h2,{id:"canary-npm-dist-tag",children:"Canary npm dist tag"}),(0,n.jsxs)(t.p,{children:["For any code-related commit on ",(0,n.jsx)(t.code,{children:"main"}),", the continuous integration will publish a canary release under the ",(0,n.jsx)(t.code,{children:"@canary"})," npm dist tag. It generally takes up to 10 minutes."]}),(0,n.jsxs)(t.p,{children:["You can see on ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm"})," the current dist tags:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"latest"}),": stable releases (Current: ",(0,n.jsx)(a.SR,{}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"canary"}),": canary releases (",(0,n.jsx)(a.I1,{}),")"]}),"\n"]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Make sure to use the latest canary release and check the publication date (sometimes the publish process fails). ",(0,n.jsx)(a.rv,{})]})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Canary versions follow the naming convention ",(0,n.jsx)(t.code,{children:"0.0.0-commitNumber"}),"."]})}),(0,n.jsx)(t.h2,{id:"using-a-canary-release",children:"Using a canary release"}),(0,n.jsxs)(t.p,{children:["Take the latest version published under the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"canary npm dist tag"})," (",(0,n.jsx)(a.I1,{}),")."]}),(0,n.jsxs)(t.p,{children:["Use it for all the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," dependencies in your ",(0,n.jsx)(t.code,{children:"package.json"}),":"]}),(0,n.jsx)(a.Hc,{}),(0,n.jsx)(t.p,{children:"Then, install the dependencies again and start your site:"}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install\nnpm start\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn install\nyarn start\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm install\npnpm start\n"})})})]}),(0,n.jsxs)(t.p,{children:["You can also upgrade the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," packages with command line:"]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add --exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})})]}),(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["Make sure to include all the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," packages."]}),(0,n.jsxs)(t.p,{children:["For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,n.jsx)(t.code,{children:"^"})," prefix)."]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}}}]);