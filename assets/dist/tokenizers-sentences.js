webpackJsonp([11],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),l=a(r),u=n(13),o=n(18),i=a(o),d=n(350),c=a(d);(0,u.render)(l.default.createElement(i.default,{textarea:!0,flow:!1,tokenizer:c.default}),document.getElementById("naive-mount"))},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,l=e.status,o=void 0===l?"default":l,i=e.onChange,d=void 0===i?Function.prototype:i,c=e.faded,s=void 0!==c&&c,f="bar-textarea";return"error"===o?f+=" error":"success"===o&&(f+=" success"),u.default.createElement("div",null,u.default.createElement("textarea",{placeholder:r,onChange:d,value:n,className:o+(s?" faded":"")}),u.default.createElement("span",{className:f}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(1),u=a(l)},18:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),u=n(11),o=n(10),i=a(o),d=n(17),c=a(d),s=(0,u.compose)((0,u.withState)("input","setInput",""),(0,u.withState)("training","setTraining",function(e){return e.training||""})),f=s(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.training,u=e.setTraining,o=e.textarea,d=void 0!==o&&o,s=e.trained,f=void 0!==s&&s,v=e.flow,p=void 0===v||v,m=d?c.default:i.default,g=void 0;return g=f?n?t(r)(n):[]:n?t(n):[],l.default.createElement("div",{style:{width:"55%"}},l.default.createElement("div",null,f&&l.default.createElement(c.default,{placeholder:"Enter training text here...",value:r,onChange:function(e){return u(e.target.value)},faded:!0}),l.default.createElement(m,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(e){return a(e.target.value)}}),l.default.createElement("p",{style:{width:"100%"}},g.map(function(e){return p?l.default.createElement("span",{className:"token",style:{float:"left"}},e):l.default.createElement("div",{className:"token"},e)}))),l.default.createElement("div",{style:{clear:"both"}}))});t.default=f},350:function(e,t){"use strict";function n(e){e=e||{};var t=e.exceptions||[],n=new RegExp("("+t.map(function(e){return e+"\\."}).join("|")+")");return function(e){for(var t=e.replace(u,"$1$2").split(""),a=[],r="",l=void 0,s=0,f=t.length;s<f;s++)l=t[s],s===f-1||!n.test(l)&&!d.test(l)&&(c.test(l)||((r+l).match(o)||[]).length%2===0&&((r+l).match(i)||[]).length%2===0)?(a.push(r+(l&&r?" ":"")+l),r=""):r+=(r?" ":"")+l;return a}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTokenizer=n;var a="’‘`‛'",r='«»„‟“”"',l=["Dr","etc","Jr","M","Mgr","Mr","Mrs","Ms","Mme","Mlle","Prof","Sr","St"],u=new RegExp(["([.?!…]+)","(["+r+"*_]?[*_]?)","[\\s\\r\\n]+","(?=["+r+a+"]?[A-Z0-9])"].join(""),"g"),o=new RegExp("["+r+"]","g"),i=/[(){}\[\]]/g,d=/^[A-Z0-9]\s?[.]\s*$/,c=/^[A-Za-z0-9]\s*\)/,s=n({exceptions:l});t.default=s}});