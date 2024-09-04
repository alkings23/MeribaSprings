document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to MERIBA HARDWARE!');
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll event for changing header style
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu toggle for mobile view
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Highlight active menu item based on scroll position
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active-link'));
            this.classList.add('active-link');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the menu for mobile view
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Toggle 'active' class
    });
});