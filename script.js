(function () {

    // Application preparation
    var beginApp = function () {
      setupEventHandlers();
    };

    // Sets up eventing
    var setupEventHandlers = function() {
      console.log("here")
    };
  };

  window.beginApp = beginApp;

})();

// Main function
function startApp() {
  return beginApp();
};
