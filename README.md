# Natural Nibbles

> Tradition simplified.

Marketing site for **Natural Nibbles Pvt Ltd** — an Ayurvedic organic food brand and cloud kitchen. The site introduces the brand, lists meals and Ayurvedic flavour mixes, and invites partners to open a Natural Nibbles kitchen in their city.

## Stack

- React 18 + Babel Standalone (CDN, no bundler)
- Plain CSS with design tokens (`app/styles.css`)
- Google Fonts: Lora, Source Serif 4, Caveat

## Project layout

```
index.html          Entry — mounts <Site /> into #root
app/
  app.jsx           Top-level NaturalNibblesApp + routing
  components.jsx    Shared UI primitives
  pages.jsx         Home, menu, mixes, franchise, contact, etc.
  quiz.jsx          Ayurvedic dosha / preference quiz
  styles.css        Palette, type, layout tokens
assets/             Logo, imagery
uploads/            User-supplied assets
```

## Run locally

No build step. Serve the folder over HTTP (file:// won't work with the Babel CDN):

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Brand

- **Palette:** `forest` (default)
- **Type pair:** `lora` (default)
- **Layout:** `editorial` (default)
- **Footer:** "2026 Natural Nibbles · Cooked slowly, by hand."

## Contact

Natural Nibbles Pvt Ltd
Plot No. 253/1, Jawaharnagar Colony, Moulali, Hyderabad 500040
naturalnibblespvtltd@gmail.com
