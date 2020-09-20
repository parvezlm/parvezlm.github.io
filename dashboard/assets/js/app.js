$(document).ready(function() {
  $('.sidebar_btm ul li a').click(function() {
      $('.sidebar_btm ul li a').removeClass('active');
      $(this).addClass('active');
  });

  $('.hamburge_icon').click(function() {
      $(this).toggleClass('open');
      $('.sidebar').toggleClass('left');
  })
})