# Affordable Commerce Intro Video - Speaker Notes

Recommended length: 3:00

Borrower prototype: https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer

Seller prototype: https://super-money-affordable-commerce.naman884186.chatgpt.site/seller

Use slides 1-7 for the recorded introduction. Slides 8-11 are an appendix for
follow-up discussion.

## Slide 1: Affordable Commerce after credit.

0:00-0:20

Hi, I am Naman Jain. I started with the current super.money product rather than a blank page.

The app already connects payments with credit score, credit building, credit access, and a Splitstore commerce entry. My question was what comes next: how can that existing relationship become an affordability-first commerce business with repeat usage and positive contribution?

## Slide 2: One launch cohort. Three category groups.

0:20-0:45

I would launch for existing high-frequency UPI users considering a practical five-to-thirty-thousand-rupee purchase. That includes credit-underserved users, cash-flow-constrained users, and full-UPI deal seekers.

I would begin with budget phones, small appliances, and work or study devices. These categories combine real affordability need with manageable returns and available supply. The first release is one hundred to three hundred governed SKUs, so product-market-fit evidence is not hidden by marketplace breadth.

## Slide 3: Affordability starts discovery and governs the bag.

0:45-1:15

The borrower experience begins with affordability, not a finance option discovered at the last step.

Splitstore lets Asha browse by what is due today. The product page exposes price, plan, lender, fees, KFS, dates, and full-UPI fallback. The new bag is the AOV decision surface: it shows remaining limit and one relevant add-on with the exact repayment change. Credit Health remains under Profile and supports source, freshness, factors, actions, delay, and correction without promising approval.

## Slide 4: One merchant OS. Two distribution channels.

1:15-1:40

The supply side is an affordability operating system.

Sellers complete KYB, settlement, catalogue, and webhook checks; manage SKU financeability; fund measured offers; fulfil one order state; and reconcile payout. The same platform supports two channels: Splitstore inside super.money and a white-label option on a merchant site. The merchant creates one signed session and receives approved offers, final order status, refunds, and settlement webhooks without integrating each lender.

## Slide 5: Repeat buyers lead. Contribution decides scale.

1:40-2:10

I would use monthly repeat commerce buyers as the product North Star because one subsidised purchase does not prove a habit.

Contribution is the scale gate. In the illustrative hundred-crore annualised case, one-point-five million targeted monthly exposures produce ten-thousand-eight-hundred orders at a seventy-seven-hundred-rupee AOV. The example order contributes about seventy rupees after rewards, payments, support, fraud, refunds, and platform risk exposure.

The first experiment compares a price-first PDP with due-today affordability. The primary metric is PDP-to-bag, with contribution, returns, and thirty-plus DPD as guardrails.

## Slide 6: One checkout coordinates independent systems.

2:10-2:35

The simple experience depends on one difficult system decision.

Catalogue and Credit Health feed separate eligibility and offer services. The checkout orchestrator then coordinates payment, mandate, lender, and order systems.

For example, if the loan books and order creation fails, the session cannot show success. It enters a compensation state, requests loan cancellation or reversal, and reconciliation verifies both partners. Idempotency and explicit state are required because these systems cannot share one database transaction.

## Slide 7: Six months to prove one closed loop.

2:35-3:00

I would launch this over six months.

Month one locks the user, merchant, category, P-and-L, and regulatory constraints. Month two locks prototypes and contracts. Months three and four build one reconciled commerce loop. Month five is a one-thousand-user alpha, and month six is a feature-flagged fifty-thousand-user beta with experiment holdouts.

The result is an affordability layer built on something super.money already understands about the customer: their ability to pay. The marketplace proves the engine; white-label merchant checkout expands its distribution.


# Appendix Notes

## Slide 8: Credit Health: explain, act, correct, and degrade honestly.

Appendix.

Credit Health is a complete borrower module. Consent leads to a latest-available bureau pull, an immutable dated snapshot, governed factor explanations, three safe actions, and a tracked correction service. A partner timeout keeps the last valid snapshot and never invents a score. Eligibility uses a separate approved purpose.

## Slide 9: Category and experiment decisions are explicit.

Appendix.

Category choice uses affordability need and supply readiness minus return, fraud, and operational complexity. The first experiments isolate discovery, bag AOV, down payment, and seller funding. Each treatment has contribution and credit-quality guardrails.

## Slide 10: Shared contracts connect in-app and merchant checkout.

Appendix.

The central data-model decision is to use checkout session as the join point across quote, payment, loan, order, refund, and settlement. In-app and merchant checkout share canonical offer and orchestration contracts. Every write is idempotent; quotes expire; webhooks are signed and replay-safe.

## Slide 11: Trust controls are part of the product state.

Appendix.

Compliance is represented as product and system state: purpose-bound consent, lender attribution, APR and total repayment, versioned KFS, auditable acceptance, grievance and correction, refund allocation, and data minimisation. The main launch risks are credit loss, returns, seller quality, partner outages, and misleading claims. Each has a product control and a kill switch or operating owner.

