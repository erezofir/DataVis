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
  
  // Toggle Dark Mode
  const toggleDarkMode = document.getElementById("toggle-dark-mode");
  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
  
  // Check if dark mode is saved in preferences
  window.addEventListener("DOMContentLoaded", () => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });
  
  // Music toggle
  const musicToggle = document.getElementById("toggle-music");
  let isPlaying = false;
  let audio = new Audio("assets/music/background.mp3");
  
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  });
  
  // Manage settings menu options
  let settingsMenuTimeout;
  const settingsMenu = document.querySelector(".settings-menu");
  const settingsOptions = document.querySelector(".settings-options");
  
  // Show options when hovering over the settings menu
  settingsMenu.addEventListener("mouseenter", () => {
    clearTimeout(settingsMenuTimeout); // Cancel any previous timer
    settingsOptions.classList.add("open");
  });
  
  // Hide options after a delay when leaving the settings menu
  settingsMenu.addEventListener("mouseleave", () => {
    settingsMenuTimeout = setTimeout(() => {
      settingsOptions.classList.remove("open");
    }, 2000); // Keep options open for 2 seconds
  });
  
  // Keep options open when hovering over them
  settingsOptions.addEventListener("mouseenter", () => {
    clearTimeout(settingsMenuTimeout); // Cancel the hide timer
  });
  
  settingsOptions.addEventListener("mouseleave", () => {
    settingsMenuTimeout = setTimeout(() => {
      settingsOptions.classList.remove("open");
    }, 2000); // Close options after 2 seconds if mouse leaves
  });
  