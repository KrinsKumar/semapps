"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@material-ui/core"),a=require("@material-ui/icons/Launch"),n=require("react-final-form"),l=require("@material-ui/icons/Add"),o=require("react-redux"),i=require("lodash.debounce"),u=require("@material-ui/icons/Visibility"),c=require("@material-ui/icons/Error"),s=require("@semapps/semantic-data-provider"),d=require("@material-ui/icons/Language"),f=require("@material-ui/icons/Facebook"),m=require("@material-ui/icons/GitHub"),p=require("@material-ui/icons/Twitter"),b=require("@material-ui/icons/Instagram"),g=require("@material-ui/icons/YouTube");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var y=h(e),v=h(a),E=h(l),w=h(i),x=h(u),k=h(c),O=h(d),T=h(f),C=h(m),A=h(p),L=h(b),j=h(g);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r,a,n,l,o){try{var i=e[l](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var l=e.apply(t,r);function o(e){N(l,a,n,o,i,"next",e)}function i(e){N(l,a,n,o,i,"throw",e)}o(void 0)}))}}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw n}}return l}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var W=["label","defaultLabel","image","fallback","externalLink","labelColor","classes"],_=r.makeStyles((function(e){return{parent:function(e){return I({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},chip:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:3,paddingBottom:3,paddingLeft:6,paddingRight:6,marginBottom:10,cursor:"pointer"},launchIcon:{width:14}}})),U=function(){},G=function(e){var a=e.label,n=e.defaultLabel,l=e.image,o=e.fallback,i=e.externalLink,u=e.labelColor,c=e.classes,s=R(e,W);c=_(c);var d=t.useRecordContext(),f=("function"==typeof a?a(d):d[a])||n,m="function"==typeof l?l(d):d[l],p="function"==typeof o?o(d):o;return y.default.createElement(r.Box,{className:c.parent},y.default.createElement("div",{className:c.square},y.default.createElement(r.Avatar,q({src:m||p,alt:f,fallback:p},s,{className:c.avatar}))),f?i?y.default.createElement(r.Chip,{color:u,className:c.chip,size:"small",label:f,deleteIcon:y.default.createElement(v.default,{className:c.launchIcon}),onDelete:U}):y.default.createElement(r.Chip,{color:u,className:c.chip,size:"small",label:f}):null)};G.defaultProps={labelColor:"secondary",externalLink:!1};var H=r.makeStyles((function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,paddingTop:0,paddingBottom:0},primaryText:{width:"30%"},secondaryText:{fontStyle:"italic",color:"grey"}}})),V=function(e,t){var r=t&&Object.values(t).find((function(t){return e.startsWith(t.baseUrl)}));return r?r.name:"Inconnu"},Y=function(a){var n,l=a.keyword,i=a.source,u=a.reference,c=a.appendLink,d=a.switchToCreate,f=H(),m=D(e.useState(!1),2),p=m[0],b=m[1],g=D(e.useState(!1),2),h=g[0],v=g[1],O=D(e.useState([]),2),T=O[0],C=O[1],A=t.useTranslate(),L=t.useDataProvider(),j=s.useDataServers(),S=t.useRecordContext(),I=o.useSelector(t.getResources,o.shallowEqual),N=e.useMemo((function(){return I.find((function(e){return e.name===u}))}),[I,u]),P=t.useGetResourceLabel(),F=s.useDataModel(u);if(F&&Object.keys(F).length>0&&(null==F||null===(n=F.fieldsMapping)||void 0===n||!n.title))throw new Error("No fieldsMapping.title config found for ".concat(u," dataModel"));var q=e.useMemo((function(){return w.default((function(e){var t;L.getList(u,{pagination:{page:1,perPage:100},sort:{field:null==F||null===(t=F.fieldsMapping)||void 0===t?void 0:t.title,order:"ASC"},filter:{q:e,_predicates:[F.fieldsMapping.title],_servers:"@all"}}).then((function(e){var t=e.data,r=S[i]?Array.isArray(S[i])?S[i]:[S[i]]:[],a=t.filter((function(e){return!r.includes(e.id)}));C(a),v(!0),b(!1)})).catch((function(e){b(!1)}))}),700)}),[L,F,S,i,u,C,b,v]);return e.useEffect((function(){if(l)return b(!0),v(!1),q(l),function(){return q.cancel()}}),[l,q,b]),l?y.default.createElement(r.List,{dense:!0,className:f.root},h&&T.map((function(e){return y.default.createElement(r.ListItem,{key:e.id,button:!0,onClick:function(){return c(e.id)}},y.default.createElement(r.ListItemAvatar,null,y.default.createElement(r.Avatar,null,y.default.createElement(N.icon))),y.default.createElement(r.ListItemText,{className:f.primaryText,primary:e[F.fieldsMapping.title]}),y.default.createElement(r.ListItemText,{className:f.secondaryText,primary:V(e.id,j)}),y.default.createElement(r.ListItemSecondaryAction,null,y.default.createElement("a",{href:t.linkToRecord("/"+u,e.id,"show"),target:"_blank",rel:"noopener noreferrer"},y.default.createElement(r.IconButton,{edge:"end"},y.default.createElement(x.default,null)))))})),h&&0===T.length&&y.default.createElement(r.ListItem,null,y.default.createElement(r.ListItemAvatar,null,y.default.createElement(r.Avatar,null,y.default.createElement(k.default,null))),y.default.createElement(r.ListItemText,{className:f.primaryText,primary:A("ra.navigation.no_results")})),h&&N.hasCreate&&y.default.createElement(r.ListItem,{button:!0,onClick:d},y.default.createElement(r.ListItemAvatar,null,y.default.createElement(r.Avatar,null,y.default.createElement(E.default,null))),y.default.createElement(r.ListItemText,{className:f.primaryText,primary:A("ra.page.create",{name:P(u,1)})})),p&&y.default.createElement(r.Box,{display:"flex",alignItems:"center",justifyContent:"center",height:150},y.default.createElement(r.CircularProgress,{size:60,thickness:6}))):null},Q=["meta","input"],$=r.makeStyles((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingLeft:8,paddingRight:8,paddingTop:0,paddingBottom:0,maxHeight:210}}})),J=function(e){var t=e.meta,a=t.touched,n=t.error,l=e.input,o=R(e,Q);return y.default.createElement(r.TextField,q({error:!(!a||!n),helperText:a&&n},l,o,{fullWidth:!0}))},K=function(a){var l=a.open,o=a.onClose,i=a.subjectUri,u=a.resource,c=a.source,d=a.reference,f=$(),m=D(e.useState(""),2),p=m[0],b=m[1],g=D(e.useState("find"),2),h=g[0],v=g[1],w=t.useDataProvider(),x=t.useTranslate(),k=t.useRefresh(),O=t.useNotify(),T=t.useGetResourceLabel(),C=s.useDataModel(d),A=e.useCallback(function(){var e=P(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getOne(u,{id:i});case 2:return r=e.sent,a=r.data,e.next=6,w.update(u,{id:i,data:I(I({},a),{},F({},c,a[c]?Array.isArray(a[c])?[].concat(M(a[c]),[t]):[a[c],t]:t)),previousData:a});case 6:k(),o();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[w,i,u,c,k,o]),L=e.useCallback(function(){var e=P(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.create(d,{data:F({},C.fieldsMapping.title,t.title)});case 2:return r=e.sent,a=r.data,e.next=6,A(a.id);case 6:O('La resource "'.concat(t.title,'" a été créée'),"success");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[w,C,A,d,O]);return y.default.createElement(r.Dialog,{fullWidth:!0,open:l,onClose:o},"find"===h?y.default.createElement(y.default.Fragment,null,y.default.createElement(r.DialogTitle,{className:f.title},"Ajouter une relation"),y.default.createElement(r.DialogContent,{className:f.addForm},y.default.createElement(r.TextField,{autoFocus:!0,label:"Rechercher ou créer des "+T(d,2).toLowerCase(),variant:"filled",margin:"dense",value:p,onChange:function(e){return b(e.target.value)},fullWidth:!0})),y.default.createElement(r.DialogContent,{className:f.listForm},y.default.createElement(Y,{keyword:p,source:c,reference:d,appendLink:A,switchToCreate:function(){return v("create")}})),y.default.createElement(r.DialogActions,{className:f.actions},y.default.createElement(t.Button,{label:"ra.action.close",variant:"text",onClick:o}))):y.default.createElement(n.Form,{onSubmit:L,initialValues:{title:p},render:function(e){var a=e.handleSubmit,l=e.submitting;return y.default.createElement("form",{onSubmit:a},y.default.createElement(r.DialogTitle,{className:f.title},x("ra.page.create",{name:T(d,1)})),y.default.createElement(r.DialogContent,{className:f.addForm},y.default.createElement(n.Field,{autoFocus:!0,id:"title",name:"title",component:J,label:"Titre",disabled:l,variant:"filled",margin:"dense"})),y.default.createElement(r.DialogActions,{className:f.actions},y.default.createElement(t.Button,{label:"ra.action.create",variant:"contained",startIcon:y.default.createElement(E.default,null),type:"submit",disabled:l}),y.default.createElement(t.Button,{label:"ra.action.close",variant:"text",onClick:o})))}}))},X=["record","reference","source","resource"],Z=function(r){var a=r.record,n=r.reference,l=r.source,o=r.resource,i=R(r,X),u=D(e.useState(!1),2),c=u[0],s=u[1],d=t.usePermissionsOptimized(a.id).permissions,f=e.useMemo((function(){return!!d&&d.some((function(e){return["acl:Append","acl:Write","acl:Control"].includes(e["acl:mode"])}))}),[d]);return null!=a&&a[l]&&(Array.isArray(a[l])||(a[l]=[a[l]]),a[l]=a[l].map((function(e){return e["@id"]||e.id||e}))),y.default.createElement(y.default.Fragment,null,y.default.createElement(t.ReferenceArrayField,q({record:a,reference:n,source:l,resource:o,appendLink:f?function(){return s(!0)}:void 0},i)),f&&c&&y.default.createElement(K,{open:c,onClose:function(){return s(!1)},subjectUri:a.id,resource:o,source:l,reference:n}))};Z.defaultProps={addLabel:!0};var ee={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},te=y.default.createContext&&y.default.createContext(ee),re=function(){return(re=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},ae=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function ne(e){return function(t){return y.default.createElement(le,re({attr:re({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return y.default.createElement(t.tag,re({key:r},t.attr),e(t.child))}))}(e.child))}}function le(e){var t=function(t){var r,a=e.attr,n=e.size,l=e.title,o=ae(e,["attr","size","title"]),i=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),y.default.createElement("svg",re({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:r,style:re(re({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&y.default.createElement("title",null,l),e.children)};return void 0!==te?y.default.createElement(te.Consumer,null,(function(e){return t(e)})):t(ee)}function oe(e){return ne({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(e)}var ie=["source","domainMapping"],ue={"github.com":{label:"GitHub",icon:y.default.createElement(C.default,null),color:"black",contrastText:"white"},"gitlab.com":{label:"GitLab",icon:y.default.createElement(oe,null),color:"orange",contrastText:"black"},"opencollective.com":{label:"Open Collective",icon:y.default.createElement(r.Avatar,{src:"https://opencollective.com/static/images/opencollective-icon.svg"}),color:"white",contrastText:"#297EFF"},"facebook.com":{label:"Facebook",icon:y.default.createElement(T.default,null),color:"#4267B2",contrastText:"white"},"twitter.com":{label:"Twitter",icon:y.default.createElement(A.default,null),color:"#00ACEE",contrastText:"white"},"instagram.com":{label:"Instagram",icon:y.default.createElement(L.default,null),color:"#8a3ab9",contrastText:"white"},"youtube.com":{label:"YouTube",icon:y.default.createElement(j.default,null),color:"#FF0000",contrastText:"white"}},ce=r.makeStyles((function(e){return{link:{textDecoration:"unset","& :hover":{cursor:"pointer"}},chip:{paddingLeft:5,paddingRight:5,marginRight:5},label:{marginTop:-1}}})),se=function(e){var a=e.source,n=e.domainMapping,l=R(e,ie),o=I(I({},ue),n),i=t.useRecordContext(),u=ce();return(i[a]?Array.isArray(i[a])?i[a]:[i[a]]:[]).map((function(e,t){e.startsWith("http")||(e="https://"+e);var a=new URL(e);if(!a)return null;var n=o[a.hostname]||{label:"Site web",icon:y.default.createElement(O.default,null),color:"#ea",contrastText:"black"};return y.default.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:u.link},y.default.createElement(r.Chip,q({},l,{icon:y.default.cloneElement(n.icon,{style:{color:n.contrastText}}),size:"small",label:n.label,classes:{root:u.chip,label:u.label},style:{color:n.contrastText,backgroundColor:n.color}})))}))};se.defaultProps={addLabel:!0},exports.AvatarWithLabelField=G,exports.MultiUrlField=se,exports.QuickAppendReferenceArrayField=Z;
//# sourceMappingURL=index.cjs.js.map
