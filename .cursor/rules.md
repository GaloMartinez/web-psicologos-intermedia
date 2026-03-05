# Cursor Rules — web-psicologos-intermedia (Front)

Stack:
- React + TypeScript + Vite
- TailwindCSS
- ESLint enabled

Goals:
- Minimal, modern, professional look (trusted, calm, warm).
- Avoid “AI-looking” layouts: use spacing, typographic hierarchy, consistent sections.
- Responsive-first: mobile, then md/lg.

Architecture:
- Use functional components only.
- Avoid default exports (prefer named exports).
- Keep components small and reusable.
- Keep page components thin: compose from section/components.
- Prefer `src/components`, `src/sections`, `src/pages`, `src/lib`, `src/assets`.

Code style:
- Use strict TypeScript types (avoid `any`).
- Prefer `const` and pure functions.
- Keep Tailwind classes readable: extract repeated classnames to `cn()` helper.
- Prefer semantic HTML (header/main/section/nav/footer).
- Add aria-labels where needed.

Design system rules:
- Use a spacing scale consistently (py-16/20, px-6 sm:px-10 lg:px-24).
- Use max width container (max-w-6xl / max-w-7xl) consistently.
- Typography hierarchy:
  - H1: text-4xl/5xl
  - H2: text-2xl/3xl
  - body: text-base/lg
- Buttons:
  - primary and secondary variants, consistent hover/focus styles.
- Create reusable components:
  - Section, Container, Button, Badge, Card, Divider

Performance:
- Use `React.lazy` only if needed.
- Optimize images (use `loading="lazy"`).
- No heavy animations by default; subtle motion only.

Do not:
- Introduce new libraries unless requested.
- Change the visual identity drastically without keeping current structure.
- Modify build tooling unless needed.