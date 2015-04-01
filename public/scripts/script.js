(function () {

  // Application preparation
  var beginApp = function () {
    setupEventHandlers();
  };

  var setupEventHandlers = function() {
    $('.nav .left-side-nav ul li:first-child').on('click', about);
    $('.nav .left-side-nav ul li:nth-child(2)').on('click', timeline);
    $('.more').on('click', displayInfo);
  };

  var displayInfo = function(e) {
    $(e.target).prev().toggleClass('show');
  }

  var about = function() {
    $('.nav div:nth-child(2) .timeline-row').removeClass('show');
    $('.nav div:nth-child(2) .timeline-row').addClass('hide');
    $('.nav div:nth-child(2) .basic-info .basic-info-inner').removeClass('hide');
    $('.nav div:nth-child(2) .basic-info .basic-info-inner').addClass('show');
    $('.nav').css('min-height', '800px');
    $('.left-side-nav ul li').removeClass('active');
    $('.left-side-nav ul li:first-child').addClass('active');

  }

  var timeline = function() {
    $('.nav div:nth-child(2) .basic-info .basic-info-inner').removeClass('show');
    $('.nav div:nth-child(2) .basic-info .basic-info-inner').addClass('hide');
    $('.nav div:nth-child(2) .timeline-row').removeClass('hide');
    $('.nav div:nth-child(2) .timeline-row').addClass('show');
    $('.nav').css('min-height', '1400px');
    $('.left-side-nav ul li').removeClass('active');
    $('.left-side-nav ul li:nth-child(2)').addClass('active');
  }

window.beginApp = beginApp;

})();

// Main function
function startApp() {
  return beginApp();
};
