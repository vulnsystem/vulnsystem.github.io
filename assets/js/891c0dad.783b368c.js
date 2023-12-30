"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20663],{3818:(e,n,t)=>{t.d(n,{Z:()=>r});var s=t(24246),i=t(27378);function r({children:e="Boom!",message:n="Boom!\nSomething bad happened, but you can try again!",cause:t}){const[r,o]=(0,i.useState)(!1);if(r)throw new Error(n,{cause:t?new Error(t):void 0});return(0,s.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>o(!0),children:e})}},16319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(24246),i=t(71670),r=t(3818);const o={sidebar_label:"Client API"},l="Docusaurus Client API",a={id:"docusaurus-core",title:"Docusaurus Client API",description:"Docusaurus provides some APIs on the clients that can be helpful to you when building your site.",source:"@site/docs/docusaurus-core.mdx",sourceDirName:".",slug:"/docusaurus-core",permalink:"/docs/next/docusaurus-core",draft:!1,unlisted:!1,editUrl:"https://github.com/vulnsystem/vulnsystem.github.io/edit/main/website/docs/docusaurus-core.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1703897756,formattedLastUpdatedAt:"Dec 30, 2023",frontMatter:{sidebar_label:"Client API"},sidebar:"api",previous:{title:"CLI",permalink:"/docs/next/cli"},next:{title:"docusaurus.config.js",permalink:"/docs/next/api/docusaurus-config"}},c={},d=[{value:"Components",id:"components",level:2},{value:"<code>&lt;ErrorBoundary /&gt;</code>",id:"errorboundary",level:3},{value:"Props",id:"errorboundary-props",level:4},{value:"<code>&lt;Head/&gt;</code>",id:"head",level:3},{value:"<code>&lt;Link/&gt;</code>",id:"link",level:3},{value:"<code>to</code>: string",id:"to-string",level:4},{value:"<code>&lt;Redirect/&gt;</code>",id:"redirect",level:3},{value:"<code>&lt;BrowserOnly/&gt;</code>",id:"browseronly",level:3},{value:"Props",id:"browseronly-props",level:4},{value:"Example with code",id:"browseronly-example-code",level:4},{value:"Example with a library",id:"browseronly-example-library",level:4},{value:"<code>&lt;Interpolate/&gt;</code>",id:"interpolate",level:3},{value:"Props",id:"interpolate-props",level:4},{value:"<code>&lt;Translate/&gt;</code>",id:"translate",level:3},{value:"Props",id:"translate-props",level:4},{value:"Example",id:"example",level:4},{value:"Hooks",id:"hooks",level:2},{value:"<code>useDocusaurusContext</code>",id:"useDocusaurusContext",level:3},{value:"<code>useIsBrowser</code>",id:"useIsBrowser",level:3},{value:"<code>useBaseUrl</code>",id:"useBaseUrl",level:3},{value:"Options",id:"options",level:4},{value:"Example usage:",id:"example-usage",level:4},{value:"<code>useBaseUrlUtils</code>",id:"useBaseUrlUtils",level:3},{value:"<code>useGlobalData</code>",id:"useGlobalData",level:3},{value:"<code>usePluginData</code>",id:"usePluginData",level:3},{value:"<code>useAllPluginInstancesData</code>",id:"useAllPluginInstancesData",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>interpolate</code>",id:"interpolate-1",level:3},{value:"Signature",id:"signature",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>translate</code>",id:"translate-imperative",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Example",id:"example-2",level:4},{value:"Modules",id:"modules",level:2},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3},{value:"<code>constants</code>",id:"constants",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docusaurus-client-api",children:"Docusaurus Client API"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus provides some APIs on the clients that can be helpful to you when building your site."}),"\n",(0,s.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(n.h3,{id:"errorboundary",children:(0,s.jsx)(n.code,{children:"<ErrorBoundary />"})}),"\n",(0,s.jsxs)(n.p,{children:["This component creates a ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/error-boundaries.html",children:"React error boundary"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Use it to wrap components that might throw, and display a fallback when that happens instead of crashing the whole app."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport ErrorBoundary from '@docusaurus/ErrorBoundary';\n\nconst SafeComponent = () => (\n  <ErrorBoundary\n    fallback={({error, tryAgain}) => (\n      <div>\n        <p>This component crashed because of error: {error.message}.</p>\n        <button onClick={tryAgain}>Try Again!</button>\n      </div>\n    )}>\n    <SomeDangerousComponentThatMayThrow />\n  </ErrorBoundary>\n);\n"})}),"\n","\n","\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To see it in action, click here: ",(0,s.jsx)(r.Z,{})]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Docusaurus uses this component to catch errors within the theme's layout, and also within the entire app."})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This component doesn't catch build-time errors and only protects against client-side render errors that can happen when using stateful React components."})}),"\n",(0,s.jsx)(n.h4,{id:"errorboundary-props",children:"Props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fallback"}),": an optional render callback returning a JSX element. It will receive an object with 2 attributes: ",(0,s.jsx)(n.code,{children:"error"}),", the error that was caught, and ",(0,s.jsx)(n.code,{children:"tryAgain"}),", a function (",(0,s.jsx)(n.code,{children:"() => void"}),") callback to reset the error in the component and try rendering it again. If not present, ",(0,s.jsx)(n.code,{children:"@theme/Error"})," will be rendered instead. ",(0,s.jsx)(n.code,{children:"@theme/Error"})," is used for the error boundaries wrapping the site, above the layout."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fallback"})," prop is a callback, and ",(0,s.jsx)(n.strong,{children:"not a React functional component"}),". You can't use React hooks inside this callback."]})}),"\n",(0,s.jsx)(n.h3,{id:"head",children:(0,s.jsx)(n.code,{children:"<Head/>"})}),"\n",(0,s.jsxs)(n.p,{children:["This reusable React component will manage all of your changes to the document head. It takes plain HTML tags and outputs plain HTML tags and is beginner-friendly. It is a wrapper around ",(0,s.jsx)(n.a,{href:"https://github.com/nfl/react-helmet",children:"React Helmet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Usage Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React from \'react\';\n// highlight-next-line\nimport Head from \'@docusaurus/Head\';\n\nconst MySEO = () => (\n  // highlight-start\n  <Head>\n    <meta property="og:description" content="My custom description" />\n    <meta charSet="utf-8" />\n    <title>My Title</title>\n    <link rel="canonical" href="http://mysite.com/example" />\n  </Head>\n  // highlight-end\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Nested or latter components will override duplicate usages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Parent>\n  {/* highlight-start */}\n  <Head>\n    <title>My Title</title>\n    <meta name="description" content="Helmet application" />\n  </Head>\n  {/* highlight-end */}\n  <Child>\n    {/* highlight-start */}\n    <Head>\n      <title>Nested Title</title>\n      <meta name="description" content="Nested component" />\n    </Head>\n    {/* highlight-end */}\n  </Child>\n</Parent>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Outputs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<head>\n  <title>Nested Title</title>\n  <meta name="description" content="Nested component" />\n</head>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"link",children:(0,s.jsx)(n.code,{children:"<Link/>"})}),"\n",(0,s.jsxs)(n.p,{children:["This component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an ",(0,s.jsx)(n.code,{children:"IntersectionObserver"})," to fetch a low-priority request when the ",(0,s.jsx)(n.code,{children:"<Link>"})," is in the viewport and then use an ",(0,s.jsx)(n.code,{children:"onMouseOver"})," event to trigger a high-priority request when it is likely that a user will navigate to the requested resource."]}),"\n",(0,s.jsxs)(n.p,{children:["The component is a wrapper around react-router\u2019s ",(0,s.jsx)(n.code,{children:"<Link>"})," component that adds useful enhancements specific to Docusaurus. All props are passed through to react-router\u2019s ",(0,s.jsx)(n.code,{children:"<Link>"})," component."]}),"\n",(0,s.jsxs)(n.p,{children:["External links also work, and automatically have these props: ",(0,s.jsx)(n.code,{children:'target="_blank" rel="noopener noreferrer"'}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport Link from '@docusaurus/Link';\n\nconst Page = () => (\n  <div>\n    <p>\n      {/* highlight-next-line */}\n      Check out my <Link to=\"/blog\">blog</Link>!\n    </p>\n    <p>\n      {/* highlight-next-line */}\n      Follow me on <Link to=\"https://twitter.com/docusaurus\">Twitter</Link>!\n    </p>\n  </div>\n);\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"to-string",children:[(0,s.jsx)(n.code,{children:"to"}),": string"]}),"\n",(0,s.jsxs)(n.p,{children:["The target location to navigate to. Example: ",(0,s.jsx)(n.code,{children:"/docs/introduction"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Link to="/courses" />\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Prefer this component to vanilla ",(0,s.jsx)(n.code,{children:"<a>"})," tags because Docusaurus does a lot of optimizations (e.g. broken path detection, prefetching, applying base URL...) if you use ",(0,s.jsx)(n.code,{children:"<Link>"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"redirect",children:(0,s.jsx)(n.code,{children:"<Redirect/>"})}),"\n",(0,s.jsxs)(n.p,{children:["Rendering a ",(0,s.jsx)(n.code,{children:"<Redirect>"})," will navigate to a new location. The new location will override the current location in the history stack like server-side redirects (HTTP 3xx) do. You can refer to ",(0,s.jsx)(n.a,{href:"https://reacttraining.com/react-router/web/api/Redirect",children:"React Router's Redirect documentation"})," for more info on available props."]}),"\n",(0,s.jsx)(n.p,{children:"Example usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport {Redirect} from '@docusaurus/router';\n\nconst Home = () => {\n  // highlight-next-line\n  return <Redirect to=\"/docs/test\" />;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@docusaurus/router"})," implements ",(0,s.jsx)(n.a,{href:"https://reacttraining.com/react-router/web/guides/quick-start",children:"React Router"})," and supports its features."]})}),"\n",(0,s.jsx)(n.h3,{id:"browseronly",children:(0,s.jsx)(n.code,{children:"<BrowserOnly/>"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<BrowserOnly>"})," component permits to render React components only in the browser after the React app has hydrated."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use it for integrating with code that can't run in Node.js, because the ",(0,s.jsx)(n.code,{children:"window"})," or ",(0,s.jsx)(n.code,{children:"document"})," objects are being accessed."]})}),"\n",(0,s.jsx)(n.h4,{id:"browseronly-props",children:"Props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"children"}),": render function prop returning browser-only JSX. Will not be executed in Node.js"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fallback"})," (optional): JSX to render on the server (Node.js) and until React hydration completes."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"browseronly-example-code",children:"Example with code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// highlight-start\nimport BrowserOnly from '@docusaurus/BrowserOnly';\n// highlight-end\n\nconst MyComponent = () => {\n  return (\n    // highlight-start\n    <BrowserOnly>\n      {() => <span>page url = {window.location.href}</span>}\n    </BrowserOnly>\n    // highlight-end\n  );\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"browseronly-example-library",children:"Example with a library"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// highlight-start\nimport BrowserOnly from '@docusaurus/BrowserOnly';\n// highlight-end\n\nconst MyComponent = (props) => {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent = require('some-lib').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"interpolate",children:(0,s.jsx)(n.code,{children:"<Interpolate/>"})}),"\n",(0,s.jsx)(n.p,{children:"A simple interpolation component for text containing dynamic placeholders."}),"\n",(0,s.jsx)(n.p,{children:"The placeholders will be replaced with the provided dynamic values and JSX elements of your choice (strings, links, styled elements...)."}),"\n",(0,s.jsx)(n.h4,{id:"interpolate-props",children:"Props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"children"}),": text containing interpolation placeholders like ",(0,s.jsx)(n.code,{children:"{placeholderName}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"values"}),": object containing interpolation placeholder values"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport Link from '@docusaurus/Link';\nimport Interpolate from '@docusaurus/Interpolate';\n\nexport default function VisitMyWebsiteMessage() {\n  return (\n    // highlight-start\n    <Interpolate\n      values={{\n        firstName: 'S\xe9bastien',\n        website: (\n          <Link to=\"https://docusaurus.io\" className=\"my-website-class\">\n            website\n          </Link>\n        ),\n      }}>\n      {'Hello, {firstName}! How are you? Take a look at my {website}'}\n    </Interpolate>\n    // highlight-end\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"translate",children:(0,s.jsx)(n.code,{children:"<Translate/>"})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.a,{href:"/docs/next/i18n/introduction",children:"localizing your site"}),", the ",(0,s.jsx)(n.code,{children:"<Translate/>"})," component will allow providing ",(0,s.jsx)(n.strong,{children:"translation support to React components"}),", such as your homepage. The ",(0,s.jsx)(n.code,{children:"<Translate>"})," component supports ",(0,s.jsx)(n.a,{href:"#interpolate",children:"interpolation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The translation strings will statically extracted from your code with the ",(0,s.jsx)(n.a,{href:"/docs/next/cli#docusaurus-write-translations-sitedir",children:(0,s.jsx)(n.code,{children:"docusaurus write-translations"})})," CLI and a ",(0,s.jsx)(n.code,{children:"code.json"})," translation file will be created in ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<Translate/>"})," props ",(0,s.jsx)(n.strong,{children:"must be hardcoded strings"}),"."]}),(0,s.jsxs)(n.p,{children:["Apart from the ",(0,s.jsx)(n.code,{children:"values"})," prop used for interpolation, it is ",(0,s.jsx)(n.strong,{children:"not possible to use variables"}),", or the static extraction wouldn't work."]})]}),"\n",(0,s.jsx)(n.h4,{id:"translate-props",children:"Props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"children"}),": untranslated string in the default site locale (can contain ",(0,s.jsx)(n.a,{href:"#interpolate",children:"interpolation placeholders"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": optional value to be used as the key in JSON translation files"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": optional text to help the translator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"values"}),": optional object containing interpolation placeholder values"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-start\nimport Translate from '@docusaurus/Translate';\n// highlight-end\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>\n        {/* highlight-start */}\n        <Translate\n          id=\"homepage.title\"\n          description=\"The homepage welcome message\">\n          Welcome to my website\n        </Translate>\n        {/* highlight-end */}\n      </h1>\n      <main>\n        {/* highlight-start */}\n        <Translate values={{firstName: 'S\xe9bastien'}}>\n          {'Welcome, {firstName}! How are you?'}\n        </Translate>\n        {/* highlight-end */}\n      </main>\n    </Layout>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["You can even omit the children prop and specify a translation string in your ",(0,s.jsx)(n.code,{children:"code.json"})," file manually after running the ",(0,s.jsx)(n.code,{children:"docusaurus write-translations"})," CLI command."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Translate id="homepage.title" />\n'})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<Translate>"})," component supports interpolation. You can also implement ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/i18n/i18n-tutorial.mdx#pluralization",children:"string pluralization"})," through some custom code and the ",(0,s.jsxs)(n.a,{href:"#translate-imperative",children:[(0,s.jsx)(n.code,{children:"translate"})," imperative API"]}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsx)(n.h3,{id:"useDocusaurusContext",children:(0,s.jsx)(n.code,{children:"useDocusaurusContext"})}),"\n",(0,s.jsxs)(n.p,{children:["React hook to access Docusaurus Context. The context contains the ",(0,s.jsx)(n.code,{children:"siteConfig"})," object from ",(0,s.jsx)(n.a,{href:"/docs/next/api/docusaurus-config",children:"docusaurus.config.js"})," and some additional site metadata."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type PluginVersionInformation =\n  | {readonly type: 'package'; readonly version?: string}\n  | {readonly type: 'project'}\n  | {readonly type: 'local'}\n  | {readonly type: 'synthetic'};\n\ntype SiteMetadata = {\n  readonly docusaurusVersion: string;\n  readonly siteVersion?: string;\n  readonly pluginVersions: Record<string, PluginVersionInformation>;\n};\n\ntype I18nLocaleConfig = {\n  label: string;\n  direction: string;\n};\n\ntype I18n = {\n  defaultLocale: string;\n  locales: [string, ...string[]];\n  currentLocale: string;\n  localeConfigs: Record<string, I18nLocaleConfig>;\n};\n\ntype DocusaurusContext = {\n  siteConfig: DocusaurusConfig;\n  siteMetadata: SiteMetadata;\n  globalData: Record<string, unknown>;\n  i18n: I18n;\n  codeTranslations: Record<string, string>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Usage example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst MyComponent = () => {\n  // highlight-next-line\n  const {siteConfig, siteMetadata} = useDocusaurusContext();\n  return (\n    <div>\n      {/* highlight-start */}\n      <h1>{siteConfig.title}</h1>\n      <div>{siteMetadata.siteVersion}</div>\n      <div>{siteMetadata.docusaurusVersion}</div>\n      {/* highlight-end */}\n    </div>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"siteConfig"})," object only contains ",(0,s.jsx)(n.strong,{children:"serializable values"})," (values that are preserved after ",(0,s.jsx)(n.code,{children:"JSON.stringify()"}),"). Functions, regexes, etc. would be lost on the client side."]})}),"\n",(0,s.jsx)(n.h3,{id:"useIsBrowser",children:(0,s.jsx)(n.code,{children:"useIsBrowser"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"true"})," when the React app has successfully hydrated in the browser."]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Use this hook instead of ",(0,s.jsx)(n.code,{children:"typeof windows !== 'undefined'"})," in React rendering logic."]}),(0,s.jsxs)(n.p,{children:["The first client-side render output (in the browser) ",(0,s.jsx)(n.strong,{children:"must be exactly the same"})," as the server-side render output (Node.js). Not following this rule can lead to unexpected hydration behaviors, as described in ",(0,s.jsx)(n.a,{href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/",children:"The Perils of Rehydration"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"Usage example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport useIsBrowser from '@docusaurus/useIsBrowser';\n\nconst MyComponent = () => {\n  // highlight-start\n  const isBrowser = useIsBrowser();\n  // highlight-end\n  return <div>{isBrowser ? 'Client' : 'Server'}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useBaseUrl",children:(0,s.jsx)(n.code,{children:"useBaseUrl"})}),"\n",(0,s.jsxs)(n.p,{children:["React hook to prepend your site ",(0,s.jsx)(n.code,{children:"baseUrl"})," to a string."]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Don't use it for regular links!"})}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/baseUrl/"})," prefix is automatically added to all ",(0,s.jsx)(n.strong,{children:"absolute paths"})," by default:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Markdown: ",(0,s.jsx)(n.code,{children:"[link](/my/path)"})," will link to ",(0,s.jsx)(n.code,{children:"/baseUrl/my/path"})]}),"\n",(0,s.jsxs)(n.li,{children:["React: ",(0,s.jsx)(n.code,{children:'<Link to="/my/path/">link</Link>'})," will link to ",(0,s.jsx)(n.code,{children:"/baseUrl/my/path"})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BaseUrlOptions = {\n  forcePrependBaseUrl: boolean;\n  absolute: boolean;\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-usage",children:"Example usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nconst SomeImage = () => {\n  // highlight-start\n  const imgSrc = useBaseUrl('/img/myImage.png');\n  // highlight-end\n  return <img src={imgSrc} />;\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In most cases, you don't need ",(0,s.jsx)(n.code,{children:"useBaseUrl"}),"."]}),(0,s.jsxs)(n.p,{children:["Prefer a ",(0,s.jsx)(n.code,{children:"require()"})," call for ",(0,s.jsx)(n.a,{href:"/docs/next/markdown-features/assets",children:"assets"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<img src={require('@site/static/img/myImage.png').default} />\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"useBaseUrlUtils",children:(0,s.jsx)(n.code,{children:"useBaseUrlUtils"})}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes ",(0,s.jsx)(n.code,{children:"useBaseUrl"})," is not good enough. This hook return additional utils related to your site's base URL."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withBaseUrl"}),": useful if you need to add base URLs to multiple URLs at once."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport {useBaseUrlUtils} from '@docusaurus/useBaseUrl';\n\nconst Component = () => {\n  const urls = ['/a', '/b'];\n  // highlight-start\n  const {withBaseUrl} = useBaseUrlUtils();\n  const urlsWithBaseUrl = urls.map(withBaseUrl);\n  // highlight-end\n  return <div>{/* ... */}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useGlobalData",children:(0,s.jsx)(n.code,{children:"useGlobalData"})}),"\n",(0,s.jsx)(n.p,{children:"React hook to access Docusaurus global data created by all the plugins."}),"\n",(0,s.jsx)(n.p,{children:"Global data is namespaced by plugin name then by plugin ID."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Plugin ID is only useful when a plugin is used multiple times on the same site. Each plugin instance is able to create its own global data."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'type GlobalData = Record<\n  PluginName,\n  Record<\n    PluginId, // "default" by default\n    any // plugin-specific data\n  >\n>;\n'})}),"\n",(0,s.jsx)(n.p,{children:"Usage example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useGlobalData from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const globalData = useGlobalData();\n  const myPluginData = globalData['my-plugin']['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Inspect your site's global data at ",(0,s.jsx)(n.code,{children:"./docusaurus/globalData.json"})]})}),"\n",(0,s.jsx)(n.h3,{id:"usePluginData",children:(0,s.jsx)(n.code,{children:"usePluginData"})}),"\n",(0,s.jsx)(n.p,{children:"Access global data created by a specific plugin instance."}),"\n",(0,s.jsx)(n.p,{children:"This is the most convenient hook to access plugin global data and should be used most of the time."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pluginId"})," is optional if you don't use multi-instance plugins."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function usePluginData(\n  pluginName: string,\n  pluginId?: string,\n  options?: {failfast?: boolean},\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Usage example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const myPluginData = usePluginData('my-plugin');\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useAllPluginInstancesData",children:(0,s.jsx)(n.code,{children:"useAllPluginInstancesData"})}),"\n",(0,s.jsx)(n.p,{children:"Access global data created by a specific plugin. Given a plugin name, it returns the data of all the plugins instances of that name, by plugin id."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function useAllPluginInstancesData(\n  pluginName: string,\n  options?: {failfast?: boolean},\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Usage example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport {useAllPluginInstancesData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const allPluginInstancesData = useAllPluginInstancesData('my-plugin');\n  const myPluginData = allPluginInstancesData['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"interpolate-1",children:(0,s.jsx)(n.code,{children:"interpolate"})}),"\n",(0,s.jsxs)(n.p,{children:["The imperative counterpart of the ",(0,s.jsx)(n.a,{href:"#interpolate",children:(0,s.jsx)(n.code,{children:"<Interpolate>"})})," component."]}),"\n",(0,s.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Simple string interpolation\nfunction interpolate(text: string, values: Record<string, string>): string;\n\n// JSX interpolation\nfunction interpolate(\n  text: string,\n  values: Record<string, ReactNode>,\n): ReactNode;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// highlight-next-line\nimport {interpolate} from '@docusaurus/Interpolate';\n\nconst message = interpolate('Welcome {firstName}', {firstName: 'S\xe9bastien'});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"translate-imperative",children:(0,s.jsx)(n.code,{children:"translate"})}),"\n",(0,s.jsxs)(n.p,{children:["The imperative counterpart of the ",(0,s.jsx)(n.a,{href:"#translate",children:(0,s.jsx)(n.code,{children:"<Translate>"})})," component. Also supporting ",(0,s.jsx)(n.a,{href:"#interpolate",children:"placeholders interpolation"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Use the imperative API for the ",(0,s.jsx)(n.strong,{children:"rare cases"})," where a ",(0,s.jsx)(n.strong,{children:"component cannot be used"}),", such as:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the page ",(0,s.jsx)(n.code,{children:"title"})," metadata"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"placeholder"})," props of form inputs"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"aria-label"})," props for accessibility"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function translate(\n  translation: {message: string; id?: string; description?: string},\n  values: Record<string, string>,\n): string;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-next-line\nimport {translate} from '@docusaurus/Translate';\n\nexport default function Home() {\n  return (\n    <Layout\n      // highlight-next-line\n      title={translate({message: 'My page meta title'})}>\n      <img\n        src={'https://docusaurus.io/logo.png'}\n        aria-label={\n          // highlight-start\n          translate(\n            {\n              message: 'The logo of site {siteName}',\n              // Optional\n              id: 'homepage.logo.ariaLabel',\n              description: 'The home page logo aria label',\n            },\n            {siteName: 'Docusaurus'},\n          )\n          // highlight-end\n        }\n      />\n    </Layout>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,s.jsx)(n.h3,{id:"executionenvironment",children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment"})}),"\n",(0,s.jsx)(n.p,{children:"A module that exposes a few boolean variables to check the current rendering environment."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["For React rendering logic, use ",(0,s.jsx)(n.a,{href:"#useIsBrowser",children:(0,s.jsx)(n.code,{children:"useIsBrowser()"})})," or ",(0,s.jsx)(n.a,{href:"#browseronly",children:(0,s.jsx)(n.code,{children:"<BrowserOnly>"})})," instead."]})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  require('lib-that-only-works-client-side');\n}\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment.canUseDOM"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"})," if on client/browser, ",(0,s.jsx)(n.code,{children:"false"})," on Node.js/prerendering."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment.canUseEventListeners"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"})," if on client and has ",(0,s.jsx)(n.code,{children:"window.addEventListener"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment.canUseIntersectionObserver"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"})," if on client and has ",(0,s.jsx)(n.code,{children:"IntersectionObserver"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ExecutionEnvironment.canUseViewport"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"})," if on client and has ",(0,s.jsx)(n.code,{children:"window.screen"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"constants",children:(0,s.jsx)(n.code,{children:"constants"})}),"\n",(0,s.jsx)(n.p,{children:"A module exposing useful constants to client-side theme code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import {DEFAULT_PLUGIN_ID} from '@docusaurus/constants';\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Named export"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DEFAULT_PLUGIN_ID"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"default"})})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(27378);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);