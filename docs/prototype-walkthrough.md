# Affordable Commerce Prototype Walkthrough

## 1. What This Prototype Is

This is a connected product prototype for an Affordable Commerce vertical inside super.money.

It has two surfaces:

1. A buyer mobile app, because payment, UPI, credit, shopping, and repayment are customer phone journeys.
2. A seller desktop portal, because catalogue operations, offer funding, fulfilment, settlements, and analytics are merchant workflows.

Both surfaces use the same products, financing logic, order identifiers, and commercial assumptions. The prototype is therefore one system story, not two disconnected design exercises.

Working prototype:

- Buyer app: https://super-money-affordable-commerce.naman884186.chatgpt.site
- Seller portal: https://super-money-affordable-commerce.naman884186.chatgpt.site/seller

The deployment is owner-only while the application package is being prepared. Add the intended viewers or change access before sending it to leadership.

The thesis:

**Credit should shape the catalogue, not interrupt checkout.**

The first release is designed to answer one question:

**Can super.money turn eligible UPI users into responsible repeat shoppers through credit-aware discovery, while seller funding and SKU-level risk controls keep financed commerce contribution-positive?**

## 2. Scope

### Buyer Mobile App

In scope:

- Commerce entry from a high-frequency UPI home
- Pre-qualified shopping limit
- Affordability-first product discovery
- User-and-SKU-specific financing eligibility
- Pay in 3, superCard EMI, and full-UPI fallback
- Product detail with repayment schedule, lender, fees, KFS, delivery, and return terms
- Address, AutoPay, consent, down payment, loan booking, and order placement
- Unified order and repayment timeline
- Active plans, repayment, limit utilisation, and responsible limit growth

### Seller Web Portal

In scope:

- Risk-adjusted business dashboard
- SKU-level financeability and catalogue health
- Seller-funded offer simulator
- Controlled campaign launch and holdout logic
- Financed order fulfilment
- Settlement and refund reconciliation
- Cohort analytics connecting conversion, repeat, returns, delinquency, expected loss, and contribution

### Platform Responsibilities Represented

- User credit profile and available commerce limit
- Seller and SKU risk policy
- Affordability quote generation
- Checkout state orchestration
- Payment and lender adapters
- Order, loan, repayment, refund, and seller-settlement ledgers
- Experiment assignment and risk-adjusted analytics

### Intentionally Out Of Scope

- A broad Flipkart-like marketplace
- Inventory ownership, warehousing, or super.money delivery operations
- High-risk and high-return categories
- Long-tenor or open-ended shopping loans
- A complete underwriting model built from scratch
- Lender loan-management and collections-agent back offices
- Every seller connector and fulfilment integration

## 3. Shared Demo Objects

The prototype keeps a small set of objects consistent across the buyer and seller experience:

| Object | Prototype value | Why it matters |
|---|---|---|
| Buyer | Asha Mehta | Thin-file, first-job salaried user with frequent UPI activity |
| Available shopping limit | Rs. 12,000 | Makes eligibility visible before shopping starts |
| Primary SKU | Nova X1 5G | Practical, lower-ticket smartphone with manageable risk and clear financing value |
| Seller | ValueKart Retail | Approved seller whose catalogue is evaluated at SKU level |
| Purchase price | Rs. 8,997 | Fits the buyer limit and supports a clean three-payment schedule |
| Selected plan | Rs. 2,999 today + Rs. 2,999 x 2 | Makes cash-flow smoothing concrete and transparent |
| Lender | DMI Finance in the concept flow | Shows the LSP / regulated-lender relationship |
| Order ID | SM-28491 | Links buyer timeline, seller fulfilment, and settlement |
| Loan ID | DMI-60184 | Links the commerce order to the credit obligation |

## 4. Buyer Mobile Walkthrough

### Screen 1: UPI Home And Shopping Limit

Problem:

UPI is frequent, but frequency does not automatically create shopping intent. A generic commerce tab would compete with established ecommerce apps without a differentiated reason to enter.

Product decision:

Show Asha a pre-qualified Rs. 12,000 shopping limit on the existing payments home. The entry is based on eligibility, not a broad promotional blast.

What to point out:

- Commerce is embedded in the payments home.
- The amount available to spend is concrete.
- “Pre-approved” reduces uncertainty.
- “No joining fee” addresses a thin-file user’s fear of hidden credit cost.
- Existing payment actions remain available, preserving the identity of the app.

Measure:

- Eligible-user exposure
- Commerce entry CTR
- Eligible-user activation

Business effect:

Converts high-frequency payment users into qualified commerce demand without paying for an unrelated acquisition channel.

### Screen 2: Affordability-First Discovery

Problem:

A standard catalogue shows the same price to every user and allows eligibility failure to occur only after shopping intent has formed.

Product decision:

Rank only relevant, financeable products and show the amount due today on the product card.

What to point out:

- “Useful upgrades. One-third today” describes the cash-flow use case.
- Product cards lead with Rs. 2,999 today or Rs. 1,999 today.
- Cashback, delivery, and zero-fee repayment are visible before PDP entry.
- Categories are deliberately narrow: phones, home, audio, and work/study.

Measure:

- Product-card CTR
- Search-to-PDP conversion
- Affordability quote view rate
- Unfinanceable impression rate

Business effect:

Improves relevant discovery without subsidising every product or sending users into a dead-end checkout.

### Screen 3: Transparent Product And Credit Terms

Problem:

When credit terms appear only at the end, users experience surprise, abandon checkout, or accept an obligation they did not fully understand.

Product decision:

Make affordability the product. The PDP includes every approved option, payment dates, total fees, lender, KFS, delivery, and return rules.

What to point out:

- Pay in 3 is recommended but not forced.
- superCard EMI and full UPI remain alternatives.
- Rs. 0 fee and the full schedule are visible.
- The lender and Key Fact Statement are shown before checkout.
- Return and refund implications are discoverable.

Measure:

- Plan selection rate
- KFS open rate
- KFS acceptance rate
- PDP-to-checkout start

Business effect:

Raises informed conversion while reducing disputes, avoidable support, and regulatory risk.

### Screen 4: One Financed Checkout

Problem:

The customer sees one purchase, but payment, mandate, lender, and merchant systems can each succeed or fail separately.

Product decision:

Use one durable affordability quote and one reviewed confirmation to orchestrate down payment, AutoPay mandate, loan booking, and order placement.

What to point out:

- Delivery address and selected plan are reviewed together.
- All repayment dates and total payable are repeated before consent.
- AutoPay bank account and reminder promise are explicit.
- Consent to the KFS and loan terms is an active step.
- Full UPI remains a fallback.

Measure:

- Checkout completion
- Mandate success
- Down-payment success
- Loan-booking success
- Order-placement success
- Orphan-loan rate

Business effect:

Reduces cart abandonment and the operations cost of partially completed financed orders.

### Screen 5: Unified Order And Credit Confirmation

Problem:

Separating the merchant order from the lender obligation makes support and repayment confusing.

Product decision:

Show one timeline containing the order, loan, amount paid, seller fulfilment, and next repayment.

What to point out:

- Order ID and loan ID are both visible.
- The Rs. 2,999 down payment and Rs. 0 fees are confirmed.
- Seller shipment and next due date sit on the same timeline.
- “Track order & repayments” leads to one ongoing account view.

Measure:

- Support contacts per order
- Order / loan mismatch rate
- Timeline engagement
- On-time first repayment

Business effect:

Protects trust, lowers support cost, and improves first-payment performance.

### Screen 6: Repayment And Limit Growth

Problem:

A shopping-credit product is incomplete if repayment only becomes visible through collection reminders.

Product decision:

Bring available limit, utilisation, active plans, AutoPay, early repayment, and next limit review into the credit home.

What to point out:

- The product shows the obligation before it becomes overdue.
- Repayment dates and amounts are concrete.
- Good behaviour is connected to a possible higher limit.
- “Pay early” supports control without implying penalty.

Measure:

- AutoPay success
- 7+ DPD and 30+ DPD
- Early repayment
- Limit utilisation
- Repeat financed purchase

Business effect:

Creates the flywheel: responsible purchase → on-time repayment → higher trust / limit → repeat purchase.

## 5. Seller Web Portal Walkthrough

### Tab 1: Commerce Overview

Operating question:

Is financing creating incremental, contribution-positive sales?

What the portal connects:

- Financed GMV
- Checkout conversion
- AOV
- Per-order contribution
- Funnel drop-off
- Incrementality versus UPI-only checkout

Why it exists:

Raw GMV can hide seller funding, cashback, payment cost, fraud, expected credit loss, returns, and support cost. The dashboard anchors the business to contribution-positive financed GMV.

### Tab 2: Catalogue

Operating question:

Which products are useful, safe, and commercially viable to finance?

What the portal connects:

- Seller and SKU identity
- Financeability state
- Customer upfront plan
- Inventory
- Conversion
- Return rate
- Contribution per order

Why it exists:

Seller approval is too coarse for lending. Category, ticket size, margin, returns, fraud, fulfilment, and lender rules must be evaluated per SKU.

### Tab 3: Affordability

Operating question:

How much seller funding creates profitable conversion lift?

What the portal connects:

- Seller subvention
- Customer upfront percentage
- Forecast conversion
- Seller cost per completed order
- Net contribution after expected loss
- Budget caps and controlled test publishing

Why it exists:

Discounting can create non-incremental GMV and destroy contribution. The seller should fund the smallest offer that creates measurable lift.

### Tab 4: Orders

Operating question:

Can the seller fulfil a financed order without operating a lender workflow?

What the portal connects:

- Payment authorisation
- Loan booking
- Seller fulfilment
- Settlement eligibility
- Return and refund exceptions

Why it exists:

Merchant adoption falls if the seller must understand or reconcile each lending partner.

### Tab 5: Settlements

Operating question:

Can every fee, offer, return, reversal, and payout be reconciled?

What the portal connects:

- Gross order value
- Platform / payment fees
- Seller-funded offers
- Refund reversals
- Net payout
- Automatic match rate

Why it exists:

Transparent reconciliation is required for merchant trust and low-cost scaling.

### Tab 6: Growth And Risk

Operating question:

Is financed GMV repeatable after returns, incentives, and credit loss?

What the portal connects:

- Conversion
- AOV
- 90-day repeat
- 7+ and 30+ DPD
- AutoPay success
- Expected loss
- Contribution per order
- Category scale / fix decisions

Why it exists:

Commerce growth and lending risk cannot be managed in separate dashboards.

## 6. Suggested Five-Minute Video

### 0:00–0:30 — The Opportunity

“super.money already has UPI frequency, credit products, cashback, merchant checkout, and access to commerce supply. The opportunity is not to add a generic marketplace. It is to make affordability the discovery layer.”

Show the desktop presenter view with the mobile app beside the problem / decision / metric / business-effect rail.

### 0:30–1:15 — Activate And Discover

Open the buyer mobile home. Show the Rs. 12,000 limit, tap “Shop your limit,” and scan the affordability-first catalogue.

Say:

“Asha does not browse a catalogue and discover rejection at checkout. She starts with a responsible limit and products that fit it.”

### 1:15–2:10 — Product And Checkout

Open Nova X1 5G. Show Pay in 3, superCard EMI, full UPI, repayment dates, lender, KFS, and Rs. 0 fees. Continue to checkout, review AutoPay and consent, then confirm.

Say:

“The affordability quote is not a late payment widget. It is the product. The checkout coordinates payment, mandate, loan, and order while preserving a full-UPI fallback.”

### 2:10–2:40 — Unified Obligation

Show the success timeline and credit home.

Say:

“Asha sees one purchase: order, loan, delivery, and repayment. Responsible repayment is part of the commerce loop and can earn a higher future limit.”

### 2:40–3:30 — Seller Catalogue

Move to the seller portal. Show the overview and catalogue.

Say:

“Supply is approved per SKU. A safe ticket, strong fulfilment, low returns, enough margin, and lender support determine whether PayLater can be shown.”

### 3:30–4:20 — Offer Economics

Open Affordability. Move the subvention and upfront sliders.

Say:

“The seller does not simply create a discount. They fund the smallest affordability change that creates incremental conversion while keeping contribution positive.”

### 4:20–4:50 — Operations And Risk

Show orders, settlements, and analytics.

Say:

“The seller operates one order; super.money handles lending complexity. The business is measured after refunds, incentives, fraud, and expected loss.”

### 4:50–5:00 — Close

“The focused wedge is a credit-aware catalogue, a native financed checkout, and a merchant affordability OS. The North Star is contribution-positive financed GMV from repeat users.”

## 7. What Is Real Versus Simulated

Real in the prototype:

- Complete interactive navigation
- Product search and category filtering
- Product and plan selection
- KFS / consent interaction
- Checkout processing and success state
- Repayment and limit state
- Seller navigation, catalogue filters, and modal flows
- Dynamic offer-funding simulator
- Connected identifiers and commercial logic

Simulated:

- Underwriting and lender approval response
- Real KYC / bureau / bank data
- UPI payment, mandate, and loan-disbursal calls
- Seller inventory API
- Order fulfilment and refund webhooks
- Forecast model and campaign experiment results
- Settlements and cohort data

The purpose is to test product comprehension, user trust, seller usefulness, and the operating model before committing to production integrations.
