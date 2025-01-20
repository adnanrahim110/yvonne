$(document).ready(function () {
  $('.reviews-slider').slick({
    infinite: true,
    cssEase: 'linear',
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('#year').text(new Date().getFullYear());
});
