$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 45) {
			$('.header').addClass('fixed_header');
		}else {
			$('.header').removeClass('fixed_header');
		}
	});


		// banner slider
	  	$('.banner_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    dots:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:1,
	            nav:true,
	            loop:false
	        }
	    }
	});


	 // service slider
	 	$('.category_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    item:1,
	    nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 3000,
	    dots:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
                    nav: false,
                    items: 1,
                },
                768:{
                    nav: true,
                    items: 1,
                },
                980:{
                    items: 2,
                },
                1200:{
                    items: 3,
                },
	    }
	});


	 	// testimonial slider
	 $('.testimonial_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    item:1,
	    nav: true,
        dots: true,
        autoplay: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
                    nav: false,
                    items: 1,
                },
                768:{
                    nav: true,
                    items: 1,
                },
                980:{
                    items: 1,
                },
                1200:{
                    items: 1,
                },
	    }
	});


	 // latest work tabs
	 $('.tab_btn li').click(function() {
	 	var $this = $(this).attr('data-filter');

	 	$('.tab_btn li').removeClass('active');
	 	$(this).addClass('active');

	 	$('.work').fadeOut('fast');
	 	$('.' + $this).fadeIn();
	 })

})


