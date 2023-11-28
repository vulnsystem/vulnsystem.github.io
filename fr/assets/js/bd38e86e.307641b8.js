"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28147],{61132:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(24246),s=(r(27378),r(40624));const l={tabItem:"tabItem_pnkT"};function i({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(l.tabItem,r),hidden:n,children:e})}},97555:(e,n,r)=>{r.d(n,{Z:()=>P});var t=r(24246),s=r(27378),l=r(40624),i=r(75527),a=r(3620),o=r(44479),u=r(62821),c=r(52196),d=r(53589);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function f(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function m(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const r=(0,a.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),l=(0,u._X)(t),i=(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(h(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[l,i]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=m(e),[i,a]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,c]=b({queryString:r,groupId:t}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),f=(()=>{const e=null!=u?u:p;return g({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var x=r(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:s,tabValues:a}){const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),l=a[t].value;l!==r&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[o.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:s})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:d,onClick:c},s),{className:(0,l.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function E({lazy:e,children:n,selectedValue:r}){const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=j(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(k,w({},e,n)),(0,t.jsx)(E,w({},e,n))]})}function P(e){const n=(0,x.Z)();return(0,t.jsx)(S,O(w({},e),{children:f(e.children)}),String(n))}},59498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var t=r(24246),s=r(71670),l=r(97555),i=r(61132);const a={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},o="\ud83d\udce6 eslint-plugin",u={id:"api/misc/eslint-plugin/README",title:"\ud83d\udce6 eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/versioned_docs/version-3.0.1/api/misc/eslint-plugin/README.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/fr/docs/api/misc/@docusaurus/eslint-plugin",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/fr",tags:[],version:"3.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\ud83d\udce6 create-docusaurus",permalink:"/fr/docs/api/misc/create-docusaurus"},next:{title:"no-html-links",permalink:"/fr/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Recommended config",id:"recommended-config",level:3},{value:"Manual config",id:"manual-config",level:3},{value:"Supported configs",id:"supported-configs",level:2},{value:"Supported rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-eslint-plugin",children:"\ud83d\udce6 eslint-plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @docusaurus/eslint-plugin\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"recommended-config",children:"Recommended config"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"plugin:@docusaurus/recommended"})," to the ",(0,t.jsx)(n.code,{children:"extends"})," section of your ",(0,t.jsx)(n.code,{children:".eslintrc"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This will enable the ",(0,t.jsx)(n.code,{children:"@docusaurus"})," eslint plugin and use the ",(0,t.jsx)(n.code,{children:"recommended"})," config. See ",(0,t.jsx)(n.a,{href:"#supported-rules",children:"Supported rules"})," below for a list of rules that this will enable."]}),"\n",(0,t.jsx)(n.h3,{id:"manual-config",children:"Manual config"}),"\n",(0,t.jsx)(n.p,{children:"For more fine-grained control, you can also enable the plugin manually and configure the rules you want to use directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "plugins": ["@docusaurus"],\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-configs",children:"Supported configs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Recommended: recommended rule set for most Docusaurus sites that should be extended from."}),"\n",(0,t.jsxs)(n.li,{children:["All: ",(0,t.jsx)(n.strong,{children:"all"})," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-rules",children:"Supported rules"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/fr/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-untranslated-text"})})}),(0,t.jsx)(n.td,{children:"Enforce text labels in JSX to be wrapped by translate calls"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/fr/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",children:(0,t.jsx)(n.code,{children:"@docusaurus/string-literal-i18n-messages"})})}),(0,t.jsx)(n.td,{children:"Enforce translate APIs to be called on plain text labels"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/fr/docs/api/misc/@docusaurus/eslint-plugin/no-html-links",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-html-links"})})}),(0,t.jsxs)(n.td,{children:["Ensures @docusaurus/Link is used instead of ",(0,t.jsx)(n.code,{children:"<a>"})," tags"]}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/fr/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading",children:(0,t.jsx)(n.code,{children:"@docusaurus/prefer-docusaurus-heading"})})}),(0,t.jsxs)(n.td,{children:["Ensures @theme/Heading is used instead of ",(0,t.jsx)(n.code,{children:"<hn>"})," tags for headings"]}),(0,t.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u2705 = recommended"}),"\n",(0,t.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title=".eslintrc.js"',children:"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(27378);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);