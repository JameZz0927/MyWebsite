/**
 * Created by Zz on 2017/4/24.
 */
$(function(){
    $(".header").css({"height":window.screen.availHeight});

    //
    $(".skills-con").click(function(){

        var h = $(this).find(".skill-title-box").css('height')
        $(this).find(".skill-title-box").animate({
            height:(h=='100px')?'291px':'100px'

        },1);
    });

    $(".skills-con").mouseover(function(){
        $(this).find(".skill-title-box").stop(true, true).delay(200).animate({
            height:'100px'
        },1);
    });

    $(".skills-con").mouseout(function(){
        $(this).find(".skill-title-box").stop(true, true).delay(200).animate({
            height:'291px'
        },1);
    });

    // ±º‰÷·

    $(".circle-box").click(function(){
        var h = $(this).css('height')
        if(h=='60px'){
            $(this).animate({
                width:'300px',
                height:'300px'
            })
            $(this).find(".hideText").delay(200).fadeIn("slow");
            $(this).find(".lead-box").delay(200).hide();
        }else{
            $(this).find(".hideText").fadeOut("slow");
            $(this).find(".lead-box").delay(800).fadeIn("slow");
            $(this).delay(400).animate({
                width:'60px',
                height:'60px'
            })

        }

    });
})