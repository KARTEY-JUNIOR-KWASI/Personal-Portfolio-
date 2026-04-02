/* ========================================
   BIGJUU TECH PORTFOLIO - ENHANCED JAVASCRIPT
   Projects + advanced features
   ======================================== */

// ========================================
// HOW TO ADD NEW PROJECTS:
// 1. Copy a project object below
// 2. Change the id (unique), title, description, etc.
// 3. Update link and github with your actual URLs
// 4. Add your project image/icon if needed
// 5. The filter should be 'web', 'mobile', or 'content'
// ========================================

// ========================================
// PROJECT DATA
// ========================================
const allProjects = [
    {
        id: 'cleliza-spa',
        title: 'Cleliza Spa',
        category: 'Web Development • Wellness',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/6560298/pexels-photo-6560298.jpeg',
        description: 'Professional spa website offering holistic massage and therapeutic services in Accra, Ghana.',
        fullDescription: 'Cleliza Spa is a modern wellness website providing comprehensive spa services including massage therapy, pedicure & manicure, facial treatments, reflexology, and sauna sessions. Built to showcase the spa\'s commitment to relaxation and rejuvenation with an elegant, user-friendly interface.',
        features: [
            'Online booking system for appointments',
            'Detailed service portfolio with descriptions',
            'Contact forms and location information',
            'Responsive design for all devices',
            'SEO-optimized content for local visibility'
        ],
        technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
        link: 'https://clelizaspa.com/',
        github: '#'
    },
    {
        id: 'thear-construction',
        title: 'The AR Construction',
        category: 'Web Development • Business',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop&crop=center',
        description: 'Professional construction company website showcasing services, projects, and expertise in building and construction management.',
        fullDescription: 'A comprehensive business website for The AR Construction firm, featuring modern design, service showcases, project galleries, and contact integration. Built to establish credibility and attract potential clients in the construction industry.',
        features: [
            'Responsive design optimized for all devices',
            'Service portfolio with detailed project galleries',
            'Contact forms with lead generation',
            'Professional branding and company information',
            'SEO-optimized content for local business visibility'
        ],
        technologies: ['React', 'CSS3', 'JavaScript', 'HTML5'],
        link: 'https://thearconstruction.com/',
        github: '#'
    },
    {
        id: 'brochure-design',
        title: 'BigJuu Tech Services Brochure',
        category: 'Marketing • Design',
        filter: 'content',
        icon: '',
        image: 'https://i.ibb.co/yBs9Byvx/Whats-App-Image-2026-04-01-at-12-50-29-PM.jpg',
        description: 'Professional services brochure showcasing BigJuu Tech offerings, pricing, and expertise in web development and digital solutions.',
        fullDescription: 'A comprehensive marketing brochure designed to effectively communicate BigJuu Tech\'s services, pricing plans, and technical expertise. The brochure features modern design elements, clear service descriptions, competitive pricing, and compelling calls-to-action to attract potential clients and showcase our commitment to delivering high-quality digital solutions.',
        features: [
            'Professional layout and branding',
            'Comprehensive service descriptions',
            'Competitive pricing plans',
            'High-quality visual design',
            'Print and digital-ready format',
            'Call-to-action integration'
        ],
        technologies: ['Adobe Photoshop', 'Corel Draw', 'HTML5', 'CSS3'],
        link: 'https://online.flippingbook.com/view/581733453/',
        github: '#'
    },
    {
        id: 'business-brochure',
        title: 'Business Brochure Design',
        category: 'Graphic Design • Marketing',
        filter: 'content',
        icon: '',
        image: 'https://i.ibb.co/WWvL4b3f/Screenshot-2026-04-01-210437.png',
        description: 'Comprehensive business brochure featuring company profiles, logos, and mockups for professional marketing materials.',
        fullDescription: 'A complete business brochure design project showcasing professional graphic design skills. The brochure includes company profiles, custom logos, product mockups, and various marketing materials designed to effectively communicate brand identity and business offerings.',
        features: [
            'Company profile design and layout',
            'Custom logo creation and branding',
            'Product mockups and visualizations',
            'Professional marketing materials',
            'Print-ready high-resolution designs',
            'Brand identity development'
        ],
        technologies: ['Adobe Photoshop', 'Corel Draw'],
        link: 'https://online.flippingbook.com/view/580949835/',
        github: '#'
    },
    {
        id: 'klozza-food-delivery',
        title: 'Klozza Food Delivery',
        category: 'E-commerce • Food Delivery',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/12725414/pexels-photo-12725414.jpeg',
        description: 'Comprehensive food delivery platform connecting customers with local restaurants for fast and reliable meal delivery services.',
        fullDescription: 'Klozza is a modern food delivery service that specializes in satisfying cravings with delicious food delivered quickly and reliably. The platform features partnerships with multiple restaurants, extensive food categories, and seamless ordering experience for customers across Africa, Europe, and the Middle East.',
        features: [
            'Restaurant partnership management',
            'Comprehensive food categorization system',
            'Real-time order tracking and delivery',
            'Multi-location coverage (Africa, Europe, Middle East)',
            'User-friendly ordering interface',
            'Restaurant and rider login portals'
        ],
        technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        link: 'https://klozza.com.ng/',
        github: '#'
    },
    {
        id: 'taskmanager',
        title: 'TaskFlow Pro',
        category: 'Productivity • SaaS',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/7580842/pexels-photo-7580842.jpeg',
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
        link: 'https://frappe.io/erpnext',
        github: '#'
    },
    {
        id: 'fitness',
        title: 'MyfitnessPal',
        category: 'Health • Fitness',
        filter: 'mobile',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/19330519/pexels-photo-19330519.jpeg',
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
        link: 'https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718',
        github: '#'
    },
    {
        id: 'weather',
        title: 'WeatherNow Dashboard',
        category: 'Utility • Data Visualization',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/32637595/pexels-photo-32637595.jpeg',
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
        title: 'Guess Word Battle',
        category: 'Games • Entertainment',
        filter: 'web',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/8762816/pexels-photo-8762816.jpeg',
        description: 'Guess Word Battle is a fast-paced, interactive word puzzle game where players test their vocabulary and thinking skills by guessing hidden words.',
        fullDescription: 'Guess Word Battle is a fast-paced, interactive word puzzle game where players test their vocabulary and thinking skills by guessing hidden words. Inspired by classic Wordle-style gameplay, it challenges users to make smart guesses, use clues, and improve accuracy within limited attempts—making it both fun and mentally engaging.',
        features: [
            'Word guessing gameplay with limited attempts',
            'Real-time feedback on correct and incorrect letters',
            'Vocabulary building and mental challenge',
            'Interactive puzzle mechanics',
            'Progress tracking and scoring system'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vercel'],
        link: 'https://guess-word-battle.vercel.app/',
        github: '#'
    },
    {
        id: 'language',
        title: 'LinguaLearn App',
        category: 'Education • Language',
        filter: 'mobile',
        icon: '', // Custom image used instead of icon
        image: 'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg',
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
    },

    // ========================================
    // ADD YOUR REAL PROJECTS BELOW THIS LINE
    // ========================================

    // Add more projects here...
    // Copy the template above and customize for each project

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
    if (!typedTextElement) return;
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
if (themeToggle) {
    updateThemeIcon(currentTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
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
    if (!projectsGrid) {
        console.error('projects-grid element not found!');
        return;
    }
    
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
                ${project.image ? `<img src="${project.image}" alt="${project.title} Logo" style="width: 100%; height: 100%; object-fit: cover;" />` : `<i class="${project.icon}"></i>`}
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
    
    let techHTML = project.technologies.map(tech => 
        `<span class="tag">${tech}</span>`
    ).join('');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-modal-description">
            ${project.description}
        </p>
        <div class="project-modal-tech">
            <h3>Technologies Used</h3>
            <div class="project-tags">
                ${techHTML}
            </div>
        </div>
        <div class="modal-actions">
            <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener" ${project.link === '#' ? 'style="pointer-events: none; opacity: 0.6;"' : ''}>
                <i class="fas fa-external-link-alt"></i>
                <span>View Live Project</span>
            </a>
            <a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener" ${project.github === '#' ? 'style="pointer-events: none; opacity: 0.6;"' : ''}>
                <i class="fab fa-github"></i>
                <span>View Source Code</span>
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
    if (!toast) return;
    const toastMessage = document.getElementById('toast-message');
    if (!toastMessage) return;
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
`;
}
// ========================================
// FORM SUBMISSION HANDLER WITH TOAST
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        try {
            // Initialize EmailJS
            emailjs.init('Yy-SwEWzgsmpzNz2s');
            
            const result = await emailjs.send('service_2hjvfws', 'template_gnaihwb', data);
            
            if (result.status === 200) {
                showToast('Message sent successfully! I\'ll get back to you soon. 👋');
                contactForm.reset();
            } else {
                showToast('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('Failed to send message. Please try again.');
        }
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
    console.log('%c📊 All projects loaded and ready!', 'color: #9aa6b2; font-size: 12px;');
});
