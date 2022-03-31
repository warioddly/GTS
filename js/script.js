$(function (){
    $('.new-slider').owlCarousel({
        nav: true,
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 2,
        margin: 26,
        navText: ["<img src='images/icons/arrow-left.svg'>","<img src='images/icons/arrow-right.svg'>"]
    });

    $('.goverment-links-slider').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 5,
        dotsEach: true,
    });
})

