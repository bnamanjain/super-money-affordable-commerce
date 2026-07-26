"use client";

import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  ExternalLink,
  FileSearch,
  Gift,
  Gauge,
  Headphones,
  Heart,
  History,
  Home,
  House,
  Info,
  LampDesk,
  ListChecks,
  LockKeyhole,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  QrCode,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  TriangleAlert,
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
  cart: {
    step: "04 / Grow the basket responsibly",
    problem:
      "Generic cross-sell can push the basket beyond the user’s available purchasing power.",
    decision:
      "Show the bag’s total due today, remaining limit, and only one financeable add-on.",
    metric: "PDP-to-bag · bundle attach · bag-to-checkout",
    impact: "Raises AOV while keeping affordability and repayment terms visible.",
  },
  checkout: {
    step: "05 / Orchestrate one checkout",
    problem:
      "Payment, mandate, loan booking, and order placement can fail independently.",
    decision:
      "Use one reviewed plan and a single confirmation to coordinate all four systems.",
    metric: "Mandate success · order placement success",
    impact: "Reduces cart abandonment and failed-loan operations.",
  },
  success: {
    step: "06 / Unify the obligation",
    problem:
      "Users should not have to reconcile a seller order with a separate lender account.",
    decision:
      "Present order, loan, down payment, delivery, and dues on one timeline.",
    metric: "Support contacts/order · on-time repayment",
    impact: "Protects trust, repayment quality, and repeat purchase.",
  },
  credit: {
    step: "07 / Earn repeat usage",
    problem:
      "A credit product is incomplete if repayment is hidden until a collection reminder.",
    decision:
      "Keep available limit, active plans, due dates, AutoPay, and early repayment together.",
    metric: "AutoPay success · 7+ DPD · repeat rate",
    impact: "Makes responsible repayment the engine for higher limits.",
  },
  "credit-health": {
    step: "07 / Explain credit readiness",
    problem:
      "A score without source, freshness, factors, or a correction path gives the borrower little control.",
    decision:
      "Pair the latest available bureau score with ranked explanations and three safe next actions.",
    metric: "Score retrieval · factor comprehension · action start",
    impact: "Builds trust and improves future eligibility without forcing a credit application.",
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
  const isCreditHealth = screen === "credit-health";

  return (
    <aside className="story-rail">
      <div className="story-top">
        <div>
          <p className="story-kicker">
            {isCreditHealth ? "Credit Health · Borrower sub-project" : "Affordable Commerce · Concept"}
          </p>
          <h1>
            {isCreditHealth
              ? "A credit score becomes useful when the borrower knows what to do next."
              : "Affordability should shape discovery, the bag, and checkout."}
          </h1>
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
          {isCreditHealth ? (
            <>
              <span>Borrower mobile only</span>
              <span>One bureau</span>
              <span>3 ranked actions</span>
              <span>Separate lending consent</span>
            </>
          ) : (
            <>
              <span>3 category wedges</span>
              <span>Pay in 3 + UPI</span>
              <span>Partner fulfilment</span>
              <span>No inventory ownership</span>
            </>
          )}
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
            <span><Sparkles size={15} /> Introducing splitStore</span>
            <h2>Shop now.<br />Split in 3.</h2>
            <p>Useful products matched to your ₹12,000 available limit.</p>
          </div>
          <button onClick={() => onNavigate("shop")}>
            Open store <ChevronRight size={16} />
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
  const [budget, setBudget] = useState("all");
  const budgetOptions = [
    { id: "all", label: "All plans", detail: "Within ₹12,000" },
    { id: "under-1000", label: "Under ₹1,000", detail: "due today" },
    { id: "1000-2500", label: "₹1,000–₹2,500", detail: "due today" },
    { id: "over-2500", label: "₹2,500+", detail: "due today" },
  ];
  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          category === "For you" || product.category === category;
        const matchesQuery = `${product.name} ${product.category} ${product.seller}`
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesBudget =
          budget === "all" ||
          (budget === "under-1000" && product.upfront < 1000) ||
          (budget === "1000-2500" && product.upfront >= 1000 && product.upfront <= 2500) ||
          (budget === "over-2500" && product.upfront > 2500);
        return matchesCategory && matchesQuery && matchesBudget;
      }),
    [budget, category, query],
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

        <section className="budget-discovery">
          <div>
            <p>Shop by amount due today</p>
            <span>Plans shown are already within your available limit.</span>
          </div>
          <div className="budget-options" role="group" aria-label="Amount due today">
            {budgetOptions.map((option) => (
              <button
                key={option.id}
                className={budget === option.id ? "active" : ""}
                onClick={() => setBudget(option.id)}
              >
                <strong>{option.label}</strong>
                <small>{option.detail}</small>
              </button>
            ))}
          </div>
        </section>

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
          Add to bag <ShoppingCart size={18} />
        </button>
      </footer>
    </div>
  );
}

function combineCartProducts(items) {
  const primary = items[0];
  if (items.length === 1) return primary;

  return {
    ...primary,
    id: items.map((item) => item.id).join("+"),
    name: `${primary.name} + ${items.length - 1} item`,
    seller: "Approved Splitstore sellers",
    price: items.reduce((sum, item) => sum + item.price, 0),
    mrp: items.reduce((sum, item) => sum + item.mrp, 0),
    upfront: items.reduce((sum, item) => sum + item.upfront, 0),
    installment: items.reduce((sum, item) => sum + item.installment, 0),
    cashback: items.reduce((sum, item) => sum + item.cashback, 0),
  };
}

function CartScreen({
  product,
  addOn,
  includesAddOn,
  onToggleAddOn,
  selectedPlan,
  onBack,
  onCheckout,
}) {
  const items = includesAddOn ? [product, addOn] : [product];
  const cartProduct = combineCartProducts(items);
  const plan =
    paymentPlansFor(cartProduct).find((item) => item.id === selectedPlan) ||
    paymentPlansFor(cartProduct)[0];
  const remainingLimit = 12000 - cartProduct.price;

  return (
    <div className="screen cart-screen mobile-scroll">
      <header className="flow-header">
        <IconButton label="Go back" onClick={onBack}><ArrowLeft size={21} /></IconButton>
        <h1>Your bag</h1>
        <span className="bag-count">{items.length}</span>
      </header>
      <div className="checkout-progress">
        <span className="active">1</span><i />
        <span>2</span><i />
        <span>3</span>
      </div>

      <main className="cart-content">
        <section className="cart-limit-summary">
          <div>
            <p>Available shopping limit</p>
            <strong>{formatINR(12000)}</strong>
          </div>
          <div>
            <p>Left after this bag</p>
            <strong>{formatINR(remainingLimit)}</strong>
          </div>
          <i><b style={{ width: `${Math.min(100, (cartProduct.price / 12000) * 100)}%` }} /></i>
          <small>Final eligibility is checked again before confirmation.</small>
        </section>

        <section className="cart-items" aria-label="Bag items">
          {items.map((item, index) => (
            <article key={item.id}>
              <ProductArt product={item} />
              <div>
                <p>{item.sellerShort}</p>
                <h2>{item.name}</h2>
                <strong>{formatINR(item.upfront)} today</strong>
                <span>+ {formatINR(item.installment)} × 2 · ₹0 fees</span>
              </div>
              {index > 0 && (
                <IconButton label={`Remove ${item.name}`} onClick={onToggleAddOn}>
                  <Minus size={17} />
                </IconButton>
              )}
            </article>
          ))}
        </section>

        {!includesAddOn && (
          <section className="affordable-bundle">
            <div className="bundle-heading">
              <span><Plus size={18} /></span>
              <div>
                <p>Fits your remaining limit</p>
                <h2>Complete the setup</h2>
              </div>
            </div>
            <div className="bundle-product">
              <ProductArt product={addOn} />
              <div>
                <strong>{addOn.name}</strong>
                <span>{formatINR(addOn.price)} total</span>
                <b>Add for {formatINR(addOn.upfront)} today</b>
              </div>
              <button
                onClick={onToggleAddOn}
                aria-label={`Add ${addOn.name} for ${formatINR(addOn.upfront)} today`}
              >
                Add
              </button>
            </div>
            <p>
              This suggestion is inside your current limit. Adding it changes every
              repayment from {formatINR(product.installment)} to {formatINR(cartProduct.installment + addOn.installment)}.
            </p>
          </section>
        )}

        <section className="bag-totals">
          <h2>Bag and plan summary</h2>
          <div><span>Items total</span><strong>{formatINR(cartProduct.price)}</strong></div>
          <div><span>Due today</span><strong>{formatINR(plan.dueToday)}</strong></div>
          {plan.id !== "upi" && (
            <div><span>Two later payments</span><strong>{formatINR(plan.installment)} each</strong></div>
          )}
          <div className="bag-total-line"><span>Total payable</span><strong>{formatINR(plan.total)}</strong></div>
        </section>

        <section className="cart-safety-note">
          <ShieldCheck size={18} />
          <p>
            Your bureau score is one input. Affordability, lender policy, product
            eligibility, and current obligations also determine the final offer.
          </p>
        </section>
      </main>

      <footer className="sticky-buy-bar">
        <div>
          <small>Due today</small>
          <strong>{formatINR(plan.dueToday)}</strong>
        </div>
        <button onClick={onCheckout}>
          Review payment <ChevronRight size={18} />
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

const creditFactors = [
  {
    id: "payments",
    icon: CheckCircle2,
    tone: "positive",
    label: "Helping",
    title: "On-time payments are helping",
    summary: "12 of 12 reported payments were on time.",
    observed:
      "Your bureau file shows every reported payment over the last 12 months as paid on time.",
    why:
      "Payment history is an important signal because it shows whether existing obligations are being managed as agreed.",
    action:
      "Keep AutoPay active and maintain enough balance before each due date.",
    timing:
      "Lenders report on their own cycle. A payment may take several days to appear in a bureau file.",
  },
  {
    id: "utilisation",
    icon: Gauge,
    tone: "attention",
    label: "Work on this",
    title: "Credit use needs attention",
    summary: "42% of your available revolving limit was reported as used.",
    observed:
      "Your cards reported Rs. 8,400 used from Rs. 20,000 of available revolving credit.",
    why:
      "Higher reported use can indicate that less repayment capacity is available. Lenders may interpret this differently.",
    action:
      "If it fits your cash flow, reducing the reported balance by Rs. 2,400 would bring use to about 30%.",
    timing:
      "Any change appears only after your card issuer reports a new balance to the bureau.",
  },
  {
    id: "history",
    icon: History,
    tone: "neutral",
    label: "Building",
    title: "Your credit history is still young",
    summary: "Your oldest active account is 14 months old.",
    observed:
      "The oldest active account in this bureau snapshot was opened in May 2025.",
    why:
      "A longer record can give lenders more evidence about how credit has been managed over time.",
    action:
      "Keep well-managed accounts active when they still suit your needs. Avoid opening credit only to change this factor.",
    timing:
      "This factor generally develops over months rather than changing after one payment.",
  },
];

const creditActions = [
  {
    id: "balance",
    icon: Target,
    priority: "Priority 1",
    title: "Lower the reported card balance",
    detail: "Rs. 2,400 before the next statement, only if it fits your cash flow.",
    timing: "Possible update after the issuer's next bureau report",
  },
  {
    id: "autopay",
    icon: CheckCircle2,
    priority: "Protected",
    title: "Keep AutoPay active",
    detail: "Your 25 Aug repayment is already covered by AutoPay.",
    timing: "Review account balance before the due date",
  },
  {
    id: "review",
    icon: FileSearch,
    priority: "1 minute",
    title: "Review your four reported accounts",
    detail: "Flag an unfamiliar account, balance, or payment status.",
    timing: "Correction cases are tracked separately",
  },
];

function CreditHealthHeader({ title, onBack, action }) {
  return (
    <header className="flow-header credit-health-header">
      <IconButton label="Go back" onClick={onBack}>
        <ArrowLeft size={20} />
      </IconButton>
      <h1>{title}</h1>
      {action || <span className="header-spacer" aria-hidden="true" />}
    </header>
  );
}

function CreditHealthConsent({
  consented,
  onConsent,
  onBack,
  onPull,
  onNoFile,
  onToast,
}) {
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="Credit Health" onBack={onBack} />
      <main className="credit-health-content consent-content">
        <section className="credit-intro">
          <span><Gauge size={27} /></span>
          <p className="eyebrow">Your financial profile</p>
          <h1>Know where your credit stands</h1>
          <p>
            See the latest score available from the bureau, understand the main
            factors, and choose a responsible next step.
          </p>
        </section>

        <section className="credit-value-list">
          <div>
            <span><TrendingUp size={18} /></span>
            <p><strong>Latest available score</strong><small>With source, range, and freshness</small></p>
          </div>
          <div>
            <span><BookOpen size={18} /></span>
            <p><strong>Factors in plain language</strong><small>What is helping and what needs attention</small></p>
          </div>
          <div>
            <span><ListChecks size={18} /></span>
            <p><strong>A focused action plan</strong><small>Three steps based on this bureau snapshot</small></p>
          </div>
        </section>

        <section className="bureau-request-card">
          <div className="bureau-request-heading">
            <span><LockKeyhole size={18} /></span>
            <div>
              <p>View-only bureau request</p>
              <strong>TransUnion CIBIL</strong>
            </div>
          </div>
          <dl>
            <div><dt>Purpose</dt><dd>Credit Health only</dd></div>
            <div><dt>Creates an application</dt><dd>No</dd></div>
            <div><dt>Hard credit inquiry</dt><dd>No</dd></div>
          </dl>
        </section>

        <label className="credit-consent-row">
          <input
            type="checkbox"
            checked={consented}
            onChange={(event) => onConsent(event.target.checked)}
          />
          <span className="custom-check"><Check size={12} /></span>
          <span>
            I agree to super.money requesting my latest credit score and report
            factors for Credit Health and storing dated snapshots to show my
            history. This consent does not apply to a loan application.
          </span>
        </label>

        <button
          className="credit-data-link"
          onClick={() => onToast("Credit Health data-use notice opened")}
        >
          How we use and protect this data <ChevronRight size={15} />
        </button>

        <button className="primary-full" disabled={!consented} onClick={onPull}>
          Get my latest score <ChevronRight size={18} />
        </button>
        <button className="secondary-full no-file-link" onClick={onNoFile}>
          What if no score is found?
        </button>
      </main>
    </div>
  );
}

function CreditHealthLoading({ mode }) {
  const refreshing = mode === "refresh";
  return (
    <div className="screen credit-health-screen">
      <main className="score-loading">
        <div className="score-loading-mark">
          <Gauge size={31} />
          <i />
        </div>
        <p className="eyebrow">{refreshing ? "Checking for an update" : "Secure bureau request"}</p>
        <h1>{refreshing ? "Looking for newer data" : "Getting your latest score"}</h1>
        <p>
          {refreshing
            ? "We are checking whether the bureau has a newer file than 20 Jul."
            : "This usually takes a few seconds. You can safely leave after the request is accepted."}
        </p>
        <section className="pull-progress" aria-label="Credit score retrieval progress">
          <div className="complete"><span><Check size={13} /></span><p>Identity confirmed</p></div>
          <div className="active"><span><RefreshCw size={13} /></span><p>Bureau request in progress</p></div>
          <div><span>3</span><p>Preparing factors and actions</p></div>
        </section>
      </main>
    </div>
  );
}

function CreditDataDelay({ onUseSaved, onNotify }) {
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="Credit Health" onBack={onUseSaved} />
      <main className="credit-health-content credit-delay-content">
        <div className="credit-delay-mark"><Clock3 size={27} /></div>
        <p className="eyebrow">Bureau response delayed</p>
        <h1>Your saved score is still available</h1>
        <p>
          TransUnion CIBIL did not return a newer file in time. We have kept your
          last successful snapshot instead of replacing it with incomplete data.
        </p>
        <section className="saved-score-card">
          <div>
            <span>Last successful score</span>
            <strong>742 <small>Good</small></strong>
          </div>
          <dl>
            <div><dt>Retrieved</dt><dd>26 Jul · 2:05 PM</dd></div>
            <div><dt>Bureau file</dt><dd>20 Jul 2026</dd></div>
          </dl>
        </section>
        <section className="delay-explainer">
          <AlertCircle size={18} />
          <p>
            A delayed refresh does not mean your score changed. We will never
            estimate a bureau score or use a failed request as an adverse signal.
          </p>
        </section>
        <button className="primary-full" onClick={onUseSaved}>
          Use saved score <ChevronRight size={18} />
        </button>
        <button className="secondary-full" onClick={onNotify}>
          Notify me when newer data is available
        </button>
      </main>
    </div>
  );
}

function CreditScoreDashboard({
  startedActions,
  onBack,
  onRefresh,
  onFactor,
  onActions,
  onDispute,
  onLearn,
  onShop,
}) {
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader
        title="Credit Health"
        onBack={onBack}
        action={
          <IconButton label="Refresh score" onClick={onRefresh}>
            <RefreshCw size={18} />
          </IconButton>
        }
      />
      <main className="credit-health-content dashboard-content">
        <section className="score-overview">
          <div className="score-source">
            <span><BadgeCheck size={14} /> Latest available</span>
            <small>TransUnion CIBIL</small>
          </div>
          <div className="score-main">
            <div>
              <span className="score-number">742</span>
              <span className="score-band">Good</span>
            </div>
            <div className="score-change">
              <ArrowUpRight size={16} />
              <strong>18 points</strong>
              <small>since 26 Apr</small>
            </div>
          </div>
          <div className="score-scale" aria-label="Score 742 on a range from 300 to 900">
            <i><b style={{ left: "73.7%" }} /></i>
            <div><span>300</span><span>900</span></div>
          </div>
          <div className="score-freshness">
            <div><span>Retrieved</span><strong>26 Jul · 2:05 PM</strong></div>
            <div><span>Bureau file updated</span><strong>20 Jul 2026</strong></div>
          </div>
          <button onClick={onLearn}>
            How this score works <ChevronRight size={15} />
          </button>
        </section>

        <SectionTitle title="What is shaping your score" />
        <section className="factor-list">
          {creditFactors.map(({ id, icon: FactorIcon, tone, label, title, summary }) => (
            <button key={id} onClick={() => onFactor(id)}>
              <span className={`factor-icon ${tone}`}><FactorIcon size={18} /></span>
              <div>
                <small className={tone}>{label}</small>
                <strong>{title}</strong>
                <p>{summary}</p>
              </div>
              <ChevronRight size={18} />
            </button>
          ))}
        </section>

        <button className="action-plan-summary" onClick={onActions}>
          <span><Target size={20} /></span>
          <div>
            <p>Your action plan</p>
            <strong>{startedActions.size} of 3 steps underway</strong>
            <small>Start with the reported card balance</small>
          </div>
          <ChevronRight size={18} />
        </button>

        <section className="eligibility-bridge">
          <span><ShoppingBag size={18} /></span>
          <div>
            <p>Credit and shopping</p>
            <strong>Your ₹12,000 limit uses more than this score</strong>
            <small>Affordability, partner policy, current obligations, and product risk also apply.</small>
          </div>
          <button onClick={onShop}>View limit <ChevronRight size={14} /></button>
        </section>

        <button className="report-issue-entry" onClick={onDispute}>
          <AlertCircle size={17} />
          <span><strong>Something looks wrong?</strong><small>Review and report inaccurate bureau data</small></span>
          <ChevronRight size={17} />
        </button>

        <p className="score-disclaimer">
          This score is educational and does not guarantee approval. Lenders use
          their own policies and may use a different bureau or score model.
        </p>
      </main>
    </div>
  );
}

function CreditFactorDetail({ factor, onBack, onPlan, onDispute }) {
  const FactorIcon = factor.icon;
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="Score factor" onBack={onBack} />
      <main className="credit-health-content factor-detail-content">
        <section className={`factor-detail-hero ${factor.tone}`}>
          <span><FactorIcon size={25} /></span>
          <p>{factor.label}</p>
          <h1>{factor.title}</h1>
          <small>Based on the bureau file updated 20 Jul 2026</small>
        </section>

        <section className="factor-explanation">
          <div>
            <span>What we observed</span>
            <p>{factor.observed}</p>
          </div>
          <div>
            <span>Why it can matter</span>
            <p>{factor.why}</p>
          </div>
          <div>
            <span>Responsible next step</span>
            <p>{factor.action}</p>
          </div>
          <div>
            <span>When this may update</span>
            <p>{factor.timing}</p>
          </div>
        </section>

        <button className="primary-full" onClick={onPlan}>
          View my action plan <Target size={18} />
        </button>
        <button className="secondary-full" onClick={onDispute}>
          This information does not look right
        </button>
      </main>
    </div>
  );
}

function CreditActionPlan({ startedActions, onStart, onBack, onReview }) {
  const progress = Math.round((startedActions.size / creditActions.length) * 100);
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="My action plan" onBack={onBack} />
      <main className="credit-health-content action-plan-content">
        <section className="action-plan-heading">
          <p className="eyebrow">Based on your 20 Jul bureau file</p>
          <h1>Three focused next steps</h1>
          <p>Score movement and approval are never guaranteed.</p>
          <div className="action-progress">
            <i><b style={{ width: `${progress}%` }} /></i>
            <span>{startedActions.size} of 3 underway</span>
          </div>
        </section>

        <section className="credit-action-list">
          {creditActions.map(({ id, icon: ActionIcon, priority, title, detail, timing }, index) => {
            const started = startedActions.has(id);
            return (
              <article key={id} className={started ? "started" : ""}>
                <div className="action-index">{started ? <Check size={14} /> : index + 1}</div>
                <div className="action-copy">
                  <span><ActionIcon size={15} /> {priority}</span>
                  <h2>{title}</h2>
                  <p>{detail}</p>
                  <small><Clock3 size={13} /> {timing}</small>
                </div>
                {id === "review" ? (
                  <button onClick={onReview}>Review</button>
                ) : (
                  <button
                    className={started ? "action-started" : ""}
                    onClick={() => onStart(id)}
                    disabled={started}
                  >
                    {started ? "Underway" : "Start"}
                  </button>
                )}
              </article>
            );
          })}
        </section>

        <section className="action-safety-note">
          <ShieldCheck size={18} />
          <p>
            Choose actions that fit your finances. Avoid borrowing or closing an
            account solely to change a score.
          </p>
        </section>
      </main>
    </div>
  );
}

function NoScoreInfo({ onBack, onContinue }) {
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="Credit Health" onBack={onBack} />
      <main className="credit-health-content no-score-content">
        <div className="no-score-mark"><History size={28} /></div>
        <p className="eyebrow">Thin or new credit file</p>
        <h1>A bureau may not have enough history to create a score</h1>
        <p>
          This is different from having a low score. It usually means the bureau
          needs more reported account history.
        </p>
        <section>
          <div><span>1</span><p><strong>Confirm your details</strong><small>A mismatch can prevent a bureau match.</small></p></div>
          <div><span>2</span><p><strong>Build history safely</strong><small>Use a suitable account only when you need it and can repay it.</small></p></div>
          <div><span>3</span><p><strong>Pay as agreed</strong><small>Positive history develops after lenders report payments.</small></p></div>
        </section>
        <button className="primary-full" onClick={onContinue}>
          Continue to score check <ChevronRight size={18} />
        </button>
      </main>
    </div>
  );
}

function CreditDispute({
  issue,
  details,
  onIssue,
  onDetails,
  onBack,
  onSubmit,
}) {
  const issues = [
    ["unknown", "I do not recognize an account"],
    ["payment", "A payment status looks wrong"],
    ["balance", "A reported balance is incorrect"],
    ["personal", "My personal details are wrong"],
  ];
  const canSubmit = issue && details.trim().length >= 5;

  return (
    <div className="screen mobile-scroll credit-health-screen">
      <CreditHealthHeader title="Report an issue" onBack={onBack} />
      <main className="credit-health-content dispute-content">
        <section className="dispute-intro">
          <FileSearch size={23} />
          <div>
            <p className="eyebrow">Bureau file · 20 Jul 2026</p>
            <h1>What looks inaccurate?</h1>
            <span>We will track the request with the bureau or reporting lender.</span>
          </div>
        </section>

        <fieldset className="issue-options">
          <legend>Select one issue</legend>
          {issues.map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="credit-issue"
                value={value}
                checked={issue === value}
                onChange={() => onIssue(value)}
              />
              <span className="radio-dot"><i /></span>
              <strong>{label}</strong>
            </label>
          ))}
        </fieldset>

        <label className="issue-details">
          <span>Tell us what you expected to see</span>
          <textarea
            value={details}
            onChange={(event) => onDetails(event.target.value)}
            placeholder="Example: This payment was made on 23 June, before the due date."
            rows={4}
          />
          <small>Do not enter card PINs, passwords, or OTPs.</small>
        </label>

        <section className="dispute-process">
          <TriangleAlert size={18} />
          <p>
            Opening a case does not change the score immediately. The bureau or
            reporting lender must verify and update the record.
          </p>
        </section>

        <button className="primary-full" disabled={!canSubmit} onClick={onSubmit}>
          Submit correction request <ChevronRight size={18} />
        </button>
      </main>
    </div>
  );
}

function DisputeSuccess({ onDashboard }) {
  return (
    <div className="screen mobile-scroll credit-health-screen">
      <main className="credit-health-content dispute-success">
        <div className="success-mark"><Check size={30} /></div>
        <p className="eyebrow">Case CH-260726-1842</p>
        <h1>Your correction request is being tracked</h1>
        <p>
          We will share the issue with the bureau or reporting lender and notify
          you when the record changes.
        </p>
        <section className="case-timeline">
          <div className="complete"><span><Check size={13} /></span><p><strong>Request received</strong><small>26 Jul · 2:12 PM</small></p></div>
          <div className="active"><span>2</span><p><strong>Partner verification</strong><small>We will track responses here</small></p></div>
          <div><span>3</span><p><strong>Outcome and refreshed file</strong><small>Expected within the applicable 30-day process</small></p></div>
        </section>
        <button className="primary-full" onClick={onDashboard}>
          Back to Credit Health <ChevronRight size={18} />
        </button>
      </main>
    </div>
  );
}

function CreditHealthScreen({
  hasProfile,
  onProfileReady,
  onBack,
  onToast,
  onShop,
}) {
  const [view, setView] = useState(hasProfile ? "dashboard" : "consent");
  const [consented, setConsented] = useState(hasProfile);
  const [loadingMode, setLoadingMode] = useState("initial");
  const [selectedFactor, setSelectedFactor] = useState("utilisation");
  const [startedActions, setStartedActions] = useState(() => new Set(["autopay"]));
  const [issue, setIssue] = useState("");
  const [details, setDetails] = useState("");

  const pullScore = (mode = "initial") => {
    setLoadingMode(mode);
    setView("loading");
    window.setTimeout(() => {
      onProfileReady();
      if (mode === "refresh") {
        setView("delay");
      } else {
        setView("dashboard");
      }
    }, 1150);
  };

  const startAction = (id) => {
    setStartedActions((current) => new Set([...current, id]));
  };

  if (view === "loading") {
    return <CreditHealthLoading mode={loadingMode} />;
  }
  if (view === "delay") {
    return (
      <CreditDataDelay
        onUseSaved={() => setView("dashboard")}
        onNotify={() => {
          onToast("We will notify you after a successful bureau refresh");
          setView("dashboard");
        }}
      />
    );
  }
  if (view === "factor") {
    const factor = creditFactors.find((item) => item.id === selectedFactor) || creditFactors[0];
    return (
      <CreditFactorDetail
        factor={factor}
        onBack={() => setView("dashboard")}
        onPlan={() => setView("actions")}
        onDispute={() => setView("dispute")}
      />
    );
  }
  if (view === "actions") {
    return (
      <CreditActionPlan
        startedActions={startedActions}
        onStart={startAction}
        onBack={() => setView("dashboard")}
        onReview={() => setView("dispute")}
      />
    );
  }
  if (view === "no-score") {
    return (
      <NoScoreInfo
        onBack={() => setView("consent")}
        onContinue={() => setView("consent")}
      />
    );
  }
  if (view === "dispute") {
    return (
      <CreditDispute
        issue={issue}
        details={details}
        onIssue={setIssue}
        onDetails={setDetails}
        onBack={() => setView("dashboard")}
        onSubmit={() => setView("dispute-success")}
      />
    );
  }
  if (view === "dispute-success") {
    return <DisputeSuccess onDashboard={() => setView("dashboard")} />;
  }
  if (view === "consent") {
    return (
      <CreditHealthConsent
        consented={consented}
        onConsent={setConsented}
        onBack={onBack}
        onPull={() => pullScore("initial")}
        onNoFile={() => setView("no-score")}
        onToast={onToast}
      />
    );
  }
  return (
    <CreditScoreDashboard
      startedActions={startedActions}
      onBack={onBack}
      onRefresh={() => pullScore("refresh")}
      onFactor={(id) => {
        setSelectedFactor(id);
        setView("factor");
      }}
      onActions={() => setView("actions")}
      onDispute={() => setView("dispute")}
      onLearn={() => onToast("Credit score education opened")}
      onShop={onShop}
    />
  );
}

function CreditScreen({
  hasOrdered,
  hasCreditProfile,
  onCreditHealth,
  onShop,
  onToast,
}) {
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

        <button
          className="credit-health"
          onClick={onCreditHealth}
          aria-label="Open Credit Health"
        >
          <div className={`health-score ${hasCreditProfile ? "" : "health-score-empty"}`}>
            {hasCreditProfile ? (
              <><span>742</span><small>Good</small></>
            ) : (
              <Gauge size={24} />
            )}
          </div>
          <div>
            <p>{hasCreditProfile ? "Latest bureau score" : "Credit health"}</p>
            <h2>{hasCreditProfile ? "Your score is Good" : "Know what shapes your score"}</h2>
            <span>
              {hasCreditProfile
                ? "Updated today · 3-step action plan"
                : "Latest score, clear factors, responsible next steps"}
            </span>
          </div>
          <ChevronRight size={18} />
        </button>

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

function ProfileScreen({
  hasCreditProfile,
  onCreditHealth,
  onToast,
}) {
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
        <h2 className="profile-section-title">Credit centre</h2>
        <section className="profile-list profile-credit-centre">
          <button onClick={onCreditHealth}>
            <span><Gauge size={19} /></span>
            <strong>My credit score</strong>
            <small>{hasCreditProfile ? "742 · Good" : "Check now"}</small>
            <ChevronRight size={18} />
          </button>
        </section>
        <h2 className="profile-section-title settings-title">Settings and help</h2>
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
  const [hasCreditProfile, setHasCreditProfile] = useState(false);
  const [creditHealthOrigin, setCreditHealthOrigin] = useState("profile");
  const [includesAddOn, setIncludesAddOn] = useState(false);

  const navigate = (next) => {
    setScreen(next);
    document.querySelector(".phone-viewport")?.scrollTo({ top: 0 });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedPlan("pay3");
    setIncludesAddOn(false);
    navigate("product");
  };

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  const openCreditHealth = (origin) => {
    setCreditHealthOrigin(origin);
    navigate("credit-health");
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
  const addOn = selectedProduct.id === "pulse-buds" ? products[3] : products[2];
  const cartItems = includesAddOn ? [selectedProduct, addOn] : [selectedProduct];
  const checkoutProduct = combineCartProducts(cartItems);
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
        onCheckout={() => navigate("cart")}
        favorite={favorites.has(selectedProduct.id)}
        onFavorite={toggleFavorite}
        onToast={showToast}
      />
    );
  } else if (screen === "cart") {
    content = (
      <CartScreen
        product={selectedProduct}
        addOn={addOn}
        includesAddOn={includesAddOn}
        onToggleAddOn={() => setIncludesAddOn((current) => !current)}
        selectedPlan={selectedPlan}
        onBack={() => navigate("product")}
        onCheckout={() => navigate("checkout")}
      />
    );
  } else if (screen === "checkout") {
    content = (
      <CheckoutScreen
        product={checkoutProduct}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        onBack={() => navigate("cart")}
        onComplete={() => {
          setHasOrdered(true);
          navigate("success");
        }}
      />
    );
  } else if (screen === "success") {
    content = (
      <SuccessScreen
        product={checkoutProduct}
        planId={selectedPlan}
        onTrack={() => navigate("credit")}
        onHome={() => navigate("home")}
      />
    );
  } else if (screen === "credit") {
    content = (
      <CreditScreen
        hasOrdered={hasOrdered}
        hasCreditProfile={hasCreditProfile}
        onCreditHealth={() => openCreditHealth("credit")}
        onShop={() => navigate("shop")}
        onToast={showToast}
      />
    );
  } else if (screen === "credit-health") {
    content = (
      <CreditHealthScreen
        hasProfile={hasCreditProfile}
        onProfileReady={() => setHasCreditProfile(true)}
        onBack={() => navigate(creditHealthOrigin)}
        onToast={showToast}
        onShop={() => navigate("shop")}
      />
    );
  } else {
    content = (
      <ProfileScreen
        hasCreditProfile={hasCreditProfile}
        onCreditHealth={() => openCreditHealth("profile")}
        onToast={showToast}
      />
    );
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
