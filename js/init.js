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
  }); // end of document ready

})(jQuery); // end of jQuery name space
