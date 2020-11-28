$(document).ready(function() {
	$('.customSelect input').on('focus', function() {
		$(this).next('.customeSelect_content').slideDown(500);
	});

	$('.customSelect input').on('blur', function() {
		$(this).next('.customeSelect_content').slideUp();
	});

	$('.customeSelect_content ul li').click(function() {
		let $this = $(this).text();
		$(this).parents('.customeSelect_content').prev('input').val($this);
		$('.customeSelect_content ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.tabs_menu li').click(function() {
		let $this = $(this).attr('data-tag');
		$('.tabs_menu li').removeClass('active');
		$(this).addClass('active');
		$('.custom_none').hide();
		$('#' + $this).show();
	});



    $('#gallery a').fancybox({
    overlayColor: '#060',
    overlayOpacity: .4,
    transitionIn: 'elastic',
    transitionOut: 'elastic',
    easingIn: 'easeInSine',
    easingOut: 'easeOutSine',
    titlePosition: 'outside',
    cyclic: true
  });



$('.slider_search_plane').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$('.brand_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
   autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.battles_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
   autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



$('.events_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
   autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

// slick slider button
$('.slick-prev').addClass('material-icons').text('keyboard_arrow_left');
$('.slick-next').addClass('material-icons').text('keyboard_arrow_right');


// hamburge button
$('.hamburge_icon').click(function() {
  $(this).toggleClass('open');
  $('.header_bottom').toggleClass('left');
});



    // sidebar menu accordian
    $('.header nav > ul > li').click(function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.subMenu').slideUp();
      }else {
        $('.header nav > ul > li').removeClass('active');
        $(this).addClass('active');
         $('.header nav > ul > li').find('.subMenu').slideUp();     
         $(this).find('.subMenu').slideDown();     
      }
        
      });  



   
});


