$(function () {
  (function () {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
    } else {
      if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", handleFontSize);
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
      }
    }

    function handleFontSize () {
      WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
      });
      WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', {
          'fontSize': 0
        });
      });
    }
  })();

  CITISHARE(
    "https://citi.yeahc.com/yh/yh/weixin/getJsApi2",
    "新春分期大放送",
    "返最高30%分期手续费",
    "https://citi.yeahc.com/epp2201/share.html",
    "https://yeahc01.oss-cn-shenzhen.aliyuncs.com/citi/epp2201/images/share.jpg"
  );
  //重写alert方法，去掉地址显示
  window.alert = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", "data:text/plain,");
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
  };
  //重写confirm方法，去掉地址显示
  window.confirm = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", "data:text/plain,");
    document.documentElement.appendChild(iframe);
    var result = window.frames[0].window.confirm(name);
    iframe.parentNode.removeChild(iframe);
    return result;
  };

  // 获取链接参数
  var params = location.search.split("?")[1].split("&");
  var dt = params[0].split("=")[1];
  var sg = params[1].split("=")[1];

  // 接口链接
  //var url = "https://campaign.yeahc.com/php/hq";
  var url = "https://citi.yeahc.com/yh/hq";

  var giftCode = null;

  // 初始化接口
  function init () {
    $.ajax({
      url: url + "/epp2201/load",
      method: "get",
      timeout: "10000",
      data: {
        data: dt,
        sign: sg,
      },
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 200) {
          $(".oid span").html(res.openid);
          // 判断活动状态
          if (res.activitystatus == 1) {
            // 活动中
            // 判断群组
            switch (res.segment) {
              case "G1":
                $(".g1").css({
                  display: "block"
                })
                break;
              case "G2":
                $(".g2").css({
                  display: "block"
                })
                break;
              case "G3":
                $(".g3").css({
                  display: "block"
                })
                break;
            }
            // 判断是否注册
            if (res.regstatus == 0) {
              // 未注册
              $('.wzc').css({
                display: "block"
              });
              giftCode = '150_skj'
            } else {
              // 已注册
              $(".yzc").css({
                display: "block"
              });
              // 判断是否领奖
              if (res.giftCode == "") {
                $('.wxz').css({
                  display: "block"
                })
                giftCode = '150_skj'
                $(".choose-list-skj").addClass("active");
                $(".choose-list-zfb").removeClass("active");
              } else if (res.giftCode == "150_skj") {
                $('.skj').css({
                  display: "block"
                })
                giftCode = '150_skj'
                $(".choose-list-skj").addClass("active");
                $(".choose-list-zfb").removeClass("active");
              } else if (res.giftCode == "200_ljj") {
                $('.zfb').css({
                  display: "block"
                })
                giftCode = '200_ljj'
                $(".choose-list-skj").removeClass("active");
                $(".choose-list-zfb").addClass("active");
              }
            }
          } else {
            // 判断是否注册
            if (res.regstatus == 0) {
              // 未注册
              $(".end").css({
                display: "block"
              })
            } else {
              // 判断群组
              switch (res.segment) {
                case "G1":
                  $(".g1").css({
                    display: "block"
                  })
                  break;
                case "G2":
                  $(".g2").css({
                    display: "block"
                  })
                  break;
                case "G3":
                  $(".g3").css({
                    display: "block"
                  })
                  break;
              }
              // 已注册
              $(".yzc").css({
                display: "block"
              });
              // 判断是否领奖
              if (res.giftCode == "") {
                $('.skj').css({
                  display: "block"
                })
              } else if (res.giftCode == "150_skj") {
                $('.skj').css({
                  display: "block"
                })
              } else if (res.giftCode == "200_ljj") {
                $('.zfb').css({
                  display: "block"
                })
              }
              $(".xgxz").css({
                display: "none"
              })
            }

          }
        } else {
          alert(res.msg)
        }
      }
    })
  }

  init();

  // 立即注册
  $("body").on("click", ".ljzc", function () {
    $.ajax({
      url: url + "/epp2201/reg",
      method: "get",
      timeout: "10000",
      data: {
        data: dt,
        sign: sg,
      },
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 200) {
          $(".zccg").css({
            display: "block"
          });
          $(".wzc").css({
            display: "none"
          });
          $(".yzc").css({
            display: "block"
          })
          $(".wxz").css({
            display: "block"
          });
        } else {
          alert(res.msg);
        }
      }
    })
  })

  // 奖品选择
  $("body").on("click", ".choose-list-skj", function () {
    $(".choose-list-skj").addClass("active");
    $(".choose-list-zfb").removeClass("active");
    giftCode = '150_skj';
  })
  $("body").on("click", ".choose-list-zfb", function () {
    $(".choose-list-skj").removeClass("active");
    $(".choose-list-zfb").addClass("active");
    giftCode = '200_ljj';
  })

  $("body").on("click", ".qrxz", function () {
    $.ajax({
      url: url + "/epp2201/updateChoose",
      method: "get",
      timeout: "10000",
      data: {
        data: dt,
        sign: sg,
        giftCode: giftCode
      },
      dataType: "json",
      success: function (res) {
        if (res.code == 200) {
          $(".zccg").css({
            display: "none"
          })
          $(".xztk").css({
            display: "none"
          });
          if (giftCode == "200_ljj") {
            $(".wxz").css({
              display: "none"
            })
            $(".skj").css({
              display: "none"
            })
            $(".zfb").css({
              display: "block"
            })
          } else {
            $(".wxz").css({
              display: "none"
            })
            $(".skj").css({
              display: "block"
            })
            $(".zfb").css({
              display: "none"
            })
          }
        } else {
          alert(res.msg)
        }
      }
    })
  })

  $("body").on("click", ".ljxz span", function () {
    $(".xztk").css({
      display: "block"
    })
  })

  $("body").on("click", ".xgxz span", function () {
    $(".xztk").css({
      display: "block"
    })
  })

  $("body").on("click", ".zccg", function (e) {
    if (e.target == e.currentTarget) {
      //防止父元素覆盖资源的绑定事件操作
      $(".zccg").css({
        display: "none",
      });
    }
  });
  $("body").on("click", ".zccg-close", function () {
    $(".zccg").css({
      display: "none",
    });
  });

  $("body").on("click", ".xztk", function (e) {
    if (e.target == e.currentTarget) {
      //防止父元素覆盖资源的绑定事件操作
      $(".xztk").css({
        display: "none",
      });
    }
  });
  $("body").on("click", ".xztk-close", function () {
    $(".xztk").css({
      display: "none",
    });
  });
  // 办理分期
  $("body").on("click", ".blfq", function () {
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
      //alert('微信客户端');
      location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx58620fe32cceca68&redirect_uri=https%3A%2F%2Fwebservice.citibank.com.cn%2FCitiWeb%2Fstage.do%3Faction%3DbillStage&response_type=code&scope=snsapi_base&state=wec&#wechat_redirect";
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
      //alert('支付宝客户端');
      location.href =
        "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015120800937608&auth_skip=false&scope=auth_base&redirect_uri=https%3A%2F%2Fwebservice.citibank.com.cn%2FCitiWeb%2Fstage.do%3Faction%3DbillStage&state=alc";
    } else {
      /*alert('其他浏览器');*/
      location.href = "https://www.citibank.com.cn/eepp.html";
    }
  });
  $("body").on("click", ".rule span", function () {
    $(".rule-model").css({
      display: "flex"
    });
  });

  $("body").on("click", ".rule-model", function (e) {
    if (e.target == e.currentTarget) {
      //防止父元素覆盖资源的绑定事件操作
      $(".rule-model").css({
        display: "none",
      });
    }
  });
  $("body").on("click", ".rule-model-content-close", function (e) {
    //执行父元素的事件
    $(".rule-model").css({
      display: "none",
    });
  });
})