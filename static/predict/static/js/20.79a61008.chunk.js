(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[20,29],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n(3),i=new(function(){function e(e){void 0===e&&(e="__LSM__"),this.name=e,this.state={},this.middleWares=[],this.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:{}}var t=e.prototype;return t.updateStore=function(e){this.state=function(e,t){try{return JSON.parse(e.getItem(t))}catch(e){return null}}(this.storageType,this.name)||e},t.updateMiddleWares=function(e){return this.middleWares=e},e}()),a=Object(r.createContext)(void 0),o=function(e){var t=e.children,n=Object(r.useState)(i.state);return Object(r.createElement)(a.Provider,{value:{state:n[0],setState:n[1]}},t)};function c(e,t){void 0===t&&(t={name:"__LSM__",middleWares:[]}),t.name&&(i.name=t.name),t.storageType&&(i.storageType=t.storageType),i.updateMiddleWares(t.middleWares),i.updateStore(e)}function u(e){var t=Object(r.useContext)(a),n=t.state,o=t.setState;return Object(r.useMemo)((function(){return{actions:e?Object.entries(e).reduce((function(e,t){var n;return Object.assign({},e,((n={})[t[0]]=function(e,t){return function(n){i.state=t(i.state,n),i.storageType.setItem(i.name,JSON.stringify(i.state)),i.middleWares.length&&(i.state=i.middleWares.reduce((function(e,t){return t(e)||e}),i.state)),e(i.state)}}(o,t[1]),n))}),{}):{},state:n}}),[n,o,e])}},158:function(e,t,n){"use strict";var r=n(3),i=n.n(r),a=n(179);t.a=function(){var e=i.a.useContext(a.a),t=e.title,n=e.setTitle,r=e.subtitle,o=e.setSubtitle,c=e.type,u=e.setType,l=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:o,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},160:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(154),i=n(150);function a(e){return function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},e,Object(i.a)(Object(i.a)({},t[e]),n)))}}function o(){return function(e){return{welcome:{language:e.welcome.language}}}}},195:function(e,t,n){"use strict";var r=n(153),i=n(3);t.a=function(){var e=Object(i.useState)({width:null,height:null}),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}},207:function(e,t,n){"use strict";n.r(t),n.d(t,"WelcomeContent",(function(){return w})),n.d(t,"WelcomeSubtitleBold",(function(){return y})),n.d(t,"WelcomeInput",(function(){return S})),n.d(t,"ContainerNextButton",(function(){return k})),n.d(t,"NextButton",(function(){return E})),n.d(t,"ArrowRightSVG",(function(){return B}));var r=n(149),i=n(148),a=n(3);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createElement("path",{d:"M5 16H27",stroke:"#3578DE",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),l=a.createElement("path",{d:"M18 7L27 16L18 25",stroke:"#3578DE",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"});function s(e,t){var n=e.title,r=e.titleId,i=c(e,["title","titleId"]);return a.createElement("svg",o({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,u,l)}var d=a.forwardRef(s);n.p;function f(){var e=Object(r.a)(["\n    display: block;\n    margin: 0 auto;\n    \n    width: 32px;\n    height: 32px;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: ","; \n  opacity: ",";\n  border: 0px;\n  margin-bottom: 30px;\n  margin-top: 97px;\n  margin-right: 10px;\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  width: 100%;\n  margin: auto;\n  max-width: 335px;\n  display:flex;\n  justify-content:flex-end;\n\n  @media screen and (","){\n    max-width: 348px;\n    display:flex;\n    justify-content: center;\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(r.a)(["\n  height: 50px;\n  border: 0;\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  width: 100%;\n  font-family: 'Source Sans Pro';\n  line-height: 24px;\n  padding: 12px 15px;\n  margin: 0 auto;\n  max-width: 335px;\n  font-size:14px;\n\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    max-width: 348px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return h=function(){return e},e}function b(){var e=Object(r.a)(["text-align: ",";"]);return b=function(){return e},e}function g(){var e=Object(r.a)(["line-height: ","px;"]);return g=function(){return e},e}function x(){var e=Object(r.a)(["font-size: ","px;"]);return x=function(){return e},e}function v(){var e=Object(r.a)(["\n  color: ",';\n  font-family: "Biko";\n  ',"\n  ","\n  margin-bottom: ",";\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: ",";\n  ","\n  white-space: pre-wrap;\n  font-weight: 200;\n  >strong{\n    font-weight: ","\n  }\n  >p>strong{\n    font-weight: ","\n  }\n\n  max-width: 335px;\n  width: 100%;\n\n  @media screen and (","){\n    max-width: 348px;\n  }\n"]);return v=function(){return e},e}function j(){var e=Object(r.a)(["max-width: ","px;"]);return j=function(){return e},e}function O(){var e=Object(r.a)(["\n  margin: ","px auto ","px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  ","\n\n  @media screen and (","){\n    text-align: center;\n    margin: ","px auto ","px;\n  };\n"]);return O=function(){return e},e}var w=i.default.div(O(),(function(e){var t=e.mt;return void 0===t?30:t}),(function(e){var t=e.mb;return void 0===t?30:t}),(function(e){var t=e.maxWidth;return void 0!==t&&Object(i.css)(j(),t)}),(function(e){return e.theme.breakpoints.tablet}),(function(e){var t=e.mt;return void 0===t?30:t}),(function(e){var t=e.mb;return void 0===t?30:t})),y=i.default.h2(v(),(function(e){var t=e.theme;return e.fontColor||t.colors.mineShaft}),(function(e){var t=e.fontSize,n=void 0===t?14:t;return Object(i.css)(x(),n)}),(function(e){var t=e.lineHeight;return t&&Object(i.css)(g(),t)}),(function(e){var t=e.mb;return"".concat(t,"px")}),(function(e){var t=e.mt;return"".concat(t,"px")}),(function(e){var t=e.textAlign;return t&&Object(i.css)(b(),t||"left")}),(function(e){return e.isBold?600:200}),(function(e){return e.isBold?600:200}),(function(e){return e.theme.breakpoints.tablet})),S=i.default.input(h(),(function(e){return e.theme.colors.purple_5}),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.colors.mineShaft_50}),(function(e){return e.theme.breakpoints.tablet})),k=i.default.div(m(),(function(e){return e.theme.breakpoints.tablet})),E=i.default.button(p(),(function(e){return e.theme.colors.purple_10}),(function(e){return e.isDisable?"0.5":"1"})),B=Object(i.default)(d)(f())},235:function(e,t,n){"use strict";n.r(t);var r=n(36),i=n(169),a=n.n(i),o=n(170),c=n(153),u=n(3),l=n.n(u),s=n(162),d=n(848),f=n(220),p=n(152),m=n(256),h=n(265),b=n(150),g=n(149),x=n(148);function v(){var e=Object(g.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.538574 0.838867L6.1155 5.83887L11.6924 0.838867H0.538574Z' fill='%2321242C'/%3E%3C/svg%3E\");\n  background-color: ",";\n  background-position: 95% 50%;\n  background-repeat: no-repeat;\n  border: 0;\n  border-radius: 15px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  margin: auto;\n  padding: 12px 15px;\n  font-size: 14px;\n  \n  height: 48px;\n  max-width: ",";\n  width: 100%;\n\n\n  @media screen and (","){\n    max-width: 348px;\n    }\n"]);return v=function(){return e},e}var j=x.default.select(v(),(function(e){return e.theme.colors.purple_5}),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isMobileFullWidth?"none":"335px"}),(function(e){return e.theme.breakpoints.tablet})),O=function(e){var t=e.children,n=e.value,i=e.isMobileFullWidth;return Object(r.jsx)(j,Object(b.a)(Object(b.a)({},e),{},{value:n,isMobileFullWidth:i,children:t}))};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var S=u.createElement("defs",null,u.createElement("style",null,".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}"),u.createElement("linearGradient",{id:"linear-gradient",x1:-3.15,y1:189.74,x2:687.53,y2:189.74,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{offset:0,stopColor:"#00a6e1"}),u.createElement("stop",{offset:1,stopColor:"#4fc1bc"})),u.createElement("linearGradient",{id:"linear-gradient-2",x1:-3.15,y1:63.25,x2:687.53,y2:63.25,xlinkHref:"#linear-gradient"})),k=u.createElement("g",null,u.createElement("path",{className:"cls-1",d:"M236.59,220.19a93.8,93.8,0,0,1-93.69-93.69,125.71,125.71,0,0,1-16.4,62.23,126.44,126.44,0,0,0,220.19,0,125.71,125.71,0,0,1-16.4-62.23A93.8,93.8,0,0,1,236.59,220.19Z"}),u.createElement("path",{className:"cls-2",d:"M456.78,32.8a93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,456.78,32.8Z"}),u.createElement("path",{className:"cls-2",d:"M16.4,0a16.4,16.4,0,0,0,0,32.8,93.8,93.8,0,0,1,93.69,93.69,125.72,125.72,0,0,1,16.4-62.23A126.58,126.58,0,0,0,16.4,0Z"}),u.createElement("path",{className:"cls-2",d:"M677,0A126.58,126.58,0,0,0,566.87,64.26a125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,677,32.8,16.4,16.4,0,0,0,677,0Z"}),u.createElement("path",{className:"cls-1",d:"M16.4,220.19a16.4,16.4,0,1,0,0,32.8,126.58,126.58,0,0,0,110.09-64.26,125.72,125.72,0,0,1-16.4-62.23A93.8,93.8,0,0,1,16.4,220.19Z"}),u.createElement("path",{className:"cls-1",d:"M566.87,142.89a16.4,16.4,0,0,1-16.4-16.4,93.69,93.69,0,0,1-187.39,0,125.71,125.71,0,0,1-16.4,62.23,126.47,126.47,0,0,0,236.59-62.23A16.4,16.4,0,0,1,566.87,142.89Z"}),u.createElement("path",{className:"cls-2",d:"M236.59,32.8a93.8,93.8,0,0,1,93.69,93.69,125.71,125.71,0,0,1,16.4-62.23,126.44,126.44,0,0,0-220.19,0,125.71,125.71,0,0,1,16.4,62.23A93.8,93.8,0,0,1,236.59,32.8Z"}));function E(e,t){var n=e.title,r=e.titleId,i=y(e,["title","titleId"]);return u.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 693.36 252.99",ref:t,"aria-labelledby":r},i),n?u.createElement("title",{id:r},n):null,S,k)}var B=u.forwardRef(E);n.p;function C(){var e=Object(g.a)(["\n  width: 60px;\n"]);return C=function(){return e},e}function W(){var e=Object(g.a)(['\n  font-family: "Open Sans";\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: ',";\n"]);return W=function(){return e},e}function L(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n  flex-direction: ",";\n  margin-top: ",";\n  > * {\n    margin: ",";\n  }\n"]);return L=function(){return e},e}var M=x.default.div(L(),(function(e){return e.inline?"center":"flex-end"}),(function(e){return e.inline?"flex-end":"center"}),(function(e){return e.inline?"row":"column"}),(function(e){return e.mt||"22px"}),(function(e){return e.inline?"0px 5px":"5px 0px"})),A=x.default.div(W(),(function(e){return e.color||"#393939"})),N=Object(x.default)(B)(C()),T=function(e){var t=e.inline,n=void 0!==t&&t,i=e.mt,a=void 0===i?"22px":i,o=e.color,c=void 0===o?"#393939":o,u=Object(d.a)().t;return Object(r.jsxs)(M,{inline:n,mt:a,children:[Object(r.jsx)(A,{color:c,children:u("main:createdBy","Created By")}),Object(r.jsx)("a",{href:"https://xoor.io",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(N,{})})]})},_=n(160),z=n(158),P=[{code:"en",label:"English"},{code:"es",label:"Espa\xf1ol"}],G=n(195),I=n(159),Z=n(207),D=h.b().shape({language:h.c().required(),passcode:h.c().required()}).defined(),V=function(e){var t=Object(z.a)(),n=t.doGoBack,i=t.setDoGoBack,u=t.setLogoSize,h=t.setType,b=Object(s.g)(),g=Object(G.a)().width,x=Object(d.a)(),v=x.t,j=x.i18n,w=l.a.useState(!0),y=Object(c.a)(w,2),S=y[0],k=y[1],E=Object(p.c)({updateAction:Object(_.b)(e.storeKey)}),B=E.state,C=E.actions,W=Object(f.c)({defaultValues:null===B||void 0===B?void 0:B[e.storeKey],resolver:Object(m.yupResolver)(D),mode:"onChange"}),L=W.control,M=W.formState,A=W.handleSubmit,N=W.watch,V=W.reset,H=M.isValid;l.a.useEffect((function(){B&&B[e.storeKey]&&V(B[e.storeKey])}),[]);var R=function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(C.updateAction(n),e.nextStep&&(k(!1),b.push(e.nextStep)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();l.a.useEffect((function(){Object(I.a)(),n&&i(null),h("noShape"),u("big")}),[]);var F=N("language");return l.a.useEffect((function(){j.changeLanguage(F)}),[j,F]),g?Object(r.jsx)("form",{children:Object(r.jsxs)(Z.WelcomeContent,{mt:53,children:[Object(r.jsx)(Z.WelcomeSubtitleBold,{mt:g&&g>560?50:40,mb:16,textAlign:"left",isBold:!0,children:Object(r.jsx)("strong",{children:v("main:selectYourLanguage","Language")})}),Object(r.jsx)(f.a,{control:L,name:"language",defaultValue:j.language.split("-")[0]||P[0].code,render:function(e){var t=e.onChange,n=e.value;return Object(r.jsx)(O,{onChange:function(e){return t(e.currentTarget.value)},value:n,children:P.map((function(e){var t=e.code,n=e.label;return Object(r.jsx)("option",{id:t,value:t,children:n},t)}))})}}),Object(r.jsx)(Z.WelcomeSubtitleBold,{mt:g&&g>560?50:40,mb:16,textAlign:"left",isBold:!0,children:Object(r.jsx)("strong",{children:v("main:passcode","Passcode")})}),Object(r.jsx)(f.a,{control:L,name:"passcode",defaultValue:"",render:function(e){var t=e.onChange,n=e.value,i=e.name;return Object(r.jsx)(Z.WelcomeInput,{name:i,value:n,onChange:t,type:"text",placeholder:v("main:enterPasscode","Enter your passcode"),autoComplete:"Off"})}}),S&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Z.ContainerNextButton,{children:Object(r.jsx)(Z.NextButton,{onClick:A(R),isDisable:!H,children:Object(r.jsx)(Z.ArrowRightSVG,{})})}),Object(r.jsx)(T,{inline:!0})]})]})}):null};t.default=l.a.memo(V)}}]);
//# sourceMappingURL=20.79a61008.chunk.js.map