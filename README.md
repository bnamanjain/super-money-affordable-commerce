# super.money Affordable Commerce Concept

A focused zero-to-one proposal for adding affordable commerce to a high-frequency
UPI app. The repository contains the product strategy, lending and commerce system
design, interactive buyer and seller prototypes, business model, launch plan, and
a narrated leadership presentation.

## Product Thesis

The MVP tests one question:

> Can a UPI app turn eligible payment users into responsible repeat shoppers by
> making affordability the discovery layer, while seller-funded offers and
> SKU-level controls produce positive contribution?

The scope is intentionally limited to three connected capabilities:

1. **Affordability-led buyer journey:** discover products by monthly payment,
   understand total repayment, complete consent, and manage the resulting plan.
2. **Financeable catalogue and seller control plane:** onboard eligible SKUs,
   configure funded offers, fulfil orders, and reconcile settlements.
3. **Risk-adjusted growth loop:** use eligibility, unit economics, repayment, and
   returns data to improve conversion without hiding the cost of credit.

The concept does not assume inventory ownership, a proprietary delivery network,
or an underwriting stack built from scratch.

## Live Prototype

- Buyer mobile experience:
  <https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer>
- Seller web portal:
  <https://super-money-affordable-commerce.naman884186.chatgpt.site/seller>

The deployed prototype is public, requires no sign-in, and contains fictional
demonstration data. Leadership viewers can open either link directly.

## Project Contents

- [Full product blueprint](docs/product-blueprint.md): strategy, personas,
  journeys, lending design, P&L, metrics, architecture, schemas, APIs, roadmap,
  experiments, risks, and leadership email.
- [Technical system-design deep dive](docs/system-design-deep-dive.md):
  beginner-friendly, production-depth coverage of all 25 services, service
  dependencies, API architecture, workflows, events, data schemas, security,
  deployment, reliability, testing, and the current prototype code.
- [Leadership application pitch](docs/application-pitch.md): focused proposal,
  business case, decisions, and presentation narrative.
- [Prototype walkthrough](docs/prototype-walkthrough.md): screen-by-screen scope
  traceability and recording script.
- [Presentation](presentation/output/super-money-affordable-commerce-pitch.pptx):
  15-slide editable deck with embedded speaker notes.
- [Video speaker notes](presentation/output/intro-video-speaker-notes.md):
  concise narration for the main presentation and appendices.
- `prototype/`: React buyer mobile app, seller portal, production build, and
  Playwright release verification.
- `presentation/`: source and build tooling for the PowerPoint deck.

## Run Locally

```bash
cd prototype
npm install
npm run build
npm run start -- --port 4173
```

Open:

- Buyer: `http://localhost:4173/buyer.html`
- Seller: `http://localhost:4173/seller.html`

Run the end-to-end release checks:

```bash
node scripts/verify.mjs
```

The verification covers the complete buyer purchase and repayment path and the
seller offer, catalogue, order, settlement, and analytics workflows.

## Rebuild The Deck

```bash
cd presentation
npm install
npm run build
```

The generated PowerPoint and narration notes are written to
`presentation/output/`.

## Disclaimer

This is an independent product concept created for a product-management
application. It is not an official super.money or Flipkart product, and the
commercial and credit assumptions are illustrative.
