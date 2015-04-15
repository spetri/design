(function () {

  // Application preparation
  var beginApp = function () {
    setupEventHandlers();
  };

  var setupEventHandlers = function() {
    
  };

  var beginScrollAnimation = function(e) {
    $(e.target).animate({
//        "background-position-y": "-70px"
        //"transform": "translate(540px,-200px)"
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
