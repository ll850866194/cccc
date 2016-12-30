var baseURL = "http://localhost:4005/";
var n = 1;
//主页AJAX
var data = null;
function get1(){
	var xhr = createXHR();
	xhr.open("get",baseURL+n);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){//判断服务器状态
			if(xhr.status == 200 || xhr.status == 304){//判断状态码
				data = JSON.parse(xhr.responseText)
				var arr = data.shop_data;
				for(var i = 0; i< arr.length;i++){
					var div = $('<div class="store"><img src='+arr[i].shop_ico+' class="left"/><ul class="center"><li><span>'+arr[i].shop_name+'</span>店铺等级：<img src="img/index_27.png"/></li><li>主营：'+arr[i].main+'</li><li>地址：'+arr[i].addr_detail+'</li></ul><ul class="right"><li><img src="img/index_30.png"/>先行赔付</li><li><img src="img/index_34.png"/>同城帮认证</li><li>人气:'+arr[i].shop_visit+'次浏览</li><ul><span class="sp1">进入店铺</span></div>');
				div.appendTo($('#left'))	
				}
			}
		}
	}
}
get1();
var btn = $('#main7 button');
btn.eq(0).on('click',function(){
	$(this).css({
		background: 'blue',
		color: 'white'
	}).siblings().css({
		background:'white',
		color:'#666666'
		})
	$('#left .store').remove();
	n = 1;
	get1(); 
})
btn.eq(1).on('click',function(){
	$(this).css({
		background: 'blue',
		color: 'white'
	}).siblings().css({
		background:'white',
		color:'#666666'
		})
	$('#left .store').remove()
	n = 2;
	get1()
})
//店铺详情页AJAX
