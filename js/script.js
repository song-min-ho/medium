$(function () {
    /*menu hover*/
    $('.gnb').mouseover(function () {
        $('.submenu, .fullsize').stop().slideDown();  
        $(this).stop().animate({'height':'460px'})
    }).mouseout(function(){
        $('.submenu, .fullsize').stop().slideUp();        
        $(this).stop().animate({'height':'60px'})
    })
    
    
    /*blueline*/
    $('.blueline').css('background-color','#004098')
    $('.gnb > li:eq(1)').hover(function(){
        $('.blueline').stop().animate({'left':'125px','width':'40px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > li:eq(2)').hover(function(){
        $('.blueline').stop().animate({'left':'212px','width':'100px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > li:eq(3)').hover(function(){
        $('.blueline').stop().animate({'left':'360px','width':'145px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > li:eq(4)').hover(function(){
        $('.blueline').stop().animate({'left':'558px','width':'50px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > li:eq(5)').hover(function(){
        $('.blueline').stop().animate({'left':'653px','width':'95px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    
    /*language hover*/
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
    
    /*기업철학 애니메이션*/
    /*css 초기설정*/
    $('.philosophy_wrap').css('width','0')
    $('.philosophy_title').css({'margin-top':'30px', 'opacity':'0'});
    $('.top_circle').css({'margin-top':'30px', 'opacity':'0'});
    $('.left_circle').css({'margin-top':'30px', 'opacity':'0'});
    $('.right_circle').css({'margin-top':'30px', 'opacity':'0'});
    $('.philosophy_header').css({'margin-top':'-30px', 'opacity':'0'});
    /*애니메이션*/
    $('.philosophy_wrap').animate({'width':'100%'}, 1000);
    $('.philosophy_title').delay(1000).animate({'margin-top':'0', 'opacity':'1'});
    $('.top_circle').delay(1500).animate({'margin-top':'0', 'opacity':'1'});
    $('.left_circle').delay(2000).animate({'margin-top':'0', 'opacity':'1'});
    $('.right_circle').delay(2500).animate({'margin-top':'0', 'opacity':'1'});
    $('.philosophy_header').delay(3000).animate({'margin-top':'0', 'opacity':'1'});
    
    /*슬로건 애니메이션*/    
    $('.slogan').css({'padding-top':'80px', 'opacity':'0'});       
    $(window).scroll(function () {
        var top = $(this).scrollTop()        
        if(top > 900) {
            $('.slogan').animate({'padding-top':'0', 'opacity':'1'}, 1000);        
        }        
    });    
    
    /*top_button click*/
    $('.top_button').click(function(){
        /*$(window).scrollTop('0')*/
        /*$(window).animate({scrollTop: 0}, 800); 이건 안됨*/
        $('html').animate({scrollTop: 0}, 800);        
        return false;
    })});
