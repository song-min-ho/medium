$(function () {
    /* 메뉴 hover */
    $('.gnb > li').hover(function () {
        $('.submenu, .fullsize').stop().slideDown();
    },
    function () {
        $('.submenu, .fullsize').stop().slideUp();
    });  
    
    /* language hover*/
    $('.language').hover(function(){
        $('.lan_gnb').stop().slideDown();        
    }, function(){
        $('.lan_gnb').stop().slideUp();
    })
    




});
