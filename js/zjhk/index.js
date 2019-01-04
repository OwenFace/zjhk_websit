$(document).ready(function(){
	 $(window).resize(function(){

	  })
  
  
		$('.user_r5>h5>a').click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })
	 
	 $('.user_r2_btn>a').click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })
  
  $('.order_shon2>span').click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })
   
  $('.order_shone1>a').eq(0).click(function(){
	  $('.order_shond').stop(true).slideDown(300);
	  $('.order_shone1>a').eq(0).stop(true).fadeOut(0);
	  $('.order_shone1>a').eq(1).stop(true).fadeIn(0);
	  }) 
  
  $('.order_shonc li').click(function(){
	  $('.order_shonc li').removeClass('order_shoncon');
	  $(this).addClass('order_shoncon');
	  })	  
  
  $('.order_shonc li a').click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })
  	  
  $('.order_shone1>a').eq(1).click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })	  
  	  
  
  $('.dizhi_bj').click(function(){
	  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
	  })
  	  
  $('.dizhi_btn1>a').click(function(){
	  $('.dizhi').stop(true).fadeOut(1000);
	  $('.dizhi_con').removeClass('dizhi_con_on');
	  })
  
  $('.dizhi_con>img').click(function(){
	  $('.dizhi').stop(true).fadeOut(1000);
	  $('.dizhi_con').removeClass('dizhi_con_on');
	  })
  
  
  $('.order_shon2>a').click(function(){
	  $('.dizhi_change').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_change_con').addClass('dizhi_change_con_on');
		  },300)
	  })
  
  $('.dizhi_change_btn1>a').click(function(){
	  $('.dizhi_change').stop(true).fadeOut(1000);
	  $('.dizhi_change_con').removeClass('dizhi_change_con_on');
	  })
  
  $('.dizhi_change_con>img').click(function(){
	  $('.dizhi_change').stop(true).fadeOut(1000);
	  $('.dizhi_change_con').removeClass('dizhi_change_con_on');
	  })
  	  	
  
  $('.dizhi_change_lista>a').click(function(){
	  $('.dizhi_change').stop(true).fadeOut(1000);
	  $('.dizhi_change_con').removeClass('dizhi_change_con_on');
	  
	  setTimeout(function(){
		  
		  $('.dizhi').stop(true).fadeIn(1000);
	  setTimeout(function(){
		  $('.dizhi_con').addClass('dizhi_con_on');
		  },300)
		  
		  },600)
	  
	  })
	  
	  
	
	
	
  	var h = $(window).height();
    $(".swiper-banner").css("height",h);
	$(".buy_sec1_right_out").height($(".buy_sec1_left").height())

	
	
	
	$(window).resize(function() {
		$(".swiper-banner").css("height",h)
		
	});
	
	
	$(window).load(function() {
			
	var hbuy = $(".buy_dt img").height();
		
		    $(".swiper-container1").css("height",hbuy+80);
		
			//$("html,body").animate({scrollTop:0},0)
	 var url = window.location.toString();


    var id = url.split("#")[1];

/**
   if(id){ 
      var t = $("#"+id).offset().top-180;
		 $("html,body").animate({scrollTop:t},1000)
   }**/
   
   // $('a').click(function(){
	       // var a=$(this).attr("href").split("#")[1];
           // var p=$("#"+a).offset().top-180;
	       // $("html,body").animate({scrollTop:p},1000);
	   // })	
		
});




	$(".dldd").click(function(){
		$(".form_fixed1").fadeIn()
		
	})
	
	$(".close1").click(function(){
	$(".form_fixed1").fadeOut()
	})
	
	$(".dldd2").click(function(){
		$(".form_fixed2").fadeOut();
		$(".form_fixed1").fadeIn();
		
	})
	
	$(".zcdd2").click(function(){
		$(".form_fixed1").fadeOut();
		$(".form_fixed2").fadeIn();
	})
	
	$(".zcdd").click(function(){
		$(".form_fixed2").animate({"left":"0"},500);
	})
	$(".close2").click(function(){
		$(".form_fixed2").fadeOut();
	})
	
	
	
	$(".close3").click(function(){
		$(".form_fixed3").fadeOut();
	})

	$(".wjmm").click(function(){
		$(".form_fixed1").fadeOut();
		$(".form_fixed3").fadeIn();
		
	})
});