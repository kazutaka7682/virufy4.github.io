(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[8],{173:function(e,t,n){"use strict";var r=n(6),o=n.n(r),i=n(199);t.a=function(){var e=o.a.useContext(i.a),t=e.title,n=e.setTitle,r=e.subtitle,c=e.setSubtitle,a=e.type,s=e.setType,u=e.logoSize,l=e.setLogoSize,f=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:c,type:a,setType:s,logoSize:u,setLogoSize:l,doGoBack:e.doGoBack,setDoGoBack:f}}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(169),o=n(37),i=n(182),c=n(6),a=n.n(c),s=n(166),u=n(165),l=n(167);function f(){var e=Object(s.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return f=function(){return e},e}var d=u.default.button(f(),(function(e){var t=e.dark,n=e.disabled?l.a.purple_50:l.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(l.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(l.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),p=a.a.memo((function(e){var t=e.children,n=Object(i.a)(e,["children"]);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({type:"button"},n),{},{children:t}))}))},182:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},188:function(e,t,n){var r=n(54);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},189:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},190:function(e,t,n){e.exports={parse:n(191),stringify:n(194)}},191:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(192),i=Object.create?Object.create(null):{};function c(e,t,n,r,o){var i=t.indexOf("<",r),c=t.slice(r,-1===i?void 0:i);/^\s*$/.test(c)&&(c=" "),(!o&&i>-1&&n+e.length>=0||" "!==c)&&e.push({type:"text",content:c})}e.exports=function(e,t){t||(t={}),t.components||(t.components=i);var n,a=[],s=-1,u=[],l={},f=!1;return e.replace(r,(function(r,i){if(f){if(r!=="</"+n.name+">")return;f=!1}var d,p="/"!==r.charAt(1),h=0===r.indexOf("\x3c!--"),b=i+r.length,m=e.charAt(b);p&&!h&&(s++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!m||"<"===m||c(n.children,e,s,b,t.ignoreWhitespace),l[n.tagName]=n,0===s&&a.push(n),(d=u[s-1])&&d.children.push(n),u[s]=n),(h||!p||n.voidElement)&&(h||s--,!f&&"<"!==m&&m&&c(d=-1===s?a:u[s].children,e,s,b,t.ignoreWhitespace))})),!a.length&&e.length&&c(a,e,0,0,t.ignoreWhitespace),a}},192:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(193);e.exports=function(e){var t,n=0,i=!0,c={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return i=!0,void n++;i?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(c.voidElement=!0),c.name=r):(c.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(c.attrs[t]=t),t=r),n++,i=!1})),c}},193:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},194:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(37),o=n(6),i=n.n(o),c=n(180),a=n(166);function s(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}var u=n(165).default.div(s(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=i.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,o=e.leftLabel,i=e.leftDisabled,a=e.leftHandler,s=e.rightLabel,l=e.rightDisabled,f=e.rightHandler;return Object(r.jsxs)(u,{children:[Object(r.jsx)(c.a,{dark:n,disabled:i,onClick:a,children:o}),s&&f&&Object(r.jsx)(c.a,{dark:!n,disabled:l,onClick:f,children:s})]})})),f=i.a.memo(l)},198:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),a=n(24),s=i(n(202));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,i=void 0===n||n,u=e.closeOnEsc,l=void 0===u||u,f=e.bindTo,d=e.isOpen,p=void 0!==d&&d,h=e.onOpen,b=e.onClose,m=e.onPortalClick,v=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=s.default(),g=y.isServer,O=y.isBrowser,j=c.useState(p),x=j[0],w=j[1],k=c.useRef(x),E=c.useCallback((function(e){k.current=e,w(e)}),[]),S=c.useRef(),P=c.useRef(O?document.createElement("div"):null);c.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var C=c.useMemo((function(){if(!g)return f&&a.findDOMNode(f)||document.body}),[g,f]),B=function(e){if(!e)return{portal:P,targetEl:S,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=S,t.event=e;var n=e.currentTarget;return!S.current&&n&&n!==document&&(S.current=t.currentTarget),t},T=Object.entries(v).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(B(e))},e}),{}),D=c.useCallback((function(e){if(!g){var n=B(e);if(null==S.current)throw setTimeout((function(){return E(!0)}),0),Error(t.errorMessage1);h&&h(n),E(!0)}}),[g,P,E,S,h]),_=c.useCallback((function(e){if(!g){var t=B(e);b&&k.current&&b(t),k.current&&E(!1)}}),[g,b,E]),L=c.useCallback((function(e){return k.current?_(e):D(e)}),[_,D]),N=c.useCallback((function(e){return"Escape"===e.key&&l?_(e):void 0}),[l,_]),V=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!k.current||t(S)||i&&_(e)}),[g,_,i,P]),A=c.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=B(e);P.current.contains(t.target)&&m&&m(t),V(e)}}),[V]),I=c.useRef({});c.useEffect((function(){if(!g&&C instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return C.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(I.current[t]=function(e){return v[t](B(e))},document.addEventListener(n,I.current[t]))})),document.addEventListener("keydown",N),document.addEventListener("mousedown",A),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(document.removeEventListener(n,I.current[t]),delete I.current[t])})),document.removeEventListener("keydown",N),document.removeEventListener("mousedown",A),C.removeChild(t)}}}),[g,V,N,C,P]);var M=c.useCallback((function(e){var t=e.children;return null!=P.current?a.createPortal(t,P.current):null}),[P]);return Object.assign([D,_,k.current,M,L,S,P],r(r({isOpen:k.current,openPortal:D,ref:S,closePortal:_,togglePortal:L,Portal:M,portalRef:P},T),{bind:r({ref:S},T)}))}},202:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var i=r.Browser,c=r.Server,a=r.Native,s=!("undefined"===typeof window||!window.document||!window.document.createElement),u="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:s?i:c,l={isBrowser:u===i,isServer:u===c,isNative:u===a,device:u,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:u===i&&!!window.addEventListener,canUseViewport:u===i&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(188),o=n.n(r),i=n(189),c=n.n(i),a=n(7),s=n.n(a),u=n(6),l=n.n(u),f=n(190),d=n.n(f),p=n(153),h=n(210);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t){if(!e)return"";var n="",r=g(e),i=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(l.a.isValidElement(e)){var a=Object.keys(e.props).length,s=i.indexOf(e.type)>-1,u=e.props.children;if(!u&&s&&0===a)n+="<".concat(e.type,"/>");else if(u||s&&0===a)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(s&&1===a&&"string"===typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var f=O(u,t);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if("object"===c()(e)){var d=e.format,p=o()(e,["format"]),b=Object.keys(p);if(1===b.length){var m=d?"".concat(b[0],", ").concat(d):b[0];n+="{{".concat(m,"}}")}else Object(h.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(h.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function j(e,t,n,r,o){if(""===t)return[];var i=r.transKeepBasicHtmlNodesFor||[],a=t&&new RegExp(i.join("|")).test(t);if(!e&&!a)return[t];var s={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(v(t)?e(y(t)):"object"!==c()(t)||l.a.isValidElement(t)||Object.assign(s,t))}))}(e);var u=n.services.interpolator.interpolate(t,m(m({},s),o),n.language),f=d.a.parse("<0>".concat(u,"</0>"));function p(e,t,n){var r=y(e),o=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function h(e,t,n,r,o){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,m(m({},e.props),{},{key:r}),o?void 0:t))}function b(t,n,o){var s=g(t);return g(n).reduce((function(t,n,u){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=s[parseInt(n.name,10)];!d&&1===o.length&&o[0][n.name]&&(d=o[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=m({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=l.a.isValidElement(y),O=g&&v(n,!0)&&!n.voidElement,j=a&&"object"===c()(y)&&y.dummy&&!g,x="object"===c()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(v(y)||O){h(y,p(y,n,o),t,u)}else if(j){var w=b(s,n.children,o);t.push(l.a.cloneElement(y,m(m({},y.props),{},{key:u}),w))}else if(Number.isNaN(parseFloat(n.name))){if(x)h(y,p(y,n,o),t,u,n.voidElement);else if(r.transSupportBasicHtmlNodes&&i.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var k=b(s,n.children,o);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},k))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var E=b(s,n.children,o);t.push("<".concat(n.name,">").concat(E,"</").concat(n.name,">"))}}else if("object"!==c()(y)||g)1===n.children.length&&f?t.push(l.a.cloneElement(y,m(m({},y.props),{},{key:u}),f)):t.push(l.a.cloneElement(y,m(m({},y.props),{},{key:u})));else{var S=n.children[0]?f:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(b([{dummy:!0,children:e}],f,g(e||[]))[0])}function x(e){var t=e.children,n=e.count,r=e.parent,i=e.i18nKey,c=e.tOptions,a=void 0===c?{}:c,s=e.values,f=e.defaults,d=e.components,b=e.ns,v=e.i18n,y=e.t,g=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),x=Object(u.useContext)(p.a)||{},w=x.i18n,k=x.defaultNS,E=v||w||Object(p.d)();if(!E)return Object(h.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=y||E.t.bind(E)||function(e){return e},P=m(m({},Object(p.c)()),E.options&&E.options.react),C=b||S.ns||k||E.options&&E.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var B=f||O(t,P)||P.transEmptyNodeValue||i,T=P.hashTransKey,D=i||(T?T(B):B),_=s?a.interpolation:{interpolation:m(m({},a.interpolation),{},{prefix:"#$?",suffix:"?$#"})},L=m(m(m(m({},a),{},{count:n},s),_),{},{defaultValue:B,ns:C}),N=j(d||t,D?S(D,L):B,E,P,L),V=void 0!==r?r:P.defaultTransParent;return V?l.a.createElement(V,g,N):N}},288:function(e,t,n){"use strict";n.r(t);var r=n(37),o=n(170),i=n(6),c=n.n(i),a=n(178),s=n(198),u=n.n(s),l=n(844),f=n(229),d=n(173),p=n(195),h=n(166),b=n(165),m=n(168);function v(){var e=Object(h.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return v=function(){return e},e}function y(){var e=Object(h.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return y=function(){return e},e}var g=Object(b.default)(m.b)(y(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),O=b.default.a(v(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),j=function(e){var t=e.children,n=e.to,o=e.target,i=void 0===o?"_self":o,c=e.isBold,a=void 0===c||c;return"_blank"===i?Object(r.jsx)(O,{href:n,target:"_blank",rel:"noopener noreferrer",isBold:a,children:t}):Object(r.jsx)(g,{to:n,isBold:a,children:t})},x=n(167),w=n(174),k=n(217),E=function(e){var t=u()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(i.useState)(!0),s=Object(o.a)(n,2),h=s[0],b=(s[1],Object(d.a)()),m=b.doGoBack,v=b.setDoGoBack,y=b.setTitle,g=b.title,O=b.setType,E=b.setLogoSize,S=b.setSubtitle,P=Object(a.g)(),C=Object(l.a)(),B=C.t,T=C.i18n,D=c.a.useCallback((function(){e.nextStep&&P.push(e.nextStep)}),[P,e.nextStep]);return Object(i.useEffect)((function(){g&&y("")}),[g]),Object(i.useEffect)((function(){Object(w.a)(),m&&v(null),O("shapeDown"),E("regular"),S(B("main:aboutUsTitle"))}),[]),Object(r.jsxs)(k.WelcomeStyledFormAlternative,{children:[Object(r.jsx)(k.ShapeDownContainer,{children:Object(r.jsx)(k.WelcomeBorderContainer,{children:Object(r.jsx)(k.CoupleAboutUs,{})})}),Object(r.jsxs)(k.WelcomeContent,{mt:21,children:[Object(r.jsx)(k.WelcomeSubtitle,{mt:0,mb:0,textAlign:"left",fontColor:x.a.mineShaft,isBold:!0,children:Object(r.jsxs)(f.a,{i18nKey:"helpVirufy:aboutParagraph",children:[Object(r.jsxs)("p",{children:["Virufy is a ",Object(r.jsx)("strong",{children:"nonprofit organization"})," that is working to develop the means to use ",Object(r.jsx)("strong",{children:" artificial intelligence (Al) to screen for COVID-19 from cough patterns"}),"rapidly and at no cost through use of a smartphone for the benefit of low-income countries."]}),Object(r.jsxs)("p",{children:["Our team includes researchers from over ",Object(r.jsx)("strong",{children:"25 countries"}),".",Object(r.jsx)(j,{to:"https://virufy.org/".concat(T.language||"en","/our-approach"),target:"_blank",children:"Our research"})," has shown that Al technology may be able to identify COVID's unique cough signature."]}),Object(r.jsxs)("p",{children:["By collecting ",Object(r.jsx)("strong",{children:"coughs recordings"})," from people around the world, Virufy is improving the robustness of its AI algorithm in recognizing COVID's unique sound pattern."]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"You have the power"}),"to help benefit millions of people across the globe by ",Object(r.jsx)("strong",{children:"contributing your cough"})," in our study."]})]})}),Object(r.jsx)(k.WelcomeNote,{children:Object(r.jsxs)(f.a,{i18nKey:"main:note",children:[Object(r.jsx)("strong",{children:"Please note:"})," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor."]})})]}),h&&Object(r.jsx)(t,{children:Object(r.jsx)(p.a,{leftLabel:B("main:nextButton"),leftHandler:D,invert:!0})})]})};t.default=c.a.memo(E)}}]);
//# sourceMappingURL=8.e829e8e6.chunk.js.map