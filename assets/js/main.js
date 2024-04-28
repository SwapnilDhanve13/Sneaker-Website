/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER SNEAKERS ===============*/
let swiperImages = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 64,
    grabcursor: true,
    centeredSliders:true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  let swiperTitles = new Swiper('.home__titles', {
    loop: true,
    spaceBetween: 64,
    grabcursor: true,
    centeredSliders:true,
  })

  swiperImages.controller.control = swiperTitles
  swiperTitles.controller.control = swiperImages

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)

/*=============== CHANGE THEME ===============*/

const theme = document.getElementsByTagName('body')[0],
      sun = document.getElementsByClassName('ri-sun-fill')[0],
      moon = document.getElementsByClassName('ri-moon-fill')[0];
const am = document.getElementsByClassName('a'); // Get the body element
const navTheme = document.getElementById('nav'),
      header = document.getElementById('header'),
      button = document.getElementById('button'),
      mode = document.getElementById('theme-toggle');
const navText = document.getElementsByClassName('nav__link');
const social = document.getElementsByClassName('nav__social-link');


const changeTheme = () => {
  theme.classList.toggle('dark'); // Toggle the 'dark' class
  navTheme.classList.toggle('nav-dark');
  for (let i = 0; i < am.length; i++) {
    am[i].classList.toggle('a-dark');
  }
  if (header.id === 'header') {
    header.id = 'header-dark'; // Set the ID to 'dark' if it's currently 'light'
  } else {
    header.id = 'header'; // Set the ID to 'light' if it's currently 'dark'
  }
  if (button.id === 'button') {
    button.id = 'button-dark'; // Set the ID to 'dark' if it's currently 'light'
  } else {
    button.id = 'button'; // Set the ID to 'light' if it's currently 'dark'
  }
  if (window.innerWidth > 1150 && theme.classList.contains('dark')) {
    for (let i = 0; i < navText.length; i++) {
      navText[i].classList.toggle('nav-Text-dark');
    } // Change font color to white
    for(let i = 0;i < social.length;i++)
      social[i].classList.toggle('nav-link');
  }
  else{
    for (let i = 0; i < navText.length; i++) {
      navText[i].classList.toggle('nav-Text-dark');
    }
    for(let i = 0;i < social.length;i++)
      social[i].classList.toggle('nav-link');
  }
  if (moon.id === 'mode') {
    moon.id = ''; // Set the ID to 'dark' if it's currently 'light'
  } else {
    moon.id = 'mode'; // Set the ID to 'light' if it's currently 'dark'
  }
  if (sun.id === 'mode') {
    sun.id = ''; // Set the ID to 'dark' if it's currently 'light'
  } else {
    sun.id = 'mode'; // Set the ID to 'light' if it's currently 'dark'
  }
}

mode.addEventListener('click', changeTheme);