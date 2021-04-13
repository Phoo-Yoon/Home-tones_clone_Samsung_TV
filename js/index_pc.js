$(document).ready(function(){

    // top menu hover
    $('.top_menu').hover(function(){
        $(this).children('a').css({
            textDecoration : 'underline',
            textUnderlinePosition : 'under'
        });
        $(this).children('.sub_menu').stop().animate({
            height : 300
        });
        $('#menu_bg').stop().animate({
            height : 330
        });
    },function(){
        $(this).children('a').css({
            textDecoration : 'none'
        });
        $(this).children('.sub_menu').stop().animate({
            height : 0
        });
        $('#menu_bg').stop().animate({
            height : 0
        });
    });

    $('.sub_menu li').hover(function(){
        $(this).css({
            textDecoration : 'underline',
            textUnderlinePosition : 'under',
            fontWeight : '900'
        });
    },function(){
        $(this).css({
            textDecoration : 'none',
            fontWeight : '500'
        });
    });
    // top menu hover End

    // main_img_fade inout
    $('.main_img_btn').click(function(){
        var main_img_btn = $(this).index();
        $('.main_img_box').fadeOut(1000);
        $('.main_img_box').eq(main_img_btn).fadeIn(1000);
    });

    var main_img_click = 0;
    function time(){
        auto = setInterval(function(){
            main_img_click++;
            if(main_img_click > 3){
                main_img_click = 0;
            }
            $('.main_img_btn').eq(main_img_click).trigger('click');
        },2000)
    }
    time();
    // main-img_fadeInOut End

    // new Product
    var next_prev_click = 0;
    $('.next_btn').click(function(){
        $('#section_new_content_left_wrap').stop().animate({
            left : 507
        },300,function(){
            $(this).css({
                left : 0
            }).find('.section_new_content_left_img:first').appendTo(this);
        });
        
        next_prev_click++;
        if(next_prev_click > 3){
            next_prev_click = 0;
        }
        $('.section_new_content_right_box').fadeOut(500);    
        $('.section_new_content_right_box').eq(next_prev_click).fadeIn(500);    
    });

    $('.prev_btn').click(function(){
        $('#section_new_content_left_wrap').stop().animate({
            left : -507
        },300,function(){
            $(this).css({
                left : 0
            }).find('.section_new_content_left_img:last').prependTo(this);
        });

        next_prev_click--;
        if(next_prev_click < 0){
            next_prev_click = 3;
        }
        $('.section_new_content_right_box').fadeOut(500);    
        $('.section_new_content_right_box').eq(next_prev_click).fadeIn(500);    
    });

    $('#section_new_more').hover(function(){
        $(this).css({
            backgroundColor : 'lightgray'
        });
    },function(){
        $(this).css({
            backgroundColor : '#ffffff'
        });
    });
    // new Product End

    // best product
    $('.best_img').hover(function(){
        $(this).stop().animate({
            zoom : 1.1
        });
    },function(){
        $(this).stop().animate({
            zoom : 1
        });
    });


    // product type
    $('.section_type_name').click(function(){
        var section_type_index = $(this).index();
        $('.section_type_img_wrap').css({
            display : 'none'
        });
        $('.section_type_img_wrap').eq(section_type_index).css({
            display : 'flex'
        });    
    });
    // section promotion
    $('.section_promotion_text').hover(function(){
        $(this).css({
            backgroundColor : 'gray'
        });
    },function(){
        $(this).css({
            backgroundColor : 'lightgray'
        });
    });

    $('.section_type_name').click(function(){
        $('.section_type_name').removeClass('type_on');
        $(this).addClass('type_on');
    });

    $('.section_store_content').hover(function(){
        $(this).css({
            backgroundColor : 'lightgray'
        });
    },function(){
        $(this).css({
            backgroundColor : '#ffffff'
        });
    });

    $('#section_store_more').hover(function(){
        $(this).css({
            backgroundColor : 'lightgray'
        });
    },function(){
        $(this).css({
            backgroundColor : '#ffffff'
        });
    });
});