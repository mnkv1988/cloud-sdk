(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(184)),c={},i={unversionedId:"js/features/odata/common/batch/combine-change-retrieve",id:"js/features/odata/common/batch/combine-change-retrieve",isDocsHomePage:!1,title:"combine-change-retrieve",description:"In the example below, the changesets will be executed first, and then retrieve requests will be executed sequentially afterward. The order of execution within the changeset is not defined.",source:"@site/docs/js/features/odata/common/batch/combine-change-retrieve.mdx",slug:"/js/features/odata/common/batch/combine-change-retrieve",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/combine-change-retrieve",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/common/batch/combine-change-retrieve.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1601906093},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the example below, the changesets will be executed first, and then retrieve requests will be executed sequentially afterward. The order of execution within the changeset is not defined.\nThe first ",Object(a.b)("inlineCode",{parentName:"p"},"BatchResponse")," will be the response to the changeset. The rest will be the responses for your retrieve requests."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const [updateChangesetResponse, ...retrieveResponses] =\n  await batch(\n    changeset(...updateRequests),\n    ...retrieveRequests\n  )\n  .execute(destination);\n")))}l.isMDXComponent=!0}}]);