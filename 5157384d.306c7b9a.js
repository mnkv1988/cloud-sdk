(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),i=n(9),a=(n(0),n(209)),r={id:"sdk-connectivity-destination-service",title:"Use destinations to connect to other systems and services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like S/4HANA or SAP Cloud Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity"]},s={id:"java/features/connectivity/sdk-connectivity-destination-service",title:"Use destinations to connect to other systems and services",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other systems and services like S/4HANA or SAP Cloud Platform services.",source:"@site/docs/java/features/connectivity/destinations.md",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/connectivity/destinations.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1589973781,sidebar_label:"Destinations",sidebar:"someSidebar",previous:{title:"Typesafe client for SAP Cloud Platform Workflow REST API",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api"},next:{title:"Multi Tenancy with the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}},c=[{value:"Accessing Destinations",id:"accessing-destinations",children:[{value:"Connect to on-premise S/4HANA system",id:"connect-to-on-premise-s4hana-system",children:[]}]},{value:"Testing",id:"testing",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The SAP Cloud SDK offers some basic functionality that helps with connecting to other systems and services like S/4HANA Cloud. The SDK introduces the general concept of a ",Object(a.b)("inlineCode",{parentName:"p"},"Destination")," which holds basic information about how to connect to such a system. That could for instance be a ",Object(a.b)("inlineCode",{parentName:"p"},"url"),", a user name and password for basic authentication or some custom headers."),Object(a.b)("p",null,"This concept is integrated with the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"}),"Destination Service")," that is available on SAP Cloud Platform. If the application has a service binding to this service in place the SDK will provide access to these destinations."),Object(a.b)("h2",{id:"accessing-destinations"},"Accessing Destinations"),Object(a.b)("p",null,"In general destinations are accessed through the ",Object(a.b)("inlineCode",{parentName:"p"},"DestinationAccessor"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'DestinationAccessor.getDestination("my-destination");\n')),Object(a.b)("p",null,"This will lookup the destination in the destination service, if the application is running on SAP Cloud Platform. But\nalso other sources like the environment variables are considered."),Object(a.b)("h3",{id:"connect-to-on-premise-s4hana-system"},"Connect to on-premise S/4HANA system"),Object(a.b)("p",null,"If your destination is exposing an on-premise S/4HANA service via a ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html"}),"Cloud\nConnector")),"\nyou need to decorate the destination with ",Object(a.b)("inlineCode",{parentName:"p"},"DefaultErpHttpDestination")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"final HttpDestination httpDestination =\ndestination.asHttp().decorate(DefaultErpHttpDestination::new);\n\n")),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("p",null,"For testing purposes the SDK provides functionality to provide such a destination in a local development environment. Refer to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html#b77d53b0-2d8b-449c-9a9a-9df80ee09a4e"}),"these tutorial steps")," on how to mock destinations for local development and testing."))}d.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,f=p["".concat(r,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(f,s({ref:t},l,{components:n})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);