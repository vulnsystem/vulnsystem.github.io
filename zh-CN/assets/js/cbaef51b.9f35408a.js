"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36853],{53330:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/rest-proxy-security-workflow-178d07634974cc1d2e709ce6fe7bab68.png"},99968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(24246),s=t(71670);const r={id:"guides-kafkarestapis-authentication",description:"Create a Markdown Document"},o="Anonymous authentication",a={id:"guides/docs/guides-kafkarestapis-authentication",title:"Anonymous authentication",description:"Create a Markdown Document",source:"@site/versioned_docs/version-3.0.1/guides/docs/guides-kafkarestapis-authentication.mdx",sourceDirName:"guides/docs",slug:"/guides/docs/guides-kafkarestapis-authentication",permalink:"/zh-CN/docs/guides/docs/guides-kafkarestapis-authentication",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.1",frontMatter:{id:"guides-kafkarestapis-authentication",description:"Create a Markdown Document"},sidebar:"woofwoof",previous:{title:"Token generation",permalink:"/zh-CN/docs/guides/docs/guides-kafkarestapis-tokengen"},next:{title:"Smart authorization",permalink:"/zh-CN/docs/guides/docs/guides-kafkarestapis-authorization"}},c={},d=[{value:"Token verification",id:"token-verification",level:2},{value:"Filter registeration",id:"filter-registeration",level:2},{value:"Build and run",id:"build-and-run",level:2},{value:"Testing with curl",id:"testing-with-curl",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"anonymous-authentication",children:"Anonymous authentication"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(53330).Z+"",width:"747",height:"333"})})}),"\n",(0,i.jsxs)(n.p,{children:["Users can access the system or service without providing any explicit identification credentials like identity card and cell-phone number. Users generate an Ethereum private key to create a ",(0,i.jsx)(n.strong,{children:"token"})," (which is kind of digital signature of a specific message) as authenticity. The proxy that needs to validate the user's authenticity which can verify the token using the user's public key. If the token is valid, it proves that the user possesses the private key corresponding to the public key used for verification. ",(0,i.jsx)(n.a,{href:"https://github.com/confluentinc/kafka-rest/commit/95331cc3af4f99b57796f03fdafbe9b8136de170",children:(0,i.jsx)(n.strong,{children:"All the detailed code please lookup in github."})})]}),"\n",(0,i.jsx)(n.h2,{id:"token-verification",children:"Token verification"}),"\n",(0,i.jsxs)(n.p,{children:["To vreify the token, An ",(0,i.jsx)(n.strong,{children:"interceptor or filter"})," implemented to detect and block HTTP requests based on a custom header, you can create a filter that checks the value of the header and decides whether to allow or block the request."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="HeaderFilter.java"',children:'public class HeaderFilter implements Filter {\n\n  private static final Logger log = LoggerFactory.getLogger(HeaderFilter.class);\n\n  @Override\n  public void init(FilterConfig filterConfig) throws ServletException {\n    // TODO Auto-generated method stub\n\t\n  }\n\n  @Override\n  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\n      throws IOException, ServletException {\n    // TODO Auto-generated method stub\n    // Perform your header validation here\n    if (request instanceof HttpServletRequest \n          && isValidHeaders((HttpServletRequest) request)) {\n      chain.doFilter(request, response);\n      return;\n    }\n    // If not valid, block the request (you can customize this part)\n    response.getWriter().write("Invalid custom header value");\n    response.setContentType("text/plain");\n\n    if (response instanceof HttpServletResponse) {\n      log.debug("HeaderFilter: the response is instanceof HttpServletResponse");\n      HttpServletResponse httpResponse = (HttpServletResponse) response;\n      httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);\n    }\n  }\n\n  @Override\n  public void destroy() {\n    // TODO Auto-generated method stub\n    \n  }\n\n  // Custom method to validate HTTP headers\n  private boolean isValidHeaders(HttpServletRequest request) {\n    // Implement your header validation logic here\n    String token = request.getHeader("oauth-access-token");\n    String expFromHeader = request.getHeader("exp-time");\n    String addressFromHeader = request.getHeader("address");\n\n    if (token == null || expFromHeader == null || addressFromHeader == null) {\n      return false;\n    }\n\n    SignedJWT jwt;\n    JWK publicKey;\n    try {\n      jwt = SignedJWT.parse(token);\n      publicKey = jwt.getHeader().getJWK();\n      if (publicKey == null) {\n        throw new RuntimeException("Token validation failed: Unknown publicKey" + publicKey);\n      }\n\n      if (publicKey instanceof ECKey) {\n        JWSVerifier verifier = new ECDSAVerifier((ECKey) publicKey);\n        verifier.getJCAContext().setProvider(new BouncyCastleProvider());\n        if (!jwt.verify(verifier)) {\n          throw new RuntimeException("Signature check failed: Invalid token signature");\n        }\n      } else {\n        throw new RuntimeException("publicKey is not type of ECKey");\n      }\n\n      JWTClaimsSet claimsSet = jwt.getJWTClaimsSet();\n\n      // Get the expiration time (exp) from the claims set\n      Date expDate = claimsSet.getExpirationTime();  \n      if (expDate == null) {\n        throw new RuntimeException("Token validation failed: Expiry not set");\n      }\n\n      long expFromToken = expDate.getTime();\n      if (System.currentTimeMillis() > expFromToken) {\n        log.debug("expFromToken: " + expFromToken); \n        log.debug("systmCurrent: " + System.currentTimeMillis()); \n        throw new RuntimeException("Token expired time less than system current");\n      }\n\n      if (expFromToken != Long.parseLong(expFromHeader)) {\n        log.debug("expFromToken: " + expFromToken); \n        log.debug("expFromHeade: " + Long.parseLong(expFromHeader)); \n        throw new RuntimeException("Token expired time not equal the exp-time in the http header");\n      }\n\n      String addressFromToken = publicKeyToAddress(publicKey);\n      if (!addressFromToken.equals(addressFromHeader)) {\n        log.debug("addressFromToken: " + addressFromToken); \n        log.debug("addressFromHeade: " + addressFromHeader); \n        throw new RuntimeException("Address from token not equal the address in the http header");\n      }\n\n    } catch (RuntimeException | ParseException | JOSEException e) {\n      log.debug("token verificaiton faliure", e);\n      return false;\n    }\n\n    return true;\n  }\n\n  private  String publicKeyToAddress(JWK publicKey) {\n    ObjectMapper objectMapper = new ObjectMapper();\n    JsonNode jsonNode = null;\n    try {\n      jsonNode = objectMapper.readTree(publicKey.toJSONString());\n    } catch (JsonProcessingException e) {\n      e.printStackTrace();\n      throw new RuntimeException(e);\n    }\n\n    Base64URL yBase64 = Base64URL.from(jsonNode.get("y").toString());\n    byte[] yBytes = yBase64.decode();\n\n    String yHexStr = bytesToHex(yBytes);\n    Base64URL xBase64 = Base64URL.from(jsonNode.get("x").toString());\n    byte[] xBytes = xBase64.decode();\n    String xHexStr = bytesToHex(xBytes);\n\n    String publicKeyHexStr = xHexStr + yHexStr;\n    BigInteger publicKeyBig = new BigInteger(publicKeyHexStr, 16);\n\n    return Keys.getAddress(publicKeyBig);\n  }\n\n  // Convert raw bytes to hexadecimal string\n  private static String bytesToHex(byte[] bytes) {\n    StringBuilder hexString = new StringBuilder();\n    for (byte b : bytes) {\n      String hex = String.format("%02x", b);\n      hexString.append(hex);\n    }\n    return hexString.toString();\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"filter-registeration",children:"Filter registeration"}),"\n",(0,i.jsxs)(n.p,{children:["In Kafka REST proxy, The KafkaRestApplication class extends the Application class and provides methods for configuring and starting a Jetty server to host the REST API. You need to register this filter in the KafkaRestApplication. Modify the ",(0,i.jsx)(n.strong,{children:"configurePreResourceHandling"})," method in your Application class to ",(0,i.jsx)(n.strong,{children:"register"})," the filter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="KafkaRestApplication.java"',children:'public class KafkaRestApplication extends Application<KafkaRestConfig> {\n\n  List<RestResourceExtension> restResourceExtensions;\n\n  public KafkaRestApplication() {\n    this(new Properties());\n  }\n\n  public KafkaRestApplication(Properties props) {\n    this(new KafkaRestConfig(props));\n  }\n\n  public KafkaRestApplication(KafkaRestConfig config) {\n    this(config, /* path= */ "");\n  }\n\n  public KafkaRestApplication(KafkaRestConfig config, String path) {\n    this(config, path, null);\n  }\n\n  public KafkaRestApplication(KafkaRestConfig config, String path, String listenerName) {\n    super(config, path, listenerName);\n\n    restResourceExtensions =\n        config.getConfiguredInstances(\n            KafkaRestConfig.KAFKA_REST_RESOURCE_EXTENSION_CONFIG, RestResourceExtension.class);\n    config.setMetrics(metrics);\n  }\n\n  @Override\n  public void configurePreResourceHandling(ServletContextHandler context) {\n    // Add the custom header interceptor\n    context.addFilter(new FilterHolder(new HeaderFilter()), "/*", \n        EnumSet.of(DispatcherType.REQUEST));\n  }\n\n  @Override\n  public void configurePostResourceHandling(ServletContextHandler context) {}\n\n  ......\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"build-and-run",children:"Build and run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="build"',children:"mvn clean package -Dcheckstyle.skip -Dmaven.test.skip=true\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="run"',children:"bin/kafka-rest-start ./config/kafka-rest.properties\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testing-with-curl",children:"Testing with curl"}),"\n",(0,i.jsxs)(n.p,{children:["To test the interceptor or filter with curl comamnd. According to the code of ",(0,i.jsx)(n.strong,{children:"isValidHeaders"}),", the header of http should include oauth-access-token, exp-time and address. The oauth-access-token is generated by the client self without retrieveing from the authen server. It is one important feature for anonymous authentication. Anonymous authentication typically involves allowing users to access a system or service without requiring them to provide explicit credentials such as a username and password. After token generated, using curl command to issue http request and the response will return in the json fromat. The following is example to add records to the topic(jsontest8)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="oauth-access-token"',children:"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJqd2siOnsia3R5IjoiRUMiLCJjcnYiOiJzZWNwMjU2azEiLCJ4IjoiRTVNRDBOcHo1aVJ2QVN0W \\ \nFQzM0t5WUxwTEJJSjM0d3dyLUhndzVyczFKTSIsInkiOiJaeTdwd1dLOWFVZzA2OEdRYUZxcnZyME1NVlJLcDBNOHpGaDEyM01ZelVBIn19.eyJzd \\ \nWIiOiI4NDNlMDcwYS02MDQwLTQzOTUtYjQzMC0zOWU5YTkzMTg5YTEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsia2Fma2EiOnsicm9sZXMiOlsia2Fma2 \\ \nEtdG9waWM6c3VwZXJhcHBfKjpvd25lciJdfX0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cDpcL1wva2V5Y2xvYWs6ODA4MFwvYXV \\ \n0aFwvcmVhbG1zXC9kZW1vIiwidHlwIjoiQmVhcmVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWxpY2UiLCJzaWQiOiJiOTQyZTMxNi05ZTZkLTRh \\ \nMDctODAxMS1lYmZmNGE4NTVkNDIiLCJnaXRjb2lucyI6Ilt7XCJzY29wZXNcIjpbXCJBbHRlclwiLFwiUmVhZFwiLFwiRGVzY3JpYmVcIixcIkRlb \\ \n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="Test script"',children:'curl \\\n  -X POST \\ \n  -H "Content-Type: application/json" \\\n  -H "oauth-access-token: {token}" \\\n  -H "exp-time:1702170580000" \\\n  -H "address: 5928d983ee384d10c146fa3d56236855cbd4023e" \\\n  -d \'{"value":{"type":"JSON","data":{"name":"testUser"}}}\' \\\n  http://localhost:8082/v3/clusters/pYhOCSSST0y1yW085--r-w/topics/jsontest8/records\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="response.json"',children:'{\n   "error_code":200,\n   "cluster_id":"pYhOCSSST0y1yW085--r-w",\n   "topic_name":"jsontest8",\n   "partition_id":0,\n   "offset":1,\n   "timestamp":"2023-12-03T01:36:15.293Z",\n   "value":{\n      "type":"JSON",\n      "size":19\n   }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"HTTP status code 200 means the request was successful. The server has processed the request and is returning the requested information. This is a standard response for successful HTTP requests."})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(27378);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);