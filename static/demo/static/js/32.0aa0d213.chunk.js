(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[32],{224:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var c=n(37),r=n(169),o=n(170),a=n(6),u=n.n(a),i=n(56),p=n(286),s=n(178),d=n(171),l=n(166),h=n(165);function f(){var t=Object(l.a)(["\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return f=function(){return t},t}var m=h.default.div(f(),(function(t){return t.theme.breakpoints.tablet}));function b(){var t=Object(l.a)(["\n  margin-bottom: 16px;\n"]);return b=function(){return t},t}function j(){var t=Object(l.a)(["\n  height: 100%;\n"]);return j=function(){return t},t}function v(){var t=Object(l.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return v=function(){return t},t}var g=h.default.div(v()),O=h.default.div(j()),x=h.default.div(b()),S=Object(i.a)((function(t){var e=t.container;return n(234)("./".concat(e))}),{fallback:Object(c.jsx)("div",{children:"Loading ..."}),cacheKey:function(t){return t.container}});var w=function(t){var e=t.steps,n=t.children,a=Object(s.i)(),i=Object(s.h)(),l=u.a.useState(!1),h=Object(o.a)(l,2),f=h[0],b=h[1],j=u.a.useMemo((function(){var t=a.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[a.url,e]);return u.a.useEffect((function(){b(!0)}),[]),Object(c.jsx)(d.a,{children:Object(c.jsxs)(g,{children:[Object(c.jsx)(O,{children:f&&Object(c.jsx)(p.a,{location:i,timing:"ease-in-out",duration:500,pathList:j,children:e.map((function(t){return Object(c.jsx)(s.b,{exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return a.path+t})):a.path+t.path,render:function(){return Object(c.jsx)(m,{children:Object(c.jsx)(S,Object(r.a)({container:t.componentPath},t.props))})}},t.componentPath)}))})}),Object(c.jsx)(x,{id:"wizard-buttons",children:n})]})})},y=u.a.memo(w)},250:function(t,e,n){"use strict";n.r(e);var c=n(37),r=n(172),o=n(6),a=n.n(o),u=n(171),i=n(178),p=n(224),s="submit-steps";Object(u.b)(Object(r.a)({},s,{recordYourCough:{recordingFile:void 0,uploadedFile:void 0}}),{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});var d="/submit-steps",l="SubmitSteps",h="RecordingsSteps",f="recordYourCough",m=[{path:"/step-record/cough",componentPath:"".concat(l,"/").concat(h,"/Introduction"),props:{storeKey:s,previousStep:"/welcome/step-4",nextStep:"".concat(d,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(d,"/step-manual-upload/cough")},metadata:{currentLogic:f}}},{path:"/step-manual-upload/cough",componentPath:"".concat(l,"/").concat(h,"/RecordManualUpload"),props:{storeKey:s,previousStep:"".concat(d,"/step-record/cough"),nextStep:"".concat(d,"/step-listen/cough"),metadata:{currentLogic:f}}},{path:"/step-listen/cough",componentPath:"".concat(l,"/").concat(h,"/ListenAudio"),props:{storeKey:s,previousStep:"".concat(d,"/step-record/cough"),nextStep:"".concat(d,"/prediction-result"),metadata:{currentLogic:f}}},{path:"/prediction-result",componentPath:"".concat(l,"/").concat("Submission","/PredictionResult"),props:{storeKey:s,previousStep:"".concat(d,"/step-record/cough"),nextStep:""}}],b=function(){var t=Object(u.c)().state,e=Object(i.g)();return a.a.useEffect((function(){var n=function(t){var e=null;if(t[s]){var n=t[s].recordYourCough,c=[];if(n){var r=n.recordingFile,o=n.uploadedFile;r&&c.push({file:r,route:"/step-record/cough"}),o&&c.push({file:o,route:"/step-manual-upload/cough"})}var a=c.find((function(t){return!(!(e=t.file)||void 0!==e.size);var e}));a&&(e=a.route)}return e}(t);n&&e.push("/".concat(s).concat(n))}),[]),null},j=function(){return Object(c.jsx)(p.a,{steps:m,children:Object(c.jsx)(b,{})})};e.default=a.a.memo(j)}}]);
//# sourceMappingURL=32.0aa0d213.chunk.js.map