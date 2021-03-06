	    function order_pro(){
		 //bstate有四个数字-1 1 2 3，-1：客户提交的预定已过时，1：客户已提交，
		 //       2：预定已处理的，3：预定还未处理，但是没有过时的
		//只考虑已经处理的预定，请求开始，并对数据进行根处理
     $.ajax({
		url: 'http://cins.swpu.edu.cn:8003/sql',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {sql:"select * from book"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		success: function(data){    
		   var j=0;
           for(var i=0;i<data.length;i++){	    
			if(data[i].bstate==2){				
			         j++;
			}	 
	      } 
		   //求出已经处理的订单数量	  
		   var data_after=[];
               for(var i=0;i<j;i++){
				   data_after[i]={bid:"",uid:"",bbtime:"",bcount:"",bstate:"",tid:"",bmark:"",btime:"",optime:"",opid:"",sid:"",}
			   }
            var k=0;		
		    for(var i=0;i<data.length;i++){
				if(data[i].bstate==2){
					data_after[k].bid=data[i].bid;
					data_after[k].uid=data[i].uid;
					data_after[k].bbtime=data[i].bbtime;
					data_after[k].bcount=data[i].bcount;
					data_after[k].bstate=data[i].bstate;
					data_after[k].tid=data[i].tid;
					data_after[k].bmark=data[i].bmark;
					data_after[k].btime=data[i].btime;
					data_after[k].optime=data[i].optime;
					data_after[k].opid=data[i].opid;
					data_after[k].sid=data[i].sid;
				k++;
				}				
			}	 
    var cs = new table({
        "tableId":"cs_table",    	 
        "headers":["id","用户id","预约时间","人数" ,"状态","桌号","备注","时间","操作时间","操作人员","商家", ],   //必须
        "data":data_after,         
        "displayNum": 6,     
        "groupDataNum":9,   
    });						
		}//成功的话调用table函数		 
   });
   //数据请求并且处理完毕	 	 	    		        		
	} 	 
	
	
	function order_unpro(){		  
	//数据用ajax从数据库中请求
	//ajax请求数据的格式，开始				
	$.ajax({
		url: 'http://cins.swpu.edu.cn:8003/sql',  //跨域请求请加域名前缀：http://cins.swpu.edu.cn:8003
		dataType: "jsonp",	 
		data: {sql:"select * from book"},    //附加数据请用json表示
		type: 'get',
		jsonpCallback: 'callback', 
		success: function(data){    var j=0;
           for(var i=0;i<data.length;i++){	    
			if(data[i].bstate==3){				
			         j++;
			}	 
	      } 
		   //求出已经处理的订单数量	  
		   var data_after=[];
               for(var i=0;i<j;i++){
				   data_after[i]={bid:"",uid:"",bbtime:"",bcount:"",bstate:"",tid:"",bmark:"",btime:"",optime:"",opid:"",sid:"",}
			   }
            var k=0;
		
		    for(var i=0;i<data.length;i++){
				if(data[i].ostate==0){
					data_after[k].bid=data[i].bid;
					data_after[k].uid=data[i].uid;
					data_after[k].bbtime=data[i].bbtime;
					data_after[k].bcount=data[i].bcount;
					data_after[k].bstate=data[i].bstate;
					data_after[k].tid=data[i].tid;
					data_after[k].bmark=data[i].bmark;
					data_after[k].btime=data[i].btime;
					data_after[k].optime=data[i].optime;
					data_after[k].opid=data[i].opid;
					data_after[k].sid=data[i].sid;
				k++;
				}
				
			}
	 
    var cs = new table({
        "tableId":"cs_table",    	 
        "headers":["id","用户id","预约时间","人数" ,"状态","桌号","备注","时间","操作时间","操作人员","商家", ],   //必须
        "data":data_after,         
        "displayNum": 6,     
       "groupDataNum":9   
    });			
		}//成功的话调用table函数
		 
   });
//ajax请求数据完结后，进行处理，处理完毕   										
	}

	
//表格分页及初始化	
	
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
	
	