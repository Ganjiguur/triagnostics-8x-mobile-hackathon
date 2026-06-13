# TriAgnostics

**Personalized gut health — without lab tests.**

[Live demo on Vercel](https://triagnostics-8x-mobile-hackathon.vercel.app/)

---

## What this app does

TriAgnostics is a prototype gut-health assessment experience built for the 8x hackathon. It replaces expensive lab tests with a short questionnaire that estimates your metabolic state and matches you to a personalized postbiotic and food profile.

- **Non-invasive** — no stool, blood, or saliva samples
- **Instant** — results in under 2 minutes
- **Personalized** — matched to your profile, not a generic product
- **Stable** — recommendations are based on postbiotic science, not live probiotic strains

---

## Problem

Gut health has gone mainstream, but most tools are still expensive, slow, or one-size-fits-all:

- Microbiome tests cost £150–500 and take 2–4 weeks
- They require invasive samples like stool, blood, or saliva
- Probiotic supplements are unstable and often unpredictable
- Most recommendations ignore how different every gut really is

People need a faster, smarter way to get useful gut-health guidance.

---

## Solution

TriAgnostics uses a short adaptive assessment to estimate where you sit on a fixed, lab-validated metabolic effect map.

It does not try to predict a full microbiome. Instead, it infers your profile from symptom and lifestyle patterns and matches you to the best postbiotic and food recommendations.

### Demo flow

1. **Landing** — intro and assessment CTA
2. **Quiz** — 8-question personal assessment
3. **Results** — matched profile plus targeted recommendations
4. **Progress** — mock tracking of gut comfort, energy, and bloating
5. **Follow-up** — a second check-in after 7 weeks to refine the profile

---

## How it works

The system is built in two layers: one fixed and lab-validated, and one adaptive and questionnaire-driven.

```mermaid
flowchart TD
  A[Airag fermentation
(5,000 years)] --> B[308 postbiotic
compounds]
  B --> C[Lab screening
(effect map)]
  C --> D[8-question
assessment]
  D --> E[Profile match]
  E --> F[Personalized
recommendations]
```

### Step 1 — Ancient ingredient
Airag is the source ingredient. Its fermentation history provides the basis for a proprietary postbiotic library.

### Step 2 — Lab screening
308 postbiotic compounds are mapped to metabolic effects like digestion, energy, inflammation, and balance.

### Step 3 — Questionnaire
The short quiz estimates where you sit on the effect map using symptom patterns and lifestyle inputs.

### Step 4 — Match
Your result is matched to a personalized metabolic profile and a set of recommended postbiotic foods/products.

---

## Validation so far

Early testing shows strong initial product-market fit:

- **84%** agreement with expert practitioner assessment
- **~70%** reported better digestive comfort
- **~60%** sustained energy improvement
- **~52%** reduced bloating
- **~61%** said they would continue a subscription

This demo is designed to improve with more feedback and eventual clinical validation.

---

## Demo features

- **Landing** — product intro and fast-start CTA
- **Quiz** — 8-question adaptive questionnaire
- **Results** — matched profile with product/food recommendations
- **Progress** — mock chart tracking of digestive comfort, energy, and bloating
- **Follow-up** — second questionnaire after a 7-week simulated check-in
- **Demo control** — jump the simulated week to 7 for review
- **State persistence** — quiz results flow into results and follow-up pages
- **Responsive UI** — mobile-first design with rounded cards, teal/coral accents

---

## Routes

- `/` — Landing
- `/quiz` — Assessment
- `/results` — Profile results
- `/progress` — Progress dashboard
- `/followup` — Follow-up questionnaire
- `/science` — Scientific explanation

---

## Project structure

```text
triagnostics/
├── src/
│   ├── components/        # Shared UI components
│   ├── pages/             # Route screens
│   ├── data/              # Questions, profiles, chart data
│   ├── lib/               # Scoring logic
│   ├── store/             # Zustand quiz state
│   ├── App.tsx            # Routing setup
│   └── index.css          # Tailwind styling
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Tech stack

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- React Router 6
- Zustand
- Recharts
- Lucide React

---

## Run locally

```bash
cd triagnostics
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

## Roadmap

- Clinical validation against biological ground truth
- Passive data enrichment via Apple Health / Google Fit / Strava
- B2C subscription product with postbiotic delivery
- B2B API & retail wellness partnerships

---

## Notes

All quiz content and profile recommendations are defined in `src/data/` so the demo can be updated quickly without code changes.

> The "Simulate: jump to week 7" control is a demo-only device. It does not represent a real time-based feature.

---

## License

Demo project for the 8x hackathon.
