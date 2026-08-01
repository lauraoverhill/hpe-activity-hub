# HPE Activity Hub

An accessible, public Health and Physical Education (HPE) learning hub built with Astro. It provides topic-led learner activities and classroom tools now, with a parallel teacher-resource area designed for later route protection.

## Project Overview

- **Type**: Static HPE learning-resource library
- **Output Mode**: Static site generation (SSG)
- **Current public site**: https://hpe-activity-hub.netlify.app/
- **Project structure**: unit-led learning content, reusable activity components, preserved standalone interactive activities

Check `package.json` for the current framework and dependency versions.

### Key Dependencies

- `astro` — framework and static-site generator
- `accessible-astro-components` — accessible interface primitives
- `tailwindcss` and SCSS — styling and shared design tokens
- `@astrojs/mdx` — Markdown/MDX content support
- `@astrojs/sitemap` — XML sitemap generation
- `astro-icon` — Lucide icons
- ESLint with `eslint-plugin-jsx-a11y` — accessibility linting
- Prettier with Astro and Tailwind plugins — formatting

## Project Purpose

The HPE Activity Hub supports teaching and learning in Health and Physical Education through inclusive, clear, classroom-ready resources.

- **Learners** discover material through a unit, then a topic, then its class activities.
- **Educators** will use a parallel `/teach/*` route for unit standards, lesson guidance, answer keys, rubrics, and longer-form notes.
- **Classroom tools** are reusable activities that can support multiple units.
- **Accessibility** is a core quality standard: semantic HTML, keyboard operation, readable typography, visible focus, high contrast, reduced motion, and read-aloud alternatives where appropriate.
- **Current activity migration**: original standalone activities are preserved in `public/activities/` so their copy, colours, interaction logic, print controls, and browser read-aloud behaviour remain intact.

### Content and route hierarchy

```text
/units
└── /units/[unit]
    ├── unit overview
    ├── topics
    │   └── /units/[unit]/topics/[topic]
    │       └── class activities, self-led learning, and assessments
    └── support/help information where appropriate

/teach
└── /teach/units/[unit]
    ├── unit standards and curriculum links
    ├── topic notes and lesson guidance
    ├── answer keys
    ├── rubrics and assessment material
    └── teacher downloads

/tools
└── reusable classroom tools
```

`/teach/*` is a future access-control seam. It is currently organisational only; if material must be restricted, protect that route and its file paths at the hosting edge (for example, Cloudflare Access) before publishing it.

## Dev Environment Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The site runs at `http://localhost:4321`.

3. Build production output:

   ```bash
   npm run build
   ```

   Output: `./dist/`

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Code Style Guidelines

### TypeScript and paths

- Strict TypeScript is enabled.
- Use configured aliases where useful:
  - `@components` → `./src/components`
  - `@layouts` → `./src/layouts`
  - `@assets` → `./src/assets`
  - `@content` → `./src/content`
  - `@data` → `./src/data`
  - `@utils` → `./src/utils`
  - `@theme-config` → `./theme.config.ts`

### Formatting and linting

- Run formatting with `npx prettier --write .`.
- Run accessibility and code checks with `npx eslint .`.
- Use semantic HTML first; add ARIA only when native HTML is insufficient.

### Styling

- Use Tailwind CSS v4, project SCSS utilities, and CSS custom properties as appropriate.
- Prefer logical properties such as `margin-inline` and `border-inline-start`.
- Reuse `HubCard.astro` for general library cards and `ActivityCard.astro` for topic activity cards. Create a new component only when its interface is genuinely reusable.
- Preserve the HPE visual language: calm paper-blue backgrounds, deep navy text, clear cards, strong heading hierarchy, and obvious action buttons.

## Accessibility Requirements

This site targets WCAG 2.2 AA practices.

1. Use semantic elements (`button`, `nav`, `main`, headings, lists, and labels).
2. Ensure every interaction works by keyboard and has visible focus.
3. Do not remove focus outlines without an equally clear replacement.
4. Give meaningful images useful alt text; use `alt=""` only for decorative images.
5. Maintain a 4.5:1 text contrast ratio, or 3:1 for large text.
6. Preserve logical heading order.
7. Respect `prefers-reduced-motion`.
8. Use accessible forms with labels, correct input types, and understandable errors.
9. Keep learner instructions direct and open by default; use accordions mainly for optional or teacher-facing detail.
10. Where an activity includes read-aloud, preserve an accessible stop/toggle state and do not rely on audio as the only way to understand content.

Test keyboard operation, responsive layouts, browser console output, and relevant screen-reader behaviour before handing over interface changes.

## File Structure

```text
src/
├── components/                    # Reusable HPE interface modules
│   ├── ActivityCard.astro          # Reusable class-activity card
│   ├── HubCard.astro               # Reusable library/navigation card
│   ├── Header.astro
│   ├── Footer.astro
│   └── Navigation*.astro
├── content/                        # Future structured authored content
│   ├── units/                      # Unit metadata and overview content
│   ├── activities/                 # Learner activities, linked to unit/topic
│   ├── resources/                  # Teacher resources; do not publish sensitive files directly
│   └── tools/                      # Reusable classroom tools
├── data/
│   └── hpe.ts                      # Current unit/topic/activity catalogue
├── layouts/
│   ├── DefaultLayout.astro
│   └── MarkdownLayout.astro
├── pages/
│   ├── index.astro                 # HPE Hub landing page
│   ├── units/
│   │   ├── index.astro             # One-to-many unit library
│   │   └── [unit]/                 # Unit overview and future topic routes
│   ├── teach/                      # Future teacher-facing route tree
│   ├── tools/                      # Classroom-tool library
│   └── blog/                       # Retain if/when an HPE blog is introduced
├── styles/
├── assets/
├── content.config.ts               # Content-collection schemas
└── env.d.ts

public/
├── activities/                     # Preserved standalone activities, served unchanged
├── fonts/
├── favicon.svg
└── social-preview-image.png

CONTENT_GUIDE.md                    # Content authoring and audience conventions
theme.config.ts                     # Brand, SEO, and navigation configuration
```

## Working with Components

Import accessible primitives when they provide a clear benefit:

```astro
---
import { Accordion, AccordionItem, Button } from 'accessible-astro-components'
---
```

Use `Accordion` and `AccordionItem` for optional teaching detail, standards, lesson notes, rubric guidance, and FAQs. Do not hide core learner instructions inside an accordion.

## Content Collections

Content schemas are defined in `src/content.config.ts`.

- **Units**: unit title, description, year levels, publication status, and audience.
- **Activities**: learner-facing task content linked to a unit/topic.
- **Resources**: educator-facing lesson plans, worksheets, assessments, and guidance.
- **Tools**: reusable classroom tools.

Use frontmatter, `status: draft` while developing, and `status: published` only when the material is suitable for the public site.

### Adding a learning unit

1. Add a unit record in `src/content/units/` using the collection schema.
2. Add its metadata and topic/activity relationships to the HPE catalogue or its successor content model.
3. Create the unit overview at `src/pages/units/[unit]/`.
4. Add topic pages below `src/pages/units/[unit]/topics/`.
5. Add learner activities beneath their correct topic—not to a flat global learner list.
6. Add planning material, standards, keys, and rubrics to the parallel `/teach/units/[unit]/` route when that section is built.
7. Run `npm run build` and `npx eslint .` before publishing.

### Adding Blog Posts

The blog is intentionally retained as a future option. When introduced, use a dedicated content collection or `src/pages/blog/` with clear metadata, accessible page structure, and a navigation decision that does not distract from unit-led learning.

## Teacher Resource Safety

- `/teach/*` is not authenticated yet; treat it as public until host-level access control exists.
- Do not put teacher-only PDFs, answer keys, or rubrics in `public/`, because those files are directly reachable.
- When protection is introduced, apply it at the host/edge to `/teach/*` and every teacher-only download path.
- Keep no personal student or teacher information in the site repository or static build.

## Deployment

This is a static Astro site. For Netlify, Vercel, or Cloudflare Pages:

- Build command: `npm run build`
- Publish directory: `dist`

Before the first production deployment, update the `site` value in `astro.config.mjs` to the final public domain so sitemap and canonical URLs are correct.

## Commit and PR Guidelines

Use conventional commits:

```text
type(scope): subject
```

Examples:

- `feat(units): add illicit-drugs topic overview`
- `feat(teach): add rubric resource layout`
- `a11y(activity): improve read-aloud toggle state`
- `style(cards): strengthen unit activity hierarchy`
- `docs(content): clarify unit authoring workflow`

Before handing over a change:

- Run `npm run build`.
- Run `npx eslint .`.
- Test any altered learner interaction with keyboard only.
- Check the affected layout on mobile and desktop.
- State any accessibility or content-safety consideration in the handover.

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDX Documentation](https://mdxjs.com/)
