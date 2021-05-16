$(document).ready(function() {
    // add shodow in header
    $(window).on('scroll',function() {
        if($(window).scrollTop() > 45) {
            $('.header').addClass('box_shadow');
        }else {
            $('.header').removeClass('box_shadow');
        }
    });

    function showSidebar(elm) {
        $('.backshadow').remove();
        elm.toggleClass('open');
        $('.sidebar').toggleClass('opensidebar');
        if(elm.hasClass('open')) {
            $('body').append(`<div class="backshadow"></div>`);
        }else {
            $('.backshadow').remove();
        } 
    }

    // hamburge icon
    $('.hamburge_icon').click(function() {
        showSidebar($(this));
    });

})