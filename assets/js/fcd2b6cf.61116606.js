"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2629],{61132:(e,n,r)=>{r.d(n,{Z:()=>o});var s=r(24246),t=(r(27378),r(40624));const i={tabItem:"tabItem_pnkT"};function o({children:e,hidden:n,className:r}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,r),hidden:n,children:e})}},97555:(e,n,r)=>{r.d(n,{Z:()=>S});var s=r(24246),t=r(27378),i=r(40624),o=r(75527),a=r(3620),c=r(44479),l=r(62821),d=r(52196),u=r(53589);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function b(e){var n,r;return null!==(r=null===(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return b(e).map((({props:{value:e,label:n,attributes:r,default:s}})=>({value:e,label:n,attributes:r,default:s})))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const r=(0,a.k6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,l._X)(s),o=(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(p(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(n){h(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[s,r]);return[i,o]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=m(e),[o,a]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const s=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,d]=f({queryString:r,groupId:s}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,s]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),b=(()=>{const e=null!=l?l:h;return g({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{b&&a(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),p(e)}),[d,p,i]),tabValues:i}}var j=r(29088);const x={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(n){w(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:t,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),i=a[s].value;i!==r&&(l(n),t(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;var r;n=null!==(r=c[s])&&void 0!==r?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;var s;n=null!==(s=c[r])&&void 0!==s?s:c[c.length-1];break}}null==n||n.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:t})=>(0,s.jsx)("li",O(y({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>c.push(e),onKeyDown:u,onClick:d},t),{className:(0,i.Z)("tabs__item",x.tabItem,null==t?void 0:t.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function D({lazy:e,children:n,selectedValue:r}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function P(e){const n=v(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,s.jsx)(k,y({},e,n)),(0,s.jsx)(D,y({},e,n))]})}function S(e){const n=(0,j.Z)();return(0,s.jsx)(P,O(y({},e),{children:b(e.children)}),String(n))}},10487:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var s=r(24246),t=r(71670),i=r(97555),o=r(61132);const a={description:"Docus."},c="Docus Tips",l={id:"docusaurus-docustips",title:"Docus Tips",description:"Docus.",source:"@site/docs/docusaurus-docustips.mdx",sourceDirName:".",slug:"/docusaurus-docustips",permalink:"/docs/next/docusaurus-docustips",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/docusaurus-docustips.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1722076620,formattedLastUpdatedAt:"Jul 27, 2024",frontMatter:{description:"Docus."},sidebar:"woofwoof",previous:{title:"Docusaurus HomePage Configration",permalink:"/docs/next/docusaurus-homepage"},next:{title:"RocketChat Topic Creation",permalink:"/docs/next/docusaurus-createdirectory"}},d={},u=[{value:"Tagging a new version",id:"tagging-a-new-version",level:2},{value:"Creating new docs",id:"creating-new-docs",level:2},{value:"Configuring versioning behavior",id:"configuring-versioning-behavior",level:2},{value:"Understanding sidebar association",id:"sidebar-association",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docus-tips",children:"Docus Tips"}),"\n",(0,s.jsx)(n.h2,{id:"tagging-a-new-version",children:"Tagging a new version"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["First, make sure the current docs version (the ",(0,s.jsx)(n.code,{children:"./docs"})," directory) is ready to be frozen."]}),"\n",(0,s.jsx)(n.li,{children:"Enter a new version number."}),"\n"]}),"\n",(0,s.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.1.0\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.1.0\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.1.0\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"When tagging a new version, the document versioning mechanism will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the full ",(0,s.jsx)(n.code,{children:"docs/"})," folder contents into a new ",(0,s.jsx)(n.code,{children:"versioned_docs/version-[versionName]/"})," folder."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a versioned sidebars file based from your current configuration (if it exists) - saved as ",(0,s.jsx)(n.code,{children:"versioned_sidebars/version-[versionName]-sidebars.json"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Append the new version number to ",(0,s.jsx)(n.code,{children:"versions.json"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-new-docs",children:"Creating new docs"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Place the new file into the corresponding version folder."}),"\n",(0,s.jsx)(n.li,{children:"Include the reference to the new file in the corresponding sidebar file according to the version number."}),"\n"]}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.Z,{value:"Current version structure",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebars.js\n"})})}),(0,s.jsx)(o.Z,{value:"Older version structure",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-versioning-behavior",children:"Configuring versioning behavior"}),"\n",(0,s.jsxs)(n.p,{children:['The "current" version is the version name for the ',(0,s.jsx)(n.code,{children:"./docs"})," folder. There are different ways to manage versioning, but two very common patterns are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You release v1, and start immediately working on v2 (including its docs). In this case, the ",(0,s.jsx)(n.strong,{children:"current version"})," is v2, which is in the ",(0,s.jsx)(n.code,{children:"./docs"})," source folder, and can be browsed at ",(0,s.jsx)(n.code,{children:"example.com/docs/next"}),". The ",(0,s.jsx)(n.strong,{children:"latest version"})," is v1, which is in the ",(0,s.jsx)(n.code,{children:"./versioned_docs/version-1"})," source folder, and is browsed by most of your users at ",(0,s.jsx)(n.code,{children:"example.com/docs"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You release v1, and will maintain it for some time before thinking about v2. In this case, the ",(0,s.jsx)(n.strong,{children:"current version"})," and ",(0,s.jsx)(n.strong,{children:"latest version"})," will both be point to v1, since the v2 docs doesn't even exist yet!"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Docusaurus defaults work great for the first use case. We will label the current version as "next" and you can even choose not to publish it.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For the 2nd use case"}),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,s.jsx)(n.code,{children:"./docs"})," + ",(0,s.jsx)(n.code,{children:"./versioned_docs/version-1.0.0"}),'), you may consider "pretending" that the current version is a cut version by giving it a path and a label:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    '@docusaurus/preset-classic',\n    docs: {\n      // highlight-start\n      lastVersion: 'current',\n      versions: {\n        current: {\n          label: '1.0.0',\n          path: '1.0.0',\n        },\n      },\n      // highlight-end\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The docs in ",(0,s.jsx)(n.code,{children:"./docs"})," will be served at ",(0,s.jsx)(n.code,{children:"/docs/1.0.0"})," instead of ",(0,s.jsx)(n.code,{children:"/docs/next"}),", and ",(0,s.jsx)(n.code,{children:"1.0.0"})," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,s.jsx)(n.code,{children:"./docs"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://vulnsystem.github.io/docs/3.0.0/versioning#configuring-versioning-behavior",children:"Configuring versioning behavior"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-association",children:"Understanding sidebar association"}),"\n",(0,s.jsxs)(n.p,{children:["Following the example above, if a ",(0,s.jsx)(n.code,{children:"commonDoc"})," is included in both sidebars:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2', 'commonDoc'],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["How does Docusaurus know which sidebar to display when browsing ",(0,s.jsx)(n.code,{children:"commonDoc"}),"? Answer: it doesn't, and we don't guarantee which sidebar it will pick."]}),"\n",(0,s.jsx)(n.p,{children:"When you add doc Y to sidebar X, it creates a two-way binding: sidebar X contains a link to doc Y, and when browsing doc Y, sidebar X will be displayed. But sometimes, we want to break either implicit binding:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"How do I generate a link to doc Y in sidebar X without making sidebar X displayed on Y?"})," For example, when I include doc Y in multiple sidebars as in the example above, and I want to explicitly tell Docusaurus to display one sidebar?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"How do I make sidebar X displayed when browsing doc Y, but sidebar X shouldn't contain the link to Y?"}),' For example, when Y is a "doc home page" and the sidebar is purely used for navigation?']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Front matter option ",(0,s.jsx)(n.code,{children:"displayed_sidebar"})," will forcibly set the sidebar association. For the same example, you can still use doc shorthands without any special configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then add a front matter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="commonDoc.md"',children:"---\ndisplayed_sidebar: apiSidebar\n---\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Which explicitly tells Docusaurus to display ",(0,s.jsx)(n.code,{children:"apiSidebar"})," when browsing ",(0,s.jsx)(n.code,{children:"commonDoc"}),". Using the same method, you can make sidebar X which doesn't contain doc Y appear on doc Y:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="home.md"',children:"---\ndisplayed_sidebar: tutorialSidebar\n---\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Even when ",(0,s.jsx)(n.code,{children:"tutorialSidebar"})," doesn't contain a link to ",(0,s.jsx)(n.code,{children:"home"}),", it will still be displayed when viewing ",(0,s.jsx)(n.code,{children:"home"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you set ",(0,s.jsx)(n.code,{children:"displayed_sidebar: null"}),", no sidebar will be displayed whatsoever on this page, and subsequently, no pagination either."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(27378);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);