(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1998:function(e,t,i){var a,n;a=[i(125),i(98),i(11)],void 0===(n=function(e,t,a){"use strict";a=i(0)(a),i(1395),i(1062),i(1064),i(1065),i(1066),i(1068),i(1069),i(1070),i(1071),i(1072),i(1216),i(1073),i(1074),i(994),i(1431),i(1075),i(1077),i(1078),i(1432),i(1433),i(1434),i(1435),i(1436),i(1437),i(1438),i(1440),i(2225),i(1441),i(1442),i(1443),i(1444),i(1445),i(1446),i(1447),i(1448),i(1449),i(1450),i(1451),i(1452),i(1454),i(1214),i(1455),i(1456),i(1460),i(1461),i(1462),i(1080),i(1198),i(1463),i(1464),i(1465),i(1466),i(1467),i(1468),i(1469),i(1470),i(1471),i(2238),i(1472),i(1475),i(1476),window.CSSPlugin.defaultSkewType="simple","undefined"==typeof dboperate&&(window.dboperate=null),"undefined"==typeof DB&&(window.DB=null);var n=i(1062),l=window.interaction_view||{};if(l.force3D=!1,l=$.extend({},l,n),void 0!==window.global||l.foredit||(window.global={message:function(e,t){l.errorAlert(t)}}),null==("undefined"==typeof _e?"undefined":(0,a.default)(_e))&&(window._e={}),l.DEBUG=_g.getUrlParameterByName("-debug"),l.LOCAL_DEBUG=_g.getUrlParameterByName("-local"),l.weixin=i(1072),l.control=i(1065),l.events=i(1066),l.environment=i(1068),l.media=i(1069),l.screenset=i(1075),l.adapt=i(1070),l.analytics=i(1071),l.application=i(1078),(_g.device.mobile()||_g.device.tablet())&&(l.ismobile=!0),l.touchview=!0,l.isAndroid=l.android=_g.device.android(),l.isWeixin=_g.device.isWeixin(),l.isIos=_g.device.ios(),l.isMPBank=_g.device.isMPBank(),l.isMPBank){var o=navigator.userAgent.toLowerCase().match(/mpbank\/[\d.]+/)[0].split("/");l.mpBankVersion=o[1],l.mpBankVersion>="7.4.0"&&cmblapi.applet({api:"checkAppletContainer",success:function(){l.mpBankAppletContainer=!0}})}if(l.isWin=!1,l.isMac=!1,l.isQQ=_g.device.isQQ(),l.touchinit=i(1077),l.statemanage=i(1073),l.util=i(1074),window.interaction_view=l,l.touchinit.init(),l.isMPBank){window.cmblsJSExecutor=function(e){if(window.cmblsExecutor){window.cmblsExecutor;window.cmblsExecutor.executeCmbls("1.0",e)}else document.addEventListener("CMBLSExecutorReady",(function(){window.cmblsExecutor;window.cmblsExecutor.executeCmbls("1.0",e)}),!1)};var c=window.CMBLS=window.CMBLS||{};void 0===c.PictureAssist&&(c.PictureAssist={},c.PictureAssist.successCallBackFunc={},c.PictureAssist.successCallback=function(e,t){if(null!=c.PictureAssist.successCallBackFunc[e])c.PictureAssist.successCallBackFunc[e](),delete c.PictureAssist.successCallBackFunc[e];else{$(t).children("stateCode").text(),$(t).children("description").text();l.errorAlert("图片已保存到相册")}},c.PictureAssist.failCallBackFunc={},c.PictureAssist.failCallback=function(e,t){if(null!=c.PictureAssist.failCallBackFunc[e])c.PictureAssist.failCallBackFunc[e](),delete c.PictureAssist.failCallBackFunc[e];else{$(t).children("stateCode").text();var i=$(t).children("description").text();l.errorAlert(i)}}),void 0===c.socialShare&&(c.socialShare={},c.socialShare.successCallBackFunc={},c.socialShare.successCallback=function(e,t){if(null!=c.socialShare.successCallBackFunc[e])c.socialShare.successCallBackFunc[e](),delete c.socialShare.successCallBackFunc[e];else{$(t).children("stateCode").text(),$(t).children("description").text();l.errorAlert("分享成功")}},c.socialShare.failCallBackFunc={},c.socialShare.failCallback=function(e,t){if(null!=c.socialShare.failCallBackFunc[e])c.socialShare.failCallBackFunc[e](),delete c.socialShare.failCallBackFunc[e];else{$(t).children("stateCode").text();var i=$(t).children("description").text();l.errorAlert(i)}})}}.apply(t,a))||(e.exports=n)},2225:function(e,t,i){var a,n;a=[i(11)],void 0===(n=function(e){"use strict";var t=i(0);function a(t){if(this.hasDeviceMotion="ondevicemotion"in window,this.options={threshold:15,timeout:480},"object"===(0,e.default)(t))for(var i in t)t.hasOwnProperty(i)&&(this.options[i]=t[i]);if(this.lastTime=new Date,this.lastX=0,this.lastY=0,this.lastZ=0,this.liTime=0,this.curTime=0,this.x=0,this.y=0,this.z=0,this.speed=this.options.threshold,"function"==typeof document.CustomEvent)this.event=new document.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof document.createEvent)return!1;this.event=document.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}e=t(e),a.prototype.reset=function(){this.lastTime=new Date,this.lastX=0,this.lastY=0,this.lastZ=0,this.liTime=0,this.curTime=0},a.prototype.start=function(){this.reset(),this.hasDeviceMotion&&window.addEventListener("devicemotion",this,!1)},a.prototype.stop=function(){this.hasDeviceMotion&&window.removeEventListener("devicemotion",this,!1),this.reset()},a.prototype.devicemotion=function(e){this.liTime=(new Date).getTime(),this.curTime>1e4&&this.liTime-this.curTime>480&&(this.curTime=0,window.dispatchEvent(this.event));var t=e.accelerationIncludingGravity;this.x=t.x,this.y=t.y,this.z=t.z,(Math.abs(this.x-this.lastX)>this.speed||Math.abs(this.y-this.lastY)>this.speed||Math.abs(this.z-this.lastZ)>this.speed)&&(this.curTime=(new Date).getTime(),this.liTime=this.curTime),this.lastX=this.x,this.lastY=this.y,this.lastZ=this.z},a.prototype.handleEvent=function(e){if("function"==typeof this[e.type])return this[e.type](e)},window.Shake=a}.apply(t,a))||(e.exports=n)},2238:function(e,t,i){(function(e){var a,n,l;n=[i(125),i(8),i(10),i(97),i(353),i(63),i(126),i(11)],void 0===(l=function(o,c,s,r,u,p,d,h){"use strict";var f,m=i(0);r=m(r),u=m(u),p=m(p),d=m(d),h=m(h),window,f=function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){void 0!==r.default&&u.default&&Object.defineProperty(e,u.default,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==(0,h.default)(e)&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){var a,n;void 0===(n="function"==typeof(a=function(i){function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callbackFuncs={},this.haveShowed=!1}return t=e,(i=[{key:"version",value:function(){return{version:"7.5.0",buildTime:"20191120175955",env:"pro.min"}}},{key:"_appVersion",value:function(){try{var e=navigator.userAgent.toLowerCase().match(/mpbank\/(\d+\.\d+\.\d+)/);return e?e[1]:""}catch(e){return""}}},{key:"_cmblsJSExecutor",value:function(e){window.cmblsExecutor?window.cmblsExecutor.executeCmbls("1.0",e):document.addEventListener("CMBLSExecutorReady",(function(){window.cmblsExecutor.executeCmbls("1.0",e)}),!1)}},{key:"_defineUpgradePromptCallback",value:function(){window.CMBLS=window.CMBLS||{};var e=window.CMBLS.PromptTool;window.CMBLS.PromptTool={},window.CMBLS.PromptTool.successCallback=function(e,t){},window.CMBLS.PromptTool.failCallback=function(t,i){window.CMBLS.PromptTool=e};var t=window.CMBLS.TPAppCall;window.CMBLS.TPAppCall={},window.CMBLS.TPAppCall.successCallback=function(e,i){window.CMBLS.TPAppCall=t},window.CMBLS.TPAppCall.failCallback=function(e,i){window.CMBLS.TPAppCall=t},window.CMBLS.PromptTool.cmblapiUpgradePromptConfirm=function(t){var i=navigator.userAgent.toLowerCase();if((0,p.default)(i).call(i,"android")>-1){var a="http://cmbls/TPAppCall?id=CmblapiTPAppCall&data="+encodeURIComponent("market://details?id=cmb.pb");window.cmblapi._cmblsJSExecutor(a)}else(0,p.default)(i).call(i,"iphone")>-1&&(a="http://cmbls/TPAppCall?id=CmblapiTPAppCall&data="+encodeURIComponent("itms-apps://itunes.apple.com/cn/app/zhao-shang-yin-xing/id392899425?mt=8"),window.cmblapi._cmblsJSExecutor(a));window.CMBLS.PromptTool=e},window.CMBLS.PromptTool.cmblapiUpgradePromptCancel=function(t){window.CMBLS.PromptTool=e}}},{key:"_upgradePrompt",value:function(){this._defineUpgradePromptCallback();var e="http://cmbls/PromptTool?id=upgradePrompt&type=dialog&dialog_style="+encodeURIComponent((0,d.default)([{title:"App升级提示",content:"您的招商银行App版本过低，可能会导致无法正常使用当前功能",buttonStyle:[{id:"1",text:"稍后更新",callback:"cmblapiUpgradePromptCancel"},{id:"2",text:"立即更新",callback:"cmblapiUpgradePromptConfirm"}]}]));this._cmblsJSExecutor(e)}},{key:"cmblapiCall",value:function(e,t){try{(t=t||{})._jsVer="7.5.0",t._jsBuildTime="20191120175955";var i=(new Date).getTime().toString()+Math.round(1e4*Math.random()).toString();if(null==i||""===i)return;for(var a in t)if("function"==typeof t[a]){var n=i+a;this.callbackFuncs[n]=t[a]}var l=(0,d.default)(t);if(null==l||""===l)return;window.cmblapiBridge?window.cmblapiBridge.invoke(i,e,l):document.addEventListener("cmblapiJSBridgeReady",(function(){window.cmblapiBridge.invoke(i,e,l)}),!1)}catch(e){}}},{key:"callback",value:function(e,t,i){try{if(null==e||""===e)return;if(null==t||""===t)return;var a=this.callbackFuncs[e+t];if("function"==typeof a)if(null==i||""===i)a();else{var n=JSON.parse(i);if(n.errCode&&1===n.errCode&&0==this.haveShowed)return this.haveShowed=!0,void this._upgradePrompt();a(n)}}catch(e){}}},{key:"callbackWithObj",value:function(e,t,i){if(i.errCode&&1===i.errCode&&0==this.haveShowed)return this.haveShowed=!0,void this._upgradePrompt();try{if(null==e||""===e)return;if(null==t||""===t)return;var a=this.callbackFuncs[e+t];"function"==typeof a&&(null==i||""===i?a():a(i))}catch(e){}}},{key:"checkJsApi",value:function(e){this.cmblapiCall("checkJsApi",e)}},{key:"getSystemInfo",value:function(e){this.cmblapiCall("getSystemInfo",e)}},{key:"requestUserPermission",value:function(e){this.cmblapiCall("requestUserPermission",e)}},{key:"config",value:function(e){this.cmblapiCall("config",e)}},{key:"getLocation",value:function(e){this.cmblapiCall("getLocation",e)}},{key:"showNavigationBar",value:function(e){this.cmblapiCall("showNavigationBar",e)}},{key:"hideNavigationBar",value:function(e){this.cmblapiCall("hideNavigationBar",e)}},{key:"setNavigationBarStyle",value:function(e){this.cmblapiCall("setNavigationBarStyle",e)}},{key:"setNavigationBarTitle",value:function(e){this.cmblapiCall("setNavigationBarTitle",e)}},{key:"setLeftNavigationBar",value:function(e){this.cmblapiCall("setLeftNavigationBar",e)}},{key:"setRightNavigationBar",value:function(e){this.cmblapiCall("setRightNavigationBar",e)}},{key:"pushWindow",value:function(e){this.cmblapiCall("pushWindow",e)}},{key:"popWindow",value:function(e){this.cmblapiCall("popWindow",e)}},{key:"setWindowProperties",value:function(e){this.cmblapiCall("setWindowProperties",e)}},{key:"setStatusBarStyle",value:function(e){this.cmblapiCall("setStatusBarStyle",e)}},{key:"shareInfo",value:function(e){this.cmblapiCall("shareInfo",e)}},{key:"shareInfoWithUI",value:function(e){this.cmblapiCall("shareInfoWithUI",e)}},{key:"createShortcut",value:function(e){this.cmblapiCall("createShortcut",e)}},{key:"makePhoneCall",value:function(e){this.cmblapiCall("makePhoneCall",e)}},{key:"watchShake",value:function(e){this.cmblapiCall("watchShake",e)}},{key:"queryContact",value:function(e){this.cmblapiCall("queryContact",e)}},{key:"callAndroidNFC",value:function(e){this.cmblapiCall("callAndroidNFC",e)}},{key:"callBluetoothFunc",value:function(e){this.cmblapiCall("callBluetoothFunc",e)}},{key:"callZhaoHuFunc",value:function(e){this.cmblapiCall("callZhaoHuFunc",e)}},{key:"makeBarcodeImage",value:function(e){this.cmblapiCall("makeBarcodeImage",e)}},{key:"scanBarcode",value:function(e){this.cmblapiCall("scanBarcode",e)}},{key:"scanIDCard",value:function(e){this.cmblapiCall("scanIDCard",e)}},{key:"scanBankCard",value:function(e){this.cmblapiCall("scanBankCard",e)}},{key:"callOtherApp",value:function(e){this.cmblapiCall("callOtherApp",e)}},{key:"jumpSetting",value:function(e){this.cmblapiCall("jumpSetting",e)}},{key:"appStorage",value:function(e){this.cmblapiCall("appStorage",e)}},{key:"chooseImage",value:function(e){this.cmblapiCall("chooseImage",e)}},{key:"saveImageToAlbum",value:function(e){this.cmblapiCall("saveImageToAlbum",e)}},{key:"snapshotPage",value:function(e){this.cmblapiCall("snapshotPage",e)}},{key:"addAppEventListener",value:function(e){this.cmblapiCall("addAppEventListener",e)}},{key:"login",value:function(e){this.cmblapiCall("login",e)}},{key:"merchantLogin",value:function(e){this.cmblapiCall("merchantLogin",e)}},{key:"setBrightness",value:function(e){this.cmblapiCall("setBrightness",e)}},{key:"applet",value:function(e){this.cmblapiCall("applet",e)}},{key:"merchantOpenAPI",value:function(e){this.cmblapiCall("merchantOpenAPI",e)}},{key:"footprint",value:function(e){this.cmblapiCall("footprint",e)}},{key:"CTID",value:function(e){this.cmblapiCall("CTID",e)}},{key:"clearNavigationBar",value:function(e){this.cmblapiCall("clearNavigationBar",e)}},{key:"callAIAssistFunc",value:function(e){this.cmblapiCall("callAIAssistFunc",e)}}])&&a(t.prototype,i),e;var t,i}();void 0===window.cmblapi&&(window.cmblapi=new n);var l=window.cmblapi;i.default=l,e.exports=t.default})?a.apply(t,[t]):a)||(e.exports=n)}])},"object"==(0,h.default)(t)&&"object"==(0,h.default)(e)?e.exports=f():(n=[],void 0===(l="function"==typeof(a=f)?a.apply(t,n):a)||(e.exports=l))}.apply(t,n))||(e.exports=l)}).call(this,i(159)(e))},766:function(e,t,i){var a,n;a=[i(1394),i(1998),i(807),i(1477),i(103)],void 0===(n=function(e,t,i,a,n){"use strict";(0,e.loadOnDemand)(n.bookStore.current).then((function(){interaction_view.init()}))}.apply(t,a))||(e.exports=n)}}]);