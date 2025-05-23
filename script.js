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
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 5-20px
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random duration between 10-20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay so they don't all move at once
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        particles.appendChild(particle);
    }
}

// Initialize particles
createParticles();

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