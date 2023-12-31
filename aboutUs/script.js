
//activate pop-up

let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.singIn');
let registerLink = document.querySelector('.singUp');

function showSignUpPopup() {
  console.log("Sing-up");
  wrapper.classList.add('active');
  registerLink.removeEventListener('click', showSignUpPopup);
  loginLink.addEventListener('click', showLoginPopup);
}

function showLoginPopup() {
  console.log("log-in");
  wrapper.classList.remove('active');
  loginLink.removeEventListener('click', showLoginPopup);
  registerLink.addEventListener('click', showSignUpPopup);
}

registerLink.addEventListener('click', showSignUpPopup);
loginLink.addEventListener('click', showLoginPopup);

// close pop-up
let closeButton = document.querySelector('.icon-close');
closeButton.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});







