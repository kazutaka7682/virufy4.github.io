(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[11],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n(6),o=new(function(){function e(e){void 0===e&&(e="__LSM__"),this.name=e,this.state={},this.middleWares=[],this.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:{}}var t=e.prototype;return t.updateStore=function(e){this.state=function(e,t){try{return JSON.parse(e.getItem(t))}catch(e){return null}}(this.storageType,this.name)||e},t.updateMiddleWares=function(e){return this.middleWares=e},e}()),a=Object(r.createContext)(void 0),i=function(e){var t=e.children,n=Object(r.useState)(o.state);return Object(r.createElement)(a.Provider,{value:{state:n[0],setState:n[1]}},t)};function c(e,t){void 0===t&&(t={name:"__LSM__",middleWares:[]}),t.name&&(o.name=t.name),t.storageType&&(o.storageType=t.storageType),o.updateMiddleWares(t.middleWares),o.updateStore(e)}function s(e){var t=Object(r.useContext)(a),n=t.state,i=t.setState;return Object(r.useMemo)((function(){return{actions:e?Object.entries(e).reduce((function(e,t){var n;return Object.assign({},e,((n={})[t[0]]=function(e,t){return function(n){o.state=t(o.state,n),o.storageType.setItem(o.name,JSON.stringify(o.state)),o.middleWares.length&&(o.state=o.middleWares.reduce((function(e,t){return t(e)||e}),o.state)),e(o.state)}}(i,t[1]),n))}),{}):{},state:n}}),[n,i,e])}},173:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(199);t.a=function(){var e=o.a.useContext(a.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,c=e.type,s=e.setType,u=e.logoSize,l=e.setLogoSize,p=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:c,setType:s,logoSize:u,setLogoSize:l,doGoBack:e.doGoBack,setDoGoBack:p}}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(169),o=n(37),a=n(182),i=n(6),c=n.n(i),s=n(166),u=n(165),l=n(167);function p(){var e=Object(s.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return p=function(){return e},e}var d=u.default.button(p(),(function(e){var t=e.dark,n=e.disabled?l.a.purple_50:l.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=c.a.memo((function(e){var t=e.children,n=Object(a.a)(e,["children"]);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({type:"button"},n),{},{children:t}))}))},181:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(172),o=n(169);function a(e){return function(t,n){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,Object(o.a)(Object(o.a)({},t[e]),n)))}}function i(){return function(e){return{welcome:{language:e.welcome.language}}}}},188:function(e,t,n){var r=n(54);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},189:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},190:function(e,t,n){e.exports={parse:n(191),stringify:n(194)}},191:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(192),a=Object.create?Object.create(null):{};function i(e,t,n,r,o){var a=t.indexOf("<",r),i=t.slice(r,-1===a?void 0:a);/^\s*$/.test(i)&&(i=" "),(!o&&a>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,c=[],s=-1,u=[],l={},p=!1;return e.replace(r,(function(r,a){if(p){if(r!=="</"+n.name+">")return;p=!1}var d,f="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),b=a+r.length,h=e.charAt(b);f&&!m&&(s++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||i(n.children,e,s,b,t.ignoreWhitespace),l[n.tagName]=n,0===s&&c.push(n),(d=u[s-1])&&d.children.push(n),u[s]=n),(m||!f||n.voidElement)&&(m||s--,!p&&"<"!==h&&h&&i(d=-1===s?c:u[s].children,e,s,b,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},192:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(193);e.exports=function(e){var t,n=0,a=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,a=!1})),i}},193:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},194:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(188),o=n.n(r),a=n(189),i=n.n(a),c=n(7),s=n.n(c),u=n(6),l=n.n(u),p=n(190),d=n.n(p),f=n(153),m=n(210);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function j(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t){if(!e)return"";var n="",r=g(e),a=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(l.a.isValidElement(e)){var c=Object.keys(e.props).length,s=a.indexOf(e.type)>-1,u=e.props.children;if(!u&&s&&0===c)n+="<".concat(e.type,"/>");else if(u||s&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(s&&1===c&&"string"===typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var p=O(u,t);n+="<".concat(r,">").concat(p,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if("object"===i()(e)){var d=e.format,f=o()(e,["format"]),b=Object.keys(f);if(1===b.length){var h=d?"".concat(b[0],", ").concat(d):b[0];n+="{{".concat(h,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function v(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(y(t)?e(j(t)):"object"!==i()(t)||l.a.isValidElement(t)||Object.assign(s,t))}))}(e);var u=n.services.interpolator.interpolate(t,h(h({},s),o),n.language),p=d.a.parse("<0>".concat(u,"</0>"));function f(e,t,n){var r=j(e),o=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r,o){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,h(h({},e.props),{},{key:r}),o?void 0:t))}function b(t,n,o){var s=g(t);return g(n).reduce((function(t,n,u){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=s[parseInt(n.name,10)];!d&&1===o.length&&o[0][n.name]&&(d=o[0][n.name]),d||(d={});var j=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=l.a.isValidElement(j),O=g&&y(n,!0)&&!n.voidElement,v=c&&"object"===i()(j)&&j.dummy&&!g,x="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof j)t.push(j);else if(y(j)||O){m(j,f(j,n,o),t,u)}else if(v){var k=b(s,n.children,o);t.push(l.a.cloneElement(j,h(h({},j.props),{},{key:u}),k))}else if(Number.isNaN(parseFloat(n.name))){if(x)m(j,f(j,n,o),t,u,n.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var S=b(s,n.children,o);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},S))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var w=b(s,n.children,o);t.push("<".concat(n.name,">").concat(w,"</").concat(n.name,">"))}}else if("object"!==i()(j)||g)1===n.children.length&&p?t.push(l.a.cloneElement(j,h(h({},j.props),{},{key:u}),p)):t.push(l.a.cloneElement(j,h(h({},j.props),{},{key:u})));else{var E=n.children[0]?p:null;E&&t.push(E)}}else"text"===n.type&&t.push(n.content);return t}),[])}return j(b([{dummy:!0,children:e}],p,g(e||[]))[0])}function x(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,i=e.tOptions,c=void 0===i?{}:i,s=e.values,p=e.defaults,d=e.components,b=e.ns,y=e.i18n,j=e.t,g=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(u.useContext)(f.a)||{},k=x.i18n,S=x.defaultNS,w=y||k||Object(f.d)();if(!w)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var E=j||w.t.bind(w)||function(e){return e},T=h(h({},Object(f.c)()),w.options&&w.options.react),C=b||E.ns||S||w.options&&w.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var P=p||O(t,T)||T.transEmptyNodeValue||a,N=T.hashTransKey,M=a||(N?N(P):P),R=s?c.interpolation:{interpolation:h(h({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},B=h(h(h(h({},c),{},{count:n},s),R),{},{defaultValue:P,ns:C}),I=v(d||t,M?E(M,B):P,w,T,B),W=void 0!==r?r:T.defaultTransParent;return W?l.a.createElement(W,g,I):I}},287:function(e,t,n){"use strict";n.r(t);var r=n(37),o=n(170),a=n(6),i=n.n(a),c=n(844),s=n(229),u=n(171);var l=n(169),p=n(182),d=n(407),f=n.n(d),m=n(180),b=n(166),h=n(165);function y(){var e=Object(b.a)(["\n  font-size: 14px;\n  margin-bottom: 17px;\n"]);return y=function(){return e},e}function j(){var e=Object(b.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 17px;\n"]);return j=function(){return e},e}function g(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  @media screen and (",") {\n    height: 100%;\n    max-width: 400px;\n    margin: auto;\n"]);return g=function(){return e},e}var O=h.default.div(g(),(function(e){return e.theme.breakpoints.tablet})),v=h.default.div(j()),x=h.default.div(y());f.a.setAppElement("#root");var k=i.a.memo((function(e){var t=e.isOpen,n=e.modalTitle,o=e.children,a=e.toggle,c=e.onConfirm,s=Object(p.a)(e,["isOpen","modalTitle","children","toggle","onConfirm"]),u=i.a.useCallback((function(){null===c||void 0===c||c(),a()}),[c,a]);return Object(r.jsx)(f.a,Object(l.a)(Object(l.a)({},s),{},{isOpen:t,onRequestClose:a,style:{content:{minHeight:"328px",maxWidth:"768px",margin:"auto",top:"60%",bottom:"0px",right:"0px",left:"0px",backgroundColor:"#EBF1FC",borderRadius:"70px 70px 0px 0px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)"}},children:Object(r.jsxs)(O,{className:"ModalBody",children:[Object(r.jsx)(v,{children:n}),Object(r.jsx)(x,{children:o}),Object(r.jsx)(m.a,{onClick:u,dark:!0,children:"OK"})]})}))})),S=n(181),w=n(173),E=n(174),T=n(330),C=function(){var e=Object(w.a)(),t=e.setDoGoBack,n=e.setTitle,a=e.setSubtitle,l=e.setType,p=Object(c.a)().t,d=Object(u.c)({resetStore:Object(S.a)()}).actions,f=i.a.useState(!0),m=Object(o.a)(f,2),b=m[0],h=m[1],y=function(){var e=i.a.useState(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return{isOpen:n,openModal:i.a.useCallback((function(){r(!0)}),[]),closeModal:i.a.useCallback((function(){r(!1)}),[]),toggleModal:i.a.useCallback((function(){r((function(e){return!e}))}),[])}}(),j=y.isOpen,g=y.openModal,O=y.closeModal;i.a.useEffect((function(){var e=document&&document.getElementById("footer-report-problems");e&&(e.style.display=b?"none":"flex")}),[b]),i.a.useEffect((function(){Object(E.a)(),n(""),t((function(){}));var e=setTimeout((function(){h(!1),d.resetStore({})}),5e3);return function(){clearTimeout(e)}}),[]),i.a.useEffect((function(){b?(a(""),l("noShape")):(a("".concat(p("predictionResult:result"))),l("shapeUp"),g())}),[b]);return Object(r.jsx)(r.Fragment,{children:b?Object(r.jsxs)(T.ProcessingContainer,{children:[Object(r.jsx)(T.Title,{children:p("predictionResult:processingTitle")}),Object(r.jsx)(T.ImageProcessing,{})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{isOpen:j,modalTitle:p("predictionResult:note"),toggle:O,onConfirm:O,children:Object(r.jsx)(s.a,{i18nKey:"predictionResult:resultModal",children:"This app will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsiblity to seek medical advice from your doctor."})}),Object(r.jsxs)(T.PredictionResultContainer,{children:[!1,Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.TitleResult,{color:"#C0B81E",children:p("predictionResult:resultNotAnalyze")}),Object(r.jsx)(T.IntroText,{children:Object(r.jsxs)(s.a,{i18nKey:"predictionResult:resultNotAnalyzeText",children:["Our algorithm is not able to determine your COVID-19 status. Please",Object(r.jsx)("strong",{children:"continue to take appropriate measures"})," based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily."]})}),Object(r.jsx)(T.ImagePredictionResult,{})]}),!1]})]})})};t.default=i.a.memo(C)}}]);
//# sourceMappingURL=11.ecb6c555.chunk.js.map