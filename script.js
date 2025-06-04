  // НАЧАЛО скрипт initialization fancybox PHOTO-gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
      type: 'modern',
  },
  Toolbar: {
      display: {
          middle: ['flipX', 'flipY']
      },
  },
});
// КОНЕЦ скрипт fancybox PHOTO-gallery script end
  
  
  //  CodePen Home Expanding flex cards
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
  });
  //  CodePen Home Expanding flex cards  



// CodePen Home    Responsive Image Slider
// class Slider {
//   constructor(slider) {
//       this.slider = slider;
//       this.display = slider.querySelector(".image-display");
//       this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
//       this.prevButton = slider.querySelector(".prev-button");
//       this.nextButton = slider.querySelector(".next-button");
//       this.sliderNavigation = slider.querySelector(".slider-navigation");
//       this.currentSlideIndex = 0;
//       this.preloadedImages = {};

//       this.initialize();
//   }

//   initialize() {
//       this.setupSlider();
//       this.preloadImages();
//       this.eventListeners();
//   }

//   setupSlider() {
//       this.showSlide(this.currentSlideIndex);
//   }

//   showSlide(index) {
//       this.currentSlideIndex = index;
//       const navButtonImg = this.navButtons[
//           this.currentSlideIndex
//       ].querySelector("img");
//       if (navButtonImg) {
//           const imgClone = navButtonImg.cloneNode();
//           this.display.replaceChildren(imgClone);
//       }
//       this.updateNavButtons();
//   }

//   updateNavButtons() {
//       this.navButtons.forEach((button, buttonIndex) => {
//           const isSelected = buttonIndex === this.currentSlideIndex;
//           button.setAttribute("aria-selected", isSelected);
//           if (isSelected) button.focus();
//       });
//   }

//   preloadImages() {
//       this.navButtons.forEach((button) => {
//           const imgElement = button.querySelector("img");
//           if (imgElement) {
//               const imgSrc = imgElement.src;
//               if (!this.preloadedImages[imgSrc]) {
//                   this.preloadedImages[imgSrc] = new Image();
//                   this.preloadedImages[imgSrc].src = imgSrc;
//               }
//           }
//       });
//   }

//   eventListeners() {
//       document.addEventListener("keydown", (event) => {
//           this.handleAction(event.key);
//       });

//       this.sliderNavigation.addEventListener("click", (event) => {
//           const targetButton = event.target.closest(".nav-button");
//           const index = targetButton
//               ? this.navButtons.indexOf(targetButton)
//               : -1;
//           if (index !== -1) {
//               this.showSlide(index);
//           }
//       });

//       this.prevButton.addEventListener("click", () =>
//           this.handleAction("prev")
//       );
//       this.nextButton.addEventListener("click", () =>
//           this.handleAction("next")
//       );
//   }

//   handleAction(action) {
//       if (action === "Home") {
//           this.currentSlideIndex = 0;
//       } else if (action === "End") {
//           this.currentSlideIndex = this.navButtons.length - 1;
//       } else if (action === "ArrowRight" || action === "next") {
//           this.currentSlideIndex =
//               (this.currentSlideIndex + 1) % this.navButtons.length;
//       } else if (action === "ArrowLeft" || action === "prev") {
//           this.currentSlideIndex =
//               (this.currentSlideIndex - 1 + this.navButtons.length) %
//               this.navButtons.length;
//       }

//       this.showSlide(this.currentSlideIndex);
//   }
// }

// const ImageSlider = new Slider(document.querySelector(".image-slider"));
// CodePen Home    Responsive Image Slider  


  
// НАЧАЛО секции VIDEO script start
// document.querySelectorAll('.video-link').forEach(links =>{
//     links.addEventListener('click', (a) =>{
//         a.preventDefault();
//         let src = links.getAttribute('href');
//         document.querySelector('.video').src = src;
//         // document.querySelector('.video').play();
//     });
// });
// КОНЕЦ секции VIDEO script end


// НАЧАЛО скрипт initialization fancybox PHOTO-gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
      type: 'modern',
  },
  Toolbar: {
      display: {
          middle: ['flipX', 'flipY']
      },
  },
});
// КОНЕЦ скрипт fancybox PHOTO-gallery script end


  // НАЧАЛО скрипт Video-gallery script start
  document.querySelectorAll('.video-link').forEach(links =>{
      links.addEventListener('click', (a) =>{
          a.preventDefault();
          let src = links.getAttribute('href');
          document.querySelector('.video').src = src;
          // document.querySelector('.video').play();
      });
  });
  // КОНЕЦ скрипт Video-gallery script end

//   //  CodePen Home Expanding flex cards
// $(".option").click(function(){
//   $(".option").removeClass("active");
//   $(this).addClass("active");
  
// });
// //  CodePen Home Expanding flex cards








  // НАЧАЛО скрипт Video-gallery script start
  // document.querySelectorAll('.video-link').forEach(links =>{
  //     links.addEventListener('click', (a) =>{
  //         a.preventDefault();
  //         let src = links.getAttribute('href');
  //         document.querySelector('.video').src = src;
      // document.querySelector('.video').play();
  //      });
  // });
  // КОНЕЦ скрипт Video-gallery script end


  $(document).ready(function () {

   
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
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    function updateScrollTop() {
        let offset = $(document).height() - $(window).height();
        path.style.strokeDashoffset = length_path - ($(window).scrollTop() * length_path) / offset;
    }

    updateScrollTop();
    $(window).scroll(updateScrollTop);
    // scroll top button script 
    

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



/* НАЧАЛО блока ПЕРЕЗАГРУЗКА loader script start */
function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 1500);
}

fadeOut();
/* КОНЕЦ блока ПЕРЕЗАГРУЗКА loader script end */



/* НАЧАЛО CodePen Home  Image Slider Effect Website script start */
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})
/* КОНЕЦ CodePen Home  Image Slider Effect Website script end */


// CodePen Home Card Carousel 

// CodePen Home Card Carousel 


