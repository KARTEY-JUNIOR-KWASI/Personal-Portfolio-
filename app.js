/* ========================================
   BIGJUU TECH PORTFOLIO - ENHANCED JAVASCRIPT
   All 10 projects + advanced features
   ======================================== */

// ========================================
// PROJECT DATA - All 10 Projects
// ========================================
const allProjects = [
    {
        id: 'nursechat',
        title: 'NurseChat',
        category: 'Healthcare • Education',
        filter: 'web',
        icon: 'fas fa-comments-medical',
        description: 'Collaborative chat platform with integrated flashcards for nursing students to study and communicate effectively.',
        fullDescription: 'NurseChat is a comprehensive collaborative platform designed specifically for nursing students. It combines real-time chat functionality with an integrated flashcard system to enhance learning and communication.',
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
    {
        id: 'cropmac',
        title: 'Cropmac Website',
        category: 'Business • E-commerce',
        filter: 'web',
        icon: 'fas fa-globe',
        description: 'Professional company website with integrated booking flows and comprehensive service showcase.',
        fullDescription: 'A modern, professional company website for Cropmac featuring comprehensive service showcases, integrated booking flows, and an intuitive user experience.',
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
    {
        id: 'digitalmind',
        title: 'Digital Mind',
        category: 'Content • YouTube',
        filter: 'content',
        icon: 'fas fa-brain',
        description: 'Faceless YouTube channel creating engaging tech and AI content with automated script generation and visuals.',
        fullDescription: 'Digital Mind is a faceless YouTube channel focused on delivering high-quality tech and AI content. The project involves automated script generation, visual creation, and content optimization.',
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
    },
    {
        id: 'ecommerce',
        title: 'ShopHub E-Commerce',
        category: 'E-commerce • Retail',
        filter: 'web',
        icon: 'fas fa-shopping-cart',
        description: 'Full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.',
        fullDescription: 'A complete e-commerce solution with advanced features including payment gateway integration, real-time inventory tracking, and comprehensive admin controls.',
        features: [
            'Secure payment processing with Stripe integration',
            'Real-time inventory management',
            'Customer account and order tracking',
            'Product search and filtering',
            'Admin dashboard with analytics'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
        link: '#',
        github: '#'
    },
    {
        id: 'taskmanager',
        title: 'TaskFlow Pro',
        category: 'Productivity • SaaS',
        filter: 'web',
        icon: 'fas fa-tasks',
        description: 'Advanced task management application with team collaboration features and real-time updates.',
        fullDescription: 'A powerful task management tool designed for teams, featuring real-time collaboration, project boards, and comprehensive analytics.',
        features: [
            'Kanban-style project boards',
            'Real-time team collaboration',
            'Task assignments and notifications',
            'Time tracking and reporting',
            'Integration with Slack and Google Calendar'
        ],
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Vuex'],
        link: '#',
        github: '#'
    },
    {
        id: 'fitness',
        title: 'FitTrack Mobile',
        category: 'Health • Fitness',
        filter: 'mobile',
        icon: 'fas fa-dumbbell',
        description: 'Mobile fitness tracking app with workout plans, nutrition tracking, and progress visualization.',
        fullDescription: 'A comprehensive fitness application that helps users track workouts, monitor nutrition, and visualize their progress with detailed analytics and personalized recommendations.',
        features: [
            'Custom workout plan generator',
            'Calorie and macro tracking',
            'Exercise library with video tutorials',
            'Progress photos and measurements',
            'Social features and challenges'
        ],
        technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Node.js'],
        link: '#',
        github: '#'
    },
    {
        id: 'weather',
        title: 'WeatherNow Dashboard',
        category: 'Utility • Data Visualization',
        filter: 'web',
        icon: 'fas fa-cloud-sun',
        description: 'Beautiful weather dashboard with detailed forecasts, interactive maps, and weather alerts.',
        fullDescription: 'An elegant weather application providing detailed forecasts, interactive weather maps, and real-time alerts with stunning visualizations.',
        features: [
            '7-day detailed weather forecast',
            'Interactive radar and satellite maps',
            'Severe weather alerts',
            'Air quality index monitoring',
            'Multiple location tracking'
        ],
        technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'Tailwind CSS'],
        link: '#',
        github: '#'
    },
    {
        id: 'social',
        title: 'ConnectHub Social',
        category: 'Social Media • Networking',
        filter: 'web',
        icon: 'fas fa-users',
        description: 'Modern social networking platform with real-time messaging, posts, and community features.',
        fullDescription: 'A feature-rich social networking platform that enables users to connect, share content, and build communities with real-time interactions.',
        features: [
            'User profiles and customization',
            'Real-time chat and video calls',
            'News feed with posts and stories',
            'Groups and community features',
            'Privacy controls and blocking'
        ],
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'WebRTC', 'Redis'],
        link: '#',
        github: '#'
    },
    {
        id: 'language',
        title: 'LinguaLearn App',
        category: 'Education • Language',
        filter: 'mobile',
        icon: 'fas fa-language',
        description: 'Interactive language learning mobile app with AI-powered conversation practice and gamification.',
        fullDescription: 'An innovative language learning platform that uses AI to provide personalized lessons, conversation practice, and gamified learning experiences.',
        features: [
            'AI-powered conversation practice',
            'Adaptive learning algorithms',
            'Gamified lesson structure',
            'Speech recognition and pronunciation feedback',
            'Offline learning mode'
        ],
        technologies: ['React Native', 'TensorFlow', 'Firebase', 'OpenAI API', 'SQLite'],
        link: '#',
        github: '#'
    },
    {
        id: 'portfolio',
        title: 'Creative Portfolio Builder',
        category: 'Tools • Website Builder',
        filter: 'web',
        icon: 'fas fa-palette',
        description: 'No-code portfolio builder for creatives with drag-and-drop interface and beautiful templates.',
        fullDescription: 'A powerful yet easy-to-use portfolio builder that enables designers, photographers, and artists to create stunning portfolios without coding knowledge.',
        features: [
            'Drag-and-drop page builder',
            '50+ professional templates',
            'Custom domain support',
            'SEO optimization tools',
            'Analytics and visitor tracking'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
        link: '#',
        github: '#'
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================
let currentFilter = 'all';
let displayedProjectsCount = 6;
const projectsPerLoad = 3;

// ========================================
// TYPED TEXT EFFECT IN HERO
// ========================================
const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor-blink');

const textArray = ['Tech', 'Automation', 'Design', 'AI Tips'];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;

function typeText() {
    const currentText = textArray[textArrayIndex];
    
    if (!isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, delayBetweenWords);
            return;
        }
    } else {
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

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// THEME TOGGLE (LIGHT/DARK MODE)
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

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
// HERO CARD 3D TILT EFFECT ON MOUSEMOVE
// ========================================
const heroCard = document.getElementById('hero-card');

if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 15; // Adjust tilt amount (15 degrees)
        const rotateY = ((x - centerX) / centerX) * 15;
        
        heroCard.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = '';
    });
}

// ========================================
// INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// ========================================
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
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
// ANIMATED COUNTER FOR STATS (Enhanced)
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

const statsSection = document.getElementById('stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
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
// RENDER PROJECTS DYNAMICALLY
// ========================================
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = currentFilter === 'all' 
        ? allProjects 
        : allProjects.filter(p => p.filter === currentFilter);
    
    const projectsToShow = filteredProjects.slice(0, displayedProjectsCount);
    
    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Update load more button visibility
    updateLoadMoreButton(filteredProjects.length);
    
    // Reattach observers to new elements
    observeProjectCards();
}

function createProjectCard(project, index) {
    const card = document.createElement('article');
    card.className = 'project-card glass-card';
    card.setAttribute('data-reveal', '');
    card.setAttribute('data-project', project.id);
    
    card.innerHTML = `
        <div class="project-image">
            <div class="project-image-placeholder">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-overlay">
                <button class="btn-icon" aria-label="View ${project.title} details">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <p class="project-description">
                ${project.description}
            </p>
            <div class="project-tags">
                ${project.technologies.slice(0, 3).map(tech => 
                    `<span class="tag">${tech}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-icon')) {
            openModal(project.id);
        }
    });
    
    // Add overlay button handler
    const overlayBtn = card.querySelector('.btn-icon');
    overlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(project.id);
    });
    
    // Add tilt effect
    addTiltEffect(card);
    
    return card;
}

// ========================================
// PROJECT CARD TILT EFFECT ON HOVER
// ========================================
function addTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltAmount = 5;
        const rotateY = ((x - centerX) / centerX) * tiltAmount;
        const rotateX = ((centerY - y) / centerY) * tiltAmount;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
}

function observeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card[data-reveal]');
    projectCards.forEach(card => {
        revealObserver.observe(card);
    });
}

// ========================================
// PROJECT FILTERING
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update filter and reset count
        currentFilter = btn.getAttribute('data-filter');
        displayedProjectsCount = 6;
        
        // Re-render projects
        renderProjects();
    });
});

// ========================================
// LOAD MORE PROJECTS
// ========================================
const loadMoreBtn = document.getElementById('load-more-projects');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        displayedProjectsCount += projectsPerLoad;
        renderProjects();
    });
}

function updateLoadMoreButton(totalProjects) {
    const loadMoreSection = document.querySelector('.projects-load-more');
    if (displayedProjectsCount >= totalProjects) {
        loadMoreSection.style.display = 'none';
    } else {
        loadMoreSection.style.display = 'block';
    }
}

// ========================================
// PROJECT MODAL SYSTEM
// ========================================
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

function openModal(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    
    if (!project) return;
    
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
            ${project.fullDescription}
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
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// TOAST NOTIFICATION SYSTEM
// ========================================
const toast = document.getElementById('toast');

function showToast(message, duration = 3000) {
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ========================================
// DOWNLOAD README FUNCTIONALITY
// ========================================
const downloadReadmeBtn = document.getElementById('download-readme');

if (downloadReadmeBtn) {
    downloadReadmeBtn.addEventListener('click', () => {
        const readmeContent = generateReadmeContent();
        downloadFile('README.md', readmeContent);
        showToast('README.md downloaded successfully! 📄');
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

${allProjects.map((project, index) => `
### ${index + 1}. ${project.title}
${project.fullDescription}

**Technologies:** ${project.technologies.join(', ')}
`).join('\n')}

## Skills

- **Frontend:** React, Vue.js, HTML5, CSS3, JavaScript
- **Backend:** Node.js, PHP, Python
- **Database:** MongoDB, MySQL, Firebase, PostgreSQL
- **Mobile:** React Native
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
// FORM SUBMISSION HANDLER WITH TOAST
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success toast
        showToast('Message sent successfully! I\'ll get back to you soon. 🚀');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// SMOOTH SCROLL ENHANCEMENT
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

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 23, 36, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 36, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const button = e.target.closest('.btn');
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
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
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
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
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Start typing effect
    setTimeout(typeText, 500);
    
    // Render initial projects
    renderProjects();
    
    // Initial scroll progress
    updateScrollProgress();
    
    console.log('%c🚀 BigJuu Tech Portfolio Loaded Successfully!', 'color: #ff7a18; font-size: 16px; font-weight: bold;');
    console.log('%c✨ All 10 projects loaded with advanced features!', 'color: #9aa6b2; font-size: 12px;');
    console.log('%cBuilt with ❤️ in Accra, Ghana', 'color: #9aa6b2; font-size: 12px;');
});
