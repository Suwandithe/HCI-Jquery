$(document).ready(function () {
    $('.item').hover(function () {
      var toggleId = $(this).data('toggle');
      $('#details-' + toggleId).slideToggle();
    });
  });



