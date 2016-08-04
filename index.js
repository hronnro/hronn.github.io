$(document).ready(function () {
    var $moveHorizontal = $('.mainView_triangle');
    var $greetingTextOpacity = $('.aboutMe_view_header');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $moveHorizontal.width()));
        console.log('pos', position);
        $moveHorizontal.css({
          transform: 'translateX('+ -position/15 +'%)'
        });
        $greetingTextOpacity.css({
          opacity: position/1000
        });
    });
});
