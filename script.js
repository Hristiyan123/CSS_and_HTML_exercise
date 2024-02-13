let loginBtn = document.querySelector('.loginBtn');
let registerBtn = document.querySelector('.registerBtn');
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let buttonRegister = document.querySelector('.register'); 

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

buttonRegister.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

// Function to switch to login form
document.getElementById("switchToLogin").addEventListener("click", function () {
  document.querySelector('.registerTologIn').style.display = "none";
  document.querySelector('.loginToregister').style.display = "block";
});

// Function to switch to register form
document.getElementById("switchToRegister").addEventListener("click", function () {
  document.querySelector('.loginToregister').style.display = "none";
  document.querySelector('.registerTologIn').style.display = "block";
});

// close pop-up
let closeButton = document.querySelector('.icon-close');

closeButton.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
