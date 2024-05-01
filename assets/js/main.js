/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menuclass
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
// je commçerai par la logique de la fonction que j'appellerai
// appès attaché siute à un scroll event listenner ^_^
// la fonction du scroll header tributaire du nbre de pixel scrollé horizontalement -50px-
const scrollHeader = () => {
  const header = document.getElementById('header');
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
// l'appel de la fonction suite à un scroll event :
window.addEventListener('scroll', scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
  loop: true,
  spaceBetween: 24,
  SlidesPerView: 'auto',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    DynamicsBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

/* Link active featured */

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
