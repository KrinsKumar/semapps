"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-final-form"),r=require("react-admin"),n=require("@mui/material"),o=require("@mui/styles/makeStyles"),i=require("@mui/material/Autocomplete"),a=require("@mui/icons-material/Language"),u=require("@mui/icons-material/Add");require("@mui/icons-material/SaveAlt");var c=require("@semapps/semantic-data-provider");require("@semapps/input-components");var l=require("@mui/icons-material/Save"),s=require("@mui/icons-material/StarBorder");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=f(e),d=f(o),h=f(i),m=f(a),v=f(u),y=f(l),g=f(s);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
w=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function p(){}function d(){}var h={};u(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(A([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=d.prototype=f.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,u){var c=l(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,u(y,"constructor",d),u(d,"constructor",p),p.displayName=u(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),u(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),u(y,a,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function E(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){E(i,n,o,a,u,"next",e)}function u(e){E(i,n,o,a,u,"throw",e)}a(void 0)}))}}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function P(e,t){return e(t={exports:{}},t.exports),t.exports}var U=P((function(e,t){var r,n;e.exports=(r={772:(e,t,r)=>{const n=r(826).remove,o=/[.*+?^${}()|[\]\\]/g,i=/[a-z0-9_]/i,a=/\s+/;e.exports=function(e,t,r){var u,c;c={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},u=(u=r)||{},Object.keys(u).forEach(e=>{c[e]=!!u[e]}),r=c;const l=Array.from(e).map(e=>n(e));let s=l.join("");return(t=n(t)).trim().split(a).filter(e=>e.length>0).reduce((e,t)=>{const n=t.length,a=!r.insideWords&&i.test(t[0])?"\\b":"",u=new RegExp(a+t.replace(o,"\\$&"),"i");let c,f;if(c=u.exec(s),r.requireMatchAll&&null===c)return s="",[];for(;c;){f=c.index;const t=n-l.slice(f,f+n).join("").length,o=f-l.slice(0,f).join("").length,i=[f+o,f+n+o+t];if(i[0]!==i[1]&&e.push(i),s=s.slice(0,f)+new Array(n+1).join(" ")+s.slice(f+n),!r.findAllOccurrences)break;c=u.exec(s)}return e},[]).sort((e,t)=>e[0]-t[0])}},826:e=>{var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z"},r=Object.keys(t).join("|"),n=new RegExp(r,"g"),o=new RegExp(r,""),i=function(e){return e.replace(n,(function(e){return t[e]}))};e.exports=i,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=i}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(772))}));U.AutosuggestHighlightMatch;var F=P((function(e,t){var r,n;e.exports=(r={705:e=>{e.exports=function(e,t){const r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((n,o)=>{const i=n[0],a=n[1];r.push({text:e.slice(i,a),highlight:!0}),o===t.length-1?a<e.length&&r.push({text:e.slice(a,e.length),highlight:!1}):a<t[o+1][0]&&r.push({text:e.slice(a,t[o+1][0]),highlight:!1})}),r}}},n={},function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,e),i.exports}(705))}));F.AutosuggestHighlightParse;var N=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,D=/^0o[0-7]+$/i,_=parseInt,W="object"==typeof T&&T&&T.Object===Object&&T,B="object"==typeof self&&self&&self.Object===Object&&self,G=W||B||Function("return this")(),M=Object.prototype.toString,$=Math.max,V=Math.min,Y=function(){return G.Date.now()};function H(e,t,r){var n,o,i,a,u,c,l=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function h(e){return l=e,u=setTimeout(v,t),s?d(e):a}function m(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-l>=i}function v(){var e=Y();if(m(e))return y(e);u=setTimeout(v,function(e){var r=t-(e-c);return f?V(r,i-(e-l)):r}(e))}function y(e){return u=void 0,p&&n?d(e):(n=o=void 0,a)}function g(){var e=Y(),r=m(e);if(n=arguments,o=this,c=e,r){if(void 0===u)return h(c);if(f)return u=setTimeout(v,t),d(c)}return void 0===u&&(u=setTimeout(v,t)),a}return t=z(t)||0,X(r)&&(s=!!r.leading,i=(f="maxWait"in r)?$(z(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),g.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=c=o=u=void 0},g.flush=function(){return void 0===u?a:y(Y())},g}function X(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function z(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==M.call(e)}(e))return NaN;if(X(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=X(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(N,"");var r=R.test(e);return r||D.test(e)?_(e.slice(2),r?2:8):q.test(e)?NaN:+e}var K=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return X(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),H(e,t,{leading:n,maxWait:t,trailing:o})},Q=["fetchLexicon","resource","source","initialValue","label","parse","optionText","helperText"],Z=d.default((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),J=function(e,t){return"string"==typeof e?e:e.label?e.label:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},ee=function(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)},te=function(t){var o=t.fetchLexicon,i=t.resource,a=t.source,u=t.initialValue,c=t.label,l=t.parse,s=t.optionText;t.helperText;var f=S(t,Q),d=Z(),y=r.useLocale(),g=r.useTranslate(),b=r.useNotify(),w=r.useInput(x({source:a,initialValue:u},f)),E=w.input,O=E.value,j=E.onChange,L=E.onBlur,I=E.onFocus,T=w.isRequired,P=w.meta,N=P.error,q=P.submitError,R=P.touched,D=k(e.useState(u),2),_=D[0],W=D[1],B=k(e.useState([]),2),G=B[0],M=B[1],$=e.useMemo((function(){return K((function(e,t){o({keyword:e,locale:y}).then((function(e){return t(e)})).catch((function(e){return b(e.message,{type:"error"})}))}),200)}),[y,o,b]);return e.useEffect((function(){_&&$(_,(function(e){return M(e)}))}),[O,_,s,$]),p.default.createElement(h.default,{freeSolo:!0,autoComplete:!0,value:O||null,openOnFocus:!!u,options:O?[O].concat(C(G)):G,filterSelectedOptions:!0,filterOptions:function(e,t){return _&&e.push({label:ee(_),summary:'Ajouter "'.concat(ee(_),'" au dictionnaire'),icon:v.default}),e},clearOnBlur:!0,selectOnFocus:!0,handleHomeEndKeys:!0,getOptionLabel:function(e){return J(e,s)},isOptionEqualToValue:function(e,t){return J(e,s)===J(t,s)},onChange:function(e,t){t&&l&&(t=l(t)),j(t),M([])},onInputChange:function(e,t){return W(t)},noOptionsText:g("ra.navigation.no_results"),renderInput:function(e){return e.inputProps.autoComplete="new-password",p.default.createElement(n.TextField,A({},e,{autoFocus:!0,inputProps:x(x({},e.inputProps),{},{onBlur:function(t){L(t),e.inputProps.onBlur&&e.inputProps.onBlur(t)},onFocus:function(t){I(t),e.inputProps.onFocus&&e.inputProps.onFocus(t)}}),label:""!==c&&!1!==c&&p.default.createElement(r.FieldTitle,{label:c,source:a,resource:i,isRequired:T}),error:!(!R||!N&&!q)},f))},renderOption:function(e){var t=U(e.label,_),r=F(e.label,t);return p.default.createElement(n.Grid,{container:!0,alignItems:"center"},p.default.createElement(n.Grid,{item:!0},p.default.createElement(e.icon||m.default,{className:d.icon})),p.default.createElement(n.Grid,{item:!0,xs:!0},"string"==typeof r?r:r.map((function(e,t){return p.default.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),p.default.createElement(n.Typography,{variant:"body2",color:"textSecondary"},e.summary)))}})};te.defaultProps={variant:"filled",margin:"dense"};var re=function(t){var n=r.useDataProvider(),o=r.useRedirect(),i=r.useNotify();return e.useCallback(function(){var e=O(w().mark((function e(r){var a,u,c,l,s,f,p=arguments;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:[],e.next=3,n.getOne(t,{id:r});case 3:return u=e.sent,c=u.data,(l=x({},c))["http://www.w3.org/ns/prov#wasDerivedFrom"]=l.id,delete l.id,delete l["@context"],a.forEach((function(e){delete l[e]})),e.next=12,n.create(t,{data:l});case 12:s=e.sent,f=s.data,o("/"+t+"/"+encodeURIComponent(f.id)+"/show"),i("La ressource a bien été copiée",{type:"success"});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n,o,i])},ne=function(t){var n=r.useDataProvider(),o=r.useNotify(),i=r.useRedirect();return e.useCallback(function(){var e=O(w().mark((function e(r){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.create(t,{id:r});case 2:i("/"+t+"/"+encodeURIComponent(r)+"/show"),o("La ressource a bien été importée",{type:"success"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,i,o])},oe=d.default((function(e){return{toolbar:{backgroundColor:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),ie=function(t){t.basePath,t.record;var r=t.resource,n=t.stripProperties;oe(),c.useContainers(r,"@remote");var o=c.useDataModel(r),i=re(r),a=ne(r);return e.useCallback(function(){var e=O(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.plainUri,"fork"!==t.method){e.next=6;break}return e.next=4,i(r,n);case 4:e.next=8;break;case 6:return e.next=8,a(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[i,a,n]),o?p.default.createElement(p.default.Fragment,null," "):null},ae=["stripProperties"],ue=d.default((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}})),ce=["resource","fetchLexicon","selectData","redirect","save","saving"],le=d.default((function(e){return{toolbar:{backgroundColor:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),se=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},fe=P((function(e){var t,r;t=T,r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():t.urljoin=r()})),pe=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""};exports.CreateOrImportForm=function(t){var o=t.stripProperties,i=S(t,ae),a=k(e.useState(0),2),u=a[0],c=a[1],l=r.useTheme().theme,s=n.useMediaQuery((function(){return l.breakpoints.down("sm")}),{noSsr:!0}),f=ue();return p.default.createElement(p.default.Fragment,null,p.default.createElement(n.Box,{pb:2,fullWidth:!0},p.default.createElement(n.Tabs,{value:u,onChange:function(e,t){return c(t)},indicatorColor:"primary"},p.default.createElement(n.Tab,{className:f.tab,label:"Créer"}),p.default.createElement(n.Tab,{className:f.tab,label:s?"Importer":"Importer une ressource distante"})),p.default.createElement(n.Divider,null)),0===u&&p.default.createElement(r.SimpleForm,i),1===u&&p.default.createElement(ie,A({stripProperties:o||[]},i)))},exports.ImportForm=ie,exports.LexiconAutocompleteInput=te,exports.LexiconCreateDialog=function(o){var i=o.fetchLexicon,a=o.selectData,u=r.useCreateSuggestionContext(),c=u.filter,l=u.onCancel,s=u.onCreate,f=r.useResourceContext(),d=k(e.useState(c||""),2),h=d[0],m=d[1],v=k(r.useCreate(f),1)[0],y=e.useCallback((function(e){var t=e.lexicon;t.uri||delete t.summary,v({payload:{data:a(t)}},{onSuccess:function(e){m(""),s(e)}})}),[v,s,a]);return p.default.createElement(n.Dialog,{open:!0,onClose:l,fullWidth:!0,maxWidth:"sm"},p.default.createElement(t.Form,{onSubmit:y,render:function(e){var t=e.handleSubmit,r=e.dirtyFields;return p.default.createElement("form",{onSubmit:t},p.default.createElement(n.DialogContent,null,p.default.createElement(te,{label:"Titre",source:"lexicon",initialValue:h,fetchLexicon:i})),p.default.createElement(n.DialogActions,null,p.default.createElement(n.Button,{onClick:l},"Annuler"),p.default.createElement(n.Button,{variant:"contained",color:"primary",type:"submit",disabled:!r.lexicon},"Ajouter")))}}))},exports.LexiconImportForm=function(o){o.resource;var i=o.fetchLexicon,a=o.selectData,u=o.redirect,c=o.save;o.saving,S(o,ce);var l=le(),s=e.useCallback(function(){var e=O(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.lexicon).uri||delete r.summary,"string"==typeof r&&(r={label:r}),e.next=5,c(a(r),u);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,c,u]);return p.default.createElement(t.Form,{onSubmit:s,render:function(e){var t=e.handleSubmit,o=e.dirtyFields;return p.default.createElement("form",{onSubmit:t},p.default.createElement(n.Box,{m:"1em"},p.default.createElement(te,{label:"Titre",source:"lexicon",fetchLexicon:i,validate:r.required()})),p.default.createElement(n.Toolbar,{className:l.toolbar},p.default.createElement(n.Button,{type:"submit",startIcon:p.default.createElement(y.default,null),variant:"contained",color:"primary",disabled:!o.lexicon},"Créer")))}})},exports.fetchESCO=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://ec.europa.eu/esco/api";return function(){var t=O(w().mark((function t(r){var n,o,i,a;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch(fe(e,"suggest2?text=".concat(encodeURIComponent(n),"&language=").concat(o,"&type=skill&isInScheme=&facet=&offset=&limit=&full=&selectedVersion=&viewObsolete=")));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a._embedded.results.map((function(e){return{uri:e.uri,label:pe(e.title.replace("’","'")),icon:g.default}})));case 11:throw new Error("Failed to fetch ESCO server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},exports.fetchWikidata=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://www.wikidata.org/w/api.php";return function(){var t=O(w().mark((function t(r){var n,o,i,a;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.keyword,o=r.locale,t.next=3,fetch("".concat(e,"?action=wbsearchentities&format=json&language=").concat(o,"&uselang=").concat(o,"&type=item&limit=10&origin=*&search=").concat(encodeURIComponent(n)));case 3:if(!(i=t.sent).ok){t.next=11;break}return t.next=7,i.json();case 7:return a=t.sent,t.abrupt("return",a.search.map((function(e){return{uri:e.concepturi,label:se(e.match.text),summary:se(e.description),icon:m.default}})));case 11:throw new Error("Failed to fetch Wikidata server");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},exports.useFork=re,exports.useSync=ne;
//# sourceMappingURL=index.cjs.js.map
