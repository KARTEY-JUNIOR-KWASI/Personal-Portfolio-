/* ========================================
   BIGJUU TECH PORTFOLIO - JAVASCRIPT
   Vanilla JS with modern features
   ======================================== */

// ========================================
// TYPED TEXT EFFECT IN HERO
// Adjust typingSpeed and erasingSpeed for different animation pace
// ========================================
const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor-blink');

const textArray = ['Tech', 'Automation', 'Design', 'AI Tips'];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // milliseconds per character
const erasingSpeed = 100; // milliseconds per character
const delayBetweenWords = 2000; // pause before erasing

function typeText() {
    const currentText = textArray[textArrayIndex];
    
    if (!isDeleting) {
        // Typing
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, delayBetweenWords);
            return;
        }
    } else {
        // Erasing
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
        }
    }
    
    const speed = isDeleting ? erasingSpeed : typingSpeed;
    setTimeout(typeText, speed);
}

// Start typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 500);
});

// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Open menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

// Close menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

function activeNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', activeNavOnScroll);

// ========================================
// INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// Adjust threshold (0.15) for earlier/later animation trigger
// ========================================
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: unobserve after reveal to prevent re-triggering
            // revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ========================================
// ANIMATED COUNTER FOR STATS
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
        }
    });
}, {
    threshold: 0.5
});

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// ========================================
// PROJECT CARD TILT EFFECT ON HOVER
// Adjust tiltAmount for more/less tilt (currently 10)
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltAmount = 10; // degrees
        const rotateY = ((x - centerX) / centerX) * tiltAmount;
        const rotateX = ((centerY - y) / centerY) * tiltAmount;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ========================================
// PROJECT MODAL SYSTEM
// ========================================
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Project data
const projectData = {
    nursechat: {
        title: 'NurseChat',
        category: 'Healthcare • Education',
        description: 'NurseChat is a comprehensive collaborative platform designed specifically for nursing students. It combines real-time chat functionality with an integrated flashcard system to enhance learning and communication.',
        features: [
            'Real-time messaging with WebSocket technology',
            'Interactive flashcard system for study sessions',
            'Group chat rooms for different nursing topics',
            'Progress tracking and study analytics',
            'Mobile-responsive design for on-the-go learning'
        ],
        technologies: ['React', 'Firebase', 'WebSocket', 'Material-UI', 'Redux'],
        link: '#',
        github: '#'
    },
    cropmac: {
        title: 'Cropmac Website',
        category: 'Business • E-commerce',
        description: 'A modern, professional company website for Cropmac featuring comprehensive service showcases, integrated booking flows, and an intuitive user experience.',
        features: [
            'Service catalog with detailed descriptions',
            'Integrated booking and appointment system',
            'Admin dashboard for managing bookings',
            'Responsive design across all devices',
            'SEO-optimized content and structure'
        ],
        technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
        link: '#',
        github: '#'
    },
    digitalmind: {
        title: 'Digital Mind',
        category: 'Content • YouTube',
        description: 'Digital Mind is a faceless YouTube channel focused on delivering high-quality tech and AI content. The project involves automated script generation, visual creation, and content optimization.',
        features: [
            'Automated script generation using AI',
            'Custom visual design for faceless content',
            'SEO-optimized video titles and descriptions',
            'Consistent content scheduling and publishing',
            'Analytics tracking and performance optimization'
        ],
        technologies: ['Content Creation', 'AI/GPT', 'Video Editing', 'Automation Tools', 'Python'],
        link: '#',
        github: '#'
    }
};

// Open modal when clicking project cards
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open if clicking the overlay button directly
        if (e.target.closest('.btn-icon')) {
            e.stopPropagation();
        }
        
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

// Also handle overlay button clicks
document.querySelectorAll('.project-overlay .btn-icon').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = e.target.closest('.project-card');
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

function openModal(projectId) {
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Build modal content
    let featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    let techHTML = project.technologies.map(tech => 
        `<span class="tag">${tech}</span>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-category" style="color: var(--accent-primary); margin-bottom: 1rem; font-weight: 500;">
            ${project.category}
        </p>
        <p style="line-height: 1.8; margin-bottom: 1.5rem;">
            ${project.description}
        </p>
        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Key Features</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
            ${featuresHTML}
        </ul>
        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${techHTML}
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener">
                <i class="fas fa-external-link-alt"></i>
                <span>View Project</span>
            </a>
            <a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener">
                <i class="fab fa-github"></i>
                <span>View Code</span>
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal handlers
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Trap focus within modal when open
modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// ========================================
// DOWNLOAD README FUNCTIONALITY
// Generates and downloads a README.md file
// ========================================
const downloadReadmeBtn = document.getElementById('download-readme');

if (downloadReadmeBtn) {
    downloadReadmeBtn.addEventListener('click', () => {
        const readmeContent = generateReadmeContent();
        downloadFile('README.md', readmeContent);
    });
}

function generateReadmeContent() {
    return `# BigJuu Tech Portfolio

## About Me

Hi! I'm **BigJuu Tech**, a passionate Full-Stack Developer and Tech Innovator based in **Accra, Ghana** 🇬🇭.

I specialize in:
- 💻 Full-Stack Web Development
- 🤖 Automation & AI Integration
- 🎨 Modern UI/UX Design
- 📱 Mobile App Development

## Featured Projects

### 1. NurseChat
A collaborative chat platform with integrated flashcards for nursing students.

**Technologies:** React, Firebase, WebSocket

### 2. Cropmac Website
Professional company website with booking flows and service showcase.

**Technologies:** PHP, HTML/CSS, MySQL

### 3. Digital Mind
Faceless YouTube channel creating tech and AI content with automation.

**Technologies:** Content Creation, AI/GPT, Automation

## Skills

- **Frontend:** React, Vue.js, HTML5, CSS3, JavaScript
- **Backend:** Node.js, PHP, Python
- **Database:** MongoDB, MySQL, Firebase
- **Tools:** Git, Docker, VS Code
- **Other:** AI/ML, Automation, Content Creation

## Get In Touch

- 📧 Email: you@example.com
- 📍 Location: Accra, Ghana
- 💼 Open to opportunities

## Stats

- ✅ 50+ Projects Completed
- 😊 100+ Happy Clients
- 📅 5+ Years Experience

---

Built with passion and dedication. Let's create something amazing together! 🚀

*This README was generated from my portfolio website.*
`;
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ========================================
// FORM SUBMISSION HANDLER
// ========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // In a real application, send this data to your backend
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon. 🚀');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// SMOOTH SCROLL ENHANCEMENT
// Already handled by CSS scroll-behavior, but adding programmatic fallback
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// HEADER BACKGROUND ON SCROLL
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 23, 36, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 36, 0.8)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// BUTTON RIPPLE EFFECT
// Adds a visual ripple when clicking buttons
// ========================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PERFORMANCE: LAZY LOADING FOR IMAGES
// (When images are added to the project)
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
};

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        }
    });
}, observerOptions);

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ========================================
// LOG SUCCESS MESSAGE
// ========================================
console.log('%c🚀 BigJuu Tech Portfolio Loaded Successfully!', 'color: #ff7a18; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ in Accra, Ghana', 'color: #9aa6b2; font-size: 12px;');
