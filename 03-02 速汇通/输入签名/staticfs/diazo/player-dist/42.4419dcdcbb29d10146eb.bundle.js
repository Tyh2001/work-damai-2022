(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1012:function(e,t,i){var n,o;n=[t,i(154),i(1061)],void 0===(o=function(e,t,n){"use strict";var o=i(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=o(t);var r=function(e){return(0,t.default)(e).call(e,(function(e){var t=e.eid;return interaction_view.getCurrentPageModel().iOverlaylist.models.some((function(e){return t===(0,n.getEidByOverlay)({overlayId:e.id,pageId:e.page.id,pageType:e.page.attributes.iType})}))}))};e.default=r}.apply(t,n))||(e.exports=o)},2681:function(e,t,i){var n,o;n=[i(96),i(8),i(10),i(930),i(65),i(101),i(1012)],void 0===(o=function(e,t,n,o,r,u,a){"use strict";var d=i(0);e=d(e),a=d(a);var c={type:"actionexecute",config:{type:"WebFontActionExec",exec:function(t,i){i.add((function(){var i,n,o=this,r=null==t||null===(i=t.model)||void 0===i||null===(n=i.get("iDetail"))||void 0===n?void 0:n.results[0].property,u=(0,a.default)(r.expressions),d=[];u.forEach((function(e){var t=e.eid,i=e.encoded,n=interaction_view.expression.getElByEid(t);interaction_view.expression.id2values(i,(function(e){d.push(n.iview.updateText("number"==typeof e?e.toString():e))}))})),e.default.all(d).then((function(){return o.done()})).catch((function(e){o.done()}))}))}}};epub360.PlayerPlugins.push(c)}.apply(t,n))||(e.exports=o)},930:function(e,t,i){"use strict";var n=i(364)(!0);i(360)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,i=this._i;return i>=t.length?{value:void 0,done:!0}:(e=n(t,i),this._i+=e.length,{value:e,done:!1})}))}}]);