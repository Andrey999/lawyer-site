$(function() {

    //  slick - - slider
   $('.slider__inner, .news__slider-inner').slick({
      infinite: false,
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
   });


   // form - styler
    $('select').styler();

});
