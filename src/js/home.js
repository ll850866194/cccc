$('#t1').on("mouseover",function(){
	$('.hover').slideDown()
})
$('.hover').on('mouseout',function(){
	$(this).slideUp()
})
//var swiper = new Swiper('.swiper-container', {
//  pagination: '.swiper-pagination',
//  paginationClickable: true,//实现控制点击小点控制图片切换
//  autoplay : 1000,//可选选项  自动轮播auto 
//  speed:1000,//平滑速度
//  autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
//  loop:true  
//});
var lis = $('aside .div1');
var nei = $('aside .nei');
for (var i = 0;i<lis.length;i++){
	(function(i){
		lis.eq(i).on('mouseenter',function(){
			for(var j = 0;j<nei.length;j++){
				nei.eq(j).css('display','none')
			}
			nei.eq(i).css({
				display:'block',
				width:'62%'
			})
			$(this).css('background','mediumseagreen').siblings().css('background','');
			
		})
		nei.eq(i).on('mouseleave',function(){
			$(this).css('display','none');
			lis.eq(i).css('background','')
		})
	})(i)
}
$(document).on('scroll',function(){
	if($(window).scrollTop()>0){
		$('#top').css('display','block')
	}
	else if($(window).scrollTop()<=0){
		$('#top').css('display','none')
	}
})
$('#top').on('click',function(){
	$('body').animate({
		scrollTop:0
	},1000)
})


$('#main6 .s4').on('click',function(){
	var div1 = document.querySelectorAll('.div0');
	for(var j = 0;j<div1.length;j++){
		div1[j].style.display = 'none';
	}
	$('#map').css('display','flex');
})
$('#map .close').on('click',function(){
	$('#map').hide();
})
