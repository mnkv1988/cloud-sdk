(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var o=a(2),r=a(6),n=(a(0),a(157)),i={id:"video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java",title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",sidebar_label:"Generate OData client",description:"You will learn how to generate type-safe OData client with Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java",id:"java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java",isDocsHomePage:!1,title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",description:"You will learn how to generate type-safe OData client with Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",source:"@site/docs/java/video/odata-generator.mdx",slug:"/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/video/odata-generator.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Generate OData client",sidebar:"someSidebar",previous:{title:"Video tutorial: Getting started with the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloudsdk-for-java"},next:{title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java"}},l=[{value:"Looking for more?",id:"looking-for-more",children:[]}],d={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Imagine you need to develop an App that integrates with OData service. Maybe you also want to host it on SAP Cloud Platform? This might be a painstaking task. This video tutorial shows how to minimize your efforts and simplify everything to the limit. All you have to do is use SAP Cloud SDK for Java and have your hands on a API definition which is usually ",Object(n.b)("inlineCode",{parentName:"p"},"EDMX")," file. In case you have access to your service, the simplest way to get it is by using ",Object(n.b)("inlineCode",{parentName:"p"},"/$metadata")," endpoint and saving it to a file."),Object(n.b)("p",null,"In this video SAP developers' advocate ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max Streifeneder")," will take you step by step to success. Your can also check our docs on generating ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"../features/odata/generate-typed-odata-v2-and-v4-client-for-java"}),"Odata type-safe client"),". Enjoy the video!"),Object(n.b)("div",{class:"sdk-video-container"},Object(n.b)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/NXuDRONdRTQ?start=2185",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"looking-for-more"},"Looking for more?"),Object(n.b)("p",null,"Check out ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max's channel")," for other videos on Cloud SDK and other SAP technologies. He speaks easy about difficult enterprise software topics and helps to navigate vast SAP Cloud ecosystem to help you deliver beautiful Apps and Extensions for S/4HANA and other popular SAP products."))}s.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return v}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,v=u["".concat(i,".").concat(f)]||u[f]||p[f]||n;return a?r.a.createElement(v,c(c({ref:t},d),{},{components:a})):r.a.createElement(v,c({ref:t},d))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<n;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);