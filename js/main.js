/**
 * OpenFolio - Main JavaScript
 * Handles dynamic content loading, animations, and interactions
 */

// Configuration
let config = {};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();
  initializeApp();
});

/**
 * Load configuration from config.json
 */
async function loadConfig() {
  try {
    // First, check if config is embedded inline (for local file access)
    if (window.OPENFOLIO_CONFIG) {
      config = window.OPENFOLIO_CONFIG;
      populateContent();
      return;
    }

    // Try to fetch from config.json (works with HTTP server)
    const response = await fetch('./config.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    config = await response.json();
    populateContent();
  } catch (error) {
    console.error('Error loading config.json:', error);
    console.warn('To view sample data when opening directly as a file, please run: python3 -m http.server');
    console.log('Using default content from HTML');
  }
}

/**
 * Populate HTML content from config
 */
function populateContent() {
  if (!config || Object.keys(config).length === 0) return;

  // Update SEO meta tags
  updateMetaTags();

  // Update personal information
  updatePersonalInfo();

  // Update trust indicators
  updateTrustBar();

  // Update expertise section
  updateExpertise();

  // Update work/case studies
  updateWork();

  // Update projects
  updateProjects();

  // Update articles
  updateArticles();

  // Update testimonials
  updateTestimonials();

  // Update FAQ
  updateFAQ();

  // Update footer
  updateFooter();

  // Update structured data
  updateStructuredData();
}

/**
 * Update meta tags for SEO
 */
function updateMetaTags() {
  const { personal, seo } = config;

  // Page title and description
  document.getElementById('page-title').textContent = `${personal.name} — ${personal.title}`;
  document.getElementById('page-description').content = seo.description;
  document.getElementById('page-author').content = seo.author;
  document.getElementById('page-canonical').href = personal.website;

  // Open Graph
  document.getElementById('og-url').content = personal.website;
  document.getElementById('og-title').content = `${personal.name} — ${personal.title}`;
  document.getElementById('og-description').content = seo.description;
  document.getElementById('og-image').content = personal.website + seo.ogImage;

  // Twitter
  document.getElementById('twitter-url').content = personal.website;
  document.getElementById('twitter-title').content = `${personal.name} — ${personal.title}`;
  document.getElementById('twitter-description').content = seo.description;
  document.getElementById('twitter-image').content = personal.website + seo.ogImage;
}

/**
 * Update personal information sections
 */
function updatePersonalInfo() {
  const { personal } = config;

  // Boot loader terminal title
  const bootTitle = document.getElementById('boot-terminal-title');
  if (bootTitle) bootTitle.textContent = `${personal.firstName.toLowerCase()}@${personal.lastName.toLowerCase()}:~$`;

  // Navigation logo
  const navLogo = document.getElementById('nav-logo-text');
  if (navLogo) navLogo.innerHTML = `${personal.firstName}<span class="highlight">${personal.lastName}</span>`;

  // Hero section
  document.getElementById('hero-title-text').textContent = personal.title;
  document.getElementById('hero-subtitle-text').textContent = `"${personal.subtitle}"`;

  // Hero bio
  const heroBio = document.getElementById('hero-bio');
  if (heroBio && personal.bio) {
    heroBio.innerHTML = personal.bio.map(p => `<p>${p}</p>`).join('');
  }

  // Hero image
  const heroHeadshot = document.getElementById('hero-headshot');
  if (heroHeadshot) {
    heroHeadshot.src = personal.image;
    heroHeadshot.alt = `${personal.name} - ${personal.title}`;
  }

  // Stats
  document.getElementById('stat-years').setAttribute('data-count', personal.yearsExperience);
  document.getElementById('stat-projects').setAttribute('data-count', personal.projectsCompleted);
  document.getElementById('stat-stars').setAttribute('data-count', personal.githubStars);

  // Contact section
  document.getElementById('email-link').href = `mailto:${personal.email}`;
  document.getElementById('email-link').textContent = personal.email;

  // Footer
  document.getElementById('footer-name').textContent = personal.name;
  document.getElementById('footer-title').textContent = personal.title;
  document.getElementById('footer-subtitle').textContent = personal.subtitle;
  document.getElementById('faq-name').textContent = personal.firstName.toLowerCase() + '-' + personal.lastName.toLowerCase();
}

/**
 * Update trust bar
 */
function updateTrustBar() {
  const { trust } = config;
  const trustContainer = document.getElementById('trust-indicators');

  if (!trustContainer || !trust) return;

  // Add last updated indicator
  const lastUpdated = {
    icon: "🔄",
    text: `Last updated: <time datetime="${new Date().toISOString().split('T')[0]}">${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>`
  };
  const allTrust = [...trust, lastUpdated];

  trustContainer.innerHTML = allTrust.map(item => `
    <div class="trust-item">
      <span class="trust-icon">${item.icon}</span>
      <span class="trust-text">${item.text}</span>
    </div>
  `).join('');
}

/**
 * Update expertise/pillars section
 */
function updateExpertise() {
  const { expertise } = config;
  const expertiseGrid = document.getElementById('expertise-grid');

  if (!expertiseGrid || !expertise) return;

  expertiseGrid.innerHTML = expertise.map(item => `
    <div class="pillar-card">
      <div class="card-header">
        <span class="card-icon">${item.icon}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>
      <div class="card-body">
        <p>${item.description}</p>
        <ul class="feature-list">
          ${item.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ${item.disclaimer ? `<div class="disclaimer-note">${item.disclaimer}</div>` : ''}
        <a href="${item.link}" class="card-link">See details →</a>
      </div>
    </div>
  `).join('');
}

/**
 * Update work/case studies section
 */
function updateWork() {
  const { work } = config;
  const workGrid = document.getElementById('work-grid');

  if (!workGrid || !work) return;

  workGrid.innerHTML = work.map(item => `
    <article class="work-card" id="${item.id}">
      <div class="work-header">
        <span class="work-category">${item.category}</span>
        <span class="work-date">${item.date}</span>
      </div>
      <h3 class="work-title">${item.title}</h3>
      <p class="work-description">${item.description}</p>
      <div class="work-metrics">
        ${item.metrics.map(metric => `
          <div class="metric">
            <span class="metric-value">${metric.value}</span>
            <span class="metric-label">${metric.label}</span>
          </div>
        `).join('')}
      </div>
      ${item.disclaimer ? `<div class="disclaimer-badge">${item.disclaimer}</div>` : ''}
      <div class="work-links">
        ${item.links.map(link => `
          <a href="${link.url}" class="work-link" target="_blank" rel="noopener">${link.text}</a>
        `).join('')}
      </div>
    </article>
  `).join('');
}

/**
 * Update projects section
 */
function updateProjects() {
  const { projects, social } = config;
  const projectsGrid = document.getElementById('projects-grid');

  if (!projectsGrid || !projects) return;

  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <h4 class="project-name">${project.name}</h4>
      <p class="project-desc">${project.description}</p>
      <div class="project-meta">
        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>
      <a href="${project.github}" class="project-link" target="_blank" rel="noopener">GitHub →</a>
    </div>
  `).join('');

  // Update "All code on GitHub" link
  document.getElementById('github-all-link').href = social.github;
}

/**
 * Update articles/writing section
 */
function updateArticles() {
  const { articles, social } = config;
  const articlesGrid = document.getElementById('articles-grid');

  if (!articlesGrid || !articles) return;

  articlesGrid.innerHTML = articles.map(article => `
    <article class="article-card">
      <span class="article-date">${article.date}</span>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <a href="${article.url}" class="article-link" target="_blank" rel="noopener ugc nofollow">
        Read on Medium →
      </a>
    </article>
  `).join('');

  // Update "See all writing" link
  document.getElementById('medium-all-link').href = social.medium;
}

/**
 * Update testimonials section
 */
function updateTestimonials() {
  const { testimonials } = config;
  const testimonialsGrid = document.getElementById('testimonials-grid');

  if (!testimonialsGrid || !testimonials) return;

  testimonialsGrid.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="testimonial-author">
        <strong>${testimonial.author}</strong> - ${testimonial.role}
      </div>
    </div>
  `).join('');
}

/**
 * Update FAQ section
 */
function updateFAQ() {
  const { faq } = config;
  const faqList = document.getElementById('faq-list');

  if (!faqList || !faq) return;

  faqList.innerHTML = faq.map((item, index) => `
    <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 class="faq-question" itemprop="name">
        <button class="faq-toggle" aria-expanded="false" data-faq="${index}">
          <span>${item.question}</span>
          <span class="faq-icon">+</span>
        </button>
      </h3>
      <div class="faq-answer" id="faq-answer-${index}" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
          <p>${item.answer}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Add FAQ toggle functionality
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const faqIndex = button.getAttribute('data-faq');
      const answer = document.getElementById(`faq-answer-${faqIndex}`);

      button.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
}

/**
 * Update footer social links
 */
function updateFooter() {
  const { social } = config;
  const footerSocial = document.getElementById('footer-social');

  if (!footerSocial || !social) return;

  const socialIcons = {
    twitter: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    medium: '<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>',
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>'
  };

  const socialLabels = {
    twitter: 'X (Twitter)',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    medium: 'Medium',
    youtube: 'YouTube'
  };

  footerSocial.innerHTML = Object.entries(social)
    .filter(([key, value]) => value && socialIcons[key])
    .map(([key, value]) => `
      <li>
        <a href="${value}" target="_blank" rel="me noopener${key === 'medium' ? ' ugc nofollow' : ''}">
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            ${socialIcons[key]}
          </svg>
          ${socialLabels[key]}
        </a>
      </li>
    `).join('');

  // Update current year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Update footer copyright
  const { personal } = config;
  document.getElementById('footer-copyright').innerHTML =
    `© <span id="current-year">${new Date().getFullYear()}</span> ${personal.name}. All rights reserved.`;
}

/**
 * Update structured data (Schema.org)
 */
function updateStructuredData() {
  const { personal, schema, social, faq } = config;

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.name,
    "url": personal.website,
    "image": personal.website + personal.image,
    "jobTitle": schema.jobTitle,
    "description": schema.description,
    "knowsAbout": schema.knowsAbout,
    "sameAs": Object.values(social).filter(url => url),
    "alumniOf": {
      "@type": "Organization",
      "name": schema.alumniOf
    },
    "worksFor": schema.worksFor.map(company => ({
      "@type": "Organization",
      "name": company
    }))
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": personal.name,
    "url": personal.website,
    "description": config.seo.description,
    "author": {
      "@type": "Person",
      "name": personal.name
    },
    "inLanguage": config.seo.language
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": personal.website
    }]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Inject schemas
  document.getElementById('person-schema').textContent = JSON.stringify(personSchema);
  document.getElementById('website-schema').textContent = JSON.stringify(websiteSchema);
  document.getElementById('breadcrumb-schema').textContent = JSON.stringify(breadcrumbSchema);
  document.getElementById('faq-schema').textContent = JSON.stringify(faqSchema);
}

/**
 * Initialize app functionality
 */
function initializeApp() {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Animate stats counter
  animateStats();

  // Smooth scroll for anchor links
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

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.pillar-card, .work-card, .project-card, .article-card').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Animate statistics counter
 */
function animateStats() {
  const stats = document.querySelectorAll('.stat-value');

  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        stat.textContent = target;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 16);
  });
}

/**
 * Scroll to top functionality
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Export functions for external use
window.OpenFolio = {
  scrollToTop,
  loadConfig
};
