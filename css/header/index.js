// JavaScript Document



$(document).ready(function(){
	$(".pro_tit_ph a").click(function(){
		$(".pro_tit_ph a").removeClass("on");
		$(this).addClass("on");
	})

	//手机导航
	$( '.xpnav-btn' ).click( function()
	{

		if( $( '.phone_nav_box' ).css( 'left' ) == "-200px" )
		{

			$( '.phone_nav_box' ).stop( true ).animate( { left: "0" }, "slow" )
			$( '.xpnav' ).stop( true ).animate( { left: "200px" }, "slow" )
			$( '.warp' ).stop( true ).animate( { left: "200px" }, "slow" )
			$( '.pro_tit_ph' ).stop( true ).animate( { left: "200px" }, "slow" )
			$( '.pro_tit_ph2' ).stop( true ).animate( { left: "200px" }, "slow" )
			$( '.pro_tit' ).stop( true ).animate( { left: "200px" }, "slow" )
		}
		else
		{

			$( '.phone_nav_box' ).stop( true ).animate( { left: "-200px" }, "slow" )
			$( '.xpnav' ).stop( true ).animate( { left: "0" }, "slow" )
			$( '.warp' ).stop( true ).animate( { left: "0" }, "slow" )
			$( '.pro_tit_ph' ).stop( true ).animate( { left: "0" }, "slow" )
			$( '.pro_tit_ph2' ).stop( true ).animate( { left: "200px" }, "slow" )
			$( '.pro_tit' ).stop( true ).animate( { left: "0" }, "slow" )

		}

	} )
	$( '.nav_ti>li div' ).click( function()
	{

		if( $( this ).siblings( 'ul' ).css( "display" ) == "none" )
		{
			$( '.nav_ti>li' ).find( 'ul' ).stop( true ).slideUp( 300 );
			$( this ).siblings( 'ul' ).stop( true ).slideDown( 300 );
			$( '.nav_ti>li div img' ).removeClass( "scale1" )
			$( this ).find( "img" ).addClass( "scale1" )

		}
		else
		{
			$( '.nav_ti>li' ).find( 'ul' ).stop( true ).slideUp( 300 );
			$( this ).siblings( 'ul' ).stop( true ).slideUp( 300 );
			$( '.nav_ti>li div img' ).removeClass( "scale1" )

		}
	} )
	$( '.nav_ti>li li' ).click( function()
	{
		$( '.phone_nav_box' ).stop( true ).animate( { left: "-200px" }, "slow" )
		$( '.xpnav' ).stop( true ).animate( { left: "0" }, "slow" )
		$( '.warp' ).stop( true ).animate( { left: "0" }, "slow" )
	})

	//手机导航


	//手机底部
	$(".home_bot_ewm" ).click(function(){
		$(".home_bot_img" ).fadeIn(500)
	})
	$(".home_bot_img_bg").click(function(){
		$(".home_bot_img" ).fadeOut(500)
	})


	
	$('.head_list .head_kk_a').parent().hover(function(){
		  $(this).find(".head_menu_box").stop(true).slideDown(300);
			$(this).find(".head_menu_box .container").css({"opacity":"1"});
			if($(this).find(".meau_line").length==0){
		   	}
		   	else{
		   		$(".header_new_bg").stop(true).fadeIn(300);
		   	}
		
	   },function(){
			$(this).find(".head_menu_box").stop(true).delay(200).slideUp(300);
			$(this).find(".head_menu_box .container").css({"opacity":"0"});
			$(".header_new_bg").stop(true).fadeOut(300);

		})

		// $(".head_menu").hover(function(){
		// 	$(".header_new_bg").stop(true).fadeIn(300);
		// },function(){
		// 	$(".header_new_bg").stop(true).fadeOut(300);
		// })
	$(".visit" ).click(function(){
			$(".visit-c" ).stop(true ).animate({right:"0"},500)
		})

	$(".sidebar-close" ).click(function(){
			$(".visit-c" ).stop(true ).animate({right:"-900px"},500)
		})
			
	$( window ).load( function()
	{
		$( "html,body" ).animate( { scrollTop: 0 }, 0 )
		var url = window.location.toString();
		var id = url.split( "#" )[ 1 ];

		if( id )
		{
			var t = $( "#" + id ).offset().top;
			$( "html,body" ).animate( { scrollTop: t - 110 }, 1000 )
		}

		$( 'a' ).click( function()
		{
			var a = $( this ).attr( "href" ).split( "#" )[ 1 ];
			var p = $( "#" + a ).offset().top;
			$( "html,body" ).animate( { scrollTop: p - 110 }, 1000 );
		} )

	} )
	$('.pro_box_tit_face a').click(function () {
			var s7 = $(this).index();
			$('.pro_box_tit_face a').animate({top: "0"});

			$(this).animate({top: "-15"});

			$('.pro_b_a_face ').stop(true).animate({opacity: "0"}, 1200);
			$('.pro_b_a_face ').eq(s7).stop(true).animate({opacity: "1"},1200);

			$('.product_copy_one ').stop(true).animate({opacity: "0","z-index":"11"}, 1200);
			$('.product_copy_one ').eq(s7).stop(true).animate({opacity: "1","z-index":"12"}, 1200);

	})
})


