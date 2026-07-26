# super.money Affordable Commerce

A zero-to-one product proposal for extending super.money's existing payments and
credit relationship into an affordability-first commerce business.

This is an independent portfolio concept. Product names, users, merchants,
economics, and credit decisions shown in the prototype are illustrative.

## The Strategic Question

super.money already gives users payment, credit-health, credit-building, and
credit-access surfaces. This project starts from that current state:

```text
Payments -> Credit Health -> Credit Access -> Affordable Commerce
```

The question is:

> How could super.money build a repeatable, contribution-positive commerce
> business by helping eligible users discover what fits their cash flow?

The proposal is an affordability layer with a deliberately narrow catalogue. It
does not require super.money to own inventory, warehouses, or a delivery network.

## Launch Contract

**Initial customer**

Existing high-frequency UPI users, primarily 21-35, considering a practical
purchase between Rs. 5,000 and Rs. 30,000. Some need short-term cash-flow
flexibility; others can pay in full and primarily value a seller-funded offer.

**Initial categories**

1. Budget and refurbished smartphones
2. Small home appliances
3. Work, study, and mobile accessories

Fashion, travel, furniture, luxury products, and categories with high return or
fraud complexity remain outside the first controlled release.

**Three product bets**

1. **Affordability-first discovery:** rank financeable products by the amount due
   today and the user's available shopping limit.
2. **Bag-to-checkout optimisation:** make bundle economics, remaining limit,
   total repayment, lender, KFS, and consent visible before confirmation.
3. **Merchant Affordability OS:** give sellers catalogue controls, funded-offer
   experiments, fulfilment, settlement, analytics, and a white-label checkout API.

Credit Health remains a complete borrower capability. It helps a user retrieve,
understand, monitor, and correct bureau information without implying that a score
guarantees a loan or commerce limit.

## Success Model

**Product North Star**

> Monthly repeat Affordable Commerce buyers

**Business scale gate**

> Cohort contribution remains positive after returns, incentives, payment costs,
> servicing, fraud, and the platform's expected credit-loss exposure.

The primary funnel is:

```text
Eligible exposure
  -> Splitstore visit
  -> Product detail
  -> Add to bag
  -> Checkout
  -> Offer selection
  -> Completed order
  -> 30/60/90-day repeat
```

The repository uses one illustrative Rs. 100 Cr annualised-GMV scenario throughout:
1.5M monthly targeted exposures, 10.8K monthly orders, Rs. 7,700 AOV, and
approximately Rs. 70 contribution per completed order before fixed costs. These
figures are a planning model, not a company forecast.

## Live Prototype

- Borrower mobile experience:
  <https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer>
- Seller web portal:
  <https://super-money-affordable-commerce.naman884186.chatgpt.site/seller>

Both links are public, require no sign-in, and use fictional demonstration data.

The borrower prototype includes:

- Splitstore placement based on the current super.money navigation
- Budget-led discovery and affordability-ranked products
- Product terms, bag, responsible bundle, financing, KFS, and checkout
- Order, repayment, and available-limit management
- Credit Health consent, score freshness, factors, actions, bureau-delay handling,
  and correction tracking

The seller prototype includes:

- Catalogue financeability and onboarding
- Seller-funded affordability experiments
- Orders, refunds, settlements, cohort economics, and risk guardrails
- Splitstore channel controls and a white-label merchant checkout API

## Repository Guide

- [Full product blueprint](docs/product-blueprint.md): strategy, personas,
  category choice, buyer and seller journeys, P&L, metrics, roadmap, GTM,
  architecture, schemas, APIs, risks, and the full Credit Health case study.
- [Leadership application pitch](docs/application-pitch.md): the decision-first
  version intended for super.money leadership.
- [Technical system-design deep dive](docs/system-design-deep-dive.md):
  beginner-friendly explanations of services, service links, inputs, outputs,
  APIs, events, schemas, failure recovery, security, and Credit Health.
- [Prototype walkthrough](docs/prototype-walkthrough.md): screen-by-screen scope
  and a recording path.
- [Three-minute presentation](presentation/output/super-money-affordable-commerce-pitch.pptx):
  editable leadership deck with appendix.
- [Video narration](presentation/output/intro-video-speaker-notes.md): timed
  speaker notes for the introduction video.
- `prototype/`: React buyer mobile app, seller portal, static build, and
  Playwright release verification.
- `presentation/`: source and build tooling for the PowerPoint.

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

Run the release checks:

```bash
npm run verify
```

## Rebuild The Presentation

```bash
cd presentation
npm install
npm run build
```

Generated files are written to `presentation/output/`.
