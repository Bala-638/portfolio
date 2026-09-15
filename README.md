# Bala — Web Developer Portfolio

A modern, professional freelance portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Things to personalize before launch

- **Portrait photo** — add your photo and update `src/components/Hero.jsx` (the placeholder box currently says "Add your portrait photo here").
- **Project screenshots** — drop images into `src/assets/images` and set the `image` field for each project in `src/data/projects.js`.
- **Live Demo / GitHub links** — replace the `#` placeholders in `src/data/projects.js` with real URLs.
- **Contact details** — update the email, phone number, WhatsApp number, LinkedIn and GitHub links in `src/components/Contact.jsx`, `src/components/CTA.jsx` and `src/components/Footer.jsx`.
- **Contact form** — the form currently opens the visitor's email app via `mailto:` since there's no backend. To collect submissions directly, connect it to [Formspree](https://formspree.io) or [FormSubmit](https://formsubmit.co) by pointing the form's `action` at your endpoint, or replace `handleSubmit` in `src/components/Contact.jsx` with a `fetch` POST request.
- **Open Graph image** — add a `public/og-image.jpg` (1200×630px) so social link previews look good.

## Project structure

```
src/
  components/    Reusable UI sections (Navbar, Hero, Services, etc.)
  data/          Project content, separate from UI markup
  hooks/         Shared logic (scroll-reveal animation)
  assets/images/ Your screenshots and portrait photo go here
  App.jsx        Composes all sections
  main.jsx       React entry point
  index.css      Design tokens + all component styles
```
