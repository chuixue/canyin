// JavaScript Document
	//加载页头
	var $j=$.noConflict();	
	$j.ajaxSetup({cache:false });
	$j.ajaxSetup({ async: false });  
	var IsReady=0;
	$j("<div></div>").load("head.html",function(){
		document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
		IsReady=1;
	});
	$j.ajaxSetup({ async: true });
	var socket; //通信

	$j(document).ready(function(){ 
		//权限检查
		var myUserName=getCookie("cnsShopUserName");
		var strUrl=window.location.href;
		var arrUrl=strUrl.split("/");
		var strPage=arrUrl[arrUrl.length-1];
		if(strPage!="login.html"){
			if(myUserName==null)document.location="../login/login.html";
		}
		
		//消息
		var PUB_cfg=getConfig();
		var PUB_user=getUser();	
		var count_mail=0;	//订单
		var count_bell=0;	//呼叫
		var count_money=0;	//付款
		var timeCall=toTime(getCookie("timeCallRead"));
		var timeOrder=toTime(getCookie("timeOrderRead"));
		var timeMoney=toTime(getCookie("timeMoneyRead"));
		$j.ajax({
			url: PUB_cfg.ajaxURL + '/msgInfo', //10.10.1.120
			dataType: "jsonp", type: 'get',	jsonpCallback: 'callback2', 
			data: { shopId:PUB_user.shop, uid:PUB_user.user, timeCall:timeCall, timeOrder:timeOrder, timeMoney:timeMoney },  
			success: function (RST) {
				if(RST.error==undefined){
					setCall(RST.call);
					setOrder(RST.order);
					setMoney(RST.money);				
				}else
					alert("请求失败");//lb_info.innerHTML="请求失败";					
			},
			error: function (xhr, status, error) {	
				alert(error.message);
//				lb_info.innerHTML=error.message;
			}
		});		
		
		//socket通信
		socket = io.connect(PUB_cfg.socketURL);
		var pData={ 'uid':PUB_user.user, 'shopId':PUB_user.shop, 'isShop':'1'	 };//个人身份信息
		//连接和监听
		socket.on('conn', function (data,fn) {	
			$j("#net_sign").css("color","green");
			socket.emit('login', pData );//提交个人信息·uid,onlykey
		});
		socket.on('shopMsg', function (data) {//接收购物车信息
			alert("Received");
				//lbcar.innerHTML="用户:" + data.uid + ", onlykey:" + data.onlykey + ", 菜品id:" + data.dish.id + ", 数量:" + data.dish.num;		
			if(data.workId==1){
				
			}else{
					
			}
		});
		socket.on('disconnect',function(){
			$j("#net_sign").css("color","#ccc");
		});
		/// socket
		
		//事件
		$j("#user_loginOut").click(function(){ loginOut(); });
		//弹出
		$j("#mail_icon").click(function(){
			$j("#mail_text_small").html(getTimeDiff("timeOrderGet"));
		});
		//跳转
		$j("#mail_content").click(function(){
			setCookie("timeOrderRead",(new Date()).getTime());
			window.location.href="kitchen.html";
		});	
		//弹出	
		$j("#money_icon").click(function(){
			$j("#money_text_small").html(getTimeDiff("timeMoneyGet"));
		});	
		//跳转	
		$j("#money_content").click(function(){
			setCookie("timeMoneyRead",(new Date()).getTime());
			window.location.href="money.html";
		});	
		//弹出
		$j("#bell_icon").click(function(){
			$j("#bell_text_small").html(getTimeDiff("timeCallGet"));
		});	
		//跳转	
		$j("#bell_content").click(function(){
			setCookie("timeCallRead",(new Date()).getTime());
			window.location.href="call.html";
		});		
		///事件
		
	});

//*******************************************************************
/*
timeOrderGet - 收到时间
timeMoneyGet - 
timeCallGet -
timeOrderRead - 阅读时间
timeMoneyRead
timeCallRead
*/

//set label 
function setMoney(data){
	count_money=data.count;
	var str= getLastTime(data.data,"mtime");
	setCookie("timeMoneyGet",str);
	var c=count_money==0 ? "" : count_money;
	$j("#money_count").html(c);
	$j("#money_count_small").html(c);
	$j("#money_text_small").html(getTimeDiff("timeMoneyGet"));
	
//	money_text
//	
}
function setOrder(data){
	count_bell=data.count;
	var str= getLastTime(data.data,"obtime");
	setCookie("timeOrderGet", str);
	var c=count_bell==0 ? "" : count_bell;
	$j("#mail_count").html(c);
	$j("#mail_count_small").html(c);
	$j("#mail_text_small").html(getTimeDiff("timeOrderGet"));
//	mail_text
//	

}
function setCall(data){
	count_mail=data.count;
	var str= getLastTime(data.data,"cbtime");
	setCookie("timeCallGet",str);
	var c=count_mail==0 ? "" : count_mail;
	$j("#bell_count").html(c);
	$j("#bell_count_small").html(c);
	$j("#bell_text_small").html(getTimeDiff("timeCallGet"));	
	
//	bell_text

}
//根据cookie获取时间差字符串
function getTimeDiff(cookieName){
	var str=getCookie(cookieName) || getDateNow();
	str = str.replace(/-/g,"/");
	var time= new Date(parseInt(str));
	var now=new Date();
	var hs=now.getTime()-time.getTime();
	if(hs<0)return "1 秒之前.";
	var s=Math.floor(hs / 1000) + 1 ;
	var m=Math.floor(hs / (60 * 1000)) ;
	var h=Math.floor(hs / (60 * 60 * 1000));
	var d=Math.floor(hs / (24 * 60 * 60 * 1000));
	var txt="";
	if(d>0){
		txt= d + " 天";
	}else if(h>0){
		txt= h + " 小时";
	}else if(m>0){
		txt= m + " 分钟";
	}else if(s>0){
		txt= s + " 秒钟";
	}
	txt+="以前.";
	return txt;
}
//返回时间戳
function getLastTime(data,timeStr){
	var temp=data.length!=0 ? data[0][timeStr] : getDateNow();
	temp=toTimeString(temp);
	temp = temp.replace(/-/g,"/");
	var time= new Date(temp);
	return time.getTime();
}
//时间戳转标准时间
function toTime(str){
	var dt=new Date(parseInt(str));
	var login=getCookie("cnsShopLoginTime");
	var lt=new Date(parseInt(login));
	var mt=getTimeMorning();
	if(!str)dt=lt.getTime()>mt.getTime() ? mt : lt;
	return dateFormat(dt,"%Y-%m-%d %H:%M:%S");
}
//退出
function loginOut(){
	delCookie("cnsShopUserName");
	delCookie("cnsShopShopId");
	delCookie("cnsShopLoginTime");		
	window.location.href="../login/login.html";
}
//cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
    if(arr=document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
function setCookie(name,value)
{
	var Days = 1;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";  
}


