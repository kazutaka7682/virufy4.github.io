(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[33,60],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return w}));var r=n(212),o=n(206),a=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:u(r,n),currentStoreData:o})};function d(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1],s=u(n,c);i.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(i){return a}return a}var v,m,p,b="undefined"!==typeof window,O=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function E(e){O=e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(O,n);p=r.getName,v=r.get,m=r.set,g=t.middleWares,s(!1,O,p,v),m(d(v()||e,t,O))}function S(e){var t=Object(a.useState)(v()),n=Object(o.a)(t,2),r=n[0],u=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:c},e))}var _=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(v(),e)),m(i(o)?v():o),O.setItem(p(),JSON.stringify(v())),i(t)||t&&!1!==t.shouldReRenderApp){var a=v();Array.isArray(g)&&g.length&&(a=g.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function w(e,t){var n=Object(a.useContext)(l),u=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(o.a)(n,2),i=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(a.useCallback)(_({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(a.useCallback)(e?_({options:t,callback:e,updateStore:c}):function(){},[]),state:u}}},211:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),c=n(44),i=a(n(217));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,m=e.onOpen,p=e.onClose,b=e.onPortalClick,O=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),g=i.default(),E=g.isServer,y=g.isBrowser,S=u.useState(v),_=S[0],w=S[1],h=u.useRef(_),j=u.useCallback((function(e){h.current=e,w(e)}),[]),T=u.useRef(),C=u.useRef(y?document.createElement("div"):null);u.useEffect((function(){y&&!C.current&&(C.current=document.createElement("div"))}),[y,C]);var k=u.useMemo((function(){if(!E)return f&&c.findDOMNode(f)||document.body}),[E,f]),N=function(e){if(!e)return{portal:C,targetEl:T,event:e};var t=e||{};t.persist&&t.persist(),t.portal=C,t.targetEl=T,t.event=e;var n=e.currentTarget;return!T.current&&n&&n!==document&&(T.current=t.currentTarget),t},A=Object.entries(O).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){E||r(N(e))},e}),{}),I=u.useCallback((function(e){if(!E){var n=N(e);if(null==T.current)throw setTimeout((function(){return j(!0)}),0),Error(t.errorMessage1);m&&m(n),j(!0)}}),[E,C,j,T,m]),M=u.useCallback((function(e){if(!E){var t=N(e);p&&h.current&&p(t),h.current&&j(!1)}}),[E,p,j]),P=u.useCallback((function(e){return h.current?M(e):I(e)}),[M,I]),x=u.useCallback((function(e){return"Escape"===e.key&&l?M(e):void 0}),[l,M]),H=u.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(C)||0!==e.button||!h.current||t(T)||a&&M(e)}),[E,M,a,C]),L=u.useCallback((function(e){if(!E&&C.current instanceof HTMLElement){var t=N(e);C.current.contains(t.target)&&b&&b(t),H(e)}}),[H]),q=u.useRef({});u.useEffect((function(){if(!E&&k instanceof HTMLElement&&C.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=C.current;return k.appendChild(C.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(q.current[t]=function(e){return O[t](N(e))},document.addEventListener(n,q.current[t]))})),document.addEventListener("keydown",x),document.addEventListener("mousedown",L),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(document.removeEventListener(n,q.current[t]),delete q.current[t])})),document.removeEventListener("keydown",x),document.removeEventListener("mousedown",L),k.removeChild(t)}}}),[E,H,x,k,C]);var D=u.useCallback((function(e){var t=e.children;return null!=C.current?c.createPortal(t,C.current):null}),[C]);return Object.assign([I,M,h.current,D,P,T,C],r(r({isOpen:h.current,openPortal:I,ref:T,closePortal:M,togglePortal:P,Portal:D,portalRef:C},A),{bind:r({ref:T},A)}))}},217:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,u=r.Server,c=r.Native,i=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:i?a:u,l={isBrowser:s===a,isServer:s===u,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},294:function(e,t,n){"use strict";n.r(t);var r=n(213),o=n.n(r),a=n(214),u=n(206),c=n(9),i=n.n(c),s=n(244),l=n(211),f=n.n(l),d=n(846),v=n(218),m=n(207),p=n(228),b=n(230),O=n(229),g=n(216),E=n(242),y=n(215),S=n(208),_=n(209),w=n(233),h=O.object({gender:O.object().required()}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,O=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,j=Object(S.a)(),T=j.setDoGoBack,C=j.setTitle,k=j.setType,N=Object(s.g)(),A=Object(d.a)().t,I=Object(m.d)(Object(g.b)(r)),M=I.state,P=I.action,x=i.a.useState(!0),H=Object(u.a)(x,2),L=H[0],q=H[1],D=Object(v.e)({mode:"onChange",defaultValues:null===M||void 0===M?void 0:M[r],resolver:Object(p.a)(h)}),R=D.control,B=D.handleSubmit,U=D.formState,G=U.errors,J=U.isValid,V=i.a.useCallback((function(){q(!1),t?N.push(t):N.goBack()}),[N,t]);Object(c.useEffect)((function(){Object(_.a)(),C("".concat(A("questionary:headerText")," ").concat(null===l||void 0===l?void 0:l.current," ").concat(A("questionary:stepOf")," ").concat(null===l||void 0===l?void 0:l.total)),k("primary"),T((function(){return V}))}),[V,T,C,k,l,A]);var W=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(P(t),n&&(q(!1),N.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(w.MainContainer,null,i.a.createElement(w.QuestionText,{first:!0},A("questionary:gender.question"),i.a.createElement(w.QuestionNote,null,A("questionary:gender.note"))),i.a.createElement(v.a,{control:R,name:"gender",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(E.a,{singleSelection:!0,value:n,onChange:function(e){return t(e)},items:[{value:"female",label:A("questionary:gender.options.female")},{value:"male",label:A("questionary:gender.options.male")},{value:"transgender",label:A("questionary:gender.options.transgender")},{value:"other",label:A("questionary:gender.options.other")},{value:"notToSay",label:A("questionary:gender.options.notToSay")}]})}}),i.a.createElement("p",null,i.a.createElement(b.a,{errors:G,name:"name"})),L&&i.a.createElement(O,null,i.a.createElement(y.a,{leftLabel:A("questionary:nextButton"),leftHandler:B(W),leftDisabled:!J,invert:!0})))}))},323:function(e,t,n){"use strict";n.r(t);var r=n(294);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=33.ee299062.chunk.js.map