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
