(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{3567:function(n,e,a){var t,l,u=a(26),o=a(155),i=a(154),r=a(153),c=a(338);t=[e,a(23),a(124),a(833),a(3568),a(3573)],void 0===(l=function(n,e,t,l,d,p){"use strict";var f=a(0);function s(n,e){var a=u(n);if(o){var t=o(n);e&&(t=i(t).call(t,(function(e){return r(n,e).enumerable}))),a.push.apply(a,t)}return a}function v(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){(0,e.default)(n,a,t[a])})):c?Object.defineProperties(n,c(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,r(t,e))}))}return n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e=f(e),t=f(t);var m=function(n){var e=n.iDetail,a=n.view,l=e.app_id,u={web_url:window.web_url,slug:l},o={h5DanmakuPic:d.h5DanmakuPic},i={exportApiData:function(n){var e,t,l,u,o,i;null!=a&&null!==(e=a.model)&&void 0!==e&&null!==(t=e.attributes)&&void 0!==t&&t.iDetail&&(a.model.attributes.iDetail.apiData=v(v({},null==a||null===(l=a.model)||void 0===l||null===(u=l.attributes)||void 0===u||null===(o=u.iDetail)||void 0===o?void 0:o.apiData),n),null==a||null===(i=a.model)||void 0===i||i.save())}};return t.default.createElement(p.Wrapper,null,t.default.createElement(d.DanmakuPageRender,{danmakuApiProps:u,danmakuPicture:o,danmakuEvent:i}))};n.default=m}.apply(e,t))||(n.exports=l)},3568:function(n,e,a){var t,l,u=a(26);t=[e,a(3569),a(3570),a(3571),a(3572)],void 0===(l=function(n,e,a,t,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),u(e).forEach((function(a){"default"!==a&&"__esModule"!==a&&(a in n&&n[a]===e[a]||Object.defineProperty(n,a,{enumerable:!0,get:function(){return e[a]}}))})),u(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===a[e]||Object.defineProperty(n,e,{enumerable:!0,get:function(){return a[e]}}))})),u(t).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===t[e]||Object.defineProperty(n,e,{enumerable:!0,get:function(){return t[e]}}))})),u(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===l[e]||Object.defineProperty(n,e,{enumerable:!0,get:function(){return l[e]}}))}))}.apply(e,t))||(n.exports=l)},3569:function(n,e,a){var t,l,u=a(26);t=[e,a(895),a(896)],void 0===(l=function(n,e,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),u(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===a[e]||Object.defineProperty(n,e,{enumerable:!0,get:function(){return a[e]}}))}))}.apply(e,t))||(n.exports=l)},3570:function(n,e,a){var t,l;t=[e,a(96),a(3),a(832),a(869)],void 0===(l=function(n,e,t,l,u){"use strict";var o=a(0);Object.defineProperty(n,"__esModule",{value:!0}),n.queryDanmakuRecordList=n.queryDanmakuRecord=n.updateDanmakuRecord=n.deleteDanmakuRecord=n.updateDanmaku=n.deleteDanmaku=n.createDanmaku=void 0,e=o(e),t=o(t),l=o(l),u=o(u);var i=l.default.create();i.defaults.headers={"Content-type":"application/x-www-form-urlencoded"};var r="/v3/api/apps/danmaku/";n.createDanmaku=function(n){return new e.default((function(e,a){i.post("".concat(r),u.default.stringify(n)).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results[0])})).catch((function(n){a(n)}))}))};n.deleteDanmaku=function(n){return new e.default((function(e,a){i.delete("".concat(r).concat(n,"/")).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results[0])})).catch((function(n){a(n)}))}))};n.updateDanmaku=function(n,a){return new e.default((function(e,t){i.patch("".concat(r).concat(n,"/"),u.default.stringify(a)).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results[0])})).catch((function(n){t(n)}))}))};n.deleteDanmakuRecord=function(n,a){return new e.default((function(e,l){var u;i.delete((0,t.default)(u="".concat(r).concat(n,"/record/")).call(u,a,"/")).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results[0])})).catch((function(n){l(n)}))}))};n.updateDanmakuRecord=function(n,a,l){return new e.default((function(e,o){var c;i.patch((0,t.default)(c="".concat(r).concat(n,"/record/")).call(c,a,"/"),u.default.stringify(l)).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results[0])})).catch((function(n){o(n)}))}))};n.queryDanmakuRecord=function(n,a){return new e.default((function(e,l){var u;i.get((0,t.default)(u="".concat(r).concat(n,"/record/")).call(u,a)).then((function(n){var a,t;e(null==n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results)})).catch((function(n){l(n)}))}))};n.queryDanmakuRecordList=function(n,a){return new e.default((function(e,t){i.get(r+n+"/record/",{params:a}).then((function(n){var a;e(null==n||null===(a=n.data)||void 0===a?void 0:a.data)})).catch((function(n){t(n)}))}))}}.apply(e,t))||(n.exports=l)},3571:function(n,e,a){var t;void 0===(t=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.rules=void 0;n.rules='<p line="9WMF" class="ql-long-63092952"><strong>以下活动规则范本仅供参考，请依据实际活动内容自行设定。</strong></p><p line="psvG"> </p><p line="5qCv" class="ql-long-63092952">活动时间: 2021年6月1日0点至2021年9月30日0点整。</p><p line="2DbI" class="ql-long-63092952">活动内容: 活动期间，凡通过官方推文进入活动页面，按照提示参与抽奖，即可赢取以下奖品之一。</p><p line="Pnqu" class="ql-long-63092952">奖品设置：</p><p line="9HLZ" class="ql-long-63092952">特等奖 ：价值3000元的智能手机，总计10份，中奖率为1%。</p><p line="hKxP" class="ql-long-63092952">一等奖：价值800的蓝牙耳机，总计100份，中奖率为10%。</p><p line="oT6g" class="ql-long-63092952">二等奖：价值500元的电动牙刷，总计200份，中奖率为20%。</p><p line="JTfP" class="ql-long-63092952">三等奖：价值200元的蓝牙音响，总计300份，中奖率为30%。</p><p line="AW6D" class="ql-long-63092952">四等奖：价值100元的零食大礼包，总390份，中奖率为39%。</p><p line="XwYb" class="ql-long-63092952"><span style="color:#c0392b">*</span>本活动给合中奖率为100%。</p><p line="70Bs" class="ql-long-63092952">参与方式：扫描推文二维码，按页面提示进行抽奖。</p><p line="XoKV" class="ql-long-63092952">每个微信及手机号仅可参与一次抽奖。</p><p line="ZW5D" class="ql-long-63092952">活动详情：具体活动规则、奖品详情等见活动页面。</p><p line="1aub" class="ql-long-63092952">活动主办方：上海**有限公司</p>'}.apply(e,[e]))||(n.exports=t)},3572:function(n,e,a){var t;void 0===(t=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.avatarPicture=n.h5DanmakuPic=void 0;var e=[{label:"弹幕-关",name:"danmakuBtnOff",picture:"".concat(window.web_url,"diazo/images/Applications/danmaku/h5Danmaku/off.png"),description:"尺寸：43px*43px"},{label:"弹幕-开",name:"danmakuBtnOn",picture:"".concat(window.web_url,"diazo/images/Applications/danmaku/h5Danmaku/on.png"),description:"尺寸：43px*43px"},{label:"发送按钮",name:"sendBtn",picture:"".concat(window.web_url,"diazo/images/Applications/danmaku/h5Danmaku/send.png"),description:"尺寸：43px*43px"}];n.h5DanmakuPic=e;n.avatarPicture={label:"头像",name:"avatar",picture:"http://qty83k.creatby.com/materials/2/origin/55bc33f6f6d6189de0eb2d559349048a_origin.jpg",description:"尺寸：43px*43px"}}.apply(e,[e]))||(n.exports=t)},3573:function(n,e,a){var t,l;t=[e,a(824),a(819)],void 0===(l=function(n,e,t){"use strict";var l,u=a(0);Object.defineProperty(n,"__esModule",{value:!0}),n.Wrapper=void 0,e=u(e);var o=(t=u(t)).default.div(l||(l=(0,e.default)(["\n  width: 100%;\n  height: 100%;\n  :global {\n    .award {\n      margin-top: 24px;\n    }\n  }\n"])));n.Wrapper=o}.apply(e,t))||(n.exports=l)}}]);