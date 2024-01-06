
$('.historical_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  centerMode:true,
  centerPadding: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

const swiperEl = document.querySelectorAll('swiper-container')
 swiperEl.forEach((item)=>{
  Object.assign(item, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  item.initialize();
 })
    



$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.test_speach').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows:false,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay:true
});


let menubar = document.querySelector('.menubutton')
let crossx = document.querySelector('.crossx')
let option = 0

 menubar.addEventListener('click', function(){
  if(option== 0){
    menubar.style.display="none"
    crossx.style.display = "block"
    option = 1
  }
else{
  menubar.style.display="block"
  crossx.style.display = "none"
  option = 0
}
  
})