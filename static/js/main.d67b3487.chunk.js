(this["webpackJsonpuse-page-headings-tree-example"]=this["webpackJsonpuse-page-headings-tree-example"]||[]).push([[0],{130:function(e,t){},131:function(e,t){},173:function(e,t,n){"use strict";n.r(t);var r,a=n(2),u=n.n(a),o=n(79),i=n.n(o),c=(n(89),n(41)),l=n(80),d=n.n(l),s=n(81),f=n.n(s);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}try{r=d.a.deprecate}catch(_){r=function(e,t){var n=!1;return function(){return n||(console.warn(t),n=!0),e.apply(this,arguments)}}}var g=r;function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function b(e,t){return e(t={exports:{}},t.exports),t.exports}var y=b((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.randomBytes(16)};var n,r=(n=f.a)&&n.__esModule?n:{default:n};e.exports=t.default}));v(y);var O=b((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);var a=function(e,t){var r=t||0,a=n;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")};t.default=a,e.exports=t.default}));v(O);var j=b((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(y),r=a(O);function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t,a){var u=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n.default)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[u+i]=o[i];return t||(0,r.default)(o)};t.default=u,e.exports=t.default}));v(j);var E=g(j,"Deep requiring like `const uuidv4 = require('uuid/v4');` is deprecated as of uuid@7.x. Please require the top-level module when using the Node.js CommonJS module or use ECMAScript Modules when bundling for the browser. See https://github.com/uuidjs/uuid#deep-requires-now-deprecated for more information."),w=function(e,t){return Object.keys(t).map((function(e){return t[e]})).slice(0,e[1]-2)},N=function(e,t){return m({},e,{id:e.element.id,text:e.element.innerText||e.element.innerHTML,expanded:t})},x=function(e){var t={},n={H2:{},H3:{},H4:{},H5:{},H6:{}},r=function(e,n){return{childrenCount:0,rootId:t[e.tagName],element:e,childNodes:[],index:n}};return e.forEach((function(e,a){!function(e){if(!/^H[2-6]$/.test(e))throw Error("(usePageHeadingsTree.js): <".concat(e.toLowerCase(),"> elements are not supported. ")+" Only heading elements (<h2> through <h6>)  are supported (for now).")}(e.tagName),t[e.tagName]=E(),"H2"!==e.tagName?n[e.tagName][t[e.tagName]]=m({},r(e,a),{parentMap:w(e.tagName,t)}):n.H2[t.H2]=r(e,a)})),n},P=function(e,t){for(var n=Object.keys(e),r=function(r){var a=e[n[r-1]],u=e[n[r]];u&&Object.keys(u).forEach((function(e){var n=N(u[e],t);if(n.parentMap){var r=n.parentMap[n.parentMap.length-1],o=a[r];!function(e){if(!e)throw Error('(usePageHeadingsTree.js): One of the tree nodes is missing a parent.\nYou may have skipped a heading level in your document or your query may not contain a sequential list of heading nodes (Correct: "h2,h3,h4" Incorrect: "h2,h4")')}(o),o.childrenCount+=n.childNodes.length+1,o.childNodes.push(n)}}))},a=n.length-1;a>=0;a--)r(a);return Object.keys(e.H2).map((function(n){return N(e.H2[n],t)}))},H=function(){var e,t,n,r=Object(a.useRef)(),o=Object(a.useState)([]),i=Object(c.a)(o,2),l=i[0],d=i[1],s=Object(a.useState)(null),f=Object(c.a)(s,2),h=f[0],p=f[1];Object(a.useEffect)((function(){var e=r.current.querySelectorAll("h2,h3,h4,h5,h6");d(e)}),[]),e=l,t=p,n=!1,Object(a.useEffect)((function(){var r=x(e),a=P(r,n);t(a)}),[e,n]);return u.a.createElement("div",{className:"card bg-light"},u.a.createElement("div",{ref:r,className:"bg-dark p-3 text-light rounded-top"},u.a.createElement("h1",null,"This is the main page heading (not included)"),u.a.createElement("h2",{id:"hid1"},"First h2"),u.a.createElement("h3",{id:"hid2"},"First h3"),u.a.createElement("h3",{id:"hid3"},"Second h3"),u.a.createElement("h2",{id:"hid4"},"Second h2"),u.a.createElement("h3",{id:"hid5"},"Third h3"),u.a.createElement("h4",{id:"hid6"},"First h4"),u.a.createElement("h5",{id:"hid7"},"First h5"),u.a.createElement("h6",{id:"hid8"},"First h6"),u.a.createElement("h3",{id:"hid9"},"Fourth h3")),u.a.createElement("div",{className:"p-5"},u.a.createElement("h2",null,"Result"),u.a.createElement("pre",null,h?u.a.createElement("ul",null,h.map((function e(t){return u.a.createElement(u.a.Fragment,null,u.a.createElement("li",null,t.text),t.childNodes.length>0?u.a.createElement("ul",{key:t.id},t.childNodes.map(e)):null)}))):null)))},M=function(){return u.a.createElement("div",{className:"m-5"},u.a.createElement(H,null))};i.a.render(u.a.createElement(M,null),document.getElementById("root"))},82:function(e,t,n){e.exports=n(173)},89:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.d67b3487.chunk.js.map