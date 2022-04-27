(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[13],{208:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(238);t.a=function(){var e=o.a.useContext(a.a),t=e.title,n=e.setTitle,r=e.subtitle,c=e.setSubtitle,i=e.type,u=e.setType,s=e.logoSize,l=e.setLogoSize,f=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:c,type:i,setType:u,logoSize:s,setLogoSize:l,doGoBack:e.doGoBack,setDoGoBack:f}}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},211:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(9),i=n(44),u=a(n(217));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,p=e.isOpen,d=void 0!==p&&p,m=e.onOpen,v=e.onClose,b=e.onPortalClick,h=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=u.default(),g=y.isServer,O=y.isBrowser,j=c.useState(d),E=j[0],w=j[1],k=c.useRef(E),S=c.useCallback((function(e){k.current=e,w(e)}),[]),x=c.useRef(),P=c.useRef(O?document.createElement("div"):null);c.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var C=c.useMemo((function(){if(!g)return f&&i.findDOMNode(f)||document.body}),[g,f]),T=function(e){if(!e)return{portal:P,targetEl:x,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=x,t.event=e;var n=e.currentTarget;return!x.current&&n&&n!==document&&(x.current=t.currentTarget),t},L=Object.entries(h).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(T(e))},e}),{}),D=c.useCallback((function(e){if(!g){var n=T(e);if(null==x.current)throw setTimeout((function(){return S(!0)}),0),Error(t.errorMessage1);m&&m(n),S(!0)}}),[g,P,S,x,m]),_=c.useCallback((function(e){if(!g){var t=T(e);v&&k.current&&v(t),k.current&&S(!1)}}),[g,v,S]),B=c.useCallback((function(e){return k.current?_(e):D(e)}),[_,D]),N=c.useCallback((function(e){return"Escape"===e.key&&l?_(e):void 0}),[l,_]),I=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!k.current||t(x)||a&&_(e)}),[g,_,a,P]),M=c.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=T(e);P.current.contains(t.target)&&b&&b(t),I(e)}}),[I]),R=c.useRef({});c.useEffect((function(){if(!g&&C instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return C.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(R.current[t]=function(e){return h[t](T(e))},document.addEventListener(n,R.current[t]))})),document.addEventListener("keydown",N),document.addEventListener("mousedown",M),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];h[t]&&(document.removeEventListener(n,R.current[t]),delete R.current[t])})),document.removeEventListener("keydown",N),document.removeEventListener("mousedown",M),C.removeChild(t)}}}),[g,I,N,C,P]);var W=c.useCallback((function(e){var t=e.children;return null!=P.current?i.createPortal(t,P.current):null}),[P]);return Object.assign([D,_,k.current,W,B,x,P],r(r({isOpen:k.current,openPortal:D,ref:x,closePortal:_,togglePortal:B,Portal:W,portalRef:P},L),{bind:r({ref:x},L)}))}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(9),o=n.n(r),a=n(227),c=n(205);function i(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return i=function(){return e},e}var u=n(204).default.div(i(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),s=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,c=e.leftDisabled,i=e.leftHandler,s=e.rightLabel,l=e.rightDisabled,f=e.rightHandler;return o.a.createElement(u,null,o.a.createElement(a.a,{dark:n,disabled:c,onClick:i},r),s&&f&&o.a.createElement(a.a,{dark:!n,disabled:l,onClick:f},s))})),l=o.a.memo(s)},217:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,c=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?a:c,l={isBrowser:s===a,isServer:s===c,isNative:s===i,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},p=f();t.weAreServer=function(){l.isServer=!0,p=f()},t.useSSR=function(){return p},t.default=t.useSSR},220:function(e,t,n){var r=n(78);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},221:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},222:function(e,t,n){e.exports={parse:n(223),stringify:n(226)}},223:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(224),a=Object.create?Object.create(null):{};function c(e,t,n,r,o){var a=t.indexOf("<",r),c=t.slice(r,-1===a?void 0:a);/^\s*$/.test(c)&&(c=" "),(!o&&a>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,i=[],u=-1,s=[],l={},f=!1;return e.replace(r,(function(r,a){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),v=a+r.length,b=e.charAt(v);d&&!m&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!b||"<"===b||c(n.children,e,u,v,t.ignoreWhitespace),l[n.tagName]=n,0===u&&i.push(n),(p=s[u-1])&&p.children.push(n),s[u]=n),(m||!d||n.voidElement)&&(m||u--,!f&&"<"!==b&&b&&c(p=-1===u?i:s[u].children,e,u,v,t.ignoreWhitespace))})),!i.length&&e.length&&c(i,e,0,0,t.ignoreWhitespace),i}},224:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(225);e.exports=function(e){var t,n=0,a=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,a=!1})),c}},225:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},226:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(234),o=n(9),a=n.n(o),c=n(205),i=n(204),u=n(219);function s(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return s=function(){return e},e}var l=i.default.button(s(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(l,Object.assign({type:"button"},n),t)}))},234:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(220),o=n.n(r),a=n(221),c=n.n(a),i=n(12),u=n.n(i),s=n(9),l=n.n(s),f=n(222),p=n.n(f),d=n(187),m=n(241);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(a.join("|")).test(t);if(!e&&!i)return[t];var u={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==c()(t)||l.a.isValidElement(t)||Object.assign(u,t))}))}(e);var s=n.services.interpolator.interpolate(t,b(b({},u),o),n.language),f=p.a.parse("<0>".concat(s,"</0>"));function d(e,t,n){var r=y(e),o=v(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,b(b({},e.props),{},{key:r}),t))}function v(t,n,o){var u=g(t);return g(n).reduce((function(t,n,s){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,g=l.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,j=i&&"object"===c()(y)&&y.dummy&&!g,E="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){m(y,d(y,n,o),t,s)}else if(j){var w=v(u,n.children,o);t.push(l.a.cloneElement(y,b(b({},y.props),{},{key:s}),w))}else if(Number.isNaN(parseFloat(n.name))){if(E)m(y,d(y,n,o),t,s);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var k=v(u,n.children,o);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},k))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var S=v(u,n.children,o);t.push("<".concat(n.name,">").concat(S,"</").concat(n.name,">"))}}else if("object"!==c()(y)||g)1===n.children.length&&f?t.push(l.a.cloneElement(y,b(b({},y.props),{},{key:s}),f)):t.push(l.a.cloneElement(y,b(b({},y.props),{},{key:s})));else{var x=n.children[0]?f:null;x&&t.push(x)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(v([{dummy:!0,children:e}],f,g(e||[]))[0])}function j(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,i=e.tOptions,u=e.values,f=e.defaults,p=e.components,v=e.ns,h=e.i18n,y=e.t,j=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),E=Object(s.useContext)(d.a)||{},w=E.i18n,k=E.defaultNS,S=h||w||Object(d.d)();if(!S)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var x=y||S.t.bind(S)||function(e){return e},P=b(b({},Object(d.c)()),S.options&&S.options.react),C=v||x.ns||k||S.options&&S.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",a=g(t),i=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(l.a.isValidElement(t)){var u=Object.keys(t.props).length,s=i.indexOf(t.type)>-1,f=t.props.children;if(!f&&s&&0===u)r+="<".concat(t.type,"/>");else if(f||s&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(s&&1===u&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(a,">").concat(p,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===c()(t)){var d=t.format,v=o()(t,["format"]),b=Object.keys(v);if(1===b.length){var h=d?"".concat(b[0],", ").concat(d):b[0];r+="{{".concat(h,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,P)||P.transEmptyNodeValue||a,L=P.hashTransKey,D=a||(L?L(T):T),_=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},B=b(b(b(b({},i),{},{count:n},u),_),{},{defaultValue:T,ns:C}),N=O(p||t,D?x(D,B):T,S,P,B),I=void 0!==r?r:P.defaultTransParent;return I?l.a.createElement(I,j,N):N}},352:function(e,t,n){"use strict";n.r(t);var r=n(206),o=n(9),a=n.n(o),c=n(244),i=n(211),u=n.n(i),s=n(248),l=n(846),f=n(247),p=n(208),d=n(215),m=n(243),v=n(209),b=n(261),h=["Please use your own device and wear a mask when appropriate.","Disinfect your device and any affected or nearby surfaces after recording your cough/speech.","If you have an underlying condition that increases your risk from coughing, please check with your health care provider before participating.","If you feel your symptoms are getting worse, please contact your local medical response."];t.default=a.a.memo((function(e){var t=u()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(o.useState)(!0),i=Object(r.a)(n,2),y=i[0],g=i[1],O=Object(p.a)(),j=O.setType,E=O.setSubtitle,w=O.setDoGoBack,k=O.setTitle,S=O.title,x=Object(c.g)(),P=a.a.useCallback((function(){e.nextStep&&x.push(e.nextStep)}),[x,e.nextStep]),C=Object(o.useCallback)((function(){e.previousStep?(g(!1),x.push(e.previousStep)):x.goBack()}),[]);Object(o.useEffect)((function(){S&&k("")}),[S]);var T=Object(l.a)().t;Object(o.useEffect)((function(){Object(v.a)(),w((function(){return C})),j("secondary"),E(T("beforeStart:title"))}),[C,w,j,E,T]);var L=T("beforeStart:advise_list",{returnObjects:!0,defaultValue:h});return a.a.createElement(b.WelcomeStyledFormAlternative,null,a.a.createElement(b.ContainerShapeDown,{isMobile:s.isMobile},a.a.createElement(b.InnerContainerShapeDown,null,a.a.createElement(m.a,null,a.a.createElement(f.a,{i18nKey:"beforeStart:subtitle"},a.a.createElement("strong",null,"To ensure safety, we advise you to:"))))),a.a.createElement(b.WelcomeContent,{mt:20},a.a.createElement(b.WelcomeItemList,null,L.map((function(e,t){return a.a.createElement(b.WelcomeItemListItem,{key:"advise_".concat(t)},e)}))),y&&a.a.createElement(t,null,a.a.createElement(d.a,{leftLabel:T("beforeStart:startButton"),leftHandler:P,invert:!0}))))}))}}]);
//# sourceMappingURL=13.ac87777a.chunk.js.map