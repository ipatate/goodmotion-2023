# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server (astro dev)

# Build
npm run build        # Build + generate robots.txt (astro build && node robots.js)
npm run preview      # Preview production build

# Code quality
npm run lint         # Lint with oxlint
npm run lint:fix     # Auto-fix lint issues
npm run fmt          # Format with oxfmt
npm run fmt:check    # Check formatting without writing

# Utilities
npm run favicon      # Regenerate favicons (node favicon.js)
npm run robots       # Regenerate robots.txt (node robots.js)
```

## Environment Variables

- `SITE_URL` - canonical site URL (default: `https://www.goodmotion.fr`)
- `CONTACT_URL` - API endpoint for the contact form POST request
- `PUBLIC_CONTACT_URL` - same URL exposed to the Vue contact form on the client side

## Architecture

This is an **Astro 6** site (static output, `.html` file format) for the goodmotion.fr agency website, targeting the French market (Annecy / Geneva / Lausanne).

### Tech stack
- **Astro** with MDX pages and Astro View Transitions (`ClientRouter`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (configured in `src/styles/global.css` with `@theme`)
- **Vue 3** for the interactive contact form (`src/components/ContactForm.vue`)
- **astro-icon** with `@iconify-json/ic` and `@iconify-json/mdi` icon sets

### Content model
- Most pages live in `src/pages/` as `.mdx` files using `PageLayout.astro` via frontmatter (`layout`, `title`, `description`, `metaTitle`, `subtitle`, `showToc`)
- `PageLayout.astro` picks a random accent color (`casper`, `secondary`, `summer-green`, `alto`) for each page render
- The **podcast** page pulls live data from a remote RSS feed via an Astro content collection loader defined in `src/content.config.ts`
- Site-wide content (navigation, services list, tools, partners) lives in `data.ts` at the root - this is the first place to update for copy/content changes

### Layouts
- `BaseLayout.astro` - full HTML shell: SEO tags, structured data (Organization, LocalBusiness, WebSite, BreadcrumbList), analytics script (Plausible), Header/Footer
- `PageLayout.astro` - wraps `BaseLayout` with `HeroPage` + `Toc` + prose content area; used by MDX pages via frontmatter `layout`

### Styling
- Tailwind v4 custom theme is defined in `src/styles/global.css` under `@theme` - color palettes: `primary`, `casper`, `secondary`, `summer-green`, `accent`, `alto`
- Dynamic Tailwind classes (colors generated from `data.ts` and runtime logic) are safelisted via `@source inline(...)` in `global.css`
- `@source "../../data.ts"` tells Tailwind to scan `data.ts` for class names used in the `class` fields

### SEO & structured data
- `Seo.astro` handles meta tags
- `StructuredData.astro` emits JSON-LD for Organization, LocalBusiness, WebSite, and BreadcrumbList schemas

### Contact form
- `ContactForm.vue` is a Vue 3 SFC with client-side validation; it POSTs JSON to `PUBLIC_CONTACT_URL`
- Includes a honeypot checkbox field (visually hidden, positioned off-screen) to catch bots
