// ---------------- hero section
TweenMax.from(".navbar-brand", 1,{
  delay:.5,
  opacity:0,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".navbar-nav .nav-item", 1,{
  delay:.5,
  opacity:0,
  x: -20,
  ease: Power3.easeInOut
}, 0.12)

TweenMax.from(".head-text", 1,{
  delay:1.3,
  opacity:0,
  y: -20,
  ease: Power4.easeIn
})

TweenMax.from(".head-p", 1,{
  delay:1.5,
  opacity:0,
  y: 20,
  ease: Power4.easeIn
})

TweenMax.from(".btn_group", 1,{
  delay:2,
  opacity:0,
  y: 20,
  ease: Power3.easeInOut
})



// ---------------- second navbar

const tl = gsap.timeline({ paused: true });

const animateOpenNav = () => {
    tl.to("#navtwo-container", {
        duration: 0.2,
        autoAlpha: 1,
        delay: 0.1,
    });

    tl.to(".site-logo", {
        duration: 0.2,
        color: "#fff"
    },
    "-=0.1"
    );
};

const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById("menu-toggle-btn");
    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());

    };
};

openNav();

tl.from(".nvtwo > div", {
    duration: 0.4,
    opacity: 0,
    y: 10,
    stagger: {
        amount: 0.04,
    },
});

tl.to(".navtwo-link > a", {
    duration: 0.8,
    top: 0,
    ease: "power2.inOut",
    stagger: {
        amount: 0.1
    },
},
"-=0.4"
);

tl.from(".nav-footer", {
    duration: 0.3,
    opacity: 0
}, "-=0.5").reverse();


// Wait for the document to be fully loaded
let prevScrollPos = 0;

function toggleSecondNavbar() {
  const scrollPosition = scrollContainer.scrollTop;
  const secondNavbar = document.querySelector(".navbartwo");

  if (scrollPosition === 0) {
    secondNavbar.classList.remove("show");
  } else if (scrollPosition > prevScrollPos) {
    secondNavbar.classList.remove("show");
  } else {
    secondNavbar.classList.add("show");
  }

  prevScrollPos = scrollPosition;
}

// Listen for the scroll event on the window object
window.addEventListener("scroll", toggleSecondNavbar);
// Initialize the scrollContainer variable
const scrollContainer = document.querySelector(".scroll-container");

// Listen for the scroll event on the scroll container
scrollContainer.addEventListener("scroll", toggleSecondNavbar);

// ---------------- second navbar ends



// ---------------- about section
const counterUp = window.counterUp.default

const callback = entries => {
  entries.forEach( entry => {
    const el = entry.target
    if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
      counterUp( el, {
        duration: 2000,
        delay: 16,
      } )
      el.classList.add( 'is-visible' )
    }
  } )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const elements = document.querySelectorAll('.counter');
elements.forEach((el) => {
  IO.observe(el);
});


// ---------------- about section ends
// ---------------- start testimonial
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// ---------------- start services

$(function () {

    'use strict';

    function accordion() {

        $('.accord .accord-item').on('click', function() {
            const timeAnim = 400;
            $('.accord .accord-item').removeClass("active").css({'pointer-events':'auto'});
            $(this).addClass("active").css({'pointer-events':'none'});
            $('.accord .accord-header').next().slideUp(timeAnim);
            $(this).find('.accord-header').next().slideDown(timeAnim);

            $('.accord-img').removeClass("active");
            let id = $(this).data('id');
            $('#' + id + '-img').addClass("active");
        })
    }
    accordion();

})
// ------------------ services ends




// ------------------ scroll to top starts

const span = document.querySelector(".up");

scrollContainer.addEventListener("scroll", function () {
  this.scrollTop >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
});

span.addEventListener("click", function () {
  scrollContainer.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

