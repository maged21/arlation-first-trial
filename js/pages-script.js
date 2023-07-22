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

