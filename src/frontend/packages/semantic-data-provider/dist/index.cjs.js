"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("react-admin"),t=require("@material-ui/core/styles"),n=require("jsonld"),a=require("speakingurl"),o=require("crypto"),i=require("@rdfjs/data-model");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=u(e),c=u(n),l=u(a),f=u(o),p=u(i);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,r,t,n,a,o,i){try{var u=e[o](i),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,a)}function g(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){v(o,n,a,i,u,"next",e)}function u(e){v(o,n,a,i,u,"throw",e)}i(void 0)}))}}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function w(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function x(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}(e,r)||S(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,r){if(e){if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,r):void 0}}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function O(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=S(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}var E=["record","source"],C=["record","source"],R=function(e){var t=e.record,n=e.source,a=w(e,C);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),s.default.createElement(r.ReferenceArrayField,b({record:t,source:n},a))};R.defaultProps={addLabel:!0};var A=["record","source"],P=function(e){var t=e.record,n=e.source,a=w(e,A);return t[n]&&"object"===y(t[n])&&(t[n]=t[n]["@id"]||t[n].id),s.default.createElement(r.ReferenceField,b({record:t,source:n},a))};P.defaultProps={addLabel:!0};var T=["children","record","filter","source"],I=function(r){var t=r.children,n=r.record,a=r.filter,o=r.source,i=w(r,T),u=x(e.useState(),2),c=u[0],l=u[1];return e.useEffect((function(){if(n&&o&&Array.isArray(null==n?void 0:n[o])){var e=null==n?void 0:n[o].filter((function(e){var r=!0;for(var t in a){var n=e[t];Array.isArray(n)?n.includes(a[t])||(r=!1):n!==a[t]&&(r=!1)}return r})),r=h({},n);r[o]=e.length>0?e:void 0,l(r)}}),[n,o,a]),s.default.createElement(s.default.Fragment,null,s.default.Children.map(t,(function(e,r){return s.default.cloneElement(e,h(h({},i),{},{record:c,addLabel:!0,source:o}))})))},_=["children","groupReference","groupLabel","groupHeader","filterProperty"],q=function(e){var t=r.useResourceContext({});return s.default.createElement(r.ReferenceArrayInput,b({},e,{resource:t,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===y(e)?e.id||e["@id"]:e}))):r}}))},U=["reificationClass","children"],B=t.makeStyles({form:{display:"flex"},input:{paddingRight:"20px"}}),F=t.makeStyles({root:{display:"none"}}),M=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},H=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},L=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,u,s,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,u=t.jsonContext,s=M("authServer",o),(l=H(r,o))===s||null===(n=o[s])||void 0===n||!n.proxyUrl||!0===(null===(a=o[l])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:l!==s});case 11:e.t0=e.sent;case 12:if(f=e.t0,(p=f.json).id=p.id||p["@id"],p["@context"]===u){e.next=19;break}return e.next=18,c.default.compact(p,u);case 18:p=e.sent;case 19:return e.abrupt("return",p);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),D=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l,f,p,d,h,y,v,g;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,u=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,L(n.id,e);case 6:if(s=r.sent,null!==(a=u.list)&&void 0!==a&&a.forceArray){l=O(null===(c=u.list)||void 0===c?void 0:c.forceArray);try{for(l.s();!(f=l.n()).done;)p=f.value,s[p]&&!Array.isArray(s[p])&&(s[p]=[s[p]])}catch(e){l.e(e)}finally{l.f()}}if(null===(o=u.list)||void 0===o||!o.dereference){r.next=35;break}h=O(null===(d=u.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((y=h.n()).done){r.next=27;break}if(v=y.value,!s[v]||"string"!=typeof s[v]||!s[v].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,L(s[v],e);case 18:delete(g=r.sent)["@context"],s[v]=g,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:s});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function z(e,r){return e(r={exports:{}},r.exports),r.exports}var W=z((function(e){var r,t;r=N,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),$=function(e){return e&&e.rawFile&&e.rawFile instanceof File},J=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return W(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},Y=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=J(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,u=void 0,i="",u=o.split("."),u.length>1&&(i=u.pop(),o=u.join(".")),l.default(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,u}),e)})));return function(r,t){return e.apply(this,arguments)}}(),G=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!$(r[n][a])){e.next=11;break}return e.next=10,Y(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!$(r[n])){e.next=20;break}return e.next=19,Y(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),Q=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=W(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},V=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l,f,p,d,y,v,g,m,b,w,x,k;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,u=e.resources,s=e.httpClient,c=e.jsonContext,l=u[t],f=new Headers,null!==(a=l.fieldsMapping)&&void 0!==a&&a.title&&f.set("Slug",n.data[null===(p=l.fieldsMapping)||void 0===p?void 0:p.title]),null===(o=l.create)||void 0===o||!o.container){r.next=10;break}d=null===(v=l.create)||void 0===v?void 0:v.container,y=H(d,i),r.next=20;break;case 10:if(y=(null===(g=l.create)||void 0===g?void 0:g.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(m=Q(l.types,[y],i),(b=Object.keys(m))&&0!==b.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(l.types)," found on server ").concat(y));case 17:if(!(b.length>1||m[b[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(l.types)," on server ").concat(y));case 19:d=m[b[0]][0];case 20:return r.next=22,G(n.data,e);case 22:return n.data=r.sent,r.next=25,s(d,{method:"POST",headers:f,body:JSON.stringify(h({"@context":c,"@type":l.types},n.data)),noToken:!0!==i[y].authServer});case 25:return w=r.sent,x=w.headers,k=x.get("Location"),r.next=30,D(e)(t,{id:k});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},X=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=H(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Z=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=O(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=17;break}return s=u.value,r.prev=7,r.next=10,a(s,{method:"DELETE"});case 10:o.push(s),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},K=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=W(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},ee=function(e){return function(r){var t,n,a,o,i=e.dataServers,u=e.resources[r];if(!u)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null!==(t=u.create)&&void 0!==t&&t.container)return null===(a=u.create)||void 0===a?void 0:a.container;if(null!==(n=u.create)&&void 0!==n&&n.server)return K(u.types,null===(o=u.create)||void 0===o?void 0:o.server,i);var s=M("default",i);return K(u.types,s,i)}},re=function(){var e=g(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,u=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return h(h({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),l=Object.keys(s).map((function(e){return i(e,{noToken:!s[e]||!0!==o[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==u?c.default.compact(r,u):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(l);case 5:if(0!==(f=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return f=(p=[].concat).apply.apply(p,k(f)),d=f.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(d=d.filter((function(e){return Object.entries(n.filter).some((function(r){var t=x(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(d=d.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(d=d.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:d,total:f.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),te=function(e){var r,t={};if(e){var n,a=O(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=h(h({},t),r.reduce((function(e,r){return m({},r,h({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},ne=z((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==N&&N.crypto&&(t=N.crypto),!t)try{t=f.default}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},u=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=u.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||l).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var u=0;u<a;u+=4)r[n+u>>>2]=t[u>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new s.init(r,e)}}),c=o.enc={},l=c.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(t,r/2)}},p=c.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(t,r)}},d=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(p.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return p.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),c=(u=r?e.ceil(u):e.max((0|u)-this._minBufferSize,0))*i,l=e.min(4*c,o);if(c){for(var f=0;f<c;f+=i)this._doProcessBlock(a,f);t=a.splice(0,c),n.sigBytes-=l}return new s.init(t,l)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=h.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new y.HMAC.init(e,t).finalize(r)}}});var y=o.algo={};return o}(Math)})),ae=z((function(e,r){var t;e.exports=(t=ne,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,u=[];!function(){for(var r=0;r<64;r++)u[r]=4294967296*e.abs(e.sin(r+1))|0}();var s=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],s=e[r+1],d=e[r+2],h=e[r+3],y=e[r+4],v=e[r+5],g=e[r+6],m=e[r+7],b=e[r+8],w=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],O=e[r+14],E=e[r+15],C=o[0],R=o[1],A=o[2],P=o[3];C=c(C,R,A,P,i,7,u[0]),P=c(P,C,R,A,s,12,u[1]),A=c(A,P,C,R,d,17,u[2]),R=c(R,A,P,C,h,22,u[3]),C=c(C,R,A,P,y,7,u[4]),P=c(P,C,R,A,v,12,u[5]),A=c(A,P,C,R,g,17,u[6]),R=c(R,A,P,C,m,22,u[7]),C=c(C,R,A,P,b,7,u[8]),P=c(P,C,R,A,w,12,u[9]),A=c(A,P,C,R,x,17,u[10]),R=c(R,A,P,C,k,22,u[11]),C=c(C,R,A,P,S,7,u[12]),P=c(P,C,R,A,j,12,u[13]),A=c(A,P,C,R,O,17,u[14]),C=l(C,R=c(R,A,P,C,E,22,u[15]),A,P,s,5,u[16]),P=l(P,C,R,A,g,9,u[17]),A=l(A,P,C,R,k,14,u[18]),R=l(R,A,P,C,i,20,u[19]),C=l(C,R,A,P,v,5,u[20]),P=l(P,C,R,A,x,9,u[21]),A=l(A,P,C,R,E,14,u[22]),R=l(R,A,P,C,y,20,u[23]),C=l(C,R,A,P,w,5,u[24]),P=l(P,C,R,A,O,9,u[25]),A=l(A,P,C,R,h,14,u[26]),R=l(R,A,P,C,b,20,u[27]),C=l(C,R,A,P,j,5,u[28]),P=l(P,C,R,A,d,9,u[29]),A=l(A,P,C,R,m,14,u[30]),C=f(C,R=l(R,A,P,C,S,20,u[31]),A,P,v,4,u[32]),P=f(P,C,R,A,b,11,u[33]),A=f(A,P,C,R,k,16,u[34]),R=f(R,A,P,C,O,23,u[35]),C=f(C,R,A,P,s,4,u[36]),P=f(P,C,R,A,y,11,u[37]),A=f(A,P,C,R,m,16,u[38]),R=f(R,A,P,C,x,23,u[39]),C=f(C,R,A,P,j,4,u[40]),P=f(P,C,R,A,i,11,u[41]),A=f(A,P,C,R,h,16,u[42]),R=f(R,A,P,C,g,23,u[43]),C=f(C,R,A,P,w,4,u[44]),P=f(P,C,R,A,S,11,u[45]),A=f(A,P,C,R,E,16,u[46]),C=p(C,R=f(R,A,P,C,d,23,u[47]),A,P,i,6,u[48]),P=p(P,C,R,A,m,10,u[49]),A=p(A,P,C,R,O,15,u[50]),R=p(R,A,P,C,v,21,u[51]),C=p(C,R,A,P,S,6,u[52]),P=p(P,C,R,A,h,10,u[53]),A=p(A,P,C,R,x,15,u[54]),R=p(R,A,P,C,s,21,u[55]),C=p(C,R,A,P,b,6,u[56]),P=p(P,C,R,A,E,10,u[57]),A=p(A,P,C,R,g,15,u[58]),R=p(R,A,P,C,j,21,u[59]),C=p(C,R,A,P,y,6,u[60]),P=p(P,C,R,A,k,10,u[61]),A=p(A,P,C,R,d,15,u[62]),R=p(R,A,P,C,w,21,u[63]),o[0]=o[0]+C|0,o[1]=o[1]+R|0,o[2]=o[2]+A|0,o[3]=o[3]+P|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var u=this._hash,s=u.words,c=0;c<4;c++){var l=s[c];s[c]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return u},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,r,t,n,a,o,i){var u=e+(r&t|~r&n)+a+i;return(u<<o|u>>>32-o)+r}function l(e,r,t,n,a,o,i){var u=e+(r&n|t&~n)+a+i;return(u<<o|u>>>32-o)+r}function f(e,r,t,n,a,o,i){var u=e+(r^t^n)+a+i;return(u<<o|u>>>32-o)+r}function p(e,r,t,n,a,o,i){var u=e+(t^(r|~n))+a+i;return(u<<o|u>>>32-o)+r}r.MD5=o._createHelper(s),r.HmacMD5=o._createHmacHelper(s)}(Math),t.MD5)})),oe=p.default.namedNode,ie=p.default.quad,ue=p.default.variable,se=function(e){return ae(e)},ce=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return{type:"optional",patterns:[{type:"bgp",triples:t.query},e(r,t.node)]}}))},le=function(e,r){var t=[],n=function(e){var r=[];if(e){var t,n=O(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(n&&r&&r.length>0){var a,o=O(n);try{var i=function(){var e=a.value,n=function(e){return e.includes("/")&&e.split("/")[0]}(e),o=function(e){return e.includes("/")?e.split("/")[1]:e}(e),i=se(e),u=n?se(n):"1",s=o.split(":")[0],c=o.split(":")[1],l=r.find((function(e){return e.prefix===s})),f=[ie(ue("s"+u),oe(l.url+c),ue("s"+i)),ie(ue("s"+i),ue("p"+i),ue("o"+i))];t.push({node:e,parentNode:n,query:f,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:ce(t)}}return{construct:"",where:""}},fe=p.default.literal,pe=p.default.namedNode,de=p.default.triple,he=p.default.variable,ye=new(0,require("sparqljs").Generator)({}),ve=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[de(he("s1"),he("p1"),he("o1"))],where:[{type:"filter",expression:{type:"operation",operator:"in",args:[he("containerUri"),r.map((function(e){return pe(e)}))]}},{type:"bgp",triples:[de(he("containerUri"),pe("http://www.w3.org/ns/ldp#contains"),he("s1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[he("s1")]}}],type:"query",prefixes:Object.fromEntries(a.map((function(e){return[e.prefix,e.url]})))};if(t&&Object.keys(t).length>0){var i=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,u=t.q&&t.q.length>0;i&&o.where.push(t.sparqlWhere),u&&o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[he("s1")],where:[{type:"bgp",triples:[de(he("s1"),he("p1"),he("o1"))]},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[he("o1")]}]},fe(t.q.toLowerCase(),"",pe("http://www.w3.org/2001/XMLSchema#string"))]}},{type:"filter",expression:{type:"operation",operator:"notexists",args:[{type:"bgp",triples:[de(he("s1"),pe("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),he("o1"))]}]}}],type:"query"}]}),Object.keys(t).forEach((function(e){if("sparqlWhere"!==e&&"q"!==e){var r="a"===e?t[e]:e,n=r.split(":")[0],i=r.split(":")[1],u=a.find((function(e){return e.prefix===n})),s="a"===e?"http://www.w3.org/1999/02/22-rdf-syntax-ns#type":u.url+i,c="a"===e?u.url+i:t[e];o.where.push({type:"bgp",triples:[de(he("s1"),pe(s),pe(c))]})}}))}var s=le(n,a);return s&&s.construct&&(o.where=o.where.concat(s.where),o.template=o.template.concat(s.construct)),o.where.push({type:"bgp",triples:[de(he("s1"),he("p1"),he("o1"))]}),ye.stringify(o)},ge=function(){var e=g(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,l,f,p,d,y,v,g,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,u=a.resources,s=a.httpClient,l=a.jsonContext,f=a.ontologies,p=u[t],d=h({"@context":l,"@type":p.types,"@embed":"@never"},te(null===(o=p.list)||void 0===o?void 0:o.dereference)),y=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,u,l=ve({containers:r[e],params:h(h({},n),{},{filter:h(h({},null===(o=p.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(u=p.list)||void 0===u?void 0:u.dereference,ontologies:f});s(i[e].sparqlEndpoint,{method:"POST",body:l,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return c.default.frame(r,d,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(y);case 6:if(0!==(v=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return v=(g=[].concat).apply.apply(g,k(v)),m=v.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(m=m.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(m=m.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:m,total:v.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),me=function(e,r){var t={};return Object.keys(e).forEach((function(n){if(!r[n])throw new Error("No server found with key "+n);t[n]=[],e[n].forEach((function(e){t[n].push(W(r[n].baseUrl,e))}))})),t},be=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t){var n,a,o,i,u,s,c,l,f=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=f.length>1&&void 0!==f[1]?f[1]:{},i=e.dataServers,u=e.resources,s=u[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(c=null!==(n=s.list)&&void 0!==n&&n.containers&&Object.keys(s.list.containers).length>0?me(s.list.containers,i):Q(s.types,null===(l=s.list)||void 0===l?void 0:l.servers,i),null===(a=s.list)||void 0===a||!a.fetchContainer){r.next=10;break}return r.abrupt("return",re(c,t,o,e));case 10:return r.abrupt("return",ge(c,t,o,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},we=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=O(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=21;break}return s="object"===y(s=u.value)?s["@id"]:s,r.prev=8,r.next=11,D(e)(t,{id:s});case 11:c=r.sent,l=c.data,o.push(l),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},xe=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=h(h({},n.filter),{},m({},n.target,n.id)),delete n.target,r.next=4,be(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ke=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,u=H(n.id,a),r.next=4,G(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(h({"@context":i},n.data)),noToken:!u||!0!==a[u].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Se(e){this.message=e}Se.prototype=new Error,Se.prototype.name="InvalidCharacterError";var je="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Se("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Oe(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(je(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return je(r)}}function Ee(e){this.message=e}function Ce(e,r){if("string"!=typeof e)throw new Ee("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Oe(e.split(".")[t]))}catch(e){throw new Ee("Invalid token specified: "+e.message)}}Ee.prototype=new Error,Ee.prototype.name="InvalidTokenError";var Re=function(){var e=g(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,u,s,c,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=M("pod",t),i=M("authServer",t),!a){e.next=24;break}return u=Ce(a),s=u.webId,e.prev=6,e.next=9,n(s);case 9:l=e.sent,f=l.json,c=f,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=W(s,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=c.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||W(s,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=c.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),Ae=function(){var e=g(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=O(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();exports.DateTimeInput=function(e){return s.default.createElement(r.DateTimeInput,b({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.FilterHandler=I,exports.GroupedReferenceHandler=function(e){var t=e.children,n=e.groupReference,a=e.groupLabel,o=e.groupHeader,i=e.filterProperty,u=w(e,_),c=r.useQueryWithStore({type:"getList",resource:n,payload:{}}).data;return s.default.createElement(s.default.Fragment,null,null==c?void 0:c.map((function(e,r){var n={};return n[i]=e.id,s.default.createElement(s.default.Fragment,null,o&&o(h(h({},u),{},{group:e})),s.default.createElement(I,b({},u,{filter:n,label:e[a]}),t))})))},exports.ImageField=function(e){var t=e.record,n=e.source,a=w(e,E);return"string"==typeof t&&(t=m({},n,t)),s.default.createElement(r.ImageField,b({record:t,source:n},a))},exports.ReferenceArrayField=R,exports.ReferenceArrayInput=q,exports.ReferenceField=P,exports.ReferenceInput=function(e){var t=r.useResourceContext({});return s.default.createElement(r.ReferenceInput,b({},e,{resource:t,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===y(r)?r.id||r["@id"]:r):r}}))},exports.ReificationArrayInput=function(e){var t=e.reificationClass;e.children;var n=w(e,U),a=B(),o=F();return s.default.createElement(r.ArrayInput,n,s.default.createElement(r.SimpleFormIterator,{classes:{form:a.form}},s.default.Children.map(e.children,(function(e,r){return s.default.cloneElement(e,{className:a.input})})),s.default.createElement(r.TextInput,{className:o.root,source:"type",initialValue:t})))},exports.UriArrayField=R,exports.UriArrayInput=q,exports.buildDereferenceQuery=le,exports.buildSparqlQuery=ve,exports.dataProvider=function(e){if(!M("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=Re(e),t=Ae(e),n=function(e){return g(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(be(e)),getOne:n(D(e)),getMany:n(we(e)),getManyReference:n(xe(e)),create:n(V(e)),update:n(ke(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(X(e)),deleteMany:n(Z(e)),getCreateContainer:n(ee(e))}},exports.httpClient=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.headers||(t.headers=new Headers),t.method){case"POST":case"PATCH":case"PUT":t.headers.has("Accept")||t.headers.set("Accept","application/ld+json"),t.headers.has("Content-Type")||t.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:t.headers.has("Accept")||t.headers.set("Accept","application/ld+json")}if(!t.noToken){var n=localStorage.getItem("token");n&&t.headers.set("Authorization","Bearer ".concat(n))}return r.fetchUtils.fetchJson(e,t)},exports.useCreateContainer=function(t){var n=e.useContext(r.DataProviderContext),a=x(e.useState(),2),o=a[0],i=a[1];return e.useEffect((function(){t&&n.getCreateContainer(t).then((function(e){return i(e)}))}),[t]),o};
//# sourceMappingURL=index.cjs.js.map
