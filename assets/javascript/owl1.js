jQuery(document).ready(function ($) {
    var owl = $("#carousel");
    owl.owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 3,
      loop: true,
      center: false,
      rewind: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      freeDrag: false,
      margin: 0,
      stagePadding: 0,
      merge: false,
      mergeFit: true,
      autoWidth: false,
      startPosition: 0,
      rtl: false,
      smartSpeed: 2000,
      fluidSpeed: false,
      dragEndSpeed: false,
      responsive: {
        0: {
          items: 1
          // nav: true
        },
        480: {
          items: 1,
          nav: false
        },
        768: {
          items: 3,
          // nav: true,
          loop: true
        },
        992: {
          items: 3,
          // nav: true,
          loop: true
        },
        1200: {
          items: 3,
          loop:true
        }
      },
      responsiveRefreshRate: 1000,
      responsiveBaseElement: window,
      fallbackEasing: "swing",
      info: false,
      nestedItemSelector: false,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
      autoHeight: false,
      lazyLoad: false
    });

    $(".next").click(function () {
      owl.trigger("owl.next");
    });
    $(".prev").click(function () {
      owl.trigger("owl.prev");
    });
  });