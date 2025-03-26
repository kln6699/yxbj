// Lee dialog 1.0 http://www.xij.cn/blog/?p=68

var dialogFirst=true;
function dialog(title,content,width,height,cssName){

if(dialogFirst==true){
  var temp_float=new String;
  temp_float="<div id=\"floatBoxBg\" style=\"height:"+jQuery(document).height()+"px;filter:alpha(opacity=0);opacity:0;\"></div>";
  temp_float+='<div id="floatBox" class="skindl png_bg"><img src="images/share/close.gif" alt="关闭" width="22" height="22" class="closewindow2">';
  //temp_float+="<div id=\"floatBox\" class=\"floatBox\">";
  //temp_float+="<div class=\"title\"><h4></h4><span>关闭</span></div>";
  temp_float+="<div class=\"content\"></div>";
  temp_float+="</div>";
  jQuery("body").append(temp_float);
  //jQuery("#wrapper").append(temp_float);
  dialogFirst=false;
}

jQuery("#floatBox img").click(function(){
  jQuery("#floatBoxBg").animate({opacity:"0"},"normal",function(){jQuery(this).hide();});
  jQuery("#floatBox").animate({top:(jQuery(document).scrollTop()-(height=="auto"?300:parseInt(height)))+"px"},"normal",function(){jQuery(this).hide();}); 
});

//jQuery("#floatBox .title h4").html(title);
contentType=content.substring(0,content.indexOf(":"));
content=content.substring(content.indexOf(":")+1,content.length);
switch(contentType){
  case "url":
  var content_array=content.split("?");
  jQuery("#floatBox .content").ajaxStart(function(){
    jQuery(this).html("loading...");
  });
  jQuery.ajax({
    type:content_array[0],
    url:content_array[1],
    data:content_array[2],
	error:function(){
	  jQuery("#floatBox .content").html("error...");
	},
    success:function(html){
      jQuery("#floatBox .content").html(html);
    }
  });
  break;
  case "text":
  jQuery("#floatBox .content").html(content);
  break;
  case "id":
  jQuery("#floatBox .content").html(jQuery("#"+content+"").html());
  break;
  case "iframe":
  jQuery("#floatBox .content").html("<iframe src=\""+content+"\" width=\"100%\" height=\""+(parseInt(height)-30)+"px"+"\" scrolling=\"auto\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"></iframe>");
}


jQuery("#floatBoxBg").show();
jQuery("#floatBoxBg").animate({opacity:"0.5"},"normal");
//jQuery("#floatBox").attr("class","floatBox "+cssName);
jQuery("#floatBox").css({display:"block",left:((jQuery(window).width())/2-(parseInt(width)/2))+"px",top:(jQuery(document).scrollTop()-(height=="auto"?300:parseInt(height)))+"px",width:width,height:height});
jQuery("#floatBox").animate({top:(jQuery(document).scrollTop()+50)+"px"},"normal"); 
}

function dialog2(title,content,width,height,cssName){

if(dialogFirst==true){
  var temp_float=new String;
  temp_float="<div id=\"floatBoxBg\" style=\"height:"+jQuery(document).height()+"px;filter:alpha(opacity=0);opacity:0;\"></div>";
  temp_float+="<div id=\"floatBox\" class=\"floatBox\">";
  temp_float+="<div class=\"title\"><h4></h4><span>关闭</span></div>";
  temp_float+="<div class=\"content\"></div>";
  temp_float+="</div>";
  jQuery("#wrapper").append(temp_float);
  dialogFirst=false;
}

jQuery("#floatBox .title span").click(function(){
  jQuery("#floatBoxBg").animate({opacity:"0"},"normal",function(){jQuery(this).hide();});
  jQuery("#floatBox").animate({top:(jQuery(document).scrollTop()-(height=="auto"?300:parseInt(height)))+"px"},"normal",function(){jQuery(this).hide();}); 
});

jQuery("#floatBox .title h4").html(title);
contentType=content.substring(0,content.indexOf(":"));
content=content.substring(content.indexOf(":")+1,content.length);
switch(contentType){
  case "url":
  var content_array=content.split("?");
  jQuery("#floatBox .content").ajaxStart(function(){
    jQuery(this).html("loading...");
  });
  jQuery.ajax({
    type:content_array[0],
    url:content_array[1],
    data:content_array[2],
	error:function(){
	  jQuery("#floatBox .content").html("error...");
	},
    success:function(html){
      jQuery("#floatBox .content").html(html);
    }
  });
  break;
  case "text":
  jQuery("#floatBox .content").html(content);
  break;
  case "id":
  jQuery("#floatBox .content").html(jQuery("#"+content+"").html());
  break;
  case "iframe":
  jQuery("#floatBox .content").html("<iframe src=\""+content+"\" width=\"100%\" height=\""+(parseInt(height)-30)+"px"+"\" scrolling=\"auto\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"></iframe>");
}

jQuery("#floatBoxBg").show();
jQuery("#floatBoxBg").animate({opacity:"0.5"},"normal");
jQuery("#floatBox").attr("class","floatBox "+cssName);
jQuery("#floatBox").css({display:"block",left:((jQuery("#wrapper").width())/2-(parseInt(width)/2))+"px",top:(jQuery(document).scrollTop()-(height=="auto"?300:parseInt(height)))+"px",width:width,height:height});
jQuery("#floatBox").animate({top:(jQuery(document).scrollTop()+50)+"px"},"normal"); 
}

function SogouTailorNotice(targetID,noticeID,width,height,timeout) {
	this.noticeID = noticeID;

	this.opacity = 100;
	this.height = height;
	this.width = width;
	this.timeout = timeout * 1000;
	this.successImage = "js/notice/success.gif";
	this.errorImage = "js/notice/error.gif";

	this.noticeWrapper = document.getElementById(this.noticeID);
	if (!this.noticeWrapper) {
		this.noticeWrapper = document.createElement("div");
		this.noticeWrapper.className = "actbox";
		this.noticeWrapper.style.width = this.width + "px";
		this.noticeWrapper.style.height = this.height + "px";
		this.noticeWrapper.id = this.targetID;

		this.imageElement = document.createElement("div");
		this.imageElement.className = "actimg";

		this.textElement = document.createElement("div");
		this.textElement.className = "acttext";
		this.textElement.style.width = (this.width - 40) + "px";

		this.noticeWrapper.appendChild(this.imageElement);
		this.noticeWrapper.appendChild(this.textElement);
		document.getElementById(targetID).appendChild(this.noticeWrapper);

	}else{
		this.imageElement = this.noticeWrapper.firstChild;
		this.textElement = this.noticeWrapper.childNodes[1];
	}

	this.height = this.noticeWrapper.offsetHeight;

}

SogouTailorNotice.prototype.Success = function (message) {
	this.appear();
/*
	this.imageElement.innerHTML = '<img src="'+this.successImage+'" />';
	this.textElement.className = "acttext noticeblue";
	this.textElement.innerHTML = message;
*/
	this.noticeWrapper.className = "notice_success";
	this.noticeWrapper.innerHTML = '<table height="100%" width="100%"><tr><td><img src="'+this.successImage+'" style="margin-left:5px;" /></td><td><span class="noticeblue">'+message+'</span></td></tr></table>';
	var oSelf = this;
	setTimeout(function () {
		oSelf.disappear();
	}, this.timeout);
};

SogouTailorNotice.prototype.Error = function (message) {
	this.appear();
/*
	this.imageElement.innerHTML = '<img src="'+this.errorImage+'" />';
	this.textElement.className = "acttext noticered";
	this.textElement.innerHTML = message;
*/
	this.noticeWrapper.className = "notice_error";
	this.noticeWrapper.innerHTML = '<table height="100%" width="100%"><tr><td><img src="'+this.errorImage+'" style="margin-left:5px;" /></td><td><span class="noticered">'+message+'</span></td></tr></table>';
	var oSelf = this;
	setTimeout(function () {
		oSelf.disappear();
	}, this.timeout);
};

SogouTailorNotice.prototype.appear = function () {
		if (this.noticeWrapper.filters) {
			try {
				this.noticeWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = 100;
			} catch (e) {
				this.noticeWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
			}
		} else {
			this.noticeWrapper.style.opacity = 1;
		}
		
		//this.noticeWrapper.style.height = "";
		//this.height = this.noticeWrapper.offsetHeight;
		this.opacity = 100;
		this.noticeWrapper.style.display = "";

};

SogouTailorNotice.prototype.disappear = function () {

	var reduceOpacityBy = 15;
	var reduceHeightBy = 4;
	var rate = 30;	// 15 fps

	if (this.opacity > 0) {
		this.opacity -= reduceOpacityBy;
		if (this.opacity < 0) {
			this.opacity = 0;
		}

		if (this.noticeWrapper.filters) {
			try {
				this.noticeWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = this.opacity;
			} catch (e) {
				this.noticeWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.opacity + ")";
			}
		} else {
			this.noticeWrapper.style.opacity = this.opacity / 100;
		}
	}

	if (this.height > 0) {
		this.height -= reduceHeightBy;
		if (this.height < 0) {
			this.height = 0;
		}

		this.noticeWrapper.style.height = this.height + "px";
	}

	if (this.height > 0 || this.opacity > 0) {
		var oSelf = this;
		setTimeout(function () {
			oSelf.disappear();
		}, rate);
	} else {
		this.noticeWrapper.style.display = "none";
	}
};
function cmt_callback(flog,msg){
    jQuery.facybox.close();
    var myNotice = new SogouTailorNotice("cmt_notice","mynotice",200,30,3);
    if(flog){
	//SetCookie(skin_cmt_<{jQueryskin_id}>,1,60);
	myNotice.Success(msg);
	getScore(1);
    }else
	myNotice.Error(msg);
    setTimeout(function(){p(1,1);},1000);
}
function dlcmt(id){
    var param = "cid="+id+"&op=remove&p="+(new Date().getTime());
	//alert(param);
    jQuery.ajax({
	type: "POST",
	url: "comment_remove.php",
	data: param,
	dataType: "script"
    });
}
function dlcmt_skin(id,itemid,skinid){
    var param = "cid="+id+"&itemid="+itemid+"&skinid="+skinid+"&op=remove&p="+(new Date().getTime());
        //alert(param);
    jQuery.ajax({
        type: "POST",
        url: "comment_remove_skin.php",
        data: param,
        dataType: "script"
    });
}
jQuery(document).ready(function(jQuery) {
      jQuery('a[rel*=facybox]').facybox({
        // noAutoload: true
      });
	//jQuery(document).trigger(function(){});
    });
function showScore(arg,re) {
    var _arr = re.split(",");
    var score = _arr[0];
    var people = _arr[1];
    document.getElementById("currentScore").style.width = score*20 + "px";
    document.getElementById("score_num").innerHTML = "&nbsp;"+score;
    //document.getElementById("currentScore").title = score + "分";
    document.getElementById("people_num").innerHTML = people;
}



function  SetCookie(name,  value){
	var  expdate  =  new  Date();
	var  argv  =  SetCookie.arguments;
	var  argc  =  SetCookie.arguments.length;
	var  expires  =  (argc  >  2)  ?  argv[2]  :  null;
	var  path  =  (argc  >  3)  ?  argv[3]  :  null;
	var  domain  =  (argc  >  4)  ?  argv[4]  :  null;
	var  secure  =  (argc  >  5)  ?  argv[5]  :  false;
	if(expires!=null)  expdate.setTime(expdate.getTime()  +  (  expires  *  1000  ));
	document.cookie  =  name  +  "="  +  escape  (value)  +((expires  ==  null)  ?  ""  :  (";  expires="+  expdate.toGMTString()))+((path  ==  null)  ?  ""  :  (";  path="  +  path))  +((domain  ==  null)  ?  ""  :  (";  domain="  +  domain))+((secure  ==  true)  ?  ";  secure"  :  "");
}
function  DelCookie(name){
	var  exp  =  new  Date();
	exp.setTime  (exp.getTime()  -  1);
	var  cval  =  GetCookie  (name);
	document.cookie  =  name  +  "="  +  cval  +  ";  expires="+  exp.toGMTString();
}
function  GetCookie(name){
	var  arg  =  name  +  "=";
	var  alen  =  arg.length;
	var  clen  =  document.cookie.length;
	var  i  =  0;
	while  (i  <  clen){
		var  j  =  i  +  alen;
		if  (document.cookie.substring(i,  j)  ==  arg)
			return  GetCookieVal(j);
		i  =  document.cookie.indexOf(" ",  i)  +  1;
		if  (i  ==  0)  break;
	}
	return  null;
}
//cookie操作相关函数
function  GetCookieVal(offset){
	var  endstr  =  document.cookie.indexOf  (";",  offset);
	if  (endstr  ==  -1)
		endstr  =  document.cookie.length;
	return  unescape(document.cookie.substring(offset,  endstr));
}

function _len(s) {
    var l = 0;
    var a = s.split("");
    for (var i=0;i<a.length;i++) {
        if (a[i].charCodeAt(0)<299) {
            l++;
        } else {
            l+=2;
        }
    }
    return l;
}
