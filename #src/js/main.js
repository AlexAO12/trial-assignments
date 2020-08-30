$(document).ready(function () {
    $('.product-subslider').slick({
        vertical: true,
        slidesToShow: 3,
        asNavFor: '.product-slider',
        draggable: false,
        swipe: true
    });
    $('.product-slider').slick({
        arrows: false,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.product-subslider',
        //vertical: true,
        //variableWidth: true,
    });
    // Initialize popup as usual
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });
});