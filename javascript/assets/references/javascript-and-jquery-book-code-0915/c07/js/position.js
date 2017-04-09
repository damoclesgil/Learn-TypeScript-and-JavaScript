$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() {

    if (endZone < $window.scrollTop()) {
      $slideAd.animate({ 'left': '0px' }, 100);
    } else {
      $slideAd.stop(true).animate({ 'left': '-1260px' }, 100);
    }

  });

});