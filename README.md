# BigJuu Tech Portfolio

A modern, highly-animated single-page portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, interactive project cards, glassmorphism effects, and floating blob backgrounds.

## 🚀 Quick Start

Simply open `index.html` in your web browser. No build tools or dependencies required!

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── app.js          # JavaScript functionality
└── README.md       # This file
```

## ✨ Features

### Core Functionality
- ✅ **Single-page layout** with smooth scroll navigation
- ✅ **Responsive design** - works on desktop, tablet, and mobile
- ✅ **Dark modern theme** - `#0f1724` background with `#ff7a18` accent
- ✅ **Semantic HTML5** structure
- ✅ **Accessibility features** - ARIA labels, keyboard navigation, focus management

### Animations & Effects
- 🎨 **Animated blob shapes** - Floating background gradients
- 💫 **Typed text effect** - Hero subtitle animation
- 🎯 **Scroll reveal animations** - Elements fade in on scroll (IntersectionObserver)
- 🃏 **Project card tilt** - 3D tilt effect on hover
- 💧 **Glassmorphism** - Modern frosted glass card effects
- 🌊 **Smooth transitions** - Custom cubic-bezier timing
- ⚡ **Micro-interactions** - Button hovers, link animations, ripple effects

### Sections
1. **Hero** - Big headline, typed effect, CTA buttons, hero card with avatar
2. **About** - Stats counter animation, personal info, README download
3. **Projects** - Grid of animated cards with modal system (NurseChat, Cropmac, Digital Mind)
4. **Services** - 6 service cards with icons
5. **Contact** - Contact form and info cards
6. **Footer** - Copyright and credits

### Interactive Features
- 📱 **Mobile hamburger menu** - Responsive navigation
- 🎯 **Active nav highlighting** - Updates based on scroll position
- 🔍 **Project modals** - Click cards to view detailed information
- 📥 **README download** - Generate and download README.md file
- ⌨️ **Keyboard accessible** - Full keyboard navigation support

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #0f1724;        /* Main background */
    --accent-primary: #ff7a18;    /* Accent color */
    --text-primary: #ffffff;      /* Primary text */
    --text-secondary: #9aa6b2;    /* Secondary text */
}
```

### Animation Timing
Adjust animation speeds in `styles.css`:
```css
:root {
    --transition-fast: 0.2s;      /* Quick animations */
    --transition-normal: 0.3s;    /* Standard animations */
    --transition-slow: 0.6s;      /* Slow animations */
}
```

### Typed Text
Change typed words in `app.js`:
```javascript
const textArray = ['Tech', 'Automation', 'Design', 'AI Tips'];
const typingSpeed = 150;  // milliseconds per character
```

### Blob Movement
Adjust blob animation in `styles.css`:
```css
@keyframes float-blob {
    /* Modify transform values for different movement patterns */
}
```

### Reveal Animation Timing
Change when elements reveal in `app.js`:
```javascript
const revealObserver = new IntersectionObserver((entries) => {
    // ...
}, {
    threshold: 0.15,  // Change to trigger earlier/later
});
```

## 📝 Content Customization

### Personal Information
Update in `index.html`:
- Name, location, email in hero and contact sections
- Skills badges in hero card
- Stats numbers in about section

### Projects
Add/edit projects in `app.js` (projectData object):
```javascript
const projectData = {
    yourproject: {
        title: 'Your Project',
        category: 'Category',
        description: '...',
        features: ['Feature 1', 'Feature 2'],
        technologies: ['Tech1', 'Tech2'],
        link: 'https://...',
        github: 'https://...'
    }
};
```

Then add corresponding HTML in the projects section.

### Services
Edit service cards directly in `index.html` in the services section.

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus visible outlines
- Modal focus trap
- Reduced motion support (respects `prefers-reduced-motion`)
- Sufficient color contrast
- Alt text for images (when added)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox, Animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Font Awesome** - Icons (CDN)

### JavaScript Features
- IntersectionObserver API for scroll animations
- Typed text effect (custom implementation)
- Modal system with focus management
- Client-side README generation
- Smooth scroll polyfill
- Event delegation for performance

### CSS Features
- CSS Grid & Flexbox layouts
- CSS Custom Properties (variables)
- Glassmorphism with backdrop-filter
- CSS Animations and Transitions
- Custom cubic-bezier timing functions
- Media queries for responsiveness

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**BigJuu Tech**
- Location: Accra, Ghana 🇬🇭
- Email: you@example.com

---

Built with 💻 passion and ☕ coffee. Let's create something amazing together! 🚀
