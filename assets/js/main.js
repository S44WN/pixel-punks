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

tl.fromTo(
  ".hnav__btn",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.015,
  }
);

function togglehm() {
  tl.play();
}
function togglec() {
  tl.reverse();
}
