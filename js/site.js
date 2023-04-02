// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// Get the form element
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Display message
  const message = document.createElement('p');
  message.textContent = `Thank you for filling out the form! Please check your email for any updates!`;
  form.parentNode.insertBefore(message, form.nextSibling);
  
  form.reset();
});

