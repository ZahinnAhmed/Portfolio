# Zahin Ahmed: Portfolio

Personal portfolio site, live at **[portfolio-zahin-a.vercel.app](https://portfolio-zahin-a.vercel.app)**.

Built with React 19, Vite, Tailwind CSS v4, and Motion. Responsive layout (sidebar nav on desktop, collapsible top bar on mobile), scroll-aware active nav, and reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components/`: one component per page section (Hero, About, Experience, Projects, Skills, Involvement, Contact)
- `src/components/ui/section.jsx`: shared section, card, tag, and scroll-reveal primitives
- `public/resume.pdf`: resume linked from the site
