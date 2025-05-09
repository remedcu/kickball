// Show loader until page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for all images to load
    const loader = document.querySelector('.loader');
    
    if (loader) {
        // Hide loader when page is ready
        window.addEventListener('load', function() {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
    }
    
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
        
        // Close menu when a navigation item is clicked
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('show');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Adding animation classes to cards when scrolling into view
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const backToTopButton = document.getElementById('back-to-top');
    
    function checkVisibility() {
        // Animate cards as they come into view
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = 
                rect.top >= 0 && 
                rect.top <= (window.innerHeight || document.documentElement.clientHeight);
            
            if (isVisible) {
                card.classList.add('animate');
            }
        });
        
        // Show/hide back to top button
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Back to top button functionality
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Check on load
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});
