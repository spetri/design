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

  // Toggles the timeline "Show More" buttons
  var displayInfo = function(e) {
    $(e.target).prev().toggleClass('show');
  }

  // User clicks on About in sidebar nav
  // Switches the view, toggles the sidebar nav active class
  var about = function() {
    var about = $('.nav div:nth-child(2) .basic-info .basic-info-inner');
    var timeline = $('.nav div:nth-child(2) .timeline-row');
    var allLi = $('.left-side-nav ul li');
    var aboutLi = $('.left-side-nav ul li:first-child');
    switchView(timeline, about);
    changeActiveClass(allLi, aboutLi);
    $('.nav').css('min-height', '800px');
  }

  // User clicks on Work Timeline in sidebar nav
  // Switches the view, toggles the sidebar nav active class
  var timeline = function() {
    var about = $('.nav div:nth-child(2) .basic-info .basic-info-inner');
    var timeline = $('.nav div:nth-child(2) .timeline-row');
    var allLi = $('.left-side-nav ul li');
    var timelineLi = $('.left-side-nav ul li:nth-child(2)');
    switchView(about, timeline)
    changeActiveClass(allLi, timelineLi);
    $('.nav').css('min-height', '1400px');
  }

  // Switches view between about and timeline
  var switchView = function(dom1, dom2) {
    dom1.removeClass('show');
    dom1.addClass('hide');
    dom2.removeClass('hide');
    dom2.addClass('show');
  }

  // Switches active class of sidebar nav
  var changeActiveClass = function(allLi, dom2) {
    allLi.removeClass('active');
    dom2.addClass('active');
  }

window.beginApp = beginApp;

})();

// Main function
function startApp() {
  return beginApp();
};
