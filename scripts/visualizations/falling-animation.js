document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".fall-animation");
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.3}s`; // Staggered bounce
    });
  });