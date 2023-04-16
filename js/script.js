const burger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.menu-mobile');
const menuItems = document.querySelectorAll('#href');
const swipperBtns = document.querySelectorAll('.team-swipper-btn');
const teams = document.querySelectorAll('.team-item');

// show the menu on click
burger.addEventListener('click', function () {
  menuMobile.classList.toggle('open');
});

for (const menuItem of menuItems) {
  // scrolling and closing the burger on click
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();
    
    const attrubite = menuItem.dataset.href;
    const elem = document.querySelector(attrubite);
    
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // if the burger is open then close it
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    }
  });
}

for (const swipperBtn of swipperBtns) {
  // slider
  swipperBtn.addEventListener('click', function () {
    for (const person of teams) {
      if (swipperBtn.dataset.swipe === person.dataset.swipe) {
        teams.forEach(function (teamPerson) {
          teamPerson.classList.remove('active');
        });
        swipperBtns.forEach(function (btn) {
          btn.classList.remove('active');
        });
        person.classList.add('active');
        swipperBtn.classList.add('active');
      }
    }
  });
}
