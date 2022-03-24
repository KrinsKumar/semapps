"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@material-ui/pickers"),r=require("react-admin"),n=require("@date-io/date-fns"),a=require("@fullcalendar/react"),o=require("@fullcalendar/daygrid"),i=require("@material-ui/core"),l=require("react-router-dom"),u=require("@fullcalendar/list");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=c(e),p=c(n),d=c(a),f=c(o),m=c(u);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(t){return("0".repeat(e)+t).slice(-e)}},O=h(4),P=h(2),k=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,C=function(e){if(!(e instanceof Date)||isNaN(e.getDate()))return"";var t=O(e.getFullYear()),r=P(e.getMonth()+1),n=P(e.getDate()),a=P(e.getHours()),o=P(e.getMinutes());return"".concat(t,"-").concat(r,"-").concat(n,"T").concat(a,":").concat(o)},D=function(e){return null==e||""===e?"":e instanceof Date?C(e):k.test(e)?e:C(new Date(e))},T=function(e){return e?new Date(e):""},w=["allowEmpty","alwaysOn","basePath","component","defaultValue","format","formClassName","initialValue","initializeForm","input","isRequired","label","limitChoicesToValue","locale","meta","options","optionText","optionValue","parse","record","resource","source","textAlign","translate","translateChoice","labelTime"],x=["PickerComponent","format","label","options","source","resource","helperText","margin","onBlur","onChange","onFocus","parse","validate","variant","defaultValue","providerOptions","pickerVariant","stringFormat"],j=function(n){var a=n.PickerComponent,o=n.format,i=void 0===o?D:o,l=n.label,u=n.options,c=n.source,d=n.resource,f=n.helperText,m=n.margin,h=void 0===m?"dense":m,O=n.onBlur,P=n.onChange,k=n.onFocus,C=n.parse,j=void 0===C?T:C,S=n.validate,E=n.variant,I=void 0===E?"filled":E;n.defaultValue;var V,q=n.providerOptions,F=q.utils,M=q.locale,L=n.pickerVariant,R=void 0===L?"dialog":L,B=n.stringFormat,K=void 0===B?"ISO":B,N=y(n,x),_=r.useTranslate(),H=r.useInput(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({format:i,onBlur:O,onChange:P,onFocus:k,parse:j,resource:d,source:c,validate:S},N)),z=H.id,A=H.input,U=H.isRequired,Y=H.meta,G=Y.error,$=Y.touched,J=e.useCallback((function(e){Date.parse(e)?A.onChange("ISO"===K?e.toISOString():e.toString()):A.onChange(null)}),[]);return s.default.createElement(t.MuiPickersUtilsProvider,{utils:F||p.default,locale:M},s.default.createElement(a,g({id:z,InputLabelProps:{shrink:!0},label:s.default.createElement(r.FieldTitle,{label:l,source:c,resource:d,isRequired:U}),variant:R,inputVariant:I,margin:h,error:!(!$||!G),helperText:s.default.createElement(r.InputHelperText,{touched:$,error:G,helperText:f}),clearLabel:_("ra.action.clear_input_value"),cancelLabel:_("ra.action.cancel")},u,((V=N).allowEmpty,V.alwaysOn,V.basePath,V.component,V.defaultValue,V.format,V.formClassName,V.initialValue,V.initializeForm,V.input,V.isRequired,V.label,V.limitChoicesToValue,V.locale,V.meta,V.options,V.optionText,V.optionValue,V.parse,V.record,V.resource,V.source,V.textAlign,V.translate,V.translateChoice,V.labelTime,y(V,w)),{value:A.value?new Date(A.value):null,onChange:function(e){return J(e)},onBlur:function(){return A.onBlur(A.value?"ISO"===K?new Date(A.value).toISOString():new Date(A.value).toString():null)}})))};j.defaultProps={isRequired:!1,meta:{touched:!1,error:!1},options:{},providerOptions:{utils:p.default,locale:void 0}};var S=function(t){var n=t.label,a=t.startDate,o=t.endDate,i=t.linkType,u=l.useHistory(),c=r.useListContext(),s=c.ids,p=c.data,d=c.basePath,f=new URLSearchParams(u.location.search),m=e.useCallback((function(e){var t=e.event;e.jsEvent.preventDefault(),u.push(t.url)}),[]),b=e.useCallback((function(e){var t=e.view;f.set("month",t.currentStart.getMonth()+1),f.set("year",t.currentStart.getFullYear()),u.replace({pathname:u.location.pathname,search:"?"+f.toString()})}),[f]),v=e.useMemo((function(){return s.filter((function(e){return p[e]})).map((function(e){return{id:e,title:"string"==typeof n?p[e][n]:n(p[e]),start:"string"==typeof a?p[e][a]:a(p[e]),end:"string"==typeof o?p[e][o]:o(p[e]),url:r.linkToRecord(d,e)+"/"+i}}))}),[p,s,d]);return{initialDate:f.has("month")?new Date(f.get("year"),f.get("month")-1):new Date,events:v,datesSet:b,eventClick:m}},E=i.makeStyles((function(e){return{"@global":{".fc-button":{backgroundColor:e.palette.primary.main+" !important",border:"none !important",opacity:"1 !important"},".fc-day-today":{backgroundColor:e.palette.secondary.light+" !important"},"a.fc-daygrid-dot-event":{color:"black !important"}}}})),I=function(e){var t=i.useTheme(),r=S(e);return E(),s.default.createElement(d.default,g({plugins:[f.default],locale:e.locale,initialView:"dayGridMonth",eventBackgroundColor:t.palette.primary.main},r))};I.defaultProps={linkType:"edit"};var V=i.makeStyles((function(e){return{"@global":{".fc-button":{backgroundColor:e.palette.primary.main+" !important",border:"none !important",opacity:"1 !important"}}}})),q=function(e){var t=S(e);return V(),s.default.createElement(d.default,g({plugins:[m.default],locale:e.locale,initialView:"listMonth"},t))};q.defaultProps={linkType:"edit"};exports.CalendarList=I,exports.DateInput=function(e){return s.default.createElement(j,g({PickerComponent:t.DatePicker},e))},exports.DateTimeInput=function(e){return s.default.createElement(j,g({PickerComponent:t.DateTimePicker},e))},exports.DaysList=q,exports.KeyboardDateInput=function(e){return s.default.createElement(j,g({PickerComponent:t.KeyboardDatePicker},e))},exports.KeyboardDateTimeInput=function(e){return s.default.createElement(j,g({PickerComponent:t.KeyboardDateTimePicker},e))},exports.KeyboardTimeInput=function(e){return s.default.createElement(j,g({PickerComponent:t.KeyboardTimePicker},e))},exports.TimeInput=function(e){return s.default.createElement(j,g({PickerComponent:t.TimePicker},e))},exports.useFullCalendarProps=S;
//# sourceMappingURL=index.cjs.js.map
