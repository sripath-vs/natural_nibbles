// Natural Nibbles — main app shell.
// Combines Nav + active page + Footer. Each instance keeps its own page
// state (so the desktop and mobile artboards can be on different pages).

const { useState: _useStateA, useEffect: _useEffectA } = React;

function NaturalNibblesApp({ device = "desktop", initialPage = "home" }) {
  const [page, setPage] = _useStateA(initialPage);

  const handleNavigate = (p) => {
    setPage(p);
    // Scroll the app shell to top on nav.
    const el = document.querySelectorAll(`.nn-app[data-device="${device}"]`);
    el.forEach((node) => node.scrollTo({ top: 0, behavior: "instant" }));
  };

  const PageComponent =
    page === "products" ? ProductsPage :
    page === "about" ? AboutPage :
    page === "contact" ? ContactPage :
    HomePage;

  return (
    <div className="nn-app" data-device={device} data-layout={document.documentElement.dataset.nnLayout || "editorial"}>
      <NNNav page={page} onNavigate={handleNavigate} device={device} />
      <PageComponent onNavigate={handleNavigate} device={device} />
      <NNFooter onNavigate={handleNavigate} />
    </div>
  );
}

// ─── Tweaks: apply palette + type + layout globally ─────────
const PALETTES = {
  // Default — anchored to the actual logo green
  forest: {
    name: "Forest (brand)",
    "--nn-saffron": "#2D6B3F",         // logo green — primary
    "--nn-saffron-deep": "#1F4A2C",
    "--nn-saffron-soft": "#A8C4AC",
    "--nn-peacock": "#1F4A5C",         // blue — secondary
    "--nn-peacock-deep": "#143240",
    "--nn-sage": "#C8651A",             // orange — accent
    "--nn-sage-deep": "#A8521A",
    "--nn-cream": "#F5EFE2",
    "--nn-cream-2": "#EBE3CF",
    "--nn-paper": "#FAF5E8",
    "--nn-ink": "#1F2A22",
    "--nn-ink-2": "#465049",
    "--nn-ink-3": "#828A82",
    "--nn-rust": "#C8651A",
    "--nn-primary": "var(--nn-saffron)",
    "--nn-secondary": "var(--nn-peacock)",
    "--nn-tertiary": "var(--nn-sage)",
  },
  saffron: {
    name: "Saffron field",
    "--nn-saffron": "#C8651A",
    "--nn-saffron-deep": "#A8521A",
    "--nn-saffron-soft": "#E8A87C",
    "--nn-peacock": "#1F4A5C",
    "--nn-peacock-deep": "#143240",
    "--nn-sage": "#2D6B3F",
    "--nn-sage-deep": "#1F4A2C",
    "--nn-cream": "#F5EFE2",
    "--nn-cream-2": "#EBE3CF",
    "--nn-paper": "#FAF5E8",
    "--nn-ink": "#2A2620",
    "--nn-ink-2": "#564E40",
    "--nn-ink-3": "#8A7F6B",
    "--nn-rust": "#A85537",
    "--nn-primary": "var(--nn-saffron)",
    "--nn-secondary": "var(--nn-peacock)",
    "--nn-tertiary": "var(--nn-sage)",
  },
  peacock: {
    name: "Peacock garden",
    "--nn-saffron": "#1F4A5C",
    "--nn-saffron-deep": "#143240",
    "--nn-saffron-soft": "#7BA8B8",
    "--nn-peacock": "#C8651A",
    "--nn-peacock-deep": "#8A4112",
    "--nn-sage": "#2D6B3F",
    "--nn-sage-deep": "#1F4A2C",
    "--nn-cream": "#F5EFE2",
    "--nn-cream-2": "#EAE3D0",
    "--nn-paper": "#FAF5E8",
    "--nn-ink": "#1A2530",
    "--nn-ink-2": "#3F4E5C",
    "--nn-ink-3": "#7A8590",
    "--nn-rust": "#A85537",
    "--nn-primary": "var(--nn-saffron)",
    "--nn-secondary": "var(--nn-peacock)",
    "--nn-tertiary": "var(--nn-sage)",
  },
};

const TYPE_STACKS = {
  lora: {
    name: "Lora + Source Serif",
    display: '"Lora", Georgia, serif',
    body: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
    script: '"Caveat", cursive',
    google: ["Lora:ital,wght@0,400;0,500;0,600;1,400;1,500", "Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400", "Caveat:wght@400;500"],
  },
  cormorant: {
    name: "Cormorant + Crimson",
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"Crimson Text", Georgia, serif',
    script: '"Caveat", cursive',
    google: ["Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500", "Crimson+Text:ital,wght@0,400;0,600;1,400", "Caveat:wght@400;500"],
  },
  fraunces: {
    name: "Fraunces + Lora",
    display: '"Fraunces", Georgia, serif',
    body: '"Lora", Georgia, serif',
    script: '"Caveat", cursive',
    google: ["Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400", "Lora:ital,wght@0,400;0,500;1,400", "Caveat:wght@400;500"],
  },
};

function applyPalette(p) {
  const palette = PALETTES[p] || PALETTES.saffron;
  Object.entries(palette).forEach(([k, v]) => {
    if (k === "name") return;
    document.documentElement.style.setProperty(k, v);
  });
}

const _loadedFonts = new Set();
function applyType(t) {
  const stack = TYPE_STACKS[t] || TYPE_STACKS.lora;
  stack.google.forEach((g) => {
    if (_loadedFonts.has(g)) return;
    _loadedFonts.add(g);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${g}&display=swap`;
    document.head.appendChild(link);
  });
  document.documentElement.style.setProperty("--nn-display", stack.display);
  document.documentElement.style.setProperty("--nn-body", stack.body);
  document.documentElement.style.setProperty("--nn-script", stack.script);
}

function applyLayout(l) {
  document.documentElement.dataset.nnLayout = l;
  document.querySelectorAll(".nn-app").forEach((node) => {
    node.setAttribute("data-layout", l);
  });
}

Object.assign(window, { NaturalNibblesApp, applyPalette, applyType, applyLayout, PALETTES, TYPE_STACKS });
