"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-router"),r=require("react-admin"),a=require("@material-ui/core"),n=require("react-final-form"),o=require("react-router-dom"),l=require("react-redux"),i=require("@material-ui/icons/ViewList"),u=require("@material-ui/icons/ExpandMore"),c=require("@material-ui/core/styles"),s=require("react-markdown"),d=require("@material-ui/icons/Add"),m=require("@material-ui/icons/Cancel");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var h=f(e),b=p(e),y=f(i),g=f(u),v=f(s),E=f(d),C=f(m);function w(e,t,r,a,n,o,l){try{var i=e[o](l),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var I=function(e){var t=e.input,r=L(e,["input"]);return h.default.createElement(a.TextField,k({},t,r))},A=function(e){var t=e.input,n=L(e,["input"]),o=l.useSelector(r.getResources,l.shallowEqual);return h.default.createElement(a.Select,k({},t,n),o.filter((function(e){return e.hasList})).map((function(e){return h.default.createElement(a.MenuItem,{value:e.name,key:e.name},e.options.label)})))},j=function(){var e=o.useHistory(),t=o.useLocation().pathname.match(/^\/([^/]+)/),r=t?t[1]:"Organization";return h.default.createElement(n.Form,{onSubmit:function(t){var r=t.filter,a=t.type;r?e.push("/".concat(a,"?filter=").concat(encodeURIComponent('{"q": "'.concat(r,'"}')))):e.push("/".concat(a))},initialValues:{type:r},render:function(e){var t=e.handleSubmit;return h.default.createElement("form",{onSubmit:t},h.default.createElement(a.Grid,{container:!0,spacing:2},h.default.createElement(a.Grid,{item:!0,xs:5},h.default.createElement(n.Field,{name:"filter",component:I,placeholder:"Rechercher...",fullWidth:!0})),h.default.createElement(a.Grid,{item:!0,xs:5},h.default.createElement(n.Field,{name:"type",component:A,fullWidth:!0})),h.default.createElement(a.Grid,{item:!0,xs:2},h.default.createElement(a.Button,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},R=a.makeStyles({toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2}}),F=function(e){var t=R();return h.default.createElement(r.AppBar,k({},e,{classes:S({toolbar:t.toolbar},e.classes),color:"primary"}),h.default.createElement("span",{className:t.spacer}),h.default.createElement(a.Hidden,{only:"xs"},h.default.createElement("span",{className:t.searchForm},h.default.createElement(j,null))),h.default.createElement("span",{className:t.spacer}))},M=a.makeStyles((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),D=function(e){var t=e.handleToggle,r=e.sidebarIsOpen,n=e.isOpen,o=e.name,l=e.icon,i=e.children,u=e.dense,c=M(),s=h.default.createElement(a.MenuItem,{dense:u,button:!0,onClick:t},h.default.createElement(a.ListItemIcon,{className:c.icon},n?h.default.createElement(g.default,null):l),h.default.createElement(a.Typography,{variant:"inherit",color:"textSecondary"},o));return h.default.createElement(h.default.Fragment,null,r||n?s:h.default.createElement(a.Tooltip,{title:o,placement:"right"},s),h.default.createElement(a.Collapse,{in:n,timeout:"auto",unmountOnExit:!0},h.default.createElement(a.List,{dense:u,component:"div",disablePadding:!0,className:r?c.sidebarIsOpen:c.sidebarIsClosed},i)))},q=function(e){var t=e.resource,a=e.onClick,n=e.open;return h.default.createElement(r.MenuItemLink,{to:"/".concat(t.name),primaryText:t.options&&t.options.label||t.name,leftIcon:t.icon?h.default.createElement(t.icon,null):h.default.createElement(DefaultIcon,null),onClick:a,sidebarIsOpen:n})},G=a.makeStyles({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),_=function(e){var t=e.appBar,n=e.menu;e.userMenu;var o=e.children,l=L(e,["appBar","menu","userMenu","children"]),i=G();return h.default.createElement(r.Layout,k({},l,{classes:{appFrame:i.appFrame},appBar:t,menu:n}),h.default.createElement(a.Typography,{variant:"h4",color:"primary",className:i.title,id:"react-admin-title",component:"h1"}),o)};_.defaultProps={appBar:F,menu:function(n){var o=n.onMenuClick,i=n.logout,u=n.dense,c=void 0!==u&&u,s=n.openAll,d=void 0!==s&&s,m=a.useMediaQuery((function(e){return e.breakpoints.down("xs")})),f=l.useSelector((function(e){return e.admin.ui.sidebarOpen})),p=l.useSelector(r.getResources),b=t.useLocation().pathname.match(/^\/([^/]+)/),g=b?b[1]:null,v=T(e.useState({}),2),E=v[0],C=v[1],w=e.useMemo((function(){var e=p.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return p.filter((function(t){return e.includes(t.name)}))}),[p]);return e.useEffect((function(){var e=p.find((function(e){return e.name===g})),t=w.find((function(t){return t.name===e.options.parent})),r=w.reduce((function(e,r){return e[r.name]=d||t&&r.name===t.name,e}),{});C((function(e){return S(S({},r),e)}))}),[w,p,g,d]),h.default.createElement(a.Box,{mt:2},w.map((function(e){return h.default.createElement(D,{key:e.name,handleToggle:function(){return t=e.name,void C((function(e){return S(S({},e),{},x({},t,!e[t]))}));var t},isOpen:E[e.name],sidebarIsOpen:f,name:e.options&&e.options.label||e.name,icon:e.icon?h.default.createElement(e.icon,null):h.default.createElement(y.default,null),dense:c},p.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return h.default.createElement(q,{key:e.name,resource:e,onClick:o,open:f})})))})),p.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(e){return h.default.createElement(q,{key:e.name,resource:e,onClick:o,open:f})})),m&&i)}};var W=a.makeStyles((function(e){return{header:{position:"relative",height:65},logo:x({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),U=function(e){var t=e.userMenu,n=e.logout,l=W(),i=r.useGetIdentity().identity;return h.default.createElement(a.Box,{bgcolor:"primary.main"},h.default.createElement(a.Container,{maxWidth:"lg",className:l.header},h.default.createElement(a.Grid,{container:!0},h.default.createElement(a.Grid,{item:!0,xs:12,sm:t?3:6},h.default.createElement(o.Link,{to:"/"},h.default.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:l.logo}))),h.default.createElement(a.Hidden,{xsDown:!0},h.default.createElement(a.Grid,{item:!0,sm:6},h.default.createElement(a.Box,{pt:2},h.default.createElement(j,null)))),t&&h.default.createElement(a.Grid,{item:!0,sm:3,align:"right"},h.default.createElement(a.Box,{pt:i&&""!==i.id?2:1},h.default.cloneElement(t,{logout:n}))))))},V=function(){var t=o.useLocation().pathname;return e.useEffect((function(){window.scrollTo(0,0)}),[t]),null},z=function(e){var t=e.appBar,n=e.title,o=e.open,l=e.logout,i=e.theme,u=e.children,c=a.useMediaQuery(i.breakpoints.down("xs"));return h.default.createElement(a.ThemeProvider,{theme:i},h.default.createElement(V,null),h.default.createElement(t,{title:n,open:o,logout:l}),h.default.createElement(a.Container,{maxWidth:"lg",disableGutters:c},h.default.createElement(a.Box,{mb:{xs:0,sm:5}},u)),h.default.createElement(r.Notification,null))};z.defaultProps={appBar:U};var H=a.createMuiTheme(),Q=a.createMuiTheme({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:x({padding:25},H.breakpoints.down("xs"),{padding:15})},RaList:{content:x({padding:25},H.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:x({},H.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),$=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=L(e,["basePath","className","data","hasList"]);return h.default.createElement(r.TopToolbar,k({className:a},l),o&&h.default.createElement(r.ListButton,{basePath:t,record:n}))},J=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=e.hasShow,i=L(e,["basePath","className","data","hasList","hasShow"]);return h.default.createElement(r.TopToolbar,k({className:a},i),o&&h.default.createElement(r.ListButton,{basePath:t,record:n}),l&&h.default.createElement(r.ShowButton,{basePath:t,record:n}))},K=a.makeStyles((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),X=function(e){var n=e.bulkActions,o=e.basePath,l=e.currentSort,i=e.displayedFilters,u=e.exporter,c=e.filters,s=e.filterValues,d=e.onUnselectItems,m=e.resource,f=e.selectedIds,p=e.showFilter,b=e.total,y=e.views,g=e.currentView,v=e.setView,E=a.useMediaQuery((function(e){return e.breakpoints.down("xs")})),C=r.useResourceDefinition({}),w=new URLSearchParams(t.useLocation().search);return h.default.createElement(r.TopToolbar,null,y&&Object.entries(y).filter((function(e){return T(e,1)[0]!==g})).map((function(e){var t=T(e,2),a=t[0],n=t[1];return w.set("view",a),w.set("page",1),w.set("perPage",n.perPage),n.sort&&(w.set("sort",n.sort.field),w.set("order",n.sort.order)),h.default.createElement(r.Link,{key:a,to:"?"+w.toString()},h.default.createElement(r.Button,{onClick:function(){return v(a)},label:n.label},h.default.createElement(n.icon)))})),n&&h.default.cloneElement(n,{basePath:o,filterValues:s,resource:m,selectedIds:f,onUnselectItems:d}),c&&h.default.cloneElement(c,{resource:m,showFilter:p,displayedFilters:i,filterValues:s,context:"button"}),C.hasCreate&&h.default.createElement(r.CreateButton,{basePath:o}),!E&&h.default.createElement(r.ExportButton,{disabled:0===b,resource:m,sort:l,filter:s,exporter:u}),!E&&h.default.createElement(r.RefreshButton,null))},Y=function(e){return h.default.createElement(r.Pagination,k({rowsPerPageOptions:[25,50,100]},e))},Z=a.makeStyles((function(e){return{tab:{minWidth:55}}})),ee=c.createMuiTheme({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}});function te(e,t){return e(t={exports:{}},t.exports),t.exports}var re,ae=te((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=(r=h.default)&&r.__esModule?r:{default:r};var i={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.reCalculateColumnCount=r.reCalculateColumnCount.bind(r),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind(r);var a=void 0;return a=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:a},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":n(t))&&(t={default:parseInt(t)||2});var r=1/0,a=t.default||2;for(var o in t){var l=parseInt(o);l>0&&e<=l&&l<r&&(r=l,a=t[o])}a=Math.max(1,parseInt(a)||1),this.state.columnCount!==a&&this.setState({columnCount:a})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),r=[].concat(this.props.children||[]),a=0;a<r.length;a++){var n=a%e;t[n]||(t[n]=[]),t[n].push(r[a])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,r=e.columnAttrs,n=void 0===r?{}:r,o=e.columnClassName,i=this.itemsInColumns(),u=100/i.length+"%",c=o;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=a({},t,n,{style:a({},n.style,{width:u}),className:c});return i.map((function(e,t){return l.default.createElement("div",a({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props;e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column;var t=e.className,r=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),l.default.createElement("div",a({},r,{className:n}),this.renderColumns())}}]),t}(l.default.Component);u.defaultProps=i,t.default=u})),ne=(re=ae)&&re.__esModule&&Object.prototype.hasOwnProperty.call(re,"default")?re.default:re,oe=a.makeStyles((function(){return{grid:{display:"flex",marginLeft:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),le=function(e){var t=e.image,n=e.content,o=e.actions,l=e.breakpointCols,i=e.linkType,u=oe(),c=r.useListContext(),s=c.ids,d=c.data,m=c.basePath;return h.default.createElement(ne,{breakpointCols:l,className:u.grid,columnClassName:u.column},s.map((function(e){var l="function"==typeof t?t(d[e]):t;return h.default.createElement(a.Card,{key:e,className:u.card},h.default.createElement(r.Link,{to:r.linkToRecord(m,e)+"/"+i},h.default.createElement(a.CardActionArea,null,l&&h.default.createElement(a.CardMedia,{className:u.media,image:l}),n&&h.default.createElement(a.CardContent,null,n(d[e])))),o&&h.default.createElement(a.CardActions,null,o.map((function(t){return h.default.createElement(t,{record:d[e],basePath:m})}))))})))};le.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var ie=function(e){var t=e.reference,a=e.source,n=e.inverseSource,o=e.limit,i=e.sort,u=e.filter,c=e.label,s=e.icon,d=r.useGetList(t,{page:1,perPage:o},i,u),m=d.data,f=d.ids,p=l.useSelector(r.getResources,l.shallowEqual).filter((function(e){return(null==e?void 0:e.name)===t}))[0];return h.default.createElement(r.FilterList,{label:c||p.options.label,icon:s||h.default.createElement(p.icon)},f.filter((function(e){return!n||m[e][n]})).map((function(e){return h.default.createElement(r.FilterListItem,{key:e,label:m[e]["pair:label"],value:x({},a,e)})})))};ie.defaultProps={limit:25};var ue=a.makeStyles((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),ce=function(e){var t=e.label,n=e.children,o=e.record,l=e.resource,i=e.source,u=e.basePath,c=ue(),s=r.useTranslate();return o[i]?h.default.createElement(a.Box,{mb:4},h.default.createElement(a.Box,{className:c.rightLabel},s.apply(void 0,O(r.getFieldLabelTranslationArgs({label:t,resource:l,source:i})))),h.default.createElement(a.Box,{m:0},h.default.cloneElement(n,{record:o,resource:l,basePath:u}))):null},se=a.makeStyles((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),de=function(e){var t=e.basePath,n=e.children,o=e.record,l=e.resource,i=se(),u=r.useTranslate();return h.default.createElement(a.Box,null,h.default.Children.map(n,(function(e){return e&&o[e.props.source]&&h.default.isValidElement(e)?h.default.createElement("div",{key:e.props.source},e.props.addLabel?h.default.createElement(a.Grid,{container:!0,spacing:3,className:i.line},h.default.createElement(a.Grid,{item:!0,xs:3},h.default.createElement(a.Typography,{color:"textSecondary",align:"right",variant:"body2"},u.apply(void 0,O(r.getFieldLabelTranslationArgs({label:e.props.label,resource:l,source:e.props.source}))))),h.default.createElement(a.Grid,{item:!0,xs:9},h.default.createElement(a.Typography,{variant:"body2"},h.default.cloneElement(e,{record:o,resource:l,basePath:t})))):"string"==typeof e.type?e:h.default.cloneElement(e,{record:o,resource:l,basePath:t})):null})))},me=a.makeStyles((function(){return{root:{flexGrow:1}}})),fe=function(e){return e.stopPropagation()},pe=function(){},he=function(e){var t=e.children,n=e.xs,l=e.linkType,i=r.useListContext(),u=i.ids,c=i.data,s=i.basePath;return b.createElement(a.Grid,{container:!0,spacing:3},u.map((function(e){return b.createElement(a.Grid,{item:!0,xs:n,key:e},b.createElement(o.Link,{to:r.linkToRecord(s,e,l),onClick:fe},b.cloneElement(b.Children.only(t),{record:c[e],basePath:s,onClick:pe})))})))};he.defaultProps={xs:6,linkType:"edit"};var be=a.makeStyles((function(e){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:x({width:"100%",maxHeight:"none"},e.breakpoints.down("sm"),{margin:0})}})),ye=function(e){var t=e.record,n=e.source,o=e.defaultImage,l=L(e,["record","source","defaultImage"]),i=be();if(t[n]){if(t[n].rawFile instanceof File)return h.default.createElement(a.Box,{align:"center",className:i.loader},h.default.createElement(a.CircularProgress,null))}else t[n]=o;return h.default.createElement(r.ImageField,k({record:t,source:n,classes:{image:i.image}},l))},ge=a.makeStyles((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),ve=function(e){var t=e.children,n=e.image,o=e.defaultImage,l=ge(),i=r.useShowContext(),u=i.basePath,c=i.loaded,s=i.record,d=i.resource;return c?h.default.createElement("div",{className:l.root},h.default.createElement(a.Typography,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),h.default.createElement(a.Grid,{container:!0,spacing:5},h.default.createElement(a.Grid,{item:!0,xs:12,sm:4},h.default.createElement(ye,{record:s,source:n,defaultImage:o})),h.default.createElement(a.Grid,{item:!0,xs:12,sm:8},h.default.createElement(de,{record:s,resource:d,basePath:u},t)))):null};ve.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var Ee=a.makeStyles((function(e){return{subTitle:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),Ce=function(e){var t=e.children,r=Ee();return h.default.createElement(a.Typography,{variant:"h5",className:r.subTitle},h.default.createElement("span",{className:r.subTitleSpan},t))},we=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=e.hasEdit,i=L(e,["basePath","className","data","hasList","hasEdit"]);return h.default.createElement(r.TopToolbar,k({className:a},i),o&&h.default.createElement(r.ListButton,{basePath:t,record:n}),l&&h.default.createElement(r.EditButton,{basePath:t,record:n}))},xe=a.makeStyles((function(){return{parent:{position:"relative"},image:{width:"100%",borderRadius:"50%"},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),ke=function(e){var t=e.source,r=e.record;return r&&r[t]?h.default.createElement(v.default,{source:r[t]}):null};ke.defaultProps={addLabel:!0};var Pe=te((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),Se=c.makeStyles((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),Le=function(e){return e.stopPropagation()},Te=function(){},Oe=a.makeStyles((function(e){return{parent:{position:"relative"},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),Ne=function(e){var t=e.record,r=e.label,n=e.image,o=e.fallback,l=e.variant,i=e.labelColor,u=e.children,c=Oe();if(!t)return null;var s="function"==typeof r?r(t):t[r],d="function"==typeof n?n(t):t[n],m="function"==typeof o?o(t):o;return h.default.createElement(a.Box,{className:c.parent},h.default.createElement("div",{className:c.square},h.default.createElement(a.Avatar,{src:d||m,alt:s,fallback:m,className:c.avatar,variant:l},u)),h.default.createElement(a.Box,{bgcolor:i,className:c.child,borderRadius:5},h.default.createElement(a.Typography,{align:"center",className:c.caption,noWrap:!0},s)))};Ne.defaultProps={labelColor:"secondary.main"};var Be=a.makeStyles({root:{display:"flex",alignItems:"center"}});exports.AccordionList=function(e){var t=e.date,n=e.title,o=e.content,l=K(),i=r.useListContext(),u=i.ids,c=i.data,s=i.resource,d=i.basePath;return h.default.createElement("div",{className:l.root},u.map((function(e,r){var i=t&&new Date(t(c[e])),u=n&&n(c[e]);return h.default.createElement(a.Accordion,{className:l.accordion,key:r},h.default.createElement(a.AccordionSummary,{expandIcon:h.default.createElement(g.default,null),"aria-controls":"panel".concat(r,"-content"),id:"panel".concat(r,"-header"),className:l.accordionSummary},i&&h.default.createElement(a.Typography,{className:l.date},i.toLocaleDateString()),h.default.createElement(a.Typography,{className:l.title},u)),h.default.createElement(a.AccordionDetails,{className:l.accordionDetails},h.default.createElement(o,{record:c[e],resource:s,basePath:d})))})))},exports.AppBar=F,exports.AvatarField=Ne,exports.Column=function(e){var t=e.basePath,r=e.children,n=e.record,o=e.resource,l=e.showLabel,i=L(e,["basePath","children","record","resource","showLabel"]);return h.default.createElement(a.Grid,k({item:!0},i),h.default.Children.map(r,(function(e){return e&&h.default.isValidElement(e)?h.default.createElement("div",{key:e.props.source},e.props.addLabel&&l?h.default.createElement(ce,{record:n,resource:o,basePath:t,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:h.default.cloneElement(e,{record:n,resource:o,basePath:t})):null})))},exports.ColumnShowLayout=function(e){var t=e.basePath,r=e.children,n=e.record,o=e.resource,l=me();return h.default.createElement("div",{className:l.root},h.default.createElement(a.Grid,{container:!0,spacing:5},h.default.Children.map(r,(function(e){return e&&h.default.isValidElement(e)?h.default.cloneElement(e,{resource:o,record:n,basePath:t}):null}))))},exports.Create=function(e){return h.default.createElement(r.Create,k({actions:h.default.createElement($,null),redirect:"show"},e))},exports.CreateActions=$,exports.DetailsList=de,exports.Edit=function(e){return h.default.createElement(r.Edit,k({actions:h.default.createElement(J,null)},e))},exports.EditActions=J,exports.GridList=he,exports.Hero=ve,exports.LargeLabel=Ce,exports.Layout=_,exports.List=function(e){var t=e.children,a=L(e,["children"]);return h.default.createElement(r.List,k({actions:h.default.createElement(X,null),sort:{field:"pair:label",order:"DESC"},pagination:h.default.createElement(Y,null),perPage:50},a),t)},exports.ListActions=X,exports.MainList=function(e){var t=e.children,n=r.useTranslate(),o=r.useShowContext(),l=o.basePath,i=o.loaded,u=o.record,c=o.resource;return i?h.default.createElement(a.Box,null,h.default.Children.map(t,(function(e){return e&&u[e.props.source]&&h.default.isValidElement(e)?h.default.createElement("div",{key:e.props.source},e.props.addLabel?h.default.createElement(h.default.Fragment,null,h.default.createElement(Ce,null,n.apply(void 0,O(r.getFieldLabelTranslationArgs({label:e.props.label,resource:c,source:e.props.source})))),h.default.cloneElement(e,{record:u,resource:c,basePath:l})):"string"==typeof e.type?e:h.default.cloneElement(e,{record:u,resource:c,basePath:l})):null}))):null},exports.MarkdownField=ke,exports.MasonryList=le,exports.MultiViewsList=function(a){a.children;var n=a.views,o=L(a,["children","views"]),l=new URLSearchParams(t.useLocation().search),i=l.has("view")?l.get("view"):Object.keys(n)[0],u=T(e.useState(i),2),c=u[0],s=u[1];return h.default.createElement(r.List,k({actions:h.default.createElement(X,{views:n,currentView:c,setView:s}),pagination:n[c].pagination,perPage:n[i].perPage,sort:n[i].sort},o),n[c].list)},exports.RedirectByType=function(e){var r=e.record,a=e.typesMap;if(r){Array.isArray(r.type)||(r.type=[r.type]);var n=Object.keys(a).find((function(e){return r.type.includes(a[e])}));if(n)return h.default.createElement(t.Redirect,{to:"/".concat(n,"/").concat(encodeURIComponent(r.id),"/show")})}return null},exports.ReferenceFilter=ie,exports.ReferenceQuickCreateInput=function(t){var o=t.label,l=t.reference,i=t.source,u=t.children,c=Be(),s=T(e.useState(!1),2),d=s[0],m=s[1],f=T(r.useCreate(l),2),p=f[0],b=f[1].loading,y=r.useTranslate(),g=r.useNotify(),v=n.useForm(),x=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;m(!1),v.change(i,t["@id"])},onFailure:function(e){var t=e.error;g(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function l(e){w(o,a,n,l,i,"next",e)}function i(e){w(o,a,n,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return h.default.createElement("div",{className:c.root},h.default.createElement(r.ReferenceInput,{label:o,reference:l,source:i},u),h.default.createElement(r.Button,{onClick:function(){return m(!0)},label:"ra.action.create"},h.default.createElement(E.default,null)),h.default.createElement(a.Dialog,{fullWidth:!0,open:d,onClose:function(){return m(!1)}},h.default.createElement(a.DialogTitle,null,y("ra.action.create")),h.default.createElement(r.FormWithRedirect,{resource:l,save:x,render:function(e){var t=e.handleSubmitWithRedirect,n=e.pristine,o=e.saving;return h.default.createElement(h.default.Fragment,null,h.default.createElement(a.DialogContent,null,h.default.createElement(r.TextInput,{label:"Titre",source:"pair:label",validate:r.required(),fullWidth:!0})),h.default.createElement(a.DialogActions,null,h.default.createElement(r.Button,{label:"ra.action.cancel",onClick:function(){return m(!1)},disabled:b},h.default.createElement(C.default,null)),h.default.createElement(r.SaveButton,{handleSubmitWithRedirect:t,pristine:n,saving:o,disabled:b})))}})))},exports.RightLabel=ce,exports.SeparatedListField=function(t){t.classes;var n=t.className,o=t.children,l=t.linkType,i=void 0===l?"edit":l,u=t.separator,c=void 0===u?",":u,s=L(t,["classes","className","children","linkType","separator"]),d=r.useListContext(t),m=d.ids,f=d.data,p=d.loaded,h=d.resource,y=d.basePath,g=Se(t);return!1===p?b.createElement(a.LinearProgress,null):b.createElement("span",k({className:Pe(g.root,n)},r.sanitizeListRestProps(s)),m.map((function(t,a){var n=!!i&&r.linkToRecord(y,t,i);return n?b.createElement("span",{key:t},b.createElement(r.Link,{classes:g.link,to:n,onClick:Le},e.cloneElement(e.Children.only(o),{record:f[t],resource:h,basePath:y,onClick:Te})),a<m.length-1&&c+" "):b.createElement("span",{key:t},e.cloneElement(e.Children.only(o),{record:f[t],resource:h,basePath:y}),a<m.length-1&&c+" ")})))},exports.Show=function(e){return h.default.createElement(r.Show,k({actions:h.default.createElement(we,null)},e))},exports.ShowActions=we,exports.SideList=function(e){var t=e.children,a=r.useShowContext(),n=a.basePath,o=a.loaded,l=a.record,i=a.resource;return o?h.default.Children.map(t,(function(e){return e&&h.default.isValidElement(e)?h.default.createElement("div",{key:e.props.source},e.props.addLabel?h.default.createElement(ce,{record:l,resource:i,basePath:n,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:h.default.cloneElement(e,{record:l,resource:i,basePath:n})):null})):null},exports.SimpleAppBar=U,exports.SimpleLayout=z,exports.SimpleList=function(e){return h.default.createElement(c.ThemeProvider,{theme:ee},h.default.createElement(r.SimpleList,e))},exports.TabsMenu=function(){var e=t.useHistory(),n=Z(),o=t.useLocation().pathname.match(/^\/([^/]+)/),i=o?o[1]:null,u=l.useSelector(r.getResources,l.shallowEqual),c=a.useMediaQuery((function(e){return e.breakpoints.down("xs")}));return h.default.createElement(a.Tabs,{value:i,onChange:function(t,r){return e.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},u.filter((function(e){return e.hasList})).map((function(e){return h.default.createElement(a.Tab,{key:e.name,icon:h.default.createElement(e.icon),label:c?void 0:e.options.label,value:e.name,className:n.tab})})))},exports.UserIcon=function(e){var t=e.record,r=xe(),n=t?t["pair:firstName"]+" "+t["pair:lastName"]:"";return h.default.createElement(a.Box,{className:r.parent},h.default.createElement("img",{src:t&&t.image||process.env.PUBLIC_URL+"/unknown-user.png",className:r.image,alt:n}),h.default.createElement(a.Box,{bgcolor:"secondary.main",className:r.child,borderRadius:7},h.default.createElement(a.Typography,{align:"center",className:r.caption,noWrap:!0},n)))},exports.theme=Q;
