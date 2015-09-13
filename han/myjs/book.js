 
 //数据的处理
 function book(){
   
			
			//通过ajax获取数据库中的数据的方式
	$.ajax({
		url: 'http://cins.swpu.edu.cn:8003/book',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {name: "lucy"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		success:function (data){table_book(data);}
		 
   });
			
		function table_book(data){	
        for(var i=0;i<data.length;i++)
		{ 
		//一号桌
		if(data[i].tid==1){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
			  
                    var tid=document.getElementById('tid1');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime1');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount1');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid1');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime1');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk1").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid1');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime1');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount1');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid1');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime1');
                        optime.innerHTML=data[i].optime;
             				   
		      }
			}
			else {
				  $(".desk1").css("background-color","#F0F8FF");
				var tid=document.getElementById('tid1');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status1');
				     status.innerHTML="空闲";				
			}
           			
			
			
			
		}	
		
		//二号桌
       if(data[i].tid==2){
		   if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid2');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime2');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount2');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid2');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime2');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk2").css("background-color","#CCCCFF");//改变餐桌预定颜色	
                var tid=document.getElementById('tid2');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime2');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount2');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid2');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime2');
                        optime.innerHTML=data[i].optime;
		   }	   
		    }
       else {
		     $(".desk2").css("background-color","#F0F8FF");
	            var tid=document.getElementById('tid2');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status2');
				     status.innerHTML="空闲";				
			}			
		}	
      //三号桌
		if(data[i].tid==3){
			if(data[i].uid!=""){
			
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid3');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime3');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount3');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid3');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime3');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk3").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid3');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime3');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount3');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid3');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime3');
                        optime.innerHTML=data[i].optime;
		   } 				   
		    }
else {          $(".desk3").css("background-color","#F0F8FF");   
            var tid=document.getElementById('tid3');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status3');
				     status.innerHTML="空闲";				
			}			
		}	
		//四号桌
		if(data[i].tid==4){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid4');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime4');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount4');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid4');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime4');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk4").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid4');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime4');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount4');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid4');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime4');
                        optime.innerHTML=data[i].optime;
		   } 				   
		    }
else {         $(".desk4").css("background-color","#F0F8FF");  
	         var tid=document.getElementById('tid4');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status4');
				     status.innerHTML="空闲";				
			}			
		}	
		//五号桌
		if(data[i].tid==5){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid5');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime5');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount5');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid5');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime5');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk5").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid5');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime5');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount5');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid5');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime5');
                        optime.innerHTML=data[i].optime;
		   }				   
		    }
else {             $(".desk5").css("background-color","#F0F8FF");
	var tid=document.getElementById('tid5');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status5');
				     status.innerHTML="空闲";				
			}			
		}	
		//六号桌
		if(data[i].tid==6){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid6');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime6');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount6');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid6');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime6');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk6").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid6');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime6');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount6');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid6');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime6');
                        optime.innerHTML=data[i].optime;
		   } 				   
		    }
else {        $(".desk6").css("background-color","#F0F8FF");
	          var tid=document.getElementById('tid6');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status6');
				     status.innerHTML="空闲";				
			}			
		}	
		//七号桌
		if(data[i].tid==7){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid7');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime7');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount7');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid7');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime7');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk7").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid7');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime7');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount7');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid7');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime7');
                        optime.innerHTML=data[i].optime;
		   }				   
		    }
else {        $(".desk7").css("background-color","#F0F8FF");
               var tid=document.getElementById('tid7');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status7');
				     status.innerHTML="空闲";				
			}			
		}	
		//八号桌
		if(data[i].tid==8){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid8');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime8');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount8');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid8');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime8');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk8").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid8');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime8');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount8');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid8');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime8');
                        optime.innerHTML=data[i].optime;
		   }				   
		    }
else {        $(".desk8").css("background-color","#F0F8FF");
               var tid=document.getElementById('tid8');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status8');
				     status.innerHTML="空闲";				
			}			
		}	
		//九号桌
		if(data[i].tid==9){
			if(data[i].uid!=""){
			
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid9');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime9');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount9');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid9');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime9');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk9").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid9');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime9');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount9');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid9');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime9');
                        optime.innerHTML=data[i].optime;
		   }				   
		    }	
			else {$(".desk9").css("background-color","#F0F8FF");
				var tid=document.getElementById('tid9');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status9');
				     status.innerHTML="空闲";				
			}
		}	
		//十号桌
		if(data[i].tid==10){
			if(data[i].uid!=""){
	      if(data[i].bstate==1){
                    var tid=document.getElementById('tid10');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime10');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount10');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid10');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime10');
                        optime.innerHTML=data[i].optime;
		  }
		   else {  
		           $(".desk10").css("background-color","#CCCCFF");
				   var tid=document.getElementById('tid10');
                        tid.innerHTML=data[i].tid;
	                var bktime=document.getElementById('bktime10');
                        bktime.innerHTML=data[i].bktime;
	                var bkcount=document.getElementById('bkcount10');
                        bkcount.innerHTML=data[i].bkcount;
	                var opid=document.getElementById('opid10');
                        opid.innerHTML=data[i].opid;
	                var optime=document.getElementById('optime10');
                        optime.innerHTML=data[i].optime;
		   }				   
		    }
else {         $(".desk10").css("background-color","#F0F8FF");
               var tid=document.getElementById('tid10');
                        tid.innerHTML=data[i].tid;
				var status=document.getElementById('status10');
				     status.innerHTML="空闲";				
			}			
		}	
		 	
		
		}
  }
 }
 //桌面的弹出层设计
 $(function ($) {
		//弹出登录
		$(".desk1").on('click', function () {
			
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow"); 
			$(".LoginBox1").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox1").fadeOut("fast");
            $("#mask").css({ display: 'none' });			
		});
	});
	$(function ($) {
		//弹出登录
		$(".desk2").on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow"); 
			$(".LoginBox2").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox2").fadeOut("fast");
             $("#mask").css({ display: 'none' });			
		});
	});
	 $(function ($) {
		//弹出登录
		$(".desk3").on('click', function () {
			 $("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$(".LoginBox3").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox3").fadeOut("fast");
             $("#mask").css({ display: 'none' }); 			
		});
	});
	$(function ($) {
		//弹出登录
		$(".desk4").on('click', function () {
			 $("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$(".LoginBox4").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox4").fadeOut("fast");
            $("#mask").css({ display: 'none' });    			
		});
	});
	 $(function ($) {
		//弹出登录
		$(".desk5").on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow"); 
			$(".LoginBox5").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox5").fadeOut("fast");
            $("#mask").css({ display: 'none' });			
		});
	});
	$(function ($) {
		//弹出登录
		$(".desk6").on('click', function () {
			 $("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$(".LoginBox6").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox6").fadeOut("fast");
           	$("#mask").css({ display: 'none' });		
		});
	});
	 $(function ($) {
		//弹出登录
		$(".desk7").on('click', function () {
			 $("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$(".LoginBox7").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox7").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});
	$(function ($) {
		//弹出登录
		$(".desk8").on('click', function () {
			 $("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
			$(".LoginBox8").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox8").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});
	 $(function ($) {
		//弹出登录
		$(".desk9").on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow"); 
			$(".LoginBox9").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox9").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});
	$(function ($) {
		//弹出登录
		$(".desk10").on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow"); 
			$(".LoginBox10").fadeIn("slow");
		});
		 
		 
		//关闭
		$(".close_btn").on('click', function () {
			$(".LoginBox10").fadeOut("fast");
			$("#mask").css({ display: 'none' });
		});
	});