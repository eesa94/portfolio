// document ready functions
$(document).ready(function() {

  // Open/close nav menu
  let navOpen = 0;

  $('.nav-open').click(function() {
    if (navOpen === 0) {
      $(this).toggleClass('is-active');
      $('.nav-menu').css('top', '0');
      $('.navbar-nav').toggleClass('fadeIn');
      navOpen = 1;
    }
    else if (navOpen === 1) {
      $(this).toggleClass('is-active');
      $('.nav-menu').css('top', '-100%');
      $('.navbar-nav').toggleClass('fadeIn');
      navOpen = 0;
    }
  })


  // Toggle card colours in about section
  let fill = 0;

  $('#swap-colour-btn').click(function() {
    if (fill === 1) {
      $('#card-blue').addClass('card-default-blue').removeClass('card-hover-blue');
      $('#card-pink').addClass('card-default-pink').removeClass('card-hover-pink');
      $('#card-lightblue').addClass('card-default-lightblue').removeClass('card-hover-lightblue');

      $('#font-left').addClass('box-shadow');
      $('#font-right').removeClass('box-shadow');

      fill = 0;

      } else if (fill === 0) {
        $('#card-blue').removeClass('card-default-blue').addClass('card-hover-blue');
        $('#card-pink').removeClass('card-default-pink').addClass('card-hover-pink');
        $('#card-lightblue').removeClass('card-default-lightblue').addClass('card-hover-lightblue');

        $('#font-left').removeClass('box-shadow');
        $('#font-right').addClass('box-shadow');

        fill = 1;
      }
  });


  // Alert message animation
  $('.alert').addClass('animated alert-animation fadeOut');


});
