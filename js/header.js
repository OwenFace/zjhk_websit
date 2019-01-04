$(document).ready(function(){
	var menutitle=$(".menuTitle span").text();
    $(".menuTitle i").click(function(){
        $(".menuBody ul").css({"display":"none"});
        $(".menuBody .ul1").css({"display":"block"});
        if($(".menuTitle span").text()==menutitle){
            $("html").stop(true).animate({"left":"0"});
            $(".menuBox").animate({"left":"-160px"})
            $("html").css("overflow","auto");
            $("body").css("overflow","auto");
            $("html").removeClass("menu-active");
            show=0;
        }else{
            $(".menuTitle span").text(menutitle);
        }
    });
    var show=0;
    $(".top-left").click(function(){
        if(show==0){
            $("html").stop(true).animate({"left":"160px"});
            $(".menuBox").animate({"left":"0"})
            $("html").css("overflow","hidden");
            $("body").css("overflow","hidden");
            $("html").addClass("menu-active");
            show=1;
            return;
        }else if(show==1){
            $("html").stop(true).animate({"left":"0"});
            $(".menuBox").animate({"left":"-160px"})
            $("html").css("overflow","auto");
            $("body").css("overflow","auto");
            $("html").removeClass("menu-active");
            show=0;
            return;
        }
    })

});
	
	
	
	
	
	