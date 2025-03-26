/**
* DESCRIPTION   小熊下载站文件
* AUTHOR 杜玲玲
* TIME 2022-03-29 
*/
var platform = 'latest-v'
$(function(){
   // 文章详情页头像随机展示
   if($(".data").length>0){
    var images=['boy1.png','boy2.png','boy3.png','boy4.png','boy5.png','girl1.png','girl2.png','girl3.png','girl4.png','girl5.png'];
    var url=images[Math.floor(Math.random()*images.length)];
    $(".data").find("img").attr("src",'https://resource.bear20.com/bear_download/images/'+url+'')
  }
  // 老旧软件段落前去掉‘？’
  $(".explain p").each(function(){
    if($(this).find("img").length==0){
      $(this).html($(this).html().trim().replace(/？/g,'')) 
    }
  })
  $(".update_log p").each(function(){
    if($(this).find("img").length==0 && $(this).find("span").length>0){
      $(this).find("span").html($(this).find("span").html().trim().replace(/？/g,'')) 
    }else if($(this).find("img").length>0){
      $(this).remove();
    }
  })
  // 首页轮播图
  swiper(".swiperWrap .layout",".swiper li",".swiperWrap .pagination span","active","3000")
  // 首页四个彩色板块鼠标移入效果
  $(".wrap .box").each(function(index){
    var bTop = $(".wrap .box").eq(index).find('.box1').offset().top;//盒子距离其父元素的top值
    var bLeft = $(".wrap .box").eq(index).find('.box1').offset().left;//盒子距离其父元素的left值
    var W = $(".wrap .box").eq(index).find('.box1').innerWidth();//盒子的长度width
    var H = $(".wrap .box").eq(index).find('.box1').innerHeight();//盒子的宽度height
    $('.wrap .box').eq(index).mouseenter(function(){
        $(".wrap .box").eq(index).find('.box1').mousemove(function(e){
        var mX = e.pageX-bLeft;//鼠标相对盒子x轴坐标值
        var mY = e.pageY-bTop;//鼠标相对盒子y轴坐标值
        var xdeg = (mY - H/2)/3;
        var ydeg = -(mX - W/2)/6;
        if(mX<(W/2)&&mY<(H/2)){
            $(".wrap .box").eq(index).find('.box1').css({"transform":"perspective(1000px) rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) scale3d(1.05, 1.05, 1.05)"});
        }else if(mX<(W/2)&&mY>(H/2)){
            $(".wrap .box").eq(index).find('.box1').css({"transform":"perspective(1000px) rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) scale3d(1.05, 1.05, 1.05)"});
        }else if(mX>(W/2)&&mY<(H/2)){
            $(".wrap .box").eq(index).find('.box1').css({"transform":"perspective(1000px) rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) scale3d(1.05, 1.05, 1.05)"});
        }else if(mX>(W/2)&&mY>(H/2)){
            $(".wrap .box").eq(index).find('.box1').css({"transform":"perspective(1000px) rotateX("+xdeg+"deg) rotateY("+ydeg+"deg) scale3d(1.05, 1.05, 1.05)"});
        }
    });
    $(".wrap .box").eq(index).find('.box1').mouseout(function(){
        $(".wrap .box").eq(index).find('.box1').css({"transform":"rotateX(0deg) rotateY(0deg)"});
        $(".wrap .box").eq(index).find('.box1').removeAttr('style');
        $(".wrap .box").eq(index).find('.box1').mousemove = null;
        $(".wrap .box").eq(index).find('.box1').mouseout = null;
    });
})
})
  // 精品软件下载数量  
  // 如果数量大于10000,除以1000保留一位小数
  $(".number").each(function(index){
    var num = $(".number").eq(index).text();
    if(num >=1000 && num <10000){
      num = (num/1000).toFixed(1)+"k";
      $(".number").eq(index).html('<i class="icons download"></i>'+num)
    }else if(num>=10000){
      num = (num/10000).toFixed(1)+"w";
      $(".number").eq(index).html('<i class="icons download"></i>'+num)
    }
})

  // 精品软件切换
tab(".BoutiqueSoft .title ul li",".BoutiqueSoft .SoftList ul","active")
 // 教程文章切换   2022-05-06新增
 tab(".article .title ul li",".article .articleList ul","active")
  // 头部导航发布应用鼠标移入显示内容,移出隐藏
  $(".topNav .floatR .fbyy").mouseover(function(){
    $(".topNav .floatR .fbyy span").css("display","block")
  })
  $(".topNav .floatR .fbyy").mouseout(function(){
    $(".topNav .floatR .fbyy span").css("display","none")               
  })
  
  // 详情页返回顶部
  $(".topping").click(function(){
    $("html, body").animate({
        scrollTop: 0
      }, 120);
})
    var timmer = null;
    $(window).bind("scroll", function () {
    var d = $(document).scrollTop(),
      e = $(window).height();
    0 < d ? $(".topping").css("bottom", "110px") : $(".topping").css("bottom", "-110px");
    clearTimeout(timmer);
    timmer = setTimeout(function () {
      clearTimeout(timmer)
    }, 100);
    });
    // 详情页顶部浮层
      $(window).scroll(function () {
        var scroH = $(this).scrollTop();
        if($(".softIntroduce").length>0){
          var sideTop=$(".softIntroduce").offset().top;
        }
      if(scroH > sideTop){
        $(".topFloating").addClass("fixed");
        $(".leftFixed").addClass("fixed slideUpReturn fc-animation");
       }else{
         $(".topFloating").removeClass("fixed");
         $(".leftFixed").removeClass("fixed slideUpReturn fc-animation");
       }
      })
      if($(".topFloating").length>0){
        $(".topFloating .floatR ul li").click(function(){
            var contTopid=$(this).find("a").attr("data-href");
            $(this).addClass("active").siblings().removeClass("active");
            $("html,body").animate({"scrollTop":$("#"+contTopid).offset().top-30},200);
        });
        var fcnav=[];
        $(".topFloating .floatR ul li").each(function(){
          fcnav.push($(this).find("a").attr("data-href"));
        }) 
        $(window).scroll(function () {
          for(var i=0;i<fcnav.length;i++){
            var offset_t=$("#"+fcnav[i]).offset().top-20;
            if($(window).scrollTop()>offset_t){
              $(".topFloating").show();
              $(".topFloating .floatR ul li").eq(i).addClass("active").siblings().removeClass("active");
            }else if($(window).scrollTop()<$("#"+fcnav[0]).offset().top){
              $(".topFloating").hide();
            }
          };
        })
     }
     

  // 详情页评论板块
    // 点击除评论弹框、登录弹框外其他区域收起弹框
    $(document).on("click", ".commentWrap ", function (event) {
      $(".fixedComment .commentContent").slideDown(500)
      $(this).hide();
      $(document).one("click", function () {
        $(".fixedComment .commentContent").slideUp(500)
        $(".fixedComment .commentWrap").show();
        $(".fixedComment .commentWrap").addClass("tinRightIn");
      });
  
      event.stopPropagation();//阻止事件向上冒泡
      $(".fixedComment .commentContent").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡
      });
      $(".loginBox").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡
      })
    });
    // 点击右上角关闭按钮收起弹框
  $(".fixedComment .commentContent .top .close").click(function(){
    $(".fixedComment .commentContent").slideUp(500)
    $(".fixedComment .commentWrap").show();
    $(".fixedComment .commentWrap").addClass("tinRightIn");
  })
  // 点击左侧浮层评论，弹出评论框
  $(".leftFixed .commentnum").click(function(event){
    $(".fixedComment .commentContent").slideDown(500)
    $(".commentWrap").hide()
    $(document).one("click", function () {
      $(".fixedComment .commentContent").slideUp(500)
      $(".fixedComment .commentWrap").show();
      $(".fixedComment .commentWrap").addClass("tinRightIn");
    });
    event.stopPropagation();//阻止事件向上冒泡
    $(".fixedComment .commentContent").click(function (event) {
      event.stopPropagation();//阻止事件向上冒泡
    });
    $(".loginBox").click(function (event) {
      event.stopPropagation();//阻止事件向上冒泡
    })
    $(".leftFixed .commentnum").click(function (event) {
      event.stopPropagation();//阻止事件向上冒泡
    })
  })
   // 板块查看更多 收起
if($(".explain_content").height() < 445) {
  $("#azbz .more span").hide();
} else {
  $(".explain_content").height(445);
}
if($(".explain_content1").height() < 445) {
  $("#syff .more span").hide();
} else {
  $(".explain_content1").height(445);
}
if($(".explain_content2").height() < 445) {
  $("#faq .more span").hide();
} else {
  $(".explain_content2").height(445);
}
if($(".explain_content3").height() < 445) {
  $("#xbjy .more span").hide();
} else {
  $(".explain_content3").height(445);
}
clickmore("#azbz .more span", ".explain_content", "change", "0", 445);
clickmore("#syff .more span", ".explain_content1", "change", "0", 445);
clickmore("#faq .more span", ".explain_content2", "change", "0", 445);
clickmore("#xbjy .more span", ".explain_content3", "change", "0", 445);

// 详情页根据更新时间计算星期几
var date = $(".main .titleList ul li").eq(5).find("span").text();
var day = new Date(Date.parse(date));
var today = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');  
var week = today[day.getDay()];
$(".main .titleList ul li").eq(5).find("p:eq(1)").text(week);


// // 详情页软件特色数据处理开始
// //  *   imgarr   图片数组
// //  *   textarr  除图片外其他p标签数组
// //  *   textarr2 将textarr分为几组
// //  *   length   将textarr分的组数
// var imgarr =[];
// var textarr = [];
// var textarr2 = [];
// if($(".feature_Content .feature_explain").find("center").length==0){
//   $(".feature_Content .feature_explain").find("p").each(function(){
//     if($(this).find("img").length==1){
//       imgarr.push($(this).html())
//     }else if($(this).find("img").length==0){
//       textarr.push($(this).prop("outerHTML"));
//     }
//   })
// }else{
//   $(".feature_Content .feature_explain").find("center").each(function(){
//     $(this).find("img").removeAttr("align")
//     imgarr.push($(this).html())
//   })
//   $(".feature_Content .feature_explain").find("p").each(function(){
//       textarr.push($(this).prop("outerHTML"));
//   })
// }
// if(textarr.length>imgarr.length){
//   for(i=0;i<textarr.length;i+=textarr.length/imgarr.length){
//     textarr2.push(textarr.slice(i,i+textarr.length/imgarr.length))
//   }
// }else{
//   textarr2 = textarr
// }
// // 如果图片数组不为空  遍历生成dl标签
// if((textarr.length/imgarr.length)<2){
//   if(imgarr.length>0){
//     $(".feature_Content .feature_explain").empty();
//     $(".feature_Content .feature_explain").removeClass("explain")
//     var html=""
//   for(var i = 0;i<textarr2.length;i++){
//       html+='<dl class="clearfix">'
//       html+='<dt>'+imgarr[i]+'</dt>'
//       html+='<dd>'+textarr2[i]+'</dd>'
//       html+='</dl>'
//   }
//   $(".feature_Content .feature_explain").append(html);
//   }
// }else{
//   if(imgarr.length>0){
//     $(".feature_Content .feature_explain").empty();
//     $(".feature_Content .feature_explain").removeClass("explain")
//     var html=""
//   for(var i = 0;i<textarr2.length;i++){
//       html+='<dl class="clearfix">'
//       html+='<dt>'+imgarr[i]+'</dt>'
//       html+='<dd>'+textarr2[i].join('')+'</dd>'
//       html+='</dl>'
//   }
//   $(".feature_Content .feature_explain").append(html);
//   }
// }

// // 去除p标签内有span标签的 伪类样式
// $(".feature_Content .feature_explain span[style='font-weight: bold;']").parent("p").addClass("displayNone");

// // 去除标签内容前后空格
// $(".feature_Content .feature_explain p").each(function(index){
//   $(this).html($.trim($(this).html()))
//   $(this).find("span").text($.trim($(this).find("span").text()))
// })
dataProcessing("#rjts .feature_explain")
// // 软件特色数据处理结束

// 软件详情页软件介绍数据处理开始
// var softIntroduce = $("#rjjs .explain p:not([align='center'])").eq(0).prop("outerHTML");
var softIntroduce
if($("#rjjs .explainBox p").eq(0).find("img[width='121']").length!=0 || $("#rjjs .explainBox p").eq(0).find("img[align='left']").length!=0  || $("#rjjs .explainBox p").eq(0).find("img[border='0']").length!=0 ){
 $("#rjjs .explain p").eq(0).find("img[width='121']").remove()
 $("#rjjs .explain p").eq(0).find("img[align='left']").remove()
 $("#rjjs .explain p").eq(0).find("img[border='0']").parent().remove()
  softIntroduce = $("#rjjs .explain p").eq(0).prop("outerHTML");
}else{
  softIntroduce = $("#rjjs .explain p:not([align='center'])").eq(0).prop("outerHTML");
}
var softimgarr1 = [];  //图片数组
var softtextarr1 = [];  //除图片以外的p标签数组
var softtextarr2 = [];  //倒序之后的数组
var endsofttextarr2 = []; //每四个一组平分之后的数组
var surplusText = [];
$("#rjjs .explainBox").find("table").remove()
// 软件介绍删除特定宽高图片
$("#rjjs .explainBox").find("p").each(function(){
  $(this).find("img[width='121']").remove()
  $(this).find("img[align='left']").remove()
  $(this).find("img[border='0']").parent().remove()
  if($(this).text()=="相关软件推荐"){
    $(this).remove()
  }
  if($(this).find("img").attr("width")=="0" || $(this).find("img").attr("height")=="0"){
    $(this).find("img").attr("width","auto")
    $(this).find("img").attr("height","auto")
  }
  // 删除图片是外链的标签
  if($(this).find("img").eq(0).attr("src") && $(this).find("img").eq(0).attr("src").indexOf("image.yesky.com")==-1 && $(this).find("img").eq(0).attr("src").indexOf("image.bear20.com")==-1){
    $(this).remove()
  }
})
$("#rjjs .explainBox").find("center").each(function(){
  if($(this).find("img[width='121']").length>0){
    $(this).remove()
  }
   // 删除图片是外链的标签
   if($(this).find("img").eq(0).attr("src") && $(this).find("img").eq(0).attr("src").indexOf("image.yesky.com")==-1 && $(this).find("img").eq(0).attr("src").indexOf("image.bear20.com")==-1){
    $(this).remove()
  }
})
if($("#rjjs .explain span[style='font-weight: bold; color: rgb(255, 0, 255);']").length>0){
  $("#rjjs .explain span[style='font-weight: bold; color: rgb(255, 0, 255);']").parent("").prevAll().each(function(){
    if($(this).find("img").length==1){
      $(this).find("img").removeAttr("align")
      softimgarr1.push($(this).html())
    }else if($(this).find("img").length>1){ //如果一个p标签中有多张图片，取第一张
      if($(this).find("a").length >0){
        softimgarr1.push($(this).find("a:first-child").html())
      }else{
        softimgarr1.push($(this).find("img:first-child").prop("outerHTML"))
      }
    }else if($(this).find("img").length==0){
      if($(this).prop("outerHTML")!=softIntroduce && $(this).html().length>0){
        softtextarr1.push($(this).prop("outerHTML"))
      }
    }
  })
  for(i=softtextarr1.length-1;i>=0;i--){
    softtextarr2.push(softtextarr1[i])
  }
  if(softtextarr2.length/4>softimgarr1.length){
    surplusText.push(softtextarr2.slice(0,softtextarr2.length-softimgarr1.length*4-1))
    softtextarr2 = softtextarr2.slice(softtextarr2.length-softimgarr1.length*4-1,softtextarr2.length-1);
  }else{
    softtextarr2 =  softtextarr2.slice(0,softtextarr2.length-1)
  }

  for(i=0;i<softtextarr2.length;i+=4){
    endsofttextarr2.push(softtextarr2.slice(i,i+4))
  }
 
  var softimgarr2=[];
  var softtextarr3 = [];
  var endsofttextarr3 = [];
  var colorTitle =$("#rjjs .explainBox span[style='font-weight: bold; color: rgb(255, 0, 255);']").parent("p").prop("outerHTML"); 
  $("#rjjs .explainBox span[style='font-weight: bold; color: rgb(255, 0, 255);']").parent("").nextAll().each(function(){
    if($(this).find("img").length==1){
      $(this).find("img").removeAttr("align")
      softimgarr2.push($(this).html())
    }else if($(this).find("img").length>1){  //如果一个p标签中有多张图片，取第一张
      if($(this).find("a").length >0){
        softimgarr2.push($(this).find("a:first-child").html())
      }else{
        softimgarr2.push($(this).find("img:first-child").prop("outerHTML"))
      }
    }else if($(this).find("img").length==0){
      if($(this).prop("outerHTML")!=softIntroduce && $(this).html().length>0){
        softtextarr3.push($(this).prop("outerHTML"))
      }
    }
  })
  for(var i = 0;i<softtextarr3.length;i+=softtextarr3.length/softimgarr2.length){
    endsofttextarr3.push(softtextarr3.slice(i,i+softtextarr3.length/softimgarr2.length))
  }
  if(softimgarr1.length>0 &&endsofttextarr2.length>0){
    $("#rjjs .explainBox").empty()
    $("#rjjs .explain").removeClass("explain")
    var html=""
  for(var i = 0;i<endsofttextarr2.length;i++){
      html+='<dl class="clearfix">'
      html+='<dt>'+softimgarr1[i]+'</dt>'
      html+='<dd>'+endsofttextarr2[i].join('')+'</dd>'
      html+='</dl>'
  }
  $("#rjjs .explainBox").prepend(softIntroduce)
  $("#rjjs .explainBox p:eq(0)").after(html);
  $("#rjjs .explainBox dl:eq(0)").before('<div class="surplus"></div>');  
  for(var i = 0;i<surplusText.length;i++){
    for(var j= 0;j<surplusText[i].length;j++){
      $("#rjjs .explainBox .surplus").append(surplusText[i][j]);
    }
  }
  }else if(softimgarr1.length>1 &&endsofttextarr2.length==0){
    $("#rjjs .explainBox").empty();
    $("#rjjs .explainBox").removeClass("explain")
    softimgarr1 = softimgarr1.splice(0,2)
    var html = ""
    for(var i=0;i<softimgarr1.length;i+=2){
      html+='<dl class="clearfix special">'
      html+='<dt>'+softimgarr1[i]+'</dt>'
      html+='<dd>'+softimgarr1[i+1]+'</dd>'
      html+='</dl>'
    }
    $("#rjjs .explainBox").prepend(softIntroduce);
    $("#rjjs .explainBox").append(html);
  }else if(softimgarr1.length==1 &&endsofttextarr2.length==0){
    $("#rjjs .explainBox").empty();
    $("#rjjs .explainBox").removeClass("explain")
    var html = ""
      html+='<dl class="clearfix special">'
      html+='<dt style="margin-left: 316px;">'+softimgarr1[0]+'</dt>'
      html+='</dl>'
      $("#rjjs .explainBox").prepend(softIntroduce);
    $("#rjjs .explainBox").append(html);
  }

  if(softimgarr2.length>0 &&endsofttextarr3.length>0 ){
    var colorhtml=""
  for(var i = 0;i<endsofttextarr3.length;i++){
    colorhtml+='<dl class="clearfix">'
    colorhtml+='<dt>'+softimgarr2[i]+'</dt>'
    colorhtml+='<dd>'+endsofttextarr3[i].join('')+'</dd>'
    colorhtml+='</dl>'
  }
  $("#rjjs .explainBox").append(colorhtml);
  $("#rjjs .explainBox").find("span[style='font-weight: bold; color: rgb(255, 102, 0);']:eq(0)").parents("dl").before(colorTitle)
  }else if(softimgarr2.length>1 &&endsofttextarr3.length==0){
    softimgarr2 = softimgarr2.splice(0,2)
    var colorhtml = ""
    for(var i=0;i<softimgarr2.length;i+=2){
      colorhtml+='<dl class="clearfix special">'
      colorhtml+='<dt>'+softimgarr2[i]+'</dt>'
      colorhtml+='<dd>'+softimgarr2[i+1]+'</dd>'
      colorhtml+='</dl>'
    }
    $("#rjjs .explainBox").append(colorhtml);
  }else if(softimgarr2.length==1 &&endsofttextarr3.length==0){
    var colorhtml = ""
    colorhtml+='<dl class="clearfix special">'
    colorhtml+='<dt style="margin-left: 316px;">'+softimgarr2[0]+'</dt>'
    colorhtml+='</dl>'
    $("#rjjs .explainBox").append(colorhtml);
  }
}else{
  var softimgarr3 = [];  //图片数组
  var softtextarr4 =[];  //p标签数组
  var endsofttextarr4 =[]; //分好组的p标签数组
  var surplusText = [];
  if($("#rjjs .explainBox").find("center").length==0){
    $("#rjjs .explainBox").children().each(function(){
      if($(this).find("img").length==1){
        softimgarr3.push($(this).html())
      }else if($(this).find("img").length>1){  //如果一个p标签中有多张图片，取第一张
        if($(this).find("a").length >0){
          softimgarr3.push($(this).find("a:first-child").html())
        }else{
          softimgarr3.push($(this).find("img:first-child").prop("outerHTML"))
        }
      }else if($(this).find("img").length==0){
        if($(this).prop("outerHTML")!=softIntroduce && $(this).html().length>0){
          softtextarr4.push($(this).prop("outerHTML"));
          }
      }
    })
  }else{
    $("#rjjs .explainBox").find("center").each(function(){
      $(this).find("img").removeAttr("align")
      if($(this).find("img").length==1){  //如果一个p标签中有一张图片，全部push到数组中
        softimgarr3.push($(this).html())
      }else if($(this).find("img").length>1){  //如果一个p标签中有多张图片，取第一张
        if($(this).find("a").length >0){
          softimgarr3.push($(this).find("a:first-child").html())
        }else{
          softimgarr3.push($(this).find("img:first-child").prop("outerHTML"))
        }
      }
    })
    $("#rjjs .explainBox").find("p").each(function(){
      if($(this).prop("outerHTML")!=softIntroduce && $(this).html().length>0){
        softtextarr4.push($(this).prop("outerHTML"));
        }
    })
  }

  if(softtextarr4.length/4>softimgarr3.length){ 
    surplusText.push(softtextarr4.slice(0,softtextarr4.length-softimgarr3.length*4-1))
    softtextarr4 = softtextarr4.slice(softtextarr4.length-softimgarr3.length*4-1,softtextarr4.length);
  }else{
    softtextarr4 =  softtextarr4.slice(0,softtextarr4.length)
  }
  for(var i=0;i<softtextarr4.length;i+=4){
    if(softtextarr4.length%4 >0){
      if(i+4+softtextarr4.length%4==softtextarr4.length){
        endsofttextarr4.push(softtextarr4.slice(i,i+4+softtextarr4.length%4))
      }else if(i+4+softtextarr4.length%4<softtextarr4.length){
        endsofttextarr4.push(softtextarr4.slice(i,i+4))
      }
    }else{
      endsofttextarr4.push(softtextarr4.slice(i,i+4))
    }
  }
  if(softimgarr3.length>0&&endsofttextarr4.length>0){
    $("#rjjs .explainBox").empty();
    $("#rjjs .explainBox").removeClass("explain")
    var html =""
    for(var i = 0;i<endsofttextarr4.length;i++){
      html+='<dl class="clearfix">'
      html+='<dt>'+softimgarr3[i]+'</dt>'
      html+='<dd>'+endsofttextarr4[i].join('')+'</dd>'
      html+='</dl>'
   }
  $("#rjjs .explainBox").prepend(softIntroduce);
  $("#rjjs .explainBox").append(html);
  $("#rjjs .explainBox dl:eq(0)").before('<div class="surplus"></div>');
  for(var i = 0;i<surplusText.length;i++){
    for(var j= 0;j<surplusText[i].length;j++){
      $("#rjjs .explainBox .surplus").append(surplusText[i][j]);
    }
  }
  }else if(softimgarr3.length>1&&endsofttextarr4.length==0){
    $("#rjjs .explainBox").empty();
    $("#rjjs .explainBox").removeClass("explain")
    softimgarr3 = softimgarr3.splice(0,2)
    var html = ""
    for(var i=0;i<softimgarr3.length;i+=2){
      html+='<dl class="clearfix special">'
      html+='<dt>'+softimgarr3[i]+'</dt>'
      html+='<dd>'+softimgarr3[i+1]+'</dd>'
      html+='</dl>'
    }
    $("#rjjs .explainBox").prepend(softIntroduce);
    $("#rjjs .explainBox").append(html);
  }else if(softimgarr3.length==1 &&endsofttextarr4.length==0){
    $("#rjjs .explainBox").empty();
    $("#rjjs .explainBox").removeClass("explain")
    var html = ""
      html+='<dl class="clearfix special">'
      html+='<dt style="margin-left: 316px;">'+softimgarr3[0]+'</dt>'
      html+='</dl>'
    $("#rjjs .explainBox").prepend(softIntroduce);
    $("#rjjs .explainBox").append(html);
  }
  
}
  // 去除p标签内有span标签的 伪类样式
  $("#rjjs .explainBox p").addClass("displayNone");
  $("#rjjs .explainBox p").eq(0).css({"width":"805px","fontSize":"19px","color":"#5f6368","lineHeight":"38px","margin":"0 auto","marginTop":"20px"})
  $("#rjjs .explainBox p").eq(0).find("a").css({"color":"#0A50A1","text-decoration":"underline"})
  $("#rjjs .explainBox p").find("span[style='font-weight: bold; color: rgb(255, 0, 255);']").css({"margin-left":"56px"})
  // 去除标签内容前后空格
  $("#rjjs .explainBox p").each(function(index){
    $(this).html($.trim($(this).html()))
    $(this).find("span").text($.trim($(this).find("span").text()))
  })
// 软件介绍数据处理结束

// 安装步骤数据处理开始 
dataProcessing("#azbz .explainBox");
dataProcessing("#syff .explainBox");
dataProcessing("#faq .explainBox");
// 安装步骤数据处理结束

// 更新日志数据处理开始
// var totalindex = $("#gxrz .log_content p:last").index();
// var logindex=[] //获取加粗标题所在下标
// var logtextarr =[]  //获取所有p标签
// var logtextarr1 =[]  //获取分割后的数组
// var endarr = []  //最终数组
// var elseText = $("#gxrz .log_content ul").html()  //没有标题的情况
// $("#gxrz .log_content p").find("span[style='font-weight: bold;']").parent().each(function(){
//   logindex.push($(this).index())
// })
// $("#gxrz .log_content p").each(function(index){
//   logtextarr.push($(this).prop("outerHTML"))
// })
// console.log(logtextarr);
// for(var i = 0;i<logindex.length;i++){
//   var first = logindex[i]
//   var last =logindex[i+1]
//   if(!last){
//     last =totalindex+1
//   }
//   logtextarr1 = logtextarr.slice(first,last)
//   endarr.push(logtextarr1)
// }
// if(logindex.length>0){
//   $("#gxrz .log_content ul").empty()
//   var logHtml =""
//   for(var i=0;i<endarr.length;i++){
//     logHtml+='<li><span class="update_time">'+updateTime+'</span><span class="update_introduce">'+endarr[i].join('')+'</span></li>'
//   }
//   $("#gxrz .log_content ul").append(logHtml);
// }else{
//   $("#gxrz .log_content ul").empty()
//   var logHtml =""
//     logHtml+='<li><span class="update_time">'+updateTime+'</span><span class="update_introduce">'+elseText+'</span></li>'
//   $("#gxrz .log_content ul").append(logHtml);
// }
// // 去除空格
// $("#gxrz .log_content ul p").each(function(index){
//   $(this).html($.trim($(this).html()))
//   $(this).find("span").text($.trim($(this).find("span").text()))
// })

// 更新日志数据处理结束

// 处理更新日志 更新时间格式
$(".log_content ul li").each(function(){
  var time = $(this).find(".update_time").text();
  $(this).find(".update_time").text(fmt(time))
 })
// 软件详情页软件特色加载更多按钮
$(".main .content .plateWrap").each(function(index){
  if($(this).find("dl").length>0){
    var DlLength = $(this).find("dl").length;
    if(DlLength>1){
      $(this).find("dl").eq(0).css("display","block").siblings().css("display","none");
      $(this).find(".more").click(function(){
        $(".main .content .plateWrap:eq("+index+")").find("dl").css("display","block")
        $(".main .content .plateWrap:eq("+index+")").find(".more").css("display","none")
      })
    }else{
      $(this).find(".more").css("display","none")
    }
  }else{ //新增修改
    var height = $(this).find(".explain").height()
    console.log(height<=400);
    if(height<=400){
      $(".main .content .plateWrap:eq("+index+")").find(".more").css("display","none");
    }else{
      $(".main .content .plateWrap:eq("+index+")").find(".explain").css({"height":"400px","overflow":"hidden"});
      $(".main .content .plateWrap:eq("+index+")").find(".more").css("display","block");
      $(".main .content .plateWrap:eq("+index+")").find(".more").click(function(){
        $(".main .content .plateWrap:eq("+index+")").find(".explain").css({"height":"auto"});
        $(".main .content .plateWrap:eq("+index+")").find(".more").css("display","none");
      })
    }
  }
 })
 // 软件详情页更新日志加载更多按钮
 var LiLength = $(".update_log .log_content ul li").length;
 if(LiLength>1){
   $(".update_log .log_content ul li").eq(0).css("display","block").siblings().css("display","none");
   $(".update_log .log_content .loadMore").click(function(){
     $(".update_log .log_content ul li").css("display","block")
     $(".update_log .log_content .loadMore").css("display","none")
   })
 }else{
   $(".update_log .log_content .loadMore").css("display","none")
 }

//  软件详情页点击返回上一级页面
 $(".leftFixed span.return").click(function(){
  window.location.href=document.referrer;
 })

 //  详情页版本处理
// mac Os版本的换为 >=XXXX 格式
if($(".main .titleList ul li:eq(3)").find("span").text().indexOf(">=")==-1){
  var verText=$(".main .titleList ul li:eq(3)").find("span").text()
  if(verText.indexOf("M1")!=-1){
    verText = verText.split("M1")[1];
    $(".main .titleList ul li:eq(3)").find("span").text('>='+verText.replace(/[^\d.]/g, ""))
  }else{
    $(".main .titleList ul li:eq(3)").find("span").text('>='+verText.replace(/[^\d.]/g, ""))
  }
}
$("#lsbb .versionList ul li").each(function(){
 var verText = $(this).find(".xtbb").text();
 if(verText.indexOf("win")==-1){
   $(this).find(".xtbb").text('macOS'+verText.replace(/[^\d.]/g, "")+'或更高版本')
 }
})
 //  分类列表页js
// 左侧分类导航
// $(".main .main_left .classification dl").each(function(index){
//   var href = window.location.href;
//   var dtUrl = $(this).find("dt>a").attr("href").substring(0,$(this).find("dt>a").attr("href").length-5);
//   if(href.indexOf(dtUrl)!=-1){
//     $(this).find("dt>a").attr("href","javacript:void(0)")
//     $(this).addClass("active").siblings("dl").removeClass("active");
//   }
  
// })
// 列表布局切换
$(".main_right .softwareList .topTitle .btn").each(function(index){
$(".main_right .softwareList .topTitle .btn span").eq(0).addClass("active")
$(".main_right .softwareList .topTitle .btn span").click(function(){
  $(this).addClass("active").siblings().removeClass("active")
})
})
$(".main_right .softwareList .topTitle .btn .listLayout2").click(function(){
  $(".main_right").removeClass("list_layout1").addClass("list_layout2")
})
$(".main_right .softwareList .topTitle .btn .listLayout1").click(function(){
  $(".main_right").removeClass("list_layout2").addClass("list_layout1")
})
//  分页文字
// $(".pages font").eq(0).find("a").text("Previous");
// $(".pages font").eq(1).find("a").text("Next");
$(".pages font").each(function(){
  if($(this).find("a").text()=="Previous"){
    $(this).find("a").addClass("prev")
  }else{
    $(this).find("a").addClass("next")
  }
})
// 点击软件投诉触发用户反馈的点击事件
$(".rjts").click(function(){
  $("#download_feedback").trigger('click');
})
})
// 首页banner轮播
// if($(".swiperWrap").length!=0){
//   var mySwiper = new Swiper ('.swiper', {
//     loop: true, // 循环模式选项
//     autoplay: true, //自动切换
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true
//     },
    
//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    
//   })    
   
// //   鼠标移入停止自动播放
// $('.swiper').mouseenter(function () {undefined
//   mySwiper.autoplay.stop();
//   })
//   //   鼠标移出开始自动播放
//   $('.swiper').mouseleave(function () {undefined
//       mySwiper.autoplay.start();
//   })
// }
// 选项卡切换
// title 切换按钮  box 切换内容  Class 按钮选中样式
function tab(title,box,Class){
  $(title).each(function(index){
      $(title).eq(0).addClass("active");
      $(box).eq(0).show().siblings().hide()
      $(box).eq(0).addClass(Class);
      $(this).click(function(){
          $(this).addClass("active").siblings().removeClass("active");
          $(box).eq(index).show().siblings(box).hide();
          $(box).eq(index).addClass(Class).siblings(box).removeClass(Class);
      })
  })
}
// 阿拉丁返回页面360安全下载按钮取包
function alad360down(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_45,44,10,4,0'
}
// 360环境下金山毒霸取包方法
function jsdbDown_360(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_34,17,9,2,0'
}
// 360环境下AI浏览器取包方法
function aiDown_360(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_37,10,4,0'
}
// 链接后缀带f=bd的本地下载方法
function fbdLocalDownload(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_28,10,4,0'
}
// 链接后缀带f=360box的本地下载方法
function f360boxLocalDownload(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_29,10,4,0'
}
function downLink(id){
  //软件详情页本立即下载 包 10,0
    window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_10,4,0'
}
function TopDownLink(id){
  //软件详情页下载器按钮下载 包 2,3,16,0
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_9,34,17,2,0'
}
// 微软安全管家下载
function WRaqDown(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_24,10,4,0'
}
// AI桌面浏览器下载
function aqDownChrome(id){
    window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_37,10,4,0'
}
// 360安全管家下载
function aqDown360(id){
    window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_23,10,4,0'
}
// 360安全下载19号包
function aqDown36019(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_19,0'
}
// 360安全下载45号包
function aqDown36045(id){
  window.location.href='https://downapi.bear20.com/down/s/hp'+id+'_36,10,4,0'
}
// 历史版本下载
function versionDown(id){
  window.location.href='https://downapi.bear20.com/down/v/'+id
}
// 统计代码
function bear_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592342&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
  console.log(mf);
  
}
// 新统计方法
function countone(referId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592342&id=" + referId + "&f="+mf+"&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// onebox在用统计方法代码
function oneboxCountone(mPlace,mId){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592342&t=rg&f="+encodeURI(mPlace)+"&id="+mId
  $.getScript(url);
}
// 天极传媒首页软件下载方法
function tianjimediaDown(id){
    window.location.href='https://downapi.tianjimedia.com/down/s/'+id+'_10,4,0'
}
function tianjimedia_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592733&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 酷软在线首页软件下载方法
function sootoolDown(id){
    window.location.href='https://downapi.sootool.net/down/s/'+id+'_10,4,0'
}
function sootool_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592859&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 天极传媒历史版本下载
function tianjimediaVersionDown(id){
  window.location.href='https://downapi.tianjimedia.com/down/v/'+id
}
// 酷软在线历史版本下载
function sootoolVersionDown(id){
  window.location.href='https://downapi.sootool.net/down/v/'+id
}

// 酷软在线-电脑软件 详情页软件下载
function meedownDown(id){
  window.location.href='https://downapi.meedown.com/down/s/'+id+'_10,4,0'
}
function meedown_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592892&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 酷软在线-桌面软件 详情页软件下载
function kkdangDown(id){
  window.location.href='https://downapi.kkdang.com/down/s/'+id+'_10,4,0'
}
function kkdang_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=592893&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 酷软在线-电脑软件历史版本下载
function meedownVersionDown(id){
  window.location.href='https://downapi.meedown.com/down/v/'+id
}
// 酷软在线-桌面软件历史版本下载
function kkdangVersionDown(id){
  window.location.href='https://downapi.kkdang.com/down/v/'+id
}

// 酷软优选软件下载方法
function kuaidownDown(id){
  window.location.href='https://downapi.kuaidown.net/down/s/'+id+'_10,4,0'
}
function kuaidown_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=593471&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 酷软优选历史版本下载
function kuaidownVersionDown(id){
  window.location.href='https://downapi.kuaidown.net/down/v/'+id
}

// 阔思亮下载站软件下载方法
function hoyodoDown(id){
  window.location.href='https://downapi.hoyodo.com/down/s/'+id+'_10,4,0'
}
function hoyodo_countone(mId,mf){
  var url = "https://more.yesky.com/soft/mdown.jsp?siteId=593542&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
  $.getScript(url);
}
// 阔思亮下载站历史版本下载
function hoyodoVersionDown(id){
  window.location.href='https://downapi.hoyodo.com/down/v/'+id
}
// 查看更多  收起
function clickmore(clobj, boxa, active, clicnum, boxhei) {
  $(clobj).click(function() {
      clicnum++;
      if(clicnum % 2 == 0) {
          $(this).removeClass(active);
          $(boxa).css("height", boxhei + "px");
          $(this).html("查看更多");
      } else {
          $(this).addClass(active);
          $(boxa).css("height", "auto");
          $(this).html("收起");
      }
  })
}

// 安装步骤等数据处理
function dataProcessing(wrap){
  var toptext  //最顶部标题可能没有
  var commentimgarr = []  //图片数组
  var commenttextarr = []  //p标签数组
  var commenttextarr1 = []  //处理后的p标签
  var commenttextarr2 = []  //处理完多余p后的p标签
  var dytext
  $(wrap).find("p").each(function(){
     // 删除图片是外链的标签
     if($(this).find("img").eq(0).attr("src") && $(this).find("img").eq(0).attr("src").indexOf("image.yesky.com")==-1 && $(this).find("img").eq(0).attr("src").indexOf("image.bear20.com")==-1){
      $(this).remove()
    }
  })
  $(wrap).find("center").each(function(){
    // 删除图片是外链的标签
    if($(this).find("img").eq(0).attr("src") && $(this).find("img").eq(0).attr("src").indexOf("image.yesky.com")==-1 && $(this).find("img").eq(0).attr("src").indexOf("image.bear20.com")==-1){
      $(this).remove()
    }
  })
  if($(wrap).find("center").length==0){
    $(wrap).find("p").each(function(){
      if($(this).find("img").length==1){
        commentimgarr.push($(this).html())
      }else if($(this).find("img").length>1){ //如果一个p标签中有多张图片，取第一张
        if($(this).find("a").length >0){
          commentimgarr.push($(this).find("a:first-child").html())
        }else{
          commentimgarr.push($(this).find("img:first-child").prop("outerHTML"))
        }
      }else if($(this).find("img").length==0){
        commenttextarr.push($(this).prop("outerHTML"));
      }
    })
  }else{
    $(wrap).find("center").each(function(){
      $(this).find("img").removeAttr("align")
      if($(this).find("img").length==1){
        commentimgarr.push($(this).html())
      }else if($(this).find("img").length>1){ //如果一个p标签中有多张图片，取第一张
        if($(this).find("a").length >0){
          commentimgarr.push($(this).find("a:first-child").html())
        }else{
          commentimgarr.push($(this).find("img:first-child").prop("outerHTML"))
        }
      }
    })
    $(wrap).find("p").each(function(){
      commenttextarr.push($(this).prop("outerHTML"));
    })
  }

  if(commenttextarr.length>commentimgarr.length && commentimgarr.length!=0){
    toptext = commenttextarr[0]
    commenttextarr = commenttextarr.splice(1,commenttextarr.length-1)
  }

  if(commenttextarr.length>commentimgarr.length &&commentimgarr.length!=0){
    for(i=0;i<commenttextarr.length;i+=commenttextarr.length/commentimgarr.length){
      commenttextarr1.push(commenttextarr.slice(i,i+commenttextarr.length/commentimgarr.length))
    }
  }else{
    commenttextarr1 =commenttextarr
  }
 
  if(commenttextarr1.length>commentimgarr.length &&commentimgarr.length!=0){
    dytext = commenttextarr1.splice(commentimgarr.length,commenttextarr1.length);
    commenttextarr2 = commenttextarr1.splice(0,commentimgarr.length)
  }else{
    commenttextarr2 = commenttextarr1
  }
  
  if(commenttextarr1.length==1&&commentimgarr.length>=2){
    commentimgarr = commentimgarr.splice(0,2)
  }else{
    commentimgarr = commentimgarr
  }

  if((commentimgarr.length>0 && commenttextarr2.length>1)||commentimgarr.length==commenttextarr2.length){
    $(wrap).empty();
    $(wrap).removeClass("explain")
    var html=""
    if(commenttextarr.length/commentimgarr.length>1){
      for(var i = 0;i<commenttextarr2.length;i++){
        html+='<dl class="clearfix">'
        html+='<dt>'+commentimgarr[i]+'</dt>'
        html+='<dd>'+commenttextarr2[i].join('')+'</dd>'  //可能
        html+='</dl>'
     }
    }else{
      for(var i = 0;i<commenttextarr2.length;i++){
        html+='<dl class="clearfix">'
        html+='<dt>'+commentimgarr[i]+'</dt>'
        html+='<dd>'+commenttextarr2[i]+'</dd>'  //可能
        html+='</dl>'
    }  
  }
  $(wrap).append(html);
  if(toptext){
    $(wrap).find("dl").eq(0).find("dd").prepend(toptext);
  }
  if(dytext){
    for(var i = 0;i<dytext.length;i++){
      for(var j=0;j<dytext[i].length;j++){
        $(wrap).find("dl:last").find("p").parent().append(dytext[i][j])
      }
    }
  }
  $(wrap).find("p").each(function(index){
    $(this).html($.trim($(this).html()))
    $(this).find("span").text($.trim($(this).find("span").text()))
  })
  
}else if(commentimgarr.length>=2 && commenttextarr2.length==1){
    $(wrap).empty();
    $(wrap).removeClass("explain")
    var html=""
    for(var i = 0;i<commentimgarr.length;i+=2){
      html+='<dl class="clearfix special">'
      html+='<dt>'+commentimgarr[i]+'</dt>'
      html+='<dd>'+commentimgarr[i+1]+'</dd>'
      html+='</dl>'
   }
   $(wrap).append(html);
   $(wrap).prepend('<div class="onlyone">'+commenttextarr2[0]+'</div>')
  }

}

/*
all-v 全部
pc-v 电脑
android-v 安卓
mac-v mac
 */
function changeVId(vId) {
  var li = $('#v-selector').children('li')
  for (var i = 0; i < li.length; i++) {
      li[i].className = li[i].id === vId ? 'active' : ''
  }
  platform = vId;
  initPage(1)
}

function initPage(pageNo) {
  var pageSize = 20;
  if (keyword) {
      $.ajax({
          type: 'post',
          url: '/software/searchBear.jhtml',
          data: {name: keyword, pageNo: pageNo, pageSize: pageSize, platform: platform},
          cache: false,
          dataType: "json",
          success: function (data) {
              createNode(data, pageSize)
          },
          error: function () {
          }
      });
  }
}

// 创建ul和分页
function createNode(data, pageSize) {
  var lists = data.result.lists
  document.getElementById('resultNum1').innerText = '(' + (data.result.total > 0 ? data.result.total : '0') + ')'
  document.getElementById('resultNum2').innerText = (data.result.total > 0 ? data.result.total : '0')
  if (lists.length === 0) {
      document.getElementById('lists').innerHTML = "<div class='searchNone'><img src='https://resource.bear20.com/bear_download/images/searchNone.png' alt='nodata'><h4>Sorry, we couldn't find any results.</h4><p>没有搜到相关结果</p></div>"
      return
  }
  var ulHtml = "<ul>"
  for (var i = 0; i < lists.length; i++) {
      ulHtml += createLiNode(lists[i])
  }
  ulHtml += "</ul><div class='pagingWrap'><div class='paging'></div></div>"
  document.getElementById('lists').innerHTML = ulHtml
  new Paging({
      total: data.result.total,
      PageSize: pageSize,
      PageNum: 6,
      current: data.result.pageNo,
      prevText: 'Previous',
      nextText: 'Next',
      callback: function (current) {
          initPage(current)
          // 点击分页回到顶部
          $("html, body").animate({
              scrollTop: 0
          }, 120);
      }
  });
}

//解析software创建li
function createLiNode(software) {
  var imageCover = software.imageCover
  var softwareName = software.name
  var version = software.version
  var fileSize = software.fileSize
  var shortcomment = software.shortcomment ? software.shortcomment : ''
  // var softwareUpTime = new Date(software.updatedTime);
  // var month = softwareUpTime.getMonth() + 1
  // var date = softwareUpTime.getDate()
  // var updateTime = (month < 10 ? "0" + month : month) + "-" + (date < 10 ? '0' + date : date);
  var updateTime = software.updatedTime.substring(5,10)
  // TODO software.commentNums待开发
  var commentNums = software.recommendCount ? software.recommendCount : 0
  var downloadTimes = software.downloadTimes
  if (downloadTimes >= 1000 && downloadTimes < 10000) {
      downloadTimes = (downloadTimes / 1000).toFixed(1) + "k"
  } else if (downloadTimes >= 10000) {
      downloadTimes = (downloadTimes / 10000).toFixed(1) + "w"
  }
    // var a = document.createElement('a')
  // a.href = software.url
  var html = ""
  html+= '<li><a href='+software.url+'><span class="softIcon"><span class="softIcon-hover" style="--img:url(' + imageCover + ');"></span><img src="'+ imageCover + '" alt="' + softwareName + '" onerror="javascript:this.src=\'https://resource.bear20.com/bear_download/images/listpic.png\';"></span>' 
  html+= "<span class='middle'><h3>" + softwareName + "<span>&nbsp;&nbsp;-&nbsp;&nbsp;" + version + " </span></h3><p><span>" + shortcomment + "</span><i class='size'>&nbsp;&nbsp;-&nbsp;&nbsp;" + fileSize + "</i></p></span>" 
  html+= "<p class='right'><span class='down'><i class='icons'></i>" + downloadTimes + "</span>" 
  html+= "<span class='softcomment'><i class='icons'></i>" + commentNums + "</span>"
  html+= "<span class='softUpdateTime'><i class='icons'></i>" + updateTime + "</span>" 
  html+= "</p>"
  html+= "<span class='jt'><i class='icons'></i></span></a></li>" 
  // var li = document.createElement('li')
  // li.append(a)
  return html
}

  // 处理更新日志时间
function fmt(time) {
  var dateStr=time.trim().split(" ");
  var strGMT = dateStr[0]+" "+dateStr[1]+" "+dateStr[2]+" "+dateStr[5]+" "+dateStr[3]+" GMT+0800";
  var date = new Date(Date.parse(strGMT));
  var year = date.getFullYear();  //获取年
  var month = date.getMonth() + 1;    //获取月
  var day = date.getDate(); //获取日
  return year + "-" +(month<10?"0" +month :month) + "-" + (day<10?'0'+day: day)
}
// 轮播图
function swiper(wrap, box, circle, changecss, time) {
  $(circle).eq(0).addClass(changecss).siblings().removeClass(changecss);
  $(box).eq(0).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    // 轮播图
    var imgNum = $(box).size();
    var idx = 0;
    var timer = setInterval(move, time);
    function move(left) {
      if (left) {
        //向左移动
        idx--;
        if (idx == -1) {
          idx = imgNum - 1;
        }
      } else {
        idx++;
        if (idx == imgNum) {
          idx = 0;
        }
      }
      $(circle).eq(idx).addClass(changecss).siblings().removeClass(changecss);
      $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    }
    $(".swiperWrap .next").click(function(){
      move();
    })
    $(".swiperWrap .prev").click(function(){
      idx--;
      if (idx == -1) {
        idx = imgNum - 1;
      }
      $(circle).eq(idx).addClass(changecss).siblings().removeClass(changecss);
      $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    })
    //图片获取焦点时，停止自动轮播
    $(wrap).hover(
      function () {
        clearInterval(timer);
      },
      function () {
        timer = setInterval(move, time);
      }
    );
    //数字浮标的焦点事件
    $(circle).mousemove(function () {
      if (!$(this).hasClass(changecss)) {
        $(this).addClass(changecss).siblings().removeClass(changecss);
        idx = $(this).index();
        $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
      }
    });
}