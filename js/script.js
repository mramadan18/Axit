$(function () {
  // Scroll Function
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    // Show Button Scroll Top
    $(window).scrollTop() >= 400
      ? $(".scroll-top").fadeIn()
      : $(".scroll-top").fadeOut();
    // Loop Navbar Links
    $(".scroll").each(function () {
      // Add Class Active
      if ($(window).scrollTop() > $(this).offset().top) {
        $("nav .navbar-nav .nav-link[data-link='" + $(this).attr("id") + "']")
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else if ($(window).scrollTop() < $(".header").offset().top) {
        // Add Class Active on Header
        $("nav .navbar-nav .nav-link")
          .eq(0)
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else if ($(window).scrollTop() == 5162) {
        // Add Class Active on Header
        $("nav .navbar-nav .nav-link")
          .eq(4)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  });

  $(".header").css({
    marginTop: $(".navbar").height() + "px",
  });

  $("nav .navbar-nav .nav-link").on("click", function (e) {
    e.preventDefault();

    $(this).addClass("active").siblings().removeClass("active");

    $("html, body").animate(
      {
        scrollTop: $("." + $(this).data("link")).offset().top,
      },
      1000
    );
  });
  // Click Button Scroll Top Equal 0
  $(".scroll-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // FadeOut Loading Page
  $(window).on("load", function () {
    $(".loading").fadeOut(1000);

    $("body").css({
      overflow: "auto",
    });
  });
});
