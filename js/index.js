$(document).ready(function() {
			var width=$(window).width();
			$.fn.fullpage({
				anchors: ['', '', '', '', '', '', ''],
				navigation: true,
				afterRender:function(){
						$('.section1 .blue_box1').stop().animate({'width':0.417*width},800);
						$('.section1 .blue_box2').stop().animate({'width':0.25*width},500);
						$('.section1 .title_box h3,.section1 .title_box h2').stop().animate({'top':'0'},800)
						$('.video_bg .background_video1,.video_bg .background_video1 img').css('opacity','1');
				},
				afterLoad: function(anchorLink, index){
					if(index == 1){
						$('.section1 .blue_box1').stop().animate({'width':0.417*width},800);
						$('.section1 .blue_box2').stop().animate({'width':0.25*width},500);
						$('.section1 .title_box h3,.section1 .title_box h2').stop().animate({'top':'0'},800)
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video1,.video_bg .background_video1 img').stop().animate({'opacity':'1'},500);
						$('.footer_wz').removeClass('sect1');
						$('.xiant').removeClass('active');
						$('ul.menu_list li').removeClass('sect1');
					}
					if(index == 2){
						$('.section2 .title_box h4,.section2 .sec2_bt,.section2 .title_box h3').stop().animate({'top':'0'},800)
						if(width>768){
							$('.img_box_sec2').stop().animate({'width':width*0.3333},600,function(){
								TweenMax.to($('.img_box_sec2 img'),0.8,{scale:1});
							})
						}else{
							$('.img_box_sec2').stop().animate({'width':width},600,function(){
								TweenMax.to($('.img_box_sec2 img'),0.8,{scale:1});
							})
						}
						$('.blue_box2').stop().animate({'width':0.4167*width},800);
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video2,.video_bg .background_video2 img').stop().animate({'opacity':'1'},500);
						$('.section2 .blue_box .blue_content').stop().animate({'margin-left':0},500)
					}
					if(index == 3){
						$('.section3 .title_box h4,.section3 .sec2_bt,.section3 .title_box h3').stop().animate({'top':'0'},800)
						console.log(width)
						if(width>768){
							$('.img_box_sec3').stop().animate({'width':width*0.4167},600,function(){
								TweenMax.to($('.img_box_sec3 img'),0.8,{scale:1});
							})
						}else{
							$('.img_box_sec3').stop().animate({'width':width},600,function(){
								TweenMax.to($('.img_box_sec3 img'),0.8,{scale:1});
							})
						}
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video3,.video_bg .background_video3 img').stop().animate({'opacity':'1'},500);
					}
					if(index == 4){
						$('.section4 .title_box h4,.section4 .sec2_bt,.section4 .title_box h3').stop().animate({'top':'0'},800)
						$('.section4 .blue_box .blue_content').stop().animate({'margin-left':0},500);
						if(width>768){
							$('.img_box_sec4').stop().animate({'width':width*0.4167},600,function(){
								TweenMax.to($('.img_box_sec4 img'),0.8,{scale:1});
							})
						}else{
							$('.img_box_sec4').stop().animate({'width':width},600,function(){
								TweenMax.to($('.img_box_sec4 img'),0.8,{scale:1});
							})
						}
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video4,.video_bg .background_video4 img').stop().animate({'opacity':'1'},500);
					}
					if(index == 5){
						$('.section5 .title_box h4,.section5 .sec2_bt,.section5 .title_box h3').stop().animate({'top':'0'},800)
						if(width>768){
							$('.img_box_sec5_2').stop().animate({'width':width*0.4167},600,function(){
								TweenMax.to($('.img_box_sec5_2 img'),0.8,{scale:1});
							})
							$('.img_box_sec5_1').stop().animate({'width':width*0.3333},600,function(){
								TweenMax.to($('.img_box_sec5_1 img'),0.8,{scale:1});
							})
						}else{
							$('.img_box_sec5_1').stop().animate({'width':width},600,function(){
								TweenMax.to($('.img_box_sec5_2 img'),0.8,{scale:1});
							})
						}
						$('.section5 .blue_box .blue_content').stop().animate({'margin-left':0},800);
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video5,.video_bg .background_video5 img').stop().animate({'opacity':'1'},500);
					}
					if(index == 6){
						$('.section6 .title_box h4,.section6 .sec2_bt,.section6 .title_box h3').stop().animate({'top':'0'},800)
						$('.sec6_left,.sec6_right').stop().delay(400).animate({'top':'0'},600);
						$('.video_bg .background_video,.video_bg .background_video img').stop().animate({'opacity':'0'},500);
						$('.video_bg .background_video6,.video_bg .background_video6 img').stop().animate({'opacity':'1'},500);
						$('.xiant').addClass('active2');
						$('.footer_wz').removeClass('sect1');
						$('ul.menu_list li').removeClass('sect1');
					}
				},
				onLeave: function(index, direction){
					if(index ==1){
						$('.section1 .blue_box').stop().animate({'width':'0'},500)
						$('.section1 .title_box h3,.section1 .title_box h2').stop().animate({'top':'-200'},500)
						$('.footer_wz').addClass('sect1');
						$('.xiant').addClass('active');
						$('ul.menu_list li').addClass('sect1');
					}
					if(index ==2){
						$('.section2 .blue_box .blue_content').stop().animate({'margin-left':-0.3333*width},500)
						$('.section2 .title_box h4,.section2 .sec2_bt,.section2 .title_box h3').stop().animate({'top':'-200'},500)
						$('.img_box_sec2').stop().animate({'width':0},600)
					}
					if(index ==3){
						$('.section3 .title_box h4,.section3 .sec2_bt,.section3 .title_box h3').stop().animate({'top':'-200'},500)
						$('.img_box_sec3').stop().animate({'width':0},600)
					}
					if(index ==4){
						$('.section4 .title_box h4,.section4 .sec2_bt,.section4 .title_box h3').stop().animate({'top':'-200'},500)
						$('.section4 .blue_box .blue_content').stop().animate({'margin-left':-0.3333*width},500)
						$('.img_box_sec4').stop().animate({'width':0},600)
					}
					if(index ==5){
						$('.section5 .title_box h4,.section5 .sec2_bt,.section5 .title_box h3').stop().animate({'top':'-200'},500)
						$('.img_box_sec5_1,.img_box_sec5_2').stop().animate({'width':0},600)
						$('.section5 .blue_box .blue_content').stop().animate({'margin-left':-0.4167*width},800)
					}
					if(index ==6){
						$('.section6 .title_box h4,.section6 .sec2_bt,.section6 .title_box h3').stop().animate({'top':'-200'},500)
						$('.sec6_left,.sec6_right').stop().animate({'top':'-200'},600);
						$('.xiant').removeClass('active2');
						$('.footer_wz').addClass('sect1');
						$('ul.menu_list li').addClass('sect1');
					}
				}
			});
		});