function m_ws01(offset) { var endstr = document.cookie.indexOf (";", offset); if (endstr == -1) endstr = document.cookie.length; return unescape(document.cookie.substring(offset, endstr)); }
function m_ws02(name) { var arg = name + "="; var alen = arg.length; var clen = document.cookie.length; var i = 0; while (i < clen) { var j = i + alen; if (document.cookie.substring(i, j) == arg) return m_ws01(j); i = document.cookie.indexOf(" ", i) + 1; if (i == 0) break; } return ""; }
function pb_slide(type) {var n=new Date().getTime();var c=escape(n*1000+Math.round(Math.random()*1000));var u="";
with(document){if(cookie.indexOf("SMYUV=")<0)
{cookie="SMYUV="+c+";path=/;expires=Sun, 29 July 2046 00:00:00 UTC;domain=sogou.com";u=c;}
else u=m_ws02("SMYUV");
if(domain.indexOf("sogou.com")>=0){
    var ref = referrer==""?m_ws02("redref"):referrer;
    cookie="redref="+ref+";path=/;domain=.sogou.com";
    var l = new Date().getTime();
    //l = l-load_et;
    //alert(123);
    var url = window.location.href;
    var h = url.indexOf("?") == -1?url.length:url.indexOf("?");
    url = url.substring(0,h);
    //write("<img src='http://ping.bizhi.sogou.com/pv_share.gif?t="+c+"&u="+u+"&r="+escape(ref)+"&fv="+escape(fv)+"&type="+type+"' />");
    ct_img.src = "http://pinyin.sogou.com/pb_slide.gif?url="+url;}}}
try{
var s = typeof(s) == "undefined" ? "" : s;
var fv = typeof(v_flash) == "undefined" ? "" : v_flash;
}catch(e){}
var ct_img=document.createElement('img');