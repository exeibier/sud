/*!
 * SUD
 * Version - 1.0
 * Author: Vannelo - http://vannelo.com

*/


// GENERAL
    $(document).mouseup(function(e)
    {
        var container = $(".popup");
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $( ".popup" ).fadeOut();
        }
    });



// MENÚ

    $('.menu-scroll').on('click', function (e) {

        e.preventDefault();
        objetivo = $(this).attr('objetivo');

        $('html, body').animate({
            scrollTop: $('#' + objetivo).offset().top
        }, 500, 'linear');

        $( ".menu-lateral" ).animate({ "left": "-300px" }, "fast" );

    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".menu-desktop").addClass("scrolleado");
        } else {
            $(".menu-desktop").removeClass("scrolleado");
        }
    });
    $('.burguer').click(function () {
       $('.menu-hidden').slideToggle();
    });
    $('.menu-mobile a').click(function () {
        $('.menu-hidden').slideToggle();
    });

// GENERAL

    $('.slider-1').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.slider-2').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:6000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.slider-3').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:6000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.flechas .siguiente').click(function () {
       slider = $(this).attr('slider');
       $('.slider-'+slider+ ' .owl-next').click();
    });
    $('.flechas .anterior').click(function () {
        slider = $(this).attr('slider');
        $('.slider-'+slider+ ' .owl-prev').click();
    });





