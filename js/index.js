$(function(){
	// 获取屏幕高度
	var height=$(window).height();
	$('.container-fluid>.main>.ear').css({'height':+height})
	$('#myMenu li').on('mouseenter',function(){
		$(this).addClass('one').siblings().removeClass('one')
	})
	$('#mobile-nav li').on('mouseenter',function(){
		$(this).addClass('two').siblings().removeClass('two')
	})
	$('.sixth').hover(function(){
		$('.ip').slideDown(500)
	},function(){
		$('.ip').slideUp(500)
	})
	// 右侧固定定位
	$('.fixed a').hover(function(){
		$(this).addClass('add').siblings().removeClass('add')
	},function(){
		$(this).addClass('add')
	})
	$(function () {
 		$('[data-toggle="tooltip"]').tooltip()
	})
	var oLi=document.getElementsByClassName('pop');
	var index;
	function loop(){
		for(var i=0;i<oLi.length;i++){
			index=$(this).index();
		}
		$('.pop').addClass('add').siblings().removeClass('add')
		$('html,body').animate({scrollTop:height*index+'px'},1000)
	}
	// 点击事件
	$('.pop').on('click',loop);
	$('.pop').eq(5).on('click',function(){
		$('#six').children('.ip').delay(1000).slideDown()
	})
	$('.pop').not('.delay').on('click',function(){
		$('#six').children('.ip').hide()
	})
	// 滚动条监听事件
	$('.container-fluid').on('mousewheel',function(e){
		var wTop=document.documentElement.scrollTop||document.body.scrollTop;
		var aTop=$('.second').offset().top;
		if($(window).width()<992){
			if(e.deltaY<0){
				$('nav').css({'background':'#fff','transition':'all 0.5s linear'});
			}
			else if(e.deltaY>0){
				if(wTop<aTop){
					$('nav').css({'background':'transparent','transition':'all 0.5s linear'})
				}
			}
		}
		if($(window).width()>992){
			var i=$('.fixed .add').index();	
			if(e.deltaY<0){
				$('nav').css({'background':'#fff','transition':'all 0.5s linear'});
				i=i+1;
				$('html,body').animate({scrollTop:aTop*(i)+'px'},500);
				$('.pop').eq(i).addClass('add').siblings().removeClass('add')
			}
			else if(e.deltaY>0){
				if(wTop<aTop){
					$('nav').css({'background':'transparent','transition':'all 0.5s linear'})
				}
				i=i-1;
				$('html,body').animate({scrollTop:aTop*(i)+'px'},500)
				$('.pop').eq(i).addClass('add').siblings().removeClass('add');
			}
		}
	}) 
	// 页面重新加载时
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var bTop=$('.second').offset().top;
	var j=Math.ceil(scrollTop/bTop);
	$('.pop').eq(j).addClass('add').siblings().removeClass('add')
})