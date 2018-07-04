/**
 * Created by Zz on 2017/5/6.
 */
//fullpage
$(document).ready(function() {

    startTime();

    if($(".hid-slide").css("display")=="block"){
        $("div.hid-slide").addClass("slide");
    }

    $(".project").mouseenter(function(e){
        $(this).find(".project-overlay").stop(true,true).animate({opacity:'0.8'},"fast");
        $(this).find(".project-text").stop(true,true).animate({opacity:'1'},"fast");
        $(this).find(".hid-box").stop(true,true).animate({height:'30px'},"fast");
    });

    $(".project").mouseleave(function(e){
        $(this).find(".project-overlay").stop(true,true).animate({opacity:'0'},"fast");
        $(this).find(".project-text").stop(true,true).animate({opacity:'0'},"fast");
        $(this).find(".hid-box").stop(true,true).animate({height:'60px'},"fast");
    });



    $('#fullpage').fullpage({
    //Navigation
            menu: '',
            lockAnchors: false,
            anchors:['1', '2', '3', '4','5','6','7'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['首页', '个人简介', '技能', '项目','工作','履历','联系方式'],
            showActiveTooltip: false,
            slidesNavigation: false,//slides
            slidesNavPosition: 'bottom',

    //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeOutQuint',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: true,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,

    //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

    //Design
            controlArrows: true,
            verticalCentered: true,
            resize : false,

            paddingTop: '20px',
            paddingBottom: '50px',
            fixedElements: '.header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,

    //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

    //events
            onLeave: function(index, nextIndex, direction){
                if(index==1){
                    $(".down-box").css({color:"#63c6ae"});
                }
                if(index==7){
                    $(".down-box").removeClass("hidden");
                }
            },

                afterLoad: function(anchorLink, index){
            //setInterval('$.fn.fullpage.moveSectionDown()',2000);
                    $("#navmenu").find("li").removeClass("active");
                    $("#navmenu").find(".l"+index+"").addClass("active");

                    if(index==1){
                        $(".down-box").css({color:"#ffffff"});
                    }
                    if(index==7){
                        $(".down-box").addClass("hidden");
                    }
        },

    //��ҳ����Ⱦ��Ϻ󴥷�
        afterRender: function(){},

    //����������ڴ�С�ı�ʱ����
        afterResize: function(){},

    //����תslideʱ��������afterLoad����
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},

    //���뿪slideʱ����
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

    });

    $("#submit").click(function () {
        var name = $("input[id='name']").val();
        var contact = $("input[id='contact']").val();
        var message = $("textarea[id='message']").val();

        var data = "type=submit&name=" + name + "&contact=" + contact + "&message=" + message;
        //alert(data);

        $.ajax({
            url: "index.ashx",
            type: "post",
            data: data,
            error: function () {
            },
            success: function (result) {
                
                if (result == "succ") {
                    alert("留言成功，您的支持就是我的动力！");
                    //window.location.href="index.aspx";
                    
                }
                else if (result == "erre") {
                    alert("对不起，提交失败");

                }

                else {
                    alert(result);
                    alert("提交失败");

                }
            }
        });
    });

});

window.onload = function () {
    $("#loading").css("display", "none");
    $(".fp-prev").prepend("<span class='glyphicon glyphicon-chevron-left fp-span'></span>");
    $(".fp-next").prepend("<span class='glyphicon glyphicon-chevron-right fp-span'></span>");
}

function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time').innerHTML=h+":"+m+":"+s;
    var t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}