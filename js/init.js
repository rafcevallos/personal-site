(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
      fullWidth: true
    });
    $('.slider').slider({
      height: 475,
      interval: 12000,
    });
    $('.materialboxed').materialbox();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
  }); // end of document ready

})(jQuery); // end of jQuery name space
