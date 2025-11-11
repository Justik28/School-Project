Modern Portfolio Website
========================

A responsive, multi-page portfolio website built with pure HTML/CSS/JavaScript. No frameworks, no build tools—just clean code ready to deploy.

Features
--------
✓ Responsive design (mobile, tablet, desktop)
✓ Smooth animations and transitions
✓ Animated gradient background
✓ Modern UI with dark theme
✓ Social media links (LinkedIn, GitHub, Twitter)
✓ Contact form with validation
✓ No broken links, clean navigation
✓ Fast loading, SEO-friendly
✓ Easy to customize

Pages
-----
- `index.html` — Home page with hero section
- `about.html` — About/bio page
- `contact.html` — Contact form with social links
- `404.html` — 404 error page

File Structure
--------------
```
/
├── index.html
├── about.html
├── contact.html
├── 404.html
├── README.md
└── assets/
    ├── css/
    │   └── main.css
    ├── js/
    │   └── main.js
    └── img/
        └── favicon.png (optional)
```

Quick Start (Local)
-------------------
Open `index.html` in your browser, or run a local server:

**Python 3:**
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Then open http://localhost:8000
```

**Node.js (if you have http-server installed):**
```bash
npx http-server
# Then open http://localhost:8080
```

**Using VS Code Live Server extension:**
Right-click `index.html` → "Open with Live Server"

Hosting Options
---------------

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push these files to the `main` branch
3. Go to Settings → Pages → Select "Deploy from a branch"
4. Choose `main` branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free & Easy)
1. Drag and drop the project folder onto https://app.netlify.com/drop
2. Done! Your site is live with a unique URL
3. Optional: Connect to GitHub for automatic deployments

### Vercel (Free & Fast)
1. Import the repository at https://vercel.com/new
2. Select your Git provider and repository
3. Deploy with one click
4. Get a custom domain or use the provided URL

### Other Hosting
- Heroku (free tier limited)
- Firebase Hosting
- AWS S3 + CloudFront
- Your own web server

Customization
-------------

### Change Colors
Edit `assets/css/main.css` — look for the `:root` variables:
```css
:root {
    --accent: #00d4ff;      /* Change this cyan color */
    --primary: #0f1724;     /* Dark background */
    --text: #e6eef6;        /* Text color */
}
```

### Update Social Links
Find the `.social-links` sections in each HTML file and update the URLs:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
<a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
```

### Change Brand Name
Replace "Your Brand" with your name in:
- `.logo` in the navbar (all pages)
- Footer copyright text

### Add Content
Edit the text in each HTML page:
- `index.html` — Hero message
- `about.html` — Your bio and skills
- `contact.html` — Contact form

### Deploy Contact Form
The contact form currently logs data to the browser console. To actually send emails:
- Use Netlify Forms (add `netlify` attribute to form tag)
- Use Formspree (https://formspree.io/)
- Build a backend with Node.js or Python

### Change Fonts
In each HTML file, update the Google Fonts import. Currently using:
- Poppins (headings, body)
- JetBrains Mono (code)

Edit this line to pick different fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Add Favicon
Place a favicon image at `assets/img/favicon.png` (or change the path in the `<link rel="shortcut icon">` tag).

Animation Customization
-----------------------
- Fade-in animations: Controlled by `.fade-in-up` class (edit `@keyframes fadeInUp` in CSS)
- Gradient animation: Edit the `initGradientCanvas()` function in `assets/js/main.js`
- Hover effects: Search `.card:hover` or `.btn-primary:hover` in CSS

Browser Compatibility
---------------------
Works on all modern browsers:
- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Performance Tips
----------------
- Images are currently not used; add optimized images for faster loading
- CSS and JS are embedded for simplicity—consider minifying for production
- Use a CDN to serve static assets from multiple locations globally

Next Steps
----------
1. Customize colors, fonts, and content
2. Add favicon and optional images
3. Update social media links
4. Choose a hosting platform
5. Deploy and share your portfolio!

Troubleshooting
---------------

**Links not working locally?**
- Make sure you're using a local server (http://localhost:8000), not `file://`

**Favicon not showing?**
- Add an image file at `assets/img/favicon.png`
- Clear browser cache (Ctrl+Shift+Delete)

**Form not working?**
- Currently just shows a success message
- To send actual emails, use Netlify Forms or Formspree

**Mobile looks broken?**
- Check viewport meta tag in HTML head
- Test in Chrome DevTools mobile view (Ctrl+Shift+M)

Support & Questions
-------------------
- Check the CSS comments for explanations
- Google Font documentation: https://fonts.google.com/
- MDN Web Docs for HTML/CSS/JS: https://developer.mozilla.org/
- VS Code snippets can speed up customization

License
-------
Free to use, modify, and deploy. No attribution required.