// find button
// find menu
// on button click - add / remove nav--opened from nav

const button = document.querySelector('.nav__toggler');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
  nav.classList.toggle('nav__list--opened');
});