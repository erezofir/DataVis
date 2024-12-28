document.addEventListener("DOMContentLoaded", () => {
    const options = [
      "Students",
      "those preparing for a job interview",
      "developers who forgot the basics",
      "curious people :)",
      "educators looking for tools",
      "beginners taking their first steps",
      "anyone who loves data structures",
      "tech enthusiasts",
      "problem solvers at heart"
    ];
    const dynamicText = document.getElementById("dynamic-text");
    let currentOption = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeEffect() {
      const currentWord = options[currentOption];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
  
      dynamicText.textContent = currentWord.substring(0, charIndex);
  
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentOption = (currentOption + 1) % options.length; // Move to next word
      }
  
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  
    typeEffect();
  });
  