

$(window).scroll(function() {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('.sidebar').css('left', '0px');
    } else {
        $('.sidebar').css('left', '-250px');
    }
});



 $('.slider').slick({
     dots: false,
     arrows: false,
     infinite: true,
     speed: 300,
     slidesToShow: 3,
     slideToScroll:1,
     centerMode: true,
     variableWidth: true,
     responsive: [{
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         },
     ]
 });

 $('.scrollMenu a.link').click(function(e) {
      e.preventDefault();
     var crElm = $(this).attr('data-section');
     $('html,body').animate({
          scrollTop: $('.' + crElm).offset().top - 80
     },500);
     $('.sidebar').css('left','-250px');
     $('.header .hamburger').removeClass('is-active');
 });

 $('.arrowbox button').click(function() {
     $('html,body').animate({
         scrollTop:$('.about').offset().top - 80
     },500)
     $('.scrollMenu a[data-section="about"]').addClass('active');
 });

 $('.scrollMenu a').click(function() {
      $('.scrollMenu a').removeClass('active');
      $(this).addClass('active');
 });


$(window).on('scroll',function() {
    var pos = $(window).height()
    if($(window).scrollTop() == 0) {
        $('.scrollMenu a').removeClass('active');
    }
});