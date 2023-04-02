// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// Function to display message after submit
function sayCode() {
   alert("Thank you for filling out the form! Please check your email for any job updates!");
}

document.getElementById("submit").onclick = sayCode;
