# Lytle Landscape

Marketing website for Lytle Landscape, an Orange County-based landscape design and horticulture consultation business.

## Tech Stack

- [Eleventy](https://www.11ty.dev/) 3.1.x - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) 4.1.x - Utility-first CSS
- [Stimulus](https://stimulus.hotwired.dev/) 3.2.x - JavaScript framework

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:8080

## Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

## Deployment

Automatically deploys to GitHub Pages on push to `master` branch via GitHub Actions.

**Live site:** https://lytle-landscape.com

## Project Structure

```
src/
├── _data/           # Site data (JSON)
├── _includes/       # Layouts and partials
├── assets/          # CSS, JS, images
├── content/posts/   # Blog posts (Markdown)
└── *.njk            # Root pages
```

## License

Copyright Lytle Landscape. All rights reserved.
