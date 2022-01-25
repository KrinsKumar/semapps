"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@material-ui/core"),n=require("@material-ui/lab/Autocomplete"),a=require("@material-ui/icons/LocationOn"),o=require("react-router"),l=require("@material-ui/core/CircularProgress"),s=require("react-leaflet"),i=require("react-leaflet-markercluster"),u=require("@material-ui/icons/Close");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=c(e),p=c(n),b=c(a),d=c(l),g=c(i),h=c(u),m=function(e){var n=e.record,a=e.basePath,o=t.useResourceDefinition({});return f.default.createElement(f.default.Fragment,null,n.label&&f.default.createElement(r.Typography,{variant:"h5"},n.label),n.description&&f.default.createElement(r.Typography,null,n.description.length>150?n.description.substring(0,150)+"...":n.description),o.hasShow&&f.default.createElement(t.ShowButton,{basePath:a,record:n}),o.hasEdit&&f.default.createElement(t.EditButton,{basePath:a,record:n}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var C=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
// @license MIT
!function(t,r){e.exports?e.exports=r():this.Diacritics=r()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],r=0,n=t.length;r<n;r++)for(var a=t[r].letters.split(""),o=0,l=a.length;o<l;o++)e.map[a[o]]=t[r].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var r,n="",a=t.split(""),o=0,l=a.length;o<l;o++)n+=(r=a[o])in e.map?e.map[r]:r;return n},e}))})).clean,A=/[.*+?^${}()|[\]\\]/g,k=/[a-z0-9_]/i,M=/\s+/;var I=function(e,t,r){var n,a;return a={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},n=(n=r)||{},Object.keys(n).forEach((function(e){a[e]=!!n[e]})),r=a,e=C(e),(t=C(t)).trim().split(M).filter((function(e){return e.length>0})).reduce((function(t,n){var a,o,l=n.length,s=!r.insideWords&&k.test(n[0])?"\\b":"",i=new RegExp(s+n.replace(A,"\\$&"),"i");if(a=i.exec(e),r.requireMatchAll&&null===a)return e="",[];for(;a&&(o=a.index,t.push([o,o+l]),e=e.slice(0,o)+new Array(l+1).join(" ")+e.slice(o+l),r.findAllOccurrences);)a=i.exec(e);return t}),[]).sort((function(e,t){return e[0]-t[0]}))},z=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,B=/^0o[0-7]+$/i,D=parseInt,N="object"==typeof T&&T&&T.Object===Object&&T,F="object"==typeof self&&self&&self.Object===Object&&self,R=N||F||Function("return this")(),W=Object.prototype.toString,U=Math.max,_=Math.min,$=function(){return R.Date.now()};function H(e,t,r){var n,a,o,l,s,i,u=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,o=a;return n=a=void 0,u=t,l=e.apply(o,r)}function d(e){return u=e,s=setTimeout(h,t),c?b(e):l}function g(e){var r=e-i;return void 0===i||r>=t||r<0||f&&e-u>=o}function h(){var e=$();if(g(e))return m(e);s=setTimeout(h,function(e){var r=t-(e-i);return f?_(r,o-(e-u)):r}(e))}function m(e){return s=void 0,p&&n?b(e):(n=a=void 0,l)}function y(){var e=$(),r=g(e);if(n=arguments,a=this,i=e,r){if(void 0===s)return d(i);if(f)return s=setTimeout(h,t),b(i)}return void 0===s&&(s=setTimeout(h,t)),l}return t=G(t)||0,Z(r)&&(c=!!r.leading,o=(f="maxWait"in r)?U(G(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=i=a=s=void 0},y.flush=function(){return void 0===s?l:m($())},y}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function G(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==W.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(z,"");var r=q.test(e);return r||B.test(e)?D(e.slice(2),r?2:8):L.test(e)?NaN:+e}var V=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Z(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),H(e,t,{leading:n,maxWait:t,trailing:a})},J=["mapboxConfig","record","resource","source","label","basePath","parse","optionText","helperText"],Q=r.makeStyles((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),Y=function(e,t){return e.place_name?e.place_name:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},K=function(n){var a=n.mapboxConfig;n.record;var o=n.resource,l=n.source,s=n.label;n.basePath;var i=n.parse,u=n.optionText,c=n.helperText,d=O(n,J);if(!a)throw new Error("@semapps/geo-components : No mapbox configuration");if(!a.access_token)throw new Error("@semapps/geo-components : No access token in mapbox configuration");var g=Q(),h=t.useLocale(),m=t.useTranslate(),y=j(e.useState(""),2),x=y[0],P=y[1],S=j(e.useState([]),2),T=S[0],C=S[1],A=t.useInput(v({resource:o,source:l},d)),k=A.input,M=k.value,z=k.onChange,L=k.onBlur,q=k.onFocus,B=A.isRequired,D=A.meta,N=D.error,F=D.submitError,R=D.touched,W=e.useMemo((function(){return V((function(e,t){var r=new URL("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json"));a.language||(a.language=h),Object.entries(a).forEach((function(e){var t=j(e,2),n=t[0],a=t[1];Array.isArray(a)?a=a.join(","):"boolean"==typeof a&&(a=a?"true":"false"),r.searchParams.set(n,a)})),fetch(r.toString()).then((function(e){return e.json()})).then((function(e){return t(e)}))}),200)}),[a,h]);return e.useEffect((function(){x&&x!==Y(M,u)&&W(x,(function(e){return C(e.features)}))}),[M,x,W]),f.default.createElement(p.default,{autoComplete:!0,value:M||null,options:M?[M].concat(w(T)):T,filterSelectedOptions:!0,filterOptions:function(e){return e},getOptionLabel:function(e){return Y(e,u)},getOptionSelected:function(e,t){return Y(e,u)===Y(t,u)},onChange:function(e,t){t&&i&&(t=i(t)),z(t),C([])},onInputChange:function(e,t){return P(t)},noOptionsText:m("ra.navigation.no_results"),renderInput:function(e){return e.inputProps.autoComplete="new-password",f.default.createElement(r.TextField,E({},e,{inputProps:v(v({},e.inputProps),{},{onBlur:function(t){L(t),e.inputProps.onBlur&&e.inputProps.onBlur(t)},onFocus:function(t){q(t),e.inputProps.onFocus&&e.inputProps.onFocus(t)}}),label:""!==s&&!1!==s&&f.default.createElement(t.FieldTitle,{label:s,source:l,resource:o,isRequired:B}),error:!(!R||!N&&!F),helperText:f.default.createElement(t.InputHelperText,{touched:R,error:N||F,helperText:c})},d))},renderOption:function(e){var t=I(e.text,x),n=function(e,t){var r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(n,a){var o=n[0],l=n[1];r.push({text:e.slice(o,l),highlight:!0}),a===t.length-1?l<e.length&&r.push({text:e.slice(l,e.length),highlight:!1}):l<t[a+1][0]&&r.push({text:e.slice(l,t[a+1][0]),highlight:!1})})),r}(e.text,t);return f.default.createElement(r.Grid,{container:!0,alignItems:"center"},f.default.createElement(r.Grid,{item:!0},f.default.createElement(b.default,{className:g.icon})),f.default.createElement(r.Grid,{item:!0,xs:!0},"string"==typeof n?n:n.map((function(e,t){return f.default.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),f.default.createElement(r.Typography,{variant:"body2",color:"textSecondary"},e.place_name)))}})};K.defaultProps={variant:"filled",margin:"dense"};var X=function(){var e=o.useHistory(),t=new URLSearchParams(e.location.search);return s.useMapEvents({moveend:function(r){t.set("lat",r.target.getCenter().lat),t.set("lng",r.target.getCenter().lng),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})},zoomend:function(r){t.set("zoom",r.target.getZoom()),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})}}),null},ee=["latitude","longitude","label","description","popupContent","height","center","zoom","groupClusters","boundToMarkers","connectMarkers"],te=r.makeStyles((function(){return{loading:{zIndex:1e3,position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"},closeButton:{position:"absolute",zIndex:1400,top:0,right:0}}})),re=function(n){var a,l=n.latitude,i=n.longitude,u=n.label,c=n.description,p=n.popupContent,b=n.height,m=n.center,y=n.zoom,x=n.groupClusters,w=n.boundToMarkers,P=n.connectMarkers,S=O(n,ee),T=t.useListContext(),C=T.ids,A=T.data,k=T.basePath,M=T.loading,I=r.useMediaQuery((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),z=j(e.useState(null),2),L=z[0],q=z[1],B=j(e.useState(null),2),D=B[0],N=B[1],F=te(),R=new URLSearchParams(o.useLocation().search);m=R.has("lat")&&R.has("lng")?[R.get("lat"),R.get("lng")]:m,y=R.has("zoom")?R.get("zoom"):y;var W=C.map((function(e){return v(v({},A[e]),{},{latitude:l&&l(A[e]),longitude:i&&i(A[e]),label:u&&u(A[e]),description:c&&c(A[e])})})).filter((function(e){return e.latitude&&e.longitude})),U=w&&W.length>0?W.map((function(e){return[e.latitude,e.longitude]})):void 0;if(w&&!U)return null;var _=W.map((function(e,t){var r=f.default.createElement(f.default.Fragment,{key:t},f.default.createElement(s.Marker,{position:[e.latitude,e.longitude],eventHandlers:I?{click:function(){D.setView([e.latitude,e.longitude]),q(e)}}:void 0},!I&&f.default.createElement(s.Popup,null,f.default.createElement(p,{record:e,basePath:k}))),P&&a&&f.default.createElement(s.Polyline,{positions:[[a.latitude,a.longitude],[e.latitude,e.longitude]]}));return a=e,r}));return f.default.createElement(s.MapContainer,E({style:{height:b},center:w?void 0:m,zoom:w?void 0:y,bounds:U,whenCreated:N},S),f.default.createElement(s.TileLayer,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),M&&f.default.createElement(r.Box,{alignItems:"center",className:F.loading},f.default.createElement(d.default,{size:60,thickness:6})),x?f.default.createElement(g.default,{showCoverageOnHover:!1},_):_,f.default.createElement(X,null),f.default.createElement(r.Drawer,{anchor:"bottom",open:!!L,onClose:function(){return q(null)}},f.default.createElement(r.Box,{p:1,position:"relative"},f.default.createElement(r.IconButton,{onClick:function(){return q(null)},className:F.closeButton},f.default.createElement(h.default,null)),L&&f.default.createElement(p,{record:L,basePath:k}))))};re.defaultProps={height:700,center:[47,2.213749],zoom:6,groupClusters:!0,connectMarkers:!1,scrollWheelZoom:!1,popupContent:m};var ne=["record","latitude","longitude","address","height","addLabel","typographyProps"],ae=r.makeStyles((function(e){return{address:{marginTop:e.spacing(2),marginBottom:e.spacing(1)}}})),oe=function(e){var t=e.record,n=e.latitude,a=e.longitude,o=e.address,l=e.height;e.addLabel;var i=e.typographyProps,u=O(e,ne);ae();var c=[n(t),a(t)];return c[0]&&c[1]?f.default.createElement(r.Box,null,o&&f.default.createElement(r.Box,{mt:1,mb:1},f.default.createElement(r.Typography,i,o(t))),f.default.createElement(s.MapContainer,E({style:{height:l},center:c},u),f.default.createElement(s.TileLayer,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),f.default.createElement(s.Marker,{position:c}))):null};oe.defaultProps={height:400,zoom:11,addLabel:!0},exports.DefaultPopupContent=m,exports.LocationInput=K,exports.MapField=oe,exports.MapList=re,exports.QueryStringUpdater=X,exports.extractContext=function(e,t){var r=e.find((function(e){return e.id.startsWith(t+".")}));if(r)return r.text};
//# sourceMappingURL=index.cjs.js.map
