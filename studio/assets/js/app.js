(function($) {

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('#gallery').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('.gallery figure a').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
    bgOpacity: 0.8,
    captionEl: false,
    tapToClose: true,
    shareEl: false,
    fullscreenEl: false,
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));



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
        autoplay: true,
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
        autoplay: true,
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


	 // logo slider
	 $('.logo_slider').owlCarousel({
	    loop:true,
	    margin:20,
	    item:5,
	    nav: false,
        dots:false,
        autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
                    nav: false,
                    items: 1,
                },
                768:{
                    nav: true,
                    items: 2,
                },
                980:{
                    items: 3,
                },
                1200:{
                    items: 5,
                },
	    }
	});




	 // latest work tabs
	 $('.tab_btn li').click(function() {
	 	var $this = $(this).attr('data-filter');

	 	$('.tab_btn li').removeClass('active');
	 	$(this).addClass('active');

	 	$('.latesWork_card').hide();
	 	$('.' + $this).show();
	 });


	 $('.hamburge_icon').click(function() {
	 	$(this).toggleClass('open');
	 	$('.menu_wraper').toggleClass('left');
	 });


	 // accordion
	 $('.accord_btn').click(function() {
	 	if($(this).hasClass('active')) {
	 		$(this).removeClass('active');
	 		$(this).next('.content').slideUp();
	 		$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
	 	}else {
	 		$('.accord_btn').removeClass('active');
	 		$(this).addClass('active');

	 		$('.accord_btn').find('i').removeClass('fa-minus').addClass('fa-plus');
	 		$(this).find('i').removeClass('fa-plus').addClass('fa-minus');

	 		$('.accord_btn').next('.content').slideUp();
	 		$(this).next('.content').slideDown();
	 	}
	 	
	 })


	 $('.dropdown_btn').click(function(e) {
	 	// e.preventDefault();
		if($(window).width() < 992) {
    	   $(this).find('.submenu').toggle();	 
    	}
	})

})


