"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  ExternalLink,
  Gift,
  Headphones,
  Heart,
  Home,
  House,
  Info,
  LampDesk,
  MapPin,
  PackageCheck,
  QrCode,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  UserRound,
  WalletCards,
  Wifi,
  Zap,
} from "lucide-react";
import {
  categories,
  formatINR,
  paymentPlansFor,
  products,
} from "./data";

const categoryIcons = {
  Sparkles,
  Smartphone,
  House,
  Headphones,
  LampDesk,
};

const narrativeByScreen = {
  home: {
    step: "01 / Activate intent",
    problem:
      "UPI creates habit, but a generic shopping tab would not create a reason to browse.",
    decision:
      "Show a pre-qualified spending limit and merchandise by what the user can afford today.",
    metric: "Commerce entry CTR · eligible-user activation",
    impact: "Turns payment frequency into qualified commerce demand.",
  },
  shop: {
    step: "02 / Make discovery affordable",
    problem:
      "A price-first catalogue ignores the user’s cash-flow constraint and credit eligibility.",
    decision:
      "Rank financeable SKUs and show the upfront amount directly on every product card.",
    metric: "PDP open rate · quote-view rate",
    impact: "Improves relevant discovery without subsidising every user.",
  },
  product: {
    step: "03 / Build credit trust",
    problem:
      "Credit terms shown only at checkout create surprise, abandonment, and regulatory risk.",
    decision:
      "Make the repayment plan, lender, fees, return rule, and KFS visible before purchase.",
    metric: "Plan selection · KFS acceptance",
    impact: "Raises informed conversion and reduces avoidable support.",
  },
  checkout: {
    step: "04 / Orchestrate one checkout",
    problem:
      "Payment, mandate, loan booking, and order placement can fail independently.",
    decision:
      "Use one reviewed plan and a single confirmation to coordinate all four systems.",
    metric: "Mandate success · order placement success",
    impact: "Reduces cart abandonment and failed-loan operations.",
  },
  success: {
    step: "05 / Unify the obligation",
    problem:
      "Users should not have to reconcile a seller order with a separate lender account.",
    decision:
      "Present order, loan, down payment, delivery, and dues on one timeline.",
    metric: "Support contacts/order · on-time repayment",
    impact: "Protects trust, repayment quality, and repeat purchase.",
  },
  credit: {
    step: "06 / Earn repeat usage",
    problem:
      "A credit product is incomplete if repayment is hidden until a collection reminder.",
    decision:
      "Keep available limit, active plans, due dates, AutoPay, and early repayment together.",
    metric: "AutoPay success · 7+ DPD · repeat rate",
    impact: "Makes responsible repayment the engine for higher limits.",
  },
  profile: {
    step: "Trust controls",
    problem:
      "Users need a clear place to control mandates, support, addresses, and consent.",
    decision:
      "Centralise account and credit controls without exposing internal partner complexity.",
    metric: "Self-serve resolution · mandate disputes",
    impact: "Contains operations cost as financed volume scales.",
  },
};

function IconButton({ label, children, className = "", onClick, type = "button" }) {
  return (
    <button
      className={`icon-button ${className}`}
      onClick={onClick}
      title={label}
      aria-label={label}
      type={type}
    >
      {children}
    </button>
  );
}

function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`} aria-label="super.money">
      <span className="brand-mark">s</span>
      {!compact && (
        <span className="brand-name">
          super<span>.money</span>
        </span>
      )}
    </div>
  );
}

function ProductArt({ product, className = "" }) {
  return (
    <div
      className={`product-art product-art-${product.image} ${className}`}
      role="img"
      aria-label={product.name}
    />
  );
}

function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <span>9:41</span>
      <div>
        <span className="signal-bars">
          <i />
          <i />
          <i />
          <i />
        </span>
        <Wifi size={14} strokeWidth={2.4} />
        <span className="battery"><i /></span>
      </div>
    </div>
  );
}

function StoryRail({ screen }) {
  const story =
    narrativeByScreen[screen] ||
    narrativeByScreen[screen === "order" ? "success" : "home"];

  return (
    <aside className="story-rail">
      <div className="story-top">
        <div>
          <p className="story-kicker">Affordable Commerce · Concept</p>
          <h1>Credit should shape the catalogue, not interrupt checkout.</h1>
        </div>
        <a className="seller-link" href="/seller/">
          Seller portal <ExternalLink size={15} />
        </a>
      </div>

      <div className="story-current">
        <p className="story-step">{story.step}</p>
        <h2>{story.problem}</h2>
        <div className="story-line">
          <span>Product decision</span>
          <p>{story.decision}</p>
        </div>
        <div className="story-line">
          <span>Measure</span>
          <p>{story.metric}</p>
        </div>
        <div className="story-line">
          <span>Business effect</span>
          <p>{story.impact}</p>
        </div>
      </div>

      <div className="scope-boundary">
        <p>MVP boundary</p>
        <div>
          <span>4 categories</span>
          <span>Pay in 3 + UPI</span>
          <span>Partner fulfilment</span>
          <span>No inventory ownership</span>
        </div>
      </div>
    </aside>
  );
}

function Header({ onSearch, onProfile }) {
  return (
    <header className="mobile-header">
      <Brand />
      <div className="header-actions">
        <IconButton label="Search" onClick={onSearch}>
          <Search size={20} />
        </IconButton>
        <IconButton label="Notifications">
          <Bell size={20} />
          <span className="notification-dot" />
        </IconButton>
        <button className="avatar-button" onClick={onProfile} aria-label="Open profile">
          AM
        </button>
      </div>
    </header>
  );
}

function LimitCard({ onShop }) {
  return (
    <section className="limit-card">
      <div className="limit-topline">
        <span>Shopping limit</span>
        <span className="preapproved"><BadgeCheck size={14} /> Pre-approved</span>
      </div>
      <div className="limit-amount">₹12,000</div>
      <p>Available to spend with PayLater</p>
      <div className="limit-footer">
        <button className="light-button" onClick={onShop}>
          Shop your limit <ChevronRight size={17} />
        </button>
        <div className="limit-note">
          <ShieldCheck size={17} />
          <span>No joining fee</span>
        </div>
      </div>
    </section>
  );
}

function QuickActions({ onShop, onCredit }) {
  const actions = [
    { label: "Scan & pay", icon: QrCode, action: () => {} },
    { label: "Shop", icon: ShoppingBag, action: onShop },
    { label: "Pay dues", icon: CalendarDays, action: onCredit },
    { label: "Rewards", icon: Gift, action: () => {} },
  ];

  return (
    <section className="quick-actions" aria-label="Quick actions">
      {actions.map(({ label, icon: ActionIcon, action }) => (
        <button key={label} onClick={action}>
          <span><ActionIcon size={21} /></span>
          {label}
        </button>
      ))}
    </section>
  );
}

function CategoryRow({ active, onChange }) {
  return (
    <div className="category-row" aria-label="Product categories">
      {categories.map((category) => {
        const CategoryIcon = categoryIcons[category.icon];
        return (
          <button
            key={category.name}
            className={active === category.name ? "active" : ""}
            onClick={() => onChange(category.name)}
          >
            <span><CategoryIcon size={20} /></span>
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

function ProductCard({ product, onOpen, wide = false }) {
  return (
    <button className={`product-card ${wide ? "product-card-wide" : ""}`} onClick={() => onOpen(product)}>
      <div className="product-card-art">
        <ProductArt product={product} />
        <span className="cashback-chip">₹{product.cashback} back</span>
      </div>
      <div className="product-card-copy">
        <p className="seller-name">{product.sellerShort}</p>
        <h3>{product.name}</h3>
        <div className="affordability-line">
          <strong>{formatINR(product.upfront)}</strong> today
        </div>
        <p className="installment-copy">+ {formatINR(product.installment)} × 2 · 0 fees</p>
        <div className="delivery-line">
          <PackageCheck size={14} />
          <span>Delivery {product.delivery.replace(/^[A-Za-z]+, /, "")}</span>
        </div>
      </div>
    </button>
  );
}

function SectionTitle({ title, action, onAction }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action && (
        <button onClick={onAction}>
          {action} <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

function HomeScreen({ onNavigate, onOpenProduct }) {
  return (
    <div className="screen mobile-scroll">
      <Header
        onSearch={() => onNavigate("shop")}
        onProfile={() => onNavigate("profile")}
      />
      <main className="home-content">
        <p className="greeting">Good afternoon, Asha</p>
        <LimitCard onShop={() => onNavigate("shop")} />
        <QuickActions
          onShop={() => onNavigate("shop")}
          onCredit={() => onNavigate("credit")}
        />

        <section className="commerce-entry">
          <div>
            <span><Sparkles size={15} /> For your cash flow</span>
            <h2>Useful upgrades.<br />One-third today.</h2>
            <p>Plans are based on your ₹12,000 available limit.</p>
          </div>
          <button onClick={() => onOpenProduct(products[1])}>
            Explore <ChevronRight size={16} />
          </button>
          <ProductArt product={products[1]} className="commerce-entry-art" />
        </section>

        <SectionTitle
          title="You can buy today"
          action="See all"
          onAction={() => onNavigate("shop")}
        />
        <div className="horizontal-products">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} onOpen={onOpenProduct} />
          ))}
        </div>

        <section className="credit-builder-strip" onClick={() => onNavigate("credit")}>
          <div className="strip-icon"><Zap size={20} /></div>
          <div>
            <strong>Pay on time, unlock more</strong>
            <p>Your next limit review is 12 Aug</p>
          </div>
          <ChevronRight size={18} />
        </section>
      </main>
    </div>
  );
}

function ShopScreen({ onOpenProduct, onProfile }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("For you");
  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          category === "For you" || product.category === category;
        const matchesQuery = `${product.name} ${product.category} ${product.seller}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query],
  );

  return (
    <div className="screen mobile-scroll shop-screen">
      <Header onSearch={() => {}} onProfile={onProfile} />
      <main className="shop-content">
        <div className="shop-heading">
          <div>
            <p className="eyebrow">Shop within ₹12,000</p>
            <h1>What fits today</h1>
          </div>
          <span className="eligible-pill"><BadgeCheck size={14} /> Eligible</span>
        </div>
        <label className="search-box">
          <Search size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or categories"
            aria-label="Search products"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">×</button>
          )}
        </label>
        <CategoryRow active={category} onChange={setCategory} />

        <section className="filter-summary">
          <span>{filtered.length} financeable products</span>
          <button>Pay in 3 <ChevronDown size={15} /></button>
        </section>

        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpenProduct}
              wide
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">
            <Search size={28} />
            <h2>No products found</h2>
            <p>Try a different product or category.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function ProductScreen({
  product,
  selectedPlan,
  onSelectPlan,
  onBack,
  onCheckout,
  favorite,
  onFavorite,
  onToast,
}) {
  const plans = paymentPlansFor(product);
  const plan = plans.find((item) => item.id === selectedPlan) || plans[0];

  return (
    <div className="screen product-screen mobile-scroll">
      <header className="flow-header overlay-header">
        <IconButton label="Go back" onClick={onBack}><ArrowLeft size={21} /></IconButton>
        <div>
          <IconButton label="Share" onClick={() => onToast("Product link ready to share")}>
            <Share2 size={20} />
          </IconButton>
          <IconButton
            label={favorite ? "Remove from saved" : "Save product"}
            onClick={onFavorite}
            className={favorite ? "favorite" : ""}
          >
            <Heart size={20} fill={favorite ? "currentColor" : "none"} />
          </IconButton>
        </div>
      </header>

      <ProductArt product={product} className="product-hero-art" />
      <main className="product-detail">
        <div className="product-badges">
          <span className="positive-badge"><BadgeCheck size={14} /> PayLater eligible</span>
          <span>{product.returnPolicy}</span>
        </div>
        <p className="seller-name">{product.seller}</p>
        <h1>{product.name}</h1>
        <div className="rating-row">
          <span><Star size={14} fill="currentColor" /> {product.rating}</span>
          <button>{product.reviews} ratings</button>
        </div>
        <div className="price-row">
          <strong>{formatINR(product.price)}</strong>
          <s>{formatINR(product.mrp)}</s>
          <span>{Math.round((1 - product.price / product.mrp) * 100)}% off</span>
        </div>

        <section className="affordability-panel">
          <div className="affordability-heading">
            <div>
              <p>Your approved options</p>
              <h2>Choose how you pay</h2>
            </div>
            <span>₹12,000 limit</span>
          </div>
          <div className="plan-selector">
            {plans.map((option) => (
              <button
                key={option.id}
                className={selectedPlan === option.id ? "selected" : ""}
                onClick={() => onSelectPlan(option.id)}
              >
                <span className="radio-dot"><i /></span>
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.eyebrow}</small>
                </span>
                <b>
                  {option.id === "pay3" && `${formatINR(option.dueToday)} today`}
                  {option.id === "card" && `${formatINR(option.installment)} / mo`}
                  {option.id === "upi" && formatINR(option.total)}
                </b>
              </button>
            ))}
          </div>

          {plan.id !== "upi" && (
            <div className="mini-schedule">
              <div>
                <span className="schedule-dot active" />
                <strong>{formatINR(plan.dueToday)}</strong>
                <small>Today</small>
              </div>
              <i />
              <div>
                <span className="schedule-dot" />
                <strong>{formatINR(plan.installment)}</strong>
                <small>25 Aug</small>
              </div>
              <i />
              <div>
                <span className="schedule-dot" />
                <strong>{formatINR(plan.installment)}</strong>
                <small>25 Sep</small>
              </div>
            </div>
          )}
          <div className="fee-row">
            <span>Total fees</span>
            <strong>₹0</strong>
          </div>
          {plan.lender && (
            <div className="lender-note">
              <ShieldCheck size={17} />
              <p>Credit by {plan.lender}. <button>View KFS</button></p>
            </div>
          )}
        </section>

        <section className="delivery-panel">
          <MapPin size={20} />
          <div>
            <p>Deliver to Asha · 560102</p>
            <strong>Free delivery by {product.delivery}</strong>
          </div>
          <button>Change</button>
        </section>

        <section className="detail-list">
          <button>
            <span><PackageCheck size={19} /> Delivery & returns</span>
            <ChevronRight size={18} />
          </button>
          <button>
            <span><CircleHelp size={19} /> What happens after a refund?</span>
            <ChevronRight size={18} />
          </button>
        </section>
      </main>

      <footer className="sticky-buy-bar">
        <div>
          <small>Pay today</small>
          <strong>{formatINR(plan.dueToday)}</strong>
        </div>
        <button onClick={onCheckout}>
          Continue <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
}

function CheckoutScreen({
  product,
  selectedPlan,
  onSelectPlan,
  onBack,
  onComplete,
}) {
  const plans = paymentPlansFor(product);
  const plan = plans.find((item) => item.id === selectedPlan) || plans[0];
  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);

  const confirm = () => {
    if (!agreed || processing) return;
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      onComplete();
    }, 1100);
  };

  return (
    <div className="screen checkout-screen mobile-scroll">
      <header className="flow-header">
        <IconButton label="Go back" onClick={onBack}><ArrowLeft size={21} /></IconButton>
        <h1>Review purchase</h1>
        <IconButton label="Help"><CircleHelp size={20} /></IconButton>
      </header>
      <div className="checkout-progress">
        <span className="done"><Check size={13} /></span><i />
        <span className="active">2</span><i />
        <span>3</span>
      </div>

      <main className="checkout-content">
        <section className="checkout-product">
          <ProductArt product={product} />
          <div>
            <p>{product.seller}</p>
            <h2>{product.name}</h2>
            <strong>{formatINR(product.price)}</strong>
            <span>Delivery by {product.delivery}</span>
          </div>
        </section>

        <section className="checkout-section">
          <div className="checkout-section-title">
            <span><MapPin size={18} /></span>
            <div>
              <p>Delivering to</p>
              <h2>Home · Asha Mehta</h2>
            </div>
            <button>Change</button>
          </div>
          <p className="address-copy">31, HSR Layout, Sector 2, Bengaluru 560102</p>
        </section>

        <section className="checkout-section">
          <div className="checkout-section-title">
            <span><WalletCards size={18} /></span>
            <div>
              <p>Payment plan</p>
              <h2>Choose an approved option</h2>
            </div>
          </div>
          <div className="checkout-plans">
            {plans.map((option) => (
              <button
                key={option.id}
                className={selectedPlan === option.id ? "selected" : ""}
                onClick={() => onSelectPlan(option.id)}
              >
                <span className="radio-dot"><i /></span>
                <div>
                  <strong>{option.label}</strong>
                  <small>
                    {option.id === "pay3" && `${formatINR(option.dueToday)} now + 2 payments`}
                    {option.id === "card" && `6 × ${formatINR(option.installment)}`}
                    {option.id === "upi" && "Pay in full from bank"}
                  </small>
                </div>
                <b>{option.fees === 0 ? "₹0 fee" : formatINR(option.fees)}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="checkout-section repayment-review">
          <div className="checkout-section-title">
            <span><CalendarDays size={18} /></span>
            <div>
              <p>Your commitment</p>
              <h2>{plan.id === "upi" ? "Full payment" : "Repayment schedule"}</h2>
            </div>
          </div>
          <div className="summary-lines">
            <div><span>Due today</span><strong>{formatINR(plan.dueToday)}</strong></div>
            {plan.id !== "upi" && (
              <>
                <div><span>25 Aug 2026</span><strong>{formatINR(plan.installment)}</strong></div>
                <div><span>25 Sep 2026</span><strong>{formatINR(plan.installment)}</strong></div>
              </>
            )}
            <div className="total"><span>Total payable</span><strong>{formatINR(plan.total)}</strong></div>
          </div>
          {plan.lender && (
            <p className="regulated-copy">
              Lender: {plan.lender} · APR 0% · Processing fee ₹0
            </p>
          )}
        </section>

        <section className="autopay-note">
          <ShieldCheck size={19} />
          <div>
            <strong>AutoPay from HDFC Bank ··4821</strong>
            <p>We’ll remind you 3 days before every debit.</p>
          </div>
        </section>

        <label className="consent-row">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
          />
          <span className="custom-check"><Check size={13} /></span>
          <span>
            I have reviewed the repayment schedule and agree to the
            <button type="button"> Key Fact Statement</button> and loan terms.
          </span>
        </label>
      </main>

      <footer className="confirm-bar">
        <div>
          <small>Pay today</small>
          <strong>{formatINR(plan.dueToday)}</strong>
        </div>
        <button disabled={!agreed || processing} onClick={confirm}>
          {processing ? <span className="button-spinner" /> : <ShieldCheck size={18} />}
          {processing ? "Securing order…" : "Confirm & pay"}
        </button>
      </footer>
    </div>
  );
}

function SuccessScreen({ product, planId, onTrack, onHome }) {
  const plan = paymentPlansFor(product).find((item) => item.id === planId);
  return (
    <div className="screen success-screen mobile-scroll">
      <main>
        <div className="success-mark"><Check size={34} strokeWidth={2.4} /></div>
        <p className="eyebrow">Purchase complete</p>
        <h1>It’s yours, Asha.</h1>
        <p className="success-subcopy">
          Your order and {plan.id === "upi" ? "payment" : "PayLater plan"} are confirmed.
        </p>

        <section className="success-order">
          <ProductArt product={product} />
          <div>
            <p>{product.name}</p>
            <strong>{formatINR(product.price)}</strong>
            <span>Arrives {product.delivery}</span>
          </div>
        </section>

        <section className="reference-grid">
          <div><span>Order ID</span><strong>SM-28491</strong></div>
          <div><span>{plan.id === "upi" ? "Payment ID" : "Loan ID"}</span><strong>{plan.id === "upi" ? "UPI-7821" : "DMI-60184"}</strong></div>
        </section>

        <section className="unified-timeline">
          <h2>One timeline, start to finish</h2>
          <div className="timeline-item complete">
            <span><Check size={14} /></span>
            <div><strong>Order placed</strong><small>Today · 2:42 PM</small></div>
          </div>
          {plan.id !== "upi" && (
            <div className="timeline-item complete">
              <span><Check size={14} /></span>
              <div><strong>PayLater activated</strong><small>{formatINR(plan.dueToday)} paid · ₹0 fees</small></div>
            </div>
          )}
          <div className="timeline-item next">
            <span><PackageCheck size={15} /></span>
            <div><strong>Seller is preparing your order</strong><small>Expected to ship tomorrow</small></div>
          </div>
          {plan.id !== "upi" && (
            <div className="timeline-item">
              <span><CalendarDays size={15} /></span>
              <div><strong>{formatINR(plan.installment)} due</strong><small>25 Aug · AutoPay on</small></div>
            </div>
          )}
        </section>

        <button className="primary-full" onClick={onTrack}>
          Track order & repayments <ChevronRight size={18} />
        </button>
        <button className="secondary-full" onClick={onHome}>Back to home</button>
      </main>
    </div>
  );
}

function CreditScreen({ hasOrdered, onShop, onToast }) {
  return (
    <div className="screen mobile-scroll credit-screen">
      <Header onSearch={() => {}} onProfile={() => {}} />
      <main className="credit-content">
        <p className="eyebrow">Your credit</p>
        <h1>₹12,000 available</h1>
        <div className="utilisation-track"><i style={{ width: hasOrdered ? "42%" : "18%" }} /></div>
        <div className="utilisation-labels">
          <span>{hasOrdered ? "₹8,997" : "₹2,154"} active</span>
          <span>₹20,000 total limit</span>
        </div>

        <section className="credit-health">
          <div className="health-score"><span>92</span><small>Excellent</small></div>
          <div>
            <p>Credit health</p>
            <h2>You’re on track</h2>
            <span>Keep AutoPay on to unlock a higher limit.</span>
          </div>
          <ChevronRight size={18} />
        </section>

        <SectionTitle title="Active plans" />
        <section className="active-plan">
          <div className="active-plan-top">
            <ProductArt product={hasOrdered ? products[0] : products[2]} />
            <div>
              <p>{hasOrdered ? "Nova X1 5G" : "Pulse Buds 2"}</p>
              <h2>{hasOrdered ? "₹2,999" : "₹833"} due 25 Aug</h2>
              <span>AutoPay · HDFC ··4821</span>
            </div>
            <span className="on-track">On track</span>
          </div>
          <div className="repayment-dots">
            <div className="paid"><span><Check size={13} /></span><p>Today</p><small>Paid</small></div>
            <i />
            <div><span>2</span><p>25 Aug</p><small>{hasOrdered ? "₹2,999" : "₹833"}</small></div>
            <i />
            <div><span>3</span><p>25 Sep</p><small>{hasOrdered ? "₹2,999" : "₹833"}</small></div>
          </div>
          <button onClick={() => onToast("Early repayment options opened")}>
            Pay early <ChevronRight size={16} />
          </button>
        </section>

        <section className="limit-growth">
          <Sparkles size={20} />
          <div>
            <strong>₹5,000 more could unlock next month</strong>
            <p>Complete 2 repayments on time.</p>
          </div>
        </section>

        <button className="primary-full" onClick={onShop}>
          Shop with available limit <ShoppingBag size={18} />
        </button>
      </main>
    </div>
  );
}

function ProfileScreen({ onToast }) {
  const rows = [
    { icon: MapPin, label: "Addresses", value: "2 saved" },
    { icon: CreditCard, label: "Payment methods", value: "HDFC ··4821" },
    { icon: ShieldCheck, label: "AutoPay mandates", value: "1 active" },
    { icon: PackageCheck, label: "Orders & returns", value: "" },
    { icon: CircleHelp, label: "Help & support", value: "24 × 7" },
  ];
  return (
    <div className="screen mobile-scroll profile-screen">
      <Header onSearch={() => {}} onProfile={() => {}} />
      <main>
        <div className="profile-identity">
          <div>AM</div>
          <h1>Asha Mehta</h1>
          <p>asha.m@example.com · +91 98••• ••214</p>
          <span><BadgeCheck size={14} /> KYC verified</span>
        </div>
        <section className="profile-list">
          {rows.map(({ icon: RowIcon, label, value }) => (
            <button key={label} onClick={() => onToast(`${label} opened`)}>
              <span><RowIcon size={19} /></span>
              <strong>{label}</strong>
              <small>{value}</small>
              <ChevronRight size={18} />
            </button>
          ))}
        </section>
        <div className="regulated-footer">
          <ShieldCheck size={18} />
          <p>Credit is offered by regulated lending partners. super.money is a loan service provider.</p>
        </div>
      </main>
    </div>
  );
}

function BottomNav({ active, onNavigate }) {
  const items = [
    { id: "home", label: "Home", icon: Home },
    { id: "shop", label: "Shop", icon: ShoppingBag },
    { id: "credit", label: "Credit", icon: WalletCards },
    { id: "profile", label: "You", icon: UserRound },
  ];
  return (
    <nav className="bottom-nav">
      {items.map(({ id, label, icon: NavIcon }) => (
        <button
          key={id}
          className={active === id ? "active" : ""}
          onClick={() => onNavigate(id)}
        >
          <NavIcon size={21} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default function ConsumerApp() {
  const [screen, setScreen] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedPlan, setSelectedPlan] = useState("pay3");
  const [favorites, setFavorites] = useState(new Set());
  const [toast, setToast] = useState("");
  const [hasOrdered, setHasOrdered] = useState(false);

  const navigate = (next) => {
    setScreen(next);
    document.querySelector(".phone-viewport")?.scrollTo({ top: 0 });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedPlan("pay3");
    navigate("product");
  };

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  const toggleFavorite = () => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(selectedProduct.id)) next.delete(selectedProduct.id);
      else next.add(selectedProduct.id);
      return next;
    });
  };

  const topLevel = ["home", "shop", "credit", "profile"].includes(screen);
  let content;

  if (screen === "home") {
    content = <HomeScreen onNavigate={navigate} onOpenProduct={openProduct} />;
  } else if (screen === "shop") {
    content = (
      <ShopScreen
        onOpenProduct={openProduct}
        onProfile={() => navigate("profile")}
      />
    );
  } else if (screen === "product") {
    content = (
      <ProductScreen
        product={selectedProduct}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        onBack={() => navigate("shop")}
        onCheckout={() => navigate("checkout")}
        favorite={favorites.has(selectedProduct.id)}
        onFavorite={toggleFavorite}
        onToast={showToast}
      />
    );
  } else if (screen === "checkout") {
    content = (
      <CheckoutScreen
        product={selectedProduct}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        onBack={() => navigate("product")}
        onComplete={() => {
          setHasOrdered(true);
          navigate("success");
        }}
      />
    );
  } else if (screen === "success") {
    content = (
      <SuccessScreen
        product={selectedProduct}
        planId={selectedPlan}
        onTrack={() => navigate("credit")}
        onHome={() => navigate("home")}
      />
    );
  } else if (screen === "credit") {
    content = (
      <CreditScreen
        hasOrdered={hasOrdered}
        onShop={() => navigate("shop")}
        onToast={showToast}
      />
    );
  } else {
    content = <ProfileScreen onToast={showToast} />;
  }

  return (
    <div className="consumer-stage">
      <StoryRail screen={screen} />
      <div className="phone-wrap">
        <div className="device-top-label">
          <span>Buyer mobile app</span>
          <a href="/seller/">Open seller portal <ExternalLink size={13} /></a>
        </div>
        <div className="phone-shell">
          <div className="phone-speaker" />
          <div className="phone-viewport">
            <StatusBar />
            {content}
            {topLevel && <BottomNav active={screen} onNavigate={navigate} />}
            {toast && (
              <div className="toast" role="status">
                <Check size={16} /> {toast}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
