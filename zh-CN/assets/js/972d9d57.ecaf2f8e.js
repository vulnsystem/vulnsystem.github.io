"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40937],{64784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(24246),s=t(71670);const r={description:"WoofWoof is anonymous, end-to-end cryptography distributed event streaming platform.",slug:"/"},o="Introduction",a={id:"introduction",title:"Introduction",description:"WoofWoof is anonymous, end-to-end cryptography distributed event streaming platform.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/zh-CN/docs/next/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1719832768,formattedLastUpdatedAt:"2024\u5e747\u67081\u65e5",frontMatter:{description:"WoofWoof is anonymous, end-to-end cryptography distributed event streaming platform.",slug:"/"},sidebar:"woofwoof",next:{title:"Getting Started",permalink:"/zh-CN/docs/next/category/getting-started"}},c={},d=[{value:"Design principles",id:"design-principles",level:2},{value:"Features",id:"features",level:2},{value:"Based on Kafka",id:"based-on-kafka",level:3},{value:"Powered by Ethereum",id:"powered-by-ethereum",level:3},{value:"End-to-end cryptography",id:"end-to-end-cryptography",level:3},{value:"Distributed system",id:"distributed-system",level:3},{value:"Something missing?",id:"something-missing",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["To create an ",(0,i.jsx)(n.strong,{children:"anonymous"}),", ",(0,i.jsx)(n.strong,{children:"privacy-focused"}),", and ",(0,i.jsx)(n.strong,{children:"untraceable"}),' environment, We are building a platform named "WoofWoof". It is end-to-end cryptography distributed event streaming platform based on Kafka, powered by of Ethereum.']}),"\n",(0,i.jsx)(n.h2,{id:"design-principles",children:"Design principles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Privacy protection"}),": Encrypting sensitive information helps secure it from unauthorized access. This includes encrypting data in transit (during communication) and data at rest (when stored). Preventing the creation of detailed UserProfile of individual users based on their activities, behaviors, or personal information."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Untraceable"}),": Transactions and message made with crypto can be challenging to link to specific individuals. The sender and recipient of a message cannot be easily identified or located. Tracking would be difficult, complex, or highly obscured."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Made Easy"}),": Break down complex problems into smaller, manageable modules. Use clear and understandable abstractions to hide unnecessary details. Tools like Docker can simplify deployment by encapsulating applications and their dependencies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Collaboration"}),": No licensing to prevent users from using the software for various purposes. Encourage collaboration not only to develop software, but also to build untraceable and privacy protection environment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We believe that, as developers and users, knowing how a library works helps us become better at using it. Hence we're dedicating effort to explaining the architecture and various components of WoofWoof with the hope that users reading it will gain a deeper understanding of the tool and be even more proficient in using it."}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"WoofWoof integrates the fault-tolerance, scalability, and stream-processing capabilities of Apache Kafka with Ethereum's features of anonymous authentication and smart contract-based authorization. The implementation also emphasizes end-to-end cryptography using secp256k1 for key pair generation, ECDH for secure key exchange, and symmetric-key cryptography for message encryption in the context of a distributed system."}),"\n",(0,i.jsx)(n.h3,{id:"based-on-kafka",children:"Based on Kafka"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://kafka.apache.org/",children:"Apache Kafka"})," is an open-source distributed event streaming platform used for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. So WoofWoof will inherit  all the fundamental features of Apache Kafka like fault-tolerance, scalability, durability, stream-processing."]}),"\n",(0,i.jsx)(n.h3,{id:"powered-by-ethereum",children:"Powered by Ethereum"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Anonymous authentication"}),": Users can access the system or service without providing any explicit identification credentials like identity card and cell-phone number. Users generate an Ethereum private key to create a digital signature of a specific message as authenticity. The service that needs to verify the user's authenticity which can verify the signature using the user's public key. If the signature is valid, it proves that the user possesses the private key corresponding to the public key used for verification."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Smart contracts authorization"}),": Define the access control logic within the smart contract. This logic specifies who has permission to execute certain functions or access particular data. Implement logic in the smart contract that check the authorization of a user before allowing them to execute certain actions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"end-to-end-cryptography",children:"End-to-end cryptography"}),"\n",(0,i.jsx)(n.p,{children:"Implementing end-to-end cryptography with a focus on secure key exchange using Elliptic Curve Diffie-Hellman (ECDH) and symmetric-key cryptography for message encryption."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Pair Generation with secp256k1"}),": Utilize the crypto's secp256k1 elliptic curve to generate pairs of public and private keys for each participant in the system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Establishing a Secure Key Exchange Protocol with ECDH"}),": Implement the Elliptic Curve Diffie-Hellman (ECDH) key exchange protocol for secure key exchange."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Participants exchange crypto's secp256k1 public keys."}),"\n",(0,i.jsx)(n.li,{children:"Each participant combines their private key with the received public key to derive a shared secret."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Derive Symmetric Key from Shared Secret"}),": Use a key derivation function (KDF) to derive a symmetric key from the shared secret obtained through the ECDH key exchange. This symmetric key will be used for symmetric-key encryption."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Symmetric-Key Cryptography for Message Encryption"}),": Choose a strong symmetric-key encryption algorithm (e.g., AES) and use the derived symmetric key to encrypt the actual messages. Ensure that each communication session has a unique symmetric key to enhance security."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Message Decryption"}),": Participants use the same derived symmetric key to decrypt the received messages."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"distributed-system",children:"Distributed system"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Multiple Nodes"}),": The system consists of multiple independent nodes or machines that communicate and coordinate with each other."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Communication"}),": Nodes communicate with each other to share information and coordinate their activities. This communication can happen through various mechanisms, such as message passing or remote procedure calls."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fault Tolerance"}),": Distributed systems are designed to be resilient to failures. If one node fails, the system should be able to continue functioning."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),": The system can scale horizontally by adding more nodes, allowing it to handle increased workloads."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"something-missing",children:"Something missing?"}),"\n",(0,i.jsxs)(n.p,{children:["If you find issues with the documentation or have suggestions on how to improve the WoofWoof or the project in general, please ",(0,i.jsx)(n.a,{href:"https://github.com/woofwoof/docusaurus",children:"file an issue"})," for us."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(27378);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);