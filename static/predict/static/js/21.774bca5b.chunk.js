(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[21,27],{155:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c}));var r=e(3),a=new(function(){function t(t){void 0===t&&(t="__LSM__"),this.name=t,this.state={},this.middleWares=[],this.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:{}}var n=t.prototype;return n.updateStore=function(t){this.state=function(t,n){try{return JSON.parse(t.getItem(n))}catch(t){return null}}(this.storageType,this.name)||t},n.updateMiddleWares=function(t){return this.middleWares=t},t}()),o=Object(r.createContext)(void 0),i=function(t){var n=t.children,e=Object(r.useState)(a.state);return Object(r.createElement)(o.Provider,{value:{state:e[0],setState:e[1]}},n)};function u(t,n){void 0===n&&(n={name:"__LSM__",middleWares:[]}),n.name&&(a.name=n.name),n.storageType&&(a.storageType=n.storageType),a.updateMiddleWares(n.middleWares),a.updateStore(t)}function c(t){var n=Object(r.useContext)(o),e=n.state,i=n.setState;return Object(r.useMemo)((function(){return{actions:t?Object.entries(t).reduce((function(t,n){var e;return Object.assign({},t,((e={})[n[0]]=function(t,n){return function(e){a.state=n(a.state,e),a.storageType.setItem(a.name,JSON.stringify(a.state)),a.middleWares.length&&(a.state=a.middleWares.reduce((function(t,n){return n(t)||t}),a.state)),t(a.state)}}(i,n[1]),e))}),{}):{},state:e}}),[e,i,t])}},156:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return s}));var r=e(149),a=e(148),o=e(150);function i(){var t=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n  color: ",";\n"]);return i=function(){return t},t}function u(){var t=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return u=function(){return t},t}function c(){var t=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return c=function(){return t},t}var l=Object(a.css)(c()),d=a.default.div(u(),l,(function(t){return t.dark?o.a.darkBlack:o.a.black}),(function(t){return t.fontSize?"font-size: ".concat(t.fontSize,";"):""})),s=a.default.div(i(),o.a.darkBlack)},157:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e(151),a=e(36),o=e(169),i=e(3),u=e.n(i),c=e(149),l=e(148),d=e(150);function s(){var t=Object(c.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return s=function(){return t},t}var f=l.default.button(s(),(function(t){var n=t.dark,e=t.disabled?d.a.purple_50:d.a.purple;return n?"\n    background-color: ".concat(e,";\n    color: ").concat(d.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(d.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),p=u.a.memo((function(t){var n=t.children,e=Object(o.a)(t,["children"]);return Object(a.jsx)(f,Object(r.a)(Object(r.a)({type:"button"},e),{},{children:n}))}))},160:function(t,n,e){"use strict";var r=e(3),a=e.n(r),o=e(183);n.a=function(){var t=a.a.useContext(o.a),n=t.title,e=t.setTitle,r=t.subtitle,i=t.setSubtitle,u=t.type,c=t.setType,l=t.logoSize,d=t.setLogoSize,s=t.setDoGoBack;return{title:n,setTitle:e,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:d,doGoBack:t.doGoBack,setDoGoBack:s}}},161:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},162:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var r=e(152),a=e(151);function o(t){return function(n,e){return Object(a.a)(Object(a.a)({},n),{},Object(r.a)({},t,Object(a.a)(Object(a.a)({},n[t]),e)))}}function i(){return function(t){return{welcome:{language:t.welcome.language}}}}},165:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(36),a=e(3),o=e.n(a),i=e(157),u=e(149);function c(){var t=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return t},t}var l=e(148).default.div(c(),(function(t){return"calc(100% - ".concat(2*t.theme.layout.generalPaddingAmount,"px)")}),(function(t){return t.theme.breakpoints.tablet})),d=o.a.memo((function(t){var n=t.invert,e=void 0!==n&&n,a=t.leftLabel,o=t.leftDisabled,u=t.leftHandler,c=t.rightLabel,d=t.rightDisabled,s=t.rightHandler;return Object(r.jsxs)(l,{children:[Object(r.jsx)(i.a,{dark:e,disabled:o,onClick:u,children:a}),c&&s&&Object(r.jsx)(i.a,{dark:!e,disabled:d,onClick:s,children:c})]})})),s=o.a.memo(d)},214:function(t,n,e){"use strict";e.r(n),e.d(n,"MainContainer",(function(){return L})),e.d(n,"Title",(function(){return z})),e.d(n,"Text",(function(){return M})),e.d(n,"TextAddFile",(function(){return B})),e.d(n,"TextFileConstraints",(function(){return _})),e.d(n,"TextErrorContainer",(function(){return D})),e.d(n,"UploadContainer",(function(){return U})),e.d(n,"UploadInput",(function(){return P})),e.d(n,"UploadButton",(function(){return W})),e.d(n,"ArrowUp",(function(){return A})),e.d(n,"CloudsSVG",(function(){return G}));var r=e(149),a=e(148),o=e(150),i=e(156),u=e(3);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var d=u.createElement("path",{d:"M166.609 94.6731C166.611 91.0315 165.894 87.4254 164.502 84.0606C163.109 80.6959 161.067 77.6385 158.492 75.063C155.917 72.4876 152.86 70.4445 149.495 69.0507C146.13 67.6568 142.524 66.9394 138.882 66.9394C137.294 66.94 135.71 67.079 134.146 67.3547C134.166 56.8902 130.027 46.8467 122.64 39.4335C115.253 32.0204 105.223 27.8449 94.7569 27.8256C84.2909 27.8064 74.2459 31.9449 66.8317 39.3307C59.4175 46.7166 55.2414 56.7449 55.2221 67.2093C53.9521 67.0353 52.672 66.9451 51.3901 66.9394C44.1573 66.9086 37.1987 69.705 31.9989 74.7319C26.799 79.7588 23.7696 86.6183 23.5569 93.8471C23.3442 101.076 25.965 108.102 30.8602 113.425C35.7554 118.749 42.5375 121.95 49.7597 122.344H140.585C147.631 121.911 154.246 118.807 159.081 113.665C163.917 108.523 166.609 101.731 166.609 94.6731Z",fill:"#D5E4FF"}),s=u.createElement("path",{d:"M197 38.8013C197.007 36.4261 196.493 34.0783 195.494 31.9232C194.495 29.7681 193.036 27.8581 191.219 26.3277C189.403 24.7973 187.272 23.6837 184.979 23.0654C182.685 22.4471 180.284 22.339 177.944 22.7488C177.827 16.6826 175.337 10.9037 171.009 6.65113C166.681 2.39858 160.858 0.0109033 154.79 3.72496e-05C148.722 -0.0108288 142.891 2.35598 138.548 6.593C134.204 10.83 131.694 16.6 131.555 22.6657C130.809 22.5576 130.056 22.5021 129.302 22.4996C125.066 22.5049 121 24.1578 117.962 27.1082C114.924 30.0587 113.154 34.0753 113.026 38.3078C112.897 42.5403 114.421 46.6567 117.275 49.7855C120.129 52.9144 124.088 54.8102 128.315 55.0718H181.703C185.844 54.8131 189.731 52.9865 192.573 49.9639C195.414 46.9413 196.997 42.9497 197 38.8013Z",fill:"#EAF1FF"}),f=u.createElement("path",{d:"M47.3115 91.1833C47.3115 88.7461 46.3432 86.4088 44.6197 84.6855C42.8961 82.9622 40.5585 81.9941 38.121 81.9941C37.5953 81.9913 37.0704 82.0364 36.5529 82.129C36.5529 78.662 35.1754 75.337 32.7235 72.8854C30.2715 70.4338 26.946 69.0565 23.4785 69.0565C20.0109 69.0565 16.6854 70.4338 14.2334 72.8854C11.7815 75.337 10.404 78.662 10.404 82.129C9.98039 82.0749 9.55377 82.0471 9.12669 82.046C6.74799 82.0625 4.46834 83.0005 2.76706 84.6628C1.06577 86.3252 0.0754078 88.5823 0.00413104 90.9596C-0.0671457 93.3369 0.786245 95.6493 2.38488 97.4105C3.98352 99.1718 6.20286 100.245 8.57629 100.404H38.6922C41.0347 100.258 43.2327 99.2214 44.8354 97.507C46.4381 95.7925 47.324 93.53 47.3115 91.1833Z",fill:"#B1CDFF"});function p(t,n){var e=t.title,r=t.titleId,a=l(t,["title","titleId"]);return u.createElement("svg",c({viewBox:"0 0 197 123",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?u.createElement("title",{id:r},e):null,d,s,f)}var b=u.forwardRef(p);e.p;function m(){return(m=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function h(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var v=u.createElement("path",{d:"M20 33.4749V6.52485",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"}),g=u.createElement("path",{d:"M8.97504 17.5499L20 6.52493L31.025 17.5499",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"});function j(t,n){var e=t.title,r=t.titleId,a=h(t,["title","titleId"]);return u.createElement("svg",m({viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?u.createElement("title",{id:r},e):null,v,g)}var O=u.forwardRef(j);e.p;function x(){var t=Object(r.a)(["\n  width: 197px;\n  height: 122px;\n  margin: 0 auto;\n  margin-top: 110px;\n  display: block;\n\n  @media screen and (",") {\n    width: 374px;\n    height: 299px;\n  }\n"]);return x=function(){return t},t}function C(){var t=Object(r.a)(["\n  width: 39px;\n  height: 39px;\n  position: absolute; \n  bottom: 55%;\n  pointer-events: none;\n\n  @media screen and (",") {\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    bottom: 60%;\n  } \n"]);return C=function(){return t},t}function y(){var t=Object(r.a)(["\n  width: 98px;\n  height: 98px;\n  background-color: #EBF1FC;\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n  margin-top: -40%;\n\n  @media screen and (",") {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 30px;\n  }\n"]);return y=function(){return t},t}function w(){var t=Object(r.a)(["\n  display: none;\n"]);return w=function(){return t},t}function k(){var t=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  margin: 0 auto;\n  position: relative;\n"]);return k=function(){return t},t}function S(){var t=Object(r.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: 'flex';\n  height: 50px;\n"]);return S=function(){return t},t}function E(){var t=Object(r.a)(["\n  text-align: center;\n  line-height: 24px;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 1rem;\n    margin-top: 20px;\n  }\n"]);return E=function(){return t},t}function R(){var t=Object(r.a)(["\n  text-align: center;\n  line-height: 24px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n  }\n"]);return R=function(){return t},t}function T(){var t=Object(r.a)(["\n  margin-bottom: 125px;\n  color: ",";\n\n  @media screen and (",") {\n    @media (orientation: portrait) {\n      margin-bottom: 185px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return T=function(){return t},t}function F(){var t=Object(r.a)(["\n  margin-top: 65px;\n  margin-bottom: 16px;\n  margin-left: 20px;\n\n"]);return F=function(){return t},t}function I(){var t=Object(r.a)(["\n  @media screen and (",") {\n    margin-bottom: 64px;\n  }\n"]);return I=function(){return t},t}var L=a.default.div(I(),(function(t){return t.theme.breakpoints.tablet})),z=Object(a.default)(i.a)(F()),M=Object(a.default)(i.b)(T(),(function(t){return t.theme.colors.darkGray_70}),(function(t){return t.theme.breakpoints.tablet})),B=Object(a.default)(i.b).attrs({dark:!0,fontSize:"1rem"})(R(),(function(t){return t.theme.breakpoints.tablet})),_=Object(a.default)(i.b).attrs({dark:!0,fontSize:"0.625rem"})(E(),(function(t){return t.theme.colors.darkGray}),(function(t){return t.theme.breakpoints.tablet})),D=a.default.div(S(),o.a.red),U=a.default.div(k()),P=a.default.input(w()),W=a.default.label(y(),(function(t){return t.theme.breakpoints.tablet})),A=Object(a.default)(O)(C(),(function(t){return t.theme.breakpoints.tablet})),G=Object(a.default)(b)(x(),(function(t){return t.theme.breakpoints.tablet}))},237:function(t,n,e){"use strict";e.r(n);var r=e(36),a=e(152),o=e(153),i=e(163),u=e.n(i),c=e(164),l=e(3),d=e.n(l),s=e(166),f=e(192),p=e.n(f),b=e(851),m=e(202),h=e(155),v=e(209),g=e(211),j=e(235),O=e(165),x=e(160),C=e(162),y=e(161),w=e(214),k="audio/wav,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/mp3,audio/ogg";k.concat(j.isSafari||j.isIOS?"":"audio/flac");var S=g.b({uploadedFile:g.a().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(function(t){return t?t.size<=5*Math.pow(1024,3):!!t})).test("fileDuration","ERROR.FILE_DURATION",function(){var t=Object(c.a)(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return e=n,(r=new Audio(URL.createObjectURL(e))).load(),t.next=6,new Promise((function(t){return r.addEventListener("loadedmetadata",t)}));case 6:return t.abrupt("return",r.duration>=3);case 7:return t.abrupt("return",!!n);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}).defined(),E=function(t){var n,e=t.storeKey,i=t.previousStep,u=t.nextStep,c=t.metadata,f=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,g=Object(x.a)(),j=g.setDoGoBack,E=g.setTitle,R=g.setSubtitle,T=g.setType,F=Object(s.g)(),I=Object(h.c)({updateAction:Object(C.b)(e)}),L=I.state,z=I.actions,M=Object(m.c)({mode:"onChange",defaultValues:null===L||void 0===L||null===(n=L[e])||void 0===n?void 0:n[null===c||void 0===c?void 0:c.currentLogic],resolver:Object(v.yupResolver)(S)}).control,B=Object(b.a)().t,_=d.a.useState(!0),D=Object(o.a)(_,2),U=D[0],P=D[1],W=d.a.useState(""),A=Object(o.a)(W,2),G=A[0],H=A[1],Z=Object(l.useRef)(null),J=d.a.useCallback((function(t){u&&(z.updateAction(Object(a.a)({},null===c||void 0===c?void 0:c.currentLogic,{recordingFile:null,uploadedFile:t})),P(!1),F.push(u,{from:"step-manual-upload"}))}),[u,z,c,F]),V=d.a.useCallback((function(){P(!1),i?F.push(i):F.goBack()}),[F,i]),N=d.a.useCallback((function(t){S.validate({uploadedFile:t}).then((function(){J(t)})).catch((function(t){"ERROR.FILE_SIZE"===t.errors[0]&&H(B("recordingsRecordManual:fileSizeTooBig")),"ERROR.FILE_REQUIRED"===t.errors[0]?H(B("recordingsRecordManual:fileRequired")):H(B("recordingsRecordManual:fileDurationTooShort"))}))}),[J,B]);return Object(l.useEffect)((function(){Object(y.a)(),E(B("recordingsRecordManual:header")),R(""),T("shapeUp"),j((function(){return V}))}),[V,j,T,R,E,B]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(w.MainContainer,{children:[Object(r.jsx)(w.Title,{children:B("recordingsRecordManual:micError")}),Object(r.jsx)(w.CloudsSVG,{}),Object(r.jsx)(m.a,{control:M,name:"uploadedFile",render:function(t){var n=t.name;return Object(r.jsxs)(w.UploadContainer,{children:[Object(r.jsx)(w.UploadButton,{htmlFor:"uploaded-file"}),Object(r.jsx)(w.ArrowUp,{}),Object(r.jsx)(w.UploadInput,{ref:Z,id:"uploaded-file",type:"file",name:n,accept:k,onChange:function(t){var n;return N(null===(n=t.currentTarget.files)||void 0===n?void 0:n[0])}})]})}})]}),Object(r.jsx)(w.TextErrorContainer,{children:G}),U&&Object(r.jsx)(f,{children:Object(r.jsx)(O.a,{invert:!0,leftLabel:B("recordingsRecordManual:uploadFile"),leftHandler:function(){var t;return null===(t=Z.current)||void 0===t?void 0:t.click()}})})]})};n.default=d.a.memo(E)}}]);
//# sourceMappingURL=21.774bca5b.chunk.js.map