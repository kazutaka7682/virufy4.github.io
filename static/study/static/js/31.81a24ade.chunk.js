(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[31,58],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return _}));var r=n(212),o=n(206),a=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:u(r,n),currentStoreData:o})};function d(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1],s=u(n,c);i.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(i){return a}return a}var v,p,m,b="undefined"!==typeof window,O=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},E=[];function y(e){O=e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(O,n);m=r.getName,v=r.get,p=r.set,E=t.middleWares,s(!1,O,m,v),p(d(v()||e,t,O))}function S(e){var t=Object(a.useState)(v()),n=Object(o.a)(t,2),r=n[0],u=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:c},e))}var h=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(v(),e)),p(i(o)?v():o),O.setItem(m(),JSON.stringify(v())),i(t)||t&&!1!==t.shouldReRenderApp){var a=v();Array.isArray(E)&&E.length&&(a=E.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function _(e,t){var n=Object(a.useContext)(l),u=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(o.a)(n,2),i=u[0],s=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(a.useCallback)(h({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(a.useCallback)(e?h({options:t,callback:e,updateStore:c}):function(){},[]),state:u}}},211:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),c=n(44),i=a(n(217));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,p=e.onOpen,m=e.onClose,b=e.onPortalClick,O=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),E=i.default(),y=E.isServer,g=E.isBrowser,S=u.useState(v),h=S[0],_=S[1],w=u.useRef(h),T=u.useCallback((function(e){w.current=e,_(e)}),[]),j=u.useRef(),k=u.useRef(g?document.createElement("div"):null);u.useEffect((function(){g&&!k.current&&(k.current=document.createElement("div"))}),[g,k]);var C=u.useMemo((function(){if(!y)return f&&c.findDOMNode(f)||document.body}),[y,f]),A=function(e){if(!e)return{portal:k,targetEl:j,event:e};var t=e||{};t.persist&&t.persist(),t.portal=k,t.targetEl=j,t.event=e;var n=e.currentTarget;return!j.current&&n&&n!==document&&(j.current=t.currentTarget),t},N=Object.entries(O).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(A(e))},e}),{}),I=u.useCallback((function(e){if(!y){var n=A(e);if(null==j.current)throw setTimeout((function(){return T(!0)}),0),Error(t.errorMessage1);p&&p(n),T(!0)}}),[y,k,T,j,p]),M=u.useCallback((function(e){if(!y){var t=A(e);m&&w.current&&m(t),w.current&&T(!1)}}),[y,m,T]),x=u.useCallback((function(e){return w.current?M(e):I(e)}),[M,I]),P=u.useCallback((function(e){return"Escape"===e.key&&l?M(e):void 0}),[l,M]),H=u.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(k)||0!==e.button||!w.current||t(j)||a&&M(e)}),[y,M,a,k]),q=u.useCallback((function(e){if(!y&&k.current instanceof HTMLElement){var t=A(e);k.current.contains(t.target)&&b&&b(t),H(e)}}),[H]),L=u.useRef({});u.useEffect((function(){if(!y&&C instanceof HTMLElement&&k.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=k.current;return C.appendChild(k.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(L.current[t]=function(e){return O[t](A(e))},document.addEventListener(n,L.current[t]))})),document.addEventListener("keydown",P),document.addEventListener("mousedown",q),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(document.removeEventListener(n,L.current[t]),delete L.current[t])})),document.removeEventListener("keydown",P),document.removeEventListener("mousedown",q),C.removeChild(t)}}}),[y,H,P,C,k]);var D=u.useCallback((function(e){var t=e.children;return null!=k.current?c.createPortal(t,k.current):null}),[k]);return Object.assign([I,M,w.current,D,x,j,k],r(r({isOpen:w.current,openPortal:I,ref:j,closePortal:M,togglePortal:x,Portal:D,portalRef:k},N),{bind:r({ref:j},N)}))}},217:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,u=r.Server,c=r.Native,i=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:i?a:u,l={isBrowser:s===a,isServer:s===u,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},292:function(e,t,n){"use strict";n.r(t);var r=n(213),o=n.n(r),a=n(214),u=n(206),c=n(9),i=n.n(c),s=n(244),l=n(211),f=n.n(l),d=n(846),v=n(218),p=n(207),m=n(228),b=n(230),O=n(229),E=n(216),y=n(243),g=n(208),S=n(209),h=n(242),_=n(215),w=n(233),T=O.object({testTaken:O.array().of(O.string().required()).required().default([]).test("SelecteOne","Select one",(function(e){return!(e&&e.length>1&&(e.includes("unsure")||e.includes("neither")))}))}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.otherSteps,O=e.metadata,j=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,k=Object(g.a)(),C=k.setDoGoBack,A=k.setTitle,N=k.setSubtitle,I=k.setType,M=Object(s.g)(),x=Object(d.a)().t,P=Object(p.d)(Object(E.b)(r)),H=P.state,q=P.action,L=i.a.useState(!0),D=Object(u.a)(L,2),R=D[0],B=D[1],W=Object(v.e)({mode:"onChange",defaultValues:null===H||void 0===H?void 0:H[r],resolver:Object(m.a)(T)}),U=W.control,V=W.handleSubmit,G=W.formState,J=G.errors,Q=G.isValid,z=i.a.useCallback((function(){B(!1),t?M.push(t):M.goBack()}),[M,t]);Object(c.useEffect)((function(){Object(S.a)(),A("".concat(x("questionary:headerText")," ").concat(null===O||void 0===O?void 0:O.current," ").concat(x("questionary:stepOf")," ").concat(null===O||void 0===O?void 0:O.total)),N(""),I("primary"),C((function(){return z}))}),[z,C,A,I,N,x,O]);var K=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(r=t.testTaken)&&(a=r.includes("neither"),u=r.includes("unsure"),q(t),(a||u)&&l&&l.noTestStep?(B(!1),M.push(l.noTestStep)):n&&(B(!1),M.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(w.MainContainer,null,i.a.createElement(y.c,null,x("questionary:title")),i.a.createElement(w.WomanWithPhone,null),i.a.createElement(w.QuestionText,null,x("questionary:testTaken.question"),i.a.createElement(w.QuestionAllApply,null,x("questionary:allThatApply"))),i.a.createElement(v.a,{control:U,name:"testTaken",defaultValue:[],render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(h.a,{isCheckbox:!0,value:{selected:n},onChange:function(e){return t(e.selected)},items:[{value:"pcr",label:x("questionary:testTaken.options.pcr")},{value:"antigen",label:x("questionary:testTaken.options.antigen")},{value:"unsure",label:x("questionary:testTaken.options.unsure")},{value:"neither",label:x("questionary:testTaken.options.neither")}],excludableValues:["unsure","neither"]})}}),i.a.createElement("p",null,i.a.createElement(b.a,{errors:J,name:"name"})),R&&i.a.createElement(j,null,i.a.createElement(_.a,{leftLabel:x("questionary:nextButton"),leftHandler:V(K),leftDisabled:!Q,invert:!0})))}))},318:function(e,t,n){"use strict";n.r(t);var r=n(292);n.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=31.81a24ade.chunk.js.map