$(function() {

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
});
