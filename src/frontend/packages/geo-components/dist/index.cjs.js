"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@material-ui/core"),n=require("@material-ui/lab/Autocomplete"),a=require("@material-ui/icons/LocationOn"),o=require("lodash.throttle"),l=require("react-router"),s=require("@material-ui/core/CircularProgress"),i=require("react-leaflet"),u=require("react-leaflet-markercluster"),c=require("@material-ui/icons/Close");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=p(e),b=p(n),d=p(a),h=p(o),g=p(s),m=p(u),y=p(c),v=function(e){var n=e.record,a=e.basePath,o=t.useResourceDefinition({});return f.default.createElement(f.default.Fragment,null,n.label&&f.default.createElement(r.Typography,{variant:"h5"},n.label),n.description&&f.default.createElement(r.Typography,null,n.description.length>150?n.description.substring(0,150)+"...":n.description),o.hasShow&&f.default.createElement(t.ShowButton,{basePath:a,record:n}),o.hasEdit&&f.default.createElement(t.EditButton,{basePath:a,record:n}))};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
// @license MIT
!function(t,r){e.exports?e.exports=r():this.Diacritics=r()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],r=0,n=t.length;r<n;r++)for(var a=t[r].letters.split(""),o=0,l=a.length;o<l;o++)e.map[a[o]]=t[r].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var r,n="",a=t.split(""),o=0,l=a.length;o<l;o++)n+=(r=a[o])in e.map?e.map[r]:r;return n},e}))})).clean,k=/[.*+?^${}()|[\]\\]/g,M=/[a-z0-9_]/i,z=/\s+/;var I=function(e,t,r){var n,a;return a={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},n=(n=r)||{},Object.keys(n).forEach((function(e){a[e]=!!n[e]})),r=a,e=T(e),(t=T(t)).trim().split(z).filter((function(e){return e.length>0})).reduce((function(t,n){var a,o,l=n.length,s=!r.insideWords&&M.test(n[0])?"\\b":"",i=new RegExp(s+n.replace(k,"\\$&"),"i");if(a=i.exec(e),r.requireMatchAll&&null===a)return e="",[];for(;a&&(o=a.index,t.push([o,o+l]),e=e.slice(0,o)+new Array(l+1).join(" ")+e.slice(o+l),r.findAllOccurrences);)a=i.exec(e);return t}),[]).sort((function(e,t){return e[0]-t[0]}))},L=["mapboxConfig","record","resource","source","label","basePath","parse","optionText","helperText"],q=r.makeStyles((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),B=function(e,t){return e.place_name?e.place_name:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},D=function(n){var a=n.mapboxConfig;n.record;var o=n.resource,l=n.source,s=n.label;n.basePath;var i=n.parse,u=n.optionText,c=n.helperText,p=j(n,L);if(!a)throw new Error("@semapps/geo-components : No mapbox configuration");if(!a.access_token)throw new Error("@semapps/geo-components : No access token in mapbox configuration");var g=q(),m=t.useLocale(),y=t.useTranslate(),v=w(e.useState(""),2),x=v[0],O=v[1],C=w(e.useState([]),2),A=C[0],T=C[1],k=t.useInput(E({resource:o,source:l},p)),M=k.input,z=M.value,D=M.onChange,F=M.onBlur,R=M.onFocus,N=k.isRequired,U=k.meta,_=U.error,W=U.submitError,H=U.touched,Z=e.useMemo((function(){return h.default((function(e,t){var r=new URL("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json"));a.language||(a.language=m),Object.entries(a).forEach((function(e){var t=w(e,2),n=t[0],a=t[1];Array.isArray(a)?a=a.join(","):"boolean"==typeof a&&(a=a?"true":"false"),r.searchParams.set(n,a)})),fetch(r.toString()).then((function(e){return e.json()})).then((function(e){return t(e)}))}),200)}),[a,m]);return e.useEffect((function(){x&&x!==B(z,u)&&Z(x,(function(e){return T(e.features)}))}),[z,x,Z]),f.default.createElement(b.default,{autoComplete:!0,value:z||null,options:z?[z].concat(S(A)):A,filterSelectedOptions:!0,filterOptions:function(e){return e},getOptionLabel:function(e){return B(e,u)},getOptionSelected:function(e,t){return B(e,u)===B(t,u)},onChange:function(e,t){t&&i&&(t=i(t)),D(t),T([])},onInputChange:function(e,t){return O(t)},noOptionsText:y("ra.navigation.no_results"),renderInput:function(e){return e.inputProps.autoComplete="new-password",f.default.createElement(r.TextField,P({},e,{inputProps:E(E({},e.inputProps),{},{onBlur:function(t){F(t),e.inputProps.onBlur&&e.inputProps.onBlur(t)},onFocus:function(t){R(t),e.inputProps.onFocus&&e.inputProps.onFocus(t)}}),label:""!==s&&!1!==s&&f.default.createElement(t.FieldTitle,{label:s,source:l,resource:o,isRequired:N}),error:!(!H||!_&&!W),helperText:f.default.createElement(t.InputHelperText,{touched:H,error:_||W,helperText:c})},p))},renderOption:function(e){var t=I(e.text,x),n=function(e,t){var r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(n,a){var o=n[0],l=n[1];r.push({text:e.slice(o,l),highlight:!0}),a===t.length-1?l<e.length&&r.push({text:e.slice(l,e.length),highlight:!1}):l<t[a+1][0]&&r.push({text:e.slice(l,t[a+1][0]),highlight:!1})})),r}(e.text,t);return f.default.createElement(r.Grid,{container:!0,alignItems:"center"},f.default.createElement(r.Grid,{item:!0},f.default.createElement(d.default,{className:g.icon})),f.default.createElement(r.Grid,{item:!0,xs:!0},"string"==typeof n?n:n.map((function(e,t){return f.default.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),f.default.createElement(r.Typography,{variant:"body2",color:"textSecondary"},e.place_name)))}})};D.defaultProps={variant:"filled",margin:"dense"};var F=function(){var e=l.useHistory(),t=new URLSearchParams(e.location.search);return i.useMapEvents({moveend:function(r){t.set("lat",r.target.getCenter().lat),t.set("lng",r.target.getCenter().lng),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})},zoomend:function(r){t.set("zoom",r.target.getZoom()),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})}}),null},R=["latitude","longitude","label","description","popupContent","height","center","zoom","groupClusters","boundToMarkers","connectMarkers"],N=r.makeStyles((function(){return{loading:{zIndex:1e3,position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"},closeButton:{position:"absolute",zIndex:1400,top:0,right:0}}})),U=function(n){var a,o=n.latitude,s=n.longitude,u=n.label,c=n.description,p=n.popupContent,b=n.height,d=n.center,h=n.zoom,v=n.groupClusters,x=n.boundToMarkers,O=n.connectMarkers,S=j(n,R),C=t.useListContext(),A=C.ids,T=C.data,k=C.basePath,M=C.loading,z=r.useMediaQuery((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),I=w(e.useState(null),2),L=I[0],q=I[1],B=w(e.useState(null),2),D=B[0],U=B[1],_=N(),W=new URLSearchParams(l.useLocation().search);d=W.has("lat")&&W.has("lng")?[W.get("lat"),W.get("lng")]:d,h=W.has("zoom")?W.get("zoom"):h;var H=A.filter((function(e){return T[e]})).map((function(e){return E(E({},T[e]),{},{latitude:o&&o(T[e]),longitude:s&&s(T[e]),label:u&&u(T[e]),description:c&&c(T[e])})})).filter((function(e){return e.latitude&&e.longitude})),Z=x&&H.length>0?H.map((function(e){return[e.latitude,e.longitude]})):void 0;if(x&&!Z)return null;var G=H.map((function(e,t){var r=f.default.createElement(f.default.Fragment,{key:t},f.default.createElement(i.Marker,{position:[e.latitude,e.longitude],eventHandlers:z?{click:function(){D.setView([e.latitude,e.longitude]),q(e)}}:void 0},!z&&f.default.createElement(i.Popup,null,f.default.createElement(p,{record:e,basePath:k}))),O&&a&&f.default.createElement(i.Polyline,{positions:[[a.latitude,a.longitude],[e.latitude,e.longitude]]}));return a=e,r}));return f.default.createElement(i.MapContainer,P({style:{height:b},center:x?void 0:d,zoom:x?void 0:h,bounds:Z,whenCreated:U},S),f.default.createElement(i.TileLayer,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),M&&f.default.createElement(r.Box,{alignItems:"center",className:_.loading},f.default.createElement(g.default,{size:60,thickness:6})),v?f.default.createElement(m.default,{showCoverageOnHover:!1},G):G,f.default.createElement(F,null),f.default.createElement(r.Drawer,{anchor:"bottom",open:!!L,onClose:function(){return q(null)}},f.default.createElement(r.Box,{p:1,position:"relative"},f.default.createElement(r.IconButton,{onClick:function(){return q(null)},className:_.closeButton},f.default.createElement(y.default,null)),L&&f.default.createElement(p,{record:L,basePath:k}))))};U.defaultProps={height:700,center:[47,2.213749],zoom:6,groupClusters:!0,connectMarkers:!1,scrollWheelZoom:!1,popupContent:v};var _=["record","latitude","longitude","address","height","addLabel","typographyProps"],W=function(e){var t=e.record,n=e.latitude,a=e.longitude,o=e.address,l=e.height;e.addLabel;var s=e.typographyProps,u=j(e,_),c=[n(t),a(t)];return c[0]&&c[1]?f.default.createElement(r.Box,null,o&&f.default.createElement(r.Box,{mt:1,mb:1},f.default.createElement(r.Typography,s,o(t))),f.default.createElement(i.MapContainer,P({style:{height:l},center:c},u),f.default.createElement(i.TileLayer,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),f.default.createElement(i.Marker,{position:c}))):null};W.defaultProps={height:400,zoom:11,addLabel:!0},exports.DefaultPopupContent=v,exports.LocationInput=D,exports.MapField=W,exports.MapList=U,exports.QueryStringUpdater=F,exports.extractContext=function(e,t){var r=e.find((function(e){return e.id.startsWith(t+".")}));if(r)return r.text};
//# sourceMappingURL=index.cjs.js.map
