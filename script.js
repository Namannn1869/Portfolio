
  new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 5,     // 
    loop: true,
    speed: 850,
    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.6,
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1200: { slidesPerView: 5 },
    }
  });
