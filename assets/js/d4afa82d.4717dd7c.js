"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69991],{41124:(e,n,t)=>{t.d(n,{Z:()=>r});var s=t(24246),o=(t(27378),t(4646));const i={tableOfContentsInline:"tableOfContentsInline_2sru"};function r({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,s.jsx)("div",{className:i.tableOfContentsInline,children:(0,s.jsx)(o.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},4646:(e,n,t)=>{t.d(n,{Z:()=>v});var s=t(24246),o=t(27378),i=t(73919);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){r(e,n,t[n])}))}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e){const n=e.map((e=>a(c({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t}=e,o=l(e,["parentIndex"]);t>=0?n[t].children.push(o):s.push(o)})),s}function d({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const s=d({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[a(c({},e),{children:s})]:s}))}function h(e){const n=e.getBoundingClientRect();return n.top===n.bottom?h(e.parentNode):n}function g(e,{anchorTopOffset:n}){const t=e.find((e=>h(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(h(t))?t:null!==(s=e[e.indexOf(t)-1])&&void 0!==s?s:null;var s}var o;return null!==(o=e[e.length-1])&&void 0!==o?o:null}function f(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,o.useRef)(void 0),t=f();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),c=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let s=e;s<=n;s+=1)t.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),a=g(c,{anchorTopOffset:t.current}),l=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var m=t(13415);function j({toc:e,className:n,linkClassName:t,isChild:o}){return e.length?(0,s.jsx)("ul",{className:o?void 0:n,children:e.map((e=>(0,s.jsxs)("li",{children:[(0,s.jsx)(m.Z,{to:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,s.jsx)(j,{isChild:!0,toc:e.children,className:n,linkClassName:t})]},e.id)))}):null}const x=o.memo(j);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function v(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:l}=e,h=b(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const g=(0,i.L)(),f=null!=a?a:g.tableOfContents.minHeadingLevel,m=null!=l?l:g.tableOfContents.maxHeadingLevel,j=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,o.useMemo)((()=>d({toc:u(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:n,minHeadingLevel:f,maxHeadingLevel:m});return p((0,o.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:m}}),[r,c,f,m])),(0,s.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){y(e,n,t[n])}))}return e}({toc:j,className:t,linkClassName:r},h))}},44520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=t(24246),o=t(71670),i=t(41124);const r={description:"Configuring your site's behavior through docusaurus.config.js and more."},c="Token generation",a={id:"tokengeneration",title:"Token generation",description:"Configuring your site's behavior through docusaurus.config.js and more.",source:"@site/docs/tokengeneration.mdx",sourceDirName:".",slug:"/tokengeneration",permalink:"/docs/tokengeneration",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/tokengeneration.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1701422888,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{description:"Configuring your site's behavior through docusaurus.config.js and more."},sidebar:"docss",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Kafka clients",permalink:"/docs/kafkaclients"}},l={},u=[{value:"Syntax to declare <code>docusaurus.config.js</code>",id:"syntax-to-declare-docusaurus-config",level:2},{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"token-generation",children:"Token generation"}),"\n","\n","\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.a,{href:"/docs/api/docusaurus-config",children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," API reference"]})})," for an exhaustive list of options."]})}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."}),"\n",(0,s.jsxs)(n.p,{children:["Keeping a well-maintained ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."]}),"\n",(0,s.jsxs)(n.h2,{id:"syntax-to-declare-docusaurus-config",children:["Syntax to declare ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file is run in Node.js and should export either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.strong,{children:"config object"})]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.strong,{children:"function"})," that creates the config object"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file supports:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,s.jsx)(n.strong,{children:"ES Modules"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://flaviocopes.com/commonjs/",children:(0,s.jsx)(n.strong,{children:"CommonJS"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/typescript-support#typing-config",children:(0,s.jsx)(n.strong,{children:"TypeScript"})})}),"\n"]}),(0,s.jsx)(n.p,{children:"Constraints:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required:"})," use ",(0,s.jsx)(n.code,{children:"export default /* your config*/"})," (or ",(0,s.jsx)(n.code,{children:"module.exports"})," to export your Docusaurus config"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," use ",(0,s.jsx)(n.code,{children:"import Lib from 'lib'"})," (or ",(0,s.jsx)(n.code,{children:"require('lib')"}),") to import Node.js packages"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,s.jsx)(n.strong,{children:"equivalent ways"}),", and all the following config examples lead to the exact same result:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\n\nexport default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n} satisfies Config;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n\nexport default config;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default function configCreator() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Using ESM-only packages",type:"tip",children:[(0,s.jsx)(n.p,{children:"Using an async config creator can be useful to import ESM-only modules (notably most Remark plugins). It is possible to import such modules thanks to dynamic imports:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  // Use a dynamic import instead of require('esm-lib')\n  // highlight-next-line\n  const lib = await import('lib');\n\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // rest of your site config...\n  };\n}\n"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"what-goes-into-a-docusaurusconfigjs",children:["What goes into a ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),"?"]}),"\n",(0,s.jsxs)(n.p,{children:["You should not have to write your ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," from scratch even if you are developing your site. All templates come with a ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," that includes defaults for the common options."]}),"\n",(0,s.jsx)(n.p,{children:"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."}),"\n",(0,s.jsx)(n.p,{children:"The high-level overview of Docusaurus configuration can be categorized into:"}),"\n",(0,s.jsx)(i.Z,{toc:u,minHeadingLevel:3,maxHeadingLevel:3}),"\n",(0,s.jsx)(n.h3,{id:"site-metadata",children:"Site metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Site metadata contains the essential global metadata such as ",(0,s.jsx)(n.code,{children:"title"}),", ",(0,s.jsx)(n.code,{children:"url"}),", ",(0,s.jsx)(n.code,{children:"baseUrl"}),", and ",(0,s.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."}),"\n",(0,s.jsx)(n.h3,{id:"deployment-configurations",children:"Deployment configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Deployment configurations such as ",(0,s.jsx)(n.code,{children:"projectName"}),", ",(0,s.jsx)(n.code,{children:"organizationName"}),", and optionally ",(0,s.jsx)(n.code,{children:"deploymentBranch"})," are used when you deploy your site with the ",(0,s.jsx)(n.code,{children:"deploy"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to check the ",(0,s.jsx)(n.a,{href:"/docs/deployment",children:"deployment docs"})," for more information."]}),"\n",(0,s.jsx)(n.h3,{id:"theme-plugin-and-preset-configurations",children:"Theme, plugin, and preset configurations"}),"\n",(0,s.jsxs)(n.p,{children:["List the ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#using-themes",children:"themes"}),", ",(0,s.jsx)(n.a,{href:"/docs/using-plugins",children:"plugins"}),", and ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#using-presets",children:"presets"})," for your site in the ",(0,s.jsx)(n.code,{children:"themes"}),", ",(0,s.jsx)(n.code,{children:"plugins"}),", and ",(0,s.jsx)(n.code,{children:"presets"})," fields, respectively. These are typically npm packages:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Docusaurus supports ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#module-shorthands",children:(0,s.jsx)(n.strong,{children:"module shorthands"})}),", allowing you to simplify the above configuration as:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"They can also be loaded from local directories:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import path from 'path';\n\nexport default {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,s.jsx)(n.code,{children:"presets"})," field. In this example, ",(0,s.jsx)(n.code,{children:"docs"})," refers to ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," and ",(0,s.jsx)(n.code,{children:"theme"})," refers to ",(0,s.jsx)(n.code,{children:"@docusaurus/theme-classic"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: './sidebars.js',\n        },\n        theme: {\n          customCss: ['./src/css/custom.css'],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"presets: [['classic', {...}]]"})," shorthand works as well."]})}),"\n",(0,s.jsxs)(n.p,{children:["For further help configuring themes, plugins, and presets, see ",(0,s.jsx)(n.a,{href:"/docs/using-plugins",children:"Using Plugins"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"custom-configurations",children:"Custom configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus guards ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add custom fields, define them in ",(0,s.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"accessing-configuration-from-components",children:"Accessing configuration from components"}),"\n",(0,s.jsxs)(n.p,{children:["Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,s.jsx)(n.code,{children:"siteConfig"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Basic example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"customizing-babel-configuration",children:"Customizing Babel Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["For new Docusaurus projects, we automatically generated a ",(0,s.jsx)(n.code,{children:"babel.config.js"})," in the project root."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"export default {\n  presets: ['@docusaurus/core/lib/babel/preset'],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Most of the time, this configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(27378);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);