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


TweenMax.from('.banner_text h1', 1, {
  delay:0.8,
  opacity:0,
  x: -20,
  ease: Power3.easeInOut
})

TweenMax.from(".banner_text p", 1,{
  delay:1.2,
  opacity:0,
  x: 20,
  ease: Power3.easeInOut
})

TweenMax.from(".btn_group", 1,{
  delay:.8,
  opacity:0,
  y: -20,
  ease: Power3.easeInOut
})

TweenMax.from(".banner_img", 1,{
  delay:2.4,
  opacity:0,
  x: 600,
  ease: Power4.easeInOut
})

TweenMax.staggerFrom(".block_wrap .block", 1,{
  delay:1.5,
  opacity:0,
  x: -30,
  ease: Power4.easeInOut
}, 0.08)



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
document.addEventListener("DOMContentLoaded", function() {
    var secondNavbar = document.querySelector(".navbartwo");
  
    // Function to toggle the visibility of the second navbar
    function toggleSecondNavbar() {
      if (window.scrollY > 310) {
        secondNavbar.classList.add("show");
      } else {
        secondNavbar.classList.remove("show");
      }
    }
  
    // Listen for the scroll event and call the toggle function
    window.addEventListener("scroll", toggleSecondNavbar);
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

    function cursor() {

      $(window).on('mousemove', function (e) {

        // cursor coord
        let x = e.clientX;
        let y = e.clientY;
        
        // cursot pos
        $('.cursor').css({ left: x +'px', top: y + 'px' });
      });

      $('.accord-item').each(function() {

        $(this).mouseenter(function () {
            $('.cursor').addClass("active");
        });

        $(this).mouseleave(function () {
            $('.cursor').removeClass("active");
        });

      })
    }
    cursor();
})
// ------------------ services ends

// ------------------ clients start

var copy = document.querySelector(".clients-slide").cloneNode(true);
document.querySelector('.clients').appendChild(copy);

//  ------------------ clients start ends

// ------------------- achivements starts

    let nums = document.querySelectorAll(".content .num");
    let div = document.querySelector(".achievements");
    let started = false;

    nums.forEach((num) => startCount(num));

    // window.onscroll = function () {
    //     if (window.scrollY >= div.offsetTop) {
    //         if (!started) {
    //             nums.forEach((num) => startCount(num));
    //         }
    //         started = true;
    //     }
    // }

    function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal);
    }

// ------------------- achivements ends

// ------------------- scroll to top starts

let span = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}


