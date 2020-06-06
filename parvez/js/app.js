// hamburge button

$('.nav_icon').click(function() {
	$(this).toggleClass('open');
});


var sideSts = true;

var hamburge_btn = document.querySelector('.nav_icon');

hamburge_btn.onclick = () => {
    if(sideSts == true) {
        document.querySelector('.header_menu_left').style.left = '0';
        sideSts = false;
    }else {
        document.querySelector('.header_menu_left').style.left = '-240px';
        sideSts = true;
    }
}



// accordina

$('.service_accordian h6').on("click", function() {
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next('.content').slideUp(400);
        $(this).parent('.service_accordian').removeClass('active');
    }else {
        $('.service_accordian h6').removeClass('active');
        $(this).addClass('active');
        $('.content').slideUp(400);
        $('.service_accordian').removeClass('active');
        $(this).next('.content').slideDown(600);
        $(this).parent('.service_accordian').addClass('active');
    }
})



// aos Animation

AOS.init();