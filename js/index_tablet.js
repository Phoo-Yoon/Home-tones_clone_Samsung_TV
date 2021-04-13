$(document).ready(function () {

    // tab menu wrap
    let tab_menu_click = 0;
    $('#tab_menu_btn').click(function () {
        tab_menu_click++;
        if (tab_menu_click % 2 == 1) {
            $('#tab_menu_wrap').css({
                display: 'block'
            });
            $('#tab_menu_btn img').attr('src', 'img/tab/header/close_icon.png');
        } else if (tab_menu_click % 2 == 0) {
            $('#tab_menu_wrap').css({
                display: 'none'
            });
            $('#tab_menu_btn img').attr('src', 'img/tab/header/menu_icon.png');
        };
    });

    $('.tab_main').click(function(){
        if($(this).children('.tab_sub').hasClass('tab_menu_on') === true){
            $(this).children('.tab_sub').removeClass('tab_menu_on');
        } else{
            $('.tab_sub').removeClass('tab_menu_on');
            $(this).children('.tab_sub').addClass('tab_menu_on');
        }
    });
    // tab menu wrap End

        // tab main img fade inout
        $('.tab_main_img_btn').click(function(){
            var tab_main_img_btn = $(this).index();
            $('.tab_main_img').fadeOut(1000);
            $('.tab_main_img').eq(tab_main_img_btn).fadeIn(1000);
        });
    
        var tab_main_img_click = 0;
        function time(){
            auto = setInterval(function(){
                tab_main_img_click++;
                if(tab_main_img_click > 2){
                    tab_main_img_click = 0;
                }
                $('.tab_main_img_btn').eq(tab_main_img_click).trigger('click');
            },3000)
        }
        time();
        // tab main img fadeInOut End


        // new Product
    var tab_next_prev_click = 0;
    $('.tab_next_btn').click(function(){
        $('#tab_new_img_wrap').stop().animate({
            left : 480
        },1000,function(){
            $(this).css({
                left : 0
            }).find('.tab_new_img:first').appendTo(this);
        });
        
        tab_next_prev_click++;
        if(tab_next_prev_click > 3){
            tab_next_prev_click = 0;
        }
        $('.tab_new_text_box').fadeOut(500);    
        $('.tab_new_text_box').eq(tab_next_prev_click).fadeIn(500);    
    });

    $('.tab_prev_btn').click(function(){
        $('#tab_new_img_wrap').stop().animate({
            left : -480
        },300,function(){
            $(this).css({
                left : 0
            }).find('.tab_new_img:last').prependTo(this);
        });

        tab_next_prev_click--;
        if(tab_next_prev_click < 0){
            tab_next_prev_click = 3;
        }
        $('.tab_new_text_box').fadeOut(500);    
        $('.tab_new_text_box').eq(tab_next_prev_click).fadeIn(500);    
    });
    // new Product End

    $('.tab_type_list').click(function(){

        let tab_type_click = $(this).index();

        $('.tab_type_list').removeClass('tab_type_on');
        $(this).addClass('tab_type_on');

        if(tab_type_click == 0){
            $('#tab_neo_container').css({
                display : 'block'
            });
            $('#tab_qled_container').css({
                display : 'none',
            });
            $('#tab_crystal_container').css({
                display : 'none'
            });
        }else if(tab_type_click == 1){
            $('#tab_neo_container').css({
                display : 'none'
            });
            $('#tab_qled_container').css({
                display : 'block'
            });
            $('#tab_crystal_container').css({
                display : 'none'
            });
        }else if(tab_type_click == 2){
            $('#tab_neo_container').css({
                display : 'none'
            });
            $('#tab_qled_container').css({
                display : 'none'
            });
            $('#tab_crystal_container').css({
                display : 'block'
            });
        }
    });

});
// end