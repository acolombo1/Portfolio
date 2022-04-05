/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* Elements selection */
const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobilePortfolio = document.getElementById('mobile-portfolio');
const btnCross = document.getElementById('onlycross');
const btnCross2 = document.getElementById('onlycross2');
const menuItem = document.querySelectorAll('.list-item');
const toBlur = document.querySelectorAll('.blur');
const btnProject1 = document.getElementById('Project1-btn');

/* Events and their actions */
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
    toBlur[i].style = 'filter: none;';
  }
});
btnProject1.addEventListener('click', () => {
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});

/* Store Projects in Javascript objects */
const projects = {
  MultiPostStories: {
    name: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'img/Placeholder.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    linkLive: 'https://acolombo1.github.io/Portfolio/',
    linkSource: 'https://github.com/acolombo1/Portfolio/',
  },
  ProfessionalArt1: {
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'img/background.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  ProfessionalArt2: {
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'img/background.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
};
