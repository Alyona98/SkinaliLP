$(window).load(function() {
    /*Слайдер 'До и после'*/
    $(".before-slider").slick({
        draggable: false,
        appendDots: $(".before-slider-wrap"),
        dots: true,
        dotsClass: 'before-slider_dots',
        prevArrow:"<button type=\"button\" class=\"arrow slick-prev\"><img src=\"img/before/left.png\"></button>",
		nextArrow:"<button type=\"button\" class=\"arrow slick-next\"><img src=\"img/before/right.png\"></button>",
        responsive: [{
              breakpoint: 768,
              settings: {
                arrows: false,
              }
            }],
    });
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали',
        move_slider_on_hover: true,
        move_with_handle_only: true,
    });
    /*Слайдер для отзывов*/
    $('.reviews-slider').slick({
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
		prevArrow:"<button type=\"button\" class=\"slick-prev\"><img src=\"img/before/left.png\"></button>",
		nextArrow:"<button type=\"button\" class=\"slick-next\"><img src=\"img/before/right.png\"></button>",
    });
    /*Настройка выпадающего меню*/
    $(".menu-button").on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    /*Настройка select*/
    $(".select_checked").on('click', function(){
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    $(".select__option").on('click', function(){
        var value = $(this).attr('data-value');
        $('#section-type').val(value);
        $('.select_checked').text(value);
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    /*Внутренние ссылки на offer*/
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top -120 + "px" });
        return false;
    });
    /*Форма записи телефона*/
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