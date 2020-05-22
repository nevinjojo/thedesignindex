(function ($) {
  "use strict";

  let fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight();

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  $(window).resize(sidebarCollapse);

  function sidebarCollapse(){
    if ($(window).width() < 992 && $('#sidebar').hasClass('active')) {
      $('#sidebar').toggleClass('active');
    }
  }


})(jQuery);
