const swiperHero = new Swiper(".hero_swiper", {
  slidesPerView: 1, //сколько показано слайдов
  loop: true,
  speed: 2000,

  navigation: {
    nextEl: '.hero-btn-right',
    prevEl: '.hero-btn-left',
  },

  autoplay: {
    delay: 8000,
  },

  pagination: {
    el: ".hero-pagination",
    clickable: true,
    loop: true,
    renderBullet: function (index, className) { //делаем пагинацию в виде цифр и с "0" перед каждой цифрой
      return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
    },
  },
});


const swiperPortfolio = new Swiper('.portfolio_swiper', {
    slidesPerView: 1, //сколько показано слайдов на телефоне
    spaceBetween: 15, //расстояние между слайдами
    loop: true,
  
    navigation: {
        nextEl: '.portfolio-btn-right',
        prevEl: '.portfolio-btn-left',
    },

    breakpoints: {
      481: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 28
      },
      768: {
        slidesPerView: 3
      }
    },
  });


const swiperClients = new Swiper('.swiper_clients', {
  slidesPerView: 1, //сколько показано слайдов
  loop: true,

  navigation: {
      nextEl: '.clients-btn-right',
      prevEl: '.clients-btn-left',
  },
});


const swiperProjects = new Swiper('.projects_swiper', {
  slidesPerView: 1, //сколько показано слайдов на телефоне
  spaceBetween: 15, //расстояние между слайдами
  loop: true,

  navigation: {
      nextEl: '.projects-btn-right',
      prevEl: '.projects-btn-left',
  },

  breakpoints: {
    481: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 28
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  },
});


const swiperWorkNav = new Swiper(".work_swiper_nav", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    577: {
      spaceBetween: 20
    }
  },
});
const swiperWork = new Swiper(".work_swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".work-btn-right",
    prevEl: ".work-btn-left",
  },
  thumbs: {
    swiper: swiperWorkNav,
  },
});


const swiperHistoryNav = new Swiper(".history_swiper_nav", {
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
});
const swiperHistory = new Swiper(".history_swiper", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".history-btn-right",
    prevEl: ".history-btn-left",
  },
  thumbs: {
    swiper: swiperHistoryNav,
  },
});