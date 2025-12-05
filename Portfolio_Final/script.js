// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .service-card, .timeline-item, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        const submitButton = this.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Message Sent! ✓';
            submitButton.style.background = '#4CAF50';

            // Reset form
            this.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);

            console.log('Form submitted:', data);
        }, 1500);
    });
}

// Projects hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill cards animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) rotate(2deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Uncomment to enable typing effect
    // typeWriter();
}

// Add parallax effect to hero sphere
window.addEventListener('scroll', () => {
    const sphere = document.querySelector('.sphere');
    if (sphere) {
        const scrolled = window.scrollY;
        sphere.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Initialize
console.log('Portfolio website loaded successfully!');
