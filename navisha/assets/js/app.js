$(document).ready(function() {

		// banner slider
	  	$('.banner_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:true,
	    nav:false,
	    autoplay:true,
		autoplayTimeout:3000,
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




	 // collection addition slider
	  	$('.collectionSlider').owlCarousel({
	    loop:true,
	    margin:15,
	    dots:true,
	    nav:false,
	    autoplay:true,
		autoplayTimeout:3000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	});
















})