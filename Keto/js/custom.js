


$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
}); 
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    }
    else {
        $('#mySidenav').css('left', '-250px');
    }
});

$(document).ready(function(){
    $('input').keyup(function(){
        if($(this).val().length==$(this).attr("maxlength")){
            $(this).next().focus();
        }
    });
});




$('.meat_box_inCom label').click(function() {
    $('.meat_box_inCom label').next('h4').css('color','#2b2b2b');
    $(this).next('h4').css('color','#f43e91');  
});


$('.veggie_box_in label').click(function() {
   $(this).next('h4').toggleClass('headColor');
   
});

$('.topBtns ul li label').click(function() {
    $('.topBtns ul li label').children('span').css('color','#fff');
    $(this).children('span').css('color','#f03d8f');
});

$('.optLi_res .optForm ul li label').click(function() {
    $('.optLi_res .optForm ul li label').children('span').css('color','#2b2b2b');
    $(this).children('span').css('color','#fff');
});



//$('.meatHover .meat_box1').on('mouseover',function() {
//     $('.meat_box1 a img.hImg1').attr({
//            "src": "img/hmeat1.png"
//        }); 
//});
//
//$('.meatHover .meat_box1 ').mouseleave(function() {
//    $('.meat_box1 a img').attr({
//        "src":"img/meat1.png"
//    });
//});
//
//$('.meatHover .meat_box2').on('mouseover',function() {
//    $('.meat_box2 a img.hImg2').attr({
//        "src":"img/hmeat2.png"
//    });
//});
//
//$('.meatHover .meat_box2').mouseleave(function() {
//    $('.meat_box2 a img.hImg2').attr({
//        "src":"img/meat2.png"
//    });
//});
//
//$('.meatHover .meat_box3').on('mouseover', function() {
//    $('.meat_box3 a img.hImg3').attr({
//        "src":"img/homeat3.png"
//    });
//});
//
//$('.meatHover .meat_box3').mouseleave(function() {
//    $('.meat_box3 a img.hImg3').attr({
//        "src":"img/meat3.png"
//    });
//});
//
//$('.meatHover .meat_box4').on('mouseover',function() {
//    $('.meat_box4 a img.hImg4').attr({
//        "src":"img/hmeat4.png"
//    });
//});
//
//$('.meatHover .meat_box4').mouseleave(function() {
//    $('.meat_box4 a img.hImg4').attr({
//        "src":"img/meat4.png"
//    });
//});
//
//$('.meatHover .meat_box5').on('mouseover',function() {
//    $('.meat_box5 a img.hImg5').attr({
//        "src":"img/hmeat5.png"
//    });
//});
//
//$('.meatHover .meat_box5').mouseleave(function() {
//    $('.meat_box5 a img.hImg5').attr({
//        "src":"img/meat5.png"
//    });
//});
//
//
//$('.meatRhover .meat_box1').on('click',function() {
//    $('.meat_box1 a img.hmeat1').attr({
//        "src":"img/meatHover1.png"
//    });
//});
//
//$('.meatRhover .meat_box1').on('mouseleave',function() {
//    $('.meat_box1 a img.hmeat1').attr({
//        "src":"img/meat1.png"
//    });
//});
//
//$('.meatRhover .meat_box2').on('click',function() {
//    $('.meat_box2 a img.hmeat2').attr({
//        "src":"img/meatHover2.png"
//    });
//});
//
//$('.meatRhover .meat_box2').on('mouseleave',function() {
//    $('.meat_box2 a img.hmeat2').attr({
//        "src":"img/meat2.png"
//    });
//});
//
//$('.meatRhover .meat_box3').on('click',function() {
//    $('.meat_box3 a img.hmeat3').attr({
//        "src":"img/meatHover3.png"
//    });
//});
//
//$('.meatRhover .meat_box3').on('mouseleave',function() {
//    $('.meat_box3 a img.hmeat3').attr({
//        "src":"img/meat3.png"
//    });
//});
//
//$('.meatRhover .meat_box4').on('click',function() {
//    $('.meat_box4 a img.hmeat4').attr({
//        "src":"img/meatHover4.png"
//    });
//});
//
//$('.meatRhover .meat_box4').on('mouseleave',function() {
//    $('.meat_box4 a img.hmeat4').attr({
//        "src":"img/meat4.png"
//    });
//});
//
//$('.meatRhover .meat_box5').on('click',function() {
//    $('.meat_box5 a img.hmeat5').attr({
//        "src":"img/meatHover5.png"
//    });
//});
//
//$('.meatRhover .meat_box5').on('mouseleave',function() {
//    $('.meat_box5 a img.hmeat5').attr({
//        "src":"img/meat5.png"
//    });
//});
//
//
////veggie image hover
//
//$('.vegg_Hover .meat_box1').on('mouseover',function() {
//     $('.meat_box1 a img').attr({
//            "src": "img/vegHover1.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box1').on('mouseleave',function() {
//     $('.meat_box1 a img').attr({
//            "src": "img/veggie1.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box2').on('mouseover',function() {
//     $('.meat_box2 a img').attr({
//            "src": "img/vegHover2.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box2').on('mouseleave',function() {
//     $('.meat_box2 a img').attr({
//            "src": "img/veggie2.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box3').on('mouseover',function() {
//     $('.meat_box3 a img').attr({
//            "src": "img/vegHover3.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box3').on('mouseleave',function() {
//     $('.meat_box3 a img').attr({
//            "src": "img/veggie3.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box4').on('mouseover',function() {
//     $('.meat_box4 a img').attr({
//            "src": "img/vegHover4.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box4').on('mouseleave',function() {
//     $('.meat_box4 a img').attr({
//            "src": "img/veggie4.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box5').on('mouseover',function() {
//     $('.meat_box5 a img').attr({
//            "src": "img/vegHover5.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box5').on('mouseleave',function() {
//     $('.meat_box5 a img').attr({
//            "src": "img/veggie5.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box6').on('mouseover',function() {
//     $('.meat_box6 a img').attr({
//            "src": "img/vegHover6.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box6').on('mouseleave',function() {
//     $('.meat_box6 a img').attr({
//            "src": "img/veggie6.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box7').on('mouseover',function() {
//     $('.meat_box7 a img').attr({
//            "src": "img/vegHover7.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box7').on('mouseleave',function() {
//     $('.meat_box7 a img').attr({
//            "src": "img/veggie7.png"
//        }); 
//});
//
//$('.vegg_Hover .meat_box8').on('mouseover',function() {
//     $('.meat_box8 a img').attr({
//            "src": "img/vegHover8.png"
//        }); 
//});
//
//
//$('.vegg_Hover .meat_box8').on('mouseleave',function() {
//     $('.meat_box8 a img').attr({
//            "src": "img/veggie8.png"
//        }); 
//});
//
//
//$('.veggieHover .meat_box1').on('click',function() {
//    $('.meat_box1 a img').attr({
//        "src":"img/veggieRhover1.png"
//    });
//});
//
//$('.veggieHover .meat_box1').on('mouseleave',function() {
//    $('.meat_box1 a img').attr({
//        "src":"img/veggie1.png"
//    });
//});
//
//$('.veggieHover .meat_box2').on('click',function() {
//    $('.meat_box2 a img').attr({
//        "src":"img/veggieRhover2.png"
//    });
//});
//
//$('.veggieHover .meat_box2').on('mouseleave',function() {
//    $('.meat_box2 a img').attr({
//        "src":"img/veggie2.png"
//    });
//});
//
//$('.veggieHover .meat_box3').on('click',function() {
//    $('.meat_box3 a img').attr({
//        "src":"img/veggieRhover3.png"
//    });
//});
//
//$('.veggieHover .meat_box3').on('mouseleave',function() {
//    $('.meat_box3 a img').attr({
//        "src":"img/veggie3.png"
//    });
//});
//
//$('.veggieHover .meat_box4').on('click',function() {
//    $('.meat_box4 a img').attr({
//        "src":"img/veggieRhover4.png"
//    });
//});
//
//$('.veggieHover .meat_box4').on('mouseleave',function() {
//    $('.meat_box4 a img').attr({
//        "src":"img/veggie4.png"
//    });
//});
//
//$('.veggieHover .meat_box5').on('click',function() {
//    $('.meat_box5 a img').attr({
//        "src":"img/veggieRhover5.png"
//    });
//});
//
//$('.veggieHover .meat_box5').on('mouseleave',function() {
//    $('.meat_box5 a img').attr({
//        "src":"img/veggie5.png"
//    });
//});
//
//$('.veggieHover .meat_box6').on('click',function() {
//    $('.meat_box6 a img').attr({
//        "src":"img/veggieRhover6.png"
//    });
//});
//
//$('.veggieHover .meat_box6').on('mouseleave',function() {
//    $('.meat_box6 a img').attr({
//        "src":"img/veggie6.png"
//    });
//});
//
//$('.veggieHover .meat_box7').on('click',function() {
//    $('.meat_box7 a img').attr({
//        "src":"img/veggieRhover7.png"
//    });
//});
//
//$('.veggieHover .meat_box7').on('mouseleave',function() {
//    $('.meat_box7 a img').attr({
//        "src":"img/veggie7.png"
//    });
//});
//
//$('.veggieHover .meat_box8').on('click',function() {
//    $('.meat_box8 a img').attr({
//        "src":"img/veggieRhover8.png"
//    });
//});
//
//$('.veggieHover .meat_box8').on('mouseleave',function() {
//    $('.meat_box8 a img').attr({
//        "src":"img/veggie8.png"
//    });
//});
//
//
























