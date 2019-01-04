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
	   		// alert(1)
			$(this).find(".head_menu_box").stop(true).delay(200).slideUp(300);
			$(this).find(".head_menu_box .container").css({"opacity":"0"});
			$(".header_new_bg").stop(true).fadeOut(300);

	})
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

$(document).ready(function(){
	

	
	if($(window).width()>768){
		$(".banner").height($(window).height()-110);
	}
   
   $(window).resize(function(){
	   if($(window).width()>768){
			$(".banner").height($(window).height()-110);
		}
	})
})

$( document ).ready( function()
{
	var nn = 0;
	var mm = 0;
	var tt = 0;
	var ff = 0;

	var bb = 0;

	var play = 0;
	$( '.ind_pro_box ul' ).find( 'li:last-child' ).prependTo( $( '.ind_pro_box ul' ) );
	$( '.ind_probox_ts li').click( function()
	{
		nn = $( this ).index();
		tt = nn - mm;
		bb = Math.abs( tt );
		if( $( this ).hasClass( 'on' ) )
		{
		}
		else
		{
			if( ff == 0 )
			{
				ff = 1;
				clearInterval( play );
				$( '.ind_probox_ts li' ).removeClass( 'on' );
				$( this ).addClass( 'on' );

				if( tt > 0 )
				{

					indProduct1();
					mm = nn;
					return;
				}
				else
				{
					indProduct2();
					mm = nn;
					return;
				}
			}
		}

	} )



	var w = ($( '.ind_pro_box' ).width() - 60) / 5;

	var ww = ($( '.ind_pro_box' ).width() -60) / 2.5;
	var s = $( '.ind_pro_box ul li' ).size();


	var www = w + 20;

	$( '.ind_pro_img' ).height( w );
	$( '.ind_pro_box ul' ).width( (w + 20) * s + 1000 );
	$(".ind_pro_box li,.ind_pro_left,.ind_pro_right" ).height(w+61)

	$( '.ind_pro_box ul li' ).animate( { width: w }, 0 );
	$( '.ind_pro_box ul li' ).eq( 1 ).animate( { width: ww }, 0 );

	function indProduct1()
	{

		$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www * bb }, 800, 'easeInOutQuad', function()
		{
			for( var i = 0; i < bb; i++ )
			{
				$( '.ind_pro_box ul' ).find( 'li:first-child' ).appendTo( $( '.ind_pro_box ul' ) );
			}
			$( '.ind_pro_box ul' ).css( { marginLeft: 0 } )
			ff = 0;
			lunbo();
		} )

		$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
		$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

		$( '.ind_pro_box ul li' ).eq( bb+1 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
		$( '.ind_pro_box ul li' ).eq( bb+1 ).find( '.ind_pro_img_box' ).addClass( 'on' );

	}


	function indProduct2()
	{
		$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www * bb }, 0, function()
		{
			for( var i = 0; i < bb; i++ )
			{
				$( '.ind_pro_box ul' ).find( 'li:last-child' ).prependTo( $( '.ind_pro_box ul' ) );
			}
			$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: 0 }, 800, 'easeInOutQuad', function()
			{
				ff = 0;
				lunbo();
			} );
		} )

		$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
		$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

		$( '.ind_pro_box ul li' ).eq( 1 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
		$( '.ind_pro_box ul li' ).eq( 1 ).find( '.ind_pro_img_box' ).addClass( 'on' );

	}

	function indProduct3()
	{
		if( mm > (s - 2) )
		{
			mm = 0;

			$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www }, 800, 'easeInOutQuad', function()
			{
				$( '.ind_pro_box ul' ).find( 'li:first-child' ).appendTo( $( '.ind_pro_box ul' ) );
				$( '.ind_pro_box ul' ).css( { marginLeft: 0 } )
				ff = 0;
			} )

			$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

			$( '.ind_pro_box ul li' ).eq( 2 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).eq( 2 ).find( '.ind_pro_img_box' ).addClass( 'on' );

			$( '.ind_probox_ts li' ).removeClass( 'on' );
			$( '.ind_probox_ts li' ).eq( mm ).addClass( 'on' );

		}
		else
		{
			mm++;

			$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www }, 800, 'easeInOutQuad', function()
			{
				$( '.ind_pro_box ul' ).find( 'li:first-child' ).appendTo( $( '.ind_pro_box ul' ) );
				$( '.ind_pro_box ul' ).css( { marginLeft: 0 } )
				ff = 0;
			} )

			$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

			$( '.ind_pro_box ul li' ).eq( 2 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).eq( 2 ).find( '.ind_pro_img_box' ).addClass( 'on' );

			$( '.ind_probox_ts li' ).removeClass( 'on' );
			$( '.ind_probox_ts li' ).eq( mm ).addClass( 'on' );

		}
	}

	function indProduct4()
	{
		if( mm <0 )
		{
			mm = s - 2;
			$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www }, 0, function()
			{

				$( '.ind_pro_box ul' ).find( 'li:last-child' ).prependTo( $( '.ind_pro_box ul' ) );

				$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: 0 }, 800, 'easeInOutQuad', function()
				{
					ff = 0;
				} );
			} )

			$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

			$( '.ind_pro_box ul li' ).eq( 1 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).eq( 1 ).find( '.ind_pro_img_box' ).addClass( 'on' );

			$( '.ind_probox_ts li' ).removeClass( 'on' );
			$( '.ind_probox_ts li' ).eq( mm ).addClass( 'on' );

		}
		else
		{
			mm--;

			$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: -www }, 0, function()
			{

				$( '.ind_pro_box ul' ).find( 'li:last-child' ).prependTo( $( '.ind_pro_box ul' ) );

				$( '.ind_pro_box ul' ).stop( true, true ).animate( { marginLeft: 0 }, 800, 'easeInOutQuad', function()
				{
					ff = 0;
				} );
			} )

			$( '.ind_pro_box ul li' ).stop( true ).animate( { width: w }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).find( '.ind_pro_img_box' ).removeClass( 'on' );

			$( '.ind_pro_box ul li' ).eq( 1 ).stop( true ).animate( { width: ww }, 800, 'easeInOutQuad' );
			$( '.ind_pro_box ul li' ).eq( 1 ).find( '.ind_pro_img_box' ).addClass( 'on' );

			$( '.ind_probox_ts li' ).removeClass( 'on' );
			$( '.ind_probox_ts li' ).eq( mm ).addClass( 'on' );

		}
	}


	function lunbo()
	{
		play = setInterval( function()
		{
			indProduct3();
		}, 5000 );
	}

	$(".ind_pro_left,.ind_pro_right" ).hover(function(){
		clearInterval( play );
	},function(){
		lunbo();
	})
	$(".ind_pro_left" ).click(function(){

		indProduct4()
	})
	$(".ind_pro_right" ).click(function(){
		indProduct3();
	})
	lunbo();


	var wi=$(window ).height()*0.8

	$(".big_img_con" ).width(wi/700*750)

	var nt=0;

	$(".big_img_right" ).click(function(){
		if(nt<s-1){
			nt++
		}
		else{
			nt = 0;
		}
		$(".big_img_con img" ).eq(nt ).stop(true ).fadeIn(500 ).siblings("img" ).stop(true ).fadeOut(500)
	})
	$(".big_img_left" ).click(function(){
		if(nt>0){
			nt--
		}
		else{
			nt = s-1;
		}
		$(".big_img_con img" ).eq(nt ).stop(true ).fadeIn(500 ).siblings("img" ).stop(true ).fadeOut(500)
	})

	$(".big_img_btn" ).click(function(){
		$(".big_img" ).stop(true ).fadeOut(500)

	})


     if($(window ).scrollTop()>100){
			$(".cookie" ).stop(true ).animate({"bottom":"-100%"},1000)
		}


	 	$(".cookie_btn" ).click(function(){
		$(".cookie" ).stop(true ).animate({"bottom":"-100%"},1000)
	})

} )








