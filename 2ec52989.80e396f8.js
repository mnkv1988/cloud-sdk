(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{151:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||b[u]||i;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},154:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(153),r=a(155);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var d=!a.startsWith(t)?t+a.replace(/^\//,""):a;return c?e+d:d}(i,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},155:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(151)),s=a(154),o={id:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",title:"Typed client to consume OData v4 Services for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"OData v4 typed client",description:"Use SAP Cloud SDK for Java to build and run OData v4 requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},l={unversionedId:"java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",id:"java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",isDocsHomePage:!1,title:"Typed client to consume OData v4 Services for Java",description:"Use SAP Cloud SDK for Java to build and run OData v4 requests in a type-safe way.",source:"@site/docs/java/features/odata/type-safe-client-odata-v4.md",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/odata/type-safe-client-odata-v4.md",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1598870051,sidebar_label:"OData v4 typed client",sidebar:"someSidebar",previous:{title:"Typed client to consume OData v2 Services for Java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"},next:{title:"Use destinations to connect to other systems and services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service"}},c=[{value:"Build and execute OData Requests with the typed OData client",id:"build-and-execute-odata-requests-with-the-typed-odata-client",children:[]},{value:"Using the Fluent API",id:"using-the-fluent-api",children:[]},{value:"OData Features",id:"odata-features",children:[{value:"Basic CRUD Operations",id:"basic-crud-operations",children:[]},{value:"Select",id:"select",children:[]},{value:"Filter",id:"filter",children:[]}]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Navigation properties",id:"navigation-properties",children:[]}],d={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"build-and-execute-odata-requests-with-the-typed-odata-client"},"Build and execute OData Requests with the typed OData client"),Object(i.b)("p",null,"The typed OData v4 client allows to build type-safe OData v4 requests for a given service. The Java classes represent the ",Object(i.b)("em",{parentName:"p"},"data model")," and the available ",Object(i.b)("em",{parentName:"p"},"operations")," of the service. As a consequence all requests that are build through the typed OData client are not only ",Object(i.b)("em",{parentName:"p"},"syntactically valid")," but also ",Object(i.b)("em",{parentName:"p"},"semantically valid"),"."),Object(i.b)("h2",{id:"using-the-fluent-api"},"Using the Fluent API"),Object(i.b)("p",null,"The typed OData v4 client consists of ",Object(i.b)("em",{parentName:"p"},"service")," and ",Object(i.b)("em",{parentName:"p"},"data model")," classes. The service classes mirror the API provided by the OData service and serve as entry point for creating requests. They provide a builder which allows for adding further parameters in a fluent way."),Object(i.b)("p",null,"To execute HTTP requests the OData client leverages ",Object(i.b)("em",{parentName:"p"},"Destinations")," and are documented in more detail ",Object(i.b)("a",{href:Object(s.a)("docs/java/features/connectivity/sdk-connectivity-destination-service")},"here"),". The following code snippets assume that such a destination is in place:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"HttpDestination destination;\n")),Object(i.b)("p",null,"On an abstract level requests are generally build up according to the following pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"result = service.operation()\n    .withParameter(...)\n    .execute(destination);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"operation")," corresponds to the service's capabilities for entities e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"createEntity")," or ",Object(i.b)("inlineCode",{parentName:"li"},"readEntities"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"withParameter")," corresponds to:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OData v4 query parameters e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," or ",Object(i.b)("inlineCode",{parentName:"li"},"orderby")),Object(i.b)("li",{parentName:"ul"},"Or other modifiers like custom headers"))),Object(i.b)("li",{parentName:"ul"},"Which OData v4 parameters are available depends on the operation. For example when updating entities the ",Object(i.b)("inlineCode",{parentName:"li"},"$filter")," parameter is not available.")),Object(i.b)("p",null,"Below different OData features are documented using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/resource"}),"Business Partner Service")," on S/4HANA as an example. It is represented by the ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartnerService")," class which is part of the pre-generated type-safe client for S/4HANA also known as Virtual Data Model (VDM). The following code snippets assume that an instance of this service is set up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BusinessPartnerService service = new DefaultBusinessPartnerService();\n")),Object(i.b)("h2",{id:"odata-features"},"OData Features"),Object(i.b)("h3",{id:"basic-crud-operations"},"Basic CRUD Operations"),Object(i.b)("p",null,"Create, Read, Update and Delete operations on entities are build from the associated service class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.createBusinessPartner(partner);\nservice.getBusinessPartnerByKey("id");\nservice.getAllBusinessPartner();\nservice.updateBusinessPartner(partner);\nservice.deleteBusinessPartnerAddress(address);\n')),Object(i.b)("p",null,"Each of the above statements returns a builder object that allows for specifying certain request parameters, depending on the operation."),Object(i.b)("p",null,"The following query parameters and request options are available for these operations:"),Object(i.b)("p",null,"Query parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$select"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$expand")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$search")," are available on reading a single or multiple entities"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$filter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$top"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$skip")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$orderby")," are available only when reading a collection of entities")),Object(i.b)("p",null,"Request parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Update operations allow to set either ",Object(i.b)("inlineCode",{parentName:"li"},"modifyingEntity()")," or ",Object(i.b)("inlineCode",{parentName:"li"},"replacingEntity()")," which will result in ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PATCH")," or ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PUT")," respectively. By default entities are modified via ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH"),"."),Object(i.b)("li",{parentName:"ul"},"Update and delete operations allow to modify how ETags are handled:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default an ETag is send if one is present on the entity being modified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"matchAnyVersionIdentifier()")," will instead always send a ",Object(i.b)("inlineCode",{parentName:"li"},"*")," which acts as a wildcard to match all ETags."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreAnyVersionIdentifier()")," will ensure that no ETag is sent."))),Object(i.b)("li",{parentName:"ul"},"All operations allow for adding custom headers via ",Object(i.b)("inlineCode",{parentName:"li"},"withHeader(...)"))),Object(i.b)("h4",{id:"handling-of-etags"},"Handling of ETags"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}),"ETag")," is a version identifier which is often used to implement an optimistic locking mechanism. The SDK will try to read version identifiers from responses and set them when sending OData requests."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'partner = service.getBusinessPartnerByKey("id")\n                 .execute(destination);\nresponse = service.updateBusinessPartner(partner)\n                 .execute(destination);\n// update the partner reference\npartner = response.getModifiedEntity();\n')),Object(i.b)("p",null,"On the read request the SDK will automatically try to extract the version identifier from the response and store it within the ",Object(i.b)("inlineCode",{parentName:"p"},"partner")," object. When updating it will be taken from there and sent with the ",Object(i.b)("inlineCode",{parentName:"p"},"If-match")," header."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."))),Object(i.b)("h4",{id:"handling-of-csrf-tokens"},"Handling of CSRF tokens"),Object(i.b)("p",null,"For create, update and delete requests the SDK will try to send a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Cookie-to-header_token"}),"CSRF token"),". Upon execution the request will try to fetch a token first before issuing the actual create request. Many services require this behavior for security reasons. However, the create request will be made without a CSRF token if none could be obtained."),Object(i.b)("h3",{id:"select"},"Select"),Object(i.b)("p",null,"When reading entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"select( ... )")," on the builders. Through it the query parameters ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$expand")," are set. It takes in properties of the entity being queried. Primitive properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," while complex and navigational properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$expand"),". This handling is done automatically by the SDK."),Object(i.b)("p",null,"The properties that can be selected or expanded are represented via static ",Object(i.b)("em",{parentName:"p"},"fields on the entity")," class. So there will be a field for each property. E.g. for the business partner entity one can find ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.LAST_NAME"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS)\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,LastName&$expand=to_BusinessPartnerAddress\n")),Object(i.b)("p",null,"OData v4 allows for formulating nested, fully featured queries on complex and navigational properties. Querying nested objects is possible within expand. That means the following query is possible:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n        .select(BusinessPartnerAddress.CITY_CODE, BusinessPartnerAddress.COUNTRY)\n        .filter(BusinessPartnerAddress.CITY_CODE.notEqualTo("1234"))\n        .orderBy(BusinessPartnerAddress.COUNTRY.desc())\n    )\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following ",Object(i.b)("inlineCode",{parentName:"p"},"expand")," query parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$expand=to_BusinessPartnerAddress($select=CityCode,Country;$filter=CityCode eq '1234';$orderby=Country desc)\n")),Object(i.b)("h3",{id:"filter"},"Filter"),Object(i.b)("p",null,"When operating on a collection of entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders. It directly corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the request. Filters are also build via the static property fields on entities."),Object(i.b)("p",null,"The following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nGet all business partners that either:\n  - Have first name 'Alice' but not last name 'Bob'\n  - Or have first name 'Mallory'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.equalTo(\"Alice\")\n        .and(BusinessPartner.LAST_NAME.notEqualTo(\"Bob\"))\n        .or(BusinessPartner.FIRST_NAME.equalTo(\"Mallory\"))\n    )\n    .execute(destination);\n")),Object(i.b)("p",null,"Will translate to this filter parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),Object(i.b)("p",null,"Take note of the order of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or"),". As ",Object(i.b)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",Object(i.b)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",Object(i.b)("inlineCode",{parentName:"p"},"or"),"."),Object(i.b)("p",null,"To achieve a different order with ",Object(i.b)("inlineCode",{parentName:"p"},"and")," as the top level statement one would nest the ",Object(i.b)("inlineCode",{parentName:"p"},"or")," within ",Object(i.b)("inlineCode",{parentName:"p"},"and(...)"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'.and(BusinessPartner.LAST_NAME.notEqualTo("Bob")\n    .or(BusinessPartner.FIRST_NAME.equalTo("Mallory"))\n)\n')),Object(i.b)("h4",{id:"available-filter-expressions"},"Available Filter Expressions"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter"}),"OData v4 standard")," allows for a wide range of filter expressions. A detailed list of what is available in the SDK can be obtained from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odatav4/expression/package-summary.html"}),"the Javadoc"),". The functionality can also be discovered through the fluent API."),Object(i.b)("p",null,"The below example leverages OData v4 exclusive features to build a more complex request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nFetch all business partners where:\n- the last name is at least twice as long as the first name\n- AND the combined string of first and last name does not contain 'bob'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.length().multiply(2).lessThan(BusinessPartner.LAST_NAME.length())\n        .and(BusinessPartner.FIRST_NAME.concat(BusinessPartner.LAST_NAME).contains(\"bob\"))\n    )\n    .execute(destination);\n")),Object(i.b)("h2",{id:"error-handling"},"Error Handling"),Object(i.b)("p",null,"Sometimes requests fail and the SDK provides a flexible way to deal with such failures on multiple levels. All ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," methods may throw a runtime exception (extending) ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),". This will always contain the request which was (attempted to be) sent out as well as the cause of the exception. To handle all kind of failures consider the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'try { ... }\n catch( final ODataException e ) {\n    ODataQueryGeneric query = e.getQuery();\n    logger.debug("The following query failed: {}", query);\n    // do something else\n}\n')),Object(i.b)("p",null,"This handling is the most generic, handling all possible failures. For more specific information there are dedicated exceptions inheriting from ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),". Please tend to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odata/client/exception/ODataException.html"}),"documentation")," for all the exception types."),Object(i.b)("p",null,"In order to handle different kinds of failure one can list multiple catch clauses to cover different levels or cases that might occur, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"try { ... }\ncatch( ODataErrorResponseException e ) {\n    // ...\n} catch( ODataRequestException e ) {\n    // ...\n} catch( ODataDeserializationException e ) {\n    // ...\n}\n")),Object(i.b)("p",null,"Note that instead of applying ",Object(i.b)("inlineCode",{parentName:"p"},"try/catch")," one can also make use of ",Object(i.b)("inlineCode",{parentName:"p"},"tryExecute")," on the request builders."),Object(i.b)("h2",{id:"navigation-properties"},"Navigation properties"),Object(i.b)("p",null,"A navigation property describes a unidirectional relationship between two entity types.\nLike other properties it has a name and declares a multiplicity, i.e. whether to expect a single or multiple values.\nAdditionally a navigation property allows for dedicated CRUD operations, that may not be exposed by default on entity sets of the service root.\nSuch operations also provide a convenient way to access the nested resources of entities."),Object(i.b)("p",null,"The typed OData client for OData v4 supports the following operations on (arbitrarily nested) navigation properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create"),Object(i.b)("li",{parentName:"ul"},"Read"),Object(i.b)("li",{parentName:"ul"},"Update"),Object(i.b)("li",{parentName:"ul"},"Delete"),Object(i.b)("li",{parentName:"ul"},"Count")),Object(i.b)("p",null,"The below example leverages the creation of a nested entity in relation to an existing entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'/*\nCreate a new address for a specific business partner.\n*/\nBusinessPartner businessPartnerById = BusinessPartner.builder().businessPartner("123").build();\nBusinessPartnerAddress addressItem = BusinessPartnerAddress.builder().country("DE").build();\n\nservice.forEntity( businessPartnerById )\n    .navigateTo( BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS )\n    .create( addressItem )\n    .execute( destination );\n')),Object(i.b)("p",null,"This sample API call translates to the following service request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /ODataService/API_BUSINESS_PARTNER/A_BusinessPartner(123)/to_BusinessPartnerAddress\n{\n  "country": "de"\n}\n')))}p.isMDXComponent=!0}}]);