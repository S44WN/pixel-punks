/*=============== hidden menu stuff ===============*/
// menu animation stuff
var tl = gsap.timeline({ paused: "true" });

tl.to(".menu", {
  duration: 1,
  y: "0%",
  ease: Expo.easeInOut,
});

tl.fromTo(
  ".menu-item",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.15,
  }
);

function togglehm() {
  tl.play();
}
function togglec() {
  tl.reverse();
}

// preloder stuff
var tlpl = gsap.timeline({ paused: "true" });

tlpl.fromTo(
  ".preloader",
  {
    y: "0%",
    opacity: 1,
  },
  {
    duration: 2,
    opacity: 0.5,
    y: "-100%",
    stagger: 0.5,
    ease: Expo.easeInOut,
  }
);

const preloder = document.querySelector(".preloader");

window.addEventListener("load", function () {
  tlpl.play();
});
