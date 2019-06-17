(function ($) {
    "use strict";

    //Initialize Preloader
		$(window).on('load', function () {
			if ($(".pre-loader").length > 0) {
				$(".pre-loader").fadeOut("slow");
			}
		});


    //stiky
    $("#sticker").sticky({
        topSpacing: 0
    });

    // Dropdown 
    $('.dropdown-toggle').dropdown();

    
    // Progress_Bar_1
    var bar = new ProgressBar.Circle(progress1, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#9248e9',
        trailColor: 'tranperent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.9);

    // Progress_Bar_2
    var bar = new ProgressBar.Circle(progress2, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ff458a',
        trailColor: 'tranperent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.8);

    // Progress_Bar_3
    var bar = new ProgressBar.Circle(progress3, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#3a7dfd',
        trailColor: 'tranperent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.7);

    

    // RESUME_Carousel
    $('.carousel-one').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        dotsClass: "owl-dots dot-circle dot-secondary",
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // PORTFOLIO_Carousel
    $('.carousel-two').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
        margin: 50,
        center: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // PORTFOLIO_magnificPopup
    $(document).ready(function () {
        $('.carousel-two-img').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>Ukris</small>';
                }
            }
        });
    });

    // Progress_Bar-Count_Up
    $('.count_up').counterUp({
        delay: 10,
        time: 1000
    });

    // Count_Up
    $(document).ready(function () {
        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
            $("#progress5 .count_up_2").html(c + "k+");
            //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

            /*
            $(".loading-page .counter h1.color").css("width", c + "%");
            */
            counter++;
            c++;

            if (counter == 21) {
                clearInterval(i);
            }
        }, 100);
    });






})(jQuery);