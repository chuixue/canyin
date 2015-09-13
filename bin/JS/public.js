// JavaScript Document
function trim(str){ //删除左右两端的空格　　
     return str.replace(/(^s*)|(s*$)/g, "");
}
function ltrim(str){ //删除左边的空格
	return str.replace(/(^s*)/g,"");
}
function rtrim(str){ //删除右边的空格
	return str.replace(/(s*$)/g,"");
}
function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
    if(arr=document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
function $$(id){ return document.getElementById(id); };
function ajaxData(url,data,rstId,callbackS,callbackE){
	if(rstId!="")$$(rstId).innerHTML="请等待...";
	var rand= parseInt(Math.random() * 100);   
	$.ajax({
		url: url,
		dataType: "jsonp",	 
		data: data,
		type: 'get',
		jsonpCallback: 'callback' + rand.toString(), 
		success: function (data) {
			callbackS(data);
			if(rstId!="")$$(rstId).innerHTML="";
		},
		error: function (xhr, status, error) {
			if(callbackE!=null)callbackE(xhr, status, error);
			if(rstId!="")$$(rstId).innerHTML="连接服务器失败!";
		},
	  });	
}
function EnterPress(e){ //传入 event 
	var e = e || window.event; 
	if(e.keyCode == 13)return true;
	return false;
}
//用于调试
function out(obj){
　　var ob=eval(obj);
　　var property="";
　　for(var p in ob)property+=p+ ": " + obj[p] + "\n";
　　alert(property);
}
//判断上传文件格式是否满足条件
function isPicture(fileName){
	if(fileName!=null && fileName !=""){
  		if (fileName.lastIndexOf(".")!=-1) {//lastIndexOf如果没有搜索到则返回为-1
			var fileType = (fileName.substring(fileName.lastIndexOf(".")+1,fileName.length)).toLowerCase();
			var suppotFile = new Array();
			suppotFile[0] = "jpg";
			suppotFile[1] = "gif";
			suppotFile[2] = "bmp";
			suppotFile[3] = "png";
			suppotFile[4] = "jpeg";
			for (var i =0;i<suppotFile.length;i++) {
				if (suppotFile[i]==fileType) {
					return true;
				} else{
 					continue;
				}
			}
			alert("文件类型不合法,只能是jpg、gif、bmp、png、jpeg类型！");
			return false;
		} else{
			alert("文件类型不合法,只能是 jpg、gif、bmp、png、jpeg 类型！");
			return false;
		}
	}
} 
function getRadioValue(radioName){ 
	var obj = document.getElementsByName(radioName); 
	for(i=0; i<obj.length;i++){
		if(obj[i].checked) return obj[i].value; 
	}         
	return "undefined";       
} 
function getCheckValue(checkName){ 
	var obj = document.getElementsByName(checkName);
	var data=[];
	for(i=0; i<obj.length;i++){
		if(obj[i].checked)data.push(obj[i].value);
	}
	return data;       
} 
function getSelectValue(selID){
	var obj=document.getElementById(selID);
	var index = obj.selectedIndex; 
	var value = obj.options[index].value; // 选中值
	return value;
}
function getDeskId(onlykey){
	return 101;
}

function getUser(){
	var uName="";
	var uId=getCookie("cnsShopUserName");
	var uShop=getCookie("cnsShopShopId");
	var uPower="1";
	var user={
		name:uName,
		user:uId,
		shop:uShop,
		power:uPower
	};
	return user;
}
function getConfig2(){
	var srvURL="http://10.10.1.120";
	var srvIP="10.10.1.120";
	var ajaxPORT="8003";
	var socketPORT="8001";
	var webPORT="8000";
	var webURL=srvURL + ":" + webPORT;
	var ajaxURL=srvURL + ":" + ajaxPORT;
	
	var cfg={
		srvURL: srvURL,
		srvIP: srvIP,
		ajaxPORT: ajaxPORT,
		socketPORT: socketPORT,
		webPORT: webPORT,
		webURL: webURL,
		ajaxURL: ajaxURL
	};
	
	return cfg;
}

function getConfig(){
	var srvURL="http://cins.swpu.edu.cn";
	var srvIP="cins.swpu.edu.cn";
//	var srvURL="http://211.149.246.58";
//	var srvIP="211.149.246.58";
	var ajaxPORT="8003";
	var socketPORT="8001";
	var webPORT="8000";
	var webURL=srvURL + ":" + webPORT;
	var ajaxURL=srvURL + ":" + ajaxPORT;
	
	var cfg={
		srvURL: srvURL,
		srvIP: srvIP,
		ajaxPORT: ajaxPORT,
		socketPORT: socketPORT,
		webPORT: webPORT,
		webURL: webURL,
		ajaxURL: ajaxURL
	};
	
	return cfg;
}
function getTimeNow(){
	var now= new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1; 
	var day=now.getDate(); 
	var hour=now.getHours(); 
	var minute=now.getMinutes(); 
	var second=now.getSeconds(); 
	var nowdate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second; 	
	return nowdate;
}
function getUserInfo(){
	var shopId="123";
	var pid="1001";
	return {shopId:shopId, pid:pid};	
}
Array.prototype.remove = function(val) {   
    var index = this.indexOf(val);   
    if (index > -1) {   
        this.splice(index, 1);   
    }   
}
Array.prototype.indexOf = function(val) {               
	for (var i = 0; i < this.length; i++) {   
      if (this[i] == val) return i;   
	}   
	return -1;   
}
function createCode(codeId){    
	var code = "";   
    var codeLength = 5;//验证码的长度   
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的   
    for(var i=0;i<codeLength;i++){     
	    var charIndex = Math.floor(Math.random()*36);   
    	code +=selectChar[charIndex];      
    }
	var checkCode=document.getElementById(codeId);
    if(checkCode)checkCode.innerHTML = code; 
	return code;
}   

