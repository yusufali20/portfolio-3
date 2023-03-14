// =================js of  part (slick slide)=>>>>>>>>>>>>>>>>>
$('.ma_b').ripples({
  imageUrl: null,
  resolution: 356,
  dropRadius: 10,
  perturbance: 0.5,
  interactive: true, 
  crossOrigin: '',
  
});
// =================js of  part (slick slide)=>>>>>>>>>>>>>>>>>

// =================js of  part (destination scroll)=>>>>>>>>>>>>>>>>>
// let destination = document.querySelector('.image_move')
// window.addEventListener('scroll' function(){
//   let clientH = document.querySelector('.image_move').clientHeight;
//   let offsetH = document.querySelector('.image_move').offsetTop;
//   let img = this.document.querySelector('.img');
//   if(this.window.scrollY > offsetH-100){
//     img.style.left = `${clientH/7}px`
//   }
//   else if(this.window.scrollY < offsetH+100){
//     img.style.left = `${-clientH/7}px`
//   }
// })
// =================js of  part (destination scroll)=>>>>>>>>>>>>>>>>>

// =================js of journey part (slick slide)=>>>>>>>>>>>>>>>>>
$('.content_slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplayspeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// =================js of journey part (slick slide)=>>>>>>>>>>>>>>>>>

// =============js of contact part (button ripple hover effects)=>>>>>>>>>>>>>
let btn = document.querySelector('.btn_ripple');
btn.onmousemove = function(r){
  let x = r.pageX - btn.offsetLeft;
  let y = r.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}
// =============js of contact part (button ripple hover effects)=>>>>>>>>>>>>>