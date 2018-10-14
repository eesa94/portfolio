// document ready functions
$(document).ready(function() {
  $('#body-content').css('opacity', '1.0');

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


  // Collapsed mobile navbar effects
  let state = 0;

  let open = () => {
    $('.main-section, .article-show .row, .project-show .row').css('opacity', '0.5');
    $('#nav-toggle-icon').css('transform', 'rotate(180deg)');
  };

  let close = () => {
    $('.main-section, .article-show .row, .project-show .row').css('opacity', '1.0');
    $('#nav-toggle-icon').css('transform', 'rotate(0deg)');
  };

  $('.navbar-toggler').click(function() {

    if (state === 0) {
      open();
      state = 1;

    } else if (state === 1) {
      close();
      state = 0;
    }
  });

  // Open sidenav
  $('#contact-button, #contact-button-second').click(function() {
    $('#mySidenav').css('width', '100%');
    $('#primary-navbar, #secondary-navbar').css('display', 'none');
    $('#xs-menu').removeClass('show');
    close();
    state = 0;
  });

  // Close sidenav
  $('.closebtn').click(function() {
    $('#mySidenav').css('width', '0');
    $('#primary-navbar, #secondary-navbar').css('display', 'flex');
  });

  // Modal buttons in the sidebar
  $('#resume-btn').hover(
    function() {
      $('#resume-caption').css('opacity', '1');
      $('.fa-file-alt').addClass('color-secondary').removeClass('color-primary');
    }, function() {
      $('#resume-caption').css('opacity', '0');
      $('.fa-file-alt').removeClass('color-secondary').addClass('color-primary');
    }
  );

  $('#message-btn').hover(
    function() {
      $('#message-caption').css('opacity', '1');
      $('.fa-envelope').addClass('color-secondary').removeClass('color-primary');
    }, function() {
      $('#message-caption').css('opacity', '0');
      $('.fa-envelope').removeClass('color-secondary').addClass('color-primary');
    }
  );

  $('#resume-btn').click(function() {
    (this).removeClass('btn:focus');
  });

  $('.project-hover-panel').hover(
    function() {
      $('.project-overlay', this).css('background-image', 'linear-gradient(to right, #41526f, #377a9e, #00a6c1, #00d2d2, #5dfdd1)');
    },
    function() {
      $('.project-overlay', this).css('background-image', 'none');
    }
  );


});
