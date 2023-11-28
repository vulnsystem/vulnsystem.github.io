"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49406],{61132:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(24246),o=(n(27378),n(40624));const c={tabItem:"tabItem_pnkT"};function i({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(24246),o=n(27378),c=n(40624),i=n(75527),s=n(3620),l=n(44479),a=n(62821),u=n(52196),d=n(53589);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e){var t,n;return null!==(n=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function f(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,a._X)(r),i=(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[c,i]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,c=f(e),[i,s]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:c}))),[a,u]=y({queryString:n,groupId:r}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=null!=a?a:p;return h({value:e,tabValues:c})?e:null})();(0,l.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,c]),tabValues:c}}var m=n(29088);const O={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function P({className:e,block:t,selectedValue:n,selectValue:o,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),c=s[r].value;c!==n&&(a(t),o(c))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[l.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:s.map((({value:e,label:t,attributes:o})=>(0,r.jsx)("li",w(x({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:n}){const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=c.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=j(e);return(0,r.jsxs)("div",{className:(0,c.Z)("tabs-container",O.tabList),children:[(0,r.jsx)(P,x({},e,t)),(0,r.jsx)(k,x({},e,t))]})}function N(e){const t=(0,m.Z)();return(0,r.jsx)(S,w(x({},e),{children:g(e.children)}),String(t))}},94544:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24246),o=(n(27378),n(29088));function c({children:e,fallback:t}){return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},52605:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(24246),o=n(27378),c=n(3620);const i={apiTable:"apiTable_e8hp"};function s({name:e,children:t},n){const i=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);return t}(t),s=e?`${e}-${i}`:i,l=`#${s}`,a=(0,c.k6)();return(0,r.jsx)("tr",{id:s,tabIndex:0,ref:a.location.hash===l?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||a.push(l)},onKeyDown:e=>{"Enter"===e.key&&a.push(l)},children:t.props.children})}const l=o.forwardRef(s);function a({children:e,name:t}){const[n,c]=o.Children.toArray(e.props.children),s=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;null===(e=s.current)||void 0===e||e.focus()}),[s]);const a=o.Children.map(c.props.children,(e=>(0,r.jsx)(l,{name:t,ref:s,children:e})));return(0,r.jsxs)("table",{className:i.apiTable,children:[n,(0,r.jsx)("tbody",{children:a})]})}},82064:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(24246),o=(n(27378),n(13415)),c=n(92053),i=n(36712),s=n(97555),l=n(61132),a=n(38112);const u=void 0;function d({code:e,pluginName:t,presetOptionName:n}){const d=(0,c.zu)(u).path;return(0,r.jsxs)(s.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(l.Z,{value:"preset",label:(0,i.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(o.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(i.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${n}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,r.jsxs)(l.Z,{value:"plugin",label:(0,i.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},38112:(e,t,n)=>{n.d(t,{Z:()=>De});var r={};n.r(r),n.d(r,{ButtonExample:()=>B});var o=n(24246),c=n(27378),i=n(40624),s=n(29088),l=n(32711),a=n(36712),u=n(4423),d=n(94544),p=n(30691),b=n(78844),g=n(73919);function f(){const{prism:e}=(0,g.L)(),{colorMode:t}=(0,b.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var h=n(88941);const y={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x({children:e}){return(0,o.jsx)("div",{className:(0,i.Z)(y.playgroundHeader),children:e})}function w(){return(0,o.jsx)("div",{children:"Loading..."})}function P(){return(0,o.jsx)(d.Z,{fallback:(0,o.jsx)(w,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{fallback:e=>(0,o.jsx)(p.Ac,m({},e)),children:(0,o.jsx)(l.i5,{})}),(0,o.jsx)(l.IF,{})]})})}function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:y.playgroundPreview,children:(0,o.jsx)(P,{})})]})}function S(){const e=(0,s.Z)();return(0,o.jsx)(l.uz,{className:y.playgroundEditor},String(e))}function N(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}function E(e){var t,{children:n,transformCode:r}=e,c=v(e,["children","transformCode"]);const{siteConfig:{themeConfig:i}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:s}}=i,a=f();var d;const p=null!==(d=null===(t=c.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return(0,o.jsx)("div",{className:y.playgroundContainer,children:(0,o.jsx)(l.nu,O(m({code:n.replace(/\n$/,""),noInline:p,transformCode:null!=r?r:e=>`${e};`,theme:a},c),{children:"top"===s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(N,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(k,{})]})}))})}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function I(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function B(e){return(0,o.jsx)("button",I(D({type:"button"},e),{style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Z=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}({React:c},c,r);var T,A,_=n(89583),V=n(6324),$=n.n(V);const q=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),z=RegExp("\\{(?<range>[\\d,-]+)\\}"),R={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function W(e,t){const n=e.map((e=>{const{start:n,end:r}=R[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function H(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:c}=t;if(c&&z.test(c)){const e=c.match(z).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=$()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return W(["js","jsBlock"],t);case"jsx":case"tsx":return W(["js","jsBlock","jsx"],t);case"html":return W(["js","jsBlock","html"],t);case"python":case"py":case"bash":return W(["bash"],t);case"markdown":case"md":return W(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return W(["tex"],t);case"lua":case"haskell":case"sql":return W(["lua"],t);case"wasm":return W(["wasm"],t);default:return W(Object.keys(R).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,o),s=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),a=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let b=0;b<s.length;){const e=s[b].match(i);if(!e){b+=1;continue}const t=e.slice(1).find((e=>void 0!==e));a[t]?l[a[t]].range+=`${b},`:u[t]?l[u[t]].start=b:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${b-1},`),s.splice(b,1)}n=s.join("\n");const p={};return Object.entries(l).forEach((([e,{range:t}])=>{$()(t).forEach((t=>{var n;null!==(n=(T=p)[A=t])&&void 0!==n||(T[A]=[]),p[t].push(e)}))})),{lineClassNames:p,code:n}}const M={codeBlockContainer:"codeBlockContainer_jDV4"};function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Q(e){var{as:t}=e,n=F(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(f());return(0,o.jsx)(t,U(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({},n),{style:r,className:(0,i.Z)(n.className,M.codeBlockContainer,_.k.common.codeBlock)}))}const J={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function Y({children:e,className:t}){return(0,o.jsx)(Q,{as:"pre",tabIndex:0,className:(0,i.Z)(J.codeBlockStandalone,"thin-scrollbar",t),children:(0,o.jsx)("code",{className:J.codeBlockLines,children:e})})}var X=n(51114);const K={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ee(e,t){const[n,r]=(0,c.useState)(),o=(0,c.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,c.useEffect)((()=>{o()}),[o]),function(e,t,n=K){const r=(0,X.zX)(t),o=(0,X.Ql)(n);(0,c.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var te=n(26101);const ne={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){re(e,t,n[t])}))}return e}function ce(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ie({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const s=r({line:e,className:(0,i.Z)(t,n&&ne.codeLine)}),l=e.map(((e,t)=>(0,o.jsx)("span",oe({},c({token:e,key:t})),t)));return(0,o.jsxs)("span",ce(oe({},s),{children:[n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:ne.codeLineNumber}),(0,o.jsx)("span",{className:ne.codeLineContent,children:l})]}):l,(0,o.jsx)("br",{})]}))}var se=n(34370);function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ue(e){return(0,o.jsx)("svg",ae(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function be(e){return(0,o.jsx)("svg",pe(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){de(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const ge={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function fe({code:e,className:t}){const[n,r]=(0,c.useState)(!1),s=(0,c.useRef)(void 0),l=(0,c.useCallback)((()=>{(0,se.Z)(e),r(!0),s.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,c.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":n?(0,a.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,a.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",t,ge.copyButton,n&&ge.copyButtonCopied),onClick:l,children:(0,o.jsxs)("span",{className:ge.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(ue,{className:ge.copyButtonIcon}),(0,o.jsx)(be,{className:ge.copyButtonSuccessIcon})]})})}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function je(e){return(0,o.jsx)("svg",ye(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){he(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const me={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function Oe({className:e,onClick:t,isEnabled:n}){const r=(0,a.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:t,className:(0,i.Z)("clean-btn",e,n&&me.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)(je,{className:me.wordWrapButtonIcon,"aria-hidden":"true"})})}function ve({children:e,className:t="",metastring:n,title:r,showLineNumbers:s,language:l}){const{prism:{defaultLanguage:a,magicComments:u}}=(0,g.L)();var d;const p=function(e){return null==e?void 0:e.toLowerCase()}(null!==(d=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==d?d:a),b=f(),h=function(){const[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1),o=(0,c.useRef)(null),i=(0,c.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),s=(0,c.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return ee(o,s),(0,c.useEffect)((()=>{s()}),[e,s]),(0,c.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),y=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(q))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:j,code:m}=H(e,{metastring:n,language:p,magicComments:u}),O=null!=s?s:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return(0,o.jsxs)(Q,{as:"div",className:(0,i.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`),children:[y&&(0,o.jsx)("div",{className:J.codeBlockTitle,children:y}),(0,o.jsxs)("div",{className:J.codeBlockContent,children:[(0,o.jsx)(te.y$,{theme:b,code:m,language:null!=p?p:"text",children:({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>(0,o.jsx)("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,i.Z)(e,J.codeBlock,"thin-scrollbar"),style:t,children:(0,o.jsx)("code",{className:(0,i.Z)(J.codeBlockLines,O&&J.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,o.jsx)(ie,{line:e,getLineProps:r,getTokenProps:c,classNames:j[t],showLineNumbers:O},t)))})})}),(0,o.jsxs)("div",{className:J.buttonGroup,children:[(h.isEnabled||h.isCodeScrollable)&&(0,o.jsx)(Oe,{className:J.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),(0,o.jsx)(fe,{className:J.codeButton,code:m})]})]})]})}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function Pe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ke(e,t,n[t])}))}return e}const Ne=(Ee=function(e){var{children:t}=e,n=Pe(e,["children"]);const r=(0,s.Z)(),i=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?ve:Y;return(0,o.jsx)(l,we(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){xe(e,t,n[t])}))}return e}({},n),{children:i}),String(r))},function(e){return e.live?(0,o.jsx)(E,Se({scope:Z},e)):(0,o.jsx)(Ee,Se({},e))});var Ee;function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){return(0,o.jsx)(Ne,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ce(e,t,n[t])}))}return e}({},e))}},63443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var r=n(24246),o=n(71670),c=n(97555),i=n(61132),s=n(52605),l=n(82064);const a={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},u="\ud83d\udce6 plugin-google-analytics",d={id:"api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/docs/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701146517,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-google-gtag"}},p={},b=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-plugin-google-analytics",children:"\ud83d\udce6 plugin-google-analytics"}),"\n","\n","\n",(0,r.jsxs)(t.p,{children:["The default ",(0,r.jsx)(t.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,r.jsx)(t.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,r.jsx)(t.a,{href:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,r.jsxs)(t.p,{children:["This plugin is ",(0,r.jsx)(t.strong,{children:"deprecated"}),", and will become useless on July 1, 2023."]}),(0,r.jsxs)(t.p,{children:["Google is ",(0,r.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,r.jsxs)(t.p,{children:["If you are still using this plugin with a ",(0,r.jsx)(t.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,r.jsx)(t.a,{href:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-google-gtag",children:(0,r.jsx)(t.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(c.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["If you use the preset ",(0,r.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsx)(t.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(s.Z,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"trackingID"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.td,{children:"The tracking ID of your analytics service."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"anonymizeIP"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,r.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(l.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);