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

      {/* FEATURED — Bajji Masala, our signature munch */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Fresh from our carts</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="rust"
                pattern="warli"
                title="Signature munch photograph"
                caption="A paper cone of golden Mirapakaya bajji dusted in deep-red masala, photographed straight down on a steel cart tray. Curry leaf and cut green chilli scattered around."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">Just Munch · our signature</span>
              <h2 className="nn-feature-title" style={{ marginTop: 12 }}>
                Bajji <em>Masala</em>
              </h2>
              <div className="nn-feature-body">
                <p>
                  Andhra's streets gave us the Mirapakaya bajji — the stuffed
                  green chilli fried hot and eaten straight from the cart. We
                  carried its soul into a masala: fierce, savoury, and honestly
                  a little addictive.
                </p>
                <p>
                  Super spicy and mouth-wateringly good. Break the diet, just
                  this once, and dig in — then finish it with one of our
                  Ayurvedic toppings to keep the belly happy about it.
                </p>
              </div>
              <div className="nn-feature-meta">
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Character</span>
                  <span className="nn-feature-meta-item-val">Fiercely spicy</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">From</span>
                  <span className="nn-feature-meta-item-val">Andhra street carts</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Price</span>
                  <span className="nn-feature-meta-item-val">₹85</span>
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
              { num: "i", title: "Rooted in the street", body: "Our munchies come from the carts of Andhra Pradesh and Telangana — traditional recipes carried forward, not flavours invented for a menu." },
              { num: "ii", title: "Herbs that heal", body: "Every masala can be finished with an Ayurvedic topping — Arogya, Swasthya, Raksha — blended to cleanse the gut and strengthen the body while you snack." },
              { num: "iii", title: "Mixed when you order", body: "Masalas are tossed fresh at the point of delivery, so the crunch reaches you crisp — never sitting, never soggy." },
              { num: "iv", title: "Held to a standard", body: "Prepared to ISO 9001, FSSAI and GMP norms, with ingredients from suppliers we can name. No anonymity in what you eat." },
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
    name: "Bajji Masala",
    line: "Just Munch",
    price: "₹85",
    tone: "rust",
    pattern: "warli",
    season: "Signature · spicy",
    tags: [
      { label: "Fiercely hot", tone: "rust" },
      { label: "1030 kcal", tone: "peacock" },
    ],
    body:
      "Built around Andhra's beloved Mirapakaya bajji — the stuffed green chilli sold hot from the street cart. Super spicy, mouth-wateringly savoury, and honestly a little addictive. Break the diet and dig in.",
    note: "Our loudest, most unapologetic munch.",
    caption: "A paper cone of golden Mirapakaya bajji dusted in deep-red masala, on a steel cart tray with cut chilli scattered around.",
  },
  {
    name: "Cashew Masala",
    line: "Just Munch",
    price: "₹125",
    tone: "saffron",
    pattern: "lotus",
    season: "Rich & moreish",
    tags: [
      { label: "Heart & nerves", tone: "peacock" },
      { label: "Indulgent", tone: "rust" },
    ],
    body:
      "A street-foodie's favourite that isn't strictly diet food — but looks after your heart, bones, hair and nerves, helps ease blood pressure, and (believe it) still lends a hand with weight. Give yourself the treat.",
    note: "The indulgent one you can half-justify.",
    caption: "Roasted cashews tossed in a warm spiced masala, spilling from an open butter-paper sachet.",
  },
  {
    name: "Puffed Rice Masala",
    line: "Just Munch",
    price: "₹70",
    tone: "sage",
    pattern: "grain",
    season: "Light · diet-friendly",
    tags: [
      { label: "Low fat", tone: "sage" },
      { label: "Fibre + iron", tone: "peacock" },
    ],
    body:
      "Made with puffed rice — feather-light, low in fat, quietly generous with dietary fibre and iron. Gentle enough for a day you're under the weather, honest enough for anyone eating to a plan.",
    note: "The everyday munch that asks nothing of you.",
    caption: "A brass bowl of puffed rice tossed with curry leaf and fine masala, in soft natural light.",
  },
  {
    name: "Corn Masala",
    line: "Healthy Munch",
    price: "₹85",
    tone: "saffron",
    pattern: "lotus",
    season: "Spicy-sweet",
    tags: [
      { label: "Anytime snack", tone: "rust" },
      { label: "Vitamin B6", tone: "sage" },
    ],
    body:
      "Spicy and sweet at once, and good for you without making a fuss about it — carrying the acids and vitamin B6 your body actually wants. A small trick played on your taste buds, entirely in their favour.",
    note: "An anytime munch. Genuinely anytime.",
    caption: "Steamed golden corn kernels glossed with masala in a small clay katori.",
  },
  {
    name: "Sprouts Masala",
    line: "Healthy Munch",
    price: "₹80",
    tone: "sage",
    pattern: "warli",
    season: "Protein-rich",
    tags: [
      { label: "Protein + calcium", tone: "peacock" },
      { label: "High fibre", tone: "sage" },
    ],
    body:
      "Bursting with green-gram sprouts — richly stocked with dietary fibre, protein, iron and calcium — yet it tastes and eats like a treat. Proof that healthy food can be the fun option, not the forfeit.",
    note: "For anyone who thinks healthy has to be dull.",
    caption: "Green-gram sprouts tossed with onion, chilli and masala, served on a banana leaf.",
  },
  {
    name: "Mango Masala",
    line: "Healthy Munch",
    price: "₹80",
    tone: "saffron",
    pattern: "grain",
    season: "Summer cooler",
    tags: [
      { label: "Vitamin A & E", tone: "rust" },
      { label: "Beats the heat", tone: "sage" },
    ],
    body:
      "Packed with raw, sour green mango — rich in vitamins A and E, with the special salts that help your body hold water through the heat. Get ready for a proper tastebud-tingling summer bite.",
    note: "Best when the afternoons turn cruel.",
    caption: "Slivers of raw green mango dusted in red-chilli masala, bright against dark slate.",
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
              Many ways in, one <span className="nn-script">healing tradition.</span>
            </h1>
            <p className="nn-banner-lede">
              Order a meal from our cloud kitchen, snack on our street-style
              masala munchies, finish them with a healing Ayurvedic topping,
              wash it down with a desi drink — even feed the dog well. Many
              doors, one honest idea: food that tastes like home and treats
              your body kindly.
            </p>
          </NNReveal>
        </div>
      </section>

      {/* MODE 01 — ORDER MEALS (cloud kitchen) */}
      <section className="nn-section">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>From our kitchen</NNEyebrowRow>
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
                  Our cloud kitchen in Moulali prepares wholesome, localised
                  meals and munchies using traditional methods and organic
                  ingredients — cooked fresh, packed clean, and sent out hot.
                </p>
                <p>
                  Order straight from us, or find us on Swiggy and Zomato.
                  Around AS Rao Nagar and within about ten kilometres of the
                  kitchen, a confirmed order reaches your door in roughly
                  thirty minutes.
                </p>
              </div>
              <div className="nn-feature-meta">
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Kitchen</span>
                  <span className="nn-feature-meta-item-val">Moulali, Hyderabad</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Order on</span>
                  <span className="nn-feature-meta-item-val">Swiggy · Zomato · direct</span>
                </div>
                <div className="nn-feature-meta-item">
                  <span className="nn-eyebrow">Delivery</span>
                  <span className="nn-feature-meta-item-val">~30 min · ~10 km</span>
                </div>
              </div>
              <div className="nn-feature-cta">
                {/* Order on WhatsApp button hidden per request
                <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
                  Order on WhatsApp
                </button>
                */}
                <button className="nn-btn-arrow" onClick={() => onNavigate("contact")}>
                  Ask what we're cooking today
                </button>
              </div>
            </NNReveal>
          </div>

        </div>
      </section>

      {/* THE MUNCHIES — full masala range */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>The munchies</NNEyebrowRow>
            <h2 className="nn-section-title">
              Two lines of <em>masala</em>, one honest crunch.
            </h2>
            <p className="nn-section-lede">
              Traditional South Indian munching, prepared with quality herbs,
              spices and veggies — and mixed fresh at the point of delivery so
              it always reaches you crisp. Prices are per pack.
            </p>
          </NNReveal>

          {/* JUST MUNCH */}
          <NNReveal>
            <div style={{ marginTop: 56, marginBottom: 24 }}>
              <span className="nn-eyebrow">Just Munch · tasty all year</span>
            </div>
          </NNReveal>
          <div className="nn-products-grid">
            {PRODUCTS.filter((p) => p.line === "Just Munch").map((p, i) => (
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

          {/* HEALTHY MUNCH */}
          <NNReveal>
            <div style={{ marginTop: 64, marginBottom: 24 }}>
              <span className="nn-eyebrow">Healthy Munch · fun, not a forfeit</span>
            </div>
          </NNReveal>
          <div className="nn-products-grid">
            {PRODUCTS.filter((p) => p.line === "Healthy Munch").map((p, i) => (
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

      {/* TOPPINGS — the USP */}
      <section className="nn-section">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>Finish it with a topping</NNEyebrowRow>
            <h2 className="nn-section-title">
              A spoon of <em>herbs</em> that does more than flavour.
            </h2>
            <p className="nn-section-lede">
              Our toppings are our signature — extra herb seasonings drawn from
              Ayurvedic formulations. They lift the taste of any masala and,
              gently, help the body heal: settling digestion, easing small
              ailments, keeping you light. Stir one in as you snack.
            </p>
          </NNReveal>
          <div className="nn-pillars" style={{ marginTop: 56 }}>
            {[
              { num: "i", title: "Arogya", body: "Makes the masala tastier and, quietly, sharpens the appetite — so a good snack does you good too." },
              { num: "ii", title: "Swasthya", body: "Looks after the liver and cleanses the digestive tract, leaving you feeling lighter after eating, not heavier." },
              { num: "iii", title: "Raksha", body: "Carries a few genuine medicinal properties that shore up the immune system and help the body resist what's going around." },
            ].map((p, i) => (
              <NNReveal key={p.title} delay={i * 80}>
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

      {/* BEVERAGES */}
      <section className="nn-section nn-section--cream-2">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>To wash it down</NNEyebrowRow>
            <h2 className="nn-section-title">
              Desi drinks, and <em>plain good</em> ones.
            </h2>
            <p className="nn-section-lede">
              A short, honest drinks list to go with the heat of the masala —
              some traditional, some simply what you reach for on a hot day.
            </p>
          </NNReveal>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { group: "Desi", items: ["Jal Jeera", "Nimbu Fizz", "Coconut Water"] },
              { group: "Thirst killers", items: ["Chilled Water"] },
            ].map((b, i) => (
              <NNReveal key={b.group} delay={i * 80}>
                <div className="nn-info-card" style={{ height: "100%" }}>
                  <div className="nn-info-block">
                    <h4>{b.group}</h4>
                    <p>{b.items.join(" · ")}</p>
                  </div>
                </div>
              </NNReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOG MUNCH */}
      <section className="nn-section">
        <div className="nn-container">
          <NNReveal>
            <NNEyebrowRow>For the dog, too</NNEyebrowRow>
          </NNReveal>
          <div className="nn-feature">
            <NNReveal>
              <NNImage
                tone="sage"
                pattern="grain"
                title="Dog Munch photograph"
                caption="A clay bowl of dog food on a kitchen floor, a happy dog nosing in from the edge of frame. Warm home light."
                className="nn-feature-img"
                style={{ aspectRatio: "4 / 5" }}
              />
            </NNReveal>
            <NNReveal delay={120}>
              <span className="nn-eyebrow">Dog Munch</span>
              <h2 className="nn-feature-title" style={{ marginTop: 12 }}>
                Healing bowls for the <em>oldest friend</em>.
              </h2>
              <div className="nn-feature-body">
                <p>
                  A local-flavour dog food for pups who need a gentler, gastric
                  diet — made in veg and non-veg combinations, with Ayurvedic
                  herbs chosen to cleanse and rebuild a troubled gut.
                </p>
                <p>
                  The same idea as the rest of our kitchen, in a smaller bowl:
                  food that tastes right and helps the body recover.
                </p>
              </div>
              <div className="nn-feature-cta">
                <button className="nn-btn nn-btn--primary" onClick={() => onNavigate("contact")}>
                  Ask about Dog Munch
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
            <NNEyebrowRow>For partners</NNEyebrowRow>
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
                  Natural Nibbles Pvt Ltd was incorporated in 2026 to promote
                  health across a range of food and beverage — an organic food
                  and cloud kitchen startup built on a simple, scalable idea:
                  traditional Indian eating, made easy and made well.
                </p>
                <p style={{ marginTop: 16 }}>
                  We grew out of three small ambitions. A cloud kitchen for
                  healthy, localised meals. A chain of traditional munchies drawn
                  from the streets of Andhra Pradesh and Telangana. And a dog
                  food that uses Ayurvedic herbs to cleanse and restore a
                  troubled canine gut. Different bowls, one belief — food is an
                  ancient system of healing, not merely nourishment.
                </p>
                <p style={{ marginTop: 16 }}>
                  We are promoted by a group of young women — qualified,
                  experienced people from the worlds of Ayurveda and marketing —
                  who have built each preparation from organic, healthy
                  ingredients chosen for real medicinal value, and for taste that
                  makes you come back.
                </p>
                <p style={{ marginTop: 16 }}>
                  Our work is to revive forgotten munching traditions and turn
                  them into something convenient and modern, without giving up
                  authenticity, purity, or the good they do — a bridge between
                  traditional Indian wisdom and the way people actually eat today.
                </p>
              </div>
              <div style={{ marginTop: 28, display: "grid", gap: 20 }}>
                <div>
                  <span className="nn-eyebrow">Our mission</span>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--nn-ink-2)", marginTop: 6 }}>
                    To bring up young, talented minds with a commitment to serve
                    the betterment of life and healthy living.
                  </p>
                </div>
                <div>
                  <span className="nn-eyebrow">Our vision</span>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--nn-ink-2)", marginTop: 6 }}>
                    To provide unique, healthy, uniform traditional Indian fast
                    food — consistent in quality, quantity and taste — at every
                    location possible, for a quick byte.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <span className="nn-eyebrow">Where we're headed</span>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--nn-ink-2)", marginTop: 6 }}>
                  We're growing beyond a snack brand into an integrated
                  healthy-food platform — pairing Ayurvedic science with
                  clean-label FoodTech, farmer-first sourcing, smart retail and
                  sustainability, to keep fresh, functional nutrition honest,
                  affordable and close to home.
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
              We <em>name</em> our suppliers. <br />And hold to a standard.
            </h2>
            <p className="nn-section-lede">
              No anonymity in what you eat. Ingredients come from named partners
              through a defined process, and everything we make is prepared to
              ISO 9001, FSSAI and GMP norms — with testing before and after each
              batch.
            </p>
          </NNReveal>
          <div className="nn-sourcing" style={{ marginTop: 48 }}>
            {[
              { name: "PURIN", place: "Fresh produce partner", tag: "Vegetables", tone: "sage", pattern: "grain" },
              { name: "Big Basket", place: "Grocery partner", tag: "Groceries & staples", tone: "saffron", pattern: "lotus" },
              { name: "MS Real Spices", place: "Spice & herb partner", tag: "Herbs · spices", tone: "rust", pattern: "warli" },
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
            <NNEyebrowRow>What we always do</NNEyebrowRow>
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
                  "Masalas mixed fresh at the point of delivery — never pre-mixed and left to sit.",
                  "Packed in eco-friendly butter-paper sachets and paper bags. Nothing that outlasts the snack.",
                  "Prepared to ISO 9001, FSSAI and GMP norms, with testing before and after every batch.",
                  "No ingredient from a supplier we cannot name.",
                  "Cashless, fully digitised billing — every order accounted for.",
                  "No claim of healing we wouldn't stand behind.",
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
          <div className="nn-contact-grid" style={{ gridTemplateColumns: "1fr", maxWidth: 480, margin: "0 auto" }}>
            {/* "Write to the kitchen" section (form) hidden per request
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
            */}

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
                  <h4>Order from us</h4>
                  <p>
                    Find us on Swiggy and Zomato, or message us to order direct.
                    Around AS Rao Nagar and within ~10 km of the Moulali kitchen,
                    a confirmed order lands in about 30 minutes.
                    <em>Served through our points of delivery across the area.</em>
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
