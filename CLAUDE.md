# CLAUDE.md

## What — Tech Stack & Project Structure

Personal portfolio website for Bao Gia Le, built with:

- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19.2.3
- **Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`
- **Animations:** Motion (framer-motion successor) — `motion/react`
- **Fonts:** Geist Sans + Geist Mono via `next/font/google`

### Codebase Map

```
jabick/
├── app/
│   ├── components/         # All UI components (client-side)
│   │   ├── Navbar.tsx      # Fixed nav bar, scroll-adaptive bg, mobile hamburger menu
│   │   ├── Hero.tsx        # Full-screen intro with name, tagline, social links, scroll indicator
│   │   ├── About.tsx       # Bio text + education cards (SCSU, TDTU)
│   │   ├── Skills.tsx      # 4-category skill grid (Languages, Frameworks, Databases, Tools)
│   │   ├── Projects.tsx    # Featured project cards with images, tags, GitHub links
│   │   ├── Contact.tsx     # Contact info (email, phone, location) + contact form
│   │   └── Footer.tsx      # Copyright + social links
│   ├── globals.css         # Tailwind import, CSS custom properties (theme colors), scrollbar styles
│   ├── layout.tsx          # Root layout — metadata, fonts, html/body wrapper
│   ├── page.tsx            # Home page — composes Navbar + all sections + Footer
│   └── favicon.ico
├── public/
│   └── projects/           # Project placeholder images (SVG files with .jpg extension)
│       ├── ecommerce.jpg
│       ├── taskapp.jpg
│       └── ai-content.jpg
├── Dockerfile              # Multi-stage production build (node:22-alpine, standalone output)
├── .dockerignore           # Files excluded from Docker build context
├── next.config.ts          # Next.js config (standalone output mode)
├── tsconfig.json           # TypeScript config — strict, bundler resolution, `@/*` path alias
├── postcss.config.mjs      # PostCSS config — uses @tailwindcss/postcss plugin
├── eslint.config.mjs       # ESLint 9 flat config — next/core-web-vitals + next/typescript
├── package.json
└── package-lock.json
```

### Key Architecture Decisions

- **No separate Tailwind config file.** Tailwind v4 is configured entirely through `globals.css` using `@theme inline` and CSS custom properties.
- **All components are client components** (`"use client"`) because they use Motion animations, `useState`, `useEffect`, or `useInView`.
- **`page.tsx` is a server component** that imports and composes all client components.
- **Path alias:** `@/*` maps to the project root (e.g., `@/app/components/Navbar`).

## Why — Purpose & Component Responsibilities

This is a single-page portfolio website. The entire site is one route (`/`) with anchor-based navigation (`#about`, `#skills`, `#projects`, `#contact`).

| Component | Purpose |
|-----------|---------|
| `layout.tsx` | Sets page metadata (title, description), loads Geist fonts, wraps all pages |
| `page.tsx` | Assembles the full page by rendering Navbar → Hero → About → Skills → Projects → Contact → Footer |
| `Navbar` | Persistent navigation. Transparent at top, gains blurred background on scroll. Collapses to hamburger on mobile. Links to resume PDF and section anchors |
| `Hero` | First impression. Shows name, role ("Full-Stack Developer & AI Enthusiast"), summary paragraph, and social icon links (GitHub, LinkedIn, Phone, Email) |
| `About` | Background info. Three paragraphs about experience/goals + sidebar with education cards (SCSU, TDTU) and project count |
| `Skills` | Technical skills organized into 4 cards: Languages, Frameworks, Databases, Tools & DevOps. Data is a `const` array at top of file |
| `Projects` | Showcases featured projects. Each has title, role, date range, description, tech tags, and a GitHub link. Data is a `const` array at top of file. Alternating left/right layout |
| `Contact` | Contact details (email, phone, location, availability) plus a contact form (name, email, message). Form currently calls `preventDefault` — no backend wired |
| `Footer` | Copyright line + GitHub/LinkedIn/Email links |
| `globals.css` | Defines the dark color theme via CSS custom properties (`--background`, `--accent`, `--surface`, etc.), smooth scrolling, custom scrollbar, selection color |

### Where Personal Data Lives

All personal information is hardcoded directly in components (no central data file):

- **Name, tagline, summary, social URLs:** `Hero.tsx`
- **Bio text, education:** `About.tsx`
- **Skills lists:** `Skills.tsx` (top-level `skillCategories` array)
- **Project details:** `Projects.tsx` (top-level `projects` array)
- **Email, phone, location:** `Contact.tsx`
- **Footer links:** `Footer.tsx`
- **Page title/description:** `layout.tsx` metadata export

## How — Development, Verification & Commands

### Install Dependencies

```sh
npm install
```

### Development Server

```sh
npm run dev
```

Starts Next.js dev server with Turbopack at `http://localhost:3000`.

### Verify Changes

Run these commands to validate changes. All must pass cleanly:

```sh
# TypeScript type checking + production build (this is the primary verification step)
npm run build

# Lint with ESLint (next/core-web-vitals + next/typescript rules)
npm run lint
```

`npm run build` runs both TypeScript compilation and static page generation. If it passes, the code is type-safe and renders without runtime errors during SSR/SSG.

There is **no test suite** configured. The build is the primary verification mechanism.

### Production Preview

```sh
npm run build && npm start
```

Builds and serves the production bundle at `http://localhost:3000`.

### Docker

The app is containerized with a multi-stage `Dockerfile` using Next.js standalone output. Build and run:

```sh
docker build -t jabick .
docker run --name jabick -p 3000:3000 jabick
```

Serves the production build at `http://localhost:3000`.

### Common Modifications

**Adding a new section:**
1. Create `app/components/SectionName.tsx` with `"use client"` directive
2. Add the component to `app/page.tsx` in the desired position
3. Add a nav link in `Navbar.tsx` (`navLinks` array) with matching `#anchor`
4. Update the section number prefix (01., 02., etc.) in affected components

**Updating personal info:**
Edit the relevant component directly — data is colocated with the UI (see "Where Personal Data Lives" above).

**Changing theme colors:**
Edit CSS custom properties in `app/globals.css` under `:root`. The `@theme inline` block maps them to Tailwind utility classes (e.g., `bg-accent`, `text-muted`).

**Adding a real project image:**
Replace the SVG placeholder files in `public/projects/` with actual images. The `Projects.tsx` component uses `next/image` with `unoptimized` and `fill` props.
