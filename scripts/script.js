(function () {

  // Application preparation
  var beginApp = function () {
    callFullPagePlugin();
    setupEventHandlers();
  };

  // Sets up eventing
  var callFullPagePlugin = function() {
    $('#fullpage').fullpage();
  };

  var setupEventHandlers = function() {
    $('#next-section').on('click', goToNextSection);
    $('#about').on('click', goToAboutSection);
    $('#resume').on('click', goToResumeSection);
    $('#contact').on('click', goToContactSection);
  };

  var goToAboutSection = function() {
    $('.about-me').removeClass('hide').show();
    $('.resume-area').removeClass('show').hide();
    $('.contact-area').removeClass('show').hide();
  }

  var goToResumeSection = function() {
    $('.about-me').removeClass('show').hide();
    $('.resume-area').removeClass('hide').show();
    $('.contact-area').removeClass('show').hide();
  }

  var goToContactSection = function() {
    $('.about-me').removeClass('show').hide();
    $('.resume-area').removeClass('show').hide();
    $('.contact-area').removeClass('hide').show();
  }

  var goToNextSection = function() {
    $.fn.fullpage.moveSectionDown();
  }

window.beginApp = beginApp;

})();

// Main function
function startApp() {
  return beginApp();
};
