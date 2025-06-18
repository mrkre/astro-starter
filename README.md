# Astro Starter Kit

Highly opinionated minimal, production-ready Astro project. Batteries include Tailwind and Github actions.

---

## Project Structure

```bash
/
├── doc/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── package.json
└── astro.config.mjs
```

- **src/pages/**: Astro and Markdown files become routes.
- **src/components/**: Reusable UI components (Astro, React, Vue, etc.).
- **src/layouts/**: Layout components for page structure.
- **src/styles/**: Global and component-level styles.
- **doc/**: Documentation, i.e. ADRs, assets
- **public/**: Static assets (images, fonts, etc.).

---

## 🧞 Commands

All commands are run from the project root:

| Command         | Action                                      |
| :--------------| :------------------------------------------- |
| `pnpm install` | Install dependencies                         |
| `pnpm dev`     | Start local dev server at `localhost:4321`   |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally before deploying  |
| `pnpm astro`   | Run Astro CLI commands                       |

---

## Deployment

<!--
Add deployment instructions for your preferred platform (e.g., Netlify, Vercel, GitHub Pages).
-->

---

## Features

<!--
List key features of your project or starter (e.g., Tailwind CSS, MDX support, etc.).
-->

---

## Integrations

<!--
Document any Astro integrations or plugins used in this project.
-->

---

### Architecture Decision Records (ADR)

This project uses Architecture Decision Records (ADRs) to document important architectural decisions. We recommend using [adr-tools](https://github.com/npryce/adr-tools) for managing ADRs efficiently. See the `doc/adr/` directory for existing records and guidance on creating new ones.

Create new a ADR using:

```bash
adr new Some Fancy New Feature
```

To supersede a previous ADR, use the -s option:

```bash
adr new -s 9 Replace Tailwind with Bootstrap
```

---

### Contributions

<!--
Add guidelines for contributing to this project.
-->

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
