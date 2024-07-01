"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30169],{13691:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(24246),n=i(71670);const r={description:"How to create add diagrams in markdown file."},a="Add diagrams with chatGPT",s={id:"docusaurus-diagrams",title:"Add diagrams with chatGPT",description:"How to create add diagrams in markdown file.",source:"@site/versioned_docs/version-3.0.1/docusaurus-diagrams.md",sourceDirName:".",slug:"/docusaurus-diagrams",permalink:"/zh-CN/docs/docusaurus-diagrams",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{description:"How to create add diagrams in markdown file."}},c={},d=[{value:"Question: convert picture to sequence diagram",id:"question-convert-picture-to-sequence-diagram",level:2},{value:"GPTs:",id:"gpts",level:2},{value:"Question: add one activation and note",id:"question-add-one-activation-and-note",level:2},{value:"GPTs:",id:"gpts-1",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"add-diagrams-with-chatgpt",children:"Add diagrams with chatGPT"}),"\n",(0,o.jsxs)(t.admonition,{title:"Useful links",type:"info",children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://mermaid.js.org/intro/",children:(0,o.jsx)(t.code,{children:"Mermaid lets you create diagrams and visualizations using text and code."})})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docusaurus.io/docs/markdown-features/diagrams",children:(0,o.jsx)(t.code,{children:"Docusaurus and Mermaid Diagrams"})})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://mermaid.live/edit",children:(0,o.jsx)(t.code,{children:"Mermaid Live Editor to easily create detailed and diagrams on line"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["I need to create one Sequence diagram like following, but do not know how to start. When I know there is one useful tool to draw diagram, so chatGPT with multimodal will help me start to use the tool qucikly.\nThanks to ",(0,o.jsx)(t.a,{href:"https://chatgpt.com/g/g-1IRFKwq4G-mermaid-chart-diagrams-and-charts",children:(0,o.jsx)(t.code,{children:"Mermaid Chart GPTs"})}),". It can convert the authorization code flow picture to pieces of Mermaid codes, then make simple adaption of codes quickly, you will have the sequence diagram you oneself.\nHow to ask questions to this GPTs?"]}),"\n",(0,o.jsx)(t.p,{align:"center",children:"\n![](/img/rocketchat/Microsoft-authorization-code-flow.svg)\n"}),"\n",(0,o.jsx)(t.h2,{id:"question-convert-picture-to-sequence-diagram",children:"Question: convert picture to sequence diagram"}),"\n",(0,o.jsx)(t.p,{children:"please convert the picture which discript the Microsoft authorization code flow to sequenceDiagram"}),"\n",(0,o.jsx)(t.h2,{id:"gpts",children:"GPTs:"}),"\n",(0,o.jsx)(t.p,{children:"To convert the Microsoft authorization code flow from the provided image to a sequence diagram, I'll follow these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Analyze the SVG content to understand the flow."}),"\n",(0,o.jsx)(t.li,{children:"Draft the corresponding sequenceDiagram in Mermaid syntax."}),"\n",(0,o.jsx)(t.li,{children:"Render the diagram for verification.\nLet's begin by summarizing the flow described in the SVG:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Microsoft Authorization Code Flow Summary"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The user navigates to the application."}),"\n",(0,o.jsx)(t.li,{children:"The application redirects the user to the Microsoft identity platform for authentication."}),"\n",(0,o.jsx)(t.li,{children:"The user authenticates and consents to the requested permissions."}),"\n",(0,o.jsx)(t.li,{children:"Microsoft identity platform redirects back to the application with an authorization code."}),"\n",(0,o.jsx)(t.li,{children:"The application requests an access token from the Microsoft identity platform using the authorization code."}),"\n",(0,o.jsx)(t.li,{children:"The Microsoft identity platform issues an access token."}),"\n",(0,o.jsx)(t.li,{children:"The application uses the access token to access resources on behalf of the user.\nNow, let's create the Mermaid diagram code for this flow"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"GPTs to call the mermaidchart.com API with the Microsoft Authorization Code Flow Summary"}),"\nBased on the given flow, here is the Mermaid sequence diagram code for the Microsoft authorization code flow:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"sequenceDiagram\n    participant User\n    participant Application\n    participant MicrosoftIdentityPlatform as Microsoft Identity Platform\n    participant ResourceServer as Resource Server\n\n    User->>Application: Navigate to the application\n    Application->>MicrosoftIdentityPlatform: Redirect to Microsoft for authentication\n    MicrosoftIdentityPlatform->>User: User authenticates and consents\n    User->>MicrosoftIdentityPlatform: Authentication and consent response\n    MicrosoftIdentityPlatform->>Application: Redirect back with authorization code\n    Application->>MicrosoftIdentityPlatform: Request access token with authorization code\n    MicrosoftIdentityPlatform->>Application: Issue access token\n    Application->>ResourceServer: Access resources with access token\n    ResourceServer->>Application: Resource response\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Then GPTs render this diagram to confirm its validity and draw the diagram."})}),"\n",(0,o.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant User\n    participant Application\n    participant MicrosoftIdentityPlatform as Microsoft Identity Platform\n    participant ResourceServer as Resource Server\n\n    User->>Application: Navigate to the application\n    Application->>MicrosoftIdentityPlatform: Redirect to Microsoft for authentication\n    MicrosoftIdentityPlatform->>User: User authenticates and consents\n    User->>MicrosoftIdentityPlatform: Authentication and consent response\n    MicrosoftIdentityPlatform->>Application: Redirect back with authorization code\n    Application->>MicrosoftIdentityPlatform: Request access token with authorization code\n    MicrosoftIdentityPlatform->>Application: Issue access token\n    Application->>ResourceServer: Access resources with access token\n    ResourceServer->>Application: Resource response"}),"\n",(0,o.jsx)(t.h2,{id:"question-add-one-activation-and-note",children:"Question: add one activation and note"}),"\n",(0,o.jsx)(t.p,{children:"please add one Activation from resource server to application, and add the note to the Activation."}),"\n",(0,o.jsx)(t.h2,{id:"gpts-1",children:"GPTs:"}),"\n",(0,o.jsx)(t.p,{children:"Here is the updated Mermaid sequence diagram code with an activation from the Resource Server to the Application, including a note on the activation:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"sequenceDiagram\n    participant User\n    participant Application\n    participant MicrosoftIdentityPlatform as Microsoft Identity Platform\n    participant ResourceServer as Resource Server\n\n    User->>Application: Navigate to the application\n    Application->>MicrosoftIdentityPlatform: Redirect to Microsoft for authentication\n    MicrosoftIdentityPlatform->>User: User authenticates and consents\n    User->>MicrosoftIdentityPlatform: Authentication and consent response\n    MicrosoftIdentityPlatform->>Application: Redirect back with authorization code\n    Application->>MicrosoftIdentityPlatform: Request access token with authorization code\n    MicrosoftIdentityPlatform->>Application: Issue access token\n    Application->>ResourceServer: Access resources with access token\n    activate ResourceServer\n    ResourceServer->>Application: Resource response\n    Note right of ResourceServer: Activation during resource access\n    deactivate ResourceServer\n\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Then GPTs render this diagram to confirm its validity and draw the diagram."})}),"\n",(0,o.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant User\n    participant Application\n    participant MicrosoftIdentityPlatform as Microsoft Identity Platform\n    participant ResourceServer as Resource Server\n\n    User->>Application: Navigate to the application\n    Application->>MicrosoftIdentityPlatform: Redirect to Microsoft for authentication\n    MicrosoftIdentityPlatform->>User: User authenticates and consents\n    User->>MicrosoftIdentityPlatform: Authentication and consent response\n    MicrosoftIdentityPlatform->>Application: Redirect back with authorization code\n    Application->>MicrosoftIdentityPlatform: Request access token with authorization code\n    MicrosoftIdentityPlatform->>Application: Issue access token\n    Application->>ResourceServer: Access resources with access token\n    activate ResourceServer\n    ResourceServer->>Application: Resource response\n    Note right of ResourceServer: Activation during resource access\n    deactivate ResourceServer\n"})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71670:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var o=i(27378);const n={},r=o.createContext(n);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);