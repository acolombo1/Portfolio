/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

/* Store Projects in Javascript objects */
const projects = {
  MultiPostStories: {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'img/Portfolio1.png',
    image2: 'img/Portfolio2.png',
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
    linkLive: 'https://acolombo1.github.io/Portfolio/',
    linkSource: 'https://github.com/acolombo1/Portfolio/',
  },
  ProfessionalArt1: {
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'img/background.png',
    image2: 'img/background.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
  ProfessionalArt2: {
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: 'img/background.png',
    image2: 'img/background.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLive: '#',
    linkSource: '#',
  },
};

/* Write code to show 1st portfolio project programmatically */
function createpopup(projectkey) {
  const project = projects[projectkey];
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
  nodeul.id = 'boxed-words1';
  nodeul.classList.add('boxed-words', 'marleft11');
  node2.appendChild(nodeul);
  for (let i = 0; i < project.technologies.length; i++) {
    const nodeli = document.createElement('li');
    nodeli.className = 'makesmaller';
    nodeli.innerHTML = project.technologies[i];
    nodeul.appendChild(nodeli);
  }
  const flexhoriz = document.createElement('div');
  flexhoriz.id = 'flexhoriz';
  node2.appendChild(flexhoriz);
  const imagenode = document.createElement('img');
  imagenode.id = 'tenimage';
  imagenode.alt = 'Ten';
  flexhoriz.appendChild(imagenode);
  const flexdiv = document.createElement('div');
  flexdiv.id = 'flexdiv';
  flexhoriz.appendChild(flexdiv);
  const pnode = document.createElement('p');
  pnode.id = 'identifytext';
  pnode.innerHTML = project.description;
  flexdiv.appendChild(pnode);
  const buttondiv = document.createElement('div');
  buttondiv.className = 'button-flex';
  flexdiv.appendChild(buttondiv);
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
  if (window.matchMedia('(max-width: 900px)').matches) {
    imagenode.src = project.image;
  } else {
    imagenode.src = project.image2;
    nodeh2.style.height = '42px';
    nodeh2.style.marginTop = '24px';
    nodeh2.style.paddingLeft = '24px';
    nodeul.style.marginLeft = '24px';
    flexhoriz.style.flexDirection = 'row';
    imagenode.style.margin = '20px 9px 27px 24px';
    pnode.style.marginTop = '20px';
    pnode.style.fontSize = '1.05rem';
    pnode.style.lineHeight = '1.875rem';
    node2.style.top = '112px';
    node2.style.left = '142px';
    node2.style.maxWidth = '1156px';
    node2.style.height = 'calc(100% - 112px)';
    buttondiv.style.justifyContent = 'left';
    buttondiv.style.margin = '10px 16px 27px 16px';
  }
}

function setpopup(projectkey) {
  const node2 = document.getElementById('mobile-portfolio');
  const project = projects[projectkey];
  const flexhoriz = document.getElementById('flexhoriz');
  const nodeh2 = document.querySelector('.h2mobilep');
  const nodeul = document.getElementById('boxed-words1');
  const imagenode = document.getElementById('tenimage');
  const pnode = document.getElementById('identifytext');
  const buttondiv = document.querySelector('.button-flex');
  for (let i = 0; i < project.technologies.length; i++) {
    const nodeli = document.querySelectorAll('.makesmaller');
    nodeli[i].innerHTML = project.technologies[i];
  }
  nodeh2.innerHTML = project.name;
  pnode.innerHTML = project.description;
  const a2 = document.querySelectorAll('.live-btn');
  a2[0].href = project.linkLive;
  a2[1].href = project.linkSource;
  if (window.matchMedia('(max-width: 900px)').matches) {
    imagenode.src = project.image;
    nodeh2.style.height = '82px';
    nodeh2.style.marginTop = '16px';
    nodeh2.style.paddingLeft = '16px';
    nodeul.style.marginLeft = '16px';
    flexhoriz.style.flexDirection = 'column';
    imagenode.style.margin = '10px 16px 20px 16px';
    imagenode.style.cssFloat = 'none';
    pnode.style.marginTop = '0';
    pnode.style.fontSize = '1.05rem';
    pnode.style.lineHeight = '1.5rem';
    node2.style.maxWidth = 'none';
    node2.style.top = '60px';
    node2.style.left = '16px';
    node2.style.height = 'calc(100% - 60px)';
    buttondiv.style.justifyContent = 'space-between';
  } else {
    imagenode.src = project.image2;
    nodeh2.style.height = '42px';
    nodeh2.style.marginTop = '24px';
    nodeh2.style.paddingLeft = '24px';
    nodeul.style.marginLeft = '24px';
    flexhoriz.style.flexDirection = 'row';
    imagenode.style.margin = '20px 9px 27px 24px';
    pnode.style.marginTop = '20px';
    pnode.style.fontSize = '1.05rem';
    pnode.style.lineHeight = '1.875rem';
    node2.style.top = '112px';
    node2.style.left = '142px';
    node2.style.maxWidth = '1156px';
    node2.style.height = 'calc(100% - 112px)';
    buttondiv.style.justifyContent = 'left';
    buttondiv.style.margin = '10px 16px 27px 16px';
  }
}

createpopup('MultiPostStories');

/* Elements selection for the event listeners and their actions */
const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobilePortfolio = document.getElementById('mobile-portfolio');
const btnCross = document.getElementById('onlycross');
const btnCross2 = document.getElementById('onlycross2');
const menuItem = document.querySelectorAll('.list-item');
const toBlur = document.querySelectorAll('.blur');
const btnProject1 = document.getElementById('Project1-btn');
const btnProject2 = document.getElementById('Project2-btn');
const btnProject3 = document.getElementById('Project3-btn');
const btnProject4 = document.getElementById('Project4-btn');
const btnProject5 = document.getElementById('Project5-btn');
const btnProject6 = document.getElementById('Project6-btn');
const btnProject7 = document.getElementById('Project7-btn');

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
  setpopup('MultiPostStories');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject2.addEventListener('click', () => {
  setpopup('ProfessionalArt1');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject3.addEventListener('click', () => {
  setpopup('ProfessionalArt2');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject4.addEventListener('click', () => {
  setpopup('ProfessionalArt2');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject5.addEventListener('click', () => {
  setpopup('ProfessionalArt2');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject6.addEventListener('click', () => {
  setpopup('ProfessionalArt2');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});
btnProject7.addEventListener('click', () => {
  setpopup('ProfessionalArt2');
  mobilePortfolio.style.display = 'block';
  for (let i = 0; i < toBlur.length; i++) {
    toBlur[i].style = 'filter: blur(5px);';
  }
});

/* Form validation */
const form = document.getElementById('myform');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formvalidmsg = document.getElementById('formvalidmsg');

function isValidEmail(email) {
  const regexValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexValidate.test(String(email).toLowerCase());
}

function storedata() {
  const data = { Name: fullname.value, Email: email.value, Message: message.value };
  localStorage.setItem('data', JSON.stringify(data));
}

function retrievedata() {
  if (localStorage.getItem('data') != null) {
    const data = JSON.parse(localStorage.getItem('data'));
    fullname.value = data.Name;
    email.value = data.Email;
    message.value = data.Message;
  }
}

window.addEventListener('load', retrievedata);

// eslint-disable-next-line no-unused-vars
fullname.addEventListener('input', (event) => {
  if (fullname.validity.valid) {
    formvalidmsg.innerHTML = '';
    formvalidmsg.style.backgroundColor = 'white';
    formvalidmsg.style.borderColor = 'white';
    fullname.style.backgroundColor = 'rgb(215, 255, 215)';
    fullname.style.borderColor = 'rgb(215, 255, 215)';
  } else {
    formvalidmsg.innerHTML = 'Name should be 2 to 30 characters long!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    fullname.style.backgroundColor = 'rgb(255, 204, 204)';
    fullname.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

// eslint-disable-next-line no-unused-vars
email.addEventListener('input', (event) => {
  if (isValidEmail(email.value)) {
    if (/[A-Z]/.test(email.value)) {
      formvalidmsg.innerHTML = 'Email should be all lowercase!';
      formvalidmsg.style.backgroundColor = '#ffd2d2';
      formvalidmsg.style.borderColor = '#ffd2d2';
      email.style.backgroundColor = 'rgb(255, 204, 204)';
      email.style.borderColor = 'rgb(255, 204, 204)';
    } else {
      formvalidmsg.innerHTML = '';
      formvalidmsg.style.backgroundColor = 'white';
      formvalidmsg.style.borderColor = 'white';
      email.style.backgroundColor = 'rgb(215, 255, 215)';
      email.style.borderColor = 'rgb(215, 255, 215)';
    }
  } else {
    formvalidmsg.innerHTML = 'Email is not in a valid format!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

// eslint-disable-next-line no-unused-vars
message.addEventListener('input', (event) => {
  if (message.validity.valid) {
    formvalidmsg.innerHTML = '';
    formvalidmsg.style.backgroundColor = 'white';
    formvalidmsg.style.borderColor = 'white';
    message.style.backgroundColor = 'rgb(215, 255, 215)';
    message.style.borderColor = 'rgb(215, 255, 215)';
  } else {
    formvalidmsg.innerHTML = 'Message should be 1 to 500 characters long!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    message.style.backgroundColor = 'rgb(255, 204, 204)';
    message.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

form.addEventListener('submit', (event) => {
  if (!message.validity.valid) {
    formvalidmsg.innerHTML = 'Message should be 1 to 500 characters long!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    message.style.backgroundColor = 'rgb(255, 204, 204)';
    message.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      message.scrollIntoView();
    }
    event.preventDefault();
  }
  if (!isValidEmail(email.value)) {
    formvalidmsg.innerHTML = 'Email is not in a valid format!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      email.scrollIntoView();
      window.scrollBy(0, -35);
    }
    event.preventDefault();
  } else if (/[A-Z]/.test(email.value)) {
    formvalidmsg.innerHTML = 'Email should be all lowercase!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      email.scrollIntoView();
      window.scrollBy(0, -35);
    }
    event.preventDefault();
  }
  if (!fullname.validity.valid) {
    formvalidmsg.innerHTML = 'Name should be 2 to 30 characters long!';
    formvalidmsg.style.backgroundColor = '#ffd2d2';
    formvalidmsg.style.borderColor = '#ffd2d2';
    fullname.style.backgroundColor = 'rgb(255, 204, 204)';
    fullname.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      fullname.scrollIntoView();
      window.scrollBy(0, -70);
    }
    event.preventDefault();
  }
  storedata();
});
