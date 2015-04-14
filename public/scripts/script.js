(function () {

  // Application preparation
  var beginApp = function () {
    setupEventHandlers();
  };

  var setupEventHandlers = function() {
    $('.work .browser').on('mouseenter', beginScrollAnimation);
    $('.work .browser').on('mouseleave', endScrollAnimation);
  };

  var beginScrollAnimation = function(e) {
    $(e.target).animate({
        "background-position-y": "-70px"
    }, 1000);
  }

  var endScrollAnimation = function(e) {
    $(e.target).animate({
        "background-position-y": "0px"
    }, 1000);
  }

window.beginApp = beginApp;

})();

// Main function
function startApp() {
  return beginApp();
};
