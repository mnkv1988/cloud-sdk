(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),o=(n(0),n(203)),r=n(206),s={id:"proxy-js-sdk",title:"Proxies in the Cloud SDK for JS/TS",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Proxies",description:"This article describes how the SDK handles the different proxy options and how they are configured.",keywords:["sap","cloud","sdk","proxy","connectivity","JavaScript","TypeScript"]},c={id:"js/features/connectivity/proxy-js-sdk",title:"Proxies in the Cloud SDK for JS/TS",description:"This article describes how the SDK handles the different proxy options and how they are configured.",source:"@site/docs/js/features/connectivity/proxy.md",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/connectivity/proxy.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1592308140,sidebar_label:"Proxies",sidebar:"someSidebar",previous:{title:"Getting started - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"Destinations in the Cloud SDK for JS/TS",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Making a first API call",id:"making-a-first-api-call",children:[]},{value:"What kind of Proxies are there?",id:"what-kind-of-proxies-are-there",children:[]},{value:"Manual Configuration",id:"manual-configuration",children:[]},{value:"The Automatic Flow",id:"the-automatic-flow",children:[]},{value:"A Word on the Used Libraries and Implementation Details",id:"a-word-on-the-used-libraries-and-implementation-details",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The Cloud SDK for JavaScript offers a convenient way to connect to various systems offering public APIs. The most famous one is S/4 HANA which comes in two flavors Cloud and OnPremise. We pre-generate type-safe clients for S/4 HANA APIs publish them to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://npm.sap.com"}),"https://npm.sap.com")," for your convenience."),Object(o.b)("p",null,"For different systems like SuccessFactors, C4C, and many others you can generate a type-safe client yourself. All you have to do it look up an API definition on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.sap.com/"}),"SAP API BusinessHub")," and invoke a generator that supplied with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk"}),"SAP Cloud SDK for Javascript"),". This ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/cloudsdk-js-generator.html"}),"comprehensive tutorial")," will guide you through this process step by step."),Object(o.b)("h2",{id:"making-a-first-api-call"},"Making a first API call"),Object(o.b)("p",null,"Once you have a type-safe client generated, this is how you make your first API call. This example uses ",Object(o.b)("strong",{parentName:"p"},"BusinessPartner")," service from S4/HANA suit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"BusinessPartner.requestBuilder()\n  .getAll().filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals('1'))\n  .top(5)\n  .execute(yourDestination);\n")),Object(o.b)("p",null,"SDK does a lot of heavy lifting under the hood to take care of complexity so that you can fully concentrate on your App's logic. A detailed step by step guide on using a type-safe client is provided in this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"}),"tutorial series"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To name a few things handled by Cloud SDK for Javascript:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"destination fetching"),Object(o.b)("li",{parentName:"ul"},"handling of ETag"),Object(o.b)("li",{parentName:"ul"},"handling of CSRF token"),Object(o.b)("li",{parentName:"ul"},"serializing and deserializing of the request"),Object(o.b)("li",{parentName:"ul"},"and more...")),Object(o.b)("p",null,"In this document, we focus on the ",Object(o.b)("strong",{parentName:"p"},"proxy")," part and explain how proxies are handled by the SDK."),Object(o.b)("h2",{id:"what-kind-of-proxies-are-there"},"What kind of Proxies are there?"),Object(o.b)("p",null,"Before we get into the details it is important to have an overview on the different proxy types.\nThere are two possible types of proxies:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A local proxy running on the cloud platform used to connect to S/4 HANA OnPremise systems.\nThe proxy information like host and port are provided by the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/daca64dacc6148fcb5c70ed86082ef91.html#loiodaca64dacc6148fcb5c70ed86082ef91__services"}),"connectivity service"),".\nThis proxy will be referred to as ",Object(o.b)("inlineCode",{parentName:"li"},"connectivity proxy"),". "),Object(o.b)("li",{parentName:"ol"},"A proxy running in some landscape used to make requests to the internet.\nThis proxy will be referred to as ",Object(o.b)("inlineCode",{parentName:"li"},"web proxy"),". ")),Object(o.b)("h2",{id:"manual-configuration"},"Manual Configuration"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"execute()")," you can either give an object containing the destination name or you can configure the full destination manually.\nIf you provide the destination name the SDK will try to lookup as described ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}),"here"),"."),Object(o.b)("p",null,"In productive use the manual configuration will not be useful, but for testing it might be valuable.\nThe destination object contains a field ",Object(o.b)("inlineCode",{parentName:"p"},"proxyConfiguration")," in which you can configure a proxy."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-TypeScript"}),'{\nurl: "https://MyDestinationURL.com"\nproxyConfiguration?: {\n  host:"my.proxy.host.com"\n  port:123\n  protocol:"http"\n  headers?: {\n      Proxy-Authorization: \'yourAuthHeader could be basic or some bearer token\'\n      SAP-Connectivity-Authentication?: \'\'\n    };,\n  }\n}\n')),Object(o.b)("p",null,"The SAP-Connectivity-Authentication field contains the JWT issued for the user on application login.\nIt is mandatory if principal propagation is used i.e. identity propagation from the cloud application to the S/4 system."),Object(o.b)("h2",{id:"the-automatic-flow"},"The Automatic Flow"),Object(o.b)("p",null,"For productive use you do not want to include a specific proxy configuration in your code.\nHere you should let the SDK handle everything.\nHence, you will provide in the ",Object(o.b)("inlineCode",{parentName:"p"},".execute()")," method only the destination name.\nThis will trigger the destination lookup as described ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}),"here"),"."),Object(o.b)("p",null,"The result of the lookup is a destination object which contains a property ",Object(o.b)("inlineCode",{parentName:"p"},"Proxy Type"),".\nThis property can have two vales: ",Object(o.b)("inlineCode",{parentName:"p"},"Internet")," and ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise"),":"),Object(o.b)("img",{alt:"Destination in CF",src:Object(r.a)("img/proxyTypeDestination.png")}),Object(o.b)("p",null,"if ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise")," is selected it is assumed that this destination points to an OnPremise S/4 HANA system.\nIn this case you need the ",Object(o.b)("inlineCode",{parentName:"p"},"connectivity proxy"),".\nThe SDK will request the proxy host and port from the connectivity service and make a request using this proxy.\nFrom there the request will pass via the cloud connector to the S/4 HANA OnPremise system."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"Internet")," is selected it is assumed that this destination points to something in the free intern and in most cases no proxy is needed.\nHowever, if a proxy is needed to reach this destination it is configured in the following way."),Object(o.b)("p",null,"The SDK considers the environment variables ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),".\nThe variable ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," is used for destinations using ",Object(o.b)("inlineCode",{parentName:"p"},"http://")," in their URL and ",Object(o.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," for the ones using ",Object(o.b)("inlineCode",{parentName:"p"},"https://"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"https")," is the default protocol if the protocol is not set in the URL field of the destination."),Object(o.b)("p",null,"The value of the two proxy variables is just a simple string following this pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<protocol>://<user>:<password>?@<host>:<port>\n")),Object(o.b)("p",null,"The user and password are obviously optional and if they are left out no authentication header is added.\nThe protocol is also optional and the default value is ",Object(o.b)("inlineCode",{parentName:"p"},"http")," since most proxies do not use an encryption layer for communication.\nThe default for the port is ",Object(o.b)("inlineCode",{parentName:"p"},"80")," for ",Object(o.b)("inlineCode",{parentName:"p"},"http")," and ",Object(o.b)("inlineCode",{parentName:"p"},"443")," for ",Object(o.b)("inlineCode",{parentName:"p"},"https"),". Example of a valid values would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"http://John:SecurePassword@some.host.com:1234\nhttps://some.host.com:1234 -> will use 443 as default\nsome.host.com:1234 -> will use http as default\nsome.host.com -> will use http and 80 as default\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you use any special character in your username or password you need to encode them using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Percent-encoding"}),"percent encoding")))),Object(o.b)("p",null,"Since environment variables are a global setting, it might become necessary to exclude some destinations from using the proxy.\nThis is possible using the ",Object(o.b)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"NO_PROXY")," variable contains a list of comma separated URLs for which no proxy is used.\nCurrently now wild cards like ",Object(o.b)("inlineCode",{parentName:"p"},"*")," are supported in the list. "),Object(o.b)("h2",{id:"a-word-on-the-used-libraries-and-implementation-details"},"A Word on the Used Libraries and Implementation Details"),Object(o.b)("p",null,"The SDK uses ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," to execute http requests.\nIn principle ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," should support  ",Object(o.b)("inlineCode",{parentName:"p"},"web proxies")," based on the environment variables.\nHowever, we found that request URL using a proxy were not correctly constructed and for the ",Object(o.b)("inlineCode",{parentName:"p"},"connectivity proxy")," an entry point was necessary anyhow."),Object(o.b)("p",null,"Hence, the SDK switches off the build in proxy handling by ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," completely by using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"{\n    proxy: false\n}\n")),Object(o.b)("p",null,"in the ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," request config.\nIf a proxy becomes necessary or is configured by the discussed environment variables the SDK builds directly the http or https-agent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"{\n  proxy: false,\n  httpAgent: httpProxAgent || new http.Agent(),\n  httpsAgent: httpsProxyAgent || new https.Agent()\n}\n")),Object(o.b)("p",null,"and adds them to the axios config. The agents contain the proxy configuration.\nThe standard ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/http-proxy-agent"}),"http and https agents")," are used."))}d.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(r,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var a=n(0),i=n(49);t.a=function(){return Object(a.useContext)(i.a)}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(207);var a=n(204);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},207:function(e,t,n){"use strict";var a=n(17),i=n(35),o=n(208),r="".startsWith;a(a.P+a.F*n(209)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},208:function(e,t,n){var a=n(70),i=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},209:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);