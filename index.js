function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}

// Close the menu when clicking outside or on a link
document.addEventListener('click', (event) => {
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Check if the click is outside the menu or on a link
    if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        navMenu.classList.remove('active'); // Remove the 'active' class
    }
});

// index.js

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // remove when out of view
        }
      });
    }, {
      threshold: 0.2
    });
  
    document.querySelectorAll('.lazy-load').forEach(section => {
      observer.observe(section);
    });
  });
  
  