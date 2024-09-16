"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77912],{28552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(24246),o=n(71670);const r={description:"Create a Markdown Document"},i="RocketChat server developing",a={id:"metamaskGPT/metamaskGPT-developing",title:"RocketChat server developing",description:"Create a Markdown Document",source:"@site/docs/metamaskGPT/metamaskGPT-developing.mdx",sourceDirName:"metamaskGPT",slug:"/metamaskGPT/metamaskGPT-developing",permalink:"/zh-CN/docs/next/metamaskGPT/metamaskGPT-developing",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1726485085,formattedLastUpdatedAt:"2024\u5e749\u670816\u65e5",frontMatter:{description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"01 Introduction to Generative AI and LLMs",permalink:"/zh-CN/docs/next/metamaskGPT/metamaskGPT-LLMs"},next:{title:"RocketChat Oauth flow",permalink:"/zh-CN/docs/next/metamaskGPT/metamaskGPT-oauth-process"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting RocketChat",id:"starting-rocketchat",level:2},{value:"Logs levels",id:"logs-levels",level:2},{value:"Disable Two-factor authentication (2FA)",id:"disable-two-factor-authentication-2fa",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"rocketchat-server-developing",children:"RocketChat server developing"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://rocket.chat",children:"Rocket.Chat1"})," is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection."]}),"\n",(0,s.jsxs)(t.p,{children:["We are the ultimate ",(0,s.jsx)(t.strong,{children:"Free Open Source Solution"})," for team communications, enabling real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with you. The result is an increase in productivity and customer satisfaction rates."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Useful links",type:"info",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat",children:(0,s.jsx)(t.code,{children:"RocketChat Server"})})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/develop/README.md",children:(0,s.jsx)(t.code,{children:"RocketChat Server README"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"You can follow these instructions to setup a dev environment:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.strong,{children:"Node 14.x (LTS)"})," using a tool ",(0,s.jsx)(t.a,{href:"https://github.com/creationix/nvm",children:"nvm"})]}),"\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.strong,{children:"Meteor"}),": ",(0,s.jsx)(t.a,{href:"https://www.meteor.com/developers/install",children:"https://www.meteor.com/developers/install"})]}),"\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.strong,{children:"yarn"}),": ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/getting-started/install",children:"https://yarnpkg.com/getting-started/install"})]}),"\n",(0,s.jsxs)(t.li,{children:["Clone this repo: ",(0,s.jsxs)(t.strong,{children:["git clone ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat.git",children:"https://github.com/RocketChat/Rocket.Chat.git"})]})]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.em,{children:"yarn"})," to install dependencies"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"node v14.21.3"}),"\n",(0,s.jsx)(t.li,{children:"yarn 3.5.0"}),"\n",(0,s.jsxs)(t.li,{children:["git branch is ",(0,s.jsx)(t.strong,{children:"develop"})]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"starting-rocketchat",children:"Starting RocketChat"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"To install all dependency libraries by yarn command."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"It will take long time to build porject with yarn dsv command."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn dsv # run only meteor (front and back) with pre-built packages\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"If server runing info showed in the shell, it means build and run the RocketChat Server successfully."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"@rocket.chat/meteor:dsv: I20240725-08:53:04.194(0)? +-----------------------------------------------+\n@rocket.chat/meteor:dsv: I20240725-08:53:04.194(0)? |                 SERVER RUNNING                |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.195(0)? +-----------------------------------------------+\n@rocket.chat/meteor:dsv: I20240725-08:53:04.195(0)? |                                               |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.196(0)? |  Rocket.Chat Version: 6.11.0-develop          |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.196(0)? |       NodeJS Version: 14.21.4 - x64           |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.196(0)? |      MongoDB Version: 7.0.5                   |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.196(0)? |       MongoDB Engine: wiredTiger              |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.197(0)? |             Platform: linux                   |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.197(0)? |         Process Port: 22674                   |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.197(0)? |             Site URL: http://localhost:3000/  |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.197(0)? |     ReplicaSet OpLog: Enabled                 |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.197(0)? |          Commit Hash: 978e2d18f6              |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.198(0)? |        Commit Branch: develop                 |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.198(0)? |                                               |\n@rocket.chat/meteor:dsv: I20240725-08:53:04.198(0)? +-----------------------------------------------+\n\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:"The following command always failed."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn dev # run all packages\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["After initialized, you can access the server at ",(0,s.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,s.jsxs)(t.p,{children:["More details at: ",(0,s.jsx)(t.a,{href:"https://developer.rocket.chat/v1/docs/server-environment-setup",children:"Developer Docs"}),"\nPS: For Windows you MUST use WSL2 and have +12Gb RAM"]}),"\n",(0,s.jsx)(t.h2,{id:"logs-levels",children:"Logs levels"}),"\n",(0,s.jsx)(t.p,{children:"Logs are a very useful way to monitor workspace activities in detail. They can also be very helpful for debugging in case of failures or errors. Here, you have the interface to configure how server logs are received."}),"\n",(0,s.jsx)(t.p,{children:"To access this section, go to Administration > Workspace > Settings > Logs."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Log Exceptions to Channel: Set a channel to receive all captured exceptions. Leave empty to ignore exceptions."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Log Level: A dropdown to select the level of logs to receive"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Log View Limit: The limit of logs to view"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Trace method calls: When enabled, it enables a trace of every method call."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Trace method filter: The text here is evaluated as RegExp (new RegExp('text')). Keep it empty to show a trace of every call."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Trace subscription calls: If enabled, every subscription call will be traced."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Trace subscription filter: The text here is evaluated as RegExp (new RegExp('text')). Keep it empty to show a trace of every call."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Log Exceptions to Channel: A channel that receives all captured exceptions. Leave empty to ignore exceptions."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"disable-two-factor-authentication-2fa",children:"Disable Two-factor authentication (2FA)"}),"\n",(0,s.jsx)(t.p,{children:"Navigate to Administration > Workspace > Settings> Accounts. You can view a list of some methods that are supported by Rocket.Chat:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Two Factor Authentication"}),"\n",(0,s.jsx)(t.li,{children:"Allow Name Change"}),"\n",(0,s.jsx)(t.li,{children:"Allow Email Change"}),"\n",(0,s.jsx)(t.li,{children:"Allow Username Change"}),"\n",(0,s.jsx)(t.li,{children:"Allow ... Change"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(27378);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);