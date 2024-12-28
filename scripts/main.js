// Check saved preference
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
  
    typeEffect(); // Start typing effect
  });
  
// Dark Mode Toggle
document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class
  
    // Save dark mode preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
  
  // Load saved dark mode preference on page load
  window.addEventListener("DOMContentLoaded", () => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });
  
  // Music Toggle
  const musicToggle = document.getElementById("toggle-music");
  let isPlaying = false;
  
  // Load audio file (place the file in 'assets/music/background.mp3')
  const audio = new Audio("assets/music/stuck-in-the-middle.mp3");
  
  // Music play/pause functionality
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause(); // Pause the music
    } else {
      audio.play(); // Play the music
    }
    isPlaying = !isPlaying; // Toggle play state
  });
  

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
