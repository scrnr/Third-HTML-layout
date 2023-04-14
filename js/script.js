const burger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.menu-mobile');
const menuItems = document.querySelectorAll('#href');
const swipperBtns = document.querySelectorAll('.team-swipper-btn');
const teams = document.querySelectorAll('.team-item');

// отображает меню при клике
burger.addEventListener('click', function () {
  menuMobile.classList.toggle('open');
});

for (const menuItem of menuItems) {
  // прокрутка и закрытие бургера при клике
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();
    // получение значения атрибута
    const attrubite = menuItem.dataset.href;
    const elem = document.querySelector(attrubite);
    // scroll к выбранному пункту
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // закрытие бургера, если открыто
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    }
  });
}

for (const swipperBtn of swipperBtns) {
  // отображение членов команды (слайдер)
  swipperBtn.addEventListener('click', function () {
    for (const person of teams) {
      if (swipperBtn.dataset.swipe === person.dataset.swipe) {
        // удаление классов active с неактуальных элементов
        teams.forEach(function (teamPerson) {
          teamPerson.classList.remove('active');
        });
        swipperBtns.forEach(function (btn) {
          btn.classList.remove('active');
        });
        // добавление класса active к актуальному элементу
        person.classList.add('active');
        swipperBtn.classList.add('active');
      }
    }
  });
}