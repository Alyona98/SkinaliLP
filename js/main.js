$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали',
    });
    $(".before-slider").slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider_dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $(".menu-button").on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    /*Настройка select*/
    $(".select_checked").on('click', function(){
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    $(".select_option").on('click', function(){
        var value = $(this).attr('data-value');
        $('#section-type').val(value);
        $('.select_checked').text(value);
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top -120 + "px" });
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99")
    /* Показ карты в момент допрокрутки */
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A504eeaed5e465df7e7341e2f621283f862ff17b997fe597381ff0d70d75c2f3f&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
            $(window).unbind('scroll');
        }
    });
});