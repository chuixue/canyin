// JavaScript Document
//加载表格
function loadDataGrid(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var parent=$j(listId).attr("parentId");
	var width=parseFloat($$(parent).offsetWidth);
//	var colInfo=getOrderFields(style);
	var cols=getOrderColumns(listId,style);
	$j(listId).datagrid({ 
	title:'', iconCls:'icon-sum', width:width, height:300, singleSelect:true, columns:cols, halign:'center',remoteSort:false,onClickCell:onClickCell,fit:true,GridLines:false,scrollbarSize:15
	}).datagrid('acceptChanges'); 
	listId.title=1;
}
function getOrderFields(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var colIds=["numb","dish","desk","pid","count","user","mark","state","date","cancel","class","action"];
	var colNames=["订单号","菜品","桌号","厨师","数量","用户","备注","打印状态","时间","用户请求","类别","操作"];
	var isShow=[true,true,true,false,true,false,false,true,true,true,false,true];
	if(style==1){
		colIds=["numb","dish","price","desk","count","onlykey","user","date","state","mState","check_" + listId.id];
		colNames=["订单号","菜品","单价","桌号","数量","标示","用户","时间","状态","付款状态","选中"];	
		isShow=[true,true,false,true,true,false,false,true,true,false,false];
	}
	var data=[];
	for(var i=0;i<colIds.length;i++){
		data.push( {id:colIds[i], name:colNames[i], show:isShow[i]} );
	}
	return data;
}

function getOrderColumns(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var F=getOrderFields(listId,style);
	var count=0;
	for(var i=0;i<F.length;i++)if(F[i].show)count++;
	var parent=$j(listId).attr("parentId");
	var width=parseFloat($$(parent).offsetWidth);
	var ws=[(width-15)/count-1]; //列宽
	var cols=[[]]; 
	for(var i=0;i<F.length;i++){	//editor:numberbox,text,datebox
		var dt={field:F[i].id,width:ws[0],title:F[i].name,align:'center',hidden:true,editor:'text',sortable:true};
		cols[0].push(dt);	//out(dt);
	}
	(cols[0][cols[0].length-1])['formatter']=function(value,row,index){
		var s='<label class="_btn2" style="width:60%" title="出菜" onclick="javascripts:dishOK('+ listId.id + ','+ row['numb'] +')">出菜</label>'; 
		var c='<lebal class="_btn2 icon-cancel" style="width:30%;min-width:20px" title="取消" onclick="javascripts:dishDel('+ listId.id + ','+ row['numb'] +')">&nbsp;</label>'; 
		return s + c; 
	};
	if(style==1){
		cols[0][cols[0].length-1].formatter=function(value,row,index){
			return '<input type="checkbox" id="id'+ row['numb'] +'" checked="checked" onclick="this.checked=!this.checked" >';
		}
	}
	return cols;
}
//大小改变
function resizeGrid(listId){
	var parent=$$(listId.id).parentNode;
	var width=parseFloat(parent.offsetWidth);
	$j(listId).datagrid('resize',{ width:width });
}
//单元格点击
function onClickCell(rowIndex, field, value){
	if(field.length<6)return;
	if(field.substr(0,6)!="check_")return;
	var listId=field.substr(6);
	var rows = $j('#' + listId).datagrid('getRows');
	var id="id" + rows[rowIndex]['numb'];
	$$(id).checked=!$$(id).checked;
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
	listId.title=0;
	listId=$$(listId);
	resetColor(listId);
	var cols=[];
	var columns = ($j(listId).datagrid("options").columns[0]);
	for(var v in columns)cols.push(columns[v].field);
	var rows = $j(listId).datagrid('getRows');
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
	listId.title=1;
}
//用户取消消息
function addCancel(listId,orderID){
	var txt='<label class="red">取消</label><button type="button" style="height:30px" class="btn btn-default reject _icon-no" title="拒绝" onclick="javascripts:dealOrder(' + listId.id + ',' + orderID + ',-2)"></button>';
	changeValueByNumb(listId,orderID,txt);
}
function changeValueByNumb(listId,orderID,value){
	listId.title=0;
	var rows = $j(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		var numb=rows[i]["numb"];
		if(orderID==numb){
			rows[i]["cancel"]=value;
			$j(listId).datagrid('refreshRow', i);
			listId.title=1;
			return;
		}
	}
	listId.title=1;
}
//重置颜色
function resetColor(listId,rowIndex){
	var b=(arguments.length==1)?true:false;
	$j(listId).datagrid({
		rowStyler:function(index,row){
			if (index==rowIndex || b)
				return 'background-color:white;color:black;';
		}
	});
	var rows = $j(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		if(i==rowIndex || b)
			$j(listId).datagrid('refreshRow',i);	
	}
}
//显示列
function showColumns(listId,data){
	var parent=$$(listId.id).parentNode;
	var width=parseFloat(parent.offsetWidth);
	var ws=[width/data.length]; //列宽
	for(var i=0;i<data.length;i++)$j(listId).datagrid('showColumn',data[i]);
	{	var col = $j(listId).datagrid('getColumnOption', data[0]);
		col.width=ws[0];
		col.align = 'center';
		$j(listId).datagrid();
		$j(listId).datagrid("fitColumns");
	}
}
//改变颜色
function changeColor(listId,rowIndex){
	$j(listId).datagrid({
		rowStyler:function(index,row){
			if (index==rowIndex)
				return 'background-color:pink;color:blue;';
		}
	});
	$j(listId).datagrid('refreshRow',rowIndex);
}
//****************************************************
function showAll(listId,style){
	var style = arguments[1] ? arguments[1] : -1;
	var colIds=["numb","dish","desk","pid","count","user","mark","state","date","cancel","class","action"];
	if(style==1)colIds=["numb","dish","price","desk","count","user","onlykey","mState","date","state","check_" + listId.id];
	showColumns(listId,colIds);
}
//清空
function clearAll(listId){
	$j(listId).datagrid('loadData', { total: 0, rows: [] });//
}
//出菜
function dishOK(listId,numb){
	dealOrder(listId,numb,3);
}
//取消
function dishDel(listId,numb){
	$j.messager.confirm('确认','是否真的取消该订单?',function(r){ if (r) dealOrder(listId,numb,-1); 	}); 
}
//删除行
function deleteByNumb(listId,numb){
	listId.title=0;
	var index=-1;
	var rows = $j(listId).datagrid('getRows');
	for(var i=0;i<rows.length;i++){
		var value=rows[i]["numb"];
		if(value==numb){
			index=i;break;
		}
	}
	if(index!=-1)$j(listId).datagrid('deleteRow',index);
	listId.title=1;
}
//处理订单
function dealOrderEx(listId,numb,type,user,callback){
	var rows = $j(listId).datagrid('getRows');
	var id=numb;
	$j.ajax({
		url: PUB_cfg.ajaxURL + '/dealOrder', //PUB_cfg.ajaxURL
		dataType: "jsonp",	 
		data: {id:id,type:type,shopId:user.shop,user:user.user},
		type: 'get',
		jsonpCallback: 'callback', 
		success: function (data) {
			if(data['error']!='undefined'){
				if(type!=-2){
					deleteByNumb(listId,id);
					callback(numb,type);
				}
				else{
					changeValueByNumb(listId,id,"已拒绝");
				}
			}
		},
		error: function (xhr, status, error) {
			alert(error.message);
		}
	});	
}
//获取厨房数据
function getDataKitchen(shopId,callback){
	$j.ajax({
		url: PUB_cfg.ajaxURL + '/orderList', //PUB_cfg.ajaxURL
		dataType: "jsonp",	 
		data: {shopId:shopId},
		type: 'get',
		jsonpCallback: 'callback1', 
		success: function (data) {
			if(data['error']!='undefined'){ 
				var newData=[];
				for(var i=0;i<data.length;i++){
					var T=data[i];
					var desk=getDeskId(data.onlykey);
					var oprint=T.oprint==1?"已打印":"未打印";
					var row={ numb:T.oid,dish:T.dname,desk:desk,class:T.dstyle,
					pid:T.wname,state:oprint,date:getTimeSmall(T.obtime),mark:T.omark,
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
//获取结算数据
function getDataBalance(shopId,onlykey,callback){
	$j.ajax({
		url: PUB_cfg.ajaxURL + '/balance', //PUB_cfg.ajaxURL
		dataType: "jsonp",	 
		data: {shopId:shopId,onlykey:onlykey},
		type: 'get',
		jsonpCallback: 'callback1', 
		success: function (data) {
			if(data['error']!='undefined'){ 
				var newData=[];
				for(var i=0;i<data.length;i++){
					var T=data[i];
					var desk=getDeskId(data.onlykey);
					var money=T.omoney==1?"已付款":"未付款";
					var stateTxt={'1':"等待中",'2':"准备中",'3':"已上菜",'-1':"已取消"};
					var row={ numb:T.oid,dish:T.dname,price:T.oprice,onlykey:T.onlykey,
					desk:desk,state:stateTxt[T.ostate.toString()],date:getTimeSmall(T.obtime),
					user:T.uid,count:T.ocount,mState:money };
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

	function printOrderMsg(data){
		if(data.length==0)return "订单为空！";
		var txt="订单         打印时间: " + getTimeNow() +"";
		txt+="\n-------------------------------------------------------------"
		for(var v in data[0]){
			if(v=="action" || v=="cancel" || v=="state")continue;
			txt+=v + "   ";
		}
		txt+="\n";
		for(var i=0;i<data.length;i++){
			for(var v in data[0]){
				if(v=="action" || v=="cancel" || v=="state")continue;
				txt+=data[i][v]+"   ";	
			}
			txt+="\n";
		}
		return txt;
	}



