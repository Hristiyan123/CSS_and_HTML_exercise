let loginBtn = document.querySelector('#loginBtn');
let registerBtn = document.querySelector('#registerBtn');
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');

// login pop-up
loginBtn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  document.querySelector('.from-box.login').style.display = 'block';
  document.querySelector('.from-box.rregister').style.display = 'none';
});

// register pop-up
registerBtn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  document.querySelector('.from-box.rregister').style.display = 'block';
  document.querySelector('.from-box.login').style.display = 'none';
});

// switch to login form
document.getElementById("switchToLogin").addEventListener("click", function () {
  document.querySelector('.registerTologIn').style.display = "none";
  document.querySelector('.loginToregister').style.display = "block";
  document.querySelector('.from-box.login').style.display = 'block';
  document.querySelector('.from-box.rregister').style.display = 'none';
});

// switch to register form
document.getElementById("switchToRegister").addEventListener("click", function () {
  document.querySelector('.loginToregister').style.display = "none";
  document.querySelector('.registerTologIn').style.display = "block";
  document.querySelector('.from-box.rregister').style.display = 'block';
  document.querySelector('.from-box.login').style.display = 'none';
});

// Close pop-up
let closeButton = document.querySelector('.icon-close');

closeButton.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
