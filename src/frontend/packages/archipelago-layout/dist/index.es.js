import e,{useState as t,useMemo as n,useEffect as r,createElement as a,Children as o,isValidElement as i,cloneElement as l}from"react";import{Redirect as c,useLocation as s,useHistory as u}from"react-router";import{getResources as m,AppBar as p,MenuItemLink as d,Layout as f,useGetIdentity as h,Notification as b,TopToolbar as v,ListButton as g,Create as y,ShowButton as E,Edit as w,useListContext as C,useResourceDefinition as P,Link as k,Button as x,CreateButton as O,ExportButton as N,RefreshButton as L,List as S,Pagination as T,SimpleList as I,linkToRecord as j,useGetList as R,FilterList as A,FilterListItem as B,useTranslate as _,getFieldLabelTranslationArgs as W,getTabFullPath as F,escapePath as D,ImageField as M,useShowContext as U,useListController as V,ListContextProvider as z,EditButton as q,Show as H,sanitizeListRestProps as G,useCreate as Y,useNotify as $,ReferenceInput as J,FormWithRedirect as K,TextInput as Q,required as X,SaveButton as Z}from"react-admin";import{Grid as ee,Button as te,TextField as ne,Select as re,MenuItem as ae,makeStyles as oe,Hidden as ie,ListItemIcon as le,Typography as ce,Tooltip as se,Collapse as ue,List as me,useMediaQuery as pe,Box as de,Container as fe,ThemeProvider as he,createMuiTheme as be,Accordion as ve,AccordionSummary as ge,AccordionDetails as ye,Tabs as Ee,Tab as we,Card as Ce,CardActionArea as Pe,CardMedia as ke,CardContent as xe,CardActions as Oe,Divider as Ne,CircularProgress as Le,LinearProgress as Se,Avatar as Te,Dialog as Ie,DialogTitle as je,DialogContent as Re,DialogActions as Ae}from"@material-ui/core";import{Form as Be,Field as _e,useForm as We}from"react-final-form";import{useHistory as Fe,useLocation as De,Link as Me,useRouteMatch as Ue,Route as Ve}from"react-router-dom";import{useSelector as ze,shallowEqual as qe}from"react-redux";import He from"@material-ui/icons/ViewList";import Ge from"@material-ui/icons/ExpandMore";import{createMuiTheme as Ye,ThemeProvider as $e,makeStyles as Je}from"@material-ui/core/styles";import Ke from"@material-ui/core/Tabs";import Qe from"@material-ui/core/Tab";import Xe from"react-markdown";import Ze from"@material-ui/icons/Add";import et from"@material-ui/icons/Cancel";var tt=function(t){var n=t.record,r=t.typesMap;if(n){Array.isArray(n.type)||(n.type=[n.type]);var a=Object.keys(r).find((function(e){return n.type.includes(r[e])}));if(a)return e.createElement(c,{to:"/".concat(a,"/").concat(encodeURIComponent(n.id),"/show")})}return null};function nt(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(n),!0).forEach((function(t){rt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function lt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ct(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||ut(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function st(e){return function(e){if(Array.isArray(e))return mt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ut(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(e,t){if(e){if("string"==typeof e)return mt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mt(e,t):void 0}}function mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pt=function(t){var n=t.input,r=lt(t,["input"]);return e.createElement(ne,at({},n,r))},dt=function(t){var n=t.input,r=lt(t,["input"]),a=ze(m,qe);return e.createElement(re,at({},n,r),a.filter((function(e){return e.hasList})).map((function(t){return e.createElement(ae,{value:t.name,key:t.name},t.options.label)})))},ft=function(){var t=Fe(),n=De().pathname.match(/^\/([^/]+)/),r=n?n[1]:"Organization";return e.createElement(Be,{onSubmit:function(e){var n=e.filter,r=e.type;n?t.push("/".concat(r,"?filter=").concat(encodeURIComponent('{"q": "'.concat(n,'"}')))):t.push("/".concat(r))},initialValues:{type:r},render:function(t){var n=t.handleSubmit;return e.createElement("form",{onSubmit:n},e.createElement(ee,{container:!0,spacing:2},e.createElement(ee,{item:!0,xs:5},e.createElement(_e,{name:"filter",component:pt,placeholder:"Rechercher...",fullWidth:!0})),e.createElement(ee,{item:!0,xs:5},e.createElement(_e,{name:"type",component:dt,fullWidth:!0})),e.createElement(ee,{item:!0,xs:2},e.createElement(te,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},ht=oe({toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2}}),bt=function(t){var n=ht();return e.createElement(p,at({},t,{classes:it({toolbar:n.toolbar},t.classes),color:"primary"}),e.createElement("span",{className:n.spacer}),e.createElement(ie,{only:"xs"},e.createElement("span",{className:n.searchForm},e.createElement(ft,null))),e.createElement("span",{className:n.spacer}))},vt=oe((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),gt=function(t){var n=t.handleToggle,r=t.sidebarIsOpen,a=t.isOpen,o=t.name,i=t.icon,l=t.children,c=t.dense,s=vt(),u=e.createElement(ae,{dense:c,button:!0,onClick:n},e.createElement(le,{className:s.icon},a?e.createElement(Ge,null):i),e.createElement(ce,{variant:"inherit",color:"textSecondary"},o));return e.createElement(e.Fragment,null,r||a?u:e.createElement(se,{title:o,placement:"right"},u),e.createElement(ue,{in:a,timeout:"auto",unmountOnExit:!0},e.createElement(me,{dense:c,component:"div",disablePadding:!0,className:r?s.sidebarIsOpen:s.sidebarIsClosed},l)))},yt=function(t){var n=t.resource,r=t.onClick,a=t.open;return e.createElement(d,{to:"/".concat(n.name),primaryText:n.options&&n.options.label||n.name,leftIcon:n.icon?e.createElement(n.icon,null):e.createElement(DefaultIcon,null),onClick:r,sidebarIsOpen:a})},Et=oe({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),wt=function(t){var n=t.appBar,r=t.menu,a=(t.userMenu,t.children),o=lt(t,["appBar","menu","userMenu","children"]),i=Et();return e.createElement(f,at({},o,{classes:{appFrame:i.appFrame},appBar:n,menu:r}),e.createElement(ce,{variant:"h4",color:"primary",className:i.title,id:"react-admin-title",component:"h1"}),a)};wt.defaultProps={appBar:bt,menu:function(a){var o=a.onMenuClick,i=a.logout,l=a.dense,c=void 0!==l&&l,u=a.openAll,p=void 0!==u&&u,d=pe((function(e){return e.breakpoints.down("xs")})),f=ze((function(e){return e.admin.ui.sidebarOpen})),h=ze(m),b=s().pathname.match(/^\/([^/]+)/),v=b?b[1]:null,g=ct(t({}),2),y=g[0],E=g[1],w=n((function(){var e=h.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return h.filter((function(t){return e.includes(t.name)}))}),[h]);return r((function(){var e=h.find((function(e){return e.name===v})),t=w.find((function(t){return t.name===e.options.parent})),n=w.reduce((function(e,n){return e[n.name]=p||t&&n.name===t.name,e}),{});E((function(e){return it(it({},n),e)}))}),[w,h,v,p]),e.createElement(de,{mt:2},w.map((function(t){return e.createElement(gt,{key:t.name,handleToggle:function(){return e=t.name,void E((function(t){return it(it({},t),{},rt({},e,!t[e]))}));var e},isOpen:y[t.name],sidebarIsOpen:f,name:t.options&&t.options.label||t.name,icon:t.icon?e.createElement(t.icon,null):e.createElement(He,null),dense:c},h.filter((function(e){return e.hasList&&e.options.parent===t.name})).map((function(t){return e.createElement(yt,{key:t.name,resource:t,onClick:o,open:f})})))})),h.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(t){return e.createElement(yt,{key:t.name,resource:t,onClick:o,open:f})})),d&&i)}};var Ct=oe((function(e){return{header:{position:"relative",height:65},logo:rt({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),Pt=function(t){var n=t.userMenu,r=t.logout,a=Ct(),o=h().identity;return e.createElement(de,{bgcolor:"primary.main"},e.createElement(fe,{maxWidth:"lg",className:a.header},e.createElement(ee,{container:!0},e.createElement(ee,{item:!0,xs:12,sm:n?3:6},e.createElement(Me,{to:"/"},e.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:a.logo}))),e.createElement(ie,{xsDown:!0},e.createElement(ee,{item:!0,sm:6},e.createElement(de,{pt:2},e.createElement(ft,null)))),n&&e.createElement(ee,{item:!0,sm:3,align:"right"},e.createElement(de,{pt:o&&""!==o.id?2:1},e.cloneElement(n,{logout:r}))))))},kt=function(){var e=De().pathname;return r((function(){window.scrollTo(0,0)}),[e]),null},xt=function(t){var n=t.appBar,r=t.title,a=t.open,o=t.logout,i=t.theme,l=t.children,c=pe(i.breakpoints.down("xs"));return e.createElement(he,{theme:i},e.createElement(kt,null),e.createElement(n,{title:r,open:a,logout:o}),e.createElement(fe,{maxWidth:"lg",disableGutters:c},e.createElement(de,{mb:{xs:0,sm:5}},l)),e.createElement(b,null))};xt.defaultProps={appBar:Pt};var Ot=be(),Nt=be({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:rt({padding:25},Ot.breakpoints.down("xs"),{padding:15})},RaList:{content:rt({padding:25},Ot.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:rt({},Ot.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),Lt=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=lt(t,["basePath","className","data","hasList"]);return e.createElement(v,at({className:r},i),o&&e.createElement(g,{basePath:n,record:a}))},St=function(t){return e.createElement(y,at({actions:e.createElement(Lt,null),redirect:"show"},t))},Tt=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=t.hasShow,l=lt(t,["basePath","className","data","hasList","hasShow"]);return e.createElement(v,at({className:r},l),o&&e.createElement(g,{basePath:n,record:a}),i&&e.createElement(E,{basePath:n,record:a}))},It=function(t){return e.createElement(w,at({actions:e.createElement(Tt,null)},t))},jt=oe((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),Rt=function(t){var n=t.date,r=t.title,a=t.content,o=jt(),i=C(),l=i.ids,c=i.data,s=i.resource,u=i.basePath;return e.createElement("div",{className:o.root},l.map((function(t,i){var l=n&&new Date(n(c[t])),m=r&&r(c[t]);return e.createElement(ve,{className:o.accordion,key:i},e.createElement(ge,{expandIcon:e.createElement(Ge,null),"aria-controls":"panel".concat(i,"-content"),id:"panel".concat(i,"-header"),className:o.accordionSummary},l&&e.createElement(ce,{className:o.date},l.toLocaleDateString()),e.createElement(ce,{className:o.title},m)),e.createElement(ye,{className:o.accordionDetails},e.createElement(a,{record:c[t],resource:s,basePath:u})))})))},At=function(t){var n=t.bulkActions,r=t.basePath,a=t.currentSort,o=t.displayedFilters,i=t.exporter,l=t.filters,c=t.filterValues,u=t.onUnselectItems,m=t.resource,p=t.selectedIds,d=t.showFilter,f=t.total,h=t.views,b=t.currentView,g=t.setView,y=pe((function(e){return e.breakpoints.down("xs")})),E=P({}),w=new URLSearchParams(s().search);return e.createElement(v,null,h&&Object.entries(h).filter((function(e){return ct(e,1)[0]!==b})).map((function(t){var n=ct(t,2),r=n[0],a=n[1];return w.set("view",r),w.set("page",1),w.set("perPage",a.perPage),a.sort&&(w.set("sort",a.sort.field),w.set("order",a.sort.order)),e.createElement(k,{key:r,to:"?"+w.toString()},e.createElement(x,{onClick:function(){return g(r)},label:a.label},e.createElement(a.icon)))})),n&&e.cloneElement(n,{basePath:r,filterValues:c,resource:m,selectedIds:p,onUnselectItems:u}),l&&e.cloneElement(l,{resource:m,showFilter:d,displayedFilters:o,filterValues:c,context:"button"}),E.hasCreate&&e.createElement(O,{basePath:r}),!y&&!1!==i&&e.createElement(N,{disabled:0===f,resource:m,sort:a,filter:c,exporter:i}),!y&&e.createElement(L,null))},Bt=function(t){return e.createElement(T,at({rowsPerPageOptions:[25,50,100]},t))},_t=function(t){var n=t.children,r=lt(t,["children"]);return e.createElement(S,at({actions:e.createElement(At,null),sort:{field:"pair:label",order:"DESC"},pagination:e.createElement(Bt,null),perPage:50},r),n)},Wt=function(n){n.children;var r=n.actions,a=n.views,o=n.ListComponent,i=lt(n,["children","actions","views","ListComponent"]),l=new URLSearchParams(s().search),c=l.has("view")?l.get("view"):Object.keys(a)[0],u=ct(t(c),2),m=u[0],p=u[1];return e.createElement(o,at({actions:e.cloneElement(r,it({views:a,currentView:m,setView:p},i)),pagination:a[m].pagination,perPage:a[c].perPage,sort:a[c].sort},i),a[m].list)};Wt.defaultProps={actions:e.createElement(At,null),ListComponent:S};var Ft=oe((function(e){return{tab:{minWidth:55}}})),Dt=function(){var t=u(),n=Ft(),r=s().pathname.match(/^\/([^/]+)/),a=r?r[1]:null,o=ze(m,qe),i=pe((function(e){return e.breakpoints.down("xs")}));return e.createElement(Ee,{value:a,onChange:function(e,n){return t.push("/"+n)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},o.filter((function(e){return e.hasList})).map((function(t){return e.createElement(we,{key:t.name,icon:e.createElement(t.icon),label:i?void 0:t.options.label,value:t.name,className:n.tab})})))},Mt=Ye({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}}),Ut=function(t){return e.createElement($e,{theme:Mt},e.createElement(I,t))};function Vt(e,t){return e(t={exports:{}},t.exports),t.exports}var zt,qt=Vt((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=(r=e)&&r.__esModule?r:{default:r};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<n&&(n=i,r=t[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var a=r%e;t[a]||(t[a]=[]),t[a].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",s=o;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=a({},t,r,{style:a({},r.style,{width:c}),className:s});return i.map((function(e,t){return l.default.createElement("div",a({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),l.default.createElement("div",a({},n,{className:r}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=c,n.default=s})),Ht=(zt=qt)&&zt.__esModule&&Object.prototype.hasOwnProperty.call(zt,"default")?zt.default:zt,Gt=oe((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),Yt=function(t){var n=t.image,r=t.content,a=t.actions,o=t.breakpointCols,i=t.linkType,l=Gt(),c=C(),s=c.ids,u=c.data,m=c.basePath;return e.createElement(Ht,{breakpointCols:o,className:l.grid,columnClassName:l.column},s.map((function(t){var o="function"==typeof n?n(u[t]):n;return e.createElement(Ce,{key:t,className:l.card},e.createElement(k,{to:j(m,t)+"/"+i},e.createElement(Pe,null,o&&e.createElement(ke,{className:l.media,image:o}),r&&e.createElement(xe,null,r(u[t])))),a&&e.createElement(Oe,null,a.map((function(n){return e.createElement(n,{record:u[t],basePath:m})}))))})))};Yt.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var $t=function(t){var n=t.reference,r=t.source,a=t.inverseSource,o=t.limit,i=t.sort,l=t.filter,c=t.label,s=t.icon,u=R(n,{page:1,perPage:o},i,l),p=u.data,d=u.ids,f=ze(m,qe).filter((function(e){return(null==e?void 0:e.name)===n}))[0];return e.createElement(A,{label:c||f.options.label,icon:s||e.createElement(f.icon)},d.filter((function(e){return!a||p[e][a]})).map((function(t){return e.createElement(B,{key:t,label:p[t]["pair:label"],value:rt({},r,t)})})))};$t.defaultProps={limit:25};var Jt=oe((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),Kt=function(t){var n=t.label,r=t.children,a=t.record,o=t.resource,i=t.source,l=t.basePath,c=t.mb,s=Jt(),u=_();return(null==a?void 0:a[i])?e.createElement(de,{mb:c},e.createElement(de,{className:s.rightLabel},u.apply(void 0,st(W({label:n,resource:o,source:i})))),r&&e.createElement(de,{m:0},e.cloneElement(r,{record:a,resource:o,basePath:l}))):null};Kt.defaultProps={mb:4};var Qt=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=t.showLabel,l=lt(t,["basePath","children","record","resource","showLabel"]);return e.createElement(ee,at({item:!0},l),e.Children.map(r,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel&&i?e.createElement(Kt,{record:a,resource:o,basePath:n,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:n})):null})))},Xt=oe((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),Zt=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=Xt(),l=_();return e.createElement(de,null,e.Children.map(r,(function(t){return t&&a[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(ee,{container:!0,spacing:3,className:i.line},e.createElement(ee,{item:!0,xs:3},e.createElement(ce,{color:"textSecondary",align:"right",variant:"body2"},l.apply(void 0,st(W({label:t.props.label,resource:o,source:t.props.source}))))),e.createElement(ee,{item:!0,xs:9},e.createElement(ce,{variant:"body2"},e.cloneElement(t,{record:a,resource:o,basePath:n})))):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:n})):null})))};function en(){}function tn(){}tn.resetWarningCache=en;var nn=Vt((function(e){e.exports=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tn,resetWarningCache:en};return n.PropTypes=n,n}()})),rn=function(e){var t=e.children,n=e.syncWithLocation,r=e.value,c=e.record,s=e.showResourcesIcons,u=lt(e,["children","syncWithLocation","value","record","showResourcesIcons"]),m=De(),p=Ue(),d=m.pathname;return a(Ke,at({indicatorColor:"primary",value:n?d:r},u),o.map(t,(function(e,t){if(!e||!i(e))return null;var r=F(e,t,p.url);return l(e,{context:"header",value:n?r:t,syncWithLocation:n,record:c,showResourcesIcons:s})})))};rn.propTypes={children:nn.node};var an=oe((function(e){return{content:{padding:e.spacing(2)}}})),on=function(n){var r=n.children,a=n.syncWithLocation,c=void 0===a||a,s=n.tabs,u=n.record,m=n.showResourcesIcons,p=void 0!==m&&m,d=Ue(),f=an(),h=o.toArray(r).filter((function(e){return null!==e})),b=ct(t(0),2),v=b[0],g=b[1];return e.createElement("div",null,l(s,{syncWithLocation:c,onChange:function(e,t){c||g(t)},value:v,record:u,showResourcesIcons:p},h),e.createElement(Ne,null),e.createElement("div",{className:f.content},o.map(h,(function(t,n){return t&&i(t)?c?e.createElement(Ve,{exact:!0,path:D(F(t,n,d.url)),render:function(){return l(t,{context:"content",record:u})}}):v===n?l(t,{context:"content",record:u}):null:null}))))};on.defaultProps={tabs:e.createElement(rn,null)};var ln=oe((function(e){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:rt({width:"100%",maxHeight:"none"},e.breakpoints.down("sm"),{margin:0})}})),cn=function(t){var n=t.record,r=t.source,a=t.defaultImage,o=lt(t,["record","source","defaultImage"]),i=ln();if(n[r]){if(n[r].rawFile instanceof File)return e.createElement(de,{align:"center",className:i.loader},e.createElement(Le,null))}else n[r]=a;return e.createElement(M,at({record:n,source:r,classes:{image:i.image}},o))},sn=oe((function(){return{root:{flexGrow:1}}})),un=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=sn();return e.createElement("div",{className:i.root},e.createElement(ee,{container:!0,spacing:5},e.Children.map(r,(function(t){return t&&e.isValidElement(t)?e.cloneElement(t,{resource:o,record:a,basePath:n}):null}))))},mn=function(e){return e.stopPropagation()},pn=function(){},dn=function(e){var t=e.children,n=e.linkType,r=e.spacing,i=lt(e,["children","linkType","spacing"]),c=C(),s=c.ids,u=c.data,m=c.basePath;return a(ee,{container:!0,spacing:r},s.map((function(e){return a(ee,at({item:!0,key:e},i),n?a(k,{to:j(m,e,n),onClick:mn,t:!0},l(o.only(t),{record:u[e],basePath:m,onClick:pn})):l(o.only(t),{record:u[e],basePath:m}))})))};dn.defaultProps={xs:6,spacing:3,linkType:"edit"};var fn=oe((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),hn=function(t){var n=t.children,r=t.image,a=t.defaultImage,o=fn(),i=U(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?e.createElement("div",{className:o.root},e.createElement(ce,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),e.createElement(ee,{container:!0,spacing:5},e.createElement(ee,{item:!0,xs:12,sm:4},e.createElement(cn,{record:s,source:r,defaultImage:a})),e.createElement(ee,{item:!0,xs:12,sm:8},e.createElement(Zt,{record:s,resource:u,basePath:l},n)))):null};hn.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var bn=oe((function(e){return{subTitle:{marginTop:e.spacing(5),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),vn=function(t){var n=t.children,r=bn();return e.createElement(ce,{variant:"h5",className:r.subTitle},e.createElement("span",{className:r.subTitleSpan},n))},gn=Vt((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),yn=function(t){var r,a,o=t.basePath,i=t.children,l=t.context,c=t.className,s=t.icon,u=t.label,p=t.record,d=t.resource,f=t.syncWithLocation,h=void 0===f||f,b=t.value,v=t.inversePredicate,g=t.filter,y=void 0===g?{}:g,E=t.showResourcesIcons,w=void 0!==E&&E,C=lt(t,["basePath","children","context","className","icon","label","record","resource","syncWithLocation","value","inversePredicate","filter","showResourcesIcons"]),P=De(),k={component:Me,to:it(it({},P),{},{pathname:b})},x=ze(m),O=n((function(){return x.find((function(e){return(null==e?void 0:e.name)===d}))}),[x,d]),N=V({resource:d,basePath:o,filter:it(rt({},v,null==p?void 0:p.id),y),perPage:500});return"header"===l?e.createElement(Qe,at({key:u,label:N.ids?"".concat(u||(null===(r=O.options)||void 0===r?void 0:r.label)," (").concat(N.ids.length,")"):u||(null===(a=O.options)||void 0===a?void 0:a.label),value:b,icon:s||w&&e.createElement(O.icon),className:gn("show-tab",c)},h?k:{},C)):e.createElement(z,{value:N},i)},En=function(t){var n=t.children,r=_(),a=U(),o=a.basePath,i=a.loaded,l=a.record,c=a.resource;return i?e.createElement(de,null,e.Children.map(n,(function(t){return t&&l[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(e.Fragment,null,e.createElement(vn,null,r.apply(void 0,st(W({label:t.props.label,resource:c,source:t.props.source})))),e.cloneElement(t,{record:l,resource:c,basePath:o})):"string"==typeof t.type?t:e.cloneElement(t,{record:l,resource:c,basePath:o})):null}))):null},wn=function(t){var n=t.children,r=U(),a=r.basePath,o=r.loaded,i=r.record,l=r.resource;return o?e.Children.map(n,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(Kt,{record:i,resource:l,basePath:a,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:i,resource:l,basePath:a})):null})):null},Cn=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=t.hasEdit,l=lt(t,["basePath","className","data","hasList","hasEdit"]);return e.createElement(v,at({className:r},l),o&&e.createElement(g,{basePath:n,record:a}),i&&e.createElement(q,{basePath:n,record:a}))},Pn=function(t){return e.createElement(H,at({actions:e.createElement(Cn,null)},t))},kn=oe((function(e){return{parent:function(e){return it({position:"relative"},e.parent)},image:function(e){return it({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),xn=function(t){var n=t.record,r=t.styles;lt(t,["record","styles"]);console.log();var a=kn(r),o=n?n["pair:firstName"]+" "+n["pair:lastName"]:"";return e.createElement(de,{className:a.parent},e.createElement("img",{src:n&&n.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:o}),e.createElement(de,{bgcolor:"secondary.main",className:a.child,borderRadius:7},e.createElement(ce,{align:"center",className:a.caption,noWrap:!0},o)))},On=function(t){var n=t.source,r=t.record;return r&&r[n]?e.createElement(Xe,{source:r[n]}):null};On.defaultProps={addLabel:!0};var Nn=Je((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),Ln=function(e){return e.stopPropagation()},Sn=function(){},Tn=function(e){e.classes;var t=e.className,n=e.children,r=e.linkType,i=void 0===r?"edit":r,c=e.separator,s=void 0===c?",":c,u=lt(e,["classes","className","children","linkType","separator"]),m=C(e),p=m.ids,d=m.data,f=m.loaded,h=m.resource,b=m.basePath,v=Nn(e);return!1===f?a(Se,null):a("span",at({className:gn(v.root,t)},G(u)),p.map((function(e,t){var r=!!i&&j(b,e,i);return a("span",{key:e},r?a(k,{classes:v.link,to:r,onClick:Ln},l(o.only(n),{record:d[e],resource:h,basePath:b,onClick:Sn})):l(o.only(n),{record:d[e],resource:h,basePath:b}),t<p.length-1&&s+" ")})))},In=oe((function(e){return{parent:function(e){return it({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),jn=function(t){var n=t.record,r=t.label,a=t.image,o=t.fallback,i=t.variant,l=t.labelColor,c=t.classes,s=t.children;if(c=In(c),!n)return null;var u="function"==typeof r?r(n):n[r],m="function"==typeof a?a(n):n[a],p="function"==typeof o?o(n):o;return e.createElement(de,{className:c.parent},e.createElement("div",{className:c.square},e.createElement(Te,{src:m||p,alt:u,fallback:p,className:c.avatar,variant:i},s)),e.createElement(de,{bgcolor:l,className:c.child,borderRadius:5},e.createElement(ce,{align:"center",className:c.caption,noWrap:!0},u)))};jn.defaultProps={labelColor:"secondary.main"};var Rn=oe({root:{display:"flex",alignItems:"center"}}),An=function(n){var r=n.label,a=n.reference,o=n.source,i=n.children,l=Rn(),c=ct(t(!1),2),s=c[0],u=c[1],m=ct(Y(a),2),p=m[0],d=m[1].loading,f=_(),h=$(),b=We(),v=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;u(!1),b.change(o,t["@id"])},onFailure:function(e){var t=e.error;h(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){nt(o,r,a,i,l,"next",e)}function l(e){nt(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return e.createElement("div",{className:l.root},e.createElement(J,{label:r,reference:a,source:o},i),e.createElement(x,{onClick:function(){return u(!0)},label:"ra.action.create"},e.createElement(Ze,null)),e.createElement(Ie,{fullWidth:!0,open:s,onClose:function(){return u(!1)}},e.createElement(je,null,f("ra.action.create")),e.createElement(K,{resource:a,save:v,render:function(t){var n=t.handleSubmitWithRedirect,r=t.pristine,a=t.saving;return e.createElement(e.Fragment,null,e.createElement(Re,null,e.createElement(Q,{label:"Titre",source:"pair:label",validate:X(),fullWidth:!0})),e.createElement(Ae,null,e.createElement(x,{label:"ra.action.cancel",onClick:function(){return u(!1)},disabled:d},e.createElement(et,null)),e.createElement(Z,{handleSubmitWithRedirect:n,pristine:r,saving:a,disabled:d})))}})))};export{Rt as AccordionList,bt as AppBar,jn as AvatarField,Qt as Column,un as ColumnShowLayout,St as Create,Lt as CreateActions,Zt as DetailsList,It as Edit,Tt as EditActions,dn as GridList,hn as Hero,on as InverseReferenceShowLayout,vn as LargeLabel,wt as Layout,_t as List,At as ListActions,yn as ListTab,cn as MainImage,En as MainList,On as MarkdownField,Yt as MasonryList,Wt as MultiViewsList,tt as RedirectByType,$t as ReferenceFilter,An as ReferenceQuickCreateInput,Kt as RightLabel,Tn as SeparatedListField,Pn as Show,Cn as ShowActions,wn as SideList,Pt as SimpleAppBar,xt as SimpleLayout,Ut as SimpleList,Dt as TabsMenu,xn as UserIcon,Nt as theme};
