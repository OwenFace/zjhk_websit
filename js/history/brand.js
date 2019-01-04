$(function(){
	var player1 = new MediaElementPlayer('#video1',{features: ['playpause','progress','current','duration','volume','fullscreen']});
	//翻页效果	
	var $bttn_next= $(".historyMainChooseConArrow")
	$(".historyMainChooseConRight ul").show(); 
		 
	$(".historyMainChooseConRight").booklet({
			pagePadding: 0,
			width:  1002,
			height: 424,
			manual: false,		             
			overlays:true,	
			nextControlTitle: "下一页",
			previousControlTitle: "上一页",
			pageNumbers: false,
			change: function(event, data){
				var page=data.index
				console.log(page)
				if(page!=0){page=page/2}
				$("#middle_link li h4").css({"color":"#111","font-size":"14"});
				$("#middle_link li").eq(page).find("h4").css({"color":"red","font-size":"14"})
			}            
	});  

	$(".booklet").css({"position":"absolute"})
	
	$(".history_2012").mCustomScrollbar({
		scrollButtons:{
			enable:true
		},
		autoHideScrollbar:true,	
		autoDraggerLength:false,
		theme:"dark-2"
	});


	//顶部栏目切换
	var year
	$(".historyMainTopMenu ul li").click(function(){
				if( $(this).index()==0){$("body").animate({scrollTop:"263px"})}
				if( $(this).index()==1){ $("body").animate({scrollTop:"963px"})}
				if( $(this).index()==2){$("body").animate({scrollTop:"1703px"})}
				if( $(this).index()==3){$("body").animate({scrollTop:"2400px"})}
				if( $(this).index()==4){ $("body").animate({scrollTop:"3123px"})}
				if( $(this).index()==5){ $("body").animate({scrollTop:"3723px"})}
	})
	
			$("#over_link").hide()
	$("#over_link").css("width","0px");
		 $("#middle_link li").click(function(){
			 var nums
			 nums=$(this).index()+$(this).index()+1;
			 $(".historyMainChooseConRight").booklet("gotopage", nums);
			 $(this).find("h4").css({"color":"red","font-size":"14"})
			 $(this).siblings().find("h4").css({"color":"#111","font-size":"14"});
		})
	 $("#middle_link li").eq(0).click();

$(".beautifulMainCon ul li").click(function(){
	var img = new Image();
	var picwidth
	var picheight
img.onload = function () {
	if($(window).width()>this.width){picwidth=this.width;}else{picwidth=$(window).width()}
	if($(window).height()>this.height){picheight=this.height;}else{picheight=$(window).height()}			    
	$("#image-modal").modal({onOpen: function (dialog) {
		dialog.overlay.fadeIn('fast', function () {
			dialog.data.show();
			dialog.container.fadeIn('fast', function () {				
				$("#pic_content").append(img)	
			});
		});
	},
containerCss:{
	width:picwidth,
	height:picheight
	}
	});
} 
if($(this).attr("url")){
	img.src=$(this).attr("url")
}          	  
})
$("#pic_content").click(function(){	$.modal.close();})
});    