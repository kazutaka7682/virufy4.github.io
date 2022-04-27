(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[30],{139:function(e,o,t){"use strict";t.r(o);var r={};t.r(r),t.d(r,"en",(function(){return h})),t.d(r,"es",(function(){return f}));var n=t(36),a=(t(3),t(22)),i=t.n(a),s=t(55),d=(t(78),t(52)),c=t(68),u=t(144),l=t(49),g=t(33),p=t(146),h=t(58),f=t(59);Object(l.registerLocale)("en",g.a),Object(l.registerLocale)("es",p.a),d.a.use(c.a).use(u.e).init({resources:r,ns:"main",missingKeyHandler:!1,fallbackLng:"en",fallbackNS:"main",interpolation:{escapeValue:!1},debug:!0});d.a;var m={onUpdate:function(e){confirm("A new version is available. Do you want to update?")&&e.unregister().then((function(){window.location.reload()}))},onSuccess:function(e){console.info("service worker on success state"),console.log(e)}},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=Object(s.a)((function(){return Promise.all([t.e(33),t.e(34)]).then(t.bind(null,849))}),{fallback:Object(n.jsx)("div",{children:"Loading"})});i.a.render(Object(n.jsx)(b,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://virufy.org/predict",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("https://virufy.org/predict","/service-worker.js");v?(function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(o,e)}))}}(m)},58:function(e){e.exports=JSON.parse('{"main":{"title":"COVID-19 Cough Detection","logoIntro":"An Independent Nonprofit Research Organization","note":"<strong>Please note:</strong> This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor.","paragraph1":"Welcome! This study should only take about 5 minutes to complete.","selectYourLanguage":"Language","paragraph2":"Covid-19 Cough Data Collection Study","nextButton":"Next","createdBy":"Created By","aboutUsTitle":"About Us","passcode":"Passcode","enterPasscode":"Enter your passcode","patientId":"Patient ID","enterPatientId":"Enter your Patient ID"},"recordingsIntroduction":{"recordCough":{"header":"Record your cough","title":"Instructions","intro1":"Find a <strong>quiet environment</strong> at least <strong>20 ft (6m)</strong> away from others and wear a cloth or surgical mask. If you are feeling ill, please sit down.","intro2":"Hold your device <strong>1-2 ft (30-60 cm)</strong> away from your mouth and <strong>do not obstruct</strong> or cover your device with plastic. Do not cough violently or too forcefully.","text":"Tap the record button and <strong>cough intentionally</strong> into the bottom of your phone <strong>3 times</strong> with a <strong>deep breath</strong> between each cough. When you are done, tap the stop button. ","record":"Record","stop":"Stop"},"next":"Next","retryButton":"Retry","releaseButtonStart":"Release to start recording","releaseButtonStop":"Release to stop recording","shortRecording":"Please make a recording of at least 3 seconds"},"recordingsRecord":{"recordCough":{"header":"Record your cough"},"next":"Continue","delete":"Delete","textCount":"Click continue to proceed.","upload":"Upload your own file"},"recordingsRecordManual":{"header":"Upload a file","addFile":"Add your file","constraint":"Add up to 5 MB","uploadFile":"Upload File","next":"Done","micError":"Can\u2019t access the mic? Upload an audio file.","micErrorDescription":"Please upload an audio file here.","fileDurationTooShort":"Please upload a file of at least 3 seconds","fileSizeTooBig":"Please upload a file of less than 5 MB","fileRequired":"Please upload a file"},"recordingsListen":{"recordCough":{"header":"Record your cough","intro1":"Please cough away from others around you! Please sit down if you are feeling ill.","intro2":" In a quiet environment, please press record and intentionally cough around 3-5 times."},"title":"Upload Complete","subtitle":"Feel free to take a listen!","next":"Continue","retake":"Retake"},"predictionResult":{"processingTitle":"Processing...","note":"Important Note:","result":"Results","resultModal":"This app will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsiblity to seek medical advice from your doctor.","resultNotDetected":"COVID-19: NOT DETECTED","resultNotDetectedText":"Your voice does not seem to have indicators of COVID-19. Please <strong>continue to take appropriate measures</strong> based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily.","resultNotAnalyze":"Unable to analyze","resultNotAnalyzeText":" Our algorithm is not able to determine your COVID-19 status. <strong>Please submit another cough.</strong>","resultDetected":"COVID-19: DETECTED","resultDetectedText":"Your voice has indicators of COVID-19. <strong>Please contact your healthcare professional</strong> and take additional precautions.","likelihoodPrefix":"COVID-19 result:","nextButton":"Submit another cough","submitError":"An error occurred. Please try again.","error":"Error: ","result_positive":"Positive","result_negative":"Negative"},"footerReportProblems":{"message":"Something wrong? Report an error"}}')},59:function(e){e.exports=JSON.parse('{"main":{"title":"Formulario de Recolecci\xf3n de datos de COVID-19","logoIntro":"Una organizaci\xf3n independiente de investigaci\xf3n sin \xe1nimo de lucro","note":"<strong>Por favor, tenga en cuenta:</strong> Este formulario es s\xf3lo para recopilar datos. No predice su estado de COVID-19 ni diagnostica ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 llevando a cabo una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que usted proporcione s\xf3lo para esa investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y le recuerda que es su responsabilidad buscar el consejo de su m\xe9dico.","paragraph1":"Bienvenido. Este estudio s\xf3lo deber\xeda tomarle unos 5 minutos en completarse.","selectYourLanguage":"Idioma","paragraph2":"Estudio de recopilaci\xf3n de datos de tos Covid-19","nextButton":"Siguiente","createdBy":"Creado por","aboutUsTitle":"Sobre Nosotros","passcode":"C\xf3digo de acceso","enterPasscode":"Introduzca su c\xf3digo de acceso","patientId":"ID de paciente","enterPatientId":"Introduzca su ID de paciente"},"recordingsIntroduction":{"recordCough":{"header":"Grabe su tos","title":"Instrucciones","intro1":"Busque un <strong>entorno tranquilo</strong>, al menos a <strong>6 metros </strong> de distancia de los dem\xe1s, y utilice una mascarilla quir\xfargica o de tela. Si se siente mal, si\xe9ntese.","intro2":"Mantenga el dispositivo a una distancia de <strong> 30-60 cent\xedmetros </strong> de su boca y <strong>no obstruya</strong> ni cubra el dispositivo con pl\xe1stico. No tosa violentamente o con demasiada fuerza.","text":"Haga clic en el bot\xf3n de grabaci\xf3n (el micr\xf3fono) y <strong>tosa intencionalmente tres veces, con una respiraci\xf3n profunda entre cada tos</strong>, dirigiendo su tos a la parte inferior de su dispositivo. Cuando haya terminado, haga clic en el bot\xf3n de detener (stop)","record":"Grabar","stop":"Parar"},"next":"Siguiente","retryButton":"Reintentar","releaseButtonStart":"Suelte para empezar a grabar","releaseButtonStop":"Suelte para detener la grabaci\xf3n","shortRecording":"Por favor, haga una grabaci\xf3n de al menos 3 segundos"},"recordingsRecord":{"recordCough":{"header":"Grabe su tos"},"next":"Continuar","delete":"Borrar","textCount":"Pulse el bot\xf3n continuar para avanzar.","upload":"Sube tu propio audio"},"recordingsRecordManual":{"header":"Subir un archivo","addFile":"A\xf1ada su archivo","constraint":"A\xf1ada hasta 5 MB","next":"Hecho","uploadFile":"Subir Archivo","micError":"\xbfNo puede acceder al micr\xf3fono? Suba un archivo de audio.","micErrorDescription":"Por favor, suba un archivo de audio aqu\xed.","fileDurationTooShort":"Por favor, suba un archivo de al menos 3 segundos","fileSizeTooBig":"Por favor, suba un archivo de menos de 5 MB","fileRequired":"Por favor, suba un archivo"},"recordingsListen":{"recordCough":{"header":"Grabe su tos","intro1":"Por favor, tosa lejos de las personas a tu alrededor. Si se siente enfermo, por favor si\xe9ntese.","intro2":"En un ambiente silencioso, por favor presione el bot\xf3n de grabar y tosa intencionalmente de 3 a 5 veces."},"title":"Grabaci\xf3n completada","subtitle":"Si\xe9ntase libre de escuchar la grabaci\xf3n!","next":"Continuar","retake":"Retomar"},"predictionResult":{"processingTitle":"Procesando...","note":"Nota importante:","result":"Resultados","resultModal":"Esta aplicaci\xf3n no predecir\xe1 su estado de COVID-19 ni diagnosticar\xe1 ninguna enfermedad, trastorno u otra condici\xf3n de salud. Virufy est\xe1 realizando una investigaci\xf3n y utilizar\xe1 la informaci\xf3n que proporcione solo para esa investigaci\xf3n. Virufy no sustituir\xe1 a un m\xe9dico y quisiera recordarle que es su responsabilidad buscar el consejo m\xe9dico de su m\xe9dico.","resultNotDetected":"COVID-19: NO DETECTADO","resultNotDetectedText":"Su voz no parece tener indicadores de COVID-19. <strong> Contin\xfae tomando las medidas adecuadas </strong> seg\xfan los consejos de su profesional sanitario o del organismo regulador correspondiente y vuelva a evaluarse en nuestra aplicaci\xf3n a diario.","resultNotAnalyze":"Incapaz de analizar","resultNotAnalyzeText":"Nuestro algoritmo no puede determinar su estado de COVID-19. <strong>Por favor env\xede otra grabaci\xf3n.</strong>","resultDetected":"COVID-19: DETECTADO","resultDetectedText":"Tu voz tiene indicadores de COVID-19. <strong> Comun\xedquese con su profesional de la salud </strong> y tome precauciones adicionales.","predictionResultTitle":"Resultado de la Predicci\xf3n","likelihoodPrefix":"Resultado de COVID-19:","nextButton":"Subir otra tos","submitError":"Se produjo un error. Por favor, int\xe9ntelo de nuevo.","error":"Error: ","result_positive":"Positivo","result_negative":"Negativo"},"footerReportProblems":{"message":"\xbfAlgo mal? Reportar un problema"}}')}},[[139,31,32]]]);
//# sourceMappingURL=main.eb6ae086.chunk.js.map