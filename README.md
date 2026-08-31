# Personal Portfolio

A minimal, multi-page personal portfolio built with React, Vite, React Router, and Tailwind CSS.

## Customize your content

All portfolio content lives in a single file:

```text
src/data/portfolio.ts
```

Replace the placeholder values with your real information: name, title, summary, education, awards, work experience, projects, skills, and contact links.

## Customize the design

The site starts with a minimal black-and-white palette. Colors, spacing, and typography are controlled by CSS variables in:

```text
src/styles.css
```

Edit the `:root` values to change the look. The dark mode values are under `.dark`.

## Local development

```sh
git clone https://github.com/shy0un011-bit/helloworld.git
cd helloworld
bun install
bun run dev
```

## Deploy to GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the site automatically on every push to `main`.

1. In your GitHub repository, go to **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main`. The workflow will deploy to `https://shy0un011-bit.github.io/helloworld/`.

If you rename the repository or use a custom domain, update `VITE_BASE_PATH` in `.github/workflows/deploy.yml` (and `homepage` in `package.json`) to match the new path.
