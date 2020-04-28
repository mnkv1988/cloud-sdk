/*! For license information please see 82b55dc1.ff7411b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),s=(a(0),a(169)),i=a(179),c=a(178),o={id:"use-generated-odata-vdm-v2-v4",title:"Use the VDM to consume OData Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Consume OData Services",description:"This article describes how the SAP Cloud SDK for Java can be used to build and run OData requests.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},l={id:"java/features/odata/use-generated-odata-vdm-v2-v4",title:"Use the VDM to consume OData Services",description:"This article describes how the SAP Cloud SDK for Java can be used to build and run OData requests.",source:"@site/docs/java/features/odata/use-vdm.md",permalink:"/cloud-sdk/docs/java/features/odata/use-generated-odata-vdm-v2-v4",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1587930037,sidebar_label:"Consume OData Services",sidebar:"someSidebar",previous:{title:"OData VDM Generator for Java",permalink:"/cloud-sdk/docs/java/features/odata/java-generate-odata-vmd-v2-v4"},next:{title:"Getting started on Linux",permalink:"/cloud-sdk/docs/java/how-to/sap-cloud-sdk-linux-how-to"}},u=[{value:"Using the Fluent API",id:"using-the-fluent-api",children:[{value:"Create",id:"create",children:[]},{value:"Read (Single)",id:"read-single",children:[]},{value:"Read (Collection)",id:"read-collection",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}]}],d={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"build-and-execute-odata-requests-with-the-virtual-data-model"},"Build and execute OData Requests with the Virtual Data Model"),Object(s.b)("p",null,"The Virtual Data Model (VDM) allows to build type-safe OData requests for a given service. The java classes represent the ",Object(s.b)("em",{parentName:"p"},"data model and API of the service"),". As a consequence all requests that are build through the VDM are not only ",Object(s.b)("em",{parentName:"p"},"syntactically valid")," but also ",Object(s.b)("em",{parentName:"p"},"semantically valid"),"."),Object(s.b)("h2",{id:"using-the-fluent-api"},"Using the Fluent API"),Object(s.b)("p",null,"The VDM consistes of ",Object(s.b)("em",{parentName:"p"},"service")," and ",Object(s.b)("em",{parentName:"p"},"data model")," classes. The service classes mirror the API provided by the OData service and serve as entry point for creating requests."),Object(s.b)("p",null,"To execute HTTP requests the OData client leverages ",Object(s.b)("em",{parentName:"p"},"Destinations")," and are documented in more detail ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/java/features/connectivity"}),"here"),". The following code snippits assume that such a destination is in place:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),"HttpDestination destination;\n")),Object(s.b)("p",null,"Below the different OData operations are documented using the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/resource"}),"Business Partner Service")," on S/4HANA as an example. It is represented by the ",Object(s.b)("inlineCode",{parentName:"p"},"BusinessPartnerService")," class which is part of the pre-generated S/4HANA VDM. The following code snippits assume that an instance of this service is setup:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),"BusinessPartnerService service = new DefaultBusinessPartnerService();\n")),Object(s.b)("h3",{id:"create"},"Create"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),"BusinessParter partner = new BusinessPartner();\npartner = service.createBusinessPartner(partner)\n    .execute(destination);\n")),Object(s.b)("h3",{id:"read-single"},"Read (Single)"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),'BusinessParter partner = new BusinessPartner();\nservice.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME)\n    .execute(destination);\n')),Object(s.b)("h3",{id:"read-collection"},"Read (Collection)"),Object(s.b)(i.a,{defaultValue:"v4",values:[{label:"OData V2",value:"v2"},{label:"OData V4",value:"v4"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"v4",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME)\n    .filter(BusinessPartner.FIRST_NAME.substring("substr"))\n    .execute(destination);\n'))),Object(s.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME)\n    .filter(BusinessPartner.FIRST_NAME.ne("substr"))\n    .execute(destination);\n')))),Object(s.b)("h3",{id:"update"},"Update"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),"service.updateBusinessPartner(partner)\n    .replacingEntity()\n    .execute(destination);\n")),Object(s.b)("h3",{id:"delete"},"Delete"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JAVA"}),"service.deleteBusinessPartner(partner)\n    .execute(destination);\n")))}p.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,v=d["".concat(i,".").concat(b)]||d[b]||p[b]||s;return a?r.a.createElement(v,c({ref:t},l,{components:a})):r.a.createElement(v,c({ref:t},l))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},171:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===s)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},175:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(175);var i=function(){return Object(n.useContext)(s.a)},c=a(171),o=a.n(c),l=a(94),u=a.n(l);const d=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:s,values:c,groupId:l}=e,{tabGroupChoices:b,setTabGroupChoices:v}=i(),[m,f]=Object(n.useState)(s);if(null!=l){const e=b[l];null!=e&&e!==m&&f(e)}const O=e=>{f(e),null!=l&&v(l,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:o()("tab-item",u.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===m)[0]))}}}]);