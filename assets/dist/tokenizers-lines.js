webpackJsonp([13],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),l=a(r),u=n(13),d=n(18),i=a(d),o=n(348),c=a(o);(0,u.render)(l.default.createElement(i.default,{textarea:!0,flow:!1,tokenizer:c.default}),document.getElementById("naive-mount"))},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,l=e.status,d=void 0===l?"default":l,i=e.onChange,o=void 0===i?Function.prototype:i,c=e.faded,f=void 0!==c&&c,s="bar-textarea";return"error"===d?s+=" error":"success"===d&&(s+=" success"),u.default.createElement("div",null,u.default.createElement("textarea",{placeholder:r,onChange:o,value:n,className:d+(f?" faded":"")}),u.default.createElement("span",{className:s}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(1),u=a(l)},18:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),u=n(11),d=n(10),i=a(d),o=n(17),c=a(o),f=(0,u.compose)((0,u.withState)("input","setInput",""),(0,u.withState)("training","setTraining",function(e){return e.training||""})),s=f(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.training,u=e.setTraining,d=e.textarea,o=void 0!==d&&d,f=e.trained,s=void 0!==f&&f,v=e.flow,m=void 0===v||v,p=o?c.default:i.default,h=void 0;return h=s?n?t(r)(n):[]:n?t(n):[],l.default.createElement("div",{style:{width:"55%"}},l.default.createElement("div",null,s&&l.default.createElement(c.default,{placeholder:"Enter training text here...",value:r,onChange:function(e){return u(e.target.value)},faded:!0}),l.default.createElement(p,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(e){return a(e.target.value)}}),l.default.createElement("p",{style:{width:"100%"}},h.map(function(e){return m?l.default.createElement("span",{className:"token",style:{float:"left"}},e):l.default.createElement("div",{className:"token"},e)}))),l.default.createElement("div",{style:{clear:"both"}}))});t.default=s},348:function(e,t){"use strict";function n(e){return e.split(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=/(?:\r\n|\n\r|\n|\r)/}});