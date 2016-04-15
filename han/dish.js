    
	//所有菜销量上升
 function allup_sale(){
	 
		  //数据请求格式
 $.ajax({
		url: 'http://cins.swpu.edu.cn:8003/sql',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {sql:"select  did,dname,dprice,dcount,dstyle from dish"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		success:function (data){  
		var data_after=[]; 
		for(var i=0;i<data.length;i++){
			data_after[i]={dstyle:" ",dname:"",dprice:"",dcount:"", }	
		}	   
	var data1=[];//data1数组中存放的是销量的数据
	    for(var i=0;i<data.length;i++){
	 	data1[i]=data[i].dcount;
	  }
	  var data2=[];
	  for(var i=0;i<data.length;i++){
	 	data2[i]=data[i].dname;
	  }
    //调用sort函数对data1进行排序，然后输出
	data1.sort(function (a,b){return a-b});//之后的data1已经是经过排序后的数组 而且是升序排列的
	           //将原来数组的数据和经过排序后的数据进行比较，比较之后输出
			   //排序之后的数组data_after是已经排序了的
	for(var i=0;i<data.length;i++){
		 for(var j=0;j<data1.length;j++){
			 if(data[i].dcount==data1[j]){				 
			 data_after[j].dname=data[i].dname;
			 data_after[j].dprice=data[i].dprice;
			 data_after[j].dcount=data[i].dcount;			  
			  
			 }			 
		 }	
		 if(data[i].dstyle>=5){
			 
      data_after[i].dstyle=" <input type='checkbox' name='recom' checked='checked' >";
			 
		 }
		 else{
			 data_after[i].dstyle=" <input type='checkbox' name='recom'  >";
		 }
		  
	}	 
	 var cs = new table({
        "tableId":"cs_table",    //必须		 
        "headers":["推荐","菜名","价格","销量",  ],   //必须
        "data":data_after,        //必须
        "displayNum": 50,    //必须   默认 10
       "groupDataNum":9  //可选    默认 10
});						
		
             var myinput = document.getElementsByTagName("input");
			 for(var i=0;i<myinput.length;i++){
				  tdText = myinput[i].parentNode.parentNode.childNodes[1];
                if(myinput[i].checked==true){  
				  tdText.style.background="yellow";
				    
                   
                   }else{ tdText.style.background = "white";  
				   
                   
               }							 
			 }
			 
 var chkBoxs = document.getElementsByTagName("input");
 for(var i=0;i<chkBoxs.length;i++){
 chkBoxs[i].onclick=function(){
  tdText = this.parentNode.parentNode.childNodes[1];
  if(this.checked){
    
   tdText.style.background = "yellow";
  }else{
    
   tdText.style.background = "white";
  }
 };
}
 
var btn = document.getElementById("btn_sub");
        var recom = document.getElementsByName("recom");		 
        btn.onclick = function(){			
	    for(var i=0; i<recom.length; i+=1){
		   if(recom[i].checked){			     			   
			   for(var j=0;j<data2.length;j++){
				   if(data2[j]==data_after[i].dname)
					   alert(data2[j]);				   
			   }			   
		 }	
      		 
	  }
	 
	    
  };
 
		
		}
		
		 
   });
   	


 }
 
 
function abstractTable(){	
    // ---------内容属性
    this.id = null;         // 每个表格都有唯一的一个id
    this.tableobj = null;  //表格对象
    this.rowNum = 0;       //行数
	this.colNum1=0;
    this.colNum = 0;      //列数
	this.header1=[];//1
    this.header = [];     //表头数据
    this.content = [];   //body数据
    // ----------提供外部使用获得表格内部数据
    this.currentClickRowID = 0;   //当前点击的行数据
    // --- 通过表头来获得这张表的列数
	this.getColNum1=function(){this.colNum1=this.header1.length;
	return this.colNum1;				
	}
    this.getColNum = function(){
        this.colNum = this.header.length;
        return   this.colNum;
    }
    // -----------  表格自我构建行为
    this.clearTable = function(){};
	this.showHeader1=function(){};
    this.showHeader = function(){};
    this.showContent = function(begin,end){};
    this.showFoot = function(){};         
    // ----------- 表格初始化
    this.init = function(begin,end){}
 
}
 
/*
 表格对象模板
 */
function tableTemplet(table_id){
    abstractTable.call(this);
    this.id = table_id;
 
}
/**
 * 表格对象
 * @param options
 */
function table(options){
    if(!options){return;}
    if(!$.isPlainObject(options)){return;}
 
    tableTemplet.call(this,options.tableId);
    //得到表格对象
    this.tableobj = $("#"+this.id);
    //清空表格内容
    this.clearTable = function(){
        this.tableobj.html(" ");
    }
    // 实现分页行为
    this.paginationFromBeginToEnd= function(x,y){
        this.maxPageNum = Math.ceil(this.allDataNum/this.displayNum);
        var arrPage = [];
        for(var i= x;i<y;i++){
            arrPage.push(this.content[i]);
        }
        return arrPage;
    }
   
 
    this.showHeader = function(){
        if(this.header != null){
           var  $thead = $("<thead>"),
                $tr = $("<tr>"),
                $th;
            for(var i=0;i<this.colNum;i++){
                $th = $("<th>").html(this.header[i]);
                $th.appendTo($tr);
            }
            $tr.appendTo($thead);
            $thead.appendTo(this.tableobj)
        }
    }
    //初始化tbody
    this.showContent = function(begin,end){
        if(this.content != null){
            var $tbody = $("<tbody>"),
                $tr,
                $td;
            var tempDaTa = this.paginationFromBeginToEnd(begin,end),//shuzu 
                len = tempDaTa.length;
            // 循环创建行
            for(var i=0;i<len;i++){
                $tr = $("<tr>").appendTo($tbody);
                 
                // 循环创建列  取得对象中的键
                for(var key in tempDaTa[i]){
					
                    $td = $("<td>").html(tempDaTa[i][key]).appendTo($tr);
                }
            }
            this.tableobj.append($tbody);
        }
 
    }
    //初始化tfoot
    this.showFoot = function(){
       var $tfoot = $("<tfoot>"),
           $tr = $("<tr>"),
           $td = $("<td>").attr("colspan",this.colNum).addClass("paging");
           $tr.append($td);
           $tfoot.append($tr);
           this.tableobj.append($tfoot);
           this.pagination($td);
    }
   
     
    //初始化
    this.init = function(begin,end){		
        this.header = options.headers;
        this.colNum = this.header.length;
		
        this.content = options.data;
        this.allDataNum = this.content.length;
        if(options.displayNum){
            this.displayNum = options.displayNum;
        }
        if(options.groupDataNum){
            this.groupDataNum = options.groupDataNum;
        }
        this.clearTable();
		 
        this.showHeader();
        this.showContent(begin,end);
         
    }
 
    this.init(0,options.displayNum);
}
 