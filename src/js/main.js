$(function () {

    // consultation section input data 
    function dataFormSend() {
        let inputEmail = document.getElementById('email').value;
        let inputPhone = document.getElementById('phone').value;
        let inputFio = document.getElementById('fio').value;
        let inputTextarea = document.getElementById('message').value;
        let formData = {
            email: inputEmail,
            phone: inputPhone,
            fio: inputFio,
            message: inputTextarea
        }
        return JSON.stringify(formData);
    }

    let formButton = document.querySelector('.form__button');
    formButton.addEventListener('click', function (event) {
        event.preventDefault();
        dataFormSend();

        let modalFeedback = document.getElementById('form__feedback');
        modalFeedback.style.opacity = 1;

        setTimeout(() => {
            modalFeedback.style.opacity = 0;
        }, 3000);

    }); // consultation section input data  end


    // modal input data 
    function dataModalSend() {
        let inputName = document.getElementById('name').value;
        let inputTel = document.getElementById('tel').value;
        let modalObj = {
            name: inputName,
            phone: inputTel
        };
        return JSON.stringify(modalObj);
    }

    let btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        dataModalSend();

        let modal = document.getElementById('modal');
        let modalFeedback = document.getElementById('modal__feedback');
        let fancyboxBg = document.querySelector('.fancybox-bg');
        modal.style.display = 'none';
        fancyboxBg.style.opacity = 0;
        modalFeedback.style.opacity = 1;

        setTimeout(() => {
            modalFeedback.style.opacity = 0;
        }, 3000);

    }); // modal input data  end


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

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });


    // form - styler
    $('select').styler();


    //  plugin  wow js
    new WOW().init();
});