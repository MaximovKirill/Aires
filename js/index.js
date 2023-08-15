// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
  },
});

//scroll
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
    });
  });
});

// скрытие соцсетей
let socialList = document.querySelector('.header__social');
if (socialList) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    let animItem = document.querySelector('.hero');
    let animItemHeight = animItem.offsetHeight;
    let animItemOffset = offset(animItem).top;
    let animStart = 4;
    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight -  window.innerHeight / animStart; 
    };
    if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
      socialList.classList.remove('no-active');
    } else {
      socialList.classList.add('no-active');
    };
  };
  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + screenTop, left: rect.left + scrollLeft}
  };
  setTimeout(() => {
    animOnScroll()
  }, 1000);
};

// burger
const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.nav__list');
const menuItems = document.querySelectorAll('.nav__item');
burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('header__burger_open');
  menu.classList.toggle('active-menu');
  document.querySelector('body').classList.toggle('overflow-hidden');
});
menuItems.forEach(elem => {
  elem.addEventListener('click', function() {
    burgerBtn.classList.remove('header__burger_open');
    menu.classList.remove('active-menu');
    document.querySelector('body').classList.remove('overflow-hidden');
  });
});




(() => {

  let albums = document.querySelectorAll('.media__album');
  let dialogs = document.querySelectorAll('.media__dialog');
  let closeBtns = document.querySelectorAll('.dialog__close');
  
  function closeOnBackDropClick({ currentTarget, target }) {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement
    if (isClickedOnBackDrop) {
      dialogElement.close();
      document.body.classList.remove("scroll-lock");
    };
  };

  for (let i = 0; i < albums.length; i++) {
    albums[i].addEventListener('click', () => {
      dialogs[i].showModal();
      document.body.classList.add("scroll-lock");
      closeBtns[i].addEventListener('click', () => {
        dialogs[i].close();
        document.body.classList.remove("scroll-lock");
      });
    });
    dialogs[i].addEventListener("click", closeOnBackDropClick);
  };

})();