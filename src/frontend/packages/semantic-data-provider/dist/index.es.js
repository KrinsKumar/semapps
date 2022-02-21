import e,{useState as r,useEffect as t,useContext as n}from"react";import{ImageField as a,ReferenceArrayField as o,ReferenceField as i,useQueryWithStore as c,DateTimeInput as s,useResourceContext as u,ReferenceArrayInput as f,ReferenceInput as l,ArrayInput as p,SimpleFormIterator as d,TextInput as h,DataProviderContext as v,fetchUtils as y}from"react-admin";import{makeStyles as m}from"@material-ui/core/styles";import g from"jsonld";import b from"speakingurl";import w from"crypto";import x from"@rdfjs/data-model";function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){C(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,r,t,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function E(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){O(o,n,a,i,c,"next",e)}function c(e){O(o,n,a,i,c,"throw",e)}i(void 0)}))}}function C(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function R(){return(R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function A(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}(e,r)||_(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,r){if(e){if("string"==typeof e)return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(e,r):void 0}}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function I(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}var B=["record","source"],q=function(r){var t=r.record,n=r.source,o=A(r,B);return"string"==typeof t&&(t=C({},n,t)),e.createElement(a,R({record:t,source:n},o))},L=["record","source"],M=function(r){var t=r.record,n=r.source,a=A(r,L);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(o,R({record:t,source:n},a))};M.defaultProps={addLabel:!0};var F=["record","source"],H=function(r){var t=r.record,n=r.source,a=A(r,F);return t[n]&&"object"===j(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(i,R({record:t,source:n},a))};H.defaultProps={addLabel:!0};var N=["children","record","filter","source"],D=function(n){var a=n.children,o=n.record,i=n.filter,c=n.source,s=A(n,N),u=P(r(),2),f=u[0],l=u[1];return t((function(){if(o&&c&&Array.isArray(null==o?void 0:o[c])){var e=null==o?void 0:o[c].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=S({},o);r[c]=e.length>0?e:void 0,l(r)}}),[o,c,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,S(S({},s),{},{record:f,addLabel:!0,source:c}))})))},z=["children","groupReference","groupLabel","groupHeader","filterProperty"],$=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,i=r.filterProperty,s=A(r,z),u=c({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==u?void 0:u.map((function(r,n){var c={};return c[i]=r.id,e.createElement(e.Fragment,null,o&&o(S(S({},s),{},{group:r})),e.createElement(D,R({},s,{filter:c,label:r[a]}),t))})))},J=function(r){return e.createElement(s,R({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},W=function(r){var t=u({});return e.createElement(f,R({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===j(e)?e.id||e["@id"]:e}))):e}}))},Y=function(r){var t=u({});return e.createElement(l,R({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===j(e)?e.id||e["@id"]:e):e}}))},G=["reificationClass","children"],V=m({form:{display:"flex"},input:{paddingRight:"20px"}}),X=m({root:{display:"none"}}),Z=function(r){var t=r.reificationClass;r.children;var n=A(r,G),a=V(),o=X();return e.createElement(p,n,e.createElement(d,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(h,{className:o.root,source:"type",initialValue:t})))},K=function(e){var a=n(v),o=P(r(),2),i=o[0],c=o[1];return t((function(){e&&a.getCreateContainer(e).then((function(e){return c(e)}))}),[e]),i},Q=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},ee=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},re=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,s,u,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,c=t.jsonContext,s=Q("authServer",o),(u=ee(r,o))===s||null===(n=o[s])||void 0===n||!n.proxyUrl||!0===(null===(a=o[u])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:u!==s});case 11:e.t0=e.sent;case 12:if(f=e.t0,(l=f.json).id=l.id||l["@id"],l["@context"]===c){e.next=19;break}return e.next=18,g.compact(l,c);case 18:l=e.sent;case 19:return e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),te=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,s,u,f,l,p,d,h,v,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,c=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,re(n.id,e);case 6:if(s=r.sent,null!==(a=c.list)&&void 0!==a&&a.forceArray){f=I(null===(u=c.list)||void 0===u?void 0:u.forceArray);try{for(f.s();!(l=f.n()).done;)p=l.value,s[p]&&!Array.isArray(s[p])&&(s[p]=[s[p]])}catch(e){f.e(e)}finally{f.f()}}if(null===(o=c.list)||void 0===o||!o.dereference){r.next=35;break}h=I(null===(d=c.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((v=h.n()).done){r.next=27;break}if(y=v.value,!s[y]||"string"!=typeof s[y]||!s[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,re(s[y],e);case 18:delete(m=r.sent)["@context"],s[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:s});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e,r){return e(r={exports:{}},r.exports),r.exports}var oe=ae((function(e){var r,t;r=ne,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),ie=function(e){return e&&e.rawFile&&e.rawFile instanceof File},ce=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return oe(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},se=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ce(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,c=void 0,i="",c=o.split("."),c.length>1&&(i=c.pop(),o=c.join(".")),b(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,c}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ue=function(){var e=E(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!ie(r[n][a])){e.next=11;break}return e.next=10,se(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!ie(r[n])){e.next=20;break}return e.next=19,se(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),fe=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=oe(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},le=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,s,u,f,l,p,d,h,v,y,m,g,b,w,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,c=e.resources,s=e.httpClient,u=e.jsonContext,f=c[t],l=new Headers,null!==(a=f.fieldsMapping)&&void 0!==a&&a.title&&l.set("Slug",n.data[null===(p=f.fieldsMapping)||void 0===p?void 0:p.title]),null===(o=f.create)||void 0===o||!o.container){r.next=10;break}d=null===(v=f.create)||void 0===v?void 0:v.container,h=ee(d,i),r.next=20;break;case 10:if(h=(null===(y=f.create)||void 0===y?void 0:y.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(m=fe(f.types,[h],i),(g=Object.keys(m))&&0!==g.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(f.types)," found on server ").concat(h));case 17:if(!(g.length>1||m[g[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(f.types)," on server ").concat(h));case 19:d=m[g[0]][0];case 20:return r.next=22,ue(n.data,e);case 22:return n.data=r.sent,r.next=25,s(d,{method:"POST",headers:l,body:JSON.stringify(S({"@context":u,"@type":f.types},n.data)),noToken:!0!==i[h].authServer});case 25:return b=r.sent,w=b.headers,x=w.get("Location"),r.next=30,te(e)(t,{id:x});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},pe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=ee(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},de=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=17;break}return s=c.value,r.prev=7,r.next=10,a(s,{method:"DELETE"});case 10:o.push(s),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},he=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=oe(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},ve=function(e){return function(r){var t,n,a,o,i=e.dataServers,c=e.resources[r];if(!c)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null!==(t=c.create)&&void 0!==t&&t.container)return null===(a=c.create)||void 0===a?void 0:a.container;if(null!==(n=c.create)&&void 0!==n&&n.server)return he(c.types,null===(o=c.create)||void 0===o?void 0:o.server,i);var s=Q("default",i);return he(c.types,s,i)}},ye=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,s,u,f,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,c=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return S(S({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),u=Object.keys(s).map((function(e){return i(e,{noToken:!s[e]||!0!==o[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==c?g.compact(r,c):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(u);case 5:if(0!==(f=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return f=(l=[].concat).apply.apply(l,T(f)),p=f.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(p=p.filter((function(e){return Object.entries(n.filter).some((function(r){var t=P(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(p=p.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(p=p.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:p,total:f.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),me=function(e){var r,t={};if(e){var n,a=I(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=S(S({},t),r.reduce((function(e,r){return C({},r,S({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},ge=ae((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==ne&&ne.crypto&&(t=ne.crypto),!t)try{t=w}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},c=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=c.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var c=0;c<a;c+=4)r[n+c>>>2]=t[c>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=c.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new s.init(r,e)}}),u=o.enc={},f=u.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(t,r/2)}},l=u.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(t,r)}},p=u.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},d=i.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,c=o/(4*i),u=(c=r?e.ceil(c):e.max((0|c)-this._minBufferSize,0))*i,f=e.min(4*u,o);if(u){for(var l=0;l<u;l+=i)this._doProcessBlock(a,l);t=a.splice(0,u),n.sigBytes-=f}return new s.init(t,f)},clone:function(){var e=c.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=d.extend({cfg:c.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new h.HMAC.init(e,t).finalize(r)}}});var h=o.algo={};return o}(Math)})),be=ae((function(e,r){var t;e.exports=(t=ge,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,c=[];!function(){for(var r=0;r<64;r++)c[r]=4294967296*e.abs(e.sin(r+1))|0}();var s=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],s=e[r+1],d=e[r+2],h=e[r+3],v=e[r+4],y=e[r+5],m=e[r+6],g=e[r+7],b=e[r+8],w=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],O=e[r+14],E=e[r+15],C=o[0],R=o[1],A=o[2],P=o[3];C=u(C,R,A,P,i,7,c[0]),P=u(P,C,R,A,s,12,c[1]),A=u(A,P,C,R,d,17,c[2]),R=u(R,A,P,C,h,22,c[3]),C=u(C,R,A,P,v,7,c[4]),P=u(P,C,R,A,y,12,c[5]),A=u(A,P,C,R,m,17,c[6]),R=u(R,A,P,C,g,22,c[7]),C=u(C,R,A,P,b,7,c[8]),P=u(P,C,R,A,w,12,c[9]),A=u(A,P,C,R,x,17,c[10]),R=u(R,A,P,C,k,22,c[11]),C=u(C,R,A,P,S,7,c[12]),P=u(P,C,R,A,j,12,c[13]),A=u(A,P,C,R,O,17,c[14]),C=f(C,R=u(R,A,P,C,E,22,c[15]),A,P,s,5,c[16]),P=f(P,C,R,A,m,9,c[17]),A=f(A,P,C,R,k,14,c[18]),R=f(R,A,P,C,i,20,c[19]),C=f(C,R,A,P,y,5,c[20]),P=f(P,C,R,A,x,9,c[21]),A=f(A,P,C,R,E,14,c[22]),R=f(R,A,P,C,v,20,c[23]),C=f(C,R,A,P,w,5,c[24]),P=f(P,C,R,A,O,9,c[25]),A=f(A,P,C,R,h,14,c[26]),R=f(R,A,P,C,b,20,c[27]),C=f(C,R,A,P,j,5,c[28]),P=f(P,C,R,A,d,9,c[29]),A=f(A,P,C,R,g,14,c[30]),C=l(C,R=f(R,A,P,C,S,20,c[31]),A,P,y,4,c[32]),P=l(P,C,R,A,b,11,c[33]),A=l(A,P,C,R,k,16,c[34]),R=l(R,A,P,C,O,23,c[35]),C=l(C,R,A,P,s,4,c[36]),P=l(P,C,R,A,v,11,c[37]),A=l(A,P,C,R,g,16,c[38]),R=l(R,A,P,C,x,23,c[39]),C=l(C,R,A,P,j,4,c[40]),P=l(P,C,R,A,i,11,c[41]),A=l(A,P,C,R,h,16,c[42]),R=l(R,A,P,C,m,23,c[43]),C=l(C,R,A,P,w,4,c[44]),P=l(P,C,R,A,S,11,c[45]),A=l(A,P,C,R,E,16,c[46]),C=p(C,R=l(R,A,P,C,d,23,c[47]),A,P,i,6,c[48]),P=p(P,C,R,A,g,10,c[49]),A=p(A,P,C,R,O,15,c[50]),R=p(R,A,P,C,y,21,c[51]),C=p(C,R,A,P,S,6,c[52]),P=p(P,C,R,A,h,10,c[53]),A=p(A,P,C,R,x,15,c[54]),R=p(R,A,P,C,s,21,c[55]),C=p(C,R,A,P,b,6,c[56]),P=p(P,C,R,A,E,10,c[57]),A=p(A,P,C,R,m,15,c[58]),R=p(R,A,P,C,j,21,c[59]),C=p(C,R,A,P,v,6,c[60]),P=p(P,C,R,A,k,10,c[61]),A=p(A,P,C,R,d,15,c[62]),R=p(R,A,P,C,w,21,c[63]),o[0]=o[0]+C|0,o[1]=o[1]+R|0,o[2]=o[2]+A|0,o[3]=o[3]+P|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var c=this._hash,s=c.words,u=0;u<4;u++){var f=s[u];s[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return c},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function u(e,r,t,n,a,o,i){var c=e+(r&t|~r&n)+a+i;return(c<<o|c>>>32-o)+r}function f(e,r,t,n,a,o,i){var c=e+(r&n|t&~n)+a+i;return(c<<o|c>>>32-o)+r}function l(e,r,t,n,a,o,i){var c=e+(r^t^n)+a+i;return(c<<o|c>>>32-o)+r}function p(e,r,t,n,a,o,i){var c=e+(t^(r|~n))+a+i;return(c<<o|c>>>32-o)+r}r.MD5=o._createHelper(s),r.HmacMD5=o._createHmacHelper(s)}(Math),t.MD5)})),we=x.namedNode,xe=x.quad,ke=x.variable,Se=function(e){return be(e)},je=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return{type:"optional",patterns:[{type:"bgp",triples:t.query},e(r,t.node)]}}))},Oe=function(e,r){var t=[],n=function(e){var r=[];if(e){var t,n=I(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(n&&r&&r.length>0){var a,o=I(n);try{var i=function(){var e=a.value,n=function(e){return e.includes("/")&&e.split("/")[0]}(e),o=function(e){return e.includes("/")?e.split("/")[1]:e}(e),i=Se(e),c=n?Se(n):"1",s=o.split(":")[0],u=o.split(":")[1],f=r.find((function(e){return e.prefix===s})),l=[xe(ke("s"+c),we(f.url+u),ke("s"+i)),xe(ke("s"+i),ke("p"+i),ke("o"+i))];t.push({node:e,parentNode:n,query:l,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:je(t)}}return{construct:"",where:""}},Ee=x.literal,Ce=x.namedNode,Re=x.triple,Ae=x.variable,Pe=new(0,require("sparqljs").Generator)({}),Te=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[Re(Ae("s1"),Ae("p1"),Ae("o1"))],where:[{type:"filter",expression:{type:"operation",operator:"in",args:[Ae("containerUri"),r.map((function(e){return Ce(e)}))]}},{type:"bgp",triples:[Re(Ae("containerUri"),Ce("http://www.w3.org/ns/ldp#contains"),Ae("s1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[Ae("s1")]}}],type:"query",prefixes:Object.fromEntries(a.map((function(e){return[e.prefix,e.url]})))};if(t&&Object.keys(t).length>0){var i=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,c=t.q&&t.q.length>0;i&&o.where.push(t.sparqlWhere),c&&o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[Ae("s1")],where:[{type:"bgp",triples:[Re(Ae("s1"),Ae("p1"),Ae("o1"))]},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[Ae("o1")]}]},Ee(t.q.toLowerCase(),"",Ce("http://www.w3.org/2001/XMLSchema#string"))]}},{type:"filter",expression:{type:"operation",operator:"notexists",args:[{type:"bgp",triples:[Re(Ae("s1"),Ce("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),Ae("o1"))]}]}}],type:"query"}]}),Object.keys(t).forEach((function(e){if("sparqlWhere"!==e&&"q"!==e){var r="a"===e?t[e]:e,n=r.split(":")[0],i=r.split(":")[1],c=a.find((function(e){return e.prefix===n})),s="a"===e?"http://www.w3.org/1999/02/22-rdf-syntax-ns#type":c.url+i,u="a"===e?c.url+i:t[e];o.where.push({type:"bgp",triples:[Re(Ae("s1"),Ce(s),Ce(u))]})}}))}var s=Oe(n,a);return s&&s.construct&&(o.where=o.where.concat(s.where),o.template=o.template.concat(s.construct)),o.where.push({type:"bgp",triples:[Re(Ae("s1"),Ae("p1"),Ae("o1"))]}),Pe.stringify(o)},_e=function(){var e=E(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,c,s,u,f,l,p,d,h,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,c=a.resources,s=a.httpClient,u=a.jsonContext,f=a.ontologies,l=c[t],p=S({"@context":u,"@type":l.types,"@embed":"@never"},me(null===(o=l.list)||void 0===o?void 0:o.dereference)),d=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,c,u=Te({containers:r[e],params:S(S({},n),{},{filter:S(S({},null===(o=l.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(c=l.list)||void 0===c?void 0:c.dereference,ontologies:f});s(i[e].sparqlEndpoint,{method:"POST",body:u,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return g.frame(r,p,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(d);case 6:if(0!==(h=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return h=(v=[].concat).apply.apply(v,T(h)),y=h.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(y=y.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(y=y.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:y,total:h.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Ue=function(e,r){var t={};return Object.keys(e).forEach((function(n){if(!r[n])throw new Error("No server found with key "+n);t[n]=[],e[n].forEach((function(e){t[n].push(oe(r[n].baseUrl,e))}))})),t},Ie=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t){var n,a,o,i,c,s,u,f,l=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=l.length>1&&void 0!==l[1]?l[1]:{},i=e.dataServers,c=e.resources,s=c[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(u=null!==(n=s.list)&&void 0!==n&&n.containers&&Object.keys(s.list.containers).length>0?Ue(s.list.containers,i):fe(s.types,null===(f=s.list)||void 0===f?void 0:f.servers,i),null===(a=s.list)||void 0===a||!a.fetchContainer){r.next=10;break}return r.abrupt("return",ye(u,t,o,e));case 10:return r.abrupt("return",_e(u,t,o,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Be=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,s,u,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=21;break}return s="object"===j(s=c.value)?s["@id"]:s,r.prev=8,r.next=11,te(e)(t,{id:s});case 11:u=r.sent,f=u.data,o.push(f),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},qe=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=S(S({},n.filter),{},C({},n.target,n.id)),delete n.target,r.next=4,Ie(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Le=function(e){return function(){var r=E(regeneratorRuntime.mark((function r(t,n){var a,o,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,c=ee(n.id,a),r.next=4,ue(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(S({"@context":i},n.data)),noToken:!c||!0!==a[c].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Me(e){this.message=e}Me.prototype=new Error,Me.prototype.name="InvalidCharacterError";var Fe="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Me("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function He(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Fe(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return Fe(r)}}function Ne(e){this.message=e}function De(e,r){if("string"!=typeof e)throw new Ne("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(He(e.split(".")[t]))}catch(e){throw new Ne("Invalid token specified: "+e.message)}}Ne.prototype=new Error,Ne.prototype.name="InvalidTokenError";var ze=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c,s,u,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=Q("pod",t),i=Q("authServer",t),!a){e.next=24;break}return c=De(a),s=c.webId,e.prev=6,e.next=9,n(s);case 9:f=e.sent,l=f.json,u=l,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=oe(s,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=u.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||oe(s,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=u.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),$e=function(){var e=E(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=I(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),Je=function(e){if(!Q("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=ze(e),t=$e(e),n=function(e){return E(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(Ie(e)),getOne:n(te(e)),getMany:n(Be(e)),getManyReference:n(qe(e)),create:n(le(e)),update:n(Le(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(pe(e)),deleteMany:n(de(e)),getCreateContainer:n(ve(e))}},We=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return y.fetchJson(e,r)};export{J as DateTimeInput,D as FilterHandler,$ as GroupedReferenceHandler,q as ImageField,M as ReferenceArrayField,W as ReferenceArrayInput,H as ReferenceField,Y as ReferenceInput,Z as ReificationArrayInput,M as UriArrayField,W as UriArrayInput,Oe as buildDereferenceQuery,Te as buildSparqlQuery,Je as dataProvider,We as httpClient,K as useCreateContainer};
//# sourceMappingURL=index.es.js.map
