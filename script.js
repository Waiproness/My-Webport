// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 20, // Space between slides
  loop: true, // Infinite loop
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
