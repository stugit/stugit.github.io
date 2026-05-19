// Smooth scroll navigation
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.nav-menu');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(42, 42, 62, 0.8)';
    } else {
        navbar.style.borderBottomColor = 'var(--border)';
    }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenuElement = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenuElement.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all skill bars
document.querySelectorAll('.skill-progress').forEach(el => {
    observer.observe(el);
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // You can integrate with a service like Formspree, EmailJS, etc.
        // For now, just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for buttons
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.classList.contains('btn-primary') ? '#projects' : '#about';
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const stars = document.querySelector('.stars');

window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
        stars.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Mobile menu close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuElement.classList.remove('active');
    });
});

console.log('Landing page loaded successfully! 🚀');
