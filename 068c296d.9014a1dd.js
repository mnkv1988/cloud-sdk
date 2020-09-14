(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";var a=n(0),i=n(19);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},160:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(159),i=n(161);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},161:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(157)),r=n(160),s={title:"Connecting to external systems from the Business Application Studio (BAS) with the SAP Cloud SDK for JavaScript / TypeScript",sidebar_label:"Connecting to external systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},c={unversionedId:"js/guides/bas-external-system",id:"js/guides/bas-external-system",isDocsHomePage:!1,title:"Connecting to external systems from the Business Application Studio (BAS) with the SAP Cloud SDK for JavaScript / TypeScript",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",source:"@site/docs/js/guides/bas-external-system.mdx",slug:"/js/guides/bas-external-system",permalink:"/cloud-sdk/docs/js/guides/bas-external-system",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/guides/bas-external-system.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600081239,sidebar_label:"Connecting to external systems from BAS",sidebar:"someSidebar",previous:{title:"Migrate to Open Source version of SDK for JS/TS",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"},next:{title:"SAP Cloud SDK for JavaScript API Reference",permalink:"/cloud-sdk/docs/js/api"}},l=[{value:"What is the Business Application Studio (BAS)?",id:"what-is-the-business-application-studio-bas",children:[]},{value:'Technical Background <a name="background"></a>',id:"technical-background",children:[]},{value:"Setup",id:"setup",children:[{value:"Prerequisite I: The Business Application Studio",id:"prerequisite-i-the-business-application-studio",children:[]},{value:'Prerequisite II: Cloud Connector and Destination Setup <a name="CCandDestSetup"></a>',id:"prerequisite-ii-cloud-connector-and-destination-setup",children:[]},{value:"Local Application Setup with Business Application Studio",id:"local-application-setup-with-business-application-studio",children:[]}]},{value:"Closing Remarks for Cloud Systems",id:"closing-remarks-for-cloud-systems",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-the-business-application-studio-bas"},"What is the Business Application Studio (BAS)?"),Object(o.b)("p",null,"The Business Application Studio (BAS) is a development environment offered as a service on Cloud Foundry (CF).\nYou can simply subscribe to the BAS and from there quickly start developing without installing node, git, Visual Studio Code or other tools.\nFrom the look and feel it is very similar to Visual Studio Code, which is no surprise since it is based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://theia-ide.org/"}),"Eclipse Theia"),", the open source version of Visual Studio Code."),Object(o.b)("p",null,"However, SAP added a few useful features to the BAS.\nYou can connect the BAS to your CF account, which allows you to reach all systems that you have configured on CF from your local machine. This includes systems that are connected through the Cloud Connector (CC) and are normally not reachable through the internet.\nBeing able to test changes locally reduces the overhead of deploying remotely and thus increases convenience for developers."),Object(o.b)("img",{alt:"Connecting to external On-Premise systems",src:Object(r.a)("img/cloud-connector.png")}),Object(o.b)("h2",{id:"technical-background"},"Technical Background ",Object(o.b)("a",{name:"background"})),Object(o.b)("p",null,"Companies do not expose their SAP S/4HANA On-Premise systems to the internet.\nThey are only reachable via a CC attached to a CF account.\nIn principle, you cannot reach these systems outside the CF account.    "),Object(o.b)("p",null,"However, due to the subscription between the BAS and the CF account there is a connection from the local application to the SAP S/4HANA system.\nOn a high level the connection works the following way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The BAS includes an HTTP_PROXY running at http://localhost:8887 "),Object(o.b)("li",{parentName:"ul"},"This proxy forwards all http requests to the CF account"),Object(o.b)("li",{parentName:"ul"},"CF searches the existing destinations for one matching the URL of the request"),Object(o.b)("li",{parentName:"ul"},"If a destination is present, an initial request is sent to this destination"),Object(o.b)("li",{parentName:"ul"},"The proxy is a reverse proxy also piping back the response to the BAS")),Object(o.b)("p",null,"The SDK helps you to consider the HTTP_PROXY automatically and makes it easy to use the same code base locally and in production on CF.\nThe SDK has a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../features/connectivity/destination-js-sdk"}),"destination lookup")," priority considering environment variables first."),Object(o.b)("p",null,"The trick is to define a ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variable when you run locally, which works like a switch under the hood when you execute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"executeHttpRequest({ destinationName: 'myDestinationName', jwt: 'myJWT' });\n")),Object(o.b)("p",null,"The code is the same for local execution and production. The two situation are:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Case 1:")," When run locally, the SDK reads the destination from the environment variables. The ",Object(o.b)("inlineCode",{parentName:"p"},"jwt")," is irrelevant.\nThe destination contains only the name and URL of the real CF destination.\nSince the destination has no proxy type specified, the SDK takes the HTTP_PROXY into account, as is the default.\nFrom there the flow described above takes place."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Case 2:")," When run on CF there is no environment variable present.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"jwt")," is used to fetch the full destination from the service.\nThe proxy type is ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise")," and the connectivity service provides all proxy information."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function is used by all request builders provided of the SDK as well as by CAP applications connecting to an SAP S/4HANA system."))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"prerequisite-i-the-business-application-studio"},"Prerequisite I: The Business Application Studio"),Object(o.b)("p",null,"You have a Cloud Foundry account and a subscription to the BAS.\nStart the BAS and connect your BAS workspace to the CF account.\nThis is done via the little CF icon (",Object(o.b)("img",{src:Object(r.a)("img/cf-connect-button.jpg")}),") on the left of the BAS.\nThe connection enables the proxy connection from the BAS to your CF account."),Object(o.b)("h3",{id:"prerequisite-ii-cloud-connector-and-destination-setup"},"Prerequisite II: Cloud Connector and Destination Setup ",Object(o.b)("a",{name:"CCandDestSetup"})),Object(o.b)("p",null,"You have setup a working Cloud Connector and configured a destination pointing to an On-Premise system you want to connect to.\nPer default, destinations are not usable by a connected BAS.\nYou need to set two properties ",Object(o.b)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination")," to enable that feature for a specific destination.\nGo to the destination configuration in CF and add the properties:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WebIDEEnabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTML5.DynamicDestination"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(o.b)("h3",{id:"local-application-setup-with-business-application-studio"},"Local Application Setup with Business Application Studio"),Object(o.b)("p",null,"You use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes"}),"launch configurations")," to run and debug applications locally.\nEither extend your existing ",Object(o.b)("inlineCode",{parentName:"p"},".vscode/launch.json")," or create a new one. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-JSON"}),'{"configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug my application",\n      "program": "${workspaceFolder}/dist/main.js",\n      "envFile": "${workspaceFolder}/.env",\n      "preLaunchTask": "npm: build",\n      "outFiles": [\n        "${workspaceFolder}/dist/**/*.js"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"In this example we use a simple Nest.js application.\nThe code will look very similar for express or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.sap.com/topics/cloud-application-programming"}),"CAP")," applications.\nThe property ",Object(o.b)("inlineCode",{parentName:"p"},"program")," defines the script file executed when you run the configuration.\nIn our case the ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," script will start up the Nest server.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"preLaunchTask")," executes the build before each run which compiles the TypeScript files to JavaScript.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"outFiles")," properties defines where the compiled files will be located."),Object(o.b)("p",null,"As discussed ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#background"}),"in the beginning")," we need to set the ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variable.\nThis will interrupt the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk"}),"destination lookup")," and lead to a destination with the HTTP_PROXY considered.\nThe easiest way to do that is via a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file which is read when starting the application.\nIf you do not have a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file create one or adjust the existing one.\nJust add the following entry to the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'destinations="[{"name": "<destinationName>","url": "<destinationUrl>"}]"\n')),Object(o.b)("p",null,"Fill in the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"url")," of the destination you ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#CCandDestSetup"}),"configured in CF"),".\nOnce the request reaches the CF account via the proxy, it reads all authorization information from the real destination.\nAll requests done with the SDK will now reach the SAP S/4HANA system.\nYou can start your application via the launch button. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The SDK also offers a ",Object(o.b)("inlineCode",{parentName:"p"},"mockTestDestination()")," method which reads destination information from a ",Object(o.b)("inlineCode",{parentName:"p"},"system.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.json")," file.\nIn the end, this only sets the ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variables as stored in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file, but could become advantageous if you have many systems.\nYou can also set the ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.json")," to your git ignore list so that they are not checked in by accident and share the systems with your colleagues."))),Object(o.b)("p",null,"For the simple case you would add ",Object(o.b)("inlineCode",{parentName:"p"},"mockTestDestination(<destinationName>)")," to your local startup script and have a ",Object(o.b)("inlineCode",{parentName:"p"},"systems.json")," in your project root:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-JSON"}),'{\n    "systems": [\n        {\n            "alias": "your CF destination name",\n            "uri": "your CF destination url "\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"closing-remarks-for-cloud-systems"},"Closing Remarks for Cloud Systems"),Object(o.b)("p",null,"In case you have a cloud system like SAP S/4HANA Cloud or any other system on the internet you can follow the same approach.\nJust add values for ",Object(o.b)("inlineCode",{parentName:"p"},"user")," and ",Object(o.b)("inlineCode",{parentName:"p"},"password")," to the environment variables if the system requires authorization.\nIn case you use the ",Object(o.b)("inlineCode",{parentName:"p"},"mockTestDestination()")," add the login information to the ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.json"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Via the connection between the BAS and CF it is also possible to import all environment variables from the CF account to the BAS.\nIn particular, you can mirror ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variable containing all service information.\nIf you import these you can use the real destination via the destination service in your locally deployed app.\nThis works for all destinations with a proxy type ",Object(o.b)("inlineCode",{parentName:"p"},"Internet")," but not for the ones with ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise"),".\nThe reason for this is the interference of two proxies: (1) The web proxy of the BAS and (2) the connectivity proxy in CF.\nIf you load an On-Premise destination via the destination service it will contain the connectivity proxy of CF, although you would need the web proxy when you run locally in BAS."))))}p.isMDXComponent=!0}}]);