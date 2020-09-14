(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(157)),l={id:"resilience",title:"Resilience Capabilities of the SAP Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Resilience",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",keywords:["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"],image:null},o={unversionedId:"java/features/resilience/resilience",id:"java/features/resilience/resilience",isDocsHomePage:!1,title:"Resilience Capabilities of the SAP Cloud SDK for Java",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",source:"@site/docs/java/features/resilience/resilience.mdx",slug:"/java/features/resilience/resilience",permalink:"/cloud-sdk/docs/java/features/resilience/resilience",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/resilience/resilience.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600081239,sidebar_label:"Resilience",sidebar:"someSidebar",previous:{title:"Multi Tenancy with the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"}},c=[{value:"Using the Resilience API",id:"using-the-resilience-api",children:[{value:"Executing Operations",id:"executing-operations",children:[]},{value:"Building a Resilience Configuration",id:"building-a-resilience-configuration",children:[]}]},{value:"Resilience Capabilities",id:"resilience-capabilities",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The SAP Cloud SDK for Java provides abstractions for some frequently used resilience patterns like timeout, retry or circuit breaker.\nApplying such patterns helps making an application more resilient against failures it might encounter."),Object(r.b)("p",null,"The following article describes which resilience features the SDK offers and how to apply them.\nIf you are looking for a quick start with resilience also check out our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/s4sdk-resilience.html"}),"dedicated tutorial")," on the topic!"),Object(r.b)("h2",{id:"using-the-resilience-api"},"Using the Resilience API"),Object(r.b)("p",null,"The SDK allows to run any code in the context of one or more resilience patterns.\nThere are two essential building blocks for achieving this:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"ResilienceConfiguration")," that determines which patterns should be applied."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"ResilienceDecorator")," which is capable of applying the configuration to an operation.")),Object(r.b)("p",null,"The fluent ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html"}),"Resilience Configuration API")," provides builders that help with assembling different resilience patterns and their associated parameters.\nWhich patterns are available and how to use them is explained in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#building-a-resilience-configuration"}),"dedicated section below"),"."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceDecorator.html"}),"Resilience Decorator")," is capable of applying such a configuration to a given ",Object(r.b)("inlineCode",{parentName:"p"},"Callable")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Supplier"),"."),Object(r.b)("h3",{id:"executing-operations"},"Executing Operations"),Object(r.b)("p",null,"Consider the following code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"result = ResilienceDecorator.executeSupplier(() -> operation(), configuration);\n")),Object(r.b)("p",null,"This code executes ",Object(r.b)("inlineCode",{parentName:"p"},"operation()")," in a resilient manner according to a ",Object(r.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration"),".\nThe decorator will apply all in ",Object(r.b)("inlineCode",{parentName:"p"},"configuration")," configured patterns and all logic that is needed to combine these patterns."),Object(r.b)("p",null,"Some resilience patterns are applied over multiple executions of the same operation.\nFor example the circuit breaker will prevent further executions, if a significant portion of previous attempts failed."),Object(r.b)("p",null,"To understand how the SDK applies this concept consider the following snippet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration1 = ResilienceConfiguration.of("config-id-1");\nconfiguration2 = ResilienceConfiguration.of("config-id-1");\nconfiguration3 = ResilienceConfiguration.of("config-id-2");\n\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration2);\nResilienceDecorator.executeSupplier(() -> operation(), configuration3);\n')),Object(r.b)("p",null,'Here executions one, two and three will all share the same "resilience state".\nThis means that they will share the same instance of a circuit breaker or bulkhead.\nSo the state is shared via ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#building-a-resilience-configuration"}),"the identifier")," of the associated configuration."),Object(r.b)("h4",{id:"operation-types"},"Operation Types"),Object(r.b)("p",null,"The decorator operates with two kinds of operations:"),Object(r.b)("table",null,Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html"},"Callable")),Object(r.b)("td",null,"May throw checked or unchecked Exceptions")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html"},"Supplier")),Object(r.b)("td",null,"May only throw unchecked Exceptions")))),Object(r.b)("p",null,"Noticeable is the difference in signatures: ",Object(r.b)("em",{parentName:"p"},"Callable")," throws a ",Object(r.b)("em",{parentName:"p"},"checked exception")," while ",Object(r.b)("em",{parentName:"p"},"Supplier")," does not.\nSo you can choose whatever fits your use case best."),Object(r.b)("h4",{id:"execution-variants"},"Execution Variants"),Object(r.b)("p",null,"The decorator allows for three different ways of applying a configuration: "),Object(r.b)("table",null,Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"Execute")),Object(r.b)("td",null,"Immediately runs the operation")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"Decorate")),Object(r.b)("td",null,"Returns a new operation to be run later")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"Queue")),Object(r.b)("td",null,"Immediately runs the operation asynchronously")))),Object(r.b)("p",null,"In case your operation should run asynchronously we highly recommend you leverage the ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," functionality. The decorator will ensure the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}),"Thread Context")," with Tenant and Principal information is propagated correctly to new Threads."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that the Resilience Decorator will try to propagate the current ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}),"Thread Context")," at the ",Object(r.b)("em",{parentName:"p"},"time the decorator is invoked"),". This is important when you are decorating a Callable or Supplier and running it later. The Thread Context must be available whenever ",Object(r.b)("inlineCode",{parentName:"p"},"decorateCallable")," or ",Object(r.b)("inlineCode",{parentName:"p"},"decorateSupplier")," is evaluated. So if the call to ",Object(r.b)("inlineCode",{parentName:"p"},"ResilienceDecorator")," should take place asynchronously you should ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"}),"follow these steps")," to ensure the Thread Context is available."))),Object(r.b)("h4",{id:"failures-and-fallbacks"},"Failures and Fallbacks"),Object(r.b)("p",null,"An operation might fail for two reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The operation itself encounters a failure and throws an error or exception"),Object(r.b)("li",{parentName:"ol"},"A resilience pattern causes the operation to fail (e.g. the circuit breaker prevents further invocations)")),Object(r.b)("p",null,"The SDK wraps all kind of checked and unchecked exceptions into a ",Object(r.b)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," and throws them."),Object(r.b)("p",null,"To deal with failures one can either catch the ",Object(r.b)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," or provide a fallback function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'executeCallable(() -> operation(), configuration,\n(throwable) -> {\n    log.debug("Encountered a failure in operation: ", throwable);\n    log.debug("Proceeding with fallback value: {}", fallback);\n    return fallback;\n});\n')),Object(r.b)("p",null,"In the case of Callable this relieves you of the need to catch the exception at the outer level."),Object(r.b)("h3",{id:"building-a-resilience-configuration"},"Building a Resilience Configuration"),Object(r.b)("p",null,"A new ",Object(r.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," ",Object(r.b)("em",{parentName:"p"},"with default values")," is created by providing an identifier for it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration = ResilienceConfiguration.of("identifier");\n')),Object(r.b)("p",null,"The identifier can be either a string or a class.\nIn case of the latter the (full) classname will be used as identifier.\nThe identifier will be used to apply resilience patterns across ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#executing-operations"}),"multiple invocations to operations"),"."),Object(r.b)("p",null,"Check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html#of-java.lang.String-"}),"the JavaDoc")," for which patterns and parameters will be applied by default.\nYou can also create a configuration with all patterns disabled:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration = ResilienceConfiguration.empty("identifier");\n')),Object(r.b)("p",null,"Individual resilience patterns are configured via dedicated builder classes like ",Object(r.b)("inlineCode",{parentName:"p"},"TimeLimiterConfiguration")," and are added to the configuration via dedicated setters, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"timeLimiterConfiguration()"),".\nFor details see the list of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#resilience-capabilities"}),"Resilience Capabilities")," below."),Object(r.b)("h4",{id:"multi-tenancy"},"Multi Tenancy"),Object(r.b)("p",null,"The SDK is capable of applying the different resilience patterns in a tenant and principal aware manner.\nConsider for example the Bulkhead pattern which limits the amount of parallel executions.\nIf the operation is tenant specific then you would probably want to avoid one tenant blocking all others."),Object(r.b)("p",null,"For this reason the SDK ",Object(r.b)("em",{parentName:"p"},"by default")," isolates resilience patterns based on tenant and principal, if they are available.\nThis strategy can be configured, e.g. for running ",Object(r.b)("em",{parentName:"p"},"without any isolation")," use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"configuration.isolationMode(ResilienceIsolationMode.NO_ISOLATION);\n")),Object(r.b)("p",null,"Other than no isolation there are essentially two modes for tenant and/or principal isolation:"),Object(r.b)("table",null,Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Required"),Object(r.b)("td",null,"Always isolates on tenant and/or principal level, will throw an exception if no tenant/principal is available")),Object(r.b)("tr",null,Object(r.b)("td",null,"Optional"),Object(r.b)("td",null,"Only isolates if tenant and/or principal information is available")))),Object(r.b)("p",null,"Details can be found on the API reference of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceIsolationMode.html"}),"ResilienceIsolationMode"),"."),Object(r.b)("h2",{id:"resilience-capabilities"},"Resilience Capabilities"),Object(r.b)("p",null,"The following resilience patterns are available and can be configured in a Resilience Configuration:"),Object(r.b)("table",null,Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Timeout"),Object(r.b)("td",null,Object(r.b)("em",null,Object(r.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.TimeLimiterConfiguration.html"},"TimeLimiterConfiguration"))),Object(r.b)("td",null,"Limit how long an operation may run before it should be interrupted")),Object(r.b)("tr",null,Object(r.b)("td",null,"Retry"),Object(r.b)("td",null,Object(r.b)("em",null,Object(r.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.RetryConfiguration.html"},"RetryConfiguration"))),Object(r.b)("td",null,"Retry a failed operation a limited amount of times before failing")),Object(r.b)("tr",null,Object(r.b)("td",null,"Circuit Breaker"),Object(r.b)("td",null,Object(r.b)("em",null,Object(r.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.CircuitBreakerConfiguration.html"},"CircuitBreakerConfiguration"))),Object(r.b)("td",null,"Reject attempts if too many failures occurred in the past")),Object(r.b)("tr",null,Object(r.b)("td",null,"Bulkhead ",Object(r.b)("p",null,"(also known as Shed Load or Load Shedding)")),Object(r.b)("td",null,Object(r.b)("em",null,Object(r.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.BulkheadConfiguration.html"},"BulkheadConfiguration"))),Object(r.b)("td",null,"Limit how many instances of this operation may run in parallel")))),Object(r.b)("p",null,"You can find good explanations on how the individual patterns behave on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://resilience4j.readme.io/docs/"}),"documentation of resilience4j")," which the SDK uses under the hood to perform resilient operations."),Object(r.b)("p",null,"Be aware that the patterns interact with each other. They are applied in the following order:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Timeouts"),Object(r.b)("li",{parentName:"ol"},"Bulkhead"),Object(r.b)("li",{parentName:"ol"},"Circuit Breaker"),Object(r.b)("li",{parentName:"ol"},"Retries"),Object(r.b)("li",{parentName:"ol"},"Fallbacks")),Object(r.b)("p",null,"This means that every individual attempt triggered by retries will be limited by the timeout.\nEvery failed retry will be accounted for in the circuit breaker.\nOnly if all retries failed the fallback function will be considered."))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);