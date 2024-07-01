"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39842],{47607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=t(24246),s=t(71670);const i={description:"How to adapt home page quickly."},o="HomePage",r={id:"homepage",title:"HomePage",description:"How to adapt home page quickly.",source:"@site/versioned_docs/version-3.0.0/homepage.mdx",sourceDirName:".",slug:"/homepage",permalink:"/zh-CN/docs/3.0.0/homepage",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1719832768,formattedLastUpdatedAt:"2024\u5e747\u67081\u65e5",frontMatter:{description:"How to adapt home page quickly."},sidebar:"docs",previous:{title:"QuickStart",permalink:"/zh-CN/docs/3.0.0/quickstart"},next:{title:"Introduction",permalink:"/zh-CN/docs/3.0.0/"}},l={},h=[{value:"NavBar",id:"navbar",level:2},{value:"TopBanner",id:"topbanner",level:2},{value:"HeroBanner",id:"herobanner",level:2},{value:"FeaturesContainer",id:"featurescontainer",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"homepage",children:"HomePage"}),"\n",(0,a.jsxs)(n.p,{children:["How to configure the home page which loaded when ",(0,a.jsx)(n.code,{children:"https://vulnsystem.github.io/"})," open?\nThere are navbar, TopBanner, HeroBanner, and FeaturesContainer from top to the bottom in the home page."]}),"\n",(0,a.jsx)(n.h2,{id:"navbar",children:"NavBar"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"navBar"})," is in the top of home page. You can adapt the navbar content according to the following code in the ",(0,a.jsx)(n.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/docusaurus.config.ts",children:"website/docusaurus.config.ts"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="NavBar"',children:"      navbar: {\n        hideOnScroll: true,\n        // highlight-next-line\n        title: 'WoofWoof',\n        logo: {\n          alt: '',\n          src: 'img/docusaurus.svg',\n          srcDark: 'img/docusaurus_keytar.svg',\n          width: 32,\n          height: 32,\n        },\n        items: [\n          {\n            type: 'doc',\n            position: 'left',\n            docId: 'quickstart',\n            // highlight-next-line\n            label: 'Docus',\n          },\n          {\n            type: 'docSidebar',\n            position: 'left',\n            sidebarId: 'api',\n            // highlight-next-line\n            label: 'API',\n          },\n          {to: 'blog', label: 'Blog', position: 'left'},\n          {to: 'showcase', label: 'Showcase', position: 'left'},\n          {\n            to: '/community/support',\n            // highlight-next-line\n            label: 'Community',\n            position: 'left',\n            activeBaseRegex: `/community/`,\n          },\n          // highlight-next-line\n          ......\n        ]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"topbanner",children:"TopBanner"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"TopBanner"})," is next to the ",(0,a.jsx)(n.strong,{children:"navbar"})," and ",(0,a.jsx)(n.strong,{children:"HeroBanner"})," next to the TopBanner. You can adapt the TopBanner and HeroBanner content in the home page according to the following code in the ",(0,a.jsx)(n.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/src/pages/index.tsx",children:"website/src/pages/index.tsx"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="TopBanner"',children:"function TopBanner() {\n  return (\n    <div className={styles.topBanner}>\n      <div className={styles.topBannerTitle}>\n        {'\ud83c\udf89\\xa0'}\n        <Link to=\"/blog/releases/3.0\" className={styles.topBannerTitleText}>\n          <Translate id=\"homepage.banner.launch.3.0\">\n            // highlight-next-line\n            {'Docusaurus\\xa03.0 is\\xa0out!\ufe0f'}\n          </Translate>\n        </Link>\n        {'\\xa0\ud83e\udd73'}\n      </div>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"herobanner",children:"HeroBanner"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"HeroBanner"})," next to the TopBanner. You can adapt the TopBanner and HeroBanner content in the home page according to the following code in the ",(0,a.jsx)(n.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/src/pages/index.tsx",children:"website/src/pages/index.tsx"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="HeroBanner"',children:"function HeroBanner() {\n  return (\n    <div className={styles.hero} data-theme=\"dark\">\n      <div className={styles.heroInner}>\n        <Heading as=\"h1\" className={styles.heroProjectTagline}>\n          <img\n            alt={translate({message: 'Docusaurus with Keytar'})}\n            className={styles.heroLogo}\n            src={useBaseUrl('/img/docusaurus_keytar.svg')}\n            width=\"200\"\n            height=\"200\"\n          />\n          <span\n            className={styles.heroTitleTextHtml}\n            // eslint-disable-next-line react/no-danger\n            dangerouslySetInnerHTML={{\n              __html: translate({\n                id: 'homepage.hero.title',\n                message:\n                  // highlight-next-line\n                  '<b>Anonymous</b>, <b>end-to-end cryptography</b> distributed event streaming platform',\n                description:\n                  'Home page hero title, can contain simple html tags',\n              }),\n            }}\n          />\n        </Heading>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"featurescontainer",children:"FeaturesContainer"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"FeaturesContainer"})," is next to the HeroBanner. You can adapt the FeaturesContainer content in the home page according to the following code in the ",(0,a.jsx)(n.a,{href:"https://github.com/vulnsystem/vulnsystem.github.io/blob/main/website/src/data/features.tsx",children:"website/src/data/features.tsx"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="Features"',children:"const FEATURES: FeatureItem[] = [\n  {\n    title: translate({\n      message: 'Based on Kafka',\n      id: 'homepage.features.powered-by-mdx.title',\n    }),\n    image: {\n      src: '/img/undraw_typewriter.svg',\n      width: 1009.54,\n      height: 717.96,\n    },\n    text: (\n      <Translate id=\"homepage.features.powered-by-mdx.text\">\n        // highlight-next-line\n        Apache Kafka is an open-source distributed event streaming platform \n        // highlight-next-line\n        used for high-performance data pipelines, streaming analytics, \n        // highlight-next-line\n        data integration, and mission-critical applications.\n      </Translate>\n    ),\n  },\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(27378);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);