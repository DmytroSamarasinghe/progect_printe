$(function () {

    $('.header__menu-btn').on('click', function () {
        $('.menu > ul').slideToggle();
    });
    new WOW().init();
}); 
