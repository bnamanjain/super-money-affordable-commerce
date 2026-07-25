# super.money Affordable Commerce Pitch

## Positioning

super.money should not build a generic marketplace inside a UPI app. The zero-to-one wedge should be:

**An affordability-first commerce layer where the catalogue is dynamically shaped by a user’s credit eligibility, seller economics, and repayment reliability.**

This fits the current super.money direction: high-frequency UPI, real cashback, secured credit through superCard, superCash loans, superPayLater, superDeposit, gift vouchers, super.money Breeze for merchant checkout, and SplitStore-style PayLater shopping.

The product thesis:

UPI gives frequency. Credit gives monetization. Commerce gives intent. The product opportunity is to convert payment frequency into high-intent, financed purchases without becoming a broad inventory-heavy marketplace.

## Narrow Scope

Start with 3 connected functions:

1. **Credit-Aware Affordable Catalogue**
2. **Native PayLater / EMI-on-UPI Checkout**
3. **Merchant Affordability OS**

Do not start with full marketplace breadth. Start with categories where financing changes conversion and repayment risk is manageable:

- Mobiles under Rs. 15,000 and refurbished devices
- Small appliances and kitchen essentials
- Work-from-home and education devices
- Personal care devices
- High-frequency gift vouchers for grocery, food, fuel, fashion

Avoid the first version in categories with high fraud, high return abuse, size/fit complexity, perishable fulfillment, or luxury discretionary behavior.

## Scope-To-Prototype Traceability

The prototype is not a collection of ecommerce screens. Every component exists to solve a specific commerce, credit, or seller-economics problem.

| Problem | Product component | Decision demonstrated in prototype | Primary metric | Business / P&L effect |
|---|---|---|---|---|
| UPI usage is frequent but has weak commerce intent | Pre-qualified shopping limit and commerce entry | Activate only eligible users with a clear amount they can responsibly spend | Commerce entry CTR, eligible-user activation | Converts payment frequency into qualified demand |
| A generic catalogue ignores cash-flow constraints | Affordability-ranked home and product cards | Show upfront amount and repayment plan before total price becomes the focus | PDP open rate, affordability quote view rate | Improves relevant discovery without blanket discounting |
| Users discover credit eligibility too late | Credit-aware product detail page | Expose approved plans, dates, lender, fees, KFS, delivery, and return terms before checkout | Plan selection, KFS acceptance | Reduces surprise abandonment and avoidable support |
| Payment, mandate, loan booking, and order placement can fail separately | Native financed checkout | Review one plan and use one confirmation to orchestrate all downstream systems | Mandate success, down-payment success, order success | Raises cart-to-order conversion and lowers failed-loan operations |
| Seller order and lender obligation feel disconnected | Unified post-purchase timeline | Present order, loan, shipment, dues, and refund adjustments in one customer view | Support contacts per order, on-time repayment | Protects trust, repayment quality, and repeat use |
| Responsible repayment is not part of the shopping loop | Credit and repayment home | Show active plans, AutoPay, early repayment, limit utilisation, and limit growth together | AutoPay success, 7+ DPD, repeat purchase | Creates the good-repayment-to-higher-limit flywheel |
| Seller approval alone does not make every product financeable | SKU-level catalogue eligibility | Evaluate category, price, margin, inventory, returns, fraud, and lender rules per SKU | Finance-eligible SKU rate, return rate | Prevents low-quality GMV and concentrates supply where economics work |
| Seller discounts can create GMV while destroying contribution | Affordability offer simulator | Trade off subvention, customer upfront amount, conversion lift, and contribution before launch | Incremental conversion, offer cost per order | Moves affordability funding toward measurable incrementality |
| Financed orders create reconciliation complexity | Shared orders and settlements views | Keep payment, loan, fulfilment, refund, fee, and payout states linked by order ID | Settlement match rate, dispute rate, settlement TAT | Contains merchant operations cost and builds seller trust |
| Raw GMV can hide returns, incentives, fraud, and credit loss | Risk-adjusted analytics | Compare cohorts on conversion, AOV, repeat, DPD, expected loss, and contribution | Contribution-positive financed GMV from repeat users | Prevents growth that becomes unprofitable after risk |

### Prototype Scope Contract

What the buyer mobile app demonstrates:

- Pre-qualified commerce entry inside a UPI app
- Affordability-first discovery across a deliberately narrow catalogue
- Product-level plan eligibility and transparent terms
- Pay in 3, superCard EMI, and full-UPI fallback
- Consent, KFS, AutoPay, down payment, loan-and-order confirmation
- Unified order and repayment timeline
- Responsible repayment and limit-growth loop

What the seller web portal demonstrates:

- SKU-level financeability and catalogue health
- Seller-funded affordability campaign design
- Conversion and contribution forecast before offer launch
- Financed order fulfilment without lender workflow exposure
- Fee, offer, refund, and settlement reconciliation
- Cohort analytics combining commerce growth and credit risk

What is intentionally not being prototyped:

- A broad open marketplace
- Inventory ownership or a super.money delivery network
- A complete underwriting model or lender loan-management system
- Collections-agent operations
- High-risk categories, long-tenor lending, or open-ended shopping loans
- A full merchant onboarding and KYB back office

These boundaries keep the proposal focused on the hardest differentiated question: **Can super.money use credit-aware discovery and seller-funded affordability to create repeat, contribution-positive commerce?**

## Why This Is A Fintech Lending Platform Problem

The core problem is not catalogue display. It is matching four constraints in real time:

- **User constraint:** how much credit can this user responsibly handle?
- **Product constraint:** is this SKU financeable given return rate, fraud rate, margin, category risk, and lender rules?
- **Seller constraint:** what subvention, discount, fulfillment SLA, return policy, and settlement terms make the order viable?
- **Lender constraint:** what tenor, APR, KFS, mandate, bureau reporting, and repayment schedule is compliant and profitable?

The catalogue should be the output of lending + risk + merchant economics, not a static shopping feed.

## Function 1: Credit-Aware Affordable Catalogue

### User Promise

“See products you can afford today, with exact upfront amount and repayment plan shown before checkout.”

### Product Design

Home entry points:

- PayLater Store tile after frequent UPI use
- “You can buy this for Rs. X today” nudges after salary credit, bill payment, or high-balance days
- Category rails: “1/3 upfront”, “Under Rs. 499 today”, “No-cost 3-pay”, “Credit score builder picks”
- Repeat-friendly voucher rail: grocery, food, mobility, medicine, fashion

Key UX principle:

Every product card should show affordability, not just price:

- Total price
- Amount due today
- EMI amount
- Tenor
- Cashback or seller-funded discount
- Eligibility confidence
- Return/refund impact on loan

### Persona

**Asha, 26, first-job salaried, Bengaluru**

- Uses UPI daily
- Wants a mixer, headphones, and work shoes
- Has thin credit history
- Avoids credit cards because she is unsure about fees
- Will convert if repayment is transparent and AutoPay is simple

### Product Mechanic

The catalogue is filtered by:

- User credit line / BNPL eligibility
- Product category allowed by lending partner
- SKU price band
- Return/fraud risk
- Seller SLA
- Subvention availability
- Down-payment requirement
- Repeat purchase propensity

### Success Metrics

- Catalogue impressions to PDP conversion
- PDP to checkout start
- Checkout start to loan acceptance
- Loan acceptance to order success
- Repeat financed purchase rate
- Delinquency by category, SKU, seller, and acquisition source

## Function 2: Native PayLater / EMI-on-UPI Checkout

### User Promise

“Pay safely with UPI-like speed, but split the amount with clear terms.”

### Checkout Flow

1. User selects SKU or voucher.
2. Eligibility service returns allowed plans:
   - Pay 1/3 now, 2 monthly repayments
   - EMI-on-UPI, where supported
   - Credit-card-on-UPI, where user has eligible RuPay credit
   - Full UPI payment fallback
3. Offer engine ranks the best plan by:
   - Lowest upfront amount
   - Lowest total cost
   - Highest approval probability
   - Seller-funded discount
4. User sees KFS / key charges / repayment schedule.
5. User authorizes down payment and repayment mandate.
6. Loan is booked with lending partner.
7. Order is placed with seller / Flipkart / merchant.
8. Repayment ledger and order ledger stay linked.

### Important Product Decisions

- Never show unaffordable products as “available” if the user will fail at checkout.
- Always provide full UPI fallback so commerce does not dead-end.
- Separate “order issue” from “loan issue” in support, but show one timeline to the user.
- Refunds should flow to lender first against outstanding principal, not to user cash balance.
- Mandate failures should trigger soft nudges before collections escalation.

### Lending / Risk Design

Inputs:

- UPI transaction frequency
- Cashback engagement
- Bank account linkage tenure
- Salary-like inflows
- Existing superCard / superDeposit / superCash behavior
- Device, SIM, KYC, location stability
- Order category and seller risk
- Return/cancellation history
- Failed payment and mandate history

Risk outputs:

- Eligible / ineligible
- Credit limit
- Product price cap
- Down-payment requirement
- Tenor
- Lender routing
- Risk pricing or subvention need
- Fraud review flag

### North Star

**Contribution-positive financed GMV from repeat users.**

Supporting metrics:

- Approval rate
- Conversion rate
- Average order value
- Repeat purchase rate
- 30+ DPD delinquency
- Net contribution per order
- Refund-adjusted GMV
- Seller repeat adoption

## Function 3: Merchant Affordability OS

### Seller Promise

“Increase conversion and AOV by showing super.money affordability to eligible users, without building your own lending stack.”

### Seller Side Features

Merchant portal:

- Onboarding and KYB
- Category approval
- Catalogue upload / feed mapping
- Inventory and price sync
- Offer and subvention setup
- Order, refund, and settlement dashboard
- Dispute and SLA tracking
- Conversion analytics by affordability plan

Merchant APIs:

- Catalogue ingestion
- SKU eligibility check
- Affordability quote
- Checkout session creation
- Order confirmation
- Refund / cancellation webhook
- Settlement reconciliation

White-label path:

- Use super.money Breeze on merchant site/app
- Show “Pay with super.money PayLater”
- Let super.money handle plan selection, lender routing, KFS, mandates, and repayment servicing

### Seller Economics

Seller-funded levers:

- No-cost EMI subvention
- Instant discount
- Cashback funding
- Tenor-specific offers
- Category-level promotional budgets

Why sellers adopt:

- Higher conversion
- Higher AOV
- Lower cart abandonment
- Access to super.money’s UPI-heavy user base
- No need to integrate multiple lenders directly

## P&L Model

### Revenue

- Merchant take rate or checkout technology fee
- Seller-funded subvention / promotional budget
- Lender commission or LSP service revenue where permitted
- Affiliate / marketplace referral revenue
- Payment revenue where applicable
- Repeat engagement value from UPI, card, deposit, and loan cross-sell

### Costs

- Cashback and promotional incentives
- Payment processing and mandate costs
- Customer support
- Fraud / abuse operations
- Tech infrastructure
- Refund and reconciliation operations
- Credit loss exposure if any FLDG / guarantee-like structure exists, subject to regulation

### Contribution Formula

Per-order contribution:

`merchant_fee + lender_revenue + seller_subvention + payment_revenue - cashback - payment_cost - support_cost - fraud_loss - credit_loss_share - refund_ops_cost`

### Example Business Case

Assumptions:

- Monthly UPI active users exposed: 5 million
- Commerce entry CTR: 8%
- PDP conversion from entry: 35%
- Checkout start from PDP: 30%
- Financed order completion: 45%
- AOV: Rs. 3,000
- Net revenue: 3.0% of GMV
- Variable cost: 1.7% of GMV

Outcome:

- Orders: about 18,900 per month
- Financed GMV: about Rs. 5.7 crore per month
- Net contribution: about 1.3% of GMV, or Rs. 7.4 lakh/month before fixed costs

This is not enough as a standalone business initially. The value is in learning which cohorts, SKUs, sellers, and credit constructs produce repeat contribution-positive GMV. Scale should follow repayment performance, not just GMV.

## System Design

### Core Services

- **User Profile Service:** identity, KYC, linked bank accounts, app tenure
- **Transaction Intelligence Service:** UPI frequency, income signals, repayment signals
- **Credit Eligibility Service:** user-level credit line and product-level eligibility
- **Catalogue Service:** SKU ingestion, normalization, eligibility tagging
- **Offer Engine:** plan ranking, subvention, cashback, APR, tenor
- **Checkout Orchestrator:** session state, down payment, lender flow, order placement
- **Loan Origination Adapter:** lender APIs, KFS, loan booking, mandate
- **Order Bridge:** seller / Flipkart / merchant order confirmation
- **Repayment Ledger:** EMI schedule, status, AutoPay, delinquency
- **Refund Reconciliation Service:** cancellation, partial refund, lender adjustment
- **Seller Platform:** onboarding, feeds, offers, settlements, analytics
- **Risk & Fraud Service:** device risk, seller risk, velocity checks
- **Experimentation Platform:** eligibility, ranking, copy, offers, checkout variants
- **Support Console:** unified order + loan timeline

### High-Level Flow

1. Seller uploads catalogue.
2. Catalogue service enriches SKUs with category, price, return, seller, and risk metadata.
3. Credit eligibility service computes user-level affordability.
4. Product listing API returns only eligible or near-eligible products with affordability labels.
5. Checkout orchestrator creates a payment + loan + order session.
6. Offer engine ranks PayLater, EMI-on-UPI, credit-on-UPI, and full UPI.
7. Loan adapter handles lender-side approval, KFS, and mandate.
8. Order bridge places order.
9. Repayment ledger tracks dues.
10. Refund service reconciles returns against loan outstanding.

## Schema Design

### users

- user_id
- phone_hash
- kyc_status
- app_signup_at
- upi_linked_bank_count
- primary_bank_id
- risk_segment
- created_at

### user_financial_signals

- signal_id
- user_id
- month
- upi_txn_count
- merchant_txn_count
- avg_monthly_inflow
- salary_confidence
- failed_payment_count
- cashback_earned
- cashback_redeemed
- super_card_status
- deposit_balance_band
- existing_loan_status

### credit_profiles

- credit_profile_id
- user_id
- lender_id
- approved_limit
- available_limit
- max_tenor_months
- min_down_payment_pct
- apr_band
- bureau_status
- dpd_bucket
- status
- updated_at

### sellers

- seller_id
- legal_name
- gstin
- kyb_status
- settlement_account_ref
- risk_tier
- return_rate_30d
- cancellation_rate_30d
- active_status

### products

- product_id
- seller_id
- external_sku_id
- title
- category_id
- brand
- price
- inventory_count
- return_policy_id
- fulfilment_sla_days
- risk_tier
- finance_allowed
- status

### product_finance_rules

- rule_id
- product_id
- lender_id
- min_price
- max_price
- allowed_tenors
- min_down_payment_pct
- seller_subvention_bps
- cashback_bps
- effective_from
- effective_to

### affordability_quotes

- quote_id
- user_id
- product_id
- lender_id
- plan_type
- principal_amount
- down_payment_amount
- emi_amount
- tenor_months
- apr
- processing_fee
- cashback_amount
- quote_status
- expires_at

### checkout_sessions

- checkout_session_id
- user_id
- product_id
- seller_id
- quote_id
- payment_mode
- session_status
- down_payment_txn_id
- loan_id
- order_id
- created_at
- updated_at

### loans

- loan_id
- user_id
- lender_id
- checkout_session_id
- principal
- apr
- tenor_months
- kfs_url
- mandate_id
- loan_status
- disbursed_at
- closed_at

### repayments

- repayment_id
- loan_id
- due_date
- amount_due
- amount_paid
- payment_txn_id
- status
- dpd

### orders

- order_id
- checkout_session_id
- seller_id
- external_order_id
- product_id
- order_amount
- order_status
- invoice_ref
- delivered_at
- return_window_end_at

### refunds

- refund_id
- order_id
- loan_id
- refund_amount
- refund_type
- lender_adjustment_amount
- user_refund_amount
- status
- processed_at

## API Design

### Consumer APIs

`GET /v1/commerce/home`

Returns personalized rails and eligible categories.

`GET /v1/products?category_id=&affordable_only=true`

Returns products with affordability labels.

`GET /v1/products/{product_id}/affordability`

Returns eligible payment plans for the user.

`POST /v1/checkout-sessions`

Creates checkout session for product + selected plan.

`POST /v1/checkout-sessions/{id}/confirm`

Confirms KFS, mandate, down payment, loan, and order placement.

`GET /v1/orders/{order_id}/timeline`

Returns unified order, loan, repayment, refund, and support state.

### Merchant APIs

`POST /v1/merchants`

Creates merchant onboarding record.

`POST /v1/catalogue/products:bulk_upsert`

Uploads or updates catalogue.

`POST /v1/affordability/quote`

Returns affordability offer for a merchant checkout.

`POST /v1/checkout/merchant-session`

Creates a super.money Breeze checkout session.

`POST /v1/orders/{order_id}/refund`

Initiates refund reconciliation.

`POST /v1/webhooks/order-status`

Merchant pushes order status.

`POST /v1/webhooks/inventory`

Merchant pushes inventory updates.

## Experimentation Plan

### Phase 0: Discovery

- Interview 15-20 value-conscious super.money users.
- Interview 8-10 sellers from mobile accessories, small appliances, and vouchers.
- Audit failed checkout and credit rejection reasons from existing PayLater / card / lending flows.

### Phase 1: Closed Beta

- 3 categories
- 20-50 sellers or Flipkart-sourced catalogue
- Eligible users only
- One BNPL plan
- UPI fallback

Success criteria:

- Checkout completion above 35%
- Refund-adjusted repeat purchase above 20% in 60 days
- 30+ DPD within lender-approved threshold
- Contribution loss per order decreasing week on week

### Phase 2: Credit-Aware Expansion

- Add EMI-on-UPI / credit-on-UPI where eligible.
- Add seller-funded no-cost EMI.
- Add merchant APIs for external sellers.
- Add repayment-aware catalogue ranking.

### Phase 3: Merchant OS

- Launch self-serve seller portal.
- Launch white-label affordability via Breeze.
- Launch seller analytics and offer budget controls.

## Explainer Video Structure

Length: 3 to 4 minutes.

### Scene 1: Hook

Visual:

UPI transactions happening daily: tea, grocery, commute, food, bills.

Voiceover:

“UPI apps have frequency, but frequency alone does not create deep monetization. The next leap is to convert daily trust into responsible, affordable commerce.”

### Scene 2: User Problem

Visual:

A user wants a Rs. 6,000 appliance but sees only full price on commerce apps.

Voiceover:

“For value-conscious users, the problem is not desire. It is timing. They can afford the product, but not always in one payment.”

### Scene 3: Product Idea

Visual:

super.money app showing “Rs. 999 today, Rs. 999 x 5 months” on product cards.

Voiceover:

“Affordable Commerce makes the catalogue credit-aware. Users see what they can responsibly buy today, with transparent repayment before checkout.”

### Scene 4: Checkout

Visual:

Plan selector: PayLater, EMI-on-UPI, credit-on-UPI, full UPI.

Voiceover:

“Checkout becomes a lending decisioning layer: lender eligibility, seller subvention, product risk, KFS disclosure, mandate, order, and repayment connected in one flow.”

### Scene 5: Seller Side

Visual:

Merchant dashboard showing conversion lift, AOV, subvention budget, SKU approvals.

Voiceover:

“For merchants, this is an affordability OS. They can fund offers, upload catalogue, integrate checkout APIs, and grow conversion without building lending rails.”

### Scene 6: Business Impact

Visual:

Flywheel: UPI frequency -> credit trust -> financed commerce -> repayment data -> better offers -> repeat purchases.

Voiceover:

“The business is not just GMV. It is contribution-positive financed GMV from repeat users, with credit performance and seller economics built into the product.”

### Scene 7: Close

Visual:

Three blocks: Credit-aware catalogue, native PayLater checkout, merchant affordability OS.

Voiceover:

“The focused wedge is simple: make affordability the discovery layer, checkout layer, and seller growth layer inside super.money.”

## Explainer Doc Narrative

Title:

**Building Affordable Commerce inside super.money**

Subtitle:

**A credit-aware commerce vertical for value-conscious India**

Structure:

1. Why this exists
2. Why now for super.money
3. Why this is not a generic marketplace
4. Target personas
5. Three-product wedge
6. User journey
7. Seller journey
8. Lending and risk architecture
9. System design
10. Schema and APIs
11. Metrics and P&L
12. 90-day MVP roadmap
13. Open risks and mitigations

## Leadership Email Draft

Subject: Product idea for super.money Commerce: credit-aware affordable shopping

Hi [Name],

I came across the PM Commerce role at super.money and spent time thinking through the product problem behind it.

My read is that the opportunity is not to add a generic shopping tab inside a UPI app. The sharper opportunity is to build an affordability-first commerce layer where discovery, checkout, catalogue eligibility, seller economics, and repayment are all connected.

I put together a short product note and video narrative around three focused bets:

1. A credit-aware affordable catalogue that shows users what they can responsibly buy today.
2. A native PayLater / EMI-on-UPI checkout flow that connects lender eligibility, KFS, mandate, order placement, repayment, and refunds.
3. A merchant affordability OS that lets sellers fund offers, upload catalogue, integrate checkout APIs, and grow conversion without building lending rails.

The core thesis is: UPI gives frequency, credit gives monetization, and commerce gives intent. The product should optimize for contribution-positive financed GMV from repeat users, not just top-line GMV.

I also built an interactive prototype showing both sides of the system: the buyer mobile journey and the seller affordability portal:

https://super-money-affordable-commerce.naman884186.chatgpt.site

The accompanying product note goes into the product design, personas, seller-side workflows, P&L model, system design, schema design, API design, risk controls, and MVP sequencing. I would value the chance to walk you through the decisions and hear where my assumptions differ from what the team is learning.

Best,
Naman

## Sources Used

- super.money Product Overview: https://super.money/product
- super.money Play Store listing: https://play.google.com/store/apps/details?id=money.super.payments
- super.money homepage: https://www.super.money/
- super.money SplitStore PayLater terms: https://super.money/splitstore
- super.money superPayLater page: https://www.super.money/superPayLater
- super.money Merchant Terms / Breeze checkout terms: https://super.money/merchant-terms
- TechCrunch on super.money launch: https://techcrunch.com/2024/06/26/flipkart-launches-payments-app-super-money-in-fintech-push/
- TechCrunch on Kotak811 partnership: https://techcrunch.com/2025/10/29/flipkarts-super-money-teams-up-with-kotak-bank-to-make-indias-free-upi-payments-pay/
