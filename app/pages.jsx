// Natural Nibbles — pages
// HomePage, ProductsPage, AboutPage, ContactPage.
// All page components take ({ onNavigate, device }) and render the body
// (Nav + Footer are added by the App shell).

const { useState: _useStateP, useRef: _useRefP, useEffect: _useEffectP } = React;

// ─── HOME ───────────────────────────────────────────────────
function HomePage({ onNavigate, device }) {
  return (
    <div className="nn-page-shell">
      {/* HERO */}
      <section className="nn-hero">
        <div className="nn-container">
          <div className="nn-hero-grid">
            <div>
              <NNReveal>
                <span className="nn-eyebrow">A letter from our kitchen</span>
                <div className="nn-divider" />
                <h1 className="nn-hero-question">
                  Food is not just <em>nourishment</em>. <br />
                  It is an ancient <span className="nn-script">healing system.</span>
                </h1>
                <p className="nn-hero-body">
                  Natural Nibbles is an organic food and cloud kitchen reviving
                  forgotten culinary traditions — prepared with Ayurvedic
                  principles, time-tested ingredients, and traditional methods
                  designed to promote holistic wellness, balance and vitality.
                </p>
                <p className="nn-hero-body" style={{ marginTop: 14 }}>
                  A bridge between traditional Indian wisdom and contemporary
                  lifestyles — wholesome organic meals and munching options
                  crafted for better health and everyday well-being.
                </p>
                <div className="nn-hero-meta">
                  <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("products")}>
                    Visit the kitchen
                  </button>
                  <button className="nn-btn-arrow" onClick={() => onNavigate("about")}>
                    Read why we started
                  </button>
                </div>
              </NNReveal>
            </div>
            <div>
              <NNReveal delay={120}>
                <NNImage
                  tone="saffron"
                  pattern="lotus"
                  shape="soft"
                  title="Hero photograph"
                  caption="Hands stirring fresh turmeric into a brass pot of ghee, lit by morning window-light. Spices visible — black mustard seed, ajwain, curry leaf. No styling."
                  style={{ aspectRatio: "4 / 5" }}
                />
              </NNReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED — Golden Khichdi story */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>This week from our pots</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="rust"
                pattern="warli"
                title="Featured product photograph"
                caption="A clay bowl of golden khichdi, photographed straight down on a wooden plank. Whole turmeric root + a small pat of ghee melting on top. Natural shadow."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">Issue 04 · Late spring</span>
              <h2 className="nn-feature-title" style={{ marginTop: 12 }}>
                Golden Turmeric <em>Khichdi</em>
              </h2>
              <div className="nn-feature-body">
                <p>
                  For centuries, khichdi has been served in Indian homes to
                  heal the gut and balance the body. This isn't quick nutrition
                  — it's a medicine prepared with intention.
                </p>
                <p>
                  Organic turmeric root (not powder), clarified ghee from
                  grass-fed cows, and aged basmati combine to ease digestion,
                  cool excess Pitta heat, and rebuild your foundation. It's the
                  dish you turn to when your body needs rest and repair.
                </p>
              </div>
              <div className="nn-feature-meta">
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Best in</span>
                  <span className="nn-feature-meta-item-val">Late spring · summer</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Balances</span>
                  <span className="nn-feature-meta-item-val">Pitta · Kapha</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Strengthens</span>
                  <span className="nn-feature-meta-item-val">Digestive fire (agni)</span>
                </div>
              </div>
              <div className="nn-feature-cta">
                <button className="nn-btn nn-btn--ghost" onClick={() => onNavigate("products")}>
                  See the full kitchen
                </button>
              </div>
            </NNReveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="nn-section nn-section--peacock">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>How we cook</NNEyebrowRow>
            <h2 className="nn-section-title">
              Four principles we <em>do not</em> compromise on.
            </h2>
            <p className="nn-section-lede">
              Every pot we send out has been measured against these. If a recipe
              cannot honor them, we don't make the recipe.
            </p>
          </NNReveal>
          <div className="nn-pillars" style={{ marginTop: 56 }}>
            {[
              { num: "i", title: "Eat with the ritu", body: "Six seasons, six kitchens. What we cook in late spring is not what we cook in monsoon — because your body is also not the same body." },
              { num: "ii", title: "Whole, not powdered", body: "Turmeric root, not turmeric dust. Whole spices ground the day they're used. Ghee made in our own pot, not bought in tins." },
              { num: "iii", title: "Tend the agni", body: "Every recipe is built around your digestive fire — soaked grains, slow heat, the right combination of spices to ignite rather than smother." },
              { num: "iv", title: "Honor the source", body: "We know the farmer who grows our rice, the family that presses our oil, the goshala that gives our ghee. No middlemen, no anonymity." },
            ].map((p, i) => (
              <NNReveal key={p.num} delay={i * 80}>
                <div>
                  <span className="nn-pillar-num">{p.num}.</span>
                  <h3 className="nn-pillar-title">{p.title}</h3>
                  <p className="nn-pillar-body">{p.body}</p>
                </div>
              </NNReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUIET CTA */}
      <section className="nn-section">
        <div className="nn-container nn-container--narrow" style={{ textAlign: "center" }}>
          <NNReveal>
            <span className="nn-eyebrow">If you are unsure where to begin</span>
            <h2 className="nn-section-title" style={{ marginTop: 16, marginInline: "auto" }}>
              Let us cook for <em>your</em> body, not the algorithm.
            </h2>
            <p className="nn-section-lede" style={{ margin: "20px auto 32px" }}>
              Tell us your dosha, your season, what's troubling you. We'll
              suggest what to start with — and what to leave for later.
            </p>
            <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
              Take the 4-question dosha quiz
            </button>
          </NNReveal>
        </div>
      </section>
    </div>
  );
}

// ─── PRODUCTS ───────────────────────────────────────────────
const PRODUCTS = [
  {
    name: "Golden Turmeric Khichdi",
    price: "₹540 · 480g",
    tone: "rust",
    pattern: "warli",
    season: "Late spring · summer",
    tags: [
      { label: "Balances Pitta · Kapha", tone: "peacock" },
      { label: "Cooling", tone: "sage" },
    ],
    body:
      "Aged basmati and split mung, soaked overnight, slow-cooked with whole turmeric root, hand-ground cumin, and grass-fed ghee. The traditional dish served in Indian homes when the body needs rest and repair.",
    note: "Best with a spoon of homemade pickle and a glass of buttermilk.",
    caption: "A clay bowl of golden khichdi, photographed on a wooden plank. Whole turmeric root visible.",
  },
  {
    name: "Triphala-Aged Ghee",
    price: "₹920 · 250g",
    tone: "saffron",
    pattern: "lotus",
    season: "All seasons",
    tags: [
      { label: "Balances Vata", tone: "peacock" },
      { label: "Strengthens agni", tone: "rust" },
    ],
    body:
      "Cultured cow's milk from a Western Ghats goshala, churned by hand and clarified slowly over wood-fire. Steeped for 21 days with triphala — the three-fruit Ayurvedic formula that anchors digestion and rebuilds the gut wall.",
    note: "A teaspoon in warm water, an hour before sleep.",
    caption: "Open glass jar of golden ghee with a wooden spoon, light catching the surface.",
  },
  {
    name: "Tulsi-Mint Tisane",
    price: "₹420 · 60g loose",
    tone: "sage",
    pattern: "grain",
    season: "Peak summer",
    tags: [
      { label: "Cools Pitta", tone: "sage" },
      { label: "Sattvic", tone: "peacock" },
    ],
    body:
      "Holy basil from a temple farm in Vrindavan, sun-dried Coorg mint, a fingertip of fennel. Brewed cool, it calms the head and settles the gut after a heavy meal. Brewed warm with jaggery, it carries you through the monsoon.",
    note: "Steep 5 minutes. Never boil tulsi — it surrenders its medicine.",
    caption: "Dried tulsi and mint loose on a brass tray, with a small clay cup of pale green infusion.",
  },
  {
    name: "Ashwagandha Moon Milk",
    price: "₹680 · 200g powder",
    tone: "peacock",
    pattern: "lotus",
    season: "Autumn · winter",
    tags: [
      { label: "Grounds Vata", tone: "peacock" },
      { label: "Nervine", tone: "rust" },
    ],
    body:
      "KSM-66 ashwagandha root from a single Madhya Pradesh farm, blended with cardamom, nutmeg, a thread of saffron, and unrefined cane jaggery. Stir a spoon into warm milk an hour before bed — for the body that races at midnight.",
    note: "Pairs with our Triphala ghee for deeper rest.",
    caption: "A copper tumbler of warm milk on a wool blanket, dusted with cardamom and saffron threads.",
  },
];

function ProductsPage({ onNavigate, device }) {
  return (
    <div className="nn-page-shell">
      {/* BANNER — introduce the three modes */}
      <section className="nn-banner">
        <div className="nn-container">
          <NNReveal>
            <span className="nn-eyebrow">What we offer</span>
            <div className="nn-divider" />
            <h1 className="nn-banner-title">
              Three doors, one <span className="nn-script">healing tradition.</span>
            </h1>
            <p className="nn-banner-lede">
              Order a meal from our cloud kitchen, carry a sachet of our
              Ayurvedic seasoning into your own cooking, or open a Natural
              Nibbles kitchen in your city. Three ways in — the same ancient
              system of healing on the other side.
            </p>
          </NNReveal>
        </div>
      </section>

      {/* MODE 01 — ORDER MEALS (cloud kitchen) */}
      <section className="nn-section">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Mode 01 · From our kitchen</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="rust"
                pattern="warli"
                title="Cloud kitchen photograph"
                caption="A row of clay handis simmering on a low flame, ghee glinting on the rims. Small steel boxes lined up for the day's deliveries."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">Order a meal</span>
              <h2 className="nn-feature-title" style={{ marginTop: 12 }}>
                We cook it the way it should be <em>cooked</em>.
              </h2>
              <div className="nn-feature-body">
                <p>
                  Our cloud kitchen prepares wholesome organic meals using
                  Ayurvedic principles and traditional methods — grains soaked
                  overnight, spices ground fresh, ghee made in our own pot.
                  Then we deliver it to your home, hot, ready to eat.
                </p>
                <p>
                  Not fast food. Slow food, made the way it was always meant to
                  be made.
                </p>
              </div>
              <div className="nn-feature-meta">
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Cooking</span>
                  <span className="nn-feature-meta-item-val">Traditional, slow</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Ingredients</span>
                  <span className="nn-feature-meta-item-val">Organic, traceable</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Delivery</span>
                  <span className="nn-feature-meta-item-val">Hot, scheduled</span>
                </div>
              </div>
              <div className="nn-feature-cta">
                <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
                  Order on WhatsApp
                </button>
                <button className="nn-btn-arrow" onClick={() => onNavigate("contact")}>
                  Ask what we're cooking today
                </button>
              </div>
            </NNReveal>
          </div>

          {/* Example dishes — placeholder strip from existing PRODUCTS */}
          <NNReveal>
            <div style={{ marginTop: 72, marginBottom: 24 }}>
              <span className="nn-eyebrow">A few examples from this week's pots</span>
            </div>
          </NNReveal>
          <div className="nn-products-grid">
            {PRODUCTS.slice(0, 3).map((p, i) => (
              <NNReveal key={p.name} delay={i * 80}>
                <article className="nn-product-card" onClick={() => onNavigate("contact")}>
                  <NNImage
                    tone={p.tone}
                    pattern={p.pattern}
                    title={p.name}
                    caption={p.caption}
                    className="nn-product-img"
                    style={{ aspectRatio: "5 / 4", marginBottom: 24 }}
                  />
                  <div className="nn-product-title-row">
                    <h3 className="nn-product-title">{p.name}</h3>
                    <span className="nn-product-price">{p.price}</span>
                  </div>
                  <div className="nn-product-tags">
                    <span className="nn-product-tag" data-tone="sage">{p.season}</span>
                    {p.tags.map((t) => (
                      <span key={t.label} className="nn-product-tag" data-tone={t.tone}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <p className="nn-product-story">
                    {p.body}
                    <em>{p.note}</em>
                  </p>
                </article>
              </NNReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODE 02 — AYURVEDIC SACHETS */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Mode 02 · Carry the kitchen with you</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="saffron"
                pattern="lotus"
                title="Sachet photograph"
                caption="A small kraft-paper sachet sealed with a wax leaf, beside an open one — whole spices spilling out: ajwain, cumin seed, rock salt, a thread of hing."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">A sachet at hand</span>
              <h2 className="nn-feature-title" style={{ marginTop: 12 }}>
                A small sachet of <em>quiet healing</em>.
              </h2>
              <div className="nn-feature-body">
                <p>
                  Don't have time to cook the traditional way? Stir a Natural
                  Nibbles flavour mix into your own food. Each blend is
                  composed from Ayurvedic principles — flavours that taste
                  familiar, and gently cleanse, balance and strengthen the body
                  from within.
                </p>
                <p>
                  Whole spices, never powders. One sachet seasons a week's
                  cooking and travels in a pocket.
                </p>
              </div>
              <div className="nn-feature-meta">
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Format</span>
                  <span className="nn-feature-meta-item-val">Whole-spice sachets</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Use</span>
                  <span className="nn-feature-meta-item-val">Stir into any dish</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Made for</span>
                  <span className="nn-feature-meta-item-val">Each dosha &amp; season</span>
                </div>
              </div>
              <div className="nn-feature-cta">
                <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
                  Tell me when they launch
                </button>
                <button className="nn-btn-arrow" onClick={() => onNavigate("contact")}>
                  Suggest a blend for me
                </button>
              </div>
            </NNReveal>
          </div>
        </div>
      </section>

      {/* MODE 03 — FRANCHISE */}
      <section className="nn-section nn-section--peacock">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Mode 03 · For partners</NNEyebrowRow>
            <h2 className="nn-section-title">
              Carry this tradition <em>to your city</em>.
            </h2>
            <p className="nn-section-lede">
              Natural Nibbles is built as a scalable cloud kitchen — designed
              to grow without diluting the craft. We are opening franchise
              opportunities for partners who believe food is medicine and want
              to bring this work to their own community.
            </p>
          </NNReveal>
          <div className="nn-pillars" style={{ marginTop: 56 }}>
            {[
              { num: "i", title: "A proven model", body: "A cloud kitchen format with the unit economics, sourcing rhythm and quality checks worked out — ready to set up in a new city." },
              { num: "ii", title: "Recipe & training", body: "Full transfer of Ayurvedic preparation methods, seasonal menus and grinding-day protocols. Your kitchen, our craft." },
              { num: "iii", title: "Brand & sourcing support", body: "Marketing, packaging, supplier relationships and ongoing operational guidance — so the tradition stays whole as it travels." },
            ].map((p, i) => (
              <NNReveal key={p.num} delay={i * 80}>
                <div>
                  <span className="nn-pillar-num">{p.num}.</span>
                  <h3 className="nn-pillar-title">{p.title}</h3>
                  <p className="nn-pillar-body">{p.body}</p>
                </div>
              </NNReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <NNReveal>
              <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
                Begin a franchise conversation
              </button>
              <p style={{ marginTop: 14, fontSize: 13, color: "var(--nn-cream-2)", fontStyle: "italic" }}>
                We share full terms after an initial conversation.
              </p>
            </NNReveal>
          </div>
        </div>
      </section>

      {/* CLOSER — quiet invitation */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container nn-container--narrow" style={{ textAlign: "center" }}>
          <NNReveal>
            <span className="nn-eyebrow">Not sure where to begin?</span>
            <h2 className="nn-section-title" style={{ marginTop: 14, marginInline: "auto" }}>
              We'd rather you ate <em>one</em> right thing than five wrong ones.
            </h2>
            <p className="nn-section-lede" style={{ margin: "18px auto 28px" }}>
              Tell us about your body, your season, and what you're hoping to
              shift. We'll write back with one or two suggestions — and an
              honest note about what we wouldn't bother sending you.
            </p>
            <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
              Ask the kitchen
            </button>
          </NNReveal>
        </div>
      </section>
    </div>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────
function AboutPage({ onNavigate, device }) {
  return (
    <div className="nn-page-shell">
      <section className="nn-banner">
        <div className="nn-container">
          <NNReveal>
            <span className="nn-eyebrow">Our story</span>
            <div className="nn-divider" />
            <h1 className="nn-banner-title">
              We started this kitchen because <em>medicine</em> shouldn't taste like punishment.
            </h1>
          </NNReveal>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-founder">
            <NNReveal>
              <NNImage
                tone="peacock"
                pattern="grain"
                shape="soft"
                title="Founder portrait"
                caption="The kitchen at golden hour — hands flour-dusted, brass thaalis stacked on a wooden shelf, whole spices in steel boxes."
                className="nn-founder-portrait"
                style={{ aspectRatio: "3 / 4" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">A letter from our kitchen</span>
              <div className="nn-divider" />
              <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--nn-ink-2)" }}>
                <p>
                  Natural Nibbles is an emerging organic food and cloud kitchen
                  startup, built on a scalable business model that delivers a
                  simplified yet authentic traditional food experience —
                  inspired by India's rich heritage and cultural wisdom.
                </p>
                <p style={{ marginTop: 16 }}>
                  At Natural Nibbles, food is not viewed merely as nourishment.
                  It is embraced as an ancient system of healing. Our offerings
                  are thoughtfully prepared using Ayurvedic principles,
                  time-tested ingredients, and traditional preparation methods
                  designed to promote holistic wellness, balance and vitality.
                </p>
                <p style={{ marginTop: 16 }}>
                  We aim to revive forgotten culinary traditions and transform
                  them into convenient, modern-day food solutions — without
                  compromising authenticity, purity, or health benefits. Every
                  product reflects our commitment to natural living, mindful
                  eating, and sustainable wellness.
                </p>
                <p style={{ marginTop: 16 }}>
                  Natural Nibbles bridges the gap between traditional Indian
                  wisdom and contemporary lifestyles — offering wholesome
                  organic meals and munching options crafted for better health
                  and everyday well-being.
                </p>
              </div>
              <blockquote className="nn-founder-quote">
                Tradition simplified. Healing, prepared with intention.
              </blockquote>
              <div className="nn-founder-sig">— from the kitchen</div>
              <div className="nn-founder-attribution">Natural Nibbles · founder &amp; head cook</div>
            </NNReveal>
          </div>
        </div>
      </section>

      {/* SOURCING — peacock dark band */}
      <section className="nn-section nn-section--peacock">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Where it comes from</NNEyebrowRow>
            <h2 className="nn-section-title">
              We know <em>every farm</em> by name. <br />Here are four.
            </h2>
            <p className="nn-section-lede">
              No middlemen, no anonymity. If we can't visit the source within a
              day's drive, we don't carry the ingredient.
            </p>
          </NNReveal>
          <div className="nn-sourcing" style={{ marginTop: 48 }}>
            {[
              { name: "Krishi Goshala", place: "Sahyadri Hills, Maharashtra", tag: "Ghee · curd · butter", tone: "saffron", pattern: "grain" },
              { name: "Anandvan Farm", place: "Wardha, Maharashtra", tag: "Turmeric · ginger · ajwain", tone: "rust", pattern: "lotus" },
              { name: "Tulsi Vatika", place: "Vrindavan, Uttar Pradesh", tag: "Tulsi · brahmi · shankhpushpi", tone: "sage", pattern: "warli" },
              { name: "Akole Collective", place: "Ahmednagar, Maharashtra", tag: "Rice · mung · barley", tone: "cream", pattern: "grain" },
            ].map((s) => (
              <div key={s.name} className="nn-source-row">
                <NNImage
                  tone={s.tone}
                  pattern={s.pattern}
                  shape="circle"
                  title={s.name}
                  caption=""
                  className="nn-source-img"
                  style={{ width: "100%", height: "100%", aspectRatio: "1" }}
                />
                <div>
                  <div className="nn-source-name">{s.name}</div>
                  <div className="nn-source-place">{s.place}</div>
                </div>
                <div className="nn-source-tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="nn-section">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>What we won't do</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="sage"
                pattern="warli"
                title="Kitchen scene"
                caption="Hands grinding cumin in a stone mortar, late afternoon. Spice jars and a brass measure visible in the soft background."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <h2 className="nn-feature-title">
                The list <em>we keep</em> taped to the kitchen wall.
              </h2>
              <ul style={{ marginTop: 24, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "No spice powder older than the week.",
                  "No oils refined or hydrogenated. Cold-pressed only.",
                  "No microwaves, ever. Reheating in a small pan with a spoon of water.",
                  "No ingredient whose farmer we cannot call by name.",
                  "No claims we wouldn't make in front of an Ayurvedic vaidya.",
                  "No 'detox.' No 'superfood.' No 'glow-up.'",
                ].map((line) => (
                  <li key={line} style={{ display: "flex", gap: 14, fontSize: 16.5, color: "var(--nn-ink-2)", lineHeight: 1.55 }}>
                    <span style={{ color: "var(--nn-saffron)", fontFamily: "var(--nn-display)", fontStyle: "italic", flex: "0 0 16px" }}>—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </NNReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT ────────────────────────────────────────────────
function ContactPage({ onNavigate, device }) {
  const [form, setForm] = _useStateP({
    name: "",
    email: "",
    goal: "",
    dosha: "",
    season: "",
    message: "",
  });
  const [sent, setSent] = _useStateP(false);

  const update = (k, v) => setForm({ ...form, [k]: v });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="nn-page-shell">
      <section className="nn-banner">
        <div className="nn-container">
          <NNReveal>
            <span className="nn-eyebrow">Visit us · write to us</span>
            <div className="nn-divider" />
            <h1 className="nn-banner-title">
              Tell us what your body is <em>asking for</em>.
            </h1>
            <p className="nn-banner-lede">
              We read every note ourselves — not a chatbot, not a form filter.
              Reply usually within two days. If you'd rather come by the
              kitchen, we'd love that more.
            </p>
          </NNReveal>
        </div>
      </section>

      <section className="nn-section" style={{ paddingTop: 32 }}>
        <div className="nn-container">
          <div className="nn-contact-grid">
            <NNReveal>
              <h2 className="nn-feature-title" style={{ marginBottom: 8 }}>
                Write to the <em>kitchen</em>.
              </h2>
              <p style={{ color: "var(--nn-ink-2)", marginBottom: 32, fontSize: 16, lineHeight: 1.65, maxWidth: 480 }}>
                These questions aren't checkboxes. The more honest you can be,
                the better we can cook for you.
              </p>
              {sent ? (
                <div className="nn-form-success">
                  <h3>Thank you, {form.name.split(" ")[0] || "friend"}.</h3>
                  <p>
                    Your note is sitting in our kitchen inbox. Someone from
                    our team will write back within two days — usually after
                    the morning grinding is done. In the meantime, the dosha
                    quiz below is a good place to wander.
                  </p>
                  <button
                    className="nn-btn-arrow"
                    style={{ marginTop: 16 }}
                    onClick={() => { setSent(false); setForm({ name: "", email: "", goal: "", dosha: "", season: "", message: "" }); }}
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form className="nn-form" onSubmit={handleSubmit}>
                  <div className="nn-field">
                    <label className="nn-field-label" htmlFor="nn-name">Your name</label>
                    <input
                      id="nn-name"
                      className="nn-input"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="nn-field">
                    <label className="nn-field-label" htmlFor="nn-email">Email <em>so we can write back</em></label>
                    <input
                      id="nn-email"
                      className="nn-input"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="nn-field">
                    <label className="nn-field-label">What health goal brings you here?</label>
                    <div className="nn-field-radios">
                      {[
                        "Calmer gut",
                        "Better sleep",
                        "Steady energy",
                        "Cooling inflammation",
                        "Rebuild after illness",
                        "Just curious",
                      ].map((g) => (
                        <button
                          key={g}
                          type="button"
                          className="nn-radio-chip"
                          data-active={form.goal === g}
                          onClick={() => update("goal", g)}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="nn-field">
                    <label className="nn-field-label" htmlFor="nn-dosha">Your dominant dosha <em>if you know it</em></label>
                    <select
                      id="nn-dosha"
                      className="nn-select"
                      value={form.dosha}
                      onChange={(e) => update("dosha", e.target.value)}
                    >
                      <option value="">I'm not sure — happy to be told</option>
                      <option value="vata">Vata · wind, dry, mobile</option>
                      <option value="pitta">Pitta · fire, sharp, warm</option>
                      <option value="kapha">Kapha · earth, steady, heavy</option>
                      <option value="mixed">A mix · I've been told two</option>
                    </select>
                  </div>
                  <div className="nn-field">
                    <label className="nn-field-label" htmlFor="nn-msg">Anything else we should know</label>
                    <textarea
                      id="nn-msg"
                      className="nn-textarea"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="What you've tried, what hasn't worked, what your body has been asking for. The longer the note, the better we can cook."
                    />
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button type="submit" className="nn-btn nn-btn--primary">
                      Send your note
                    </button>
                  </div>
                </form>
              )}
            </NNReveal>

            <NNReveal delay={120}>
              <div className="nn-info-card">
                <div className="nn-info-block">
                  <h4>The kitchen</h4>
                  <p>
                    Plot 253/1, Jawaharnagar Colony<br />
                    Moulali, Hyderabad 500040
                    <em>Natural Nibbles Pvt Ltd · do visit, we'd love that.</em>
                  </p>
                </div>
                <div className="nn-info-block">
                  <h4>Write to us</h4>
                  <p>
                    naturalnibblespvtltd@gmail.com
                    <em>Read by our team through the week.</em>
                  </p>
                </div>
                <div className="nn-info-block">
                  <h4>Call, if you'd rather</h4>
                  <p>
                    +91 79818 82112
                    <em>Mornings are best — afternoons are for cooking.</em>
                  </p>
                </div>
                <div className="nn-info-block">
                  <h4>Consultations</h4>
                  <p>
                    A 45-minute session with our Ayurvedic vaidya is ₹1,800. We'll
                    write you a small seasonal menu and the recipes to make at home.
                    <em>Book through email — we don't keep a calendar widget.</em>
                  </p>
                </div>
              </div>
            </NNReveal>
          </div>
        </div>
      </section>

      {/* DOSHA QUIZ */}
      <section className="nn-section nn-section--cream-2" id="quiz">
        <div className="nn-container">
          <NNReveal>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <span className="nn-eyebrow">A four-question wander</span>
              <h2 className="nn-section-title" style={{ marginTop: 14, marginInline: "auto" }}>
                Which <em>dosha</em> is loudest in you today?
              </h2>
              <p className="nn-section-lede" style={{ margin: "16px auto 0", textAlign: "center" }}>
                This is a rough compass, not a diagnosis. A proper Ayurvedic
                reading takes a pulse, a tongue, and a real conversation. But
                it's a fine place to begin.
              </p>
            </div>
          </NNReveal>
          <NNReveal delay={100}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <NNDoshaQuiz />
            </div>
          </NNReveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, ProductsPage, AboutPage, ContactPage, PRODUCTS });
