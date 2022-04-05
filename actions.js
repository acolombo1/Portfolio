const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const btnCross = document.getElementById('onlycross');
const menuItem = document.querySelectorAll('.list-item');
btnHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});
btnCross.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
menuItem[0].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
menuItem[1].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
menuItem[2].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});