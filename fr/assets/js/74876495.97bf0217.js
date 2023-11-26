"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5049],{35499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=n(24246),o=n(71670);const i={description:"How to get started Docus quickly."},r="QuickStart",a={id:"quickstart",title:"QuickStart",description:"How to get started Docus quickly.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/fr/docs/next/quickstart",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/fr",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1700991672,formattedLastUpdatedAt:"26 nov. 2023",frontMatter:{description:"How to get started Docus quickly."},sidebar:"docs",next:{title:"Introduction",permalink:"/fr/docs/next/"}},c={},u=[{value:"Fork the Docusaurs repository",id:"fork-the-docusaurs-repository",level:2},{value:"Rename the Repository on Github",id:"rename-the-repository-on-github",level:2},{value:"Adapt the page branch of website",id:"adapt-the-page-branch-of-website",level:2},{value:"Configuration",id:"configuration",level:2},{value:"To Deploy Automatically",id:"to-deploy-automatically",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quickstart",children:"QuickStart"}),"\n",(0,s.jsxs)(t.p,{children:["Docusaurus is most quick, easy, and effect way to build an knowledge sharing website. ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/",children:"packages"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"We do not creat an new empty Docus website and build up step by step.\nIt is hard from 0 to 1, but easy from 1 to N.\nSo we fork a mature website like docusaurus.io as initial status."})}),"\n",(0,s.jsx)(t.h2,{id:"fork-the-docusaurs-repository",children:"Fork the Docusaurs repository"}),"\n",(0,s.jsxs)(t.p,{children:["The docusaurus.io is one of repositories in Facebook, So the ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus",children:"repository"})," can be forked to your orgniaztion."]}),"\n",(0,s.jsx)(t.h2,{id:"rename-the-repository-on-github",children:"Rename the Repository on Github"}),"\n",(0,s.jsx)(t.p,{children:"The name of the repository should adapte to ** vulnsystem.github.io ** in the settings page. vulnsystem is your orgniaztion name.\nChange the branch in the settings > pages to ** main with docs dir **. To open the vulnsystem.github.io in broswer, the readme will be loaded."}),"\n",(0,s.jsx)(t.h2,{id:"adapt-the-page-branch-of-website",children:"Adapt the page branch of website"}),"\n",(0,s.jsx)(t.p,{children:"To open the cloned repository in broswer, change the branch in the settings > pages to ** gh-pages with root dir **.\nIf there is no gh-pages branch in the repository, create the new branch manully."}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,s.jsx)(t.strong,{children:"ways"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.ts"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'WoofWoof',\n    tagline: getLocalizedConfigValue('tagline'),\n    organizationName: 'vulnsystem',\n    projectName: 'vulnsystem.github.io',\n    baseUrl,\n    baseUrlIssueBanner: true,\n    url: 'https://vulnsystem.github.io',\n    // Dogfood both settings:\n    // - force trailing slashes for deploy previews\n    // - avoid trailing slashes in prod\n    trailingSlash: isDeployPreview\n   }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["And change all the github links to ** ",(0,s.jsx)(t.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io",children:"https://github.com/vulnsystem/vulnsystem.github.io"}),"**"]}),"\n",(0,s.jsx)(t.h2,{id:"to-deploy-automatically",children:"To Deploy Automatically"}),"\n",(0,s.jsxs)(t.p,{children:["We will use a popular third-party deployment action: ",(0,s.jsx)(t.a,{href:"https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus",children:"peaceiris/actions-gh-pages"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Add this workflow file in .github/workflows/ derictory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",metastring:'title=".github/workflows/deploy.yml"',children:"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches: [main]\n    paths: \n      - website/**\n\n  pull_request:\n    branches: [main]\n    paths: \n      - packages/**\n      - website/**\n\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.head_ref || github.run_id }}\n  cancel-in-progress: true\n\njobs:\n  build:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1\n      - name: Set up Node\n        uses: actions/setup-node@8f152de45cc393bb48ce5d89d36b731f54556e65 # v4.0.0\n        with:\n          node-version: '18'\n          cache: yarn\n      - name: Installation\n        run: yarn\n      - name: Build blog-only\n        working-directory: website\n        run: |\n          yarn workspace website build\n      - name: Deploy to gh-pages branch\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./website/build\n          # Assign commit authorship to the official GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"If the following error occur:\nConversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':\nNo such file or directory @ dir_chdir - /github/workspace/docs"}),(0,s.jsxs)(t.p,{children:["Please read the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/orgs/community/discussions/32805",children:"5-minute solution"})})," online.\n\ud83c\udfaf As to this project, add the docs directory in the root of gh-pages branch."]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(27378);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);