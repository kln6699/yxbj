$(function () {

  // 软件大小KB转为MB
  var size = $(".main .titleList ul li").eq(0).find("span").text();
  if(size.indexOf("KB")!=-1){
      size = size.substring(0,size.length-2)/1024;
      $(".main .titleList ul li").eq(0).find("span").text(size);
  }
  // 新增二维码露出js  2022-09-23
  $(".erwm").hover(function(){
    $(".bigerwm").show()
  },function(){
    $(".bigerwm").hide()
  })
 
})