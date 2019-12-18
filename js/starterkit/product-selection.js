$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
    vertical: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false
        }
      }
    ]
  });