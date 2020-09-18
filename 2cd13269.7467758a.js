(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";var i=n(0),r=n(19);t.a=function(){var e=Object(i.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(156),r=n(158);function a(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},158:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(154)),o=n(157),c={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},s={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",isDocsHomePage:!1,title:"Generic HTTP Client",description:"How to use the generic http client for untyped",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/connectivity/generic-http-client.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1600463949,sidebar_label:"Generic HTTP Client",sidebar:"someSidebar",previous:{title:"Proxies in the SAP Cloud SDK for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk"},next:{title:"On-Premise Connectivity in the SAP Cloud SDK for JavaScript",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise-connectivity-in-the-sap-cloud-sdk-for-javascript"}},l=[{value:"What is the Generic HTTP Client?",id:"what-is-the-generic-http-client",children:[]},{value:"How to use it",id:"how-to-use-it",children:[]},{value:"When to use it",id:"when-to-use-it",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-the-generic-http-client"},"What is the Generic HTTP Client?"),Object(a.b)("p",null,"In the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/odata/executing-a-request-using-a-generated-odata-v2-v4-client-with-sap-cloud-sdk-for-javascript"}),"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the Generic HTTP client of the SDK.\nFor the final HTTP calls we have decided to use the Axios library."),Object(a.b)("img",{alt:"The layers of HTTP clients in the SDK.",src:Object(o.a)("img/odata-client-layers.png"),class:"center",width:"50%"}),Object(a.b)("p",null,"In this document we explain when and how to use the middle layer directly.\nThe different clients serve different purposes:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OData Client:")," Provides strong typing with respect to the request (payload, select, filter, ...) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Generic HTTP Client:")," Adds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service specific information.\nThe client handles connectivity related issues such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}),"destination lookup")),Object(a.b)("li",{parentName:"ul"},"Connections to ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/on-premise-connectivity-in-the-sap-cloud-sdk-for-javascript"}),"On-Premise"),"  system via the connectivity service"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk"}),"web proxies"),".")),Object(a.b)("p",null,"In the end, all information from the destination, connectivity service and proxy configuration ends up in header-fields and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/proxy-agent"}),"proxy-agents"),".\nThe information goes one level down to the Axios client."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Axios HTTP Client:"),"  Is a widely used open source ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/axios"}),"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),Object(a.b)("h2",{id:"how-to-use-it"},"How to use it"),Object(a.b)("p",null,"To make a request using the Generic HTTP client use the ",Object(a.b)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"executeHttpRequest(destination, requestConfig)\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"destination")," argument is either a full destination object you have already fetched or an object containing a destination name and JWT.\nIn the latter case the SDK ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}),"fetches the destination")," for you.\nThe ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"pathname:///api/1.28.1/interfaces/sap_cloud_sdk_core.httprequestconfig"}),"request config")," argument contains the request configuration.\nA minimal config would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JSON"}),"{\n     method: 'get',\n     params: {\n          a: 'a',\n          b: 'b'\n     },\n    ...\n}\n")),Object(a.b)("p",null,"Note that you can also give values for ",Object(a.b)("inlineCode",{parentName:"p"},"url")," in the request config.\nThe values you give in the request config ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk/blob/master/packages/core/src/http-client/http-client.ts#L136-L148"}),"will be merged")," with ones related to the destination:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),Object(a.b)("p",null,"For keys which exist for both object the value from the custom requestion config will be used.\nFor example, a request config with ",Object(a.b)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),Object(a.b)("h2",{id:"when-to-use-it"},"When to use it"),Object(a.b)("p",null,"You should consider the Generic HTTP client if:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"you need to use an unsupported feature by the typed OData Client like ",Object(a.b)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this you can profit from the aforementioned convenience in connectivity."),Object(a.b)("li",{parentName:"ul"},"you only want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),Object(a.b)("li",{parentName:"ul"},"you want to call a non OData service which has no service definition.")),Object(a.b)("p",null,"You should consider the OData client if:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"you have to build complicated filter, selection and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),Object(a.b)("li",{parentName:"ul"},"you want to update or create new entities.\nThe OData Client has built-in ",Object(a.b)("inlineCode",{parentName:"li"},"ETag")," versions handling and takes also care of ",Object(a.b)("inlineCode",{parentName:"li"},"CSRF")," token fetching for you.\nWith the generic client you have to mange versions and tokens on your own.")))}d.isMDXComponent=!0}}]);