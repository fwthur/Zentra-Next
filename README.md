# Zentra Landing — Next.js (App Router, TypeScript)

A polished, componentized landing page migrated from a plain React + TS setup to **Next.js (App Router)** with **CSS Modules**. This repo follows a **feature-based** structure so sections of the landing page (hero, features, preview, CTA, footer) are easy to maintain and scale.

---

## ✨ Highlights

- **Next.js App Router** (`app/`) with **TypeScript**
- **CSS Modules** for local, conflict-free styles
- **Feature-based architecture** with component co-location
- **Client-only hooks** (Intersection Observer) marked via `"use client"`
- Zero CSS frameworks by default (bring your own design system if needed)

---

## 🧱 Project Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css               # global tokens & effects (migrated from App.css)
components/
  Button/
    Button.module.css
    Button.tsx
features/
  landing/
    LandingPage.tsx
    LandingPage.module.css
    components/
      Header/
        Header.module.css
        Header.tsx
      HeroSection/
        HeroSection.module.css
        HeroSection.tsx
      UnifiedViewSection/
        UnifiedViewSection.module.css
        UnifiedViewSection.tsx
      FeaturesSection/
        FeaturesSection.module.css
        FeaturesSection.tsx
      FeatureCard/
        FeatureCard.module.css
        FeatureCard.tsx
      PreviewSection/
        PreviewSection.module.css
        PreviewSection.tsx
      CtaSection/
        CtaSection.module.css
        CtaSection.tsx
hooks/
  withIntersectionObserver.tsx
utils/
  persistence.ts
next.config.js
tsconfig.json
package.json
```

> **Note**
>
> - All component styles use **`*.module.css`**.
> - Global design tokens (CSS variables), background glow, and scroll-reveal helpers live in **`app/globals.css`**.
> - Client components that access browser APIs (e.g., `window`, `IntersectionObserver`) must include the **`"use client"`** directive at the top of the file.

---

## 🚀 Getting Started

### 1) Install

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2) Run in development

```bash
npm run dev
# Open http://localhost:3000
```

### 3) Build & start in production

```bash
npm run build
npm run start
```

---

## Scripts

- `dev` — start Next.js in development mode
- `build` — production build
- `start` — start production server (after `build`)
- `lint` — run ESLint (if configured by create-next-app)

---

## Key Files

### `app/layout.tsx`

App-wide shell (HTML scaffold) and metadata. Replace the default `metadata` values with your app name/description.

### `app/page.tsx`

Top-level route that renders the **LandingPage** feature.

### `app/globals.css`

Global CSS tokens and effects:

- CSS variables (e.g. `--color-primary`, `--color-secondary`)
- Page background glow
- `.section-observer` + `.visible` (used by the Intersection Observer hook)

### `components/Button/`

Reusable, gradient button that supports `as="button" | "a"` and a `variant` prop.

### `hooks/withIntersectionObserver.tsx`

A higher-order component that reveals sections on scroll. This file is **client-side** only.

> If you prefer a hook version instead of HOC, you can adapt it easily and add `ref` to a section div inside each section component.

### `utils/persistence.ts`

Async wrapper over `localStorage` for data persistence on the client. Safe-guards SSR by checking `typeof window !== "undefined"`.

---

## Migrating From Your Old React Setup

- **Removed**: `index.html`, `src/index.tsx`, `src/App.tsx`  
  These are replaced by `app/layout.tsx` and `app/page.tsx` in Next.js.
- **Styles**: rename `*.css` files imported by components to `*.module.css` and import them as:
  ```ts
  import styles from "./Component.module.css";
  // then use: className={styles.wrapper}
  ```
- **Global styles**: move your old `App.css` content into `app/globals.css`.
- **Client-only code**: add `"use client"` at top of files that access browser APIs, `useState`, `useEffect`, or custom client hooks.
