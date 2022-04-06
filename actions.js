/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

/* Store Projects in Javascript objects */
const projects = {
  MultiPostStories: {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/Portfolio1.png',
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
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

/* Write code to show 1st portfolio project programmatically */
const project = projects.MultiPostStories;
const mainnode = document.createElement('div');
mainnode.id = 'mobile-port-wrapper';
const nextnode = document.getElementById('firstpagewrapper'); // get node where to insert the new node before
document.body.insertBefore(mainnode, nextnode);
const node2 = document.createElement('div');
node2.id = 'mobile-portfolio';
mainnode.appendChild(node2);
const nodecross = document.createElement('div');
nodecross.id = 'onlycross2';
node2.appendChild(nodecross);
const nodecrossimg = document.createElement('img');
nodecrossimg.className = 'setpointer';
nodecrossimg.src = 'img/crossgrey.png';
nodecrossimg.alt = 'Close';
nodecrossimg.width = '40';
nodecrossimg.height = '40';
nodecross.appendChild(nodecrossimg);
const nodeh2 = document.createElement('h2');
nodeh2.className = 'h2mobilep';
nodeh2.innerHTML = project.name;
node2.appendChild(nodeh2);
const nodeul = document.createElement('ul');
nodeul.classList.add('boxed-words', 'marleft11');
node2.appendChild(nodeul);
for (let i = 0; i < project.technologies.length; i++) {
  const nodeli = document.createElement('li');
  nodeli.className = 'makesmaller';
  nodeli.innerHTML = project.technologies[i];
  nodeul.appendChild(nodeli);
}
const imagenode = document.createElement('img');
imagenode.id = 'tenimage';
imagenode.src = project.image;
imagenode.alt = 'Ten';
node2.appendChild(imagenode);
const pnode = document.createElement('p');
pnode.id = 'identifytext';
pnode.innerHTML = project.description;
node2.appendChild(pnode);
const buttondiv = document.createElement('div');
buttondiv.className = 'button-flex';
node2.appendChild(buttondiv);
const a2 = document.createElement('a');
a2.href = project.linkLive;
a2.className = 'live-btn';
a2.innerHTML = 'See Live <img src="img/liveIcon.png" alt="">';
buttondiv.appendChild(a2);
buttondiv.appendChild(document.createTextNode('\u00A0')); // create a nbsp textnode, and append it to buttondiv
const a3 = document.createElement('a');
a3.href = project.linkSource;
a3.className = 'live-btn';
a3.innerHTML = 'See Source <img src="img/GithubIcon.png" alt="">';
buttondiv.appendChild(a3);

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
