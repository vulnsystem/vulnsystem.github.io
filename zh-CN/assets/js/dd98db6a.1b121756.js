"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40666],{60270:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(24246),t=n(71670);const o={description:"How to get started Docus quickly."},r="QuickStart",a={id:"quickstart",title:"QuickStart",description:"How to get started Docus quickly.",source:"@site/versioned_docs/version-3.0.1/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/zh-CN/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{description:"How to get started Docus quickly."},sidebar:"woofwoof",previous:{title:"ChatGPT",permalink:"/zh-CN/docs/kaleidoscope/kaleidoscope-chatgpt"},next:{title:"HomePage",permalink:"/zh-CN/docs/homepage"}},c={},d=[{value:"Fork the Docusaurs repository",id:"fork-the-docusaurs-repository",level:2},{value:"Rename the Repository on Github",id:"rename-the-repository-on-github",level:2},{value:"Adapt the page branch of website",id:"adapt-the-page-branch-of-website",level:2},{value:"Configure docusaurus.config.ts",id:"configure-docusaurusconfigts",level:2},{value:"To Deploy Automatically",id:"to-deploy-automatically",level:2},{value:"Add new files",id:"add-new-files",level:2},{value:"Creae an new mdx file",id:"createfile",level:3},{value:"Adapte the sidebar",id:"adpatesidebar",level:3},{value:"Adapte the navbar optional",id:"adpatenavbar",level:3},{value:"Tagging a new version",id:"tagging-a-new-version",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsxs)(s.p,{children:["Docusaurus is most quick, easy, and effect way to build an knowledge sharing website. ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/",children:"packages"}),"."]}),"\n",(0,i.jsx)(s.div,{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/markdown-features/code-blocks",children:(0,i.jsx)(s.code,{children:"Code block"})})," and ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/markdown-features/admonitions",children:(0,i.jsx)(s.code,{children:"Admonitions"})})," feaures are commonly used."]})}),"\n",(0,i.jsxs)(s.admonition,{title:"Useful Links",type:"tip",children:[(0,i.jsxs)(s.p,{children:["\u26a1\ufe0f ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docusaurus.config.ts",children:(0,i.jsx)(s.code,{children:"website/docusaurus.config.ts"})})]}),(0,i.jsxs)(s.p,{children:["\u26a1\ufe0f ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/sidebars.ts",children:(0,i.jsx)(s.code,{children:"website/sidebars.ts"})})]}),(0,i.jsxs)(s.p,{children:["\u26a1\ufe0f ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/actions",children:(0,i.jsx)(s.code,{children:"Actions"})})]}),(0,i.jsxs)(s.p,{children:["\u26a1\ufe0f ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/tree/main/website/docs",children:(0,i.jsx)(s.code,{children:"website/docs"})})]})]}),"\n",(0,i.jsx)(s.h2,{id:"fork-the-docusaurs-repository",children:"Fork the Docusaurs repository"}),"\n",(0,i.jsxs)(s.p,{children:["The docusaurus.io is one of repositories in Facebook, So the ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus",children:"repository"})," can be forked to your orgniaztion."]}),"\n",(0,i.jsx)(s.h2,{id:"rename-the-repository-on-github",children:"Rename the Repository on Github"}),"\n",(0,i.jsxs)(s.p,{children:["The name of the repository should adapte to ",(0,i.jsx)(s.strong,{children:"vulnsystem.github.io"})," in the settings page. vulnsystem is your orgniaztion name.\nChange the branch in the settings > pages to ",(0,i.jsx)(s.strong,{children:"main with docs dir"}),". To open the vulnsystem.github.io in broswer, the readme will be loaded."]}),"\n",(0,i.jsx)(s.h2,{id:"adapt-the-page-branch-of-website",children:"Adapt the page branch of website"}),"\n",(0,i.jsxs)(s.p,{children:["To open the cloned repository in broswer, change the branch in the settings > pages to ",(0,i.jsx)(s.strong,{children:"gh-pages with root dir"}),".\nIf there is no gh-pages branch in the repository, create the new branch manully."]}),"\n",(0,i.jsx)(s.h2,{id:"configure-docusaurusconfigts",children:"Configure docusaurus.config.ts"}),"\n",(0,i.jsxs)(s.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,i.jsx)(s.strong,{children:"ways"}),".  Please click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/docusaurus.config.ts",children:"docusaurus.config.ts"})})," to adapt the configuration."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.ts"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'WoofWoof',\n    tagline: getLocalizedConfigValue('tagline'),\n    organizationName: 'vulnsystem',\n    projectName: 'vulnsystem.github.io',\n    baseUrl,\n    baseUrlIssueBanner: true,\n    url: 'https://vulnsystem.github.io',\n    // Dogfood both settings:\n    // - force trailing slashes for deploy previews\n    // - avoid trailing slashes in prod\n    trailingSlash: isDeployPreview\n   }\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["And change all the github links to ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io",children:"https://github.com/vulnsystem/vulnsystem.github.io"})})]}),"\n",(0,i.jsx)(s.h2,{id:"to-deploy-automatically",children:"To Deploy Automatically"}),"\n",(0,i.jsxs)(s.p,{children:["We will use a popular third-party deployment action: ",(0,i.jsx)(s.a,{href:"https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus",children:"peaceiris/actions-gh-pages"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Add this workflow file in ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/.github/workflows/deploy.yml",children:(0,i.jsx)(s.code,{children:".github/workflows/deploy.yml"})})," derictory:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yml",metastring:'title=".github/workflows/deploy.yml"',children:"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches: [main]\n    paths: \n      - website/**\n\n  pull_request:\n    branches: [main]\n    paths: \n      - packages/**\n      - website/**\n\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.head_ref || github.run_id }}\n  cancel-in-progress: true\n\njobs:\n  build:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1\n      - name: Set up Node\n        uses: actions/setup-node@8f152de45cc393bb48ce5d89d36b731f54556e65 # v4.0.0\n        with:\n          node-version: '18'\n          cache: yarn\n      - name: Installation\n        run: yarn\n      - name: Build blog-only\n        working-directory: website\n        run: |\n          yarn docusaurus docs:version 3.0.1\n          yarn workspace website build\n      - name: Deploy to gh-pages branch\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./website/build\n          # Assign commit authorship to the official GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"If the following error occur:\nConversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':\nNo such file or directory @ dir_chdir - /github/workspace/docs"}),(0,i.jsxs)(s.p,{children:["Please read the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/orgs/community/discussions/32805",children:"the solution"})})," online.\n\ud83c\udfaf As to this project, add the docs directory in the root of gh-pages branch."]})]}),"\n",(0,i.jsx)(s.h2,{id:"add-new-files",children:"Add new files"}),"\n",(0,i.jsx)(s.h3,{id:"createfile",children:"Creae an new mdx file"}),"\n",(0,i.jsxs)(s.p,{children:["Add or adapt the files in the ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/tree/main/website/docs",children:(0,i.jsx)(s.code,{children:"website/docs"})})," dir"]}),"\n",(0,i.jsx)(s.h3,{id:"adpatesidebar",children:"Adapte the sidebar"}),"\n",(0,i.jsxs)(s.p,{children:["Adappte the sidebar configration in the ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/sidebars.ts",children:(0,i.jsx)(s.code,{children:"website/sidebars.ts"})})," file"]}),"\n",(0,i.jsx)(s.h3,{id:"adpatenavbar",children:"Adapte the navbar optional"}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/docusaurus.config.ts",children:(0,i.jsx)(s.code,{children:"website/docusaurus.config.ts"})})," file, please adpate the ",(0,i.jsx)(s.strong,{children:"docId"})," to make which doc will be loaded default when click the label in the navbar."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.ts"',children:"      navbar: {\n        hideOnScroll: true,\n        title: 'WoofWoof',\n        logo: {\n          alt: '',\n          src: 'img/docusaurus.svg',\n          srcDark: 'img/docusaurus_keytar.svg',\n          width: 32,\n          height: 32,\n        },\n        items: [\n          {\n            type: 'doc',\n            position: 'left',\n            docId: 'quickstart',\n            label: 'Docus',\n          },\n          {\n            type: 'docSidebar',\n            position: 'left',\n            sidebarId: 'api',\n            label: 'API',\n          },\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsxs)(s.p,{children:["\ud83c\udfaf The docId in the items have been adapted from ",(0,i.jsx)(s.strong,{children:"introduction"})," to ",(0,i.jsx)(s.strong,{children:"quickstart"}),", so when I click the Docus in the navbar, the quickstart.mdx file will be loaded defaultly."]}),(0,i.jsxs)(s.p,{children:["\ud83c\udfaf The label in the items have been adapted from ",(0,i.jsx)(s.strong,{children:"Doc"})," to ",(0,i.jsx)(s.strong,{children:"Dous"}),", so when home page loaded the navbar info changed to Docus."]})]}),"\n",(0,i.jsx)(s.h2,{id:"tagging-a-new-version",children:"Tagging a new version"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Make sure the current docs version in the ",(0,i.jsx)(s.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/tree/main/website/docs",children:(0,i.jsx)(s.code,{children:"website/docs"})})," is ready to be frozen."]}),"\n",(0,i.jsx)(s.li,{children:"Pickup a new version number (3.0.1) which is higher than the latest version (3.0.0) and issue the following command with the new version number to tag a new project version."}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"yarn docusaurus docs:version 3.0.1\n"})}),"\n",(0,i.jsx)(s.p,{children:"After tagging a new version 3.0.1, the document versioning mechanism will:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Copy the full ",(0,i.jsx)(s.code,{children:"website/docs/"})," folder contents into a new ",(0,i.jsx)(s.code,{children:"website/versioned_docs/version-3.0.1/"})," folder."]}),"\n",(0,i.jsxs)(s.li,{children:["Create a versioned sidebars file based from ",(0,i.jsx)(s.code,{children:"website/sidebars.ts"})," - saved as ",(0,i.jsx)(s.code,{children:"website/versioned_sidebars/version-3.0.1-sidebars.json"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Append the new version number 3.0.1 to ",(0,i.jsx)(s.code,{children:"website/versions.json"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://vulnsystem.github.io/docs/versionin",children:"Versioning"})," is very important conception in the docus."]}),(0,i.jsxs)(s.p,{children:["If you do not know when to create a new version , please read ",(0,i.jsx)(s.a,{href:"https://vulnsystem.github.io/docs/versioning#configuring-versioning-behavior",children:"versioning behavior"}),"."]}),(0,i.jsx)(s.p,{children:"How to tag a new version, please following the command."})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var i=n(27378);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);