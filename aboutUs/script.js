// Get the elements
const signInLink = document.querySelector('.singIn');
const signUpLink = document.querySelector('.singUp');
const registrationWindow = document.querySelector('.registration-window');

// Add click event listeners
signInLink.addEventListener('click', toggleRegistrationWindow);
signUpLink.addEventListener('click', toggleRegistrationWindow);

// Function to toggle the registration window visibility
function toggleRegistrationWindow() {
  registrationWindow.style.display = registrationWindow.style.display === 'none' ? 'block' : 'none';
}
