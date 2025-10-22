# OpenFolio

> **A modern, terminal-inspired portfolio template for developers, SEO specialists, and tech professionals**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

OpenFolio is a fully customizable, SEO-optimized portfolio template with a unique terminal/geek aesthetic. Built with vanilla HTML, CSS, and JavaScript, it's easy to customize and deploy.

## ✨ Features

### 🎨 **Design**
- Modern terminal-inspired UI with code window aesthetics
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Dark theme optimized for readability
- Custom typography with JetBrains Mono and Inter fonts

### 🚀 **Performance**
- Pure vanilla JavaScript (no frameworks required)
- Minimal dependencies
- Fast loading times
- Optimized for Core Web Vitals

### 🔍 **SEO Optimized**
- Complete meta tags (Open Graph, Twitter Cards)
- Structured data (Schema.org):
  - Person schema
  - Website schema
  - FAQ schema
  - Breadcrumb schema
- Semantic HTML5
- Accessible (ARIA labels, keyboard navigation)
- Sitemap and robots.txt ready

### ⚙️ **Easy Customization**
- Single `config.json` file for all content
- No need to edit HTML directly
- Dynamic content loading
- Modular component structure

### 📦 **Sections Included**
- Hero section with animated stats
- Trust/E-E-A-T indicators
- Expertise/Services showcase (4 pillars)
- Featured work/case studies with metrics
- Projects portfolio with GitHub links
- Writing/blog articles feed
- Testimonials
- FAQ with structured data
- Contact section
- Social media links

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/sina-nasiri/openfolio.git
cd openfolio
```

### 2. Customize Your Content

Edit `config.json` with your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "website": "https://yourwebsite.com",
    ...
  }
}
```

See [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) for detailed customization guide.

### 3. Add Your Images

Replace the placeholder images in `/assets/images/`:
- `headshot.jpg` - Your profile photo (recommended: 400x400px)
- `og-image.jpg` - Open Graph image for social sharing (recommended: 1200x630px)
- `favicon.svg` - Your favicon

### 4. Deploy

#### Option A: GitHub Pages (Free)
1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select source: main branch / root
4. Your site will be live at `https://yourusername.github.io/openfolio/`

#### Option B: Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. Deploy!

#### Option C: Vercel (Free)
1. Import your GitHub repository
2. Deploy with default settings

#### Option D: Traditional Hosting
Upload all files to your web server via FTP/SFTP.

## 📁 Project Structure

```
openfolio/
├── index.html              # Main HTML file
├── config.json             # Your portfolio configuration
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── images/             # Your images
│   │   ├── headshot.jpg
│   │   ├── og-image.jpg
│   │   └── ...
│   └── favicon.svg         # Favicon
├── docs/
│   ├── CUSTOMIZATION.md    # Detailed customization guide
│   └── SEO-GUIDE.md        # SEO optimization tips
├── LICENSE                 # MIT License
└── README.md              # This file
```

## ⚙️ Configuration Guide

### Basic Information

```json
{
  "personal": {
    "name": "Your Name",
    "firstName": "Your",
    "lastName": "Name",
    "title": "Your Professional Title",
    "subtitle": "Your Specialization",
    "email": "your.email@example.com",
    "website": "https://yourwebsite.com",
    "image": "/assets/images/headshot.jpg",
    "bio": [
      "First paragraph of your bio...",
      "Second paragraph..."
    ],
    "yearsExperience": 10,
    "projectsCompleted": 50,
    "githubStars": 100
  }
}
```

### SEO Configuration

```json
{
  "seo": {
    "description": "Your meta description (155 characters max)",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "author": "Your Name",
    "ogImage": "/assets/images/og-image.jpg",
    "twitterHandle": "@YourHandle",
    "language": "en-US"
  }
}
```

### Social Links

```json
{
  "social": {
    "twitter": "https://twitter.com/YourHandle",
    "linkedin": "https://linkedin.com/in/YourProfile",
    "github": "https://github.com/YourUsername",
    "medium": "https://medium.com/@YourProfile",
    "youtube": "https://youtube.com/@YourChannel"
  }
}
```

See [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) for complete configuration options.

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --color-primary: #10b981;      /* Main accent color */
  --color-accent: #3b82f6;       /* Secondary accent */
  --color-bg: #0a0e27;           /* Background color */
  --color-text: #e4e4e7;         /* Text color */
  /* ... more variables */
}
```

### Fonts

The template uses:
- **JetBrains Mono** - For code/terminal elements
- **Inter** - For body text

Change fonts in `index.html` (Google Fonts link) and update CSS variables.

### Sections

Add, remove, or reorder sections by editing `index.html`. All sections are independent and modular.

## 📊 SEO Best Practices

OpenFolio includes:

✅ **Meta Tags**
- Title, description, author
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs

✅ **Structured Data**
- Person schema (your professional identity)
- Website schema
- FAQ schema (for rich results)
- Breadcrumb navigation

✅ **Performance**
- Optimized images
- Minimal CSS/JS
- Fast loading times

✅ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

See [docs/SEO-GUIDE.md](./docs/SEO-GUIDE.md) for advanced SEO tips.

## 🛠️ Development

### Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Making Changes

1. Edit `config.json` for content changes
2. Edit `css/style.css` for styling changes
3. Edit `js/main.js` for functionality changes
4. Refresh your browser to see changes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by terminal/CLI interfaces
- Fonts: [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Inter](https://rsms.me/inter/)
- Icons: Inline SVG from [Simple Icons](https://simpleicons.org/)

## 📧 Support

If you have questions or need help:

- 📖 Read the [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) guide
- 🐛 Report bugs via [GitHub Issues](https://github.com/sina-nasiri/openfolio/issues)
- 💬 Start a [GitHub Discussion](https://github.com/sina-nasiri/openfolio/discussions)

## ⭐ Show Your Support

If you find this template helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🔀 Contributing code
- 📢 Sharing with others

## 📸 Screenshots

> Add your deployed portfolio screenshot here after customization!

## 🚀 Examples

Portfolios built with OpenFolio:

- [Example 1](https://example1.com) - Description
- [Example 2](https://example2.com) - Description
- **Your site?** Submit a PR to add yours!

## 🗺️ Roadmap

- [ ] Dark/Light theme toggle
- [ ] Blog integration
- [ ] Multi-language support
- [ ] More color schemes
- [ ] Animation presets
- [ ] CMS integration options

## 💡 Tips

1. **Keep config.json updated** - All your content should be in one place
2. **Optimize images** - Use tools like TinyPNG or ImageOptim
3. **Test SEO** - Use Google's Rich Results Test
4. **Mobile first** - Always test on mobile devices
5. **Accessibility** - Use tools like Lighthouse to check

## 📚 Additional Resources

- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [CSS Guidelines](https://cssguidelin.es/)
- [JavaScript Best Practices](https://github.com/ryanmcdermott/clean-code-javascript)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

**Built with ❤️ by [Sina Nasiri](https://github.com/sina-nasiri)**

**Give it a star ⭐ if you find it useful!**
