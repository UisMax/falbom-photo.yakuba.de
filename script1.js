$(document).ready(function () {
  // navbar toggle
  $("#menu-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("active");
  });

  //   fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // typed text script
  let typed = new Typed(".typing-text", {
    strings: [
      "Physiotherapie",
      "Sportphysiotherapie",
      "EGYM",
      "YouTuber",
      "Photographer",
    ],
    typeSpeed: 120,
    loop: true,
  });

  // portfolio script
  $(".button").click(function () {
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".gallery-container .img").show(400);
    } else {
      $(".gallery-container .img")
        .not("." + filter)
        .hide(200);
      $(".gallery-container .img")
        .filter("." + filter)
        .show(400);
    }
  });

  // magnific-popup script

  $(".gallery-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // review slider script
  let swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  //    blog slider script
  let swiper1 = new Swiper(".blog-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  // scroll top button script
  $(window).on("scroll", function () {
    $(".scroll-top").toggleClass("show", $(window).scrollTop() >= 100);
  });

  $(".scroll-top").on("click", function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 1500);
  });

  let path = document.querySelector(".scroll-top path");
  let length_path = path.getTotalLength();
  path.style.strokeDasharray = length_path + " " + length_path;
  path.style.strokeDashoffset = length_path;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  function updateScrollTop() {
    let offset = $(document).height() - $(window).height();
    path.style.strokeDashoffset =
      length_path - ($(window).scrollTop() * length_path) / offset;
  }

  updateScrollTop();
  $(window).scroll(updateScrollTop);

  // scroll spy script
  let sections = $("section");

  $(window).on("scroll", function () {
    sections.each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");
      let height = $(this).height();

      if (top >= offset && top < offset + height) {
        $(".navbar a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
});




// телеграмм

$(document).ready(function () {
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage)
      .removeClass("inactive")
      .addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  }

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  }

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
});

// CodePen Home
// Skewed One Page Scroll

$(document).ready(function () {
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage)
      .removeClass("inactive")
      .addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  }

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  }

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
});
// CodePen Home  Skewed One Page Scroll

//  CodePen Home Expanding flex cards
$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});
//  CodePen Home Expanding flex cards

// CodePen Home  Card Mouse Hover Effect
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

// CodePen Home  Card Mouse Hover Effect
