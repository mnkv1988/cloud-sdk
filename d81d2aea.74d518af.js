(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(154)),i={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers typesafe client generators for REST (Open API) services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={unversionedId:"java/features/rest/overview",id:"java/features/rest/overview",isDocsHomePage:!1,title:"Overview",description:"SAP Cloud SDK offers typesafe client generators for REST (Open API) services",source:"@site/docs/java/features/rest/overview.mdx",slug:"/java/features/rest/overview",permalink:"/cloud-sdk/docs/java/features/rest/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/rest/overview.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Typed client to consume OData v4 Services for Java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"},next:{title:"Typesafe client for SAP Cloud Platform Workflow REST API",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api"}},s=[{value:"Typesafe client for RESTful services in Java",id:"typesafe-client-for-restful-services-in-java",children:[{value:"Pre-generated typesafe REST API client",id:"pre-generated-typesafe-rest-api-client",children:[]}]},{value:"Why using SAP Cloud SDK for Java with REST services?",id:"why-using-sap-cloud-sdk-for-java-with-rest-services",children:[]},{value:"I&#39;m providing a service on SAP Cloud Platform. How can I ship it with Cloud SDK?",id:"im-providing-a-service-on-sap-cloud-platform-how-can-i-ship-it-with-cloud-sdk",children:[]},{value:"Do you plan to release Open API generator? Like you&#39;ve done for OData?",id:"do-you-plan-to-release-open-api-generator-like-youve-done-for-odata",children:[]},{value:"Feedback",id:"feedback",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"typesafe-client-for-restful-services-in-java"},"Typesafe client for RESTful services in Java"),Object(o.b)("p",null,"SAP Cloud SDK for Java is prepared to generate a typesafe clients using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openapis.org/"}),"Open API")," to conveniently work\nwith various REST APIs available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/"}),"SAP API Hub")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Open API Generator is not released for public use")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you're interested in a typed REST API client for a specific SAP application or service contact us via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:cloudsdk@sap.com"}),"cloudsdk@sap.com")))),Object(o.b)("h3",{id:"pre-generated-typesafe-rest-api-client"},"Pre-generated typesafe REST API client"),Object(o.b)("p",null,"We ship pre-generated typesafe REST API clients as modules in collaboration with popular SAP services available on SAP\nCloud Platform and beyond."),Object(o.b)("p",null,"Depending on the scope modules could be available only internally within SAP or publicly released. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"clients/scp-workflow-rest-api"}),"SAP Cloud Platform Workflow\nAPI")," is an example of publicly released API module."),Object(o.b)("p",null,"In case you need information on REST or other services shipped only internally, please, approach us directly via\nstandard communication channels."),Object(o.b)("h2",{id:"why-using-sap-cloud-sdk-for-java-with-rest-services"},"Why using SAP Cloud SDK for Java with REST services?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You'll benefit from typesafe client when accessing a service of your choice"),Object(o.b)("li",{parentName:"ul"},"We take care of various complexities around developing extensions for SAP services"),Object(o.b)("li",{parentName:"ul"},"You'll get convenience abstractions over SAP Cloud Platform services. To name a few:  XSUAA, Destination\nservice, Service bindings and more."),Object(o.b)("li",{parentName:"ul"},"We hide complexities of cloud development making many tasks ridiculously easy"),Object(o.b)("li",{parentName:"ul"},"You're getting best in class support for your application or extensions directly form Cloud SDK development team"),Object(o.b)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating and shipping latest version of services that\nwe release.")),Object(o.b)("h2",{id:"im-providing-a-service-on-sap-cloud-platform-how-can-i-ship-it-with-cloud-sdk"},"I'm providing a service on SAP Cloud Platform. How can I ship it with Cloud SDK?"),Object(o.b)("p",null,"Reach out to us via internal communication channels and we'll provide you with information on our contribution models."),Object(o.b)("h2",{id:"do-you-plan-to-release-open-api-generator-like-youve-done-for-odata"},"Do you plan to release Open API generator? Like you've done for OData?"),Object(o.b)("p",null,"Because of less deterministic standard and huge variety of Open API services we decided not to release it as of yet. We\nmight reconsider this decision if we see a strong use-case and great value for our customers behind such commitment. The\nvalue should outweigh an effort to provide and support such a feature in general public availability."),Object(o.b)("p",null,"Reach out to us if you have any feedback on this."),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"We are happy to hear from you via internal communication channels or via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:cloudsdk@sap.com"}),"cloudsdk@sap.com")))}d.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,v=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return a?r.a.createElement(v,c(c({ref:t},l),{},{components:a})):r.a.createElement(v,c({ref:t},l))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);