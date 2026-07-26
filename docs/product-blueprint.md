# Building Affordable Commerce inside super.money

## 0. Recalibrated Strategy Contract

The supplied super.money recording changes the starting point of this case.
Credit score, credit education, credit building, credit access, and Splitstore
already appear in the current product. This proposal therefore starts from:

```text
Payments -> Credit Health -> Credit Access -> Affordable Commerce
```

The strategic question is:

> How can super.money use an existing payments and credit relationship to build
> an affordability-first commerce business with repeat usage and positive
> contribution?

### 0.1 One launch cohort

The first cohort is existing high-frequency UPI users, primarily 21-35, who are
considering a practical Rs. 5,000-Rs. 30,000 purchase and satisfy the relevant
lender, affordability, product, and fraud policies.

This cohort contains:

- Credit-underserved users who qualify for a suitable short-tenor option
- Cash-flow-constrained users who prefer a smaller amount today
- Deal seekers who can pay in full and value a seller-funded offer

Credit is one affordability instrument. The product always preserves a
full-UPI path where the transaction itself is permitted.

### 0.2 Three category groups

The controlled launch catalogue contains 100-300 SKUs across:

1. Budget and refurbished smartphones
2. Small home appliances
3. Work/study devices and mobile/audio accessories

Fashion, travel, furniture, luxury goods, and high-return or operationally
complex categories remain outside the first release.

### 0.3 Three product bets

1. **Affordability-first discovery:** budget rails and user-SKU quotes before
   checkout.
2. **Bag-to-checkout optimisation:** responsible bundles, remaining limit,
   total repayment, KFS, consent, and one orchestrated confirmation.
3. **Merchant Affordability OS:** onboarding, catalogue, offer funding, orders,
   settlement, analytics, Splitstore distribution, and white-label APIs.

Credit Health remains a complete borrower module under
`Profile -> Credit centre -> My credit score`. It manages bureau consent,
freshness, score factors, actions, delays, and corrections. It does not determine
or guarantee an offer by itself.

### 0.4 One success model

**Product North Star:** Monthly repeat Affordable Commerce buyers.

**Business scale gate:** Cohort contribution remains positive after returns,
incentives, payment costs, servicing, fraud, and the platform's expected
credit-loss exposure.

The canonical funnel is:

```text
Targeted exposure -> Splitstore visit -> PDP -> bag -> checkout
-> offer selected -> completed order -> 30/60/90-day repeat
```

The canonical illustrative scale case is:

| Input | Monthly value |
|---|---:|
| Targeted eligible exposures | 1,500,000 |
| Splitstore visits | 180,000 |
| Product-detail sessions | 54,000 |
| Bags created | 18,900 |
| Checkout starts | 14,553 |
| Offers selected | 12,141 |
| Completed orders | 10,800 |
| AOV | Rs. 7,700 |
| Monthly GMV | Approximately Rs. 8.3 Cr |
| Annualised GMV | Approximately Rs. 100 Cr |
| Contribution/order before fixed cost | Approximately Rs. 70 |

All values are planning assumptions rather than a company forecast.

## 1. What Are We Building?

We are building an **Affordable Commerce vertical inside super.money**.

This is not a normal marketplace where users browse thousands of products and pay normally. It is a fintech-led commerce product where a user discovers products through the lens of affordability:

- What can I buy today?
- How much do I need to pay upfront?
- What will I repay later?
- Is this loan / PayLater plan approved for me?
- Is the seller and product eligible for financing?
- What happens if I cancel, return, miss payment, or repay early?

The product sits at the intersection of:

- UPI payments
- BNPL / PayLater
- EMI-on-UPI
- Credit-card-on-UPI
- Merchant checkout
- Seller catalogue and offer management
- Lending partner integrations
- Risk, fraud, repayment, and collections

The simplest product statement:

**super.money Affordable Commerce helps value-conscious users buy useful products with transparent short-term credit, while helping sellers increase conversion and AOV through embedded affordability.**

## 2. Why This Makes Sense For super.money

super.money already has the ingredients:

- A high-frequency UPI app
- Cashback-led engagement
- superCard for credit on UPI and credit-building
- superPayLater for splitting purchases
- superCash for personal loans through lending partners
- superDeposit and secured credit products
- Gift voucher purchase flows
- Merchant terms and super.money Breeze checkout capability
- Flipkart ecosystem proximity

The commerce PM role is about creating a zero-to-one Affordable Commerce business. The important point is that this should not be treated as “add shopping to payments.” The stronger product direction is:

**Use payments frequency and financial data to make commerce affordability personalized, responsible, and commercially viable.**

UPI brings daily habit. Credit brings monetization. Commerce brings intent. The job is to connect them without creating uncontrolled credit risk or low-quality GMV.

## 3. Strategic Thesis

Most commerce apps show users the same price.

Affordable Commerce should show different users different **affordability paths**, depending on their credit profile, product category, seller economics, and repayment behavior.

For example:

- User A sees “Pay Rs. 999 today + Rs. 999 x 2”
- User B sees “Pay Rs. 2,499 today + Rs. 1,250 x 2”
- User C sees “Full UPI only”
- User D sees “Use superCard on UPI and get cashback”

This makes the catalogue dynamic. The product card is not just a shopping card. It is an affordability quote.

The winning insight:

**The catalogue should be generated by credit eligibility, product risk, and seller economics, not just merchandising.**

## 4. What We Should Not Build First

We should not start by building:

- A broad Flipkart-like marketplace
- A full seller marketplace with every category
- Social commerce
- Open-ended personal loans for shopping
- High-ticket lending across risky categories
- A complex loyalty store with unclear economics
- Inventory ownership
- Delivery operations owned by super.money

The first version should be narrow, controlled, and measurable.

The first goal is not massive GMV. The first goal is to learn:

- Which users convert responsibly?
- Which products create repeat purchases?
- Which sellers can fund affordability?
- Which credit plans repay well?
- Which categories have low return and fraud risk?
- Which flows generate positive contribution?

## 5. Product Wedge

The initial product should have three tightly connected parts:

1. **Credit-Aware Affordable Catalogue**
2. **Native PayLater / EMI-on-UPI Checkout**
3. **Merchant Affordability OS**

These are connected. The catalogue drives discovery, checkout converts intent into financed orders, and merchant tools create supply and seller-funded economics.

## 5A. Scope-To-Prototype Traceability

This section is the contract between the product thesis, the prototype, and the business case. A screen or control belongs in the MVP only when it closes a specific problem loop and has a measurable consequence.

### Traceability Matrix

| Problem being solved | Component being built | What the prototype demonstrates | System responsibility behind it | Primary metric | P&L or risk consequence |
|---|---|---|---|---|---|
| UPI frequency does not automatically create shopping intent | Pre-qualified commerce entry | Asha sees a Rs. 12,000 shopping limit and enters commerce from the payment home | Eligibility service exposes a safe commerce limit and allowed products | Commerce entry CTR, eligible-user activation | Creates qualified demand without paying acquisition cost for every user |
| Standard catalogues optimise for clicks and price, not ability to pay | Affordability-first home and listing | Rails are organised around “you can buy today,” upfront amount, and approved plans | Catalogue service joins SKU data with an affordability quote and ranking score | Product-card CTR, PDP open rate, quote-view rate | Increases relevant discovery while limiting unfinanceable impressions |
| A product can be acceptable for one user and unsafe for another | User-and-SKU eligibility | The same catalogue can expose PayLater, superCard EMI, or full UPI depending on user and SKU rules | Credit eligibility, lender routing, product risk, and seller rules produce allowed plans | Approval rate by user, seller, category, and SKU | Controls adverse selection, fraud, and loss concentration |
| Hidden credit terms create surprise and abandonment | Transparent product detail | The PDP shows upfront amount, every repayment date, total payable, fees, lender, KFS, return rule, and UPI fallback | Affordability quote is durable and versioned until checkout expiry | Plan selection rate, KFS open and acceptance rate | Improves informed conversion and reduces disputes and support contacts |
| Generic cross-sell can increase AOV by overextending the buyer | Repayment-aware bag | The bag shows remaining limit and one eligible add-on with the exact repayment delta | Quote service reprices the whole bag and revalidates every SKU | PDP-to-bag, attach rate, bag-to-checkout | Raises contribution-positive AOV with a repayment guardrail |
| Payment, mandate, loan booking, and order placement fail independently | Checkout orchestrator | One reviewed plan and one confirmation coordinate down payment, AutoPay, loan, and order | Checkout state machine, idempotency, lender adapter, payment service, order bridge | Mandate success, down-payment success, loan-booking success, order success | Reduces cart abandonment, orphan loans, and manual reconciliation |
| The customer experiences one purchase, but internal systems create two obligations | Unified post-purchase timeline | One confirmation shows order ID, loan ID, fulfilment state, amount paid, and next due date | Order, loan, repayment, refund, and support events are joined into one read model | Support contacts per order, timeline view rate | Protects trust and lowers support cost |
| Refunds can leave a customer with the wrong outstanding balance | Refund-to-loan reconciliation | The experience explains that returns adjust outstanding principal and future dues | Refund service applies full or partial reversals to order, lender, and seller ledgers | Refund adjustment TAT, mismatch rate, disputes | Prevents financial harm, complaints, and unreconciled credit exposure |
| Credit risk is created after checkout but often managed only by collections | Repayment and limit-growth loop | Credit home shows active plans, AutoPay, early payment, due dates, utilisation, and the next limit review | Repayment ledger and behavioural policy convert good repayment into future eligibility | AutoPay success, 7+ DPD, early repayment, repeat rate | Lowers delinquency and compounds responsible repeat GMV |
| Seller-level approval is too coarse for catalogue lending | SKU financeability | Portal shows PayLater eligibility, upfront plan, inventory, conversion, return rate, and contribution per SKU | Product risk and finance rules evaluate category, ticket, margin, returns, fraud, seller SLA, and lender support | Finance-eligible SKU rate, return rate, SKU contribution | Prevents low-quality financed supply and improves approval economics |
| Seller promotions can buy GMV without proving incrementality | Affordability offer simulator | Seller adjusts funding and upfront percentage and sees forecast conversion, cost, and contribution | Offer engine, budget service, experiment assignment, and holdout measurement | Incremental conversion, offer cost per order, budget utilisation | Allocates seller funding to profitable lift rather than subsidised baseline demand |
| Sellers should not operate lender workflows | Unified financed order operations | Seller fulfils a normal order after super.money has authorised payment and booked credit | Order bridge hides lender complexity while preserving state and audit links | Fulfilment SLA, cancellation rate, order exception rate | Improves merchant adoption and contains account-management cost |
| Offers, refunds, fees, and payouts create settlement disputes | Settlement reconciliation | Portal explains gross value, fees, offer funding, reversals, net payout, and match rate | Seller settlement ledger joins order and refund events with commercial terms | Auto-match rate, settlement TAT, dispute rate | Builds merchant trust and lowers finance-operations load |
| A score without freshness, explanation, or correction gives little control | Credit Health management | Consent, source, dated score, factors, action plan, delay fallback, and tracked correction | Bureau adapter, score snapshot, explanation, action, and case services | Retrieval, comprehension, action start, correction outcome | Builds trust without forcing an application |
| Merchant supply is limited to the in-app store | Shared channel and merchant API | Portal shows Splitstore plus signed external merchant sessions and webhooks | Partner BFF reuses catalogue, eligibility, offer, checkout, refund, and settlement contracts | Merchant time-to-live, external checkout conversion | Extends affordability distribution without duplicating lender integrations |
| GMV can hide return abuse, incentives, fraud, and credit loss | Risk-adjusted commerce analytics | Cohorts are compared on conversion, AOV, repeat, DPD, expected loss, and net contribution | Analytics model joins commerce, credit, seller, experiment, and cost data | Monthly repeat buyers, contribution/order | Prevents growth that is negative after risk and incentives |

### Product Surfaces In Scope

Buyer mobile app:

1. UPI home entry with a pre-qualified shopping limit
2. Affordability-first catalogue and search
3. Product detail with approved financing options
4. Repayment-aware bag with one responsible bundle
5. Pay in 3, superCard EMI, and full-UPI fallback
6. Address, plan, KFS, consent, AutoPay, and order confirmation
7. Unified order and credit timeline
8. Credit home for repayment, limit utilisation, and limit growth
9. Credit Health score, factors, actions, delay, and correction states

Seller web portal:

1. Business dashboard based on risk-adjusted financed GMV
2. SKU catalogue with financeability and quality states
3. Affordability campaign simulator and controlled publishing
4. Financed order fulfilment
5. Settlement and refund reconciliation
6. Cohort analytics across conversion, repeat, returns, delinquency, and contribution
7. Merchant onboarding readiness and channel controls
8. White-label checkout APIs and signed webhook health

Platform responsibilities represented in the prototype:

1. Identity, KYC, and consent context
2. User credit profile and available limit
3. Product and seller risk rules
4. Affordability quote generation
5. Checkout orchestration and idempotency
6. Lender and payment adapters
7. Order, loan, repayment, refund, and settlement ledgers
8. Experiment assignment and risk-adjusted analytics

### Intentionally Out Of Scope For The First Release

- A broad open marketplace or social-commerce feed
- Inventory ownership, warehousing, or delivery operations owned by super.money
- High-ticket or long-tenor open-ended shopping loans
- High-return, luxury, restricted, or operationally complex categories
- A new underwriting model built from scratch; the MVP integrates lender policy and super.money eligibility signals
- Full lender loan-management or collections-agent tooling
- Every merchant connector; start with controlled catalogue API / feed integration

### The Single Question This Scope Must Answer

**Can super.money turn its existing payments and credit relationship into repeat
Affordable Commerce usage while seller funding, SKU controls, and the complete
variable-cost stack remain contribution-positive?**

If a component does not help answer this question, it does not belong in the
six-month controlled launch.

## 6. Target Users

### Persona 1: Asha, First-Job Salaried User

Profile:

- 26 years old
- Lives in Bengaluru
- Monthly income: Rs. 35,000
- Uses UPI 20-40 times a month
- Has limited credit history
- Wants to buy useful products but avoids large upfront spends

Needs:

- Transparent repayment
- Low upfront payment
- No hidden fees
- Reminders before repayment
- Trust that returns and refunds will be handled correctly

Example purchase:

- Rs. 5,999 mixer grinder
- Pays Rs. 1,999 today
- Repays Rs. 2,000 for next two months

Why she uses super.money:

- She already uses the app for UPI
- She trusts cashback
- She sees the exact repayment plan before checkout
- She does not need a traditional credit card

### Persona 2: Rafiq, Gig Worker / Variable Income User

Profile:

- 31 years old
- Delivery partner / freelancer
- Income varies weekly
- Uses UPI constantly
- May not have stable bureau history

Needs:

- Smaller ticket purchases
- Short repayment cycles
- Flexible due reminders
- Clear consequences of missed payments
- No confusing APR-heavy experience

Example purchase:

- Rs. 2,499 phone accessory bundle
- Pays Rs. 849 today
- Repays Rs. 825 x 2

Risk note:

This persona should initially receive smaller limits and higher down-payment requirements until repayment behavior is proven.

### Persona 3: Priya, Full-UPI Deal Seeker

Profile:

- 34 years old
- Manages household purchases
- Can pay the full price from her bank account
- Looks for reliable products and seller-funded savings

Needs:

- Small-appliance and work/study offers
- Clear comparison between full UPI and financing
- No unnecessary credit application
- Reliable delivery and replacement

Example purchase:

- Rs. 5,997 mixer grinder
- Pays in full with UPI and receives a seller-funded discount

Why she converts:

- Splitstore still provides value without requiring credit
- The offer is practical and transparent

### Persona 4: Seller / Merchant

Profile:

- Sells mobile accessories, appliances, work/study products, or refurbished phones
- Struggles with conversion and cart abandonment
- Can fund offers if conversion lift is measurable

Needs:

- Easy onboarding
- Catalogue upload
- Eligibility for financing
- Affordability offer setup
- Settlement and refund reconciliation
- Analytics by plan, category, and SKU

Why seller adopts:

- Higher conversion
- Higher AOV
- Access to super.money users
- No need to build lending integrations

## 7. Initial Category Scope

Start with categories where financing can improve conversion and risk can be controlled.

### Good MVP Categories

1. Refurbished and budget smartphones
2. Small home and kitchen appliances
3. Education and work-from-home devices
4. Mobile and audio accessories used as bundles or repeat products

### Why These Categories

- Useful and practical
- Lower average ticket than luxury goods
- Clear consumer need
- Financing can unlock conversion
- Seller-funded discounts are possible
- Accessories provide a controlled bundle and repeat-purchase use case

### Avoid Initially

- Jewelry
- Luxury fashion
- Gaming consoles
- Alcohol / restricted goods
- High-return size-sensitive fashion
- Perishables
- Travel bookings
- Gift vouchers during the financed-commerce pilot
- Crypto / financial instruments
- Any prohibited or regulatory-sensitive category

## 8. User Product Experience

### Entry Points

The user should not feel like they entered a separate shopping app. Entry points should come naturally from payments behavior:

- Home tile: “Shop with PayLater”
- Post-payment nudge: “You may be eligible for Rs. 5,000 PayLater shopping limit”
- Cashback redemption: “Use cashback as discount on eligible vouchers”
- Spend insight nudge: “Split your appliance purchase instead of using cash balance”
- Credit tab: “Shop with your approved limit”
- Flipkart / merchant checkout entry via super.money Breeze

### Home Page For Affordable Commerce

The commerce page should be organized around affordability, not generic categories.

Example rails:

- “You can buy today”
- “Pay 1/3 now”
- “Under Rs. 499 upfront”
- “No-cost PayLater”
- “Great for credit building”
- “Useful home upgrades”
- “Grocery and food vouchers”
- “Recommended from your spends”

Every product card should show:

- Product title
- Seller / brand
- Total price
- Upfront amount
- EMI / PayLater amount
- Tenor
- Cashback or discount
- Delivery estimate
- Return eligibility
- Financing eligibility state

Bad card:

“Mixer Grinder - Rs. 5,999”

Good card:

“Mixer Grinder - Rs. 1,999 today + Rs. 2,000 x 2 months”

### Product Detail Page

The PDP should include:

- Product images
- Product price
- Seller
- Delivery estimate
- Return policy
- Available affordability plans
- Full repayment schedule
- Charges and fees
- Cashback / discount
- Refund impact
- Lender name
- KFS link before acceptance

The key UI principle:

Do not hide credit terms until the end. Affordability is the product.

### Checkout Flow

Step-by-step:

1. User selects product.
2. super.money fetches affordability quote.
3. User chooses plan:
   - PayLater
   - EMI-on-UPI
   - Credit-card-on-UPI
   - Full UPI
4. User sees:
   - Amount due today
   - EMI dates
   - Total payable
   - Lender
   - KFS
   - Fees / charges
5. User confirms.
6. Down payment is collected if required.
7. Mandate is created for repayment.
8. Loan is booked with lending partner.
9. Order is placed with seller / marketplace.
10. User sees unified success screen:
   - Order ID
   - Loan ID
   - Repayment schedule
   - Support entry point

### Post-Purchase

User should see one combined timeline:

- Order placed
- Loan activated
- Down payment paid
- Product shipped
- Product delivered
- EMI due date
- EMI paid
- Return / refund status if applicable

The app should not make the user understand internal complexity between seller, lender, and super.money.

## 9. Seller Product Experience

### Seller Onboarding

Seller provides:

- Legal name
- GSTIN
- PAN
- Bank account
- Address
- Product categories
- Return policy
- Fulfillment SLA
- Catalogue feed method
- Authorized signatory
- Consent to merchant terms

System checks:

- KYB verification
- Category approval
- Prohibited product screening
- Risk tier assignment
- Settlement account validation

Seller states:

- Pending verification
- Approved
- Category restricted
- Suspended
- Rejected

### Catalogue Management

Seller can:

- Upload products manually
- Upload CSV
- Use catalogue API
- Sync with Shopify / custom platform later
- Map external SKUs
- Add inventory
- Add pricing
- Add images
- Add return policy
- Add shipping SLA

super.money evaluates each SKU:

- Is category allowed?
- Is price within lending limits?
- Is seller eligible?
- Is return rate acceptable?
- Is margin/subvention enough?
- Is SKU high fraud risk?
- Is product financeable by lending partner?

SKU states:

- Live
- Live but full UPI only
- PayLater eligible
- EMI eligible
- Rejected
- Needs review

### Seller Offers

Seller can create:

- No-cost PayLater
- Instant discount
- Cashback boost
- Tenor-specific subvention
- Category-level offer
- SKU-level offer

Offer inputs:

- Budget
- Start date
- End date
- Category
- SKU
- Maximum discount
- Eligible user segment
- Funding share

### Seller Analytics

Seller dashboard should show:

- Product impressions
- PDP views
- Checkout starts
- Approved users
- Rejected users
- Orders
- GMV
- AOV
- Conversion by plan
- Return rate
- Cancellation rate
- Settlement status
- Offer spend
- Incremental conversion from affordability

The seller should see a simple answer:

“Did funding affordability improve my business?”

## 10. Lending Product Design

### Credit Products Supported

Version 1:

- Pay 1/3 upfront and 2 monthly repayments
- Full UPI fallback

Version 2:

- EMI-on-UPI where supported
- Credit-card-on-UPI for eligible RuPay credit users
- Seller-funded no-cost EMI

Version 3:

- Personalized tenors
- Higher-ticket category-specific EMI
- Merchant site white-label financing via super.money Breeze

### Eligibility Decisioning

Eligibility should be determined at two levels:

1. User eligibility
2. Product eligibility

User eligibility answers:

- Can this user access PayLater?
- What is the available limit?
- What tenor can they receive?
- What down payment is required?
- Which lender should serve the user?
- Should the user see only full UPI?

Product eligibility answers:

- Can this product be financed?
- Which lender allows this category?
- Is the price in range?
- Is seller risk acceptable?
- Is refund risk acceptable?
- Is subvention required?

### Credit Inputs

Potential signals:

- UPI transaction frequency
- Merchant transaction count
- Bank account linkage tenure
- Salary-like inflows
- Average monthly balance proxy if available
- Failed UPI transactions
- Cashback earning / redemption behavior
- superCard usage
- superDeposit balance band
- superCash repayment behavior
- Existing PayLater repayment
- Device stability
- SIM stability
- KYC completion
- Address stability
- Location mismatch
- Order cancellation history
- Return abuse history
- Fraud flags

### Risk Outputs

The risk engine should return:

- Eligibility status
- Approved amount
- Available limit
- Required down payment
- Allowed tenor
- Allowed categories
- Lender routing
- Risk tier
- Manual review flag
- Decline reason category

Decline reasons should be user-safe:

- “This product is not eligible for PayLater”
- “Your PayLater limit is currently lower than this order”
- “Try paying a higher amount upfront”
- “PayLater is unavailable for this seller”
- “Use full UPI payment”

Do not expose sensitive model logic.

## 11. Refund, Return, And Cancellation Design

This is critical because commerce lending breaks if refunds are mishandled.

### Cancellation Before Loan Disbursal

If user cancels before loan booking:

- Cancel checkout session
- Release limit hold
- Refund down payment if collected
- No repayment schedule created

### Cancellation After Loan Booking But Before Shipment

Flow:

- Seller confirms cancellation
- Refund amount is sent to lender / adjusted against loan
- Loan is closed or reduced
- Down payment is refunded to user if applicable
- User timeline shows both order cancellation and loan closure

### Return After Delivery

Flow:

- User requests return
- Seller approves return
- Product is picked up / verified
- Refund is initiated
- Outstanding loan principal is adjusted first
- Any extra amount goes to user
- Repayment schedule is updated

### Partial Refund

Example:

- Order amount: Rs. 6,000
- Down payment: Rs. 2,000
- Loan: Rs. 4,000
- Partial refund: Rs. 1,000

Treatment:

- Rs. 1,000 reduces outstanding principal
- EMI schedule recalculated or final EMI reduced
- User sees revised schedule

### Key UX Rule

Never make users chase seller and lender separately. Show one status:

“Refund received from seller. Rs. 1,000 adjusted against your PayLater balance.”

## 12. Collections And Repayment Experience

Repayment should feel like a financial control product, not a penalty product.

### Repayment UX

Show:

- Upcoming EMI
- Due date
- Amount
- Autopay status
- Linked bank
- Option to pay early
- Option to change repayment account where permitted
- Repayment history

### Reminder Cadence

- T-5 days: soft reminder
- T-2 days: confirm bank balance / autopay
- Due date morning: payment reminder
- Due date evening: failed mandate retry if needed
- D+1: missed payment explanation and retry
- D+3 onward: collections journey based on lender policy

### Good User Behavior Loop

After successful repayments:

- Increase limit gradually
- Unlock more categories
- Reduce down payment requirement
- Offer better seller-funded plans
- Encourage credit score building

## 13. Business Model

### Revenue Streams

1. Merchant fee / take rate
2. Seller-funded subvention
3. Seller-funded cashback
4. Lender commission / LSP revenue where permitted
5. Payment revenue where applicable
6. Affiliate / marketplace referral revenue
7. Cross-sell lift into superCard, superCash, superDeposit

### Cost Streams

1. Cashback funded by super.money
2. Payment processing costs
3. Mandate setup / debit costs
4. Customer support
5. Refund reconciliation operations
6. Fraud operations
7. Credit loss share if any risk-sharing structure exists, subject to regulation
8. Engineering and infrastructure
9. Seller onboarding and account management

### Per Order Contribution

Formula:

`Contribution = merchant_fee + lender_revenue + seller_subvention + payment_revenue - cashback_cost - payment_cost - support_cost - fraud_loss - credit_loss_share - refund_ops_cost`

### Example Economics

Use one illustrative Rs. 7,700 order throughout the case:

| Line | Rs./order | % of AOV |
|---|---:|---:|
| Merchant/take revenue | 139 | 1.80% |
| Lender/affordability service revenue | 92 | 1.20% |
| Payment/affiliate revenue | 15 | 0.20% |
| **Gross variable revenue** | **246** | **3.20%** |
| Rewards and funded-offer share | -55 | -0.71% |
| Payment and mandate cost | -10 | -0.13% |
| Servicing and support | -18 | -0.23% |
| Fraud and refund operations | -20 | -0.26% |
| Platform risk/expected-loss exposure | -65 | -0.84% |
| Infrastructure and communications | -8 | -0.10% |
| **Contribution before fixed cost** | **70** | **0.91%** |

At 10,800 monthly orders this represents approximately Rs. 8.3 Cr monthly GMV
and Rs. 7.6 L monthly contribution before fixed cost. Actual economics depend on
merchant and lender contracts, tax, category mix, and regulated risk-sharing
boundaries.

### North Star Metric

**Monthly repeat Affordable Commerce buyers.**

This measures whether users develop a commerce habit rather than complete one
subsidised transaction.

The business scale gate is:

**Cohort contribution remains positive after refunds, incentives, payment cost,
servicing, fraud, and the platform's expected credit-loss exposure.**

Plain GMV remains an output metric because it can hide credit losses, refunds,
and incentives.

## 14. Metrics

### Acquisition Metrics

- Commerce entry CTR
- Eligible users exposed
- New users entering commerce
- Source of entry: home, payment success, credit tab, cashback, merchant checkout

### Discovery Metrics

- Product impressions
- PDP open rate
- Affordability quote view rate
- Category click-through
- Search-to-PDP conversion

### Checkout Metrics

- PDP-to-bag conversion
- Bag attach rate
- Bag-to-checkout completion
- Checkout start rate
- Loan approval rate
- KFS acceptance rate
- Mandate success rate
- Down payment success rate
- Order placement success rate
- Cart-to-checkout completion

### Commerce Metrics

- Orders
- GMV
- Refund-adjusted GMV
- AOV
- Repeat purchase rate
- Category mix
- Seller mix
- Return rate
- Cancellation rate

### Credit Metrics

- 7+ DPD
- 30+ DPD
- Roll-forward rate
- AutoPay success rate
- Early repayment rate
- Limit utilization
- Repayment by cohort
- Delinquency by category / seller / SKU

### Seller Metrics

- Active sellers
- Live SKUs
- Finance-eligible SKUs
- Seller-funded offer budget
- Seller repeat usage
- Conversion lift with affordability
- Settlement TAT
- Refund dispute rate

### P&L Metrics

- Net revenue per order
- Contribution per order
- CAC if paid acquisition is used
- Cashback per order
- Support cost per order
- Loss rate
- Contribution by category
- Contribution by credit segment

## 15. System Design

### Major Components

1. **Consumer App**
   - Commerce home
   - Product listing
   - Product detail
   - Checkout
   - Repayment ledger
   - Support timeline

2. **Seller Portal**
   - Onboarding
   - Catalogue upload
   - Offer management
   - Orders
   - Refunds
   - Analytics

3. **Catalogue Service**
   - Product ingestion
   - SKU normalization
   - Category mapping
   - Inventory status
   - Seller mapping
   - Finance eligibility tagging

4. **Credit Eligibility Service**
   - User credit profile
   - Lender rules
   - Limit availability
   - Down-payment requirement
   - Tenor eligibility
   - Category restrictions

5. **Offer Engine**
   - Seller subvention
   - Cashback
   - APR
   - EMI amount
   - Upfront amount
   - Plan ranking

6. **Checkout Orchestrator**
   - Checkout session
   - Quote validation
   - Down payment
   - KFS acceptance
   - Mandate
   - Loan booking
   - Order placement

7. **Lender Adapter Layer**
   - Lender eligibility API
   - KFS generation / retrieval
   - Loan booking
   - Loan status
   - Mandate status
   - Repayment status

8. **Payment Service**
   - UPI collect / intent
   - Credit-on-UPI
   - Down payment
   - Repayment payments
   - Refund routing

9. **Order Bridge**
   - Seller order placement
   - Flipkart / merchant order mapping
   - Shipment status
   - Delivery status
   - Cancellation status

10. **Refund Reconciliation Service**
    - Refund event ingestion
    - Lender adjustment
    - User refund calculation
    - Loan schedule update
    - Dispute handling

11. **Repayment Ledger**
    - EMI schedule
    - Due status
    - Paid status
    - DPD calculation
    - Closure

12. **Risk & Fraud Service**
    - Device risk
    - User velocity
    - Seller risk
    - Product risk
    - Return abuse
    - Synthetic identity checks

13. **Experimentation Platform**
    - A/B test assignment
    - Offer ranking tests
    - Checkout copy tests
    - Category expansion tests

14. **Support Console**
    - Order status
    - Loan status
    - Payment status
    - Refund status
    - Seller notes
    - Lender notes

## 16. System Flow

### Catalogue Ingestion Flow

1. Seller uploads SKU.
2. Catalogue service validates fields.
3. Category service maps SKU to approved category.
4. Risk service scores SKU and seller.
5. Finance rules engine checks lender/category limits.
6. SKU becomes:
   - PayLater eligible
   - UPI only
   - Needs review
   - Rejected

### User Discovery Flow

1. User opens commerce tab.
2. User profile and credit profile are fetched.
3. Catalogue service requests eligible products.
4. Offer engine creates affordability labels.
5. App displays product rails.

### Checkout Flow

1. User selects plan.
2. Checkout session is created.
3. Quote is revalidated.
4. KFS is shown.
5. User accepts loan terms.
6. Down payment is collected.
7. Mandate is created.
8. Lender books loan.
9. Order bridge places order.
10. Success screen is shown.

### Refund Flow

1. Seller triggers refund.
2. Refund service validates order and loan.
3. Refund amount is routed to lender first.
4. Loan outstanding is reduced or closed.
5. Any excess is refunded to user.
6. Timeline and repayment schedule update.

## 17. Schema Design

### users

Purpose: stores base user identity and app relationship.

Fields:

- user_id
- phone_hash
- kyc_status
- signup_at
- primary_bank_ref
- upi_status
- risk_segment
- app_status

### user_financial_signals

Purpose: stores monthly financial behavior signals.

Fields:

- signal_id
- user_id
- month
- upi_txn_count
- merchant_upi_txn_count
- p2p_txn_count
- avg_ticket_size
- salary_inflow_confidence
- avg_monthly_inflow
- failed_payment_count
- cashback_earned
- cashback_redeemed
- super_card_status
- super_deposit_balance_band
- super_cash_status

### credit_profiles

Purpose: lender-level credit profile.

Fields:

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

Purpose: merchant master.

Fields:

- seller_id
- legal_name
- display_name
- gstin
- pan_hash
- kyb_status
- settlement_account_ref
- risk_tier
- active_status
- created_at

### seller_metrics_daily

Purpose: risk and performance tracking.

Fields:

- seller_id
- date
- orders
- gmv
- return_rate
- cancellation_rate
- dispute_rate
- average_fulfillment_tat
- settlement_failures

### products

Purpose: SKU master.

Fields:

- product_id
- seller_id
- external_sku_id
- title
- description
- category_id
- brand
- price
- inventory_count
- image_urls
- return_policy_id
- fulfillment_sla_days
- product_status
- created_at
- updated_at

### product_risk_profiles

Purpose: product-level financing risk.

Fields:

- product_id
- risk_tier
- fraud_score
- return_rate_30d
- cancellation_rate_30d
- finance_allowed
- manual_review_required
- reason_code
- updated_at

### product_finance_rules

Purpose: rules that decide financing eligibility.

Fields:

- rule_id
- product_id
- category_id
- lender_id
- min_price
- max_price
- allowed_tenors
- min_down_payment_pct
- max_loan_amount
- seller_subvention_bps
- cashback_bps
- effective_from
- effective_to
- status

### affordability_quotes

Purpose: stores generated user-product-plan quotes.

Fields:

- quote_id
- user_id
- product_id
- seller_id
- lender_id
- plan_type
- principal_amount
- down_payment_amount
- emi_amount
- tenor_months
- apr
- processing_fee
- cashback_amount
- total_payable
- quote_status
- expires_at

### checkout_sessions

Purpose: one checkout attempt.

Fields:

- checkout_session_id
- user_id
- product_id
- seller_id
- quote_id
- payment_mode
- session_status
- down_payment_txn_id
- mandate_id
- loan_id
- order_id
- failure_reason
- created_at
- updated_at

### loans

Purpose: loan record linked to order.

Fields:

- loan_id
- user_id
- lender_id
- checkout_session_id
- principal
- apr
- processing_fee
- tenor_months
- kfs_url
- mandate_id
- loan_status
- disbursed_at
- closed_at

### repayments

Purpose: EMI schedule.

Fields:

- repayment_id
- loan_id
- installment_number
- due_date
- amount_due
- principal_component
- interest_component
- amount_paid
- payment_txn_id
- status
- dpd

### orders

Purpose: commerce order record.

Fields:

- order_id
- checkout_session_id
- user_id
- seller_id
- external_order_id
- product_id
- order_amount
- order_status
- invoice_ref
- shipped_at
- delivered_at
- return_window_end_at

### refunds

Purpose: refund and loan reconciliation.

Fields:

- refund_id
- order_id
- loan_id
- refund_amount
- refund_type
- lender_adjustment_amount
- user_refund_amount
- refund_status
- seller_refund_ref
- processed_at

### seller_settlements

Purpose: seller settlement tracking.

Fields:

- settlement_id
- seller_id
- order_id
- gross_amount
- merchant_fee
- subvention_amount
- refund_adjustment
- net_settlement_amount
- settlement_status
- settlement_date

### experiments

Purpose: experiment setup.

Fields:

- experiment_id
- name
- hypothesis
- start_at
- end_at
- status
- primary_metric

### experiment_assignments

Purpose: user assignment.

Fields:

- experiment_id
- user_id
- variant
- assigned_at

## 18. API Design

### Consumer API: Commerce Home

`GET /v1/commerce/home`

Purpose:

Return personalized commerce rails for a user.

Response includes:

- Eligible categories
- Product rails
- Affordability labels
- Credit limit summary
- Cashback / offer highlights

### Consumer API: Product Listing

`GET /v1/products?category_id=mobile_accessories&affordable_only=true`

Purpose:

Return eligible products for the user.

Response includes:

- Product ID
- Title
- Price
- Seller
- Image
- Upfront amount
- EMI amount
- Tenor
- Plan type
- Finance eligibility state

### Consumer API: Product Affordability

`GET /v1/products/{product_id}/affordability`

Purpose:

Return all payment plans available for a product.

Response includes:

- PayLater plan
- EMI-on-UPI plan
- Credit-on-UPI plan
- Full UPI option
- Fees
- APR
- KFS required flag
- Expiry

### Consumer API: Create Checkout Session

`POST /v1/checkout-sessions`

Request:

```json
{
  "product_id": "prod_123",
  "quote_id": "quote_123",
  "quantity": 1,
  "delivery_address_id": "addr_123"
}
```

Response:

```json
{
  "checkout_session_id": "chk_123",
  "status": "created",
  "amount_due_now": 1999,
  "next_step": "accept_kfs"
}
```

### Consumer API: Confirm Checkout

`POST /v1/checkout-sessions/{checkout_session_id}/confirm`

Purpose:

Confirm KFS, mandate, down payment, loan booking, and order placement.

Response:

```json
{
  "status": "success",
  "order_id": "ord_123",
  "loan_id": "loan_123",
  "repayment_schedule": [
    {
      "due_date": "2026-08-25",
      "amount": 2000
    },
    {
      "due_date": "2026-09-25",
      "amount": 2000
    }
  ]
}
```

### Consumer API: Unified Timeline

`GET /v1/orders/{order_id}/timeline`

Purpose:

Show combined commerce and lending status.

Response includes:

- Order status
- Shipment status
- Loan status
- EMI schedule
- Refund status
- Support actions

### Merchant API: Create Merchant

`POST /v1/merchants`

Purpose:

Create merchant onboarding request.

### Merchant API: Bulk Catalogue Upsert

`POST /v1/catalogue/products:bulk_upsert`

Purpose:

Create or update products.

### Merchant API: Affordability Quote

`POST /v1/affordability/quote`

Purpose:

Let merchant request an affordability quote for its own checkout.

### Merchant API: Merchant Checkout Session

`POST /v1/checkout/merchant-session`

Purpose:

Create a super.money checkout session from merchant app/site.

### Merchant API: Refund

`POST /v1/orders/{order_id}/refund`

Purpose:

Initiate refund and lender adjustment.

### Webhook: Order Status

`POST /v1/webhooks/order-status`

Purpose:

Merchant sends shipment, delivery, cancellation, return status.

### Webhook: Inventory

`POST /v1/webhooks/inventory`

Purpose:

Merchant sends inventory updates.

## 19. Six-Month Controlled-Launch Roadmap

### Month 1: Define The Wedge And Economics

Work:

- Interview at least 30 target users and 15 candidate merchants
- Analyse existing Splitstore, credit, and checkout funnels
- Baseline conversion, AOV, returns, support, repayment, and contribution
- Score the category options and select three groups
- Map lender, fraud, legal, data-consent, and merchant constraints

Exit evidence:

- Signed launch cohort and category contract
- Baseline funnel and complete variable-cost model
- Risk and compliance control register
- Three anchor-merchant hypotheses

### Month 2: Lock Product And Integration Contracts

Work:

- Validate budget-led discovery and repayment-aware bag
- Finalise PDP, checkout, refund, repayment, and Credit Health states
- Finalise seller onboarding and white-label merchant session APIs
- Lock schema, events, idempotency, and support timelines
- Build partner simulators for lender, bureau, payment, order, and webhook flows

Exit evidence:

- Tested borrower and seller prototypes
- Versioned API and event contracts
- Approved disclosures, consent, KFS, and refund treatment
- Experiment design and instrumentation plan

### Month 3: Build The Commerce Decision Loop

Work:

- Catalogue ingestion and seller setup
- Search and affordability-led ranking
- User-SKU eligibility and quote generation
- Bag repricing and remaining-limit checks
- One lender adapter and payment/mandate adapter

Exit evidence:

- Internal catalogue with 100-300 governed SKUs
- Stable quote latency and expiry behavior
- Successful simulated eligible and ineligible journeys

### Month 4: Build Transaction And Operations

Work:

- Checkout orchestrator and compensation states
- Order bridge, repayment ledger, and refund reconciliation
- Seller settlement and signed outbound webhooks
- Unified borrower timeline and support case view
- Daily funnel, money-movement, and reconciliation monitoring

Exit evidence:

- End-to-end internal order
- Full and partial refund tests
- Loan-booked/order-failed recovery test
- Matched seller settlement

### Month 5: Controlled Alpha

Scope:

- 1,000 invited users
- Three anchor sellers
- 100-300 SKUs
- One primary credit product plus full UPI

Measure:

- Store-to-PDP, PDP-to-bag, bag-to-checkout, and order completion
- Offer selection, AOV, return, support, and reconciliation
- Mandate success, 7+ DPD early signal, and complaints
- Seller setup time and offer-funding incrementality

### Month 6: Feature-Flagged Beta

Scope:

- Up to 50,000 eligible users
- Holdouts for discovery, bundle, down-payment, and seller funding tests
- Daily operations and risk review
- Weekly P&L and merchant review

Expansion gate:

- Repeat purchase signal is improving
- Cohort contribution is positive
- 30+ DPD and fraud remain within agreed thresholds
- Refund and settlement mismatches remain within operational capacity
- Complaints, disclosures, and consent pass compliance review

## 20. Experimentation Plan

### Experiment 1: Affordability Label

Hypothesis:

Showing “Rs. X today” improves qualified PDP-to-bag conversion versus showing
full price only.

Variants:

- Full price
- Upfront amount + EMI
- Upfront amount + cashback

Primary metric:

- PDP-to-bag conversion

Guardrail:

- Ineligible impressions, bag-to-checkout, returns, 30+ DPD, contribution/order

### Experiment 2: Responsible Bundle

Hypothesis:

Showing one add-on that fits the remaining limit, with the exact repayment delta,
increases contribution-positive AOV.

Variants:

- Bag without add-on
- One eligible add-on with repayment delta

Primary metric:

- Contribution-positive AOV

Guardrail:

- Checkout completion, return rate, 30+ DPD

### Experiment 3: Down Payment

Hypothesis:

Higher down payment reduces delinquency without hurting conversion too much.

Variants:

- 20% upfront
- 33% upfront
- 50% upfront

Primary metric:

- Contribution-positive order rate

Guardrail:

- 30+ DPD

### Experiment 4: Seller Subvention

Hypothesis:

Seller-funded no-cost PayLater increases conversion enough to justify subvention.

Variants:

- No subvention
- 1% subvention
- 2% subvention

Primary metric:

- Incremental contribution per SKU

Guardrail:

- Seller ROI

### Experiment 5: Repayment Reminder

Hypothesis:

Better repayment reminders reduce failed AutoPay and DPD.

Variants:

- Basic reminder
- Reminder with bank balance nudge
- Reminder with early payment CTA

Primary metric:

- AutoPay success rate

Guardrail:

- Notification opt-outs

## 21. Risks And Mitigations

### Risk 1: Credit Loss

Problem:

Commerce growth can create bad loans if approval is too aggressive.

Mitigation:

- Start with small limits
- Require down payment
- Restrict categories
- Monitor DPD by cohort
- Expand limits only after repayment

### Risk 2: Return Abuse

Problem:

Users may buy financed products and return frequently.

Mitigation:

- Track return behavior
- Exclude high-return SKUs
- Penalize seller and user risk score
- Hold limit until return resolution

### Risk 3: Seller Quality

Problem:

Poor sellers create refunds, disputes, and credit confusion.

Mitigation:

- KYB
- Seller risk tiers
- SLA monitoring
- Category approval
- Settlement holds for risky sellers

### Risk 4: Regulatory Complexity

Problem:

Credit flows must follow RBI digital lending requirements, KFS, consent, lender disclosure, and repayment rules.

Mitigation:

- super.money acts as LSP / DLA where applicable
- Lending partner is clearly disclosed
- KFS shown before acceptance
- User consent stored
- Loan and order contracts separated clearly
- Refunds reconciled transparently

### Risk 5: User Confusion

Problem:

Users may confuse product refund with loan cancellation.

Mitigation:

- Unified timeline
- Clear support flows
- Plain repayment language
- Refund adjustment messaging

## 22. Product Requirements Summary

### Consumer MVP Requirements

- Commerce entry point
- Personalized eligible catalogue
- Product card affordability labels
- PDP with repayment plan
- PayLater checkout
- UPI fallback
- KFS acceptance
- Down payment
- Mandate setup
- Order success
- Repayment ledger
- Refund timeline
- Support entry

### Seller MVP Requirements

- Seller onboarding
- KYB status
- Catalogue upload
- SKU eligibility status
- Offer setup
- Order dashboard
- Refund handling
- Settlement dashboard
- Basic analytics

### Internal MVP Requirements

- Risk dashboard
- Credit funnel dashboard
- Category performance
- Seller performance
- Refund reconciliation console
- Support console
- Experiment tracking

## 23. What The Explainer Video Should Show

The video should be simple and sharp. It should not look like a generic product demo.

### Video Story

1. India pays daily on UPI.
2. But useful purchases still create cash-flow pressure.
3. super.money can convert payment trust into responsible affordable commerce.
4. The user sees what they can buy today.
5. The checkout shows exact repayment.
6. The seller gets higher conversion through affordability.
7. The system connects catalogue, credit, seller economics, order, refund, and repayment.
8. The business scales only where contribution and repayment work.

### Suggested Voiceover

“super.money already has daily payment frequency. The next question is: how do we turn that trust into useful, responsible commerce?

Affordable Commerce is not another marketplace. It is a credit-aware shopping layer. Every product shown to the user is filtered by affordability, lender rules, seller quality, and product risk.

A user does not just see a Rs. 6,000 appliance. She sees Rs. 2,000 today and Rs. 2,000 for the next two months, with the lender, repayment dates, and refund rules clearly visible before checkout.

For sellers, this becomes an affordability OS. They can upload catalogue, fund no-cost plans, track conversion lift, and integrate super.money checkout into their own site or app.

The business is measured not by raw GMV, but by contribution-positive financed GMV from repeat users. UPI gives frequency. Credit gives monetization. Commerce gives intent. Affordable Commerce connects all three.”

## 24. Leadership Email

Subject: Product idea for super.money Commerce: credit-aware affordable shopping

Hi [Name],

I came across the PM Commerce role at super.money and spent time thinking through the product problem behind it.

My read is that the opportunity is not to add a generic shopping tab inside a UPI app. The sharper opportunity is to build an affordability-first commerce layer where discovery, checkout, catalogue eligibility, seller economics, and repayment are all connected.

I put together a product note around three focused bets:

1. A credit-aware affordable catalogue that shows users what they can responsibly buy today.
2. A native PayLater / EMI-on-UPI checkout flow that connects lender eligibility, KFS, mandate, order placement, repayment, and refunds.
3. A merchant affordability OS that lets sellers fund offers, upload catalogue, integrate checkout APIs, and grow conversion without building lending rails.

The core thesis is: UPI gives frequency, credit gives monetization, and commerce gives intent. The product should optimize for contribution-positive financed GMV from repeat users, not just top-line GMV.

I also built an interactive prototype showing both sides of the system: the buyer mobile journey and the seller affordability portal:

https://super-money-affordable-commerce.naman884186.chatgpt.site

The accompanying product note goes into product design, personas, seller workflows, P&L, system design, schema design, API design, risk controls, and MVP sequencing. I would value the chance to walk you through the decisions and hear where my assumptions differ from what the team is learning.

Best,
Naman

## 25. Final One-Line Pitch

**Build a credit-aware commerce layer inside super.money where users discover what they can afford today, sellers grow conversion through embedded affordability, and super.money monetizes UPI frequency through responsible financed commerce.**

---

# Part II: Credit Health Management Extension

The supplied app recording shows that super.money already has a credit-score
surface, score education, credit-building products, and credit offers. This case
therefore proposes the next management layer: source and freshness, factor
diagnosis, a focused action plan, partner-delay handling, and tracked correction.

Affordable Commerce helps an eligible user finance a useful purchase. Credit
Health Management helps the same user understand and correct the bureau profile
that may influence future access to loans and cards.

The two experiences share platform capabilities, but they need separate
purpose-bound consent and clear user expectations. Viewing a score must never
silently enroll a user into a credit application, and a weak score must never be
used as pressure to borrow.

## 26. Executive Recommendation

Extend the existing India-first **Credit Health** experience within six months.
The production capability should use shared APIs for mobile and authenticated
responsive web. The portfolio prototype intentionally demonstrates only the
borrower mobile journey, matching the current super.money navigation.

The extension should contain three connected capabilities:

1. **Latest available bureau score:** Retrieve the latest score available from
   an approved credit bureau after identity verification and explicit consent.
   Show the bureau, score model, range, retrieval time, and source-data
   freshness.
2. **Explainable score factors:** Convert bureau-supplied reason codes and
   verified report attributes into ranked, plain-language explanations. Separate
   positive factors, factors limiting the score, and possible report errors.
3. **Personal action plan:** Recommend a small number of safe, relevant actions,
   explain why each action matters, show an honest time horizon, and let the user
   track completion.

The strongest product promise is:

> See the latest credit profile available from the bureau, understand the main
> factors influencing it, and follow a clear plan to improve your financial
> readiness.

Avoid promises such as "increase your score by 50 points" or "guaranteed loan
approval." A bureau score is one lender input, lenders apply different policies,
and score movement depends on when lenders report updated information.

### 26.1 What "real-time" means

For this product, real-time means:

- The app requests the latest available score when the user asks for it.
- A successful response normally appears within seconds.
- The score is saved as a versioned snapshot.
- The screen states when super.money retrieved it.
- The screen separately states when the bureau's underlying file was last
  updated, when the bureau provides that field.

Credit institutions report to bureaus on a regulatory and partner cadence.
Therefore, the underlying credit file is not a continuously changing live bank
balance. The current Indian direction increases reporting frequency from July
1, 2026, but a product must still display freshness honestly. The
[Government of India credit-bureau FAQ](https://apps.dpiit.gov.in/b-ready/assets/FAQ-Operation%20of%20Credit%20Registries.pdf)
summarizes the current reporting and correction framework.

### 26.2 Why this belongs in the broader product

Credit Health can improve the affordable-commerce and lending system in four
ways:

- Build trust before asking a user to take credit.
- Help thin-file or rebuilding users understand why some plans are unavailable.
- Give users a responsible path to future eligibility.
- Improve future underwriting data only when the user has provided the
  appropriate separate consent.

The product still has standalone value. A user should be able to view, learn,
act, or dispute information without applying for a super.money credit product.

## 27. Case-Study Assumptions And Decisions

An interview case becomes stronger when assumptions are explicit.

| Question | Working assumption | Product consequence |
|---|---|---|
| First launch market | India | Design first for CICRA, current RBI directions, DPDP rollout, Indian identity matching, and Indian bureau partners |
| Platforms | Existing mobile app plus responsive authenticated web app | Shared domain APIs and design tokens; platform-specific navigation and layouts |
| Score source | One contracted licensed bureau for MVP | One score model and one trend line; adapter supports a second bureau later |
| Score calculation | Bureau-owned score | super.money explains supplied factors and does not present an invented proprietary score as a bureau score |
| Refresh | On demand, subject to entitlement, partner terms, and rate limits | Clear refresh CTA, cooldown, freshness timestamp, and cached last successful snapshot |
| Credit decision | Outside the Credit Health flow | Viewing the score has no automatic approval, rejection, hard inquiry, or loan booking |
| Action recommendations | Rules-based and content-governed for MVP | Easier explanation, validation, localization, and legal review within six months |
| Commercial model | Free core experience in MVP | Optimize trust and qualified engagement before introducing any paid monitoring tier |
| Geographic expansion | One country at a time | Region configuration and legal launch gate; no single global compliance assumption |

### 27.1 Product principles

1. **Source before interpretation:** Show where the score and factor came from.
2. **Freshness before urgency:** Tell the user how current the data is.
3. **Explanation before offer:** Explain the profile before showing a card or
   loan offer.
4. **Action before gamification:** Prioritize useful steps over badges and
   anxiety-inducing alerts.
5. **Correction before monetization:** Make inaccurate-data support easy to
   find.
6. **Separate consents by purpose:** Score viewing, monitoring, personalized
   recommendations, and credit underwriting may require distinct purposes.
7. **No synthetic certainty:** Never estimate a bureau score when the partner is
   unavailable.

## 28. Problem Definition And Desired Outcomes

### 28.1 User problems

- "I do not know my current score or which bureau produced it."
- "I can see a number, but I do not understand why it changed."
- "Advice online is generic and sometimes encourages unnecessary credit."
- "I do not know which action to take first."
- "I found an account or late-payment record that looks wrong."
- "I assume a high score guarantees approval."
- "I repeatedly apply for products without understanding eligibility."

### 28.2 Business problems

- Users reach the loan funnel with poor understanding and low trust.
- Rejected users receive no responsible path back to eligibility.
- Generic offers create avoidable applications and partner costs.
- Support teams handle basic score, freshness, and dispute questions manually.
- Marketing may overstate the relationship between a score and approval.

### 28.3 Outcome statement

Within 90 days of launch, an activated user should be able to:

1. Retrieve a correctly attributed score.
2. Explain at least one important factor in plain language.
3. Select one relevant next action.
4. Track progress or raise a correction request.
5. Understand that lenders make independent eligibility decisions.

## 29. Target Personas And Research Plan

### 29.1 Persona A: Asha, new-to-credit

Context:

- First salaried job.
- One recently opened card or a small PayLater account.
- Limited credit history.
- Confuses "no score" with "bad score."

Job to be done:

> Help me understand how a credit profile is built without asking me to take
> unnecessary debt.

Most useful experience:

- Explain thin-file status.
- Show payment-history basics.
- Recommend low-risk habits.
- Set expectations that score building takes time.

### 29.2 Persona B: Rafiq, rebuilding after missed payments

Context:

- Variable income.
- One past-due event.
- Wants a two-wheeler or working-capital product later.
- Feels judged by a score with no explanation.

Job to be done:

> Show what is hurting my profile, what I can address now, and how to confirm
> that an update reached the bureau.

Most useful experience:

- Prioritized overdue or correction action.
- Due-date and utilization education.
- Clear refresh expectations.
- Accessible support and dispute status.

### 29.3 Persona C: Neha, active credit shopper

Context:

- Several cards and recent applications.
- Compares loan and card products.
- Wants to protect her profile while finding better terms.

Job to be done:

> Help me understand current readiness and avoid actions that create unnecessary
> applications.

Most useful experience:

- Inquiry and utilization context.
- Eligibility education.
- Clear separation between a score view and a product application.
- Personalized offers only after explanation and separate consent.

### 29.4 Research in the first four weeks

Conduct:

- 15 to 20 interviews across the three personas.
- 5 interviews with support agents who handle score and loan-rejection queries.
- 3 to 5 interviews with lender risk or credit-policy teams.
- Bureau workshop on score models, reason codes, refresh, disputes, and
  commercial limits.
- Usability testing with low-literacy and multilingual participants.

Research questions:

- What does the user think the score guarantees?
- Can the user distinguish bureau date from retrieval date?
- Which factor labels cause shame, fear, or confusion?
- Does the user understand the difference between a credit inquiry and a score
  view?
- Which actions are feasible this week, this month, or over several months?
- Where does a user expect to correct a report error?
- Will the user trust the feature if the score differs from another app?

## 30. MVP Scope

### 30.1 P0 capabilities required for launch

| Capability | User value | Launch requirement |
|---|---|---|
| Identity match | Pull the correct person's data | Strong authentication, required identifiers, match-failure handling |
| Purpose notice and consent | Understand what data will be requested and why | Versioned notice, affirmative action, withdrawal path, consent evidence |
| Score retrieval | See the latest available bureau score | Partner API, timeout handling, idempotency, retries, status |
| Score dashboard | Understand number, band, source, model, range, and freshness | Mobile and responsive web |
| Score history | See movement without mixing models | Versioned snapshots from the same bureau/model |
| Factor explanations | Understand positive and limiting factors | Approved reason-code mapping and content governance |
| Action plan | Know what to do first | Maximum three prioritized actions with rationale and time horizon |
| Education library | Learn core concepts | Plain language, local examples, multilingual-ready content |
| Correction path | Address possible inaccurate data | Bureau handoff or integrated case, attachments, status, SLA |
| Failure and no-file states | Understand why no number is shown | No-file, thin-file, mismatch, consent expired, partner delayed, rate-limited |
| Notifications | Know when a requested refresh or dispute changes | Opt-in, purpose-limited, frequency controls |
| Analytics and audit | Measure and prove correct handling | Event taxonomy, consent trail, partner response evidence |
| Accessibility | Use the experience across ability levels | Screen-reader labels, text resizing, contrast, keyboard use on web |

### 30.2 P1 capabilities after the first launch

- A score simulator that uses bureau-approved logic and clearly labels itself as
  an estimate.
- More than one bureau, with separate score histories and explanations.
- Verified action completion through account or bureau updates.
- Personalized reminders based on user-selected goals.
- Multilingual education beyond the initial supported languages.
- A paid monitoring tier, only after free-core value, entitlement, and marketing
  rules are validated.
- Proactive breach or identity-monitoring products where partners and regulation
  permit.

### 30.3 Explicit non-goals for the six-month MVP

- Building a proprietary bureau-equivalent score.
- Guaranteeing score movement or loan approval.
- Automatically opening a loan or card application after score retrieval.
- Encouraging a new credit account solely to create engagement.
- Combining scores from different bureaus into one artificial trend line.
- Giving legal, debt-settlement, or investment advice.
- Automating a correction outcome that only a bureau or furnishing institution
  can confirm.
- Launching in every country at the same time.

## 31. Mobile And Web Product Experience

Both clients use the same APIs and core content. Mobile emphasizes short,
progressive steps. Web uses the additional width for report detail, history, and
side-by-side education.

### 31.1 Entry points

- Credit tab on the app and web navigation.
- Credit-product eligibility screen, after the user sees the decision and
  without forcing a new score pull.
- Repayment home, when a user asks how repayment behavior is reflected.
- Search or help query for "credit score."
- Consent-based lifecycle communication inviting the user to check their
  profile.

Avoid urgency-led entry copy such as "Your score may have fallen" unless a
confirmed new snapshot supports that statement.

### 31.2 First-time journey

```text
Credit Health entry
  -> what the feature provides
  -> bureau, data, purpose, and refresh explanation
  -> identity confirmation
  -> explicit consent
  -> score request
  -> score dashboard
  -> factor detail
  -> select one action
  -> reminder or progress tracking
```

### 31.3 Score dashboard

The first viewport should show:

- Numerical score.
- Score range and plain-language band.
- Bureau and model name.
- "Retrieved on" timestamp.
- "Bureau data updated on" date when available.
- Change from the previous comparable snapshot.
- Top positive factor.
- Top factor to work on.
- Primary CTA: "See my action plan."
- Secondary CTA: "View report details."
- Persistent link: "Something looks wrong?"

Do not use red alarm styling for a low score. The product can communicate risk
without creating panic.

### 31.4 Factor detail

Each factor card answers:

1. **What was observed?**
2. **Why can this matter?**
3. **What can the user do?**
4. **When might updated information appear?**
5. **Where did this explanation come from?**

Example:

```text
Factor: High reported card utilization

What we observed:
Your reported card balances use a high share of your available limits.

Why it can matter:
Higher utilization can indicate less available repayment capacity.

Possible next step:
Pay down an existing balance when financially feasible. Avoid taking a new loan
only to change this number.

Timing:
Any change depends on when your card issuer reports the new balance.
```

Factor ordering should use bureau reason-code priority. Product copy may explain
the code, but it must not claim a factor caused an exact number of points unless
the bureau contract and model explicitly support that claim.

### 31.5 Action plan

Show at most three active actions:

| Action type | Example | Verification |
|---|---|---|
| Correct | Dispute an unfamiliar account or inaccurate late-payment record | Bureau or furnisher confirms case outcome |
| Stabilize | Bring a contractual overdue amount current where financially feasible | Lender/bureau update |
| Reduce | Lower reported revolving utilization | New comparable bureau snapshot |
| Protect | Avoid unnecessary repeated applications for a selected period | User confirmation plus inquiry data where available |
| Maintain | Keep upcoming obligations on time | Repayment events and later bureau update |
| Build safely | Establish history through a suitable product only if the user wants credit | Separate suitability, application, and consent flow |

Each action includes:

- Priority and reason.
- User-controlled start.
- Suggested time horizon.
- Evidence required for verification.
- Reminder preference.
- "Why this may help" explanation.
- Disclaimer that score movement and credit approval are not guaranteed.

### 31.6 Important product states

| State | What the UI says | What the system does |
|---|---|---|
| Score available | Source, score, band, factors, freshness | Store versioned snapshot and render plan |
| Thin or no file | Bureau could not produce a score | Explain safely; show general credit-building education |
| Identity mismatch | Details could not be matched confidently | Do not expose any report data; offer correction/support |
| Partner pending | Request is taking longer than expected | Preserve request ID, allow safe exit, notify after consent |
| Partner unavailable | Latest score cannot be retrieved now | Show last valid snapshot with date when allowed, or no score |
| Rate limited | Refresh is available after a stated time | Preserve last snapshot and explain cooldown |
| Consent withdrawn | Monitoring and future pulls stop | Retain only what policy and law require |
| Possible inaccuracy | User starts a correction | Create tracked case and show owner, status, and SLA |
| Score model changed | New result is not directly comparable | Start a new trend series and explain the change |

## 32. Product And System Architecture

![Credit Health architecture connecting mobile and web clients, consent,
bureau orchestration, score storage, explanations, action plans, disputes, and
shared platform services](diagrams/credit-health-architecture.svg)

[Open the editable Mermaid source](diagrams/credit-health-architecture.mmd).

### 32.1 New capabilities

| Component | What it owns | Main inputs | Main outputs |
|---|---|---|---|
| Bureau Orchestrator | Pull lifecycle, deduplication, status, timeout, retry | User, consent, bureau, purpose, idempotency key | Pending, succeeded, failed, or action-required pull |
| Bureau Adapter | Partner-specific authentication and canonical mapping | Canonical request, partner credentials | Canonical score, factors, report reference, error |
| Credit Profile Service | Comparable score snapshots and freshness metadata | Successful canonical bureau response | Latest profile, history, profile events |
| Explanation Service | Approved mapping from reason code to education | Bureau/model/version, reason codes, locale | Ranked plain-language factor explanations |
| Action Plan Service | Prioritized recommendations and progress | Factors, verified profile context, policy version | Maximum three actions, rationale, status |
| Dispute and Correction Module | User case, evidence, partner handoff, SLA | Report item, reason, attachment references | Case ID, owner, status, resolution evidence |

### 32.2 Existing capabilities reused

- Identity and User Profile verifies the signed-in person.
- Consent and Document Service stores the exact purpose notice and acceptance.
- Transaction Intelligence can support actions only under an approved purpose.
- Eligibility receives bureau-derived data only under a separate lending
  purpose.
- Notification Service sends user-approved refresh and action reminders.
- Support and Case Service gives agents a redacted unified view.
- Audit Store records pulls, access, factor mappings, recommendation versions,
  and operator actions.
- Analytics measures funnels and outcomes from minimized events.

The broader service architecture is explained in the
[technical system-design deep dive](system-design-deep-dive.md).

### 32.3 Canonical score snapshot

```json
{
  "credit_profile_id": "cp_01K0...",
  "user_id": "usr_01K0...",
  "bureau": "BUREAU_A",
  "score_model": "CONSUMER_SCORE_V4",
  "score": 742,
  "score_min": 300,
  "score_max": 900,
  "score_band": "GOOD",
  "bureau_file_updated_at": "2026-07-20",
  "retrieved_at": "2026-07-26T08:20:31Z",
  "comparable_to_previous": true,
  "reason_codes": [
    {
      "code": "REVOLVING_UTILIZATION_HIGH",
      "rank": 1,
      "direction": "LIMITING"
    }
  ],
  "report_reference": "br_ref_...",
  "consent_id": "con_...",
  "source_payload_hash": "sha256:...",
  "policy_version": "credit-health-in-v1.0"
}
```

The raw bureau payload belongs in a tightly controlled encrypted integration
store only when contract, purpose, and retention policy require it. Product
services should use the minimized canonical model.

### 32.4 Consumer APIs

```text
POST /v1/credit-health/consent-sessions
POST /v1/credit-health/score-pulls
GET  /v1/credit-health/score-pulls/{pull_id}
GET  /v1/credit-health/profile/latest
GET  /v1/credit-health/profile/history
GET  /v1/credit-health/factors
GET  /v1/credit-health/action-plan
PATCH /v1/credit-health/actions/{action_id}
POST /v1/credit-health/disputes
GET  /v1/credit-health/disputes/{dispute_id}
DELETE /v1/credit-health/monitoring-consent
```

Example asynchronous pull response:

```json
{
  "data": {
    "pull_id": "pull_01K0...",
    "status": "PENDING_PARTNER",
    "poll_after_seconds": 3,
    "latest_usable_snapshot": {
      "credit_profile_id": "cp_previous",
      "retrieved_at": "2026-06-26T06:10:00Z"
    }
  },
  "meta": {
    "request_id": "req_...",
    "trace_id": "trc_..."
  }
}
```

The API returns `202 Accepted` for a pending partner response. It never returns
an estimated score in the `score` field.

### 32.5 Key technical controls

- Idempotency key on every score pull and dispute command.
- Strong user-to-report identity matching.
- Partner credentials in a secrets manager.
- Mutual TLS or partner-required secure transport.
- Encryption at rest for credit profile data.
- Field-level access control and support redaction.
- Separate production and analytics identifiers.
- Versioned reason-code and recommendation mappings.
- Complete audit trail for data access.
- Configurable regional retention and deletion.
- Circuit breaker and queue around a slow bureau.
- Contract tests against a bureau sandbox.
- No bureau data in client logs, analytics properties, URLs, or crash reports.

## 33. Compliance Across Regions

Compliance is a launch workstream with product requirements, engineering
controls, legal evidence, and operational owners. A legal review at the end of
development is too late.

### 33.1 Regional compliance operating model

Create one control register per launch country:

| Control area | Decision required before build | Evidence before launch |
|---|---|---|
| Entity and role | Is the company a credit institution, specified user, agent, data fiduciary, report user, or another defined role? | Counsel memo and partner confirmation |
| Permitted purpose | Why may the company request this report or score? | API purpose code, product flow, contract clause |
| Consent/legal basis | Which data and uses require consent or another basis? | Versioned notice, consent record, withdrawal test |
| Identity | What identifiers and authentication are required? | Match design, false-match test, no-data-leak test |
| Display | Which score, source, range, model, factors, and disclaimers must be shown? | Approved screens and localized copy |
| Credit decision use | Does score viewing feed underwriting or adverse action? | Separate data-flow and decision-policy review |
| Correction and grievance | Who owns a dispute and what timeline applies? | Working case flow, escalation route, SLA dashboard |
| Retention and deletion | How long can raw reports, snapshots, consent, and audit evidence remain? | Data inventory, TTL configuration, deletion test |
| Residency and transfer | Where can data be stored or accessed? | Cloud and subprocessors register |
| Marketing | Which "free," "real-time," "improve," and approval claims are allowed? | Legal-approved claim library |
| Fairness and accessibility | Could the experience disadvantage a protected or vulnerable group? | Outcome review and accessibility sign-off |
| Security and incidents | What controls and notifications apply? | Threat model, penetration test, incident runbook |

Regional rules live in configuration:

```text
region_policy
  enabled_bureaus
  permitted_purpose_codes
  score_ranges_and_bands
  refresh_cooldown
  identity_requirements
  notice_and_consent_versions
  factor_content_versions
  dispute_sla
  retention_schedule
  data_residency
  allowed_marketing_claims
  monitoring_default
```

Product launch is geofenced until Legal, Security, Risk, Product, and Operations
approve that region's configuration.

### 33.2 India launch baseline

The final interpretation depends on super.money's legal entity, partner model,
and exact data flow. The case study should explicitly examine:

- Credit Information Companies (Regulation) Act, 2005, associated rules and
  regulations, and whether super.money has the permitted role and purpose to
  obtain and display the data.
- The current entity-specific RBI Credit Information Reporting Directions issued
  on November 28, 2025. The January 6, 2025 consolidated direction was replaced.
  The government
  [credit-bureau FAQ](https://apps.dpiit.gov.in/b-ready/assets/FAQ-Operation%20of%20Credit%20Registries.pdf)
  explains this transition and links the current directions.
- Strong authentication before exposing a report.
- Clear source attribution and latest available information.
- An accessible correction and grievance route. Current guidance describes a
  combined 30-day correction window for CIC and credit-institution handling.
- The user's free full credit report entitlement and bureau-specific commercial
  terms. The
  [RBI free annual credit report direction](https://rbi.org.in/commonperson/English/Scripts/Notification.aspx?Id=1884)
  requires one free full report including a score per calendar year from each
  CIC for an eligible individual.
- Data minimization, security, purpose limitation, user rights, and the phased
  commencement of the
  [Digital Personal Data Protection Rules, 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa).
- RBI digital-lending requirements if the data is later used in a loan journey.
  Score-view consent should not be treated as lending consent.

### 33.3 Examples for later regional expansion

These examples demonstrate the operating model; they do not replace local legal
advice.

- **United States:** Validate a permissible purpose under FCRA before obtaining
  a consumer report, support file access and disputes, and preserve required
  adverse-action and ECOA explanations when the score affects a credit decision.
  The
  [CFPB permissible-purpose guidance](https://www.consumerfinance.gov/rules-policy/final-rules/fair-credit-reporting-permissible-purposes-for-furnishing-using-and-obtaining-consumer-reports/)
  states that a report cannot be obtained without a permissible purpose.
- **European Union:** Map GDPR legal basis, transparency, access, correction,
  profiling, and automated-decision rights. If super.money builds or deploys AI
  to evaluate creditworthiness or establish a score, perform an AI Act
  classification and compliance assessment. The
  [European Commission AI Act overview](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
  identifies some credit-scoring uses as high-risk.

### 33.4 Compliance stage gates

| Gate | Timing | Required decision |
|---|---|---|
| Regulatory framing | End of week 2 | Permitted role, purpose, first market, score-display model |
| Data design | End of week 6 | Field inventory, retention, residency, access, consent evidence |
| Experience approval | End of week 10 | Claims, factors, actions, correction path, accessibility |
| Technical assurance | End of week 18 | Threat model, partner controls, audit, deletion, incident test |
| Launch approval | End of week 22 | Signed control register, open-risk acceptance, operational readiness |

## 34. Success Metrics

### 34.1 North Star

**Monthly Credit Health Progressors**

A unique user who, within 30 days:

1. Views a fresh or clearly dated valid score snapshot.
2. Opens at least one factor explanation.
3. Starts or completes one relevant action, or raises a correction for a
   suspected inaccuracy.

This measures informed progress. A raw monthly score-view count can grow through
anxiety-driven notifications without improving user outcomes.

### 34.2 Metric tree

| Layer | Metrics |
|---|---|
| Reach | Eligible users, Credit Health entry impressions, entry CTR, web/mobile split |
| Consent | Notice completion, consent acceptance, withdrawal rate, abandonment by step |
| Retrieval | Successful pulls, no-file rate, mismatch rate, partner error rate, p50/p95 latency, cost per successful pull |
| Activation | First score viewed, factor opened, action plan opened, correction link discovered |
| Understanding | "I understand the main factor" survey, source/freshness comprehension, education completion, support contacts about basic meaning |
| Action | Action selected, reminder enabled, action completion, verified action completion, dispute initiated and resolved |
| Retention | 30/60/90-day Credit Health return, refresh rate within policy, notification opt-out |
| User outcome | Comparable-score improvement distribution at 90/180 days, overdue resolution, utilization improvement, correction success |
| Credit outcome | Qualified application rate, approval uplift, risk-adjusted conversion, 30+ DPD and loss among exposed cohorts |
| Trust and safety | Complaints, incorrect-person incidents, stale-score mislabeling, unresolved disputes, accessibility defects, unfair outcome alerts |
| Economics | Bureau cost per activated/progressing user, support cost, incremental risk-adjusted revenue, retained-user value |

### 34.3 Illustrative first-90-day targets

Targets should be calibrated with baseline and partner performance:

- At least 95% successful retrieval among correctly verified, bureau-matchable
  users.
- p95 score-pull completion under 8 seconds when the bureau responds
  synchronously.
- At least 65% of consent starters reach the first score view.
- At least 40% of score viewers open a factor.
- At least 25% of activated users start an action.
- At least 30% of activated users return within 30 days when a relevant update
  or action exists.
- Zero confirmed wrong-person report exposures.
- Zero score displays without bureau, model/range, and freshness context.
- 100% of correction cases have a visible owner and SLA.

### 34.4 Outcome-measurement design

Score improvement is delayed and affected by selection bias. Users who choose an
action may already be more motivated. Use:

- Randomized reminder and education experiments where ethical.
- Matched holdouts for action-plan exposure.
- Comparable snapshots from the same bureau and model.
- 90-day and 180-day outcome windows.
- Segment cuts for thin-file, rebuilding, and active-credit users.
- Guardrails for applications, delinquency, complaints, and financial stress.

Do not optimize an average score increase alone. A product could produce that
number by excluding users who need the most help.

## 35. Handling A Bureau Or Data-Partner Delay

### 35.1 Design the dependency before it fails

The bureau contract and integration plan should define:

- Sandbox availability and representative test cases.
- API availability, latency, rate limits, and maintenance windows.
- Score model and reason-code versioning.
- Data freshness and completeness fields.
- Incident notification and escalation contacts.
- Correction and dispute handoff.
- Reconciliation and usage reporting.
- Data retention, deletion, security, audit, and subprocessor terms.
- Commercial cost per call and duplicate-call treatment.
- Disaster recovery and business-continuity commitments.
- Exit and data-deletion obligations.

Engineering should build against a canonical contract and simulator while the
partner integration is incomplete. The bureau adapter contains partner field
names, authentication, and error mapping; the rest of the product uses stable
internal contracts.

### 35.2 User-facing degradation

| Situation | Product response |
|---|---|
| Slow response under timeout | Keep request pending, allow user to leave, notify on completion |
| Temporary outage with valid prior snapshot | Show prior snapshot with its original date and a clear refresh-delay message |
| Temporary outage without prior snapshot | Show unavailable state and general education; never fabricate a score |
| Partial response | Display only complete, contractually valid fields; hold factors/actions that lack evidence |
| Rate limit | Queue or reject safely, show next eligible refresh time |
| Extended outage | Disable new pulls by feature flag, preserve history and correction access |
| Data integrity concern | Stop display of affected snapshots and activate incident/support process |

### 35.3 Delivery-delay decision tree

```text
Partner delivery slips
  |
  +-- Contract/schema available?
  |     Yes -> continue client, simulator, storage, analytics, and contract tests
  |     No  -> escalate commercial and executive dependency immediately
  |
  +-- Production readiness before week 16?
  |     Yes -> preserve controlled beta date
  |     No  -> move score launch behind feature flag; continue education shell
  |
  +-- Approved second bureau available?
        Yes -> integrate as a separately labelled source and new baseline
        No  -> narrow cohort or geography; do not silently substitute a score
```

An education-only shell can be released for learning, but it does not satisfy
the complete case requirement for a real score. Leadership should receive an
explicit scope/date tradeoff rather than a nominal launch with simulated data.

## 36. Go-To-Market Strategy

### 36.1 Positioning

Primary message:

> Understand your credit profile and take the next responsible step.

Supporting proof:

- Score source and date are visible.
- Factors are explained in plain language.
- Actions are prioritized.
- Correction support is easy to find.
- Viewing Credit Health does not guarantee approval.

### 36.2 Initial audiences

Launch in this sequence:

1. Existing users with a credit relationship and high identity confidence.
2. Users who voluntarily visit the Credit tab.
3. Users rebuilding after a past issue, with carefully reviewed messaging.
4. Thin-file users who may receive a no-score result.
5. Broader logged-in users after retrieval and support metrics stabilize.

### 36.3 Rollout

| Stage | Audience | Goal | Exit criteria |
|---|---|---|---|
| Employee alpha | Employees and test identities | Validate data mapping and support | No critical identity, consent, or mapping defects |
| Invite beta | 1,000 to 5,000 users | Test comprehension and retrieval | Stable success/latency; approved copy; support ready |
| Controlled launch | 5% to 10% of eligible users | Measure activation, trust, and action starts | Guardrails green for two reporting cycles |
| Expanded launch | 25% to 50% | Validate unit economics and partner scale | Cost, availability, dispute SLA, retention stable |
| General availability | Approved India cohort | Scale the product | Executive launch gate complete |

### 36.4 Channels

- Credit tab placement on mobile and web.
- Contextual entry from repayment and eligibility screens.
- Consent-based push, email, and in-app inbox.
- Financial education content and short explainers.
- Bureau-partner education where claims and branding are contractually approved.
- Support-agent scripts and help-center search.
- PR focused on transparency and financial understanding after operational
  stability is proven.

### 36.5 Marketing controls

- Legal-approved claims library for "free," "latest," "real-time," "improve,"
  and "eligible."
- Bureau trademark and attribution approval.
- No guaranteed point movement or approval.
- No fear-based "score dropped" notification without confirmed evidence.
- Clear labeling of sponsored or personalized offers.
- Frequency caps and easy communication opt-out.
- Regional and language review.
- Holdout groups to measure incrementality.

### 36.6 Commerce and lending cross-sell

After the user understands the profile, the app may show:

- Products for which the user is already eligible.
- Secured or credit-building products when suitable.
- Education about how a future review works.

The offer module must use separate consent and eligibility. It should never imply
that purchasing a product will certainly improve the bureau score.

## 37. Six-Month Delivery Plan

### Month 1: Define and de-risk

- Confirm India-first scope and executive sponsor.
- Complete user, support, lender, and bureau research.
- Define real-time, refresh, no-file, and correction behavior.
- Select bureau shortlist and commercial model.
- Complete legal role and permissible-purpose memo.
- Draft data inventory, consent model, and regional control register.
- Establish North Star, event taxonomy, and baseline.

Exit gate:

- Approved scope, legal path, partner shortlist, prototype concept, and critical
  risks.

### Month 2: Contract, design, and architecture

- Finalize bureau contract, sandbox, SLA, security, and dispute model.
- Test mobile and web prototypes with users.
- Approve score, factor, action, failure, and correction copy.
- Finalize canonical schema, APIs, retention, and access controls.
- Build bureau simulator and contract-test suite.
- Design operational dashboards and support workflow.

Exit gate:

- Signed integration plan, design sign-off, API contract, and data-control
  approval.

### Month 3: Build the score foundation

- Implement consent and identity flow.
- Build Bureau Orchestrator and first adapter.
- Store versioned score snapshots.
- Build score dashboard on mobile and web.
- Implement pending, no-file, mismatch, and outage states.
- Add audit, security telemetry, and partner reconciliation.

Exit gate:

- Employee alpha retrieves and displays correctly attributed test and approved
  production-like scores end to end.

### Month 4: Explain and guide

- Implement reason-code mapping and content service.
- Build action plan and progress tracking.
- Add score history with comparability rules.
- Implement correction/dispute flow and support console.
- Add notifications and preference controls.
- Complete accessibility and multilingual-readiness testing.

Exit gate:

- Invite beta completes score, factor, action, and correction workflows.

### Month 5: Validate and prepare GTM

- Run controlled beta.
- Measure comprehension, retrieval, actions, complaints, and support load.
- Conduct penetration test, privacy review, incident simulation, and deletion
  test.
- Validate fairness and segment outcomes.
- Load-test partner and platform paths.
- Train Support, Marketing, Risk, Operations, and incident responders.
- Finalize launch content, FAQs, and campaign holdouts.

Exit gate:

- Signed legal, security, risk, data, support, and partner readiness.

### Month 6: Progressive launch

- Release to 5% to 10% of eligible users.
- Hold daily launch room for the first week.
- Monitor wrong-person risk, retrieval, latency, disputes, and complaints.
- Expand only after guardrails remain green.
- Start 30-day retention and 90-day outcome cohorts.
- Publish the first executive scorecard and post-launch backlog.

### 37.1 Critical path

The critical path is:

```text
Legal role and permissible purpose
  -> bureau contract and sandbox
  -> identity and consent
  -> canonical data mapping
  -> end-to-end retrieval
  -> correction operations
  -> security and legal launch approval
```

Design, client development, education content, analytics, and support tooling can
progress against the simulator while the partner completes production access.

## 38. Stakeholder Operating Model

### 38.1 Core team

- 1 Product Manager
- 1 Engineering Manager or Tech Lead
- 2 backend engineers
- 2 mobile engineers
- 1 web engineer
- 1 product designer
- 1 data scientist or decision scientist
- 1 data/analytics engineer
- Shared QA/SDET
- Shared Legal, Compliance, Security, Risk, Marketing, Support, and Operations

### 38.2 Decision ownership

| Workstream | Accountable | Responsible partners | Required output |
|---|---|---|---|
| Product scope and sequencing | PM | Design, Engineering, Risk | PRD and launch gates |
| Bureau contract and SLA | Partnerships lead | PM, Legal, Engineering, Finance | Signed contract and escalation tree |
| Legal role and consent | Legal/Compliance | PM, Privacy, Partner | Control memo and approved notices |
| Data model and integration | Engineering lead | Bureau, Security, Data | Canonical contract and runbook |
| Factor interpretation | Product/Risk | Bureau, Legal, Design, Data Science | Versioned approved mapping |
| Action recommendations | Product/Risk | Legal, Data Science, Design | Policy and content library |
| Fairness and model governance | Risk/Data Science | Legal, Analytics, Bureau | Validation and monitoring plan |
| Mobile and web experience | Design | PM, Engineering, Accessibility | Tested designs and component specs |
| Measurement | Analytics | PM, Engineering, Finance | Event dictionary and dashboards |
| Support and disputes | Operations | Bureau, Legal, Product | SOP, SLA, escalation, training |
| GTM | Marketing | Product, Legal, Support, Bureau | Claims, cohorts, channels, holdouts |
| Launch decision | Executive sponsor | All workstream owners | Signed go/no-go review |

### 38.3 Operating cadence

- Weekly cross-functional product review.
- Twice-weekly bureau integration review during months 2 to 4.
- Fortnightly legal, privacy, risk, and security control review.
- Weekly user-research playback during discovery and beta.
- Monthly executive steering review.
- Daily launch room during the first week of rollout.

Maintain one decision log. Record the owner, decision, evidence, date, policy
version, and reopen condition.

## 39. Experimentation Plan

### Experiment 1: Score-first versus explanation-first

Question:

- Does a short source-and-freshness explanation improve comprehension without
  reducing activation?

Primary metric:

- First score view followed by correct source/freshness comprehension.

Guardrail:

- Consent abandonment.

### Experiment 2: One action versus three actions

Question:

- Does one recommended next step increase completion for rebuilding users?

Primary metric:

- Action completion within 30 days.

Guardrail:

- "Advice was not useful" feedback.

### Experiment 3: Reminder framing

Variants:

- Goal-based reminder.
- New-data-available reminder.
- No reminder holdout.

Primary metric:

- Relevant return and verified action completion.

Guardrails:

- Notification opt-out, complaints, anxiety feedback.

### Experiment 4: Offer placement

Variants:

- No product offer in Credit Health.
- Offer after action plan.
- Offer on a separate eligibility tab.

Primary metric:

- Qualified applications and risk-adjusted approval.

Guardrails:

- Understanding, trust, repeated applications, 30+ DPD.

## 40. Major Risks And Mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| Wrong-person match | Severe privacy and consumer harm | Strong authentication, multi-identifier match, fail closed, incident kill switch |
| Misleading "real-time" claim | Breaks trust and may create regulatory risk | Define retrieval and data dates separately; legal-approved claims |
| Score differs from another app | Different bureau/model/date may be valid | Show source, range, model, and date; do not merge trend lines |
| Generic advice causes harm | User may borrow or move money unnecessarily | Safe-action policy, legal/risk review, no guaranteed impact |
| Factor explanation drifts from bureau model | Advice becomes inaccurate | Versioned mapping, bureau review, contract tests, kill switch |
| Partner outage | Core value is unavailable | Pending flow, valid dated cache, simulator, feature flag, explicit status |
| Dispute handoff fails | User cannot correct harmful data | Tracked case, owner, SLA, reconciliation, escalation |
| Product becomes a loan-sales funnel | Trust and responsible-lending goals erode | Separate consent, education-first layout, offer labeling, guardrails |
| Cost per bureau pull is high | Free product economics fail | Refresh cooldown, deduplication, negotiated tiers, cost per progressor |
| Score optimization drives exclusion | Users needing help disappear from metrics | Segment reporting and inclusion guardrails |
| Cross-region rules diverge | One flow becomes non-compliant | Region policy, geofencing, local counsel, launch control register |

## 41. How To Present This Case Study

A clear leadership or interview narrative can fit into 10 slides:

1. **Problem:** Users see credit decisions without understanding their financial
   profile.
2. **Product promise:** Latest available score, understandable factors, and a
   responsible action plan.
3. **Real-time definition:** Retrieval time, bureau freshness, and why both dates
   matter.
4. **Personas:** New-to-credit, rebuilding, and active-credit shopper.
5. **MVP scope:** The three capabilities, correction flow, failure states, and
   non-goals.
6. **Experience:** Mobile and web journey from consent to action.
7. **System:** Bureau adapter, score snapshots, explanation, action plan, and
   shared platform.
8. **Compliance and partner risk:** Regional control register, separate consent,
   dispute operations, and partner-delay plan.
9. **Execution:** Six-month roadmap, critical path, and stakeholder ownership.
10. **Impact:** North Star, user outcomes, business metrics, and safety
    guardrails.

Recommended prototype sequence:

```text
Mobile:
Profile -> Credit centre -> My credit score
-> purpose consent
-> latest available score
-> factor detail
-> three-action plan
-> correction and tracked case

Operational branches:
no bureau file
partner timeout -> dated saved score
secondary entry from Credit tab
contextual link to available shopping limit
```

The mobile prototype demonstrates a successful retrieval, thin-file guidance,
partner-delay fallback, and a correction journey. Shared domain APIs support a
later responsive web surface without requiring a second prototype for this
portfolio.

## 42. Concise Answers To The Case Questions

### How would you define scope?

Start with one country, one bureau, one score model, and three connected
capabilities: score, explanations, and actions. Include consent, source,
freshness, no-file, partner-failure, and correction states because they are part
of the core user promise. Defer proprietary scoring, multiple bureaus, score
simulation, and paid monitoring.

### How would you ensure compliance across regions?

Create a country-specific control register covering legal role, permitted
purpose, consent, identity, display, decision use, correction, retention,
residency, marketing, fairness, and security. Implement these as region policy,
geofence the feature, and require Legal, Security, Risk, Operations, and Product
sign-off before each market opens.

### What metrics would you track?

Use Monthly Credit Health Progressors as the North Star. Track reach, consent,
retrieval reliability, activation, comprehension, action completion, correction
outcomes, retention, comparable score movement, qualified credit outcomes,
partner cost, complaints, identity incidents, fairness, and delinquency
guardrails.

### How would you handle bureau delay?

Develop against a canonical simulator, isolate the partner behind an adapter,
contract SLAs and versioning, support pending and dated-cache states, and use
feature flags. A second bureau is a separately labelled source with a new
baseline. Never fabricate or silently substitute a score.

### What is the GTM?

Position the product around understanding and responsible progress. Start with
employees, move to invite beta, then expand from 5% to general availability only
when retrieval, disputes, complaints, and identity guardrails remain healthy.
Use owned credit surfaces, education, consent-based lifecycle channels, and
legal-approved claims. Place lending offers after explanation with separate
consent and holdout measurement.

## 43. Credit Health One-Line Pitch

**Give every user a trustworthy view of the latest credit profile available from
the bureau, explain what influences it, and turn that understanding into a small,
responsible action plan that improves financial readiness over time.**
