(function($){
   " use strict";
    $(document).ready(function(){
        
        //owl- carousel
        $('.homepage-slides').owlCarousel({
            items : 1,
            nav : true,
            loop : true,
            autoplay: false,
            dots : false,
            mouserDrag : false,
            touchDrag : false,
        });

        //animated on owl-carousel
        $('.homepage-slides').on('translate.owl.carousel',function(){
             $('.single-slide-item h2 , .single-slide-item p').removeClass('animated fadeInRight').css('opacity','0');
             $('.single-slide-item .slider-btn').addClass('animated fadeInDown').css('opacity','0');
        });
        $('.homepage-slides').on('translated.owl.carousel',function(){
             $('.single-slide-item h2 , .single-slide-item p').addClass('animated fadeInDown').css('opacity','1');
             $('.single-slide-item .slider-btn').addClass('animated fadeInRight').css('opacity','1');
        });
        
        
        //Magnific Popup
        $('.gallery_lightbox').magnificPopup({
            type : 'image',
             gallery: {
              enabled: true
            },
        });

      
        //wowjs
        new WOW().init();

        //slicknav
        $('ul#navigation').slicknav({
            prependTo : '.responsive-menu-wrap',
        });
        

    });

   
/*
   $(window).load(function(){
    $('.factorial-site-preloader-wrap').fadeOut(500);
   });*/

    
})(jQuery);