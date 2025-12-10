// ==================== Theme Toggle ==================== */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
});

function initializeTheme() {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ==================== Mobile Navigation Toggle ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu && navMenu.contains(event.target);
        const isClickOnHamburger = hamburger && hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Update active nav link based on current page
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').split('/').pop();

        if (href === currentLocation ||
            (currentLocation === '' && href === 'index.html') ||
            (currentLocation.startsWith('project-') && link.getAttribute('href') === 'index.html')) {
            // Only mark as active if it's the exact match or home page
            if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        }
    });
}

// ==================== Contact Form Handling ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email', 'error');
                return;
            }

            // Create mailto link
            const mailtoLink = `mailto:rafael@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

            // Open mailto
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Opening your email client...', 'success');

            // Reset form
            contactForm.reset();

            // Clear success message after 3 seconds
            setTimeout(() => {
                clearNotification();
            }, 3000);
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    clearNotification();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    // Set colors based on type
    if (type === 'success') {
        notification.style.background = '#00b894';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.background = '#e17055';
        notification.style.color = 'white';
    } else {
        notification.style.background = '#6c5ce7';
        notification.style.color = 'white';
    }

    document.body.appendChild(notification);
}

function clearNotification() {
    const notification = document.querySelector('.notification');
    if (notification) {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== Smooth Scroll Enhancement ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offset = 70; // navbar height
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Intersection Observer for Animations ==================== */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Add animation
    const animStyle = document.createElement('style');
    animStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animStyle);
}

document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// ==================== Parallax Effect ==================== */
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage && window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==================== Performance: Lazy Load Images ==================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Back to Top Button ==================== */
window.addEventListener('scroll', function() {
    // Create back to top button if it doesn't exist
    let backToTop = document.getElementById('backToTop');
    if (!backToTop && window.pageYOffset > 300) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToTop';
        backToTop.innerHTML = '↑';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #6c5ce7;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 24px;
            z-index: 999;
            opacity: 0;
            transition: all 0.3s ease;
            animation: fadeIn 0.3s ease forwards;
        `;

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(backToTop);
    } else if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    }
});

// ==================== Utility Functions ==================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== Print Styles Support ==================== */
window.addEventListener('beforeprint', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

window.addEventListener('afterprint', function() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
});

console.log('Portfolio site loaded successfully!');
