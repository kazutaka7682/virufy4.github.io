(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[8],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return C}));var r=n(159),a=n(157),i=n(5),o=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function s(e,t){var n=t||"__STATE_MACHINE__",r=o(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var c=function(e){return void 0===e};function u(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(i.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:o(r,n),currentStoreData:a})};function d(e,t,n){var i=e,s=t.syncStores;if(!s)return i;try{if(Array.isArray(s))s.forEach((function(e){i=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:i})}));else{if(s.externalStoreName&&"function"===typeof s.transform&&"string"===typeof s.externalStoreName)return f({transform:s.transform,externalStoreName:s.externalStoreName,storageType:n,store:i});Object.entries(s).forEach((function(e){var t=Object(a.a)(e,2),s=t[0],c=t[1],u=o(n,s);c.forEach((function(e){i=Object.assign(Object.assign({},i),Object(r.a)({},e,Object.assign(Object.assign({},i[e]),u[e])))}))}))}}catch(c){return i}return i}var p,m,h,v="undefined"!==typeof window,E=v?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},x=[];function g(e){E=e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=s(E,n);h=r.getName,p=r.get,m=r.set,x=t.middleWares,u(!1,E,h,p),m(d(p()||e,t,E))}function y(e){var t=Object(i.useState)(p()),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(i.useMemo)((function(){return{store:r,updateStore:o}}),[r]);return Object(i.createElement)(l.Provider,Object.assign({value:s},e))}var O=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(p(),e)),m(c(a)?p():a),E.setItem(h(),JSON.stringify(p())),c(t)||t&&!1!==t.shouldReRenderApp){var i=p();Array.isArray(x)&&x.length&&(i=x.reduce((function(e,t){return t(e)||e}),i)),r(i)}}};function C(e,t){var n=Object(i.useContext)(l),o=n.store,s=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var o=Object(a.a)(n,2),c=o[0],u=o[1];return Object.assign(Object.assign({},e),Object(r.a)({},c,Object(i.useCallback)(O({options:t,callback:u,updateStore:s}),[])))}),{}),action:function(e){return e},state:o}:{actions:{},action:Object(i.useCallback)(e?O({options:t,callback:e,updateStore:s}):function(){},[]),state:o}}},293:function(e,t,n){"use strict";var r=n(21),a=n.n(r),i=n(5),o=n.n(i);var s=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(o){0}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=n(336);function u(e){e&&l.current.insert(e+"}")}var l={current:null},f=function(e,t,n,r,a,i,o,s,c,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return l.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===s)return t+"/*|*/";break;case 3:switch(s){case 102:case 112:return l.current.insert(n[0]+t),"";default:return t+(0===f?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(u)}},d=function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r=new c.a(t);var a,i={};a=e.container||document.head;var o,u=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(u,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){i[e]=!0})),e.parentNode!==a&&a.appendChild(e)})),r.use(e.stylisPlugins)(f),o=function(e,t,n,a){var i=t.name;l.current=n,r(e,t.styles),a&&(d.inserted[i]=!0)};var d={key:n,sheet:new s({key:n,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:o};return d};function p(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var m=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+r,a,e.sheet,!0);a=a.next}while(void 0!==a)}};var h=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},v=n(337),E=n(338),x=/[A-Z]|^ms/g,g=/_EMO_([^_]+?)_([^]*?)_EMO_/g,b=function(e){return 45===e.charCodeAt(1)},y=function(e){return null!=e&&"boolean"!==typeof e},O=Object(E.a)((function(e){return b(e)?e:e.replace(x,"-$&").toLowerCase()})),C=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(g,(function(e,t,n){return S={name:t,styles:n,next:S},t}))}return 1===v.a[e]||b(e)||"number"!==typeof t||0===t?t:t+"px"};function N(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return S={name:n.name,styles:n.styles,next:S},n.name;if(void 0!==n.styles){var a=n.next;if(void 0!==a)for(;void 0!==a;)S={name:a.name,styles:a.styles,next:S},a=a.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=N(e,t,n[a],!1);else for(var i in n){var o=n[i];if("object"!==typeof o)null!=t&&void 0!==t[o]?r+=i+"{"+t[o]+"}":y(o)&&(r+=O(i)+":"+C(i,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=N(e,t,o,!1);switch(i){case"animation":case"animationName":r+=O(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)y(o[c])&&(r+=O(i)+":"+C(i,o[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=S,o=n(e);return S=i,N(e,t,o,r)}break;case"string":}if(null==t)return n;var s=t[n];return void 0===s||r?n:s}var S,j=/label:\s*([^\s;\n{]+)\s*;/g;var A=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";S=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,a+=N(n,t,i,!1)):a+=i[0];for(var o=1;o<e.length;o++)a+=N(n,t,e[o],46===a.charCodeAt(a.length-1)),r&&(a+=i[o]);j.lastIndex=0;for(var s,c="";null!==(s=j.exec(a));)c+="-"+s[1];return{name:h(a)+c,styles:a,next:S}};var k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A(t)},_=Object(i.createContext)("undefined"!==typeof HTMLElement?d():null),T=Object(i.createContext)({}),w=(_.Provider,function(e){return Object(i.forwardRef)((function(t,n){return Object(i.createElement)(_.Consumer,null,(function(r){return e(t,r,n)}))}))}),I="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",M=Object.prototype.hasOwnProperty,R=function(e,t,n,r){var a=null===n?t.css:t.css(n);"string"===typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[I],s=[a],c="";"string"===typeof t.className?c=p(e.registered,s,t.className):null!=t.className&&(c=t.className+" ");var u=A(s);m(e,u,"string"===typeof o);c+=e.key+"-"+u.name;var l={};for(var f in t)M.call(t,f)&&"css"!==f&&f!==I&&(l[f]=t[f]);return l.ref=r,l.className=c,Object(i.createElement)(o,l)},D=w((function(e,t,n){return"function"===typeof e.css?Object(i.createElement)(T.Consumer,null,(function(r){return R(t,e,r,n)})):R(t,e,null,n)}));var L=function(e,t){var n=arguments;if(null==t||!M.call(t,"css"))return i.createElement.apply(void 0,n);var r=n.length,a=new Array(r);a[0]=D;var o={};for(var s in t)M.call(t,s)&&(o[s]=t[s]);o[I]=e,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)},P=(i.Component,function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var s in o="",i)i[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a});function H(e,t,n){var r=[],a=p(e,r,n);return r.length<2?n:a+t(r)}w((function(e,t){return Object(i.createElement)(T.Consumer,null,(function(n){var r=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=A(n,t.registered);return m(t,a,!1),t.key+"-"+a.name},a={css:r,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return H(t.registered,r,P(n))},theme:n},i=e.children(a);return!0,i}))}));var V=n(51),U=n.n(V),X=n(179),Y=n(38),J=n(28),F=n(10),G=n(52),B=o.a.createContext(null);function W(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(i.isValidElement)(e)?t(e):e}(e)})),n}function $(e,t,n){return null!=n[t]?n[t]:e.props[t]}function q(e,t,n){var r=W(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),i=[];for(var o in e)o in t?i.length&&(a[o]=i,i=[]):i.push(o);var s={};for(var c in t){if(a[c])for(r=0;r<a[c].length;r++){var u=a[c][r];s[a[c][r]]=n(u)}s[c]=n(c)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(a).forEach((function(o){var s=a[o];if(Object(i.isValidElement)(s)){var c=o in t,u=o in r,l=t[o],f=Object(i.isValidElement)(l)&&!l.props.in;!u||c&&!f?u||!c||f?u&&c&&Object(i.isValidElement)(l)&&(a[o]=Object(i.cloneElement)(s,{onExited:n.bind(null,s),in:l.props.in,exit:$(s,"exit",e),enter:$(s,"enter",e)})):a[o]=Object(i.cloneElement)(s,{in:!1}):a[o]=Object(i.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:$(s,"exit",e),enter:$(s,"enter",e)})}})),a}var Z=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},z=function(e){function t(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind(Object(F.a)(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}Object(G.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,a=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,W(n.children,(function(e){return Object(i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:$(e,"appear",n),enter:$(e,"enter",n),exit:$(e,"exit",n)})}))):q(e,a,o),firstRender:!1}},n.handleExited=function(e,t){var n=W(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(J.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(Y.a)(e,["component","childFactory"]),a=this.state.contextValue,i=Z(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.a.createElement(B.Provider,{value:a},i):o.a.createElement(B.Provider,{value:a},o.a.createElement(t,r,i))},t}(o.a.Component);z.propTypes={},z.defaultProps={component:"div",childFactory:function(e){return e}};var K=z;function Q(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ee=n(24),te=n.n(ee),ne=!1,re=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(G.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[te.a.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||ne?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:te.a.findDOMNode(this);t&&!ne?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:te.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(Y.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(B.Provider,{value:null},"function"===typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function ae(){}re.contextType=B,re.propTypes={},re.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ae,onEntering:ae,onEntered:ae,onExit:ae,onExiting:ae,onExited:ae},re.UNMOUNTED="unmounted",re.EXITED="exited",re.ENTERING="entering",re.ENTERED="entered",re.EXITING="exiting";var ie=re,oe=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"===typeof n.className?n.className=Q(n.className,r):n.setAttribute("class",Q(n.className&&n.className.baseVal||"",r)));var n,r}))},se=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"===typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}Object(G.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},r&&oe(e,r),a&&oe(e,a),i&&oe(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(Y.a)(e,["classNames"]));return o.a.createElement(ie,Object(J.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);se.defaultProps={classNames:""},se.propTypes={};var ce=se;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(){var e,t,n=(e=["\n  display: grid;\n  .item {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .item:not(:only-child) {\n    &.","-enter-active, &.","-exit-active {\n      transition: transform ","ms ",";\n    }\n  }\n\n  &.slide {\n    overflow: hidden;\n\n    // back\n    .back-enter {\n      transform: translateX(-100%);\n    }\n    .back-enter-active {\n      transform: translateX(0);\n    }\n    .back-exit {\n      transform: translateX(0);\n    }\n    .back-exit-active {\n      transform: translate(100%);\n    }\n\n    // next\n    .next-enter {\n      transform: translateX(100%);\n    }\n    .next-enter-active {\n      transform: translateX(0);\n    }\n    .next-exit {\n      transform: translateX(0);\n    }\n    .next-exit-active {\n      transform: translateX(-100%);\n    }\n  }\n  &.rotate {\n    perspective: 2000px;\n\n    .item {\n      backface-visibility: hidden;\n    }\n\n    // back\n    .back-enter {\n      transform: rotateY(-180deg);\n    }\n    .back-enter-active {\n      transform: rotateY(0);\n    }\n    .back-exit {\n      transform: rotateY(0);\n    }\n    .back-exit-active {\n      transform: rotateY(180deg);\n    }\n\n    // next\n    .next-enter {\n      transform: rotateY(180deg);\n    }\n    .next-enter-active {\n      transform: rotateY(0);\n    }\n    .next-exit {\n      transform: rotateY(0);\n    }\n    .next-exit-active {\n      transform: rotateY(-180deg);\n    }\n  }\n"],t||(t=e.slice(0)),e.raw=t,e);return le=function(){return n},n}var fe=function(e,t){var n=function(){return sessionStorage.getItem(e)},r=function(t){return sessionStorage.setItem(e,JSON.stringify(t))};void 0!==t&&null===n()&&r(t);return[function(){return JSON.parse(n())},function(t){return void 0===t?sessionStorage.removeItem(e):r(t)}]},de=function(e,t,n){return k(le(),n,n,e,t)},pe=function(e){var t=e.location,n=e.animation,r=e.pathList,a=e.duration,o=e.timing,s=e.destroy,c=e.children,u=function(e,t){var n=Object(i.useRef)(t),r=Object(i.useMemo)((function(){return fe(e,n.current)}),[e]),a=r[0],o=r[1],s=Object(i.useState)(a()),c=s[0],u=s[1];return[c,Object(i.useCallback)((function(e){o(e),u(e)}),[o])]}("::slide::history::",[]),l=u[0],f=u[1],d=Object(i.useMemo)((function(){var e=(null==r?void 0:r.length)>0;return e&&l&&f(void 0),e}),[l,r,f]),p=t.pathname,m=Object(i.useRef)(d?p:null==l?void 0:l[0]),h=Object(i.useRef)("");if(m.current!==p){if(d){var v=r.indexOf(m.current),E=r.indexOf(p);h.current=E>v?"next":"back"}else{var x=l.lastIndexOf(p);-1===x?(h.current="next",l.push(p)):(h.current="back",l.length=x+1),f([].concat(l))}m.current=p}Object(i.useEffect)((function(){return function(){f(void 0)}}),[f]);var g=h.current,b=s?{timeout:a}:{addEndListener:function(){}};return L(K,{className:"slide-routes "+n,childFactory:function(e){return Object(i.cloneElement)(e,{classNames:g})},css:de(a,o,g)},L(ce,Object.assign({key:p},b),L(X.d,{location:t},i.Children.map(c,(function(e){if(!e)return e;var t=e.props,n=t.render,r=t.component,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["render","component"]),o=n?n():Object(i.createElement)(r);if(!0===o.props.replace)return e;return ue({},e,{props:ue({},a,{render:function(){return L("div",{className:"item"},o)}})})})))))};pe.defaultProps={animation:"slide",duration:200,timing:"ease",destroy:!0},pe.propTypes={location:U.a.object.isRequired,animation:U.a.oneOf(["slide","rotate"]),pathList:U.a.array,duration:U.a.number,timing:U.a.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),destroy:U.a.bool,children:U.a.node};t.a=pe}}]);
//# sourceMappingURL=8.5b94b7f8.chunk.js.map