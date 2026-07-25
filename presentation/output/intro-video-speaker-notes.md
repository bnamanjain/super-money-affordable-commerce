# Affordable Commerce Intro Video - Speaker Notes

Recommended length: 5:30 to 6:10

Prototype: https://super-money-affordable-commerce.naman884186.chatgpt.site

Use slides 1-11 for the recorded introduction. Slides 12-15 are an appendix for a live follow-up.

## Slide 1: Affordable Commerce inside super.money

0:00-0:20

Hi, I am Naman Jain. Instead of sending only a resume, I wanted to show how I would approach the Commerce PM mission at super.money.

This is a focused product concept for turning UPI frequency into responsible, contribution-positive financed commerce. I built the product thesis, buyer and seller prototype, economics, system design, schema, APIs, and launch plan.

## Slide 2: Do not put a generic marketplace inside a UPI app.

0:20-0:55

My starting point is what not to build. A generic marketplace would compete on breadth, logistics, and discounting. That is not the differentiated advantage of a high-frequency payments app.

The stronger wedge is to use payment frequency and financial context to qualify demand. The user should see products that fit what they can responsibly pay today, while the platform also checks SKU risk, seller economics, and lender rules.

That creates a commerce experience whose ranking objective is not clicks or raw GMV. It is contribution-positive financed GMV from repeat users.

## Slide 3: Two users, one shared affordability problem.

0:55-1:25

The first buyer persona is Asha, a 26-year-old salaried user in Bengaluru. She uses UPI daily, has a thin credit file, and avoids unclear fees. Her question is simple: what can I buy now, what is due today, and what happens after purchase?

The supply-side persona is a value merchant. The merchant wants higher conversion and AOV, but does not want to integrate multiple lenders, reconcile loan states, or spend on discounts that would have converted anyway.

The product must solve both jobs in the same transaction. Buyer transparency and seller incrementality cannot be designed separately.

## Slide 4: Three connected functions, not marketplace breadth.

1:25-1:55

I narrowed the initial scope to three connected functions.

First, a credit-aware affordable catalogue that ranks financeable SKUs by what the user can pay today.

Second, a native PayLater and EMI-on-UPI checkout that makes the lender, KFS, fees, mandate, and fallback explicit.

Third, a merchant affordability OS for catalogue onboarding, SKU eligibility, offer funding, orders, settlements, and analytics.

I would explicitly keep broad marketplace breadth, inventory ownership, high-risk categories, long-tenor lending, and a full underwriting or collections stack outside the first release.

## Slide 5: Affordability starts discovery - it does not interrupt checkout.

1:55-2:50

The buyer journey starts on the UPI home with a pre-qualified shopping limit. This converts a payment habit into qualified commerce intent without opening an endless marketplace.

In discovery and on the product page, the amount due today is more prominent than the total price. Asha sees the approved plan, dates, lender, zero fees, return policy, and full UPI fallback before checkout.

Checkout then asks for one informed confirmation. Behind that, the platform coordinates the down payment, AutoPay mandate, loan booking, and seller order.

The confirmation does not split the experience into a seller order and a lender account. It presents one timeline with order ID, loan ID, delivery, and next due date. That unified obligation is important for trust, support cost, and repayment quality.

## Slide 6: The supply side is an affordability operating system.

2:50-3:40

The seller experience is a desktop operating portal.

Catalogue eligibility is evaluated per SKU, not just per merchant. Category risk, price, margin, stock, seller SLA, returns, and lender rules decide whether an item can carry a plan.

The affordability simulator makes seller funding an economic decision. A merchant can change subvention and the customer upfront amount, then see forecast conversion, cost per order, and net contribution before publishing a controlled test.

Once orders arrive, the merchant sees one commerce state. Payment authorization and loan booking are already coordinated; the seller only fulfils. Settlements then reconcile platform fees, offer funding, refund reversals, and net payout.

This is the path to a white-label affordability product through Breeze as well as in-app commerce.

## Slide 7: One customer action coordinates four independently failing systems.

3:40-4:25

This is where the problem becomes a fintech lending platform problem rather than a commerce UI problem.

A single purchase can fail at payment, mandate creation, lender booking, or seller order placement. The checkout orchestrator therefore needs an explicit state machine and idempotency key for every external action.

For example, if the down payment succeeds but the loan fails, release or refund the payment. If the loan books but the order fails, cancel or reverse the loan before presenting success. If an order is later returned, adjust outstanding principal first and only then calculate any user refund.

The customer should not see internal compensation mechanics, but support and operations need the complete joined event history. That is why checkout session is the central entity linking quote, payment, loan, order, mandate, and refund.

## Slide 8: Scale the cohorts that repay and repeat - not the GMV that looks large.

4:25-5:00

I would manage this as a business line, so the product model needs an explicit contribution equation.

This illustrative case starts with five million exposed active users. With an eight percent commerce entry rate, thirty-five percent PDP conversion, thirty percent checkout start, and forty-five percent financed completion, it produces about eighteen thousand nine hundred monthly orders.

At a three-thousand-rupee AOV, that is roughly five-point-seven crore of financed GMV. If net revenue is three percent and variable cost is one-point-seven percent, contribution is about one-point-three percent of GMV, or seven-point-four lakh per month before fixed cost.

The number is deliberately modest. The early objective is to identify which cohorts, SKUs, sellers, and offer constructs produce repeat contribution after returns and delinquency. Scale should follow repayment performance.

## Slide 9: A metric tree that protects growth from credit and incentive leakage.

5:00-5:25

The measurement model starts with one North Star and three guardrail families.

Growth covers qualified entry, checkout completion, AOV, and repeat. Credit covers mandate success, seven-plus and thirty-plus DPD, and expected loss. Economics covers net contribution per order, refund-adjusted GMV, offer cost, and support cost.

The first experiments should isolate the biggest product decisions: whether upfront affordability labels improve relevant discovery, what down payment balances approval and risk, whether seller subvention creates incremental conversion, and how repayment reminders affect AutoPay success.

Every offer test needs a holdout. Otherwise the merchant may subsidize orders that would have happened anyway.

## Slide 10: Build one closed loop before adding catalogue breadth.

5:25-5:50

The first ninety days are designed to answer one question: can credit-aware discovery and seller-funded affordability create repeat, contribution-positive commerce?

Days zero to fifteen define user, seller, category, lender, and compliance constraints using interviews and existing funnel data.

Days sixteen to thirty lock the buyer and seller prototype, API contracts, schema, refund design, and experiment plan.

Days thirty-one to sixty build the closed loop: catalogue ingestion, eligibility, quote, checkout orchestration, lender adapter, order bridge, repayment ledger, and support timeline.

Days sixty-one to ninety launch a controlled beta with three categories and twenty to fifty sellers or a controlled catalogue. Expansion is a go or no-go decision based on conversion, repeat, DPD, and contribution.

## Slide 11: Make affordability a system capability, not a checkout widget.

5:50-6:10

The core bet is that affordability should be a system capability, not a checkout widget.

Credit should shape which products are discovered. Checkout should coordinate the regulated obligation. The seller platform should prove incrementality and contribution before funding an offer.

The prototype and accompanying document make the assumptions explicit, including what I would not build first. I would value the opportunity to walk through the decisions, compare them with what the super.money team is learning, and then adjust the roadmap from real user, seller, risk, and P&L data.

Thank you for watching.


# Appendix Notes

## Slide 12: System architecture: personalized supply into one orchestrated obligation.

Appendix.

Use this slide only if the audience asks how the product hangs together technically.

The left side ingests user financial signals and seller catalogue data. Eligibility and offer services combine those constraints into user-SKU quotes. The checkout orchestrator then coordinates payment, mandate, lender, and order adapters. Events populate the repayment ledger, refund reconciliation, unified timeline, seller settlement, and analytics.

## Slide 13: Core schema: one checkout session joins commerce and credit.

Appendix.

The core data-model decision is to make checkout_session the join point, not order or loan alone.

User financial signals and credit profiles determine affordability. Products and product finance rules determine SKU-level eligibility. A quote is frozen into checkout session. Loan, repayment, order, and refund records then remain separate regulated or operational ledgers linked by stable identifiers.

## Slide 14: API surface: personalized commerce in, auditable events out.

Appendix.

The consumer APIs personalize home, product listing, affordability, checkout, and the unified timeline.

Merchant APIs support catalogue upsert, affordability quotes, merchant checkout sessions, refunds, and operational webhooks.

All create or confirm endpoints require an idempotency key. Quotes are versioned and expire. Webhooks are signed and replay-safe. The merchant sees super.money checkout semantics rather than lender-specific APIs.

## Slide 15: Risk guardrails are product requirements, not post-launch controls.

Appendix.

The initial product should control credit loss through small limits, meaningful down payments, short tenors, category restrictions, and repayment-led limit growth.

Return abuse is managed at user, seller, and SKU level. Seller quality requires KYB, risk tiers, SLA monitoring, and settlement controls.

Regulatory trust requires lender disclosure, a versioned KFS, stored consent, clear separation of order and loan contracts, and transparent refund adjustment.

The user-facing mitigation for complexity is one plain-language timeline across purchase, fulfilment, refund, and repayment.

