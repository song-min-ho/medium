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
    $('.language_wide').hover(function(){
        $('.lan_wide_gnb').stop().slideDown();        
    }, function(){
        $('.lan_wide_gnb').stop().slideUp();
    })

});
