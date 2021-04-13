$(document).ready(function () {

    // m menu
    let m_menu_click = 0;
    $('#m_header_menu').click(function () {
        m_menu_click++;
        if (m_menu_click % 2 == 1) {
            $('#m_menu_wrap').css({
                display: 'block'
            });
            $('#m_header_menu img').attr('src', 'img/moblie/header/close_icon.png');
        } else if (m_menu_click % 2 == 0) {
            $('#m_menu_wrap').css({
                display: 'none'
            });
            $('#m_header_menu img').attr('src', 'img/moblie/header/menu_icon.png');
        }

        $('.m_main').click(function () {
            if ($(this).children('.m_sub').hasClass('m_menu_on') === true) {
                $(this).children('.m_sub').removeClass('m_menu_on');
            } else {
                $('.m_sub').removeClass('m_menu_on');
                $(this).children('.m_sub').addClass('m_menu_on');
            }
        });
        // m_menu End
    });

    // m main img fade in/out
    $('.m_main_img_btn').click(function () {
        let m_main_index = $(this).index();
        $('.m_main_img').fadeOut(1000);
        $('.m_main_img').eq(m_main_index).fadeIn(1000);
    });
    
    let m_main_img_click = 0;
    function time(){
        auto = setInterval(function(){
            m_main_img_click++;
            if(m_main_img_click > 2){
                m_main_img_click = 0;
            }
            $('.m_main_img_btn').eq(m_main_img_click).trigger('click');
        },3000);
    }
    time();

    // m type
    $('.m_type_list').click(function(){
        let m_type_click = $(this).index();

        $('.m_type_list').removeClass('m_type_on');
        $(this).addClass('m_type_on');

        if(m_type_click == 0){
            $('#m_neo_container').css({
                display : 'block'
            });
            $('#m_qled_container').css({
                display : 'none'
            });
            $('#m_crystal_container').css({
                display : 'none'
            });
        } else if(m_type_click == 1){
            $('#m_neo_container').css({
                display : 'none'
            });
            $('#m_qled_container').css({
                display : 'block'
            });
            $('#m_crystal_container').css({
                display : 'none'
            });
        } else if(m_type_click == 2){
            $('#m_neo_container').css({
                display : 'none'
            });
            $('#m_qled_container').css({
                display : 'none'
            });
            $('#m_crystal_container').css({
                display : 'block'
            });
        }
    });


});