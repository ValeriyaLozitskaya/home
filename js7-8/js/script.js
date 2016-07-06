$(function () {

//Задание №1

    $('.tab_item').not(':first').hide();
    $('.wrapper .tab').click(function () {
        $('.wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');


//Задание №2

    $('input').hover(function () {
        $(this)
            .siblings('.tooltip')
            .fadeToggle()
            .animate({
                fontSize: '12px'
            });
    });

    $('.button').click(function () {
        $('.tooltip')
            .fadeToggle()
            .animate({
                fontSize: '12px'
            });
    });
});