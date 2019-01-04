    
$(document).ready(function(){


	var initTop = 0;
	var banH=400;
	var flg=true;
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > initTop){
			if($(window).scrollTop()>0){
				$(".header").stop().animate({"top":"-185px"},200);
			}
		} else {
			if($(window).scrollTop()>0 && $(window).scrollTop()<185){
				$(".header").stop().animate({"top":"0"},200);
			}else{
				$(".header").stop().animate({"top":"0"},200);
			}
		}
		initTop = scrollTop;
		if($(window).scrollTop()>banH){
			$(".header_box").hover(function(){
				$(".header").stop().animate({"top":"0"},200);
				},function(){
					$(".header").stop().animate({"top":"-185px"},200);
	
			})
		}else{
			$(".header_box").unbind('mouseenter').unbind('mouseleave');//移除hover绑定事件
			$(".header_box").hover(function(){
				$(".header").stop().animate({"top":"0"},200);
				},function(){
					return;
			})
		}
	})

	$(".cplyb").hover(
	function(event){event.stopPropagation();}
	)



});