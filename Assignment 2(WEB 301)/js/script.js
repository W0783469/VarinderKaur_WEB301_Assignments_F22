$(document).ready(function () {
    /* Scrolls the scrollable area manually when you click on the button */
    $("#scroll-button").on("click", function () {
      $(".wide-scrolling-wrapper").scrollLeft(300);
    });
  
    /* Displays the amount the scrollable area has been scrolled horizontally */
    $(".wide-scrolling-wrapper").on("scroll", function() {
        let distance = $(this).scrollLeft();
      $("#scroll-distance").text(distance);
    });
  
    $("#mobile-hamburger").on("click", function () {
      $("nav").slideToggle();
    });
    // $(window).resize(function () {
    //     if ($(this).width() > 640) {
    //         $('nav').show();
    //     }
    // });
});
  