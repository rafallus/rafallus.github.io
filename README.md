# Rafael Martinez Gordillo - Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to showcase game development projects and skills to recruiters and game studios.

## Features

✨ **Modern Design**
- Clean, minimalist aesthetic with gradient backgrounds
- Smooth animations and transitions
- Professional color scheme tailored for game developers

📱 **Fully Responsive**
- Mobile-first design approach
- Works seamlessly on all devices
- Touch-friendly navigation

⚡ **Performance Optimized**
- Lightweight vanilla HTML/CSS/JS (no frameworks)
- Fast load times
- Optimized for GitHub Pages

🎮 **Game Developer Focused**
- Project showcase with game details
- Technology tags (Engine, Genre, Platform)
- Links to live games and external projects

🔗 **Social Integration**
- Social media links on every page
- Easy contact form
- Resume download

## Project Structure

```
website/
├── index.html                 # Home page
├── bio.html                   # Bio page
├── project-*.html            # Individual project pages
├── styles.css                # Main stylesheet
├── script.js                 # JavaScript interactivity
├── assets/                   # Images and static files
│   ├── logo.png
│   ├── favicon.ico
│   ├── hero_img.webp
│   ├── bio-photo.webp
│   └── [project assets]
└── .gitignore
```

## Pages

- **Home** (`index.html`) - Hero section, project grid, contact form
- **Bio** (`bio.html`) - About section with photo and background
- **Projects** (`project-*.html`) - Individual pages for each project:
  - Edge of Chaos: Dungeons
  - Edge of Chaos
  - Godot Engine
  - Right Knight
  - Ubercold
  - Underctrl

## Deployment on GitHub Pages

### Method 1: Using GitHub UI

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/website`

### Method 2: Using Git Command Line

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Ensure all files are tracked
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Push to GitHub
git push origin main
```

### Custom Domain Setup

If you have a custom domain:

1. Add a `CNAME` file in the root with your domain name
2. Update your domain DNS settings to point to GitHub Pages
3. Wait for DNS propagation (can take up to 48 hours)

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6c5ce7;
    --accent-color: #00d4ff;
    /* ... more variables ... */
}
```

### Contact Form
Update the email address in `script.js`:
```javascript
const mailtoLink = `mailto:YOUR_EMAIL@example.com?...`
```

### Content
Update text content directly in HTML files:
- `index.html` - Home page content
- `bio.html` - Bio section
- `project-*.html` - Project descriptions

### Images
Replace images in the `assets/` folder:
- Keep the same filenames for automatic linking
- Use WebP format for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+
- Zero external dependencies
- Minified CSS and JS recommended for production

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliant
- Mobile-friendly touch targets

## SEO

- Meta descriptions on all pages
- Open Graph tags ready
- Structured semantic HTML
- Mobile-optimized
- Fast load times

## Future Enhancements

Consider adding:
- Blog section for game development insights
- Dark/Light theme toggle
- Testimonials section
- Team member profiles
- Newsletter signup
- Analytics integration

## License

© 2025 Rafael Martinez Gordillo. All rights reserved.

## Support

For issues or suggestions, please create a GitHub issue in the repository.

---

**Built with passion for the game development community** 🎮
