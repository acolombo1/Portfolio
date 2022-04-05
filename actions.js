/* eslint-disable no-plusplus */
const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobilePortfolio = document.getElementById('mobile-portfolio');
const btnCross = document.getElementById('onlycross');
const btnCross2 = document.getElementById('onlycross2');
const menuItem = document.querySelectorAll('.list-item');
const toBlur = document.querySelectorAll('.blur');
const btnProject1 = document.getElementById('Project1-btn');
btnHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});
btnCross.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}
btnCross2.addEventListener('click', () => {
  mobilePortfolio.style.display = 'none';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: none;'
  }
});
btnProject1.addEventListener('click', () => {
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);'
  }
});
