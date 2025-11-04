/**
 * Ternity Education Website - Interactive Behaviors
 * Handles animations, scroll effects, and user interactions
 */

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Debounce function to limit event handler calls
 */
function debounce(func, wait = 10) {
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

/**
 * Check if element is in viewport
 */
function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0
    );
}

/**
 * Animate number counter
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// =============================================================================
// Navigation Functionality
// =============================================================================

const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

/**
 * Handle navigation scroll behavior
 */
function handleNavScroll() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/**
 * Smooth scroll to section
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Mobile menu button click
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Mobile menu link clicks
mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        closeMobileMenu();
        setTimeout(() => smoothScroll(target), 300);
    });
});

// Desktop nav link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            smoothScroll(link.getAttribute('href'));
        }
    });
});

// Listen for scroll events
window.addEventListener('scroll', debounce(() => {
    handleNavScroll();
    updateActiveNavLink();
}, 10));

// =============================================================================
// Stats Counter Animation
// =============================================================================

const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;

    const statsSection = document.querySelector('.stats-grid');
    if (!statsSection || !isInViewport(statsSection)) return;

    statsAnimated = true;

    statNumbers.forEach((stat, index) => {
        const parent = stat.closest('.stat-item');
        setTimeout(() => {
            parent.classList.add('visible');
            const target = parseInt(stat.getAttribute('data-count'));
            animateCounter(stat, target);
        }, index * 200);
    });
}

// =============================================================================
// Chart Line Drawing Animation
// =============================================================================

const chartLines = document.querySelectorAll('.chart-line');
let chartAnimated = false;

function animateChart() {
    if (chartAnimated) return;

    const chart = document.querySelector('.simple-chart');
    if (!chart || !isInViewport(chart)) return;

    chartAnimated = true;

    chartLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('animate');
        }, index * 500);
    });
}

// =============================================================================
// Timeline Animation
// =============================================================================

const timelineSteps = document.querySelectorAll('.timeline-step');
const timelineLine = document.querySelector('.timeline-line');
let timelineAnimated = false;

function animateTimeline() {
    if (timelineAnimated) return;

    const timeline = document.querySelector('.timeline');
    if (!timeline || !isInViewport(timeline)) return;

    timelineAnimated = true;

    // Animate the connecting line
    if (timelineLine) {
        timelineLine.classList.add('animate');
    }

    // Animate each step
    timelineSteps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('visible');
        }, index * 200 + 500); // Start after line animation
    });
}

// =============================================================================
// Credentials List Animation
// =============================================================================

const credentialItems = document.querySelectorAll('.credential-item');
let credentialsAnimated = false;

function animateCredentials() {
    if (credentialsAnimated) return;

    const credentialsList = document.querySelector('.credentials-list');
    if (!credentialsList || !isInViewport(credentialsList)) return;

    credentialsAnimated = true;

    credentialItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 150);
    });
}

// =============================================================================
// Floating CTA Visibility
// =============================================================================

const floatingCta = document.getElementById('floatingCta');
const bookSection = document.getElementById('book');
let lastScrollTop = 0;

function handleFloatingCta() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroSection = document.getElementById('home');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    // Show after hero section, hide when booking section is visible
    if (scrollTop > heroBottom && !isInViewport(bookSection, 200)) {
        // Only show when scrolling down
        if (scrollTop > lastScrollTop) {
            floatingCta.classList.add('visible');
        }
    } else {
        floatingCta.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
}

// =============================================================================
// Form Handling
// =============================================================================

const bookingForm = document.getElementById('bookingForm');

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    // Show loading state
    const submitButton = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success state
        submitButton.textContent = '✓ Message Sent!';
        submitButton.style.backgroundColor = '#34D399';

        // Reset form
        setTimeout(() => {
            bookingForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '';

            // Show thank you message or redirect
            alert('Thank you for your interest! We\'ll be in touch soon.');
        }, 2000);
    }, 1500);
}

if (bookingForm) {
    bookingForm.addEventListener('submit', handleFormSubmit);
}

// =============================================================================
// Parallax Effect for Hero Background
// =============================================================================

const heroBackground = document.querySelector('.hero-background');

function handleParallax() {
    if (!heroBackground) return;

    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3; // Parallax speed

    heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
}

// =============================================================================
// Mouse Tracking for Hero (Optional subtle effect)
// =============================================================================

const heroContent = document.querySelector('.hero-content');

function handleMouseMove(e) {
    if (window.innerWidth < 768) return; // Disable on mobile

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 20; // Max 20px movement
    const yPos = (clientY / innerHeight - 0.5) * 20;

    if (heroBackground) {
        heroBackground.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
}

// =============================================================================
// Main Scroll Handler
// =============================================================================

function handleScroll() {
    animateStats();
    animateChart();
    animateTimeline();
    animateCredentials();
    handleFloatingCta();
    handleParallax();
}

// =============================================================================
// Intersection Observer for Better Performance
// =============================================================================

if ('IntersectionObserver' in window) {
    // Observe sections for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections with animations
    document.querySelectorAll('.stat-item, .credential-item, .timeline-step').forEach(el => {
        observer.observe(el);
    });
}

// =============================================================================
// Event Listeners
// =============================================================================

// Scroll events
window.addEventListener('scroll', debounce(handleScroll, 10));

// Mouse move for parallax (only on hero section)
document.addEventListener('mousemove', debounce((e) => {
    if (window.scrollY < window.innerHeight) {
        handleMouseMove(e);
    }
}, 20));

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}, 250));

// =============================================================================
// Page Load Initialization
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial nav state
    handleNavScroll();
    updateActiveNavLink();

    // Check if any sections are already in viewport
    handleScroll();

    // Add loaded class to body for CSS transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Log for debugging
    console.log('Ternity Education website loaded successfully!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations if needed
    } else {
        // Resume animations
        handleScroll();
    }
});

// =============================================================================
// Handle browser back/forward navigation
// =============================================================================

window.addEventListener('popstate', () => {
    updateActiveNavLink();
});

// =============================================================================
// Prevent FOUC (Flash of Unstyled Content)
// =============================================================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// =============================================================================
// Accessibility Enhancements
// =============================================================================

// Add keyboard navigation for cards
const cards = document.querySelectorAll('.solution-card');
cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('.card-link');
            if (link) link.click();
        }
    });
});

// Handle focus for skip links
const skipLink = document.querySelector('a[href^="#"]');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
            target.setAttribute('tabindex', '-1');
            target.focus();
        }
    });
}

// =============================================================================
// Performance Monitoring (for development)
// =============================================================================

if ('PerformanceObserver' in window) {
    try {
        // Monitor Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
            });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
        // Fail silently
    }
}

// =============================================================================
// Export functions for testing (if needed)
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        isInViewport,
        animateCounter,
        smoothScroll
    };
}
