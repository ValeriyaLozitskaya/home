;(function ($) {

    $.fn.myCarousel = function () {

        var leftArrow = $('.carousel-arrow-left');
        var rightArrow = $('.carousel-arrow-right');
        var elementList = $('.carousel-list');

        var pixelsOffset = 325;
        var currentLeftValue = 0;

        var elementsCount = elementList.find('li').length;
        var minOffset = -((elementsCount - 3) * pixelsOffset);
        var maxOffset = 0;

        leftArrow.click(function () {
            if (currentLeftValue != maxOffset) {
                currentLeftValue += 325;
                elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });

        rightArrow.click(function () {
            if (currentLeftValue != minOffset) {
                currentLeftValue -= 325;
                elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
    };


})(jQuery);