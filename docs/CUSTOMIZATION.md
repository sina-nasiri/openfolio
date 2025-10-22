# OpenFolio Customization Guide

This guide explains how to customize every aspect of your OpenFolio portfolio.

## Table of Contents

1. [Configuration File Overview](#configuration-file-overview)
2. [Personal Information](#personal-information)
3. [SEO Settings](#seo-settings)
4. [Schema.org Data](#schemaorg-data)
5. [Social Links](#social-links)
6. [Expertise/Services](#expertiseservices)
7. [Trust Indicators](#trust-indicators)
8. [Work/Case Studies](#workcase-studies)
9. [Projects](#projects)
10. [Articles/Writing](#articleswriting)
11. [Testimonials](#testimonials)
12. [FAQ](#faq)
13. [Styling Customization](#styling-customization)
14. [Advanced Customization](#advanced-customization)

---

## Configuration File Overview

All content is managed through `config.json` in the root directory. The file is structured in sections:

```json
{
  "personal": { },
  "seo": { },
  "schema": { },
  "social": { },
  "expertise": [ ],
  "trust": [ ],
  "work": [ ],
  "projects": [ ],
  "articles": [ ],
  "testimonials": [ ],
  "faq": [ ]
}
```

---

## Personal Information

Located in `config.personal`:

```json
{
  "personal": {
    "name": "Your Full Name",
    "firstName": "First",
    "lastName": "Last",
    "title": "Your Professional Title",
    "subtitle": "Your Specialization or Tagline",
    "email": "your.email@example.com",
    "website": "https://yourwebsite.com",
    "image": "/assets/images/headshot.jpg",
    "bio": [
      "First paragraph of your professional bio...",
      "Second paragraph highlighting achievements..."
    ],
    "yearsExperience": 10,
    "projectsCompleted": 50,
    "githubStars": 100
  }
}
```

### Fields Explained

- **name**: Your full name (used in SEO, schema, footer)
- **firstName/lastName**: Used for terminal username display
- **title**: Your professional title (appears in hero, meta tags)
- **subtitle**: Specialization (shown in code snippet format)
- **email**: Contact email (creates mailto: link)
- **website**: Your canonical URL (used in meta tags, schema)
- **image**: Path to your headshot image
- **bio**: Array of paragraphs (supports HTML like `<strong>`)
- **yearsExperience**: Number for animated counter
- **projectsCompleted**: Number for animated counter
- **githubStars**: Number for animated counter

### Image Requirements

**Headshot (`/assets/images/headshot.jpg`)**
- Recommended size: 400x400px
- Format: JPG or PNG
- Professional photo with good lighting
- Square aspect ratio

---

## SEO Settings

Located in `config.seo`:

```json
{
  "seo": {
    "description": "Compelling description under 155 characters for search results",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "author": "Your Name",
    "ogImage": "/assets/images/og-image.jpg",
    "twitterHandle": "@YourTwitter",
    "language": "en-US"
  }
}
```

### SEO Best Practices

**Description**
- Keep under 155 characters
- Include primary keywords naturally
- Make it compelling to click
- Don't keyword stuff

**Keywords**
- 5-10 relevant keywords
- Mix broad and specific terms
- Include technologies, skills, specializations

**OG Image (`/assets/images/og-image.jpg`)**
- Recommended size: 1200x630px
- Format: JPG (under 1MB)
- Include your name and title
- Ensure text is readable at small sizes

---

## Schema.org Data

Located in `config.schema`:

```json
{
  "schema": {
    "jobTitle": "Your Job Title",
    "description": "Brief professional description",
    "knowsAbout": [
      "Skill 1", "Skill 2", "Technology 1", "Technology 2"
    ],
    "alumniOf": "Your University or School",
    "worksFor": [
      "Current Company",
      "Previous Company"
    ]
  }
}
```

### Why Schema Matters

Schema.org structured data helps search engines understand your:
- Professional identity
- Skills and expertise
- Work history
- Educational background

This can lead to rich results in Google Search.

---

## Social Links

Located in `config.social`:

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

### Supported Platforms

Currently supported with icons:
- Twitter/X
- LinkedIn
- GitHub
- Medium
- YouTube

**To add more platforms**: Edit `js/main.js` → `updateFooter()` function and add icon SVG path.

---

## Expertise/Services

Located in `config.expertise` (array):

```json
{
  "expertise": [
    {
      "icon": "🔍",
      "title": "Service Name",
      "description": "Brief description of this service or skill area.",
      "features": [
        "Feature or skill 1",
        "Feature or skill 2",
        "Feature or skill 3"
      ],
      "disclaimer": "⚠️ Optional disclaimer text",
      "link": "#anchor-link"
    }
  ]
}
```

### Tips

- Use **emoji icons** for visual appeal
- Keep descriptions under 150 characters
- List 3-5 key features per expertise area
- Use `disclaimer` for legal/compliance notes (trading, finance, etc.)
- Link to relevant work examples with `link`

---

## Trust Indicators

Located in `config.trust` (array):

```json
{
  "trust": [
    {
      "icon": "📊",
      "text": "<strong>10+</strong> Years Experience"
    },
    {
      "icon": "🏢",
      "text": "Company A, Company B, <strong>Notable Clients</strong>"
    }
  ]
}
```

### E-E-A-T Signals

Display trust indicators that demonstrate:
- **Experience**: Years in industry, projects completed
- **Expertise**: Certifications, publications, speaking
- **Authoritativeness**: Companies worked with, clients
- **Trustworthiness**: Reviews, testimonials, transparency

The "Last updated" indicator is added automatically.

---

## Work/Case Studies

Located in `config.work` (array):

```json
{
  "work": [
    {
      "id": "unique-id",
      "category": "SEO",
      "date": "2024",
      "title": "Project Title",
      "description": "Detailed description of the project and your role.",
      "metrics": [
        {"value": "+123%", "label": "Metric Name"},
        {"value": "$50K", "label": "Revenue Generated"}
      ],
      "disclaimer": "⚠️ Optional disclaimer",
      "links": [
        {"text": "Case Study →", "url": "https://..."},
        {"text": "GitHub →", "url": "https://..."}
      ]
    }
  ]
}
```

### Best Practices

**Metrics**
- Use 3 key metrics per project
- Make them specific and measurable
- Include direction (+/-) and units
- Be honest (past performance disclaimers for trading)

**Categories**
- Keep consistent: "SEO", "Development", "Algo Trading", "Blockchain"
- Used for visual tagging

**Links**
- Link to detailed case studies
- GitHub repos (if public)
- Live demos
- Published articles

---

## Projects

Located in `config.projects` (array):

```json
{
  "projects": [
    {
      "name": "project-name",
      "description": "Brief description of what the project does.",
      "tags": ["Technology", "Language", "Category"],
      "github": "https://github.com/username/repo"
    }
  ]
}
```

### Guidelines

- Use **kebab-case** for project names
- Keep descriptions under 120 characters
- Use 2-4 relevant tags
- Link to public GitHub repos (or live demos)

---

## Articles/Writing

Located in `config.articles` (array):

```json
{
  "articles": [
    {
      "date": "October 15, 2025",
      "title": "Article Title",
      "excerpt": "Brief excerpt or summary of the article content.",
      "url": "https://medium.com/@username/article-slug"
    }
  ]
}
```

### Content Strategy

- Showcase 4-8 best articles
- Include date for freshness signals
- Write compelling excerpts (under 150 chars)
- Link to Medium, Dev.to, personal blog, etc.

---

## Testimonials

Located in `config.testimonials` (array):

```json
{
  "testimonials": [
    {
      "text": "The testimonial quote goes here. Keep it focused on results and impact.",
      "author": "Client Name",
      "role": "Title, Company"
    }
  ]
}
```

### Getting Good Testimonials

Ask clients/colleagues to focus on:
- Specific results achieved
- Your unique skills/approach
- What makes you different
- Would they recommend you?

**Pro tip**: Reach out to past clients and ask:
> "What specific results did you see from our work together?"

---

## FAQ

Located in `config.faq` (array):

```json
{
  "faq": [
    {
      "question": "Clear, specific question your audience asks?",
      "answer": "Detailed answer with specifics. Include your expertise and unique approach."
    }
  ]
}
```

### FAQ Best Practices

**Questions to Include**
- What services do you offer?
- What's your process/methodology?
- What technologies do you use?
- How can clients verify your results?
- What makes you different?

**SEO Benefits**
- FAQ schema enables rich results
- Targets long-tail keywords
- Demonstrates expertise
- Increases page depth

---

## Styling Customization

### Color Scheme

Edit `css/style.css` → `:root` variables:

```css
:root {
  /* Primary Colors */
  --color-primary: #10b981;        /* Main brand color */
  --color-primary-dark: #059669;   /* Hover state */
  --color-accent: #3b82f6;         /* Secondary accent */

  /* Background Colors */
  --color-bg: #0a0e27;             /* Main background */
  --color-bg-secondary: #111633;    /* Cards, sections */
  --color-bg-tertiary: #1a1f3a;    /* Borders, highlights */

  /* Text Colors */
  --color-text: #e4e4e7;           /* Main text */
  --color-text-muted: #a1a1aa;     /* Secondary text */

  /* Terminal Colors */
  --color-terminal-green: #00ff41;
  --color-terminal-blue: #00d9ff;
  --color-terminal-yellow: #ffeb3b;
}
```

### Popular Color Schemes

**Blue Professional**
```css
--color-primary: #3b82f6;
--color-accent: #06b6d4;
```

**Purple Creative**
```css
--color-primary: #8b5cf6;
--color-accent: #ec4899;
```

**Orange Energetic**
```css
--color-primary: #f97316;
--color-accent: #eab308;
```

### Typography

Change fonts in `index.html`:

```html
<!-- Replace Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update CSS:

```css
:root {
  --font-mono: 'Your Mono Font', monospace;
  --font-sans: 'Your Sans Font', sans-serif;
}
```

### Spacing & Layout

Adjust spacing variables:

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
}
```

---

## Advanced Customization

### Adding New Sections

1. **Add HTML structure** in `index.html`:

```html
<section class="my-section" id="my-section">
  <div class="container">
    <h2 class="section-title">
      <span class="prompt">$</span> My Section Title
    </h2>
    <div id="my-content">
      <!-- Dynamic content goes here -->
    </div>
  </div>
</section>
```

2. **Add data to config.json**:

```json
{
  "mySection": [
    { "title": "Item 1", "description": "..." }
  ]
}
```

3. **Add JavaScript function** in `js/main.js`:

```javascript
function updateMySection() {
  const { mySection } = config;
  const container = document.getElementById('my-content');

  if (!container || !mySection) return;

  container.innerHTML = mySection.map(item => `
    <div class="my-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `).join('');
}
```

4. **Call function** in `populateContent()`:

```javascript
function populateContent() {
  // ... existing code
  updateMySection();
}
```

### Custom Animations

Add CSS animations:

```css
@keyframes myAnimation {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.my-element {
  animation: myAnimation 0.5s ease forwards;
}
```

### Integration with CMS

To connect OpenFolio with a CMS:

1. Replace `fetch('/config.json')` with your API endpoint
2. Transform API response to match config structure
3. Call `populateContent()` after fetching

Example:

```javascript
async function loadConfig() {
  try {
    const response = await fetch('https://your-cms.com/api/portfolio');
    const apiData = await response.json();

    // Transform to config format
    config = transformApiData(apiData);
    populateContent();
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Testing Your Changes

### Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form/email links work
- [ ] Mobile responsive (test on phone)
- [ ] All sections populated
- [ ] No console errors
- [ ] SEO meta tags correct
- [ ] Social media preview looks good
- [ ] Structured data validates

### Testing Tools

- **SEO**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Mobile**: Chrome DevTools (F12 → Toggle Device Toolbar)
- **Performance**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Social Cards**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **Validation**: [W3C Validator](https://validator.w3.org/)

---

## Common Issues & Solutions

### Config not loading

**Problem**: Content doesn't update from config.json

**Solutions**:
1. Check browser console for errors (F12)
2. Verify config.json is valid JSON (use [JSONLint](https://jsonlint.com/))
3. Ensure you're running from a web server (not `file://`)
4. Check file path is correct (`/config.json`)

### Images not showing

**Problem**: Images show broken icon

**Solutions**:
1. Verify image paths in config.json
2. Check images exist in `/assets/images/`
3. Use absolute paths starting with `/`
4. Check file names match exactly (case-sensitive)

### Styling looks wrong

**Problem**: Layout or colors don't look right

**Solutions**:
1. Clear browser cache (Ctrl+Shift+R)
2. Check CSS file loaded correctly
3. Verify CSS variable changes saved
4. Test in incognito mode

---

## Need Help?

- 📖 Check the main [README.md](../README.md)
- 🐛 [Report an issue](https://github.com/sina-nasiri/openfolio/issues)
- 💬 [Start a discussion](https://github.com/sina-nasiri/openfolio/discussions)

---

**Happy customizing! 🚀**
