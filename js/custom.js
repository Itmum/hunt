$(function() {
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    prevArrow: '<span><i class="fas fa-arrow-circle-left prv"></i></span>',
    nextArrow: '<span><i class="fas fa-arrow-circle-right nxt"></i></span>',
    slidesToShow: 1,
    adaptiveHeight: true
  });
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    vertical:true,
    verticalSwiping:true,
    prevArrow: '<span><i class="fas fa-angle-up up"></i></span>',
    nextArrow: '<span><i class="fas fa-angle-down down"></i></span>',
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    slidesToScoll:1,
    adaptiveHeight: true
  });
$('.client-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    vertical:true,
    verticalSwiping:true,
    prevArrow: '<span><i class="fas fa-angle-up client-up"></i></span>',
    nextArrow: '<span><i class="fas fa-angle-down client-down"></i></span>',
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    slidesToScoll:1,
    asNavFor:'.client-slider-2',
    adaptiveHeight: true
  });

  $('.client-slider-2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    adaptiveHeight: true,
    asNavFor:'.client-slider',
    arrows: false
  });

  //counterup starts
  $('.number-up').counterUp({
    delay: 10,
    time: 1000
});
//counterup ends

$('.sponsers').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: 0,
  autoplay: true
});
});