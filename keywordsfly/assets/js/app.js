$(document).ready(function() {
    $(window).on('scroll',function() {
        if($(window).scrollTop() > 45) {
            $('.header').addClass('fixed');
        }else {
            $('.header').removeClass('fixed')
        }
    });

    $('.hamburge_icon').click(function() {
        $(this).toggleClass('open');
        $('.sidebar').fadeToggle();
        $('.header').toggleClass('header_index');
    });

    $('.sidebar ul li').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.submenu').slideUp();
        }else {
            $('.sidebar ul li').removeClass('active');
            $(this).addClass('active');
            $('.sidebar ul li .submenu').slideUp();
            $(this).find('.submenu').slideDown();
        }
    });

    $('.testimonial_slider').slick({
        dots: true,
        autoplay:true
      });
})