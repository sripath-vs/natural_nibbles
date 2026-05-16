// Natural Nibbles — shared components
// Nav, Footer, Logo, ImagePlaceholder, decorative SVG patterns.
// All exported to window at the bottom.

const { useState, useEffect, useRef } = React;

// ─── Logo ───────────────────────────────────────────────────
// The actual Natural Nibbles wordmark — green hand-script "Natural Nibbles"
// with a leaf cluster above and "TRADITION SIMPLIFIED" tagline below.
// The PNG is 776×330 with transparent background.
//
// `tone`:
//   "default" — render as-is (works on cream/light surfaces)
//   "cream"   — invert to cream for use on dark footer (filter)
function NNLogo({ onClick, height = 56, tone = "default" }) {
  return (
    <div className="nn-logo" onClick={onClick} role="button" tabIndex={0}>
      <img
        src="assets/logo-natural-nibbles.png"
        alt="Natural Nibbles — Tradition Simplified"
        className="nn-logo-img"
        data-tone={tone}
        style={{ height, width: "auto" }}
      />
    </div>
  );
}

// Backwards-compat shim — some places still call NNLogoMark.
// Renders a small leaf glyph in the requested color, used as an icon-only mark.
function NNLogoMark({ size = 36, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size * (330 / 776) * 2.2}
      viewBox="0 0 64 32"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Two leaves + stem, echoing the logo's leaf flourish */}
      <path d="M32 28 C 30 22, 28 16, 32 6" />
      <path d="M32 14 C 26 12, 22 14, 18 18 C 24 19, 29 17, 32 14 Z" fill={color} />
      <path d="M32 12 C 38 9, 44 10, 48 14 C 42 16, 36 15, 32 12 Z" fill={color} />
      <path d="M32 6 C 33 8, 33 10, 32 12" />
    </svg>
  );
}

// ─── Navigation ─────────────────────────────────────────────
const NAV_PAGES = [
  { id: "home", label: "Home" },
  { id: "products", label: "What We Offer" },
  { id: "about", label: "Our Story" },
  { id: "contact", label: "Visit" },
];

function NNNav({ page, onNavigate, device }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [page]);

  return (
    <nav className="nn-nav">
      <div className="nn-nav-inner">
        <NNLogo onClick={() => onNavigate("home")} />
        <div className="nn-nav-links">
          {NAV_PAGES.map((p) => (
            <button
              key={p.id}
              className="nn-nav-link"
              data-active={page === p.id}
              onClick={() => onNavigate(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="nn-nav-cta" onClick={() => onNavigate("contact")}>
            Book a consult
          </button>
          {device === "mobile" && (
            <button
              className="nn-mobile-menu-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                {open ? (
                  <>
                    <path d="M7 7L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M21 7L7 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M5 10H23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M5 18H23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </div>
      {device === "mobile" && open && (
        <div className="nn-mobile-drawer">
          {NAV_PAGES.map((p) => (
            <button
              key={p.id}
              className="nn-nav-link"
              data-active={page === p.id}
              onClick={() => onNavigate(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Madhubani-inspired SVG patterns for image placeholders ─
// Sparse line patterns used as a low-opacity overlay on color blocks.
function NNPatternLotus({ color = "currentColor" }) {
  // Concentric petal arrangement
  return (
    <svg
      className="nn-img-pattern"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    >
      <g>
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx="14"
            ry="60"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="10" />
        <circle cx="100" cy="100" r="78" strokeDasharray="2 4" />
      </g>
    </svg>
  );
}

function NNPatternWarli({ color = "currentColor" }) {
  // Sparse triangular stick-figure-ish dots
  const tris = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const x = 20 + c * 40;
      const y = 20 + r * 40;
      tris.push(
        <g key={`${r}-${c}`}>
          <path d={`M${x} ${y - 6} L${x - 6} ${y + 5} L${x + 6} ${y + 5} Z`} />
          <circle cx={x} cy={y - 12} r="2.5" />
        </g>
      );
    }
  }
  return (
    <svg
      className="nn-img-pattern"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke={color}
      strokeWidth="1"
    >
      {tris}
    </svg>
  );
}

function NNPatternGrain({ color = "currentColor" }) {
  // Scattered grain marks
  const marks = [];
  const seed = (i, j) => (Math.sin(i * 7.3 + j * 3.1) + 1) / 2;
  for (let i = 0; i < 60; i++) {
    const x = seed(i, 1) * 200;
    const y = seed(i, 2) * 200;
    const r = 6 + seed(i, 3) * 6;
    const rot = seed(i, 4) * 360;
    marks.push(
      <ellipse
        key={i}
        cx={x}
        cy={y}
        rx={r}
        ry={r * 0.35}
        transform={`rotate(${rot} ${x} ${y})`}
      />
    );
  }
  return (
    <svg
      className="nn-img-pattern"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke={color}
      strokeWidth="1"
    >
      {marks}
    </svg>
  );
}

const PATTERNS = {
  lotus: NNPatternLotus,
  warli: NNPatternWarli,
  grain: NNPatternGrain,
};

// ─── Image placeholder ──────────────────────────────────────
// A captioned color block that describes the intended photograph.
// `tone` picks the background; `pattern` overlays a line motif.
function NNImage({ tone = "saffron", pattern = "lotus", shape = "soft", title, caption, style, className = "" }) {
  const Pattern = PATTERNS[pattern] || NNPatternLotus;
  const patternColor =
    tone === "peacock" || tone === "ink" ? "#F5EFE2" :
    tone === "rust" ? "#3a1a10" :
    tone === "sage" ? "#1f3221" :
    "#2A2620";
  return (
    <div
      className={`nn-img nn-img--${tone} nn-img--${shape} ${className}`}
      style={style}
    >
      <Pattern color={patternColor} />
      <div className="nn-img-inner">
        <div className="nn-img-caption">
          <b>{title || "Photograph placeholder"}</b>
          {caption}
        </div>
      </div>
    </div>
  );
}

// ─── Eyebrow row ────────────────────────────────────────────
function NNEyebrowRow({ children }) {
  return (
    <div className="nn-section-eyebrow-row">
      <span className="nn-eyebrow">{children}</span>
    </div>
  );
}

// ─── Reveal on scroll ───────────────────────────────────────
function NNReveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      });
    }, { threshold: 0.12, root: el.closest(".nn-app") });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As
      ref={ref}
      className={`nn-fade-in ${rest.className || ""}`}
      data-visible={visible}
      style={rest.style}
    >
      {children}
    </As>
  );
}

// ─── Footer ─────────────────────────────────────────────────
function NNFooter({ onNavigate }) {
  return (
    <footer className="nn-footer">
      <div className="nn-container">
        <div className="nn-footer-top">
          <div className="nn-footer-brand">
            <NNLogo onClick={() => onNavigate("home")} height={64} tone="cream" />
            <p className="nn-footer-tagline">
              An organic cloud kitchen reviving forgotten Indian culinary traditions — food prepared as an ancient system of healing.
            </p>
          </div>
          <div className="nn-footer-col">
            <h5>The Kitchen</h5>
            <ul>
              <li><button onClick={() => onNavigate("products")}>Golden Khichdi</button></li>
              <li><button onClick={() => onNavigate("products")}>Tulsi Honey</button></li>
              <li><button onClick={() => onNavigate("products")}>Triphala Ghee</button></li>
              <li><button onClick={() => onNavigate("products")}>Seasonal box</button></li>
            </ul>
          </div>
          <div className="nn-footer-col">
            <h5>Wander</h5>
            <ul>
              <li><button onClick={() => onNavigate("home")}>Home</button></li>
              <li><button onClick={() => onNavigate("about")}>Our story</button></li>
              <li><button onClick={() => onNavigate("contact")}>Visit us</button></li>
              <li><button onClick={() => onNavigate("contact")}>Take the dosha quiz</button></li>
            </ul>
          </div>
          <div className="nn-footer-col">
            <h5>Find us</h5>
            <ul>
              <li>Plot 253/1, Jawaharnagar Colony</li>
              <li>Moulali, Hyderabad 500040</li>
              <li>+91 79818 82112</li>
              <li>naturalnibblespvtltd@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="nn-footer-bottom">
          <span>© {new Date().getFullYear()} Natural Nibbles · Tradition simplified.</span>
          <span>Natural Nibbles Pvt Ltd · Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Export to window so sibling Babel script blocks can use them ─
Object.assign(window, {
  NNLogo,
  NNLogoMark,
  NNNav,
  NNImage,
  NNFooter,
  NNEyebrowRow,
  NNReveal,
  NNPatternLotus,
  NNPatternWarli,
  NNPatternGrain,
  NAV_PAGES,
});
