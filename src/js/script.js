$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
       /*  adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    arrows: false,
                    slides: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    dots: true,
                    arrows: false,
                    slides: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slides: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
  });