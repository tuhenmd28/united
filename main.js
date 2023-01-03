let li = $(".navbar-nav li.dropdown>a");
li.each(function(){
    // console.log($(this).text());
    $(this).hover(function(){
        // console.log($(this).siblings('ul'));
        $(this).siblings('ul').addClass('animate__lightSpeedInRight')
    })
})

$(document).ready(function(){
    let bannerContent = $(".banner .slider_item.slick-active .content");
    let banner = $('.banner .slider_item');
   
    // banner.hasClass('slick-active').children('content').text();
   setInterval(function(){
    banner.each(function(){
        $(this).children('.content').removeClass("animate__slideInLeft  animate__delay-1s");
        if($(this).hasClass('slick-active')){
            $(this).children('.content').addClass("animate__slideInLeft  animate__delay-1s");
        }
    })
   },100)
})