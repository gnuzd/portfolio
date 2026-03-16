# GEMINI.md - Portfolio Project Context

## Project Overview

This is a modern, high-performance portfolio website built with **SvelteKit** and **Svelte 5**. It features a "cyberpunk/brutalist" aesthetic, leveraging **Tailwind CSS v4** for styling and **MDSveX** for Markdown-based content (journal/blog).

### Main Technologies

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (using **Svelte 5** snippets and runes)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the `@tailwindcss/vite` plugin)
- **Content:** [MDSveX](https://mdsvex.pngwn.io/) for Markdown support
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [Bun](https://bun.sh/) (as seen in `bun.lock`)

### Architecture

- **Routing:** File-based routing in `src/routes/`.
- **Components:** Shared components are located in `src/lib/components/`.
- **Static Assets:** Located in `static/` and `src/lib/assets/`.
- **Styling:** Global styles are in `src/routes/layout.css`.

## Building and Running

### Development

To start the development server:

```bash
bun run dev
```

_Note: You can also use `npm run dev` or `pnpm run dev`._

### Production

To build the project for production:

```bash
bun run build
```

To preview the production build:

```bash
bun run preview
```

### Linting and Formatting

- **Check types:** `bun run check`
- **Lint code:** `bun run lint`
- **Format code:** `bun run format`

## Development Conventions

### Svelte 5 Syntax

- **Runes:** Use `$state`, `$derived`, `$effect`, etc., for reactivity instead of the legacy `export let` or `$:`.
- **Snippets:** Use `{#snippet name()}...{/snippet}` and `{@render name()}` for reusable UI fragments within components.
- **Components:** Prefer `.svelte` files for components.

### Styling (Tailwind v4)

- **v4 Engine:** This project uses the new Tailwind v4 engine. Configuration is primarily done through CSS variables in `src/routes/layout.css` and the `@theme` block.
- **Brutalist Theme:** Use the defined theme colors (like `brand-primary`) and font families (display/mono) to maintain the aesthetic.

### Markdown (MDSveX)

- Journal entries and technical logs should be authored in `.svx` or `.md` files (configured in `svelte.config.js`).

### Commits

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting, missing semi colons, etc; no code change
  - `refactor:` for refactoring production code
  - `test:` for adding missing tests
  - `chore:` for updating grunt tasks etc; no production code change
