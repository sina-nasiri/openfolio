# Images Directory

This directory should contain your portfolio images.

## Required Images

### 1. Headshot (`headshot.jpg`)
- **Purpose**: Your profile photo displayed in the hero section
- **Recommended size**: 400x400px (square)
- **Format**: JPG or PNG
- **Max file size**: 500KB (optimize with TinyPNG)
- **Tips**:
  - Professional photo with good lighting
  - Clean background
  - Centered composition
  - Friendly, approachable expression

### 2. Open Graph Image (`og-image.jpg`)
- **Purpose**: Social media preview when sharing your portfolio
- **Required size**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: JPG
- **Max file size**: 1MB
- **Tips**:
  - Include your name and title
  - Use brand colors
  - Ensure text is readable when small
  - Test on [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Optional Images

Add any additional images for:
- Case study screenshots
- Project previews
- Certification badges
- Company logos (for work history)

## Image Optimization Tools

Before uploading, optimize your images:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

## Creating OG Images

Tools for creating Open Graph images:
- [Canva](https://canva.com) - Templates + easy editor
- [Figma](https://figma.com) - Professional design tool
- [Remove.bg](https://remove.bg) - Remove photo backgrounds

## Placeholder Images

For testing, you can use placeholder services:
- `https://via.placeholder.com/400x400` - Generic placeholders
- `https://ui-avatars.com/api/?name=Your+Name&size=400` - Avatar generator

Update `config.json` to point to your images:

```json
{
  "personal": {
    "image": "/assets/images/headshot.jpg"
  },
  "seo": {
    "ogImage": "/assets/images/og-image.jpg"
  }
}
```

---

**Note**: This README file won't be visible on your live site. It's just documentation for you.
