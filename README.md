# Get Things Done — a to-do app built by hand

A small to-do app I'm building from scratch to learn HTML, CSS and JavaScript properly — no framework, no copy-paste. The app is the excuse; the notes below are the point.

## Running it

```sh
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`). `npm run build` type-checks with `tsc` and bundles into `dist/`.

## What I've learned so far



### HTML

**Structure comes from meaning, not from looks.** The page is `<header>` / `<main>` / `<nav>`, and each part of `<main>` is a `<section>` with its own `<h2>`. The headings are visually hidden but still exist, so the document outline (and a screen reader's list of headings) makes sense even though I never wanted big "Add a todo" text on screen. A `<section>` without a heading would just be a `<div>`.

**Hidden is not the same as removed.** `display: none` takes an element out of the accessibility tree entirely, so a label hidden that way labels nothing. The `.visually-hidden` class (1px, clipped, absolutely positioned) hides it from sighted users only — I use it for the form label and the section headings.

**Forms do a lot for free.**

- `<label for="newTodo">` + `<input id="newTodo">` ties them together: clicking the label focuses the input, and screen readers announce it.
- `required`, `minlength`, `maxlength` validate without any JS — the browser blocks the submit and shows its own message.
- `name` is what the field is *called in form data*. That's a different question from `id` (*which* element) and `class` (what *kind* of element).
- A `<button>` inside a `<form>` submits by default. The "done" tick is `type="button"` so it doesn't.

**An empty button needs a name.** The tick button has no text, so `aria-label="Mark todo as done"` gives it one, and `aria-pressed` tells assistive tech it's a toggle and which state it's in. CSS can then style the pressed state with `[aria-pressed="true"]`.

**`<time datetime="2026-09-21">`** carries a machine-readable date alongside whatever text is shown.

**Head housekeeping:** `lang`, `charset`, the viewport meta tag (without it phones render at desktop width and zoom out), `preconnect` for Google Fonts — and stylesheet *order* matters: the reset loads before my styles so mine win on ties.



### CSS

**The cascade and specificity.** When two rules target the same element, the more specific selector wins; on a tie, the later one wins. That's why the reset has to load first, why `button.surface` (element + class) beats `.surface`, and why `#id` rules are hard to override later.

**Start from a reset.** [Josh Comeau's reset](https://www.joshwcomeau.com/css/custom-css-reset/): `box-sizing: border-box` everywhere (so width includes padding and border), margins zeroed, `font: inherit` on form controls so inputs and buttons pick up the page font. I added my own `ul` rules to it.

**Custom properties, named by role.** `--color-bg`, `--color-text-muted`, `--app-gap` on `:root`, used with `var()`. Naming by role rather than value (`--blue`) means the palette changes in one place.

**One job per class.** `.surface` is the box (padding, border, radius, shadow); `.glass` is the frosted look (translucent background, `backdrop-filter`). I split them so the input can be a surface without being glass. Combining them is just `class="surface glass"`.

**Flexbox for rows and columns.** `display: flex` + `flex-direction` + `gap` instead of margins. `flex-grow` shares leftover space; `flex: 0 0 6ch` fixes an item's width; `flex: none` stops the tick button being squashed when the todo text is long, because flex items shrink by default.

**Grid for the page layout.** `grid-template-columns: 2.5fr 1.5fr` splits `<main>` into two columns by ratio, and the media query switches to `1fr` on narrow screens — changing the *layout*, not setting widths.

**Responsive basics.** A fluid container capped with `max-width: 1200px; margin: auto`, `clamp(2rem, 8vw, 7.5rem)` for a heading that scales with the viewport, and the range syntax `@media (width <= 800px)`.

**A square button.** `width: 25px; aspect-ratio: 1; padding: 0` — instead of fighting width + height + padding under `border-box`.

**Selectors I now use on purpose:** compound `.surface.todo`, child `.surface.todo > span`, attribute `[aria-pressed="true"]`, pseudo-elements `::placeholder` and `::after` (with `content`), `:hover`, `:not()`.

**Text handling:** `text-wrap: pretty` / `balance`, `overflow-wrap: break-word`, and the ellipsis trio (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis`).



### JavaScript / TypeScript

**Modules.** `export function` in one file, `import { ... } from "./file.ts"` in another. Anything not exported (`updateClock`) is private to its module. The browser can't run `.ts` files directly, which is what pushed me to a dev server (see Tooling).

**`getElementById` might return `null`.** Its type is `HTMLElement | null`, so TypeScript won't let me touch `.textContent` until I've checked. The `if (el !== null)` guard is *narrowing* — inside it the type is just `HTMLElement`.

**`textContent`, not `innerHTML`, for putting text on the page.** It sets plain text, so nothing in the string is ever treated as markup.

**Dates and time.** `new Date().toLocaleDateString("en-GB", { weekday: "long", ... })` formats for a locale without hand-building strings; `toLocaleTimeString()` for the clock. `setInterval(updateClock, 1000)` re-runs it every second, and calling `updateClock()` once first avoids a blank first second.

**A single entry point.** `setup()` calls everything that needs the DOM, and runs once. The todo's data shape is sketched as an object with `content`, `done`, `dueDate`, `dueTime` — the next step is a `Todo[]` array and a render function that builds the list from it.

### Tooling

**npm.** `package.json` lists what the project depends on: `devDependencies` (Vite, TypeScript) are only needed to build, `dependencies` (dayjs) ship with the app. `package-lock.json` pins exact versions. `node_modules` and `dist` are in `.gitignore` because they can be regenerated.

**Vite.** A dev server that transpiles `.ts` on the fly, so `<script type="module" src="/src/main.ts">` just works, and lets me `import "./todo.css"` from a script. `npm run dev` while working, `npm run build` (`tsc && vite build`) for a production bundle.

**TypeScript config.** `tsconfig.json` with `noEmit` (Vite produces the output; `tsc` only type-checks), `noUnusedLocals` / `noUnusedParameters` so dead code is an error, and `lib: ["ES2023", "DOM"]` so `document` and friends are typed.

**Installing a package.** `npm install dayjs`, `import dayjs from "dayjs"`, then `dayjs().diff(myBirthday, "hour")` — I've been alive about 243,765 hours.

**Git.** One commit per step with `feat:` / `fix:` prefixes, so each diff shows one change.

## Where I am

Working: the page layout, the form with HTML validation, the live date and clock, one hard-coded sample todo.

Next: the `Todo` type and array, the submit handler, rendering `<li>`s from the array, toggling done, and saving to `localStorage`.

## Documentation

- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [MDN — Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [MDN — Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [MDN — `Document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [WAI-ARIA APG — Button pattern (toggle buttons)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Vite — Getting started](https://vite.dev/guide/)
