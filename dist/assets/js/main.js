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
      
      
      // const tabelements = [
      //   {
      //     id: 'monthTab',
      //     triggerEl: $('#month-tab'),
      //     targetEl: $('#month')
      //   },
      //   {
      //     id: 'yearTab',
      //     triggerEl: $('#year-tab'),
      //     targetEl: $('#year')
      //   }
      // ]
      // const options = {
      //   defaultTabId: 'yearTab',
      //   activeClasses: 'text-red-600',
      //   inactiveClasses: 'text-gray-500 ',
      //   onShow: () => {
      //     console.log('tab is shown');
      //   }
      // }
      // const tabs = new Tabs(tabelements, options);
      // tabs.show('yearTab');

    });

}(jQuery));