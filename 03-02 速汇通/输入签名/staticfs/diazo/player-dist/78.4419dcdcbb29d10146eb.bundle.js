(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{2668:function(t,e,i){var n,a;n=[i(14),i(78),i(154),i(63),i(100)],void 0===(a=function(t,e,n,a,u){"use strict";var o=i(0);t=o(t),e=o(e),n=o(n),a=o(a),epub360.PlayerPlugins.push({config:{type:"ButtonGroup",template:"others"},render:function(){},immediateRender:function(){},setOtherDisplay:function(){},onPlay:function(){this.initRuntimeData(),0==this.model.attributes.iDetail.type&&this.initSingleSelectHandler()},otherOnShow:function(){},otherOnHide:function(){},onStop:function(){},initRuntimeData:function(){var i,a=a||this;if(a.runtimeCache)var u=a.runtimeCache;else u=a.runtimeCache={};u.groupValue=null;var o,l,r=[],c=this.model.layer_id,d=this.model.attributes.iDetail;if(c){var s,h=this.model.page,f=h?h.iOverlaylist.models:[];r=(0,t.default)(s=d.buttons).call(s,(function(t){return(0,e.default)(f).call(f,(function(e){return e.id==t.id}))}))}else{var m;r=(0,t.default)(m=d.buttons).call(m,(function(t){return interaction_view.getPageElement(t.page_id,t.id)}))}(r=(0,n.default)(r).call(r,(function(t){return t})),u.buttonModelList||(u.buttonModelList=r),u.indexMap=(0,t.default)(i=d.buttons).call(i,(function(t){return a.obj2str(t,["id","page_id"])})),u.checkedModelList)||(u.checkedModelList=(0,n.default)(o=(0,t.default)(l=this.model.attributes.iDetail.checked).call(l,(function(t){return interaction_view.getPageElement(t.page_id,t.id)||interaction_view.getLayerElement(t.page_id,t.id)}))).call(o,(function(t){return t})));u.buttonModelList.forEach((function(t){t.iview.switchStatus("normal")})),u.checkedModelList.forEach((function(t){if(t.iview)t.iview.switchStatus("active");else{var i,n,u,o,l=a.model.layer_id,r=(0,e.default)(i=(0,e.default)(n=$("[data-id="+l+"]")).call(n,"#"+t.id)).call(i,".iconActive"),c=(0,e.default)(u=(0,e.default)(o=$("[data-id="+l+"]")).call(o,"#"+t.id)).call(u,".iconNormal");r.show(),c.hide()}}))},obj2str:function(e,i){return(0,t.default)(i).call(i,(function(t){return e[t]})).join("^_^")},isSameModel:function(t,e,i){i=i||["id","iPageId"];var n=this.obj2str;return n(t,i)==n(e,i)},someItemChanged:function(t){var e=e||t.groupView||this;e.runtimeCache.groupValue=null,e.isSameModel(t.model,e.runtimeCache.checkedModelList[0]||{})?t.switchStatus("active"):(e.runtimeCache.buttonModelList.forEach((function(t){t.iview.switchStatus("normal")})),t.switchStatus("active"),e.runtimeCache.checkedModelList=[t.model]),interaction_view.events.onButtonGroupSelectEnd(e,{})},initSingleSelectHandler:function(){var t=t||this;this.runtimeCache.buttonModelList.forEach((function(e){e.iview.setAsGroupElement(t)})),window.globalBus.off("buttonGroupClick:ButtonGroup"),window.globalBus.on("buttonGroupClick:ButtonGroup",t.someItemChanged)},getButtonGroupValue:function(){var e,i=i||this;if(i.runtimeCache){if(null!==i.runtimeCache.groupValue)return i.runtimeCache.groupValue;var n;if(i.runtimeCache.checkedModelList.length)e=(0,t.default)(n=i.runtimeCache.checkedModelList).call(n,(function(t){return i.getItemValue(t)})).join(",");else e="";return i.runtimeCache.groupValue=e,e}return""},getItemValue:function(t){var e,i=i||this,n=i.model.attributes.iDetail.buttons[(0,a.default)(e=i.runtimeCache.indexMap).call(e,t.layer_id?i.obj2str(t,["id","layer_id"]):i.obj2str(t,["id","iPageId"]))],u=""+(n.value||"");return i.obj2str(t,["id","iPageId"])!=i.obj2str(n,["id","page_id"])&&i.model.attributes.iDetail.buttons.forEach((function(e){t.id==e.id&&t.iPageId==e.page_id&&(u=""+e.value)})),u},getExpValue:function(){return this.getButtonGroupValue()}})}.apply(e,n))||(t.exports=a)}}]);