// Trigger falling animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".fall-animation");
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.2}s`; // Staggered effect
    });
  });
  