(function() {
  var firstName = $('#first-name');
  var lastName = $('#last-name');
  var comments = $('#comments');
  var submit = $('#submit');

  var beginApp = function() {
    setupEvents();
    setupNavbarAffix();
  };

  var setupEvents = function() {
    firstName.on("blur", formValid);
    lastName.on("blur", formValid);
    comments.on("blur", formValid);
    submit.on("click", sendEmail);
  }

  var formValid = function(e) {
    if(this.value == null || this.value == "") {
      $(e.target).addClass('input-failure');
    } else {
      $(e.target).addClass('input-success');
    } 
  }

  var sendEmail = function(e) {
    e.preventDefault();
    var subject = firstName.val() + " " + lastName.val() + " is contacting you.";
    window.open('mailto:sabbap@gmail.com?subject=' + subject + '&body='+ comments.val());
  }

  var setupNavbarAffix = function() {
    $('#myAffix').affix({
      offset: {
        top: 100,
        bottom: function() {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    })
  }

  window.beginApp = beginApp;

})();

function startApp() {
  return beginApp();
}
