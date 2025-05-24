// Timer countdown functionality
// Simulates the 10-minute countdown to reinforce the speed promise
let minutes = 10;
let seconds = 0;
const timerDisplay = document.querySelector('.timer-display');

function updateTimer() {
    // Decrement seconds
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    
    // Reset to 10:00 when timer reaches 0
    if (minutes < 0) {
        minutes = 10;
        seconds = 0;
    }

    // Format and display time
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create animated particles in the header
function createParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    
    const particleCount = 25; // Increased particle count
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Varied particle types
        const particleType = Math.floor(Math.random() * 3);
        if (particleType === 0) {
            // Circle particles
            const size = Math.random() * 15 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.borderRadius = '50%';
            particle.style.background = `rgba(${16 + Math.random() * 20}, ${185 + Math.random() * 30}, ${129 + Math.random() * 30}, ${0.1 + Math.random() * 0.3})`;
        } else if (particleType === 1) {
            // Square particles with rotation
            const size = Math.random() * 12 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`;
            particle.style.transform = `rotate(${Math.random() * 45}deg)`;
        } else {
            // Line particles
            const width = Math.random() * 2 + 1;
            const height = Math.random() * 30 + 10;
            particle.style.width = `${width}px`;
            particle.style.height = `${height}px`;
            particle.style.background = `rgba(${16 + Math.random() * 20}, ${185 + Math.random() * 30}, ${129 + Math.random() * 30}, ${0.05 + Math.random() * 0.1})`;
        }
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random duration between 10-25s
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay so they don't all move at once
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        // Random opacity
        particle.style.opacity = 0.1 + Math.random() * 0.5;
        
        particles.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add floating effect to highlighted elements
function addFloatingEffect() {
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach((highlight, index) => {
        // Add a slight floating animation with different delays
        highlight.style.animation = `float ${2 + index * 0.5}s ease-in-out infinite alternate`;
        highlight.style.animationDelay = `${index * 0.2}s`;
    });
}

// Call floating effect function
addFloatingEffect();

// Enhance timer display
function enhanceTimerDisplay() {
    const timerDisplay = document.querySelector('.timer-display');
    if (!timerDisplay) return;
    
    // Add a pulsing border effect
    setInterval(() => {
        timerDisplay.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.7)';
        
        setTimeout(() => {
            timerDisplay.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.3)';
        }, 500);
    }, 2000);
}

// Call timer enhancement
enhanceTimerDisplay();

// Animate brand logos on scroll
function animateOnScroll() {
    // Get all sections that should be animated
    const sections = document.querySelectorAll('.trusted-brands, .tech-stack, .features, .contact');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If section is in viewport
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
            
            // If it's the brands section, animate each logo
            if (section.classList.contains('trusted-brands')) {
                const logos = section.querySelectorAll('.brand-logo');
                logos.forEach((logo, index) => {
                    setTimeout(() => {
                        logo.classList.add('visible');
                    }, index * 100); // Stagger animation
                });
            }
            
            // If it's the tech section, animate each tech item
            if (section.classList.contains('tech-stack')) {
                const techItems = section.querySelectorAll('.tech-item');
                techItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100); // Stagger animation
                });
            }
        }
    });
}

// Call animation function on scroll
window.addEventListener('scroll', animateOnScroll);
// Call it once on page load to animate elements already in view
window.addEventListener('load', animateOnScroll);

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.statistics');
    
    if (!statsSection) return;
    
    let animated = false;
    
    function startCounting() {
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If section is in viewport and not already animated
        if (sectionTop < windowHeight * 0.8 && !animated) {
            animated = true;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds duration
                const startTime = performance.now();
                
                function updateCounter(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    // Use easeOutExpo function for smoother animation
                    const easedProgress = 1 - Math.pow(1 - progress, 3);
                    
                    // Calculate current count
                    let currentCount = Math.floor(easedProgress * target);
                    
                    // Format number with commas for thousands
                    counter.textContent = currentCount.toLocaleString();
                    
                    // Continue animation if not complete
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }
                
                requestAnimationFrame(updateCounter);
            });
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', startCounting);
    // Check on load
    window.addEventListener('load', startCounting);
}

// Initialize counter animation
animateCounters();

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real app, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Skip links that don't actually link to anything
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Scroll to element
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});