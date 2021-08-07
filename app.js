import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    type: 'bullets',
  },
  autoplay: true,
});


const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const content = document.getElementById('content');
const iconOpen = document.getElementById('open')
const iconClose = document.getElementById('close')

burger.addEventListener('click', () => {
  const display =['block', ' '].includes(menu.style.display);
  if (display) {
    menu.style.display = 'none';
    content.style.display = 'block';
    iconOpen.style.display = 'block'
    iconClose.style.display = 'none'
  } else {
    menu.style.display = 'block';
    content.style.display = 'none';
    iconOpen.style.display = 'none'
    iconClose.style.display = 'block'
  }
});

