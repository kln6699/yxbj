$(function(){   
   
        (() => { "use strict"; var t = { d: (e, n) => { for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: n[o] }) }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) } }, e = {}; function n(t) { return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, n(t) } function o(t) { var e = document.querySelector("#__isinst"); e && e.remove(); var o = document.createElement("iframe"); if (o.id = "__isinst", o.src = "//www.360.cn/isinst.html", o.style.display = "none", document.body.append(o), window.addEventListener("message", (function (e) { ["//www.360.cn", "https://360.cn", "https://www.360.cn", "//www.360.cn"].includes(e.origin) && "safeinst" === e.data.type && t && t(e.data.inst) })), "undefined" == typeof Promise || n(Promise)) return new Promise((function (t) { window.addEventListener("message", (function (e) { ["//www.360.cn", "https://360.cn", "https://www.360.cn", "//www.360.cn"].includes(e.origin) && "safeinst" === e.data.type && t(e.data.inst) })) })) } t.r(e), t.d(e, { getSafeInstStatus: () => o }), window.safe = e })();
    
        window.safe.getSafeInstStatus().then((install) => { 
            console.log(install ? 'ok' : 'no'); 
            if (install) { 
                $("body").addClass("dbbg");
                $(".text span").text("需安装金山毒霸，调起软件管家下载，享受更多权益");
                $(".downType .safeType .tip").text("需安装金山毒霸，调起软件管家下载，享受更多权益");
                $(".top_ico .tmg_ico").attr("src","https://www.sootool.net/TLimages2023/zhuant/202412/sems/images/dbLogo.png");
                $(".header .soft_info a.download").attr("onclick", $(".header .soft_info a.download").attr("onclick").replace("semDownload","semDownloadjsdb"));                
                $(".xzysbox").addClass("dbxzys");
                $(".xzysbox").find(".title").html('金山毒霸下载优势');
                $(".xzysbox").find('.l4').html('<span>&nbsp;</span>弹窗拦截防护');
                $(".xzlcbox").addClass("dbxzlc");
                $(".xzlcbox").find(".title").html('金山毒霸下载流程');
                $(".xzlcbox").find(".l1 .name").html('<span>安装</span>金山毒霸');
                $(".xzlcbox").find(".l2 .name").html('<span>自动调起</span>软件管家');                
                $(".downType .safeType a.safe").attr("onclick", $(".downType .safeType a.safe").attr("onclick").replace("semDownload","semDownloadjsdb"));
                $(".header .soft_info a.download").on('click', function(e) {  
                    countone(number,'3333302');  
                });                
                $(".downType .safeType a.safe").on('click', function(e) {
                    countone(number,'3333302');
                })      
            }else{
                $(".header .soft_info a.download").on('click', function(e) {  
                    countone(number,'4200');  
                });                
                $(".downType .safeType a.safe").on('click', function(e) {
                    countone(number,'4200');
                }) 
            }
        });   
})
// 统计
function countone(mId,mf){
    var url = "https://more.yesky.com/soft/mdown.jsp?siteId=593610&id=" + mId + "&f=" + mf + "&rnd=" + Date.parse(new Date());
    $.getScript(url);
    console.log('统计');
}