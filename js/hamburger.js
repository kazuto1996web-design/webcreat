const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.header-wrap__navi');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});