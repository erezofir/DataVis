// GSAP Animation
gsap.registerPlugin(MotionPathPlugin);

const icons = document.querySelectorAll(".icon");
icons.forEach((icon, index) => {
  const angle = (index / icons.length) * 360; // Calculate initial position
  gsap.to(icon, {
    motionPath: {
      path: ".orbit-path",
      align: ".orbit-path",
      alignOrigin: [0.5, 0.5],
      start: angle / 360,
      end: (angle + 360) / 360,
    },
    duration: 12,
    repeat: -1,
    ease: "linear",
  });
});
