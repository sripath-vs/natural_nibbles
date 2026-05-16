// Natural Nibbles — DoshaQuiz
// A 4-question mini-flow that maps answers to a dominant dosha
// (Vata / Pitta / Kapha) and recommends three products.
// All state is internal — no API calls. Result reveal is celebratory but quiet.

const { useState: _useState } = React;

const QUIZ_QUESTIONS = [
  {
    id: "body",
    question: "When you skip a meal, your body...",
    options: [
      { letter: "a", text: "Feels cold, dry, a little anxious", dosha: "vata" },
      { letter: "b", text: "Gets irritable, hot, sharp-hungry", dosha: "pitta" },
      { letter: "c", text: "Honestly doesn't notice for hours", dosha: "kapha" },
    ],
  },
  {
    id: "digestion",
    question: "After eating, you most often feel...",
    options: [
      { letter: "a", text: "Bloated, gassy, irregular", dosha: "vata" },
      { letter: "b", text: "Acidic, warm, sometimes burning", dosha: "pitta" },
      { letter: "c", text: "Heavy, sleepy, slow to move", dosha: "kapha" },
    ],
  },
  {
    id: "season",
    question: "Which season undoes you fastest?",
    options: [
      { letter: "a", text: "Late autumn — dry winds, cold mornings", dosha: "vata" },
      { letter: "b", text: "Peak summer — heat and humidity", dosha: "pitta" },
      { letter: "c", text: "Damp winter — wet, grey, dense days", dosha: "kapha" },
    ],
  },
  {
    id: "goal",
    question: "What brings you here today?",
    options: [
      { letter: "a", text: "I want to feel grounded, warm, less scattered", dosha: "vata" },
      { letter: "b", text: "I want to cool down, calm inflammation, reset gut", dosha: "pitta" },
      { letter: "c", text: "I want lightness, energy, to move through stuck-ness", dosha: "kapha" },
    ],
  },
];

const DOSHA_RESULTS = {
  vata: {
    name: "Vata",
    headline: "You move like wind.",
    description:
      "Vata governs movement — breath, circulation, the rustle of thought. When it's strong, you are creative and quick. When it's spilling over, you are dry, cold, scattered, and your sleep frays. The kitchen feeds you warm, oily, grounding things: long-cooked grains, ghee, root vegetables, warming spices.",
    recommended: ["Golden Turmeric Khichdi", "Triphala Ghee", "Ashwagandha Moon Milk"],
    ingredients: ["Ghee", "Black sesame", "Ajwain", "Ashwagandha"],
  },
  pitta: {
    name: "Pitta",
    headline: "You burn bright.",
    description:
      "Pitta is fire — digestion, ambition, the heat that builds and transforms. When it's balanced, you are sharp and decisive. When it's too high, your gut burns, your skin flares, your patience thins. The kitchen feeds you cool, sweet, slightly bitter foods: rice, coconut, cilantro, fennel, leafy greens.",
    recommended: ["Cooling Coconut Khichdi", "Tulsi-Mint Tisane", "Aloe-Saffron Ghee"],
    ingredients: ["Fennel", "Coconut", "Cilantro", "Saffron"],
  },
  kapha: {
    name: "Kapha",
    headline: "You hold the earth.",
    description:
      "Kapha is structure — bones, immunity, the steady hum that keeps you whole. When balanced, you are grounded and warm. When heavy, you feel stuck, congested, slow. The kitchen feeds you light, warm, lightly spiced foods: barley, mung, ginger, pepper, mustard greens.",
    recommended: ["Mung Sprout Khichdi", "Ginger-Pepper Decoction", "Mustard Honey"],
    ingredients: ["Ginger", "Black pepper", "Trikatu", "Bitter melon"],
  },
};

function NNDoshaQuiz() {
  const [step, setStep] = _useState(0);
  const [answers, setAnswers] = _useState({});
  const [done, setDone] = _useState(false);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[step];
  const currentAnswer = q ? answers[q.id] : null;

  const handleSelect = (dosha) => {
    setAnswers({ ...answers, [q.id]: dosha });
  };

  const handleNext = () => {
    if (!currentAnswer) return;
    if (step + 1 >= total) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  // Tally winning dosha
  const tally = { vata: 0, pitta: 0, kapha: 0 };
  Object.values(answers).forEach((d) => { tally[d] = (tally[d] || 0) + 1; });
  const winner = Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] || "vata";
  const result = DOSHA_RESULTS[winner];

  if (done) {
    return (
      <div className="nn-quiz">
        <div className="nn-quiz-bg"><NNPatternLotus color="#2A2620" /></div>
        <div className="nn-quiz-step nn-quiz-result">
          <span className="nn-quiz-result-eyebrow">Your dominant dosha</span>
          <h3 className="nn-quiz-result-name">{result.name}</h3>
          <p className="nn-quiz-result-body">
            <strong style={{ fontFamily: "var(--nn-display)", fontStyle: "italic", fontSize: 20, color: "var(--nn-ink)", display: "block", marginBottom: 12 }}>
              {result.headline}
            </strong>
            {result.description}
          </p>
          <div className="nn-quiz-result-recommended">
            <span className="nn-eyebrow" style={{ width: "100%", marginBottom: 4 }}>We'd cook for you</span>
            {result.recommended.map((r) => (
              <span key={r} className="nn-quiz-recommended-chip">{r}</span>
            ))}
          </div>
          <div className="nn-quiz-actions">
            <button className="nn-btn-arrow" onClick={reset}>Take the quiz again</button>
            <button className="nn-btn nn-btn--primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Book a consult
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nn-quiz">
      <div className="nn-quiz-bg"><NNPatternLotus color="#2A2620" /></div>
      <div className="nn-quiz-step">
        <div className="nn-quiz-eyebrow">
          <span className="nn-eyebrow">
            Dosha quiz · {step + 1} of {total}
          </span>
          <div className="nn-quiz-progress">
            {QUIZ_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="nn-quiz-dot"
                data-state={i === step ? "active" : i < step ? "done" : ""}
              />
            ))}
          </div>
        </div>
        <h3 className="nn-quiz-question">{q.question}</h3>
        <div className="nn-quiz-options">
          {q.options.map((o) => (
            <button
              key={o.letter}
              className="nn-quiz-option"
              data-selected={currentAnswer === o.dosha}
              onClick={() => handleSelect(o.dosha)}
            >
              <span className="nn-quiz-option-letter">{o.letter}.</span>
              <span>{o.text}</span>
            </button>
          ))}
        </div>
        <div className="nn-quiz-actions">
          <button
            className="nn-btn-arrow"
            onClick={handleBack}
            style={{ visibility: step > 0 ? "visible" : "hidden" }}
          >
            <span style={{ marginRight: 6 }}>←</span>
            Back
          </button>
          <button
            className="nn-btn nn-btn--dark"
            onClick={handleNext}
            disabled={!currentAnswer}
            style={{
              opacity: currentAnswer ? 1 : 0.4,
              cursor: currentAnswer ? "pointer" : "not-allowed",
            }}
          >
            {step + 1 >= total ? "See my dosha" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NNDoshaQuiz, DOSHA_RESULTS, QUIZ_QUESTIONS });
