
$(document).ready(function(){
	 $('.wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed:300,

    responsive: [
        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             arrows: false
          }
        }
      ]
});
});

