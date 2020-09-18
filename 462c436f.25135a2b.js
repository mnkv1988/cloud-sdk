(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{154:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(c,".").concat(h)]||d[h]||b[h]||o;return a?r.a.createElement(u,i(i({ref:t},l),{},{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(154)),c={id:"multi-tenancy-thread-context",title:"Multi Tenancy with the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"],image:null},i={unversionedId:"java/features/multi-tenancy/multi-tenancy-thread-context",id:"java/features/multi-tenancy/multi-tenancy-thread-context",isDocsHomePage:!1,title:"Multi Tenancy with the Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud native features to be used out of the box.",source:"@site/docs/java/features/multi-tenancy/thread-context.mdx",slug:"/java/features/multi-tenancy/multi-tenancy-thread-context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/multi-tenancy/thread-context.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Thread Context",sidebar:"someSidebar",previous:{title:"Use the HttpClient accessor to configure requests to remote services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client"},next:{title:"Resilience Capabilities of the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/resilience/resilience"}},s=[{value:"What is a Thread Context?",id:"what-is-a-thread-context",children:[]},{value:"How is a Thread Context created?",id:"how-is-a-thread-context-created",children:[]},{value:"How can the Thread Context be used?",id:"how-can-the-thread-context-be-used",children:[{value:"Accessing Information",id:"accessing-information",children:[]},{value:"Storing Information",id:"storing-information",children:[]},{value:"Running asynchronous operations",id:"running-asynchronous-operations",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-thread-context"},"What is a Thread Context?"),Object(o.b)("p",null,"The SAP Cloud SDK for Java provides a so called ",Object(o.b)("inlineCode",{parentName:"p"},"ThreadContext"),".\nIt serves as thread-safe storage for potentially sensitive information.\nSpecifically the following three objects are stored:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The current ",Object(o.b)("em",{parentName:"li"},"Tenant")),Object(o.b)("li",{parentName:"ul"},"The current ",Object(o.b)("em",{parentName:"li"},"Principal")," (User)"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jwt.io"}),"JSON Web Token")," (JWT)")),Object(o.b)("p",null,"This information is used throughout the SDK to provide features like tenant and principal isolation, JWT verification and authorization against other systems and services.\nTo ensure different tenants and users are properly isolated in an application this information is always limited to the Thread it was created on, unless it is explicitly passed on by the application (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#running-asynchronous-operations"}),"Propagating the Thread Context"),")."),Object(o.b)("h2",{id:"how-is-a-thread-context-created"},"How is a Thread Context created?"),Object(o.b)("p",null,"The SDK provides a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/servlet/RequestAccessorFilter.html"}),"RequestFilter")," that will listen on incoming HTTP requests.\nIf the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header contains a ",Object(o.b)("inlineCode",{parentName:"p"},"JWT")," from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blogs.sap.com/2020/04/03/sap-application-router/"}),"AppRouter")," the filter will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Verify this token"),Object(o.b)("li",{parentName:"ul"},"Store it in the ",Object(o.b)("inlineCode",{parentName:"li"},"ThreadContext")," and"),Object(o.b)("li",{parentName:"ul"},"Pull the ",Object(o.b)("em",{parentName:"li"},"Tenant")," and ",Object(o.b)("em",{parentName:"li"},"Principal")," information from it")),Object(o.b)("h2",{id:"how-can-the-thread-context-be-used"},"How can the Thread Context be used?"),Object(o.b)("h3",{id:"accessing-information"},"Accessing Information"),Object(o.b)("p",null,"The Thread context can be accessed via the static ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContextAccessor.html"}),"ThreadContextAccessor"),". "),Object(o.b)("p",null,"For the frequently needed ",Object(o.b)("em",{parentName:"p"},"Tenant"),", ",Object(o.b)("em",{parentName:"p"},"Principal")," and ",Object(o.b)("em",{parentName:"p"},"JWT")," there are also dedicated accessors: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/tenant/TenantAccessor.html"}),"TenantAccessor"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/principal/PrincipalAccessor.html"}),"PrincipalAccessor"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/AuthTokenAccessor.html"}),"AuthTokenAccessor"),"."),Object(o.b)("h3",{id:"storing-information"},"Storing Information"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContext.html"}),"ThreadContext")," allows for some manipulation by the application.\nHowever, oftentimes it is more convenient to leverage the ",Object(o.b)("inlineCode",{parentName:"p"},"executeWith...()")," functionality offered by the dedicated accessors."),Object(o.b)("p",null,"Consider a scenario where some part of the code should run on behalf of a specific tenant.\nIn that case you can override the current tenant explicitly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"TenantAccessor.executeWithTenant(customTenant, () -> doStuff());\n")),Object(o.b)("h3",{id:"running-asynchronous-operations"},"Running asynchronous operations"),Object(o.b)("p",null,"As the name suggests the ",Object(o.b)("inlineCode",{parentName:"p"},"ThreadContext")," is bound to a Thread, more specifically to the one it was created.\nIf asynchronous operations need to access the information it has to be propagated to the new Threads."),Object(o.b)("p",null,"The following code achieves this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"ThreadContextExecutor executor = new ThreadContextExecutor();\nCallable operationWithContext = () -> executor.execute(() -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),Object(o.b)("p",null,"Take note that the ",Object(o.b)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," is created ",Object(o.b)("em",{parentName:"p"},"before")," performing the asynchronous operation.\nThis is important because only at that time the context is available and will be propagated."),Object(o.b)("p",null,"A similar approach can be applied with the ",Object(o.b)("em",{parentName:"p"},"Tenant"),", ",Object(o.b)("em",{parentName:"p"},"Principal")," and ",Object(o.b)("em",{parentName:"p"},"AuthToken")," accessors.\nThis code runs an asynchronous operation with a dedicated tenant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Callable operationWithTenant = TenantAccessor.executeWithTenant(customTenant, () -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Be cautious with long running, asynchronous operations. A propagated Thread context will only persist as long as the Thread lives that it was created on. So when the parent Thread dies the context will seize to exist and no longer be available in any of the Threads."))))}p.isMDXComponent=!0}}]);