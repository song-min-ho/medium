$(function () {        
    $('.gnb').hover(function () {
        $('.submenu, .fullsize').show();  
        $(this).stop().animate({'height':'460px'});
		$('.sns').show();
    },function(){
        $('.submenu, .fullsize').stop().slideUp();        
        $(this).stop().animate({'height':'60px'});
		$('.sns').hide();
	})
    
	
    /*blueline*/
    $('.blueline').css('background-color','#004098')
    $('.gnb > ul> li:eq(1)').hover(function(){
        $('.blueline').stop().animate({'left':'125px','width':'40px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > ul>  li:eq(2)').hover(function(){
        $('.blueline').stop().animate({'left':'212px','width':'100px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb >ul>  li:eq(3)').hover(function(){
        $('.blueline').stop().animate({'left':'360px','width':'145px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > ul> li:eq(4)').hover(function(){
        $('.blueline').stop().animate({'left':'558px','width':'50px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    $('.gnb > ul> li:eq(5)').hover(function(){
        $('.blueline').stop().animate({'left':'653px','width':'95px'}, 1000, 'easeOutCubic')
    }, function(){
        $('.blueline').stop().animate({'left':'','width':'75px'}, 1000, 'easeOutCubic')
    })
    
    /*language hover*/    
    $('.language_wide').hover(function(){
        $('.lan_wide_gnb').stop().slideDown()       
    }, function(){
        $('.lan_wide_gnb').stop().slideUp()
    })    

	/*language click*/
	$('.mobile_language').toggle(function(){
        $('.mobile_lan_gnb').stop().slideDown()
		$('.lan_wide_arrow').addClass('click')
    }, function(){
        $('.mobile_lan_gnb').stop().slideUp()
		$('.lan_wide_arrow').removeClass('click')
    })    
	
    
	/*hamburger*/	
	$('.hamburger').toggle(function(){		
		$('.hamburger .line1').addClass('click');
		$('.hamburger .line2').addClass('click');
		$('.hamburger .line3').addClass('click');
		$('.mobile_menu').stop().animate({'margin-left':'0'}, 1000, 'easeOutCubic');
	}, function(){
		$('.hamburger .line1').removeClass('click');
		$('.hamburger .line2').removeClass('click');
		$('.hamburger .line3').removeClass('click');
		$('.mobile_menu').stop().animate({'margin-left':'-800px'}, 1000);
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
        if(top > 850) {
            $('.slogan').animate({'padding-top':'0', 'opacity':'1'}, 1000);        
        }        
    });    
    
    /*top_button 초기설정*/
     $('.top_button').css({'bottom': '-100px'});
    
    /*top_button click*/
    $('.top_button').click(function(){
        /*$(window).scrollTop('0')*/
        /*$(window).animate({scrollTop: 0}, 800); 이건 안됨*/
        $('html').animate({scrollTop: 0}, 800);        
        return false;
    })      
    
    /*top_button 애니메이션*/
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height > 1) {
            $('.top_button').stop().animate({'bottom': '50px'});
        }
        if (height == 0) {
            $('.top_button').stop().animate({'bottom': '-100px'});
        };
    });      

    /*top_button 퍼센트차트*/
    $(window).scroll(function () {
		/*화면 아래 오브젝트를 기준으로 해도 어긋나고 화면 위의 오브젝트를 해도 어긋난다.
		  화면위에서 윈도우 높이를 나누고 뺀값으로 해야
		  스크롤 맨위일때 0 맨 아래일때 100이 나온다.*/
        var height_percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100
        console.log(height_percent) // 1~100       
        var $circle = $('.svg .cir2');   
        var r = $circle.attr('r');   //
        var per = -((height_percent) / 100) * 3.1415 *r * 2; 
        $circle.css({strokeDashoffset: per});         
    });
	
	/*philosophy 원 사이즈 조절*/
	/*
	var w = $('.top_circle').width()
	console.log(w)
	$('.top_circle').css('height', 'w')
	*/

});
  