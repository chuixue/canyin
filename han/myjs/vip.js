 
  
 //排序增加函数
 function sort_up(data){ 
	var data_after=[]; 
		for(var i=0;i<data.length;i++){
			data_after[i]={uopenid:"",uid:"",uname:"",usex:"",uage:"",
			              utel:"",ucmeal:"",ucpay:"",uconsume:"",
						  uscore:"",umoney:"",uactivity:"",utime:"",umark:"",}	
		}	
	var data1=[];//data1数组中存放的是销量的数据
	    for(var i=0;i<data.length;i++){
	 	data1[i]=data[i].uconsume;
	  }
    //调用sort函数对data1进行排序，然后输出
	data1.sort(function (a,b){return a-b});//之后的data1已经是经过排序后的数组 而且是升序排列的
	           //将原来数组的数据和经过排序后的数据进行比较，比较之后输出
			   //排序之后的数组data_after是已经排序了的
	for(var i=0;i<data.length;i++){
		 for(var j=0;j<data1.length;j++){
			 if(data[i].uconsume==data1[j]){				 
			 data_after[j].uopenid=data[i].uopenid;
			 data_after[j].uid=data[i].uid;
			 data_after[j].uname=data[i].uname;
			 data_after[j].usex=data[i].usex;
			 data_after[j].uage=data[i].uage;
			 data_after[j].utel=data[i].utel;
			 data_after[j].ucmeal=data[i].ucmeal;
			 data_after[j].ucpay=data[i].ucpay;
			 data_after[j].uconsume=data[i].uconsume;
			 data_after[j].uscore=data[i].uscore;
			 data_after[j].umoney=data[i].umoney;
			 data_after[j].uactivity=data[i].uactivity;
			 data_after[j].utime=data[i].utime;
			 data_after[j].umark=data[i].umark;
			 }			 
		 }	
	}	 
	 var cs = new table({
        "tableId":"cs_table",    //必须		 
        "headers":["微信id","用户id","姓名","性别" ,"年龄","电话",
		          "就餐次数","付款次数","累计消费","积分","账户余额","活跃度" ,"注册时间","备注"],   //必须
        "data":data_after,        //必须
        "displayNum": 6,    //必须   默认 10
       "groupDataNum":9  //可选    默认 10
});		
	}
	
	//排序减少函数
 function sort_down(data){ 
	var data_after=[]; 
		for(var i=0;i<data.length;i++){
			data_after[i]={uopenid:"",uid:"",uname:"",usex:"",uage:"",
			              utel:"",ucmeal:"",ucpay:"",uconsume:"",
						  uscore:"",umoney:"",uactivity:"",utime:"",umark:"",}	
		}	
	var data1=[];//data1数组中存放的是销量的数据
	    for(var i=0;i<data.length;i++){
	 	data1[i]=data[i].uconsume;
	  }
    //调用sort函数对data1进行排序，然后输出
	data1.sort(function (a,b){return b-a});//之后的data1已经是经过排序后的数组 而且是升序排列的
	           //将原来数组的数据和经过排序后的数据进行比较，比较之后输出
			   //排序之后的数组data_after是已经排序了的
	for(var i=0;i<data.length;i++){
		 for(var j=0;j<data1.length;j++){
			 if(data[i].uconsume==data1[j]){				 
			 data_after[j].uopenid=data[i].uopenid;
			 data_after[j].uid=data[i].uid;
			 data_after[j].uname=data[i].uname;
			 data_after[j].usex=data[i].usex;
			 data_after[j].uage=data[i].uage;
			 data_after[j].utel=data[i].utel;
			 data_after[j].ucmeal=data[i].ucmeal;
			 data_after[j].ucpay=data[i].ucpay;
			 data_after[j].uconsume=data[i].uconsume;
			 data_after[j].uscore=data[i].uscore;
			 data_after[j].umoney=data[i].umoney;
			 data_after[j].uactivity=data[i].uactivity;
			 data_after[j].utime=data[i].utime;
			 data_after[j].umark=data[i].umark;
			 }			 
		 }	
	}	 
	 var cs = new table({
        "tableId":"cs_table",    //必须		 
        "headers":["微信id","用户id","姓名","性别" ,"年龄","电话",
		          "就餐次数","付款次数","累计消费","积分","账户余额","活跃度" ,"注册时间","备注"],   //必须
        "data":data_after,        //必须//客户的分类表中最后用到的数组
        "displayNum": 6,    //必须   默认 10
       "groupDataNum":9  //可选    默认 10
});		
	}
 
 
 
 
 //消费上升函数
     function consume_up(){
	  var data = [{uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"22",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
				  {uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"44",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
				   {uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"33",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
	  
	  ];
    //数据在下面的url中
    $.ajax({
		url: 'http://cins.swpu.edu.cn:8003/user',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {name: "lucy"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		//success:function (data){sort_up(data);}
		 
   });
  
	
    sort_up(data);
	 
	 
 }
 
 
 
 
  //消费下降函数
   function consume_down(){
	  var data = [{uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"22",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
				  {uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"44",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
				   {uopenid:"1001",uid:"123",uname:"wow",
		           usex:"12",uage:"25",utel:"123",ucmeal:"12",ucpay:"12",
				   uconsume:"33",uscore:"67",umoney:"88",uactivity:"12",utime:"2011-1-1",umark:"good"},
	  
	  ]; 
     //数据在下面的url中
    $.ajax({
		url: 'http://cins.swpu.edu.cn:8003/user',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {name: "lucy"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		 //success:function (data){sort_down(data);}
		 
   });
	
    sort_down(data);	 
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
 
    // --------- 分页功能属性
    this.allDataNum = 0;  // 总数据条数
    this.displayNum = 10; // 每页显示条数
    this.maxPageNum = 0;  // 最大页码值
    this.currentPageNum =1;// 当前页码值
    //tfoot分页组
    this.groupDataNum = 10;  //每组显示10页
    this.groupNum = 1;       //当前组
 
    // -------- 分页功能行为
    this.paginationFromBeginToEnd = function(begin,end){}
    this.first =  function(){}//首页
    this.last = function(){}//最后一页
    this.prev = function(){}//上一页
    this.next = function(){}//下一页
    this.goto = function(){} //跳到某页
 
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
                if(i%2==1){
                    $tr.addClass("evenrow");
                }
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
    //表格分页
    this.pagination = function(tdCell){
        var $td= typeof(tdCell) == "object" ? tdCell : $("#" + tdCell);
        //首页
        var oA = $("<a/>");
        oA.attr("href","#1");
        oA.html("首页");
        $td.append(oA);
        //上一页
        if(this.currentPageNum>=2){
            var oA = $("<a/>");
            oA.attr("href","#"+(this.currentPageNum - 1));
            oA.html("上一页");
            $td.append(oA);
        }
        //普通显示格式
        if(this.maxPageNum <= this.groupDataNum){  // 10页以内 为一组
            for(var i = 1;i <= this.maxPageNum ;i++){
                var oA = $("<a/>");
                oA.attr("href","#"+i);
                if(this.currentPageNum == i){
                    oA.attr("class","current");
                }
                oA.html(i);
                $td.append(oA);
            }
        }else{//超过10页以后（也就是第一组后）
             if(this.groupNum<=1){//第一组显示
                 for(var j = 1;j <= this.groupDataNum ;j++){
                     var oA = $("<a/>");
                     oA.attr("href","#"+j);
                     if(this.currentPageNum == j){
                         oA.attr("class","current");
                     }
                     oA.html(j);
                     $td.append(oA);
 
                 }
             }else{//第二组后面的显示
                 var begin = (this.groupDataNum*(this.groupNum-1))+ 1,
                      end ,
                     maxGroupNum = Math.ceil(this.maxPageNum/this.groupDataNum);
                 if(this.maxPageNum%this.groupDataNum!=0&&this.groupNum==maxGroupNum){
                     end = this.groupDataNum*(this.groupNum-1)+this.maxPageNum%this.groupDataNum
                 }else{
                     end = this.groupDataNum*(this.groupNum);
                 }
 
                 for(var j = begin;j <= end ;j++){
                     var oA = $("<a/>");
                     oA.attr("href","#"+j);
                     if(this.currentPageNum == j){
                         oA.attr("class","current");
                     }
                     oA.html(j);
                     $td.append(oA);
                 }
             }
        }
        //下一页
        if( (this.maxPageNum - this.currentPageNum) >= 1 ){
            var oA = $("<a/>");
            oA.attr("href","#" + (this.currentPageNum + 1));
            oA.html("下一页");
            $td.append(oA);
        }
        //尾页
        var oA = $("<a/>");
        oA.attr("href","#" + this.maxPageNum);
        oA.html("尾页");
        $td.append(oA);
 
        var page_a = $td.find('a');
        var tempThis = this;
 
        page_a.unbind("click").bind("click",function(){
            var nowNum =  parseInt($(this).attr('href').substring(1));
 
            if(nowNum>tempThis.currentPageNum){//下一组
                if(tempThis.currentPageNum%tempThis.groupDataNum==0){
                    tempThis.groupNum += 1;
 
                    var maxGroupNum = Math.ceil(tempThis.maxPageNum/tempThis.groupDataNum);
                    if(tempThis.groupNum>=maxGroupNum){
                        tempThis.groupNum = maxGroupNum;
                    }
                }
            }
            if(nowNum<tempThis.currentPageNum){//上一组
                if((tempThis.currentPageNum-1)%tempThis.groupDataNum==0){
                    tempThis.groupNum -= 1;
                    if(tempThis.groupNum<=1){
                        tempThis.groupNum = 1;
                    }
                }
            }
            if(nowNum==tempThis.maxPageNum){//直接点击尾页
                var maxGroupNum = Math.ceil(tempThis.maxPageNum/tempThis.groupDataNum);
                tempThis.groupNum = maxGroupNum;
            }
            if(nowNum==1){
                var maxGroupNum = Math.ceil(tempThis.maxPageNum/tempThis.groupDataNum);
                tempThis.groupNum = 1;
            }
            tempThis.currentPageNum = nowNum;
 
 
            tempThis.init((tempThis.currentPageNum-1)*tempThis.displayNum,
                tempThis.currentPageNum*tempThis.displayNum);
            return false;
        });
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
        this.showFoot();
    }
 
    this.init(0,options.displayNum);
}
