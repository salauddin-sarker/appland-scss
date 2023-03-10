//  brand
$('.brand').slick({
    
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  infinate: true,
  pauseOnHover:false,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
})
$('.single-textimonial').slick({
    
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  nav: true,
  pauseOnHover:false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
});
 
 // owl-carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:2,
    loop:true,
    infinate: true,
    margin:40,
    speed: 4000,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
          dots: false
      },
      992:{
          items:2,
      }
  }
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })

        // wow js init
        new WOW().init();
        // counterUp-js
        $('.stat-number').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                step: function (func) {
                    $(this).text(parseFloat(func).toFixed(size));
                }
            });
        });



// mobile bar bootstrap
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let changeIcon =function(icon){
  icon.classList.toggle('fa-times')
}


// video-overly

function bgoverlyFunction1() {
  document.getElementById("bg-over1").style.display = "none";
}
function bgoverlyFunction2() {
  document.getElementById("bg-over2").style.display = "none";
}
function bgoverlyFunction3() {
  document.getElementById("bg-over3").style.display = "none";
}



// video overly on click function


function videooverlyFunction() {
  document.getElementById("videobg").style.display = "none";
}


// scrollTop
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
// top-to-back
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// sticky-header
window.addEventListener('scroll',function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 100);
});
window.addEventListener('scroll',function(){
  const header2 = document.querySelector('header2');
  header2.classList.toggle("sticky-logo", window.scrollY > 100);
});
