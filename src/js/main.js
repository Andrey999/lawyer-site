$(function() {

    // fixed  header
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 470) {
            $('#header__content').addClass('active__header');
        } else {
            $('#header__content').removeClass('active__header');
        }
    });


    //  slick - - slider
   $('.slider__inner, .news__slider-inner').slick({
      infinite: false,
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
   });

   $('.header__btn-menu').on('click', function() {
      $('.menu ul').slideToggle();
   });


   // form - styler
    $('select').styler();


    //  plugin  wow js
    new WOW().init();
});
