(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[29,57],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(9),r=n.n(a),i=n(214),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s=function(e){var t=e.as,n=e.errors,a=e.name,s=e.message,u=e.render,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["as","errors","name","message","render"]),c=Object(i.f)(),p=Object(i.c)(n||c.errors,a);if(!p)return null;var d=p.message,m=p.types,f=o(o({},l),{children:d||s});return t?r.a.isValidElement(t)?r.a.cloneElement(t,f):r.a.createElement(t,f):u?u({message:d||s,messages:m}):r.a.createElement(r.a.Fragment,o({},f))}},221:function(e,t,n){var a=n(78);e.exports=function(e,t){if(null==e)return{};var n,r,i=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},222:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},223:function(e,t,n){e.exports={parse:n(224),stringify:n(227)}},224:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(225),i=Object.create?Object.create(null):{};function o(e,t,n,a,r){var i=t.indexOf("<",a),o=t.slice(a,-1===i?void 0:i);/^\s*$/.test(o)&&(o=" "),(!r&&i>-1&&n+e.length>=0||" "!==o)&&e.push({type:"text",content:o})}e.exports=function(e,t){t||(t={}),t.components||(t.components=i);var n,s=[],u=-1,l=[],c={},p=!1;return e.replace(a,(function(a,i){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,m="/"!==a.charAt(1),f=0===a.indexOf("\x3c!--"),v=i+a.length,h=e.charAt(v);m&&!f&&(u++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!h||"<"===h||o(n.children,e,u,v,t.ignoreWhitespace),c[n.tagName]=n,0===u&&s.push(n),(d=l[u-1])&&d.children.push(n),l[u]=n),(f||!m||n.voidElement)&&(f||u--,!p&&"<"!==h&&h&&o(d=-1===u?s:l[u].children,e,u,v,t.ignoreWhitespace))})),!s.length&&e.length&&o(s,e,0,0,t.ignoreWhitespace),s}},225:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(226);e.exports=function(e){var t,n=0,i=!0,o={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return i=!0,void n++;i?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(o.voidElement=!0),o.name=a):(o.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(o.attrs[t]=t),t=a),n++,i=!1})),o}},226:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},227:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(251),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function i(){return r}},235:function(e,t,n){"use strict";var a=n(239);t.a=function(){return{isBrowser:a.isBrowser?Object(a.deviceDetect)():null,isMobile:a.isMobile?Object(a.deviceDetect)():null,isSmartTv:a.isSmartTV?Object(a.deviceDetect)():null,isConsole:a.isConsole?Object(a.deviceDetect)():null,isTablet:a.isTablet?Object(a.deviceDetect)():null,isWearable:a.isWearable?Object(a.deviceDetect)():null}}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),i=n(260),o=n(849),s=n(17),u=n(205);function l(){var e=Object(u.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var c=n(204).default.div(l()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(o.a)().i18n;return r.a.createElement(c,null,r.a.createElement(i.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),s.a("Error on ReCAPTCHA")},hl:a.language}))}},246:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return v}));var a=n(211),r=n.n(a),i=n(212),o=n(229),s=n(220),u=n(235);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,l,c,p,d,m,f,v,h,g,b,y,O,j,E,w,S,x,T,C,k,A,P,q,I,D,R,V;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,i=t.captchaValue,s=t.nextStep,l=t.setActiveStep,c=t.history,e.prev=1,n(null),v=a.welcome,h=v.language,g=v.country,b=v.region,y=v.patientId,O=v.hospitalId,j=a["submit-steps"],E=j.vaccine,w=j.ageGroup,S=j.gender,x=j.ethnicity,T=j.biologicalSex,C=j.smokeLastSixMonths,k=j.currentSymptoms,A=j.symptomsStartedDate,P=j.currentRespiratoryCondition,q=j.currentMedicalCondition,(I=new FormData).append("device",JSON.stringify(Object(u.a)())),I.append("language",h),I.append("country",g),b&&I.append("region",b),O&&I.append("hospitalId",O),window.sourceCampaign&&I.append("source",window.sourceCampaign),E&&I.append("vaccine",E),w&&I.append("ageGroup",w),(D=S.other||S.selected[0])&&I.append("gender",D),x&&I.append("ethnicity",x),T&&I.append("biologicalSex",T),C&&I.append("smokeLastSixMonths",C),(null===k||void 0===k||null===(p=k.selected)||void 0===p?void 0:p.length)>0&&I.append("currentSymptoms",k.selected.join(",")),A&&I.append("symptomsStartedDate",A),(null===P||void 0===P||null===(d=P.selected)||void 0===d?void 0:d.length)>0&&I.append("currentRespiratoryCondition",P.selected.join(",")),(null===q||void 0===q||null===(m=q.selected)||void 0===m?void 0:m.length)>0&&I.append("currentMedicalCondition",q.selected.join(",")),(null===k||void 0===k?void 0:k.other)&&I.append("otherSymptoms",null===k||void 0===k?void 0:k.other),(null===P||void 0===P?void 0:P.other)&&I.append("otherRespiratoryConditions",null===P||void 0===P?void 0:P.other),(null===q||void 0===q?void 0:q.other)&&I.append("otherMedicalConditions",null===q||void 0===q?void 0:q.other),i&&I.append("captchaValue",i),e.next=29,o.a.post("/patient/".concat(y,"/questionary"),I,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 29:R=e.sent,s&&(null===(f=R.data)||void 0===f?void 0:f.submissionId)&&(l(!1),c.push(s,{submissionId:null===(V=R.data)||void 0===V?void 0:V.submissionId,patientId:y})),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 37:case"end":return e.stop()}}),e,null,[[1,33]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,l,c,p,d,m,f,v,h,g,b,y,O,j,E,w,S,x,T,C;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,i=t.captchaValue,s=t.nextStep,l=t.setActiveStep,c=t.history,e.prev=1,n(null),m=a.welcome,f=m.language,v=m.country,h=m.region,g=m.patientId,b=m.hospitalId,y=a["submit-steps"],O=y.ageGroup,j=y.gender,E=y.currentSymptoms,w=y.symptomsStartedDate,(S=new FormData).append("device",JSON.stringify(Object(u.a)())),S.append("language",f),S.append("country",v),h&&S.append("region",h),b&&S.append("hospitalId",b),window.sourceCampaign&&S.append("source",window.sourceCampaign),O&&S.append("ageGroup",O),(x=j.other||j.selected[0])&&S.append("gender",x),(null===E||void 0===E||null===(p=E.selected)||void 0===p?void 0:p.length)>0&&S.append("currentSymptoms",E.selected.join(",")),w&&S.append("symptomsStartedDate",w),i&&S.append("captchaValue",i),e.next=20,o.a.post("/patient/".concat(g,"/shortQuestionary"),S,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:T=e.sent,s&&(null===(d=T.data)||void 0===d?void 0:d.submissionId)&&(l(!1),c.push(s,{submissionId:null===(C=T.data)||void 0===C?void 0:C.submissionId,patientId:g})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(r.a.mark((function e(t){var n,a,i,l,c,p,d,m,f,v,h,g,b,y,O,j,E,w,S,x,T,C,k,A,P,q;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,i=t.captchaValue,l=t.nextStep,c=t.otherSteps,p=t.setActiveStep,d=t.history,m=t.isShortAudioCollection,e.prev=1,n(null),v=a.welcome,h=v.language,g=v.country,b=v.region,y=v.patientId,O=v.hospitalId,j=a["submit-steps"],E=j.recordYourCough,w=j.recordYourBreath,S=j.recordYourSpeech,(x=new FormData).append("device",JSON.stringify(Object(u.a)())),x.append("language",h),x.append("country",g),b&&x.append("region",b),O&&x.append("hospitalId",O),window.sourceCampaign&&x.append("source",window.sourceCampaign),E&&(T=E.recordingFile||E.uploadedFile,x.append("cough",T,T.name||"filename.wav")),w&&(C=w.recordingFile||w.uploadedFile,x.append("breath",C,C.name||"filename_breath.wav")),s.b.includes(g)&&S&&(k=S.recordingFile||S.uploadedFile,x.append("voice",k,k.name||"filename_voice.wav")),i&&x.append("captchaValue",i),x.append("shortAudioCollection",m||"false"),e.next=19,o.a.post("/patient/".concat(y,"/audioCollection"),x,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:A=e.sent,m&&(null===c||void 0===c?void 0:c.isShortAudioStep)?(p(!1),d.push(null===c||void 0===c?void 0:c.isShortAudioStep,{submissionId:null===(P=A.data)||void 0===P?void 0:P.submissionId,patientId:y})):l&&(null===(f=A.data)||void 0===f?void 0:f.submissionId)&&(p(!1),d.push(l,{submissionId:null===(q=A.data)||void 0===q?void 0:q.submissionId,patientId:y})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,l,c,p,d,m,f,v,h,g,b,y,O,j,E,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,i=t.captchaValue,s=t.nextStep,l=t.setActiveStep,c=t.history,e.prev=1,n(null),d=a.welcome,m=d.language,f=d.country,v=d.region,h=d.patientId,g=d.hospitalId,b=a["submit-steps"],y=b.patientAntigenTestResult,O=b.patientPcrTestResult,(j=new FormData).append("device",JSON.stringify(Object(u.a)())),j.append("language",m),j.append("country",f),v&&j.append("region",v),g&&j.append("hospitalId",g),window.sourceCampaign&&j.append("source",window.sourceCampaign),y&&j.append("patientAntigenTestResult",y),O&&j.append("patientPcrTestResult",O),i&&j.append("captchaValue",i),e.next=17,o.a.post("/patient/".concat(h,"/testResult"),j,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:E=e.sent,s&&(null===(p=E.data)||void 0===p?void 0:p.submissionId)&&(l(!1),c.push(s,{submissionId:null===(w=E.data)||void 0===w?void 0:w.submissionId,patientId:h})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(221),r=n.n(a),i=n(222),o=n.n(i),s=n(12),u=n.n(s),l=n(9),c=n.n(l),p=n(223),d=n.n(p),m=n(187),f=n(243);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function b(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function y(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var i=a.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(i.join("|")).test(t);if(!e&&!s)return[t];var u={};!function e(t){y(t).forEach((function(t){"string"!==typeof t&&(g(t)?e(b(t)):"object"!==o()(t)||c.a.isValidElement(t)||Object.assign(u,t))}))}(e);var l=n.services.interpolator.interpolate(t,h(h({},u),r),n.language),p=d.a.parse("<0>".concat(l,"</0>"));function m(e,t,n){var a=b(e),r=v(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function f(e,t,n,a){e.dummy&&(e.children=t),n.push(c.a.cloneElement(e,h(h({},e.props),{},{key:a}),t))}function v(t,n,r){var u=y(t);return y(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=u[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var b=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,y=c.a.isValidElement(b),O=y&&g(n,!0)&&!n.voidElement,j=s&&"object"===o()(b)&&b.dummy&&!y,E="object"===o()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof b)t.push(b);else if(g(b)||O){f(b,m(b,n,r),t,l)}else if(j){var w=v(u,n.children,r);t.push(c.a.cloneElement(b,h(h({},b.props),{},{key:l}),w))}else if(Number.isNaN(parseFloat(n.name))){if(E)f(b,m(b,n,r),t,l);else if(a.transSupportBasicHtmlNodes&&i.indexOf(n.name)>-1)if(n.voidElement)t.push(c.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var S=v(u,n.children,r);t.push(c.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},S))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var x=v(u,n.children,r);t.push("<".concat(n.name,">").concat(x,"</").concat(n.name,">"))}}else if("object"!==o()(b)||y)1===n.children.length&&p?t.push(c.a.cloneElement(b,h(h({},b.props),{},{key:l}),p)):t.push(c.a.cloneElement(b,h(h({},b.props),{},{key:l})));else{var T=n.children[0]?p:null;T&&t.push(T)}}else"text"===n.type&&t.push(n.content);return t}),[])}return b(v([{dummy:!0,children:e}],p,y(e||[]))[0])}function j(e){var t=e.children,n=e.count,a=e.parent,i=e.i18nKey,s=e.tOptions,u=e.values,p=e.defaults,d=e.components,v=e.ns,g=e.i18n,b=e.t,j=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),E=Object(l.useContext)(m.a)||{},w=E.i18n,S=E.defaultNS,x=g||w||Object(m.d)();if(!x)return Object(f.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var T=b||x.t.bind(x)||function(e){return e},C=h(h({},Object(m.c)()),x.options&&x.options.react),k=v||T.ns||S||x.options&&x.options.defaultNS;k="string"===typeof k?[k]:k||["translation"];var A=p||function e(t,n){if(!t)return"";var a="",i=y(t),s=n.transKeepBasicHtmlNodesFor||[];return i.forEach((function(t,i){if("string"===typeof t)a+="".concat(t);else if(c.a.isValidElement(t)){var u=Object.keys(t.props).length,l=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&l&&0===u)a+="<".concat(t.type,"/>");else if(p||l&&0===u)if(t.props.i18nIsDynamicList)a+="<".concat(i,"></").concat(i,">");else if(l&&1===u&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(i,">").concat(d,"</").concat(i,">")}else a+="<".concat(i,"></").concat(i,">")}else if("object"===o()(t)){var m=t.format,v=r()(t,["format"]),h=Object.keys(v);if(1===h.length){var g=m?"".concat(h[0],", ").concat(m):h[0];a+="{{".concat(g,"}}")}else Object(f.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(f.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,C)||C.transEmptyNodeValue||i,P=C.hashTransKey,q=i||(P?P(A):A),I=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},D=h(h(h(h({},s),{},{count:n},u),I),{},{defaultValue:A,ns:k}),R=O(d||t,q?T(q,D):A,x,C,D),V=void 0!==a?a:C.defaultTransParent;return V?c.a.createElement(V,j,R):R}},303:function(e,t,n){"use strict";n.r(t);var a=n(211),r=n.n(a),i=n(234),o=n(212),s=n(206),u=n(9),l=n.n(u),c=n(244),p=n(215),d=n.n(p),m=n(849),f=n(250),v=n(214),h=n(210),g=n(231),b=n(219),y=n(232),O=n(220),j=n(246),E=n(218),w=n(207),S=n(208),x=n(247),T=n(25),C=n.n(T),k=n(151),A=n(394),P=n.n(A),q=n(395),I=n.n(q),D=n(205),R=n(204);function V(){var e=Object(D.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 142.69%;\n  color: ",";\n"]);return V=function(){return e},e}function F(){var e=Object(D.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 142.69%;\n  color: ",";\n"]);return F=function(){return e},e}function M(){var e=Object(D.a)(["\n  flex: 1;\n  text-align: left;\n  padding-left: 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return M=function(){return e},e}function N(){var e=Object(D.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return N=function(){return e},e}function B(){var e=Object(D.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return B=function(){return e},e}var J=R.default.div(B()),Q=R.default.button(N(),(function(e){return e.theme.colors.lightGray})),$=R.default.div(M()),K=R.default.div(F(),(function(e){return e.theme.colors.darkGray})),W=R.default.div(V(),(function(e){return e.theme.colors.darkBlack})),z=l.a.forwardRef((function(e,t){var n=e.label,a=e.value,r=e.onClick;return l.a.createElement(Q,{ref:t,onClick:r},l.a.createElement("img",{alt:"calendar",src:P.a}),l.a.createElement($,null,l.a.createElement(K,null,n),l.a.createElement(W,null,a)),l.a.createElement("img",{alt:"calendar",src:I.a}))}));z.defaultProps={value:void 0,onClick:void 0};var G=l.a.memo((function(e){var t=e.label,n=e.value,a=e.locale,r=e.onChange,i=l.a.useMemo((function(){return Object(k.default)(new Date)}),[]);return l.a.createElement(J,null,l.a.createElement(C.a,{selected:n,customInput:l.a.createElement(z,{label:t}),onChange:r,dateFormat:"EEE, MMM d, Y",locale:a,maxDate:i}))})),L=n(217),Y=n(237),H=n(236),U=y.object({pcrTestDate:y.date().when("$hasPcr",{is:!0,then:y.date().required(),otherwise:y.date()}),pcrTestResult:y.string().when("$hasPcr",{is:!0,then:y.string().required(),otherwise:y.string()}),antigenTestDate:y.date().when("$hasAntigen",{is:!0,then:y.date().required(),otherwise:y.date()}),whatAntigenTestResult:y.string().when("$country",{is:"Japan",then:y.string().when("$hasAntigen",{is:!0,then:y.string().required(),otherwise:y.string()}),otherwise:y.string().notRequired()}),antigenTestResult:y.string().when("$hasAntigen",{is:!0,then:y.string().required(),otherwise:y.string()})}).defined(),_=y.object({patientAntigenTestResult:y.string().oneOf(["positive","negative",""]).when("patientPcrTestResult",(function(e,t){return e?t:t.required()})),patientPcrTestResult:y.string().oneOf(["positive","negative",""])}).defined();t.default=l.a.memo((function(e){var t,n,a,p,y,T,C=e.previousStep,k=e.nextStep,A=e.storeKey,P=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,q=Object(w.a)(),I=q.setDoGoBack,D=q.setTitle,R=q.setSubtitle,V=q.setType,F=Object(c.g)(),M=Object(m.a)(),N=M.t,B=M.i18n,J=Object(h.d)(Object(E.b)(A)),Q=J.state,$=J.action,K=Object(O.e)(),W=Object(O.d)(),z=l.a.useState(!0),Z=Object(s.a)(z,2),X=Z[0],ee=Z[1],te=l.a.useState(!1),ne=Object(s.a)(te,2),ae=ne[0],re=ne[1],ie=l.a.useState(!1),oe=Object(s.a)(ie,2),se=oe[0],ue=oe[1];Object(u.useEffect)((function(){if(Q){var e,t,n=(Q["submit-steps"]||{}).testTaken;re(null!==(e=null===n||void 0===n?void 0:n.includes("pcr"))&&void 0!==e&&e),ue(null!==(t=null===n||void 0===n?void 0:n.includes("antigen"))&&void 0!==t&&t)}}),[Q]);var le=Object(v.e)({mode:"onChange",defaultValues:null===Q||void 0===Q?void 0:Q[A],context:{hasPcr:null!==(t=null===(n=Q["submit-steps"])||void 0===n||null===(a=n.testTaken)||void 0===a?void 0:a.includes("pcr"))&&void 0!==t&&t,hasAntigen:null!==(p=null===(y=Q["submit-steps"])||void 0===y||null===(T=y.testTaken)||void 0===T?void 0:T.includes("antigen"))&&void 0!==p&&p,country:W},resolver:Object(g.a)(K?_:U)}),ce=le.control,pe=le.handleSubmit,de=le.formState,me=de.errors,fe=de.isValid,ve=l.a.useState(null),he=Object(s.a)(ve,2),ge=he[0],be=he[1],ye=l.a.useState(null),Oe=Object(s.a)(ye,2),je=Oe[0],Ee=Oe[1],we=l.a.useState(!0),Se=Object(s.a)(we,2),xe=Se[0],Te=Se[1],Ce=de.isSubmitting;Object(u.useEffect)((function(){je||be(null)}),[je]);var ke=l.a.useCallback((function(){ee(!1),C?F.push(C):F.goBack()}),[F,C]);Object(u.useEffect)((function(){Object(S.a)(),D(K?"":N("questionary:testTaken.title")),V(K?"tertiary":"primary"),R(""),I((function(){return ke}))}),[ke,I,D,V,R,K,N]);var Ae=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}if(a=(n=t).pcrTestDate,o=n.pcrTestResult,s=n.antigenTestDate,u=n.antigenTestResult,l=n.whatAntigenTestResult,!ae||a&&o){e.next=4;break}return e.abrupt("return");case 4:if("Japan"!==W||!se||s&&u&&l){e.next=6;break}return e.abrupt("return");case 6:if(!se||s&&u){e.next=8;break}return e.abrupt("return");case 8:$(t),K?Object(j.d)({setSubmitError:function(e){return be(e?N(e):null)},state:Object(i.a)(Object(i.a)({},Q),{},{"submit-steps":Object(i.a)(Object(i.a)({},Q["submit-steps"]),t)}),captchaValue:je,action:$,nextStep:k,setActiveStep:ee,history:F}):k&&(ee(!1),F.push(k));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=l.a.useMemo((function(){return"Japan"===W?[{value:"positive",label:N("questionary:resultPcrTest.options.positive")},{value:"negative",label:N("questionary:resultPcrTest.options.negative")},{value:"unsure",label:N("questionary:resultPcrTest.options.unsure")}]:[{value:"positive",label:N("questionary:resultPcrTest.options.positive")},{value:"negative",label:N("questionary:resultPcrTest.options.negative")},{value:"pending",label:N("questionary:resultPcrTest.options.pending")},{value:"unsure",label:N("questionary:resultPcrTest.options.unsure")}]}),[W,N]),qe=l.a.useMemo((function(){return"Japan"===W?[{value:"positive",label:N("questionary:resultAntigenTest.options.positive")},{value:"negative",label:N("questionary:resultAntigenTest.options.negative")}]:[{value:"positive",label:N("questionary:resultAntigenTest.options.positive")},{value:"negative",label:N("questionary:resultAntigenTest.options.negative")},{value:"pending",label:N("questionary:resultAntigenTest.options.pending")},{value:"unsure",label:N("questionary:resultAntigenTest.options.unsure")}]}),[W,N]);return l.a.createElement(H.MainContainer,null,!K&&ae&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H.QuestionText,{extraSpace:!0,first:!0},N("questionary:whenPcrTest"),"Japan"===W&&l.a.createElement(H.QuestionAllApply,null,N("questionary:whenPcrTestCaption"))),l.a.createElement(v.a,{control:ce,name:"pcrTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(G,{label:"Date",value:n?new Date(n):null,locale:B.language,onChange:t})}}),l.a.createElement(H.QuestionText,{extraSpace:!0},N("questionary:resultPcrTest.question")),l.a.createElement(v.a,{control:ce,name:"pcrTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(x.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:Pe})}})),!K&&se&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H.QuestionText,{extraSpace:!0,first:!ae},N("questionary:whenAntigenTest")),l.a.createElement(v.a,{control:ce,name:"antigenTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(G,{label:"Date",value:n?new Date(n):null,locale:B.language,onChange:t})}}),"Japan"===W&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H.QuestionText,{extraSpace:!0},N("questionary:whatAntigenTest.question")),l.a.createElement(v.a,{control:ce,name:"whatAntigenTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(x.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"medical",label:N("questionary:whatAntigenTest.options.medical")},{value:"research",label:N("questionary:whatAntigenTest.options.research")},{value:"unknown",label:N("questionary:whatAntigenTest.options.unknown")}]})}})),l.a.createElement(H.QuestionText,{extraSpace:!0},N("questionary:resultAntigenTest.question")),l.a.createElement(v.a,{control:ce,name:"antigenTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(x.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:qe})}})),K&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H.QuestionText,{extraSpace:!0},l.a.createElement(f.a,{i18nKey:"questionary:patient:resultPcrTest.question"},"What was the result of Patient ",K,"'s PCR-based COVID-19 test?")),l.a.createElement(v.a,{control:ce,name:"patientPcrTestResult",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(x.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0]||"")},items:[{value:"positive",label:N("questionary:resultPcrTest.options.positive")},{value:"negative",label:N("questionary:resultPcrTest.options.negative")}]})}}),l.a.createElement(H.QuestionText,{extraSpace:!0},l.a.createElement(f.a,{i18nKey:"questionary:patient:resultAntigenTest"},"What was the result of Patient ",K,"'s rapid antigen COVID-19 test?")),l.a.createElement(v.a,{control:ce,name:"patientAntigenTestResult",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(x.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0]||"")},items:[{value:"positive",label:N("questionary:resultAntigenTest.options.positive")},{value:"negative",label:N("questionary:resultAntigenTest.options.negative")}]})}})),l.a.createElement("p",null,l.a.createElement(b.a,{errors:me,name:"name"})),X&&l.a.createElement(P,null,K&&"Colombia"!==W?ge?l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{onChange:Ee,setRecaptchaAvailable:Te}),l.a.createElement(H.TempBeforeSubmitError,null,ge)):l.a.createElement(Y.a,{onChange:Ee,setRecaptchaAvailable:Te}):null,l.a.createElement(L.a,{leftLabel:N(K?Ce?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton"),leftHandler:pe(Ae),leftDisabled:K&&"Colombia"!==W?Ce||xe&&!je:!fe,invert:!0})))}))},319:function(e,t,n){"use strict";n.r(t);var a=n(303);n.d(t,"default",(function(){return a.default}))},394:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},395:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"}}]);
//# sourceMappingURL=29.8839e179.chunk.js.map