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
