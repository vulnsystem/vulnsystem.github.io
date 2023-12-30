"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66521],{84021:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=i(24246),r=i(71670);const n={id:"publishing-android-libraries",description:"Create a Markdown Document"},s="Publishing Android libraries to MavenCentral",a={id:"stream/publishing-android-libraries",title:"Publishing Android libraries to MavenCentral",description:"Create a Markdown Document",source:"@site/docs/stream/publishing-android-libraries.mdx",sourceDirName:"stream",slug:"/stream/publishing-android-libraries",permalink:"/docs/next/stream/publishing-android-libraries",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/stream/publishing-android-libraries.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1703899748,formattedLastUpdatedAt:"Dec 30, 2023",frontMatter:{id:"publishing-android-libraries",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"getstream.io",permalink:"/docs/next/stream/stream-getstreamio"},next:{title:"Debugging with Ngrok",permalink:"/docs/next/stream/debugging-with-ngrok"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Registering a Sonatype account",id:"registering-a-sonatype-account",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"publishing-android-libraries-to-mavencentral",children:"Publishing Android libraries to MavenCentral"}),"\n",(0,o.jsx)(t.p,{children:"Creating a great library is hard work. Coming up with the idea, implementing it, making sure you have a nice, stable public API that you control carefully and maintain\u2026 That\u2019s already lots to do."}),"\n",(0,o.jsx)(t.p,{children:"After all that, you need to make your library available to the public. Technically, you could distribute the .aar file any way you want, but the norm is publishing it to a publicly available Maven repository. It\u2019s a good idea to use one of the well-established repositories that people are already likely to have in their projects, to make getting started with your library as easy as possible."}),"\n",(0,o.jsx)(t.p,{children:"The fanciest place you can be in is The Central Repository via Sonatype OSSRH (OSS Repository Hosting), which I\u2019ll refer to as simply MavenCentral from here on. This is the place to be if you\u2019re a Maven dependency. Artifacts on MavenCentral are well trusted, and their integrity can be verified, as they are all required to be signed by the author."}),"\n",(0,o.jsxs)(t.admonition,{title:"JitPack or Sonatype OSSRH?",type:"info",children:[(0,o.jsxs)(t.p,{children:["The simplest choice would be ",(0,o.jsx)(t.a,{href:"https://jitpack.io/",children:"JitPack"}),", which might not give you much in terms of customization or control, but is very easy to get started with. All you have to do is publish your project on GitHub, and JitPack should be able to build and distribute it immediately. If you\u2019re new to libraries, this is a great choice for getting your code out there."]}),(0,o.jsxs)(t.p,{children:["I try to use JitPack but failed to config. If you success to use JitPack in the ",(0,o.jsx)(t.a,{href:"https://github.com/GetStream/stream-chat-android",children:"Android SDK for Stream Chat"}),", please let me know. Thanks"]})]}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Here's a quick overview of the steps we'll go through:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Registering a Jira account with Sonatype, and verifying your ownership of the group ID you want to publish your artifact with"}),"\n",(0,o.jsx)(t.li,{children:"Generating a GPG key pair for signing your artifacts, publishing your public key, and exporting your private key"}),"\n",(0,o.jsx)(t.li,{children:"Setting up Gradle tasks that can sign upload your artifacts to a staging repository"}),"\n",(0,o.jsx)(t.li,{children:"Manually going through the process of checking your artifacts in the staging repo and releasing them via the Sonatype web UI"}),"\n",(0,o.jsx)(t.li,{children:"Automating the close & release flow with a Gradle plugin"}),"\n",(0,o.jsx)(t.li,{children:"Configuring CI workflows with GitHub Actions to automate all of the above\nA lot of ground to cover - let\u2019s go!"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.p,{children:"We\u2019ll be using the following tools for this tutorial. You are free to use alternatives, but these are our favourites, and they work well for us."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The command line gpg tool"}),"\n",(0,o.jsx)(t.li,{children:"GitHub as the public host of the library\u2019s repository"}),"\n",(0,o.jsx)(t.li,{children:"GitHub Actions as the continuous integration solution\nFor this article, we\u2019ll assume that you already have your library developed, and have uploaded it to a public GitHub repository.\nWe\u2019ll use our very own Android Chat SDK in our examples. This SDK is made up of multiple artifacts, but for simplification, we\u2019ll just talk about publishing the low-level networking client, which lives in the stream-chat-android-client module of the GitHub repository."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"registering-a-sonatype-account",children:"Registering a Sonatype account"}),"\n",(0,o.jsxs)(t.p,{children:["First things first, you\u2019ll need an account in the ",(0,o.jsx)(t.a,{href:"https://issues.sonatype.org/secure/Dashboard.jspa",children:"Sonatype Jira"}),". Head over there and hit Sign up. Registration is straightforward, it just requires a username, an email, and a password.\nAfter you\u2019ve logged in, you\u2019ll need to open an issue, asking for access to the group ID that you\u2019ll want to publish your project under. For us, based on our domain name (gitcoins.io), our group ID is io.gitcoins. If you own a domain, it\u2019s best to choose the reversed version of that as your group ID. Otherwise, you\u2019ll have to stick with having a GitHub-based group ID."]}),"\n",(0,o.jsx)(t.p,{children:"After choosing a language and an avatar, you\u2019ll end up on this landing page - click on Create an issue"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Summary"}),": Create repository for your.group.id.here"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Description"}),": An optional, quick summary of what your project is."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Group Id"}),": Your group ID, as described a few sections earlier."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Project URL"}),": If your project has a webpage, the URL of that page. This can also be just the GitHub repository."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SCM url"}),": Your source control URL, i.e. the GitHub repository link."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Username(s)"}),": If you want additional users (on top of the one you\u2019re using for this process) to have deploy access for your group ID, you can list them here."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Already Synced to Central"}),": If you\u2019re just getting started, this should be No."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Soon after opening it, your issue will get a comment telling you to verify that you own the domain corresponding to your group ID. To comply with this, add the required TXT record to your domain - how to do this will depend on where your domain is registered, but it should be a fairly simple task. Login to the [goDaddy] (",(0,o.jsx)(t.a,{href:"https://dcc.godaddy.com/control/portfolio/gitcoins.io/settings",children:"https://dcc.godaddy.com/control/portfolio/gitcoins.io/settings"}),") to set the TXT record with the guide from ",(0,o.jsx)(t.a,{href:"https://issues.sonatype.org/browse/OSSRH-97587",children:"the issue created"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71670:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var o=i(27378);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);