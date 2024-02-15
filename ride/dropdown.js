
toggleSelectClasses = (selectElement, shouldToggle) => {
  if (shouldToggle) {
    selectElement.classList.add('select-clicked');
  } else {
    selectElement.classList.remove('select-clicked');
  }

  let caret = selectElement.querySelector('.caret');
  caret.classList.toggle('caret-rotate', shouldToggle);
}

toggleMenu = (menuElement, shouldToggle) => {
  let allMenus = document.querySelectorAll('.menu');
  allMenus.forEach(function (menu) {
    if (menu !== menuElement) {
      menu.classList.remove('open');
    }
  });

  if (shouldToggle) {
    menuElement.classList.toggle('open');
  } else {
    menuElement.classList.remove('open');
  }
}

let selectElements = document.querySelectorAll('.select');

selectElements.forEach(function (selectElement) {
  selectElement.addEventListener('click', function () {
    let menu = this.nextElementSibling;
    let shouldToggle = !menu.classList.contains('open');
    
    selectElements.forEach(function (otherSelect) {
      if (otherSelect !== selectElement) {
        toggleSelectClasses(otherSelect, false);
      }
    });
    toggleSelectClasses(this, shouldToggle);

    hideOtherMenus(menu);

    toggleMenu(menu, shouldToggle);
  });
});

// Function to hide other menus
hideOtherMenus = (clickedMenu) => {
  let allMenus = document.querySelectorAll('.menu');
  allMenus.forEach(function (menu) {
    if (menu !== clickedMenu) {
      menu.classList.remove('open');
    }
  });
}
