// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navbar = document.querySelector('header');

    // Handle navbar transparency on scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    // Check on load and scroll
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLeft.classList.remove('active');
            navRight.classList.remove('active');
        });
    });

    // Handle mobile dropdowns
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const dropBtn = dropdown.querySelector('.dropbtn');

            dropBtn.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // Close other open dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        });
    }

    // Atelier gallery navigation
    // This is now for future implementation - could be a lightbox or mobile swipe functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn && nextBtn) {
        // For future implementation
        prevBtn.addEventListener('click', () => {
            console.log('Previous button clicked');
        });

        nextBtn.addEventListener('click', () => {
            console.log('Next button clicked');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add reveal animations on scroll
    const revealElements = document.querySelectorAll('.category-card');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;

            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Check on load and scroll
    window.addEventListener('load', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll);

    // Window resize handler to fix mobile menu issues
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLeft.classList.remove('active');
            navRight.classList.remove('active');

            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Handle newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput.value.trim() === '') {
                alert('Please enter your email address.');
                return;
            }

            // Simulate form submission success
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        });
    }

    // Handle club join form submission
    const clubForm = document.querySelector('.club-form');
    if (clubForm) {
        clubForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = clubForm.querySelector('input[type="email"]');

            if (emailInput.value.trim() === '') {
                alert('Please enter your email address to join the club.');
                return;
            }

            // Simulate form submission success
            alert('Thank you for joining our club! You will receive exclusive offers and updates soon.');
            clubForm.reset();
        });
    }
});