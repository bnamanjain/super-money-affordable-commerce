# Affordable Commerce Prototype Walkthrough

## 1. Purpose

This prototype demonstrates one connected system through two role-appropriate
surfaces:

1. A borrower mobile app for payments, Credit Health, Splitstore discovery, bag,
   checkout, order, and repayment.
2. A seller web portal for onboarding, catalogue, offers, fulfilment, settlement,
   analytics, and merchant API integration.

Public links:

- Borrower: https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer
- Seller: https://super-money-affordable-commerce.naman884186.chatgpt.site/seller

Both links require no sign-in and contain fictional demonstration data.

## 2. Strategic Scope

The prototype starts from the supplied current-app recording:

```text
UPI home
  -> Splitstore commerce entry

Profile
  -> Credit centre
  -> My credit score
```

Credit Health and Splitstore remain distinct user jobs:

- Credit Health helps the borrower understand and correct bureau information.
- Splitstore helps an eligible borrower discover and purchase what fits.
- A contextual bridge explains that score is one input into a shopping limit.

The commerce scope contains three product bets:

1. Affordability-led discovery
2. Repayment-aware bag and checkout
3. Merchant Affordability OS across in-app and white-label channels

## 3. Shared Demonstration Objects

| Object | Prototype value |
|---|---|
| Borrower | Asha Mehta |
| Latest available bureau score | 742, Good |
| Bureau source | TransUnion CIBIL |
| Bureau-file date | 20 Jul 2026 |
| Available shopping limit | Rs. 12,000 |
| Primary SKU | Nova X1 5G |
| Responsible add-on | Pulse Buds 2 |
| Primary seller | ValueKart Retail |
| Single-item price | Rs. 8,997 |
| Two-item bag | Rs. 11,496 |
| Two-item Pay-in-3 plan | Rs. 3,832 today plus Rs. 3,832 x 2 |
| Remaining limit after bundle | Rs. 504 |
| Lender in concept | DMI Finance |
| Order reference | SM-28491 |
| Credit reference | DMI-60184 |
| Correction case | CH-260726-1842 |

## 4. Borrower Mobile Walkthrough

### Screen 1: UPI Home And Splitstore

**Problem**

Payment frequency alone does not create a differentiated reason to shop.

**Decision**

Keep the existing UPI home structure and introduce Splitstore as a focused
commerce destination. The banner promises a clear use case: shop now and split
the payment into three.

**Observe**

- Payment actions remain primary.
- The Rs. 12,000 available limit makes the entry relevant.
- Splitstore is a full-screen destination after entry.
- Product recommendations remain within the available limit.

**Measure**

Eligible exposure, Splitstore CTR, qualified visits.

### Screen 2: Credit Centre Entry

**Problem**

A score placed only near lending offers can feel like a sales funnel.

**Decision**

Place the primary Credit Health entry under
`Profile -> Credit centre -> My credit score`. Keep a smaller secondary entry in
the Credit tab.

**Observe**

- Credit Health has its own purpose and consent.
- Checking the score does not start a credit application.
- The stored profile later shows `742 - Good`.

**Measure**

Entry rate, consent completion, retrieval success.

### Screen 3: Credit Health Consent

**Problem**

Users may not understand who supplies the score, why data is requested, or
whether a pull creates a loan application.

**Decision**

Explain the source, purpose, view-only request, hard-inquiry status, and data-use
consent before retrieval.

**Observe**

- TransUnion CIBIL is named.
- The purpose is Credit Health only.
- The checkbox is required.
- No-file education is available before continuing.

**Measure**

Consent comprehension and completion, abandonment, complaints.

### Screen 4: Score, Freshness, And Factors

**Problem**

A number without source, date, or explanation offers little control.

**Decision**

Show 742 with model range, bureau, retrieval time, bureau-file date, movement,
three ranked factors, and an education disclaimer.

**Observe**

- Retrieval and bureau-file dates are separate.
- Helping, attention, and developing factors are visually distinct.
- The product avoids guaranteed score or approval claims.
- The shopping-limit bridge says eligibility uses more than the score.

**Measure**

Dashboard activation, factor opens, source/freshness comprehension.

### Screen 5: Action Plan And Correction

**Problem**

Generic score advice can cause unnecessary or harmful financial actions.

**Decision**

Limit the plan to three evidence-based actions with uncertainty and reporting
timing. Give inaccurate data its own correction workflow.

**Observe**

- The priority action uses a concrete reported balance.
- AutoPay is already protected.
- Account review opens a structured correction form.
- Submission produces a case reference and visible lifecycle.

**Measure**

Action start, action completion, correction submission, acknowledgement and
resolution time.

### Screen 6: Bureau-Delay Fallback

**Problem**

A bureau may respond slowly or fail while the user already has a valid saved
snapshot.

**Decision**

Preserve the dated saved score, explain that the failed refresh does not imply a
score change, and offer notification after a successful update.

**Observe**

- No score is estimated.
- Last successful retrieval and file date remain visible.
- The user can continue with the saved dashboard.

**Measure**

Timeout rate, saved-score use, successful background refresh, notification opt-in.

### Screen 7: Budget-Led Splitstore Discovery

**Problem**

Generic category browsing ignores the user's immediate cash-flow constraint.

**Decision**

Let the borrower shop by the amount due today:

- All plans within Rs. 12,000
- Under Rs. 1,000 today
- Rs. 1,000-Rs. 2,500 today
- Rs. 2,500+ today

Category and search controls remain available as secondary discovery tools.

**Observe**

- Product cards lead with due-today amount.
- Future payments and fees are visible.
- Every shown product is financeable for the demonstration user.

**Measure**

Budget-filter use, filter-to-PDP, PDP relevance, ineligible impression rate.

### Screen 8: Product And Approved Plans

**Problem**

Showing financing only at checkout creates surprise and abandonment.

**Decision**

The PDP shows Pay-in-3, superCard EMI, and full UPI with lender, fees, repayment
dates, KFS link, delivery, and return terms.

**Observe**

- Full product price remains visible.
- Pay-in-3 is recommended for this demonstration.
- Full UPI remains a valid path.
- The CTA creates a bag rather than skipping directly to final checkout.

**Measure**

Plan interaction, KFS view, PDP-to-bag.

### Screen 9: Repayment-Aware Bag

**Problem**

Standard cross-sell can increase AOV by pushing the basket beyond responsible
purchasing power.

**Decision**

Show one relevant add-on that still fits the current limit and disclose the
repayment change before it is added.

**Observe**

- Single-item remaining limit is Rs. 3,003.
- Adding Pulse Buds changes every payment from Rs. 2,999 to Rs. 3,832.
- The two-item bag leaves Rs. 504.
- The add-on can be removed and all totals recalculate.

**Measure**

Bundle attach, AOV, bag-to-checkout, return, and DPD guardrails.

### Screen 10: Checkout

**Problem**

Payment, mandate, lender booking, and order creation can fail independently.

**Decision**

Use one reviewed plan and one informed confirmation to coordinate downstream
systems. Keep KFS consent, lender attribution, repayment schedule, and AutoPay
visible.

**Observe**

- The quote is revalidated.
- The user can switch plans.
- Confirmation remains disabled until consent.
- Loading prevents duplicate confirmation.

**Measure**

Bag-to-checkout, consent, mandate, lender, payment, and order success.

### Screen 11: Order And Repayment

**Problem**

The borrower experiences one purchase while internal systems produce order,
payment, credit, and repayment records.

**Decision**

Present one timeline with order ID, credit/payment ID, seller status, amount
paid, delivery, and next repayment.

**Measure**

Support contacts/order, AutoPay success, repeat purchase.

## 5. Seller Web Portal Walkthrough

### Tab 1: Commerce Overview

The North Star is monthly repeat commerce buyers. The dashboard also displays
conversion, AOV, contribution, unit economics, a full store-to-order funnel, and
incrementality versus UPI-only checkout.

### Tab 2: Catalogue

The seller can search and filter SKUs, inspect financeability, inventory,
conversion, returns, and contribution, and submit a new product through product,
policy, and eligibility steps.

### Tab 3: Affordability

The seller changes subvention and customer upfront percentage. Forecast
conversion, cost/order, and contribution respond immediately. Publishing creates
a controlled test with a holdout.

### Tab 4: Orders

The merchant sees a normal fulfilment queue. Internal lender and payment states
remain linked but do not become merchant tasks.

### Tab 5: Settlements

Gross order value, platform fee, offer funding, refund reversal, and net payout
remain reconcilable against the order.

### Tab 6: Growth And Risk

Cohorts combine conversion, AOV, 90-day repeat, 7+ DPD, expected loss, and
contribution/order. Category decisions use repeat and contribution together.

### Tab 7: Channels And APIs

**Problem**

Merchant adoption requires an operational path into Splitstore and a technical
path for external checkout.

**Decision**

Show one launch-readiness checklist and two channels:

1. Splitstore marketplace
2. Merchant checkout sandbox

The API surface creates signed merchant sessions, returns approved plans,
confirms checkout, reconciles refunds, and sends signed order/settlement webhooks.

**Interactions**

- Switch sandbox/live mode.
- Run a test merchant checkout.
- Copy a sandbox key.
- Send a test webhook.

**Measure**

Time-to-live, setup completion, test pass rate, webhook success, external
checkout conversion.

## 6. What Is Simulated

The prototype uses React state and fictional data. It does not:

- Pull a real bureau score
- Underwrite or approve credit
- Create a KFS or loan
- Move money or register a UPI mandate
- Reserve inventory
- Create a merchant order
- Send an external webhook
- Store personal, payment, or bureau data

The production responsibilities are documented in
`docs/system-design-deep-dive.md`.

## 7. Three-Minute Recording Path

| Time | Screen | Narration objective |
|---|---|---|
| 0:00-0:20 | Supplied current-app recording | Establish payments, Credit Health, credit access, and Splitstore as the starting point |
| 0:20-0:40 | Launch cohort and category frame | Explain the narrow customer and supply wedge |
| 0:40-1:10 | Splitstore discovery, PDP, and bag | Demonstrate affordability as discovery and AOV mechanic |
| 1:10-1:30 | Credit Health dashboard and delay/correction | Show trust and operational depth without turning it into the main thesis |
| 1:30-1:50 | Seller overview and offer simulator | Show seller incrementality and P&L |
| 1:50-2:10 | Channels and APIs | Show marketplace plus white-label infrastructure |
| 2:10-2:35 | System and loan-booked/order-failed scenario | Prove technical judgement |
| 2:35-3:00 | Funnel, economics, six-month GTM, close | Explain how the business is measured and safely scaled |

## 8. Recommended Demo Order

Borrower:

```text
Profile -> Credit centre -> consent -> score -> factor -> action
-> correction -> saved-score delay
-> Splitstore -> budget filter -> PDP -> bag -> add/remove bundle
-> checkout -> confirmation -> Credit/repayment
```

Seller:

```text
Overview -> Affordability -> Catalogue onboarding -> Orders
-> Settlements -> Analytics -> Channels & APIs -> test checkout -> test webhook
```
