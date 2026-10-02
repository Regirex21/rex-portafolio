# Regina Servín · Portfolio

Personal portfolio built with Astro and Tailwind CSS, in Spanish and English.

**Live site:** [rex-portafolio.vercel.app](https://rex-portafolio.vercel.app)

## Tech stack

- Astro 6
- Tailwind CSS 4
- TypeScript
- Vercel

## Features

- Bilingual (ES at `/`, EN at `/en/`) with `hreflang` alternates
- Single content source: every page reads from `src/data/site.ts`
- Projects, experience timeline, skills, education and certifications
- Downloadable resume in both languages (`public/files/`)
- Open Graph / Twitter preview image, canonical URLs and favicon
- Responsive layout, scroll reveal and `prefers-reduced-motion` support

## Project structure

```text
/
├── public/
│   ├── components/      # project screenshots (.webp)
│   ├── files/           # resume PDFs (ES / EN)
│   ├── icons/
│   └── og.png           # social preview image
├── src/
│   ├── components/      # Home, Projects, About, Contact (take a `lang` prop)
│   ├── data/
│   │   └── site.ts      # ← edit content here
│   ├── layouts/
│   │   └── Layout.astro # nav, footer, SEO tags, shared scripts
│   ├── pages/           # thin wrappers: /, /projects, /about, /contact
│   │   └── en/          # same pages with lang="en"
│   └── styles/
└── package.json
```

## Updating content

1. Edit `src/data/site.ts` (links, experience, projects, skills, certifications).
2. To replace the resume, overwrite the PDFs in `public/files/` keeping the same names.
3. Run `npm run build` to check everything compiles.

## Getting started

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Author

**Regina Servín**

- GitHub: [Regirex21](https://github.com/Regirex21)
- LinkedIn: [regina-servín](https://www.linkedin.com/in/regina-servín/)
