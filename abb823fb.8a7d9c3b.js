(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(157)),s=a(166),l=a(167),o=a(160),c={id:"use-typed-odata-v2-client-in-sap-cloud-sdk-for-java",title:"Typed client to consume OData v2 Services for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"OData v2 typed client",description:"Use SAP Cloud SDK for Java to build and run OData v2 requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},b={unversionedId:"java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java",id:"java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java",isDocsHomePage:!1,title:"Typed client to consume OData v2 Services for Java",description:"Use SAP Cloud SDK for Java to build and run OData v2 requests in a type-safe way.",source:"@site/docs/java/features/odata/type-safe-client-odata-v2.mdx",slug:"/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/odata/type-safe-client-odata-v2.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1600418036,sidebar_label:"OData v2 typed client",sidebar:"someSidebar",previous:{title:"Generate a typed OData client for Java",permalink:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"},next:{title:"Typed client to consume OData v4 Services for Java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"}},d=[{value:"Build and execute OData Requests with the typed OData client",id:"build-and-execute-odata-requests-with-the-typed-odata-client",children:[]},{value:"Versions of OData v2 client",id:"versions-of-odata-v2-client",children:[{value:"A stable client version",id:"a-stable-client-version",children:[]},{value:"Improved but still experimental client version",id:"improved-but-still-experimental-client-version",children:[]},{value:"Which one to chose?",id:"which-one-to-chose",children:[]}]},{value:"Using the Fluent API",id:"using-the-fluent-api",children:[]},{value:"OData Features",id:"odata-features",children:[{value:"Basic CRUD Operations",id:"basic-crud-operations",children:[]},{value:"Select",id:"select",children:[]},{value:"Filter",id:"filter",children:[]}]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Navigation properties",id:"navigation-properties",children:[]},{value:"Switch to improved OData v2 type-safe client",id:"switch-to-improved-odata-v2-type-safe-client",children:[]}],u={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"build-and-execute-odata-requests-with-the-typed-odata-client"},"Build and execute OData Requests with the typed OData client"),Object(i.b)("p",null,"The typed OData v2 client allows to build type-safe OData v2 requests for a given service. The Java classes represent the ",Object(i.b)("em",{parentName:"p"},"data model")," and the available ",Object(i.b)("em",{parentName:"p"},"operations")," of the service. As a consequence all requests that are build through the typed OData v2 client are not only ",Object(i.b)("em",{parentName:"p"},"syntactically valid")," but also ",Object(i.b)("em",{parentName:"p"},"semantically valid"),"."),Object(i.b)("h2",{id:"versions-of-odata-v2-client"},"Versions of OData v2 client"),Object(i.b)("p",null,"The SDK has two versions of type-safe OData v2 client."),Object(i.b)("h3",{id:"a-stable-client-version"},"A stable client version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stable and well tested"),Object(i.b)("li",{parentName:"ul"},"Based on 3rd party dependencies, which slows down release of advanced features"),Object(i.b)("li",{parentName:"ul"},"Doesn't share a code base with OData v4 client"),Object(i.b)("li",{parentName:"ul"},"Has good performance, but not optimized for optimal metadata handling")),Object(i.b)("h3",{id:"improved-but-still-experimental-client-version"},"Improved but still experimental client version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Currently released as ",Object(i.b)("inlineCode",{parentName:"li"},"Beta"),", meaning the API might see breaking changes"),Object(i.b)("li",{parentName:"ul"},"High performance thanks to optimized handling of metadata (fewer network requests)"),Object(i.b)("li",{parentName:"ul"},"Developed fully ",Object(i.b)("em",{parentName:"li"},"In house")," and shares code with OData v4 client"),Object(i.b)("li",{parentName:"ul"},"Allows for faster feature development and bug fixes"),Object(i.b)("li",{parentName:"ul"},"Has standard and advanced APIs for typed and untyped client"),Object(i.b)("li",{parentName:"ul"},"More and better implemented features"),Object(i.b)("li",{parentName:"ul"},"Better implementation of BATCH requests (currently in development and not yet available)")),Object(i.b)("h3",{id:"which-one-to-chose"},"Which one to chose?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For production environment we still recommend a ",Object(i.b)("strong",{parentName:"li"},"stable client"),", for testing and development you can leverage both clients."),Object(i.b)("li",{parentName:"ul"},"To test improved client, please, follow simple steps in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#switch-to-improved-odata-vdm-beta"}),"migration guide"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"use Tabs to see the API difference")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Toggle between version Tabs in this document to see the API difference between these two OData v2 clients. Where API is the same we provide a universal code snippet"))),Object(i.b)("h2",{id:"using-the-fluent-api"},"Using the Fluent API"),Object(i.b)("p",null,"The typed OData client consists of ",Object(i.b)("em",{parentName:"p"},"service")," and ",Object(i.b)("em",{parentName:"p"},"data model")," classes. The service classes mirror the API provided by the OData service and serve as entry point for creating requests. They provide a builder which allows for adding further parameters in a fluent way."),Object(i.b)("p",null,"To execute HTTP requests the OData client leverages ",Object(i.b)("em",{parentName:"p"},"Destinations")," and are documented in more detail ",Object(i.b)("a",{href:Object(o.a)("docs/java/features/connectivity/sdk-connectivity-destination-service")},"here"),". The following code snippets assume that such a destination is in place:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"HttpDestination destination;\n")),Object(i.b)("p",null,"On an abstract level requests are generally build up according to the following pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"result = service.operation()\n    .withParameter(...)\n    .execute(destination);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"operation")," corresponds to the service's capabilities for entities e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"createEntity")," or ",Object(i.b)("inlineCode",{parentName:"li"},"readEntities"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"withParameter")," corresponds to:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OData query parameters e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," or ",Object(i.b)("inlineCode",{parentName:"li"},"orderby")),Object(i.b)("li",{parentName:"ul"},"Or other modifiers like custom headers"))),Object(i.b)("li",{parentName:"ul"},"Which OData parameters are available depends on the operation. For example when updating entities the ",Object(i.b)("inlineCode",{parentName:"li"},"$filter")," parameter is not available.")),Object(i.b)("p",null,"Below different OData features are documented using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/resource"}),"Business Partner Service")," on S/4HANA as an example. It is represented by the ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartnerService")," class which is part of the pre-generated S/4HANA Virtual Data Model (VDM). The following code snippets assume that an instance of this service is set up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BusinessPartnerService service = new DefaultBusinessPartnerService();\n")),Object(i.b)("h2",{id:"odata-features"},"OData Features"),Object(i.b)("h3",{id:"basic-crud-operations"},"Basic CRUD Operations"),Object(i.b)("p",null,"Create, Read, Update and Delete operations on entities are build from the associated service class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.createBusinessPartner(partner);\nservice.getBusinessPartnerByKey("id");\nservice.getAllBusinessPartner();\nservice.updateBusinessPartner(partner);\nservice.deleteBusinessPartnerAddress(address);\n')),Object(i.b)("p",null,"Each of the above statements returns a builder object that allows for specifying certain request parameters, depending on the operation."),Object(i.b)("p",null,"The following query parameters and request options are available for these operations:"),Object(i.b)("p",null,"Query parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$select")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$expand")," are available on reading a single or multiple entities"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$filter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$top"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$skip")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$orderby")," are available only when reading a collection of entities")),Object(i.b)("p",null,"Request parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All operations allow for adding custom headers via ",Object(i.b)("inlineCode",{parentName:"li"},"withHeader(...)")),Object(i.b)("li",{parentName:"ul"},"Update operations allow to set either ",Object(i.b)("inlineCode",{parentName:"li"},"modifyingEntity()")," or ",Object(i.b)("inlineCode",{parentName:"li"},"replacingEntity()")," which will result in ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PATCH")," or ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PUT")," respectively. By default entities are modified via ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH"),".")),Object(i.b)("h4",{id:"handling-of-etags"},"Handling of ETags"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}),"ETag")," is a version identifier which is often used to implement an optimistic locking mechanism. The SDK will try to read version identifiers from responses and set them when sending OData requests that manipulate data."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Beta)",value:"v2-beta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'partner = service.getBusinessPartnerByKey("id")\n                 .execute(destination);\nservice.updateBusinessPartner(partner)\n                 .execute(destination);\n// the partner object is updated automatically\n'))),Object(i.b)(l.a,{value:"v2-beta",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'partner = service.getBusinessPartnerByKey("id")\n                 .executeRequest(destination);\nresponse = service.updateBusinessPartner(partner)\n                 .executeRequest(destination);\n// update the partner reference\npartner = response.getModifiedEntity();\n')))),Object(i.b)("p",null,"On the read request the SDK will automatically try to extract the version identifier from the response and store it within the ",Object(i.b)("inlineCode",{parentName:"p"},"partner")," object. When updating it will be taken from there and sent with the ",Object(i.b)("inlineCode",{parentName:"p"},"If-match")," header."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."))),Object(i.b)("p",null,"This behavior can be customized.\nThe following code sends a ",Object(i.b)("inlineCode",{parentName:"p"},"*")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"IF-MATCH")," header which essentially corresponds to a forced overwrite."),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Deprecated)",value:"v2-deprecated"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"service.updateBusinessPartner(partner)\n                 .matchAnyVersionIdentifier()\n                 .execute(destination);\n"))),Object(i.b)(l.a,{value:"v2-deprecated",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"response = service.updateBusinessPartner(partner)\n                 .ignoreVersionIdentifier()\n                 .executeRequest(destination);\n")))),Object(i.b)("h4",{id:"handling-of-csrf-tokens"},"Handling of CSRF tokens"),Object(i.b)("p",null,"For create, update and delete requests the SDK will try to send a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Cookie-to-header_token"}),"CSRF token"),". Upon execution the request will try to fetch a token first before issuing the actual create request. Many services require this behavior for security reasons. However, the create request will be made without a CSRF token if none could be obtained."),Object(i.b)("h3",{id:"select"},"Select"),Object(i.b)("p",null,"When reading entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"select( ... )")," on the builders. Through it the query parameters ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$expand")," are set. It takes in properties of the entity being queried. Primitive properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," while complex and navigational properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$expand"),". This handling is done automatically by the SDK."),Object(i.b)("p",null,"The properties that can be selected or expanded are represented via static ",Object(i.b)("em",{parentName:"p"},"fields on the entity")," class. So there will be a field for each property. E.g. for the business partner entity one can find ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.LAST_NAME"),"."),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Beta)",value:"v2-beta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS)\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),Object(i.b)("p",null,"One can also apply select again to the expanded object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME,\n        BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n            .select(BusinessPartnerAddress.ADDRESS_ID,\n                BusinessPartnerAddress.CITY_CODE))\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n"))),Object(i.b)(l.a,{value:"v2-beta",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS)\n    .executeRequest(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),Object(i.b)("p",null,"One can also apply select again to the expanded object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME,\n        BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n            .select(BusinessPartnerAddress.ADDRESS_ID,\n                BusinessPartnerAddress.CITY_CODE))\n    .executeRequest(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")))),Object(i.b)("h3",{id:"filter"},"Filter"),Object(i.b)("p",null,"When operating on a collection of entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders. It directly corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the request. Filters are also build via the static property fields on entities."),Object(i.b)("p",null,"The following example:"),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Beta)",value:"v2-beta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nGet all business partners that either:\n  - Have first name 'Alice' but not last name 'Bob'\n  - Or have first name 'Mallory'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.eq(\"Alice\")\n        .and(BusinessPartner.LAST_NAME.ne(\"Bob\"))\n        .or(BusinessPartner.FIRST_NAME.eq(\"Mallory\"))\n    )\n    .execute(destination);\n"))),Object(i.b)(l.a,{value:"v2-beta",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nGet all business partners that either:\n  - Have first name 'Alice' but not last name 'Bob'\n  - Or have first name 'Mallory'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.eq(\"Alice\")\n        .and(BusinessPartner.LAST_NAME.ne(\"Bob\"))\n        .or(BusinessPartner.FIRST_NAME.eq(\"Mallory\"))\n    )\n    .executeRequest(destination);\n")))),Object(i.b)("p",null,"Will translate to this filter parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),Object(i.b)("p",null,"Take note of the order of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or"),". As ",Object(i.b)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",Object(i.b)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",Object(i.b)("inlineCode",{parentName:"p"},"or"),"."),Object(i.b)("p",null,"To achieve a different order with ",Object(i.b)("inlineCode",{parentName:"p"},"and")," as the top level statement one would nest the ",Object(i.b)("inlineCode",{parentName:"p"},"or")," within ",Object(i.b)("inlineCode",{parentName:"p"},"and(...)"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'.and(BusinessPartner.LAST_NAME.ne("Bob")\n    .or(BusinessPartner.FIRST_NAME.eq("Mallory"))\n)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'.and(BusinessPartner.LAST_NAME.ne("Bob")\n    .or(BusinessPartner.FIRST_NAME.eq("Mallory"))\n)\n')),Object(i.b)("h4",{id:"available-filter-expressions"},"Available Filter Expressions"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/documentation/odata-version-2-0/uri-conventions/"}),"OData v2 standard")," allows for a limited range of filter expressions compared to OData v4. A detailed list of what is available in the SDK can be obtained from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odata/helper/package-summary.html"}),"the Javadoc"),". The functionality can also be discovered through the fluent API."),Object(i.b)("h2",{id:"error-handling"},"Error Handling"),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Beta)",value:"v2-beta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("p",null,"Coming soon")),Object(i.b)(l.a,{value:"v2-beta",mdxType:"TabItem"},Object(i.b)("p",null,"Sometimes requests fail and the SDK provides a flexible way to deal with such failures on multiple levels. All ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," methods may throw a runtime exception (extending) ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),". This will always contain the request which was (attempted to be) sent out as well as the cause of the exception. To handle all kind of failures consider the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'try { ... }\n catch( final ODataException e ) {\n    ODataQueryGeneric query = e.getQuery();\n    logger.debug("The following query failed: {}", query);\n    // do something else\n}\n')),Object(i.b)("p",null,"This handling is the most generic, handling all possible failures. For more specific information there are dedicated exceptions inheriting from ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),". Please tend to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odata/client/exception/ODataException.html"}),"documentation")," for all the exception types."),Object(i.b)("p",null,"In order to handle different kinds of failure one can list multiple catch clauses to cover different levels or cases that might occur, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"try { ... }\ncatch( ODataErrorResponseException e ) {\n    // ...\n} catch( ODataRequestException e ) {\n    // ...\n} catch( ODataDeserializationException e ) {\n    // ...\n}\n")))),Object(i.b)("h2",{id:"navigation-properties"},"Navigation properties"),Object(i.b)("p",null,"A navigation property describes a unidirectional relationship between two entity types.\nLike other properties it has a name and declares a multiplicity, i.e. whether to expect a single or multiple values.\nAdditionally a navigation property allows for dedicated CRUD operations, that may not be exposed by default on entity sets of the service root.\nSuch operations also provide a convenient way to access the nested resources of entities."),Object(i.b)(s.a,{groupId:"odataProtocol",defaultValue:"v2",values:[{label:"OData V2",value:"v2"},{label:"OData V2 (Beta)",value:"v2-beta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("p",null,"The typed OData client for OData v2 supports the following operations on (first-level only) navigation properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create")),Object(i.b)("p",null,"The below example leverages the creation of a nested entity in relation to an existing entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'/*\nCreate a new address for a specific business partner.\n*/\nBusinessPartner businessPartnerById = BusinessPartner.builder().businessPartner("123").build();\nBusinessPartnerAddress addressItem = BusinessPartnerAddress.builder().country("DE").build();\n\nservice.createBusinessPartnerAddress( addressItem )\n    .asChildOf( businessPartnerById, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS )\n    .execute( destination );\n')),Object(i.b)("p",null,"This sample API call translates to the following service request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /ODataService/API_BUSINESS_PARTNER/A_BusinessPartner(123)/to_BusinessPartnerAddress\n{\n  "country": "de"\n}\n'))),Object(i.b)(l.a,{value:"v2-beta",mdxType:"TabItem"},Object(i.b)("p",null,"The typed OData client for OData v2 supports the following operations on (first-level only) navigation properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create")),Object(i.b)("p",null,"The below example leverages the creation of a nested entity in relation to an existing entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'/*\nCreate a new address for a specific business partner.\n*/\nBusinessPartner businessPartnerById = BusinessPartner.builder().businessPartner("123").build();\nBusinessPartnerAddress addressItem = BusinessPartnerAddress.builder().country("DE").build();\n\nservice.createBusinessPartnerAddress( addressItem )\n    .asChildOf( businessPartnerById, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS )\n    .executeRequest( destination );\n')),Object(i.b)("p",null,"This sample API call translates to the following service request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /ODataService/API_BUSINESS_PARTNER/A_BusinessPartner(123)/to_BusinessPartnerAddress\n{\n  "country": "de"\n}\n')))),Object(i.b)("h2",{id:"switch-to-improved-odata-v2-type-safe-client"},"Switch to improved OData v2 type-safe client"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For any operation type, replace a call to ",Object(i.b)("inlineCode",{parentName:"li"},"execute")," with ",Object(i.b)("inlineCode",{parentName:"li"},"executeRequest"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"service.createBusinessPartner(partner).executeRequest(destination);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("em",{parentName:"li"},"Create")," and ",Object(i.b)("em",{parentName:"li"},"Update")," operations, call ",Object(i.b)("inlineCode",{parentName:"li"},"getModifiedEntity()")," to obtain the created entity representation.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"final BusinessPartner partner = service.createBusinessPartner(partner)\n                                       .executeRequest(destination)\n                                       .getModifiedEntity();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"executeRequest")," throws the runtime exception ",Object(i.b)("inlineCode",{parentName:"li"},"ODataException")," and respective sub classes. Hence, adjust your exception handling as described under the tab ",Object(i.b)("em",{parentName:"li"},"OData V2 (Beta)")," in the section ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#error-handling"}),"Error Handling"),". Note that any ",Object(i.b)("inlineCode",{parentName:"li"},"ErrorResultHandler")," registered by ",Object(i.b)("inlineCode",{parentName:"li"},"withErrorHandler()")," is not considered."),Object(i.b)("li",{parentName:"ul"},"Remove any call to ",Object(i.b)("inlineCode",{parentName:"li"},"cachingMetadata()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"withoutCachingMetadata()")," as they are obsolete."),Object(i.b)("li",{parentName:"ul"},"Remove any call to ",Object(i.b)("inlineCode",{parentName:"li"},"ignoringVersionIdentifier(boolean)")," or ",Object(i.b)("inlineCode",{parentName:"li"},"ignoreVersionIdentifier()"),". Use ",Object(i.b)("inlineCode",{parentName:"li"},"matchAnyVersionIdentifier()")," or ",Object(i.b)("inlineCode",{parentName:"li"},"disableVersionIdentifier()")," instead.")))}p.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},160:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(159),r=a(161);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,l=void 0!==s&&s,o=i.absolute,c=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+b:b}(i,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},161:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},163:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},164:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},165:function(e,t,a){"use strict";var n=a(0),r=a(164);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(165),s=a(163),l=a(47),o=a.n(l),c=37,b=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,d=e.values,u=e.groupId,p=Object(i.a)(),m=p.tabGroupChoices,O=p.setTabGroupChoices,v=Object(n.useState)(l),j=v[0],h=v[1],f=Object(n.useState)(!1),y=f[0],N=f[1];if(null!=u){var g=m[u];null!=g&&g!==j&&d.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=u&&O(u,e)},P=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},B=function(){N(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",B)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),T(e)},onFocus:function(){return w(t)},onClick:function(){w(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);