# Lytle Landscape Website

## Overview

Marketing website for Lytle Landscape, an Orange County-based landscape design and horticulture consultation business.

## Tech Stack

- **Static Site Generator**: Eleventy 3.1.x
- **Templating**: Nunjucks
- **Styling**: Tailwind CSS 4.1.x (CSS-first configuration)
- **JavaScript**: Stimulus 3.2.x (via importmap)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── _data/           # Global data files
│   ├── site.json    # Site metadata, contact info, analytics
│   └── navigation.json
├── _includes/
│   ├── layouts/     # Page templates
│   │   ├── base.njk
│   │   ├── page.njk
│   │   └── post.njk
│   └── partials/    # Reusable components
│       ├── head.njk
│       ├── nav.njk
│       ├── footer.njk
│       └── scripts.njk
├── assets/
│   ├── css/main.css # Tailwind entry point
│   ├── js/          # Stimulus controllers
│   └── images/
├── content/
│   └── posts/       # Blog posts (Markdown)
└── *.njk            # Root-level pages
```

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:8080)
npm run build  # Production build to dist/
npm run clean  # Remove dist/
```

## Key Files

- `eleventy.config.js` - Eleventy configuration with Tailwind PostCSS processing
- `src/_data/site.json` - Site metadata, phone, license, GA ID, Web3Forms key
- `src/assets/css/main.css` - Tailwind @theme with custom colors
- `src/_includes/partials/nav.njk` - Navigation with Stimulus mobile menu

## Custom Colors

```css
--color-forest: #2C5530;  /* Primary green */
--color-lime: #7AB800;    /* CTA buttons */
--color-spring: #98FB98;  /* Accents */
--color-stone: #333333;   /* Body text */
```

## Notes

- Site uses trailing-slash URLs (e.g., `/garden-consultation/`)
- Contact form uses Web3Forms (key in site.json)
- Google Analytics: G-X3PQC5JE31
- Custom domain: lytle-landscape.com (CNAME in src/assets/)
