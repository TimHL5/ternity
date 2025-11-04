# Ternity Education

**Education for the 22nd Century**

A refined minimalist website for Ternity Education, showcasing AI safety and literacy programs for international schools across Asia-Pacific.

## 🎯 Project Overview

This website is designed with a sophisticated minimalist approach, focusing on:
- Clean, professional design
- Strategic use of Ternity Blue (#7DD3E8)
- Large, bold typography
- Smooth animations and micro-interactions
- Exceptional user experience
- Performance and accessibility

## 🎨 Design Philosophy

The website embodies "intelligent restraint" - using minimal visual elements to create maximum impact. Every element serves a purpose, guided by:

- **Minimalist Color Palette**: Primarily white and Ternity Blue with strategic accents
- **Typography as Visual System**: Large, bold headlines with generous spacing
- **Subtle, Intelligent Motion**: Purposeful animations that enhance UX
- **Generous Whitespace**: Let designs breathe
- **Responsive Design**: Optimized for all devices

## 📁 Project Structure

```
ternity/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system and styles
├── script.js           # Interactive behaviors and animations
├── img/                # Logo and images
│   ├── header_logo.svg
│   └── favicon files
├── README.md           # This file
└── CNAME              # Domain configuration
```

## 🚀 Key Features

### Sections

1. **Hero Section**
   - Full viewport height
   - Animated geometric background
   - Bold headline with staggered animations
   - Clear CTAs
   - Trust badges (MIT, Harvard, Boston College)

2. **Problem Section** ("The Challenge")
   - Two-column layout
   - Animated statistics counter
   - Visual chart showing the gap
   - Compelling narrative

3. **Solution Section** ("How We're Different")
   - Three rotating cards
   - Hover effects with straightening
   - Teacher training, student curriculum, school consulting

4. **Meet Haihao Section**
   - Split layout with diagonal divider
   - Professional credentials
   - Image placeholder (ready for photo)
   - CTA to book a call

5. **Process Timeline**
   - 4-step process
   - Animated connecting line
   - Clear, actionable steps

6. **Booking Section**
   - Centered, focused form
   - Clean input fields
   - Form validation
   - Alternative contact option

7. **Footer**
   - Navigation links
   - Social/contact info
   - Copyright and location

### Interactive Elements

- **Smooth Scroll Navigation**: Animated scrolling to sections
- **Sticky Navigation**: Becomes solid on scroll with smooth transition
- **Mobile Menu**: Full-screen overlay menu for mobile devices
- **Counter Animations**: Stats count up when entering viewport
- **Chart Line Drawing**: SVG path animation
- **Card Hover Effects**: Rotate and lift effects
- **Parallax Background**: Subtle movement on hero section
- **Floating CTA**: Appears after hero, hides at booking section
- **Form Handling**: Real-time validation and submission feedback

## 🎨 Design System

### Colors

```css
--color-white: #FFFFFF
--color-ternity-blue: #7DD3E8
--color-light-gray: #F3F4F6
--color-text-gray: #6B7280
--color-dark-gray: #374151
--color-almost-black: #1F2937
```

### Typography

- **Font**: Inter (400, 500, 600, 700, 900)
- **Hero**: clamp(3rem, 8vw, 7rem)
- **H2**: clamp(2rem, 5vw, 4rem)
- **Body**: clamp(1rem, 2vw, 1.25rem)
- **Line Heights**: 1.1 (tight), 1.5 (normal), 1.7 (relaxed)

### Spacing

```css
--space-xs: 0.5rem   (8px)
--space-sm: 1rem     (16px)
--space-md: 2rem     (32px)
--space-lg: 4rem     (64px)
--space-xl: 6rem     (96px)
--space-2xl: 8rem    (128px)
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

All sections adapt gracefully with:
- Stacked layouts on mobile
- Adjusted spacing
- Touch-friendly interactions
- Optimized typography

## ⚡ Performance

The website is optimized for:
- **Fast Load Times**: Minimal dependencies, optimized assets
- **Smooth Animations**: 60fps animations using GPU acceleration
- **Efficient Code**: Debounced scroll handlers, Intersection Observer
- **Progressive Enhancement**: Works without JavaScript

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible styles
- Reduced motion support
- Color contrast compliance (WCAG AA)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript**: No frameworks needed
- **SVG**: Scalable icons and illustrations
- **Google Fonts**: Inter font family

## 📝 Content Management

### To Update Content

1. **Hero Section**: Edit lines 64-87 in `index.html`
2. **Statistics**: Update `data-count` attributes in lines 148, 152, 156
3. **Cards**: Modify card content in lines 196-233
4. **Credentials**: Update list items in lines 264-281
5. **Form**: Customize fields in lines 360-390

### To Add Haihao's Photo

Replace the SVG placeholder (lines 246-251) with:
```html
<img src="img/haihao-photo.jpg" alt="Haihao Liu" />
```

Recommended specs:
- Format: WebP with JPG fallback
- Resolution: 800px width minimum
- File size: < 200KB
- Style: Professional, neutral background

## 🚀 Deployment

This is a static website that can be deployed to:
- GitHub Pages (already configured with CNAME)
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Setup

The site is configured to work with GitHub Pages. Simply push to the main branch and enable Pages in repository settings.

## 🔧 Customization

### Changing Brand Colors

Update CSS variables in `styles.css` (lines 31-40):
```css
--color-ternity-blue: #7DD3E8;  /* Your brand color */
```

### Adjusting Animations

Modify animation durations in `styles.css` (lines 71-73):
```css
--transition-fast: 200ms;
--transition-normal: 400ms;
--transition-slow: 600ms;
```

### Form Submission

The form currently logs to console. To connect to a backend:

1. Update `handleFormSubmit()` in `script.js` (line 286)
2. Replace the setTimeout with actual API call:
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => {
    // Handle success
});
```

Or integrate with:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend

## 📊 Performance Metrics

Target metrics:
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.05
- First Input Delay: < 100ms

## 🎯 Conversion Optimization

The website is designed to drive consultations through:
- Clear CTAs throughout
- Low-friction booking form
- Trust signals (credentials, statistics)
- Floating CTA for persistent visibility
- Optimized user flow

## 📞 Support & Questions

For questions or support:
- **Email**: [hello@ternity.education](mailto:hello@ternity.education)
- **Website**: [ternity.education](https://ternity.education)

## 📄 License

Copyright © 2025 Ternity Education. All rights reserved.

---

## 🎨 Design Credits

Inspired by:
- Apple's product pages (restraint, whitespace)
- Linear's website (sophisticated minimalism)
- Stripe's design system (purposeful design)
- Swiss design principles (typography-first, grid-breaking)

Built with attention to detail and modern web standards.
