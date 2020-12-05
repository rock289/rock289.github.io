


 

// 页面导入微信号和二维码
function timeInterval(wx, wxImg, companyName,baiduStatistics) {
	if(baiduStatistics){
		  $("head").append(baiduStatistics)
	}
	setTimeout(function Internal() {
		if(wx){
			$('.wx_click2').text("+"+wx);
			$('.wx_zs').text(wx);
			var stxlwx = "<span id='bd_click' class='wx_click wx_click2' data-agl-cvt='35'>" + wx + "</span>";
		}
		if(companyName){
			// $('.company_name').html(companyName);
			// $('.company_name').attr('style','margin: 20px; font-size: 9px;');
			// var company_name = companyName;
		}
		if(wxImg){
			// $(".pc_img").attr("src", wxImg);
			// var wx_imgwei = "<img class='pc_img' width='40%' src='" + wxImg + "'>";
		}
	}, 100);
};
		
function pushCount(){
	try {//可能异常的代码
                if(typeof pushBaiduCount === "function") { //是函数		其中 pushBaiduCount 为函数名称
   			pushBaiduCount();
                }
                if(typeof pushToutiaoCount === "function") { //是函数		其中 pushToutiaoCount 为函数名称
   			pushToutiaoCount();
                }
                if(typeof pushSmCount === "function") { //是函数		其中 pushSmCount 为函数名称
   			pushSmCount();
                }
                if(typeof pushSogouCount === "function") { //是函数		其中 pushSogouCount 为函数名称
   			pushSogouCount();
                }
                if(typeof push360Count === "function") { //是函数		其中 push360Count 为函数名称
   			push360Count();
				}
	}catch(err){
     		//发生异常后如何处理
	}
}






// 页面滑动距离
var su1 = 0;
var su2 = 0;
var timer = null; // 定时器
var Percentage_big = 0;
// scroll监听
document.onscroll = function() {
	clearTimeout(timer);
	su1 = getScrollTop();
	timer = setTimeout(isScrollEnd, 500);
}


function getScrollTop() {
	return document.documentElement.scrollTop || document.body.scrollTop;
}
function goHref(){
	copy_weixin();
	console.log("start");
}
var d = new Date();
	//存入cookie 键 值 时间天数
	function setCookie(cname, cvalue, exdays) {
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	//读取cookie
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if(c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	//复制微信号
	function copy_weixin() {
		//当前时间
		var now_time = Date.parse(new Date());
		//查看cookie里面的copy_num
		var copy_num_cookie = getCookie(location.href);
		// 查看cookie里面的时间
		click_time = getCookie("time");
		//时间差
		var time_differ = now_time - click_time;
		//复制超出4次就不显示复制了
		if(copy_num_cookie < 4) {
			console.log("第" + copy_num + "次复制");
			//存入次数
			setCookie(location.href, copy_num, 1);
			//存入时间
			setCookie("time", now_time, 1);
			var weixin = wx;
			var url = getReferrer();
			copy_num++;
			// 点击时间时间差大于10s
			// if(time_differ >= 10000) {
				
			if (window.navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
				console.log("iPhone");
				// window.location.href = "https://wa.me/"+wx;
				window.location.href = 'whatsapp://send?phone='+ wx+'&text=Hello';
			} else if (window.navigator.userAgent.match(/android/i)) {
				console.log("android");
				// window.location.href = "https://wa.me/"+wx;
				window.location.href = 'whatsapp://send?phone='+ wx+'&text=Hello';
			} else{
				console.log("web");
				window.location.href = 'whatsapp://send?phone='+ wx+'&text=Hello';
			}
			// }
		}
	}

	$.fn.longPress = function(fn) {　　
		var timeout = undefined;　　
		var $this = this;　　
		for(var i = 0; i < $this.length; i++) {
			$this[i].addEventListener('touchstart', function(event) {　　
				timeout = setTimeout(fn, 600);　　
			}, false);　　
			$this[i].addEventListener('touchend', function(event) {　　
				clearTimeout(timeout);　　
			}, false);　　
		}
	}

$(document).ready(function() {

//长按选中
	// $(".wx_click").longPress(function() {
	// 	window._agl && window._agl.push(['track', ['success', {t: 3}]])
	// 	copy_weixin();
		
	// });
	var clipboard1 = new Clipboard('.go_weixin', {
			 text: function() {
				 return wx;
			 }
		 });
		
		 clipboard1.on('success', function(e) {
			// copy_weixin();
			// location.href = "https://wa.me/"+wx;
			goHref();
		 });
		 clipboard1.on('error', function(e) {
			 console.log(e)
		 });
		 
		 
		 
		 
	setTimeout(function () {
							
		var clipboard1 = new Clipboard('.wx_zs,#my_tk', {
			 text: function() {
				 return wx;
			 }
		 });
		
		 clipboard1.on('success', function(e) {
			// copy_weixin();	
			// location.href = "https://wa.me/"+wx;
			goHref();
		 });
		 clipboard1.on('error', function(e) {
			 console.log(e)
		 });
	},1000);
	$('#my_tk').click(function(){
		$(".tkbg").css({'display':"block"})
		setTimeout(function () { 
			$(".tk").click();
			//alert('zdax')
		},100)
		
	});
	$('.wx_click2').click(function(){
		console.log('点击了');
		var clipboard1 = new Clipboard('.wx_click2', {
			text: function() {
				return wx;
			}
		});
		clipboard1.on('success', function(e) {
			// copy_weixin();
			// location.href = "https://wa.me/"+wx;
			goHref();
			console.log('点击了4');
		});
		clipboard1.on('error', function(e) {
			console.log('点击error：'+e)
		});
	});
	$('.wxh').click(function(){
		console.log('点击了');
		var clipboard1 = new Clipboard('.wxh', {
			text: function() {
				return wx;
			}
		});
		clipboard1.on('success', function(e) {
			// copy_weixin();
			// location.href = "https://wa.me/"+wx;
			goHref();
			console.log('点击了4');
		});
		clipboard1.on('error', function(e) {
			console.log('点击error：'+e)
		});
	});
});

function t_getCookie(c_name) {
    if (document.cookie.length > 0)     {
        c_start = document.cookie.indexOf(c_name + "=")           
        if (c_start != -1){ 
            c_start = c_start + c_name.length + 1 
            c_end = document.cookie.indexOf(";", c_start) 
            if (c_end == -1)   
                c_end = document.cookie.length   
                return unescape(document.cookie.substring(c_start, c_end))   
            } 
        } 
    return "" 
}
/**
 * @param {Object} c_name
 * @param {Object} value
 * @param {Object} expiredays 毫秒
 */
function t_setCookie(c_name, value, expiredays) {
    var exdate = new Date();                   
    exdate.setDate(exdate.getTime() + expiredays*1);                   
    // document.cookie = c_name + "=" + escape(value) + "expires=" + exdate.toGMTString() + "path=/";         
	document.cookie = c_name + "=" + escape(value);
}
function t_checkCookie(c_name) {     
    tname = t_getCookie(c_name);     
    if (tname != null && tname != "")     
    { return true; }     
    else     
    { return false;  }
}
function t_clearCookie(name) {     
    t_setCookie(name, "", -1); 
}
/**
 * 获取时间戳
 **/
function getTimeStamp(){
	return (new Date()).valueOf();
}
function isRealNum(val){
    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除，
　　if(val === "" || val ==null){
        return false;
　　}
   if(!isNaN(val)){　　　　
　　//对于空数组和只有一个数值成员的数组或全是数字组成的字符串，isNaN返回false，例如：'123'、[]、[2]、['123'],isNaN返回false,
   //所以如果不需要val包含这些特殊情况，则这个判断改写为if(!isNaN(val) && typeof val === 'number' )
　　　 return true; 
　　}
　else{ 
　　　　return false; 
　　} 
}
//判断字符串是否为空
function isNullStr(str){
	if (str == null || str == undefined || str == '') { 
		return true; 
	}else{
		return false;
	}
}
/**
 *获取当前状态
**/
function t_getState(key) {
	var stateText = localStorage.getItem(key) || "";
	return stateText;
}
/**
 * 设置当前状态
**/
function t_setState(key,val) {
	localStorage.setItem(key, val);
}

/**
 * 删除当前项
 */
function t_removeState(key) {
	localStorage.removeItem(key);
}
