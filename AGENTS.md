# AGENTS.md — vue-code-block

## Project Overview

`@wdns/vue-code-block` is a Vue 3 + TypeScript component that syntax-highlights code using either
[PrismJS](https://prismjs.com/) or [Highlight.js](https://highlightjs.org/). It supports themes
(bundled Neon Bunny themes or CDN-loaded library themes), copy/run tabs, a browser-window style, and
PrismJS plugins such as `line-numbers` via the `prism-plugin` prop.

## Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Language**: TypeScript (strict mode)
- **Highlighters**: `prismjs`, `highlight.js` (runtime dependencies, imported dynamically)
- **Package Manager**: pnpm
- **Build Tool**: Vite (library mode, ES + CJS) + `vite-plugin-dts`
- **Testing**: Vitest + `@vue/test-utils` (jsdom)
- **Linting**: ESLint (`@wdns/eslint-config-wdns`), Stylelint (`@wdns/stylelint-config-wdns`)
- **Docs app**: Vuetify 3 + Pinia (dev dependencies only, never shipped)
- **Git Hooks**: Husky + lint-staged
- **Releases**: release-it (`.release-it.json`)
- **Node**: pinned to 24.18.0 (`.nvmrc`, `.npmrc`)

## Key File Locations

```
src/plugin/
  index.ts                  # Plugin entry: createVCodeBlock(options), VCodeBlock export
  VCodeBlock.vue            # The component (rendering, theme loading, copy/run)
  data/
    globals.ts              # pluginName, pluginOptionsInjectionKey
    props.ts                # AllProps (default values), UndefinedProps
  composables/
    classes.ts              # Class helpers
    styles.ts               # Inline style helpers
    helpers.ts              # useConvertToUnit, useDeepMerge
  components/StatusIcons.vue
  themes/                   # Neon Bunny themes (scss source, css, minified strings in index.ts)
  styles/                   # Plugin stylesheets (also copied to dist/scss)
  types/index.ts            # Public types (exported from dist)

src/documentation/          # Docs site (sections, examples)
src/plugins/, src/stores/   # Docs app Vuetify + Pinia setup (NOT shipped)
src/playground/             # Playground (`pnpm play`)
```

## How Settings Are Resolved

Component props default to `undefined` (`UndefinedProps`) so the component can tell which props
were actually passed. `VCodeBlock.vue > getSettings()` merges, lowest to highest priority:

1. `AllProps` defaults (`data/props.ts`)
2. Global options from `createVCodeBlock(options)` (injected via `pluginOptionsInjectionKey`)
3. Props passed to the component

Always read values from `settings.value`, not `props`, in the component and template. When adding a
prop, update `types/index.ts` (`Props`), `data/props.ts` (`AllProps`), and the docs props table.

## PrismJS Plugins

With `prismjs` + `prism-plugin`, the component lets Prism highlight the `<code>` element itself
(`highlightPrismElement()` → `Prism.highlightElement`). That is what runs Prism hooks, which plugins
like `line-numbers` depend on. Without `prism-plugin`, code is rendered via `Prism.highlight` /
`hljs.highlight` into `v-html`. Users import plugin JS/CSS themselves and add the plugin class
(e.g. `class="line-numbers"`), which is passed through to the `<pre>`.

## Attributes

The component sets `inheritAttrs: false` and places attributes itself: `class` goes on both the
wrapper and the `<pre>` (wrapper styling plus Prism plugin classes), `style` on the wrapper only, and
everything else (`id`, `data-*`, `aria-*`, listeners) on the `<pre>` only. Keep `class` duplicated;
Prism plugins need it on the `<pre>`.

## Build Process

```bash
pnpm build
# Runs: tsc -p tsconfig.build.json && pnpm test:build && vite build --config vite.build.config.mts
```

- `tsconfig.build.json` type-checks the shippable plugin source (excludes docs, tests, playground).
- `vite.build.config.mts` builds ES + CJS; runtime `dependencies` and Vuetify are external.
- Types entry: `dist/plugin/types/index.d.ts`.
- `dist/` is git-ignored; `prepublishOnly` rebuilds it before `npm publish`.

## Testing

```bash
pnpm test:all            # Vitest, run once
pnpm test:dev            # Vitest, watch mode
pnpm test:build          # Vitest with --bail 1 (used by build and the pre-commit hook)
```

Tests live in `src/plugin/__tests__/`, `src/plugin/components/__tests__/`, and
`src/plugin/composables/__tests__/`. Update snapshots with `pnpm vitest --run -u` only when the
change is intended.

### Test in the playground

Unit tests run in jsdom, which does not cover real rendering, theme CSS, or Prism plugins well.
After any change to the component's rendering, attributes, styles, themes, or plugins, also check
it in the browser playground at http://127.0.0.1:3000/vue-code-block/playground/ (served by
`pnpm dev` / `pnpm play`).

- The playground page is `src/playground/PlaygroundPage.ts.vue`. It is gitignored scratch space
  (created from `src/playground/configs/templates/` if missing), so edit it freely to set up the
  case being tested, and restore it afterwards.
- Check the rendered DOM and the browser console, not just that the page loads.

## Linting

```bash
pnpm lint                # ESLint (max 4 warnings)
```

- ESLint: `eslint.config.mjs`. Stylelint: `stylelint.config.js`. Prettier: `.prettierrc.js`.
- The dev server runs ESLint and Stylelint with `fix: true`, so starting it can rewrite files.
- Object keys are expected in natural ascending order (`vue/sort-keys`).

## Development & Docs

```bash
pnpm dev                 # Docs dev server at http://127.0.0.1:3000/vue-code-block/
pnpm play                # Playground mode
pnpm build:docs          # Build docs into ./docs (gitignored)
pnpm deploy              # gh-pages -d docs
```

The theme CDN versions (`highlightJsVersion`, `prismVersion`, `prismThemesVersion` in
`VCodeBlock.vue`) should match the installed `highlight.js` / `prismjs` versions.

## Git / Commits

- Work on `dev` (or a feature branch), never directly on `main`.
- Do not commit unless explicitly asked.
- Husky pre-commit runs lint-staged and `npm run test:build`.
- Source nvm before committing (Husky needs Node):
  `export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use`
- Conventional commit style. Do not add AI attribution to commits or PRs.

## Publishing

- `pnpm prepublishOnly` runs the full build. Releases use release-it (`chore: release ${version}`, tag `v${version}`).
- Repository: https://github.com/webdevnerdstuff/vue-code-block
- Docs: https://webdevnerdstuff.github.io/vue-code-block/
