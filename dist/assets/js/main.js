(function ($) {
    "use strict";

    $(document).ready(function(){
      

      // home slider 

      const swiper = new Swiper(".home-slider", {
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        loop: true,
        speed: 500,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
      $(".home-slider").mouseenter(function () {
        swiper.autoplay.stop();
      });
      $(".home-slider").mouseleave(function () {
        swiper.autoplay.start();
      });

      // menu 

      $(window).scroll(function(){
        if ($(this).scrollTop() > 35) {
            $('.js-header').removeClass('absolute').addClass('fixed !mt-0 py-[32px] bg-gradient-to-r from-[#15333F] to-[#3E1238]');
            $('.js-logo').hide();
            $('.js-text-logo').show();
            
            // $('.js-text-logo').addClass('text-logo-anim');
            
            
        } else {
            $('.js-header').removeClass('fixed !mt-0 py-[32px] bg-gradient-to-r from-[#15333F] to-[#3E1238]').addClass('absolute');
            // $('.js-text-logo').removeClass('text-logo-anim');
            // $('.js-logo').removeClass('logo-anim');
            // $('.js-text-logo').removeClass('text-logo-anim');
            $('.js-logo').show();
            $('.js-text-logo').hide();
        }
      });



      $('.js-menu-bar').on('click', function() {
        $('.js-header-left').toggle();
        $('.js-header-right').toggle();
      });

      
      $('.js-mobile-menu-items li').each(function(idx, elm ) {
        const delay = idx * 0.05;
        $(this).css({'transitionDelay': `${delay}s`});
      });

      $('.js-menu-bar').on('click', function(){
        $('.js-mobile-menu').addClass('open');
      });
      $('.js-mobile-menu-close').on('click', function(){
        $('.js-mobile-menu').removeClass('open');
      });
      
      $(".js-header a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
          $('.js-mobile-menu').removeClass('open');
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - $('.js-header').outerHeight()
          }, {duration: 500, easing: "linear" }, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      
    });

}(jQuery));