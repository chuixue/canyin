// JavaScript Document
//加载表格
function loadDataGrid(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var parent=listId.parentNode.id;
	var width=parseFloat($$(parent).offsetWidth);
	var colInfo=getOrderFields(style);
	var cols=getOrderColumns(listId,style);
	$(listId).datagrid({ 
	title:'', iconCls:'icon-edit', width:width, height:300, singleSelect:true, columns:cols, halign:'center',remoteSort:false,fitColumns:true
	}).datagrid('acceptChanges'); 
}
function getOrderFields(style,style){
	var style = arguments[1] ? arguments[1] : -1;
	var colIds=["numb","dish","desk","pid","count","user","mark","state","date","cancel","action"];
	var colNames=["订单号","菜品","桌号","厨师","数量","用户","备注","打印状态","时间","用户请求","操作"];
	if(style==1){
		colIds=["numb","dish","price","desk","count","user","onlykey","mState","date","state","action"];
		colNames=["订单号","菜品","价格","桌号","数量","用户","标示","付款状态","时间","状态","操作"];	
	}
	var data=[];
	for(var i=0;i<colIds.length;i++){
		data.push( {id:colIds[i], name:colNames[i]} );
	}
	return data;
}
function getOrderColumns(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var F=getOrderFields(style);
	var parent=listId.parentNode.id;
	var width=parseFloat($$(parent).offsetWidth);
	var w=(((width)/100)).toFixed(3);
	var ws=[width/F.length]; //列宽
	var cols=[[]];
	for(var i=0;i<F.length;i++){	//editor:numberbox,text,datebox
		var dt={field:F[i].id,width:ws[0],title:F[i].name,align:'center',hidden:true,editor:'text',sortable:true};
		cols[0].push(dt);
	}
	(cols[0][cols[0].length-1])['formatter']=function(value,row,index){
		var s='<button type="button" class="btn btn1 btn-default icon-ok" title="出菜" onclick="javascripts:dishOK('+ listId.id + ','+ index +')"></button>'; 
		var c='<button type="button" class="btn btn2 btn-default icon-remove" title="取消" onclick="javascripts:dishDel('+ listId.id + ','+ index +')"></button>'; 
		return s+c; 
	};
	if(style==1){
		cols[0][cols[0].length-1].formatter=function(value,row,index){
			return '<button type="button" class="btn btn2 btn-default icon-remove" title="过滤" onclick="javascripts:dishDel('+ listId.id + ','+ index +')"></button>'; 
		}
	}
	return cols;
}
//回车
function keyDown(e){
	if(EnterPress(e))doSearch();
}
//搜索
function doSearch(value,name,listId){
	if(value!="")getSearchRST(this.title,value);
}
//查找
function getSearchRST(listId,str){
	listId=$$(listId);
	resetColor(listId);
	var cols=[];
	var columns = ($(listId).datagrid("options").columns[0]);
	for(var v in columns)cols.push(columns[v].field);
	var rows = $(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		for(var j=0;j<cols.length;j++){
			var value=rows[i][cols[j]];
			if(!value)continue;
			var txt=value.toString();
			if(txt.indexOf(str)==-1)continue;
			changeColor(listId,i);
			break;
		}
	}
}
//用户取消消息
function addCancel(listId,orderID){
	var rows = $(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		var numb=rows[i]["numb"];
		if(orderID==numb){
			rows[i]["cancel"]='<span class="red">取消</span><button type="button" class="btn btn-default reject icon-no" title="拒绝" onclick="javascripts:dealOrder(' + listId.id + ',' + numb + ',-1)"></button>';
			$(listId).datagrid('refreshRow', i);
			return;
		}
	}
}
//重置颜色
function resetColor(listId,rowIndex){
	var b=(arguments.length==1)?true:false;
	$(listId).datagrid({
		rowStyler:function(index,row){
			if (index==rowIndex || b)
				return 'background-color:white;color:black;';
		}
	});
	var rows = $(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		if(i==rowIndex || b)
			$(listId).datagrid('refreshRow',i);	
	}
}
//显示列
function showColumns(listId,data){
	var parent=$$(listId.id).parentNode;
	var width=parseFloat(parent.offsetWidth);
	var ws=[width/data.length]; //列宽
	for(var i=0;i<data.length;i++)$(listId).datagrid('showColumn',data[i]);
	{	var col = $(listId).datagrid('getColumnOption', data[0]);
		col.width=ws[0];
		col.align = 'center';
		$(listId).datagrid();
		$(listId).datagrid("fitColumns");
	}
}
//改变颜色
function changeColor(listId,rowIndex){
	$(listId).datagrid({
		rowStyler:function(index,row){
			if (index==rowIndex)
				return 'background-color:pink;color:blue;';
		}
	});
	$(listId).datagrid('refreshRow',rowIndex);
}
//****************************************************
function showAll(listId){
	showColumns(listId,["numb","dish","desk","pid","count","user","mark","state","date","cancel","action"]);
}
//出菜
function dishOK(listId,index){
	dealOrder(listId,index,2);
}
//取消
function dishDel(listId,index){
	$.messager.confirm('确认','是否真的取消该订单?',function(r){ if (r) dealOrder(listId,index,-1); 	}); 
}
//处理订单
function dealOrder(listId,numb,type){
	var rows = $(listId).datagrid('getRows');
	var id=rows[numb]['numb'];
	if(type==-1)id=numb;
	alert(id);;return;
	$.ajax({
		url: PUB_cfg.ajaxURL + '/dealOrder', //PUB_cfg.ajaxURL
		dataType: "jsonp",	 
		data: {id:id,type:type},
		type: 'get',
		jsonpCallback: 'callback', 
		success: function (data) {
			if(type!=-1 && data['error']!='undefined')deleteById(id);
		},
		error: function (xhr, status, error) {
			alert(error.message);
		}
	});	
	
}

function getDataAll(callback){
	var shop=1;
	$.ajax({
		url: PUB_cfg.ajaxURL + '/orderList', //PUB_cfg.ajaxURL
		dataType: "jsonp",	 
		data: {shop:shop},
		type: 'get',
		jsonpCallback: 'callback1', 
		success: function (data) {
			if(data['error']!='undefined'){ 
				var newData=[];
				for(var i=0;i<data.length;i++){
					var T=data[i];
					var desk=getDeskId(data.onlykey);
					var row={ numb:T.oid,dish:T.dname,desk:desk,
					pid:T.wname,state:T.oprint,date:getTimeSmall(T.obtime),mark:T.omark,
					user:T.uid,count:T.ocount,cancel:"无消息" };
					newData.push(row);
				}
				callback(newData);		
			}
		},
		error: function (xhr, status, error) {
			alert(error.message);
		}
	});		
}

function getTimeSmall(tm){
	if(!tm)return "";
	var txt="";
	if(tm.indexOf("T")!=-1){
		var tp=tm.split("T");
		date=tp[0].split("-");
		time=tp[1].split(":");
		txt+=time[0] + ":" + time[1];
		txt+=" " + date[1] + "/" + date[2];
	}
	return txt;
}
