'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////
// Lectures 
/* 
// (!) Selecting element
console.log(document.documentElement); // <html> element
console.log(document.head); // <head> element
console.log(document.body); // <body> element

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button') // Returns all elements stored in <button>
console.log(allButtons); // Html collection it's automatically updated

console.log(document.getElementsByClassName('btn'))

// (!) Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div') // creates element
message.classList.add('cookie-message')
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)

// (!) Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove()
  
  // Old way to remove elements
  // message.parentElement.removeChild(message)
})
*/
/* 
// Styles 
message.style.backgroundColor = '#37383d'
message.style.width = '100%'
console.log(message.style.width);
console.log(message.style.height);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height = parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('company', 'Bankist'));

console.log(logo.src); // => https://localhost:8080/img/logo.png
console.log(logo.getAttribute('src')); // => img/logo.png 

const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'd')
logo.classList.remove('c', 'd')
logo.classList.toggle('c')
logo.classList.contains('c') // not includes like in arrrays

// Dont use it because it overwrites the whole class property
logo.className = 'olegas' 
*/

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')


btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect()
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (x/y) ${window.pageXOffset} ${window.pageYOffset}`); // How much u scrolled from top of the document
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); // Shows current resolution of browser

  // Scrolling 
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset)

  /* 
  window.scrollTo({
    left: s1coords.left + window.pageXOffset, 
    top: s1coords.top + window.pageYOffset, 
    behavior: 'smooth'
  }) 
  */

  section1.scrollIntoView({behavior: 'smooth'})
})

/*
 // Select
const h1 = document.querySelector('h1')

// Function
const alerting = (e) => {
  console.log('addEventListener');
}

h1.addEventListener('mouseenter', alerting)
setTimeout(() => {
  h1.removeEventListener('mouseenter', alerting)
}, 3000);

// Old way
// h1.onmouseenter = (e) => {
//   alert('onmousenter!')
// }
 
*/