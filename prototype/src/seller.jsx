"use client";

import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bell,
  Box,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  IndianRupee,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileCheck2,
  Filter,
  Gift,
  Info,
  LayoutDashboard,
  ListFilter,
  Menu,
  MoreHorizontal,
  PackageCheck,
  PanelLeftClose,
  Plus,
  RefreshCcw,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Store,
  Tag,
  Upload,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import {
  formatINR,
  products,
  sellerOrders,
} from "./data";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "catalogue", label: "Catalogue", icon: Box, badge: "4" },
  { id: "offers", label: "Affordability", icon: Gift, badge: "2" },
  { id: "orders", label: "Orders", icon: PackageCheck, badge: "12" },
  { id: "settlements", label: "Settlements", icon: Banknote },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

const pageContext = {
  overview: {
    title: "Commerce overview",
    subtitle: "25 Jun – 25 Jul 2026",
    question: "Is financing creating incremental, contribution-positive sales?",
    connection: "Demand → approval → order → repeat",
  },
  catalogue: {
    title: "Catalogue",
    subtitle: "4 SKUs · 3 financeable",
    question: "Which products are safe, useful, and commercially viable to finance?",
    connection: "SKU quality → eligibility → discovery",
  },
  offers: {
    title: "Affordability",
    subtitle: "2 live campaigns",
    question: "How much offer funding creates profitable conversion lift?",
    connection: "Seller funding → lower upfront → higher conversion",
  },
  orders: {
    title: "Orders",
    subtitle: "12 require action",
    question: "Can sellers fulfil financed orders without managing lender complexity?",
    connection: "One order state across seller, payment, and loan",
  },
  settlements: {
    title: "Settlements",
    subtitle: "Next payout 27 Jul",
    question: "Can every fee, offer, refund, and payout be reconciled?",
    connection: "Order economics → transparent seller payout",
  },
  analytics: {
    title: "Growth & risk",
    subtitle: "Financed cohort · last 90 days",
    question: "Is financed GMV repeatable after returns, incentives, and credit loss?",
    connection: "Conversion + repayment + repeat → durable P&L",
  },
};

function Brand() {
  return (
    <a className="seller-brand" href="/" aria-label="Open buyer app">
      <span className="brand-mark">s</span>
      <span className="brand-name">super<span>.money</span></span>
      <i />
      <small>commerce</small>
    </a>
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

function SellerSidebar({ active, onChange, collapsed, onCollapse }) {
  return (
    <aside className={`seller-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand-row">
        <Brand />
        <button onClick={onCollapse} title="Collapse sidebar" aria-label="Collapse sidebar">
          <PanelLeftClose size={18} />
        </button>
      </div>
      <div className="merchant-switcher">
        <div>VK</div>
        {!collapsed && (
          <>
            <span>
              <strong>ValueKart Retail</strong>
              <small>Approved merchant</small>
            </span>
            <ChevronDown size={16} />
          </>
        )}
      </div>
      <nav>
        {navItems.map(({ id, label, icon: NavIcon, badge }) => (
          <button
            key={id}
            className={active === id ? "active" : ""}
            onClick={() => onChange(id)}
            title={collapsed ? label : undefined}
          >
            <NavIcon size={19} />
            {!collapsed && <span>{label}</span>}
            {!collapsed && badge && <small>{badge}</small>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <button title={collapsed ? "Settings" : undefined}>
          <Settings size={19} />
          {!collapsed && <span>Settings</span>}
        </button>
        <button title={collapsed ? "Help centre" : undefined}>
          <CircleHelp size={19} />
          {!collapsed && <span>Help centre</span>}
        </button>
        {!collapsed && (
          <div className="seller-health">
            <span><ShieldCheck size={16} /> Account health</span>
            <strong>Excellent</strong>
            <i><b /></i>
          </div>
        )}
      </div>
    </aside>
  );
}

function SellerHeader({
  active,
  onCreateOffer,
  onAddProduct,
  onOpenMobile,
  onMenu,
}) {
  const context = pageContext[active];
  return (
    <>
      <header className="seller-header">
        <div className="seller-title">
          <button className="mobile-menu-button" onClick={onMenu} aria-label="Open navigation">
            <Menu size={20} />
          </button>
          <div>
            <h1>{context.title}</h1>
            <p>{context.subtitle}</p>
          </div>
        </div>
        <div className="seller-header-actions">
          <label className="global-search">
            <Search size={18} />
            <input placeholder="Search orders, SKUs…" aria-label="Search portal" />
          </label>
          <button className="header-icon-button" title="Notifications" aria-label="Notifications">
            <Bell size={19} /><i />
          </button>
          <button className="secondary-button" onClick={onOpenMobile}>
            Buyer app <ExternalLink size={16} />
          </button>
          {active === "catalogue" ? (
            <button className="primary-button" onClick={onAddProduct}>
              <Plus size={17} /> Add product
            </button>
          ) : (
            <button className="primary-button" onClick={onCreateOffer}>
              <Plus size={17} /> Create offer
            </button>
          )}
        </div>
      </header>
      <div className="problem-strip">
        <Info size={17} />
        <span>Decision this surface supports</span>
        <strong>{context.question}</strong>
        <p>{context.connection}</p>
      </div>
    </>
  );
}

function MetricCard({ label, value, change, detail, icon: Icon, tone = "" }) {
  const positive = !String(change).startsWith("-");
  return (
    <section className={`metric-card ${tone}`}>
      <div className="metric-card-top">
        <span>{label}</span>
        <i><Icon size={18} /></i>
      </div>
      <strong>{value}</strong>
      <div className="metric-card-foot">
        <span className={positive ? "up" : "down"}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </span>
        <p>{detail}</p>
      </div>
    </section>
  );
}

function MiniBarChart() {
  const values = [32, 38, 35, 49, 46, 58, 53, 66, 62, 76, 72, 88];
  return (
    <div className="mini-bar-chart" aria-label="Financed GMV trend">
      {values.map((value, index) => (
        <div key={index} className={index === values.length - 1 ? "active" : ""}>
          <i style={{ height: `${value}%` }} />
          {index % 3 === 0 && <small>{["W1", "W2", "W3", "W4"][index / 3]}</small>}
        </div>
      ))}
    </div>
  );
}

function OverviewPage({ onNavigate }) {
  return (
    <div className="seller-page">
      <div className="metrics-grid">
        <MetricCard
          label="Financed GMV"
          value="₹2.81 Cr"
          change="+18.4%"
          detail="vs previous 30 days"
          icon={WalletCards}
        />
        <MetricCard
          label="Checkout conversion"
          value="8.7%"
          change="+2.3 pp"
          detail="with affordability"
          icon={Zap}
          tone="cobalt"
        />
        <MetricCard
          label="Average order value"
          value="₹3,486"
          change="+21.6%"
          detail="financed vs UPI"
          icon={IndianRupee}
          tone="coral"
        />
        <MetricCard
          label="Contribution"
          value="₹4.78 L"
          change="+14.2%"
          detail="1.70% of financed GMV"
          icon={BarChart3}
          tone="mint"
        />
      </div>

      <div className="overview-grid">
        <section className="dashboard-panel gmv-panel">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">North Star</p>
              <h2>Contribution-positive financed GMV</h2>
            </div>
            <button>Last 30 days <ChevronDown size={15} /></button>
          </div>
          <div className="gmv-summary">
            <div>
              <strong>₹2.81 Cr</strong>
              <span><ArrowUpRight size={14} /> 18.4%</span>
            </div>
            <p>
              <i className="legend-financed" /> Financed GMV
              <i className="legend-upi" /> Full UPI
            </p>
          </div>
          <MiniBarChart />
        </section>

        <section className="dashboard-panel economics-panel">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Per financed order</p>
              <h2>Unit economics</h2>
            </div>
            <span className="status-positive">Healthy</span>
          </div>
          <div className="economics-total">
            <div>
              <span>Net contribution</span>
              <strong>₹59</strong>
            </div>
            <b>1.7%</b>
          </div>
          <div className="waterfall">
            <div><span>Merchant fee</span><i style={{ width: "72%" }} /><strong>+₹52</strong></div>
            <div><span>Lender revenue</span><i style={{ width: "48%" }} /><strong>+₹35</strong></div>
            <div><span>Seller funding</span><i style={{ width: "48%" }} /><strong>+₹35</strong></div>
            <div className="cost"><span>Variable costs</span><i style={{ width: "85%" }} /><strong>−₹63</strong></div>
          </div>
          <p className="panel-note"><ShieldCheck size={15} /> Net of incentives, payment cost, fraud, and expected credit loss share.</p>
        </section>
      </div>

      <div className="overview-grid lower">
        <section className="dashboard-panel funnel-panel">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Where value is lost</p>
              <h2>Financed checkout funnel</h2>
            </div>
            <button onClick={() => onNavigate("analytics")}>View cohorts <ChevronRight size={15} /></button>
          </div>
          <div className="funnel-rows">
            {[
              ["Product views", "184,240", 100, ""],
              ["Checkout starts", "22,934", 72, "12.4%"],
              ["Credit approved", "18,812", 59, "82.0%"],
              ["Mandate success", "17,608", 52, "93.6%"],
              ["Orders placed", "16,046", 47, "91.1%"],
            ].map(([label, value, width, rate]) => (
              <div key={label}>
                <span>{label}</span>
                <i><b style={{ width: `${width}%` }} /></i>
                <strong>{value}</strong>
                <small>{rate}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-panel lift-panel">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Incrementality</p>
              <h2>What affordability changed</h2>
            </div>
          </div>
          <div className="compare-row">
            <span>Conversion</span>
            <div><small>UPI only</small><i><b style={{ width: "51%" }} /></i><strong>6.4%</strong></div>
            <div><small>With PayLater</small><i><b style={{ width: "70%" }} /></i><strong>8.7%</strong></div>
          </div>
          <div className="lift-stats">
            <div><span>AOV lift</span><strong>+21.6%</strong></div>
            <div><span>Repeat lift</span><strong>+14.8%</strong></div>
            <div><span>Return delta</span><strong>+0.3 pp</strong></div>
          </div>
          <p className="insight-callout">
            <Sparkles size={16} />
            Mobile accessories deliver the best contribution after risk and returns.
          </p>
        </section>
      </div>

      <section className="dashboard-panel recent-orders">
        <div className="panel-header">
          <div>
            <p className="panel-eyebrow">Operations</p>
            <h2>Orders requiring action</h2>
          </div>
          <button onClick={() => onNavigate("orders")}>View all orders <ChevronRight size={15} /></button>
        </div>
        <OrdersTable orders={sellerOrders.slice(0, 3)} compact />
      </section>
    </div>
  );
}

function CataloguePage({ onAddProduct, onToast }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const visible = products.filter((product) => {
    const matchesQuery = `${product.name} ${product.sku}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Financeable" && product.status.includes("eligible")) ||
      product.status === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="seller-page">
      <section className="catalogue-summary">
        <div><span>Live SKUs</span><strong>3</strong><small>75% of catalogue</small></div>
        <div><span>Finance-eligible</span><strong>3</strong><small>₹12.8L daily inventory</small></div>
        <div><span>Needs attention</span><strong>1</strong><small>Missing risk evidence</small></div>
        <div><span>Catalogue contribution</span><strong>₹1.70L</strong><small>Last 30 days</small></div>
      </section>

      <section className="dashboard-panel catalogue-panel">
        <div className="catalogue-toolbar">
          <label>
            <Search size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search product or SKU"
            />
          </label>
          <div className="table-tabs">
            {["All", "Financeable", "Needs review"].map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="secondary-button"><Filter size={16} /> Filters</button>
          <button className="secondary-button"><Download size={16} /> Export</button>
        </div>
        <div className="table-scroll">
          <table className="catalogue-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Financeability</th>
                <th>Customer plan</th>
                <th>Inventory</th>
                <th>Conversion</th>
                <th>Return rate</th>
                <th>Contribution</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {visible.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="table-product">
                      <ProductArt product={product} />
                      <span>
                        <strong>{product.name}</strong>
                        <small>{product.sku}</small>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={`catalogue-status ${product.statusTone}`}>
                      {product.statusTone === "positive" ? <BadgeCheck size={14} /> : <AlertTriangle size={14} />}
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <strong>{formatINR(product.upfront)} now</strong>
                    <small>+ {formatINR(product.installment)} × 2</small>
                  </td>
                  <td>
                    <strong>{product.stock}</strong>
                    <small className={product.stock < 20 ? "warning-copy" : ""}>
                      {product.stock < 20 ? "Low stock" : "In stock"}
                    </small>
                  </td>
                  <td><strong>{product.conversion}%</strong><small>Last 30 days</small></td>
                  <td><strong>{product.returnRate}%</strong><small>{product.returnRate < 3 ? "Healthy" : "Watch"}</small></td>
                  <td><strong>{formatINR(product.contribution)}</strong><small>Per order</small></td>
                  <td>
                    <button
                      className="table-action"
                      onClick={() => onToast(`${product.name} catalogue record opened`)}
                      aria-label={`Open ${product.name}`}
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visible.length === 0 && <div className="table-empty">No catalogue records match this filter.</div>}
        <div className="table-footer">
          <span>Showing {visible.length} of {products.length} products</span>
          <div><button disabled>Previous</button><button className="active">1</button><button disabled>Next</button></div>
        </div>
      </section>

      <section className="catalogue-rule">
        <ShieldCheck size={20} />
        <div>
          <strong>Financeability is evaluated per SKU, not just per seller.</strong>
          <p>Category risk, price, margin, fulfilment, returns, fraud signals, and lender rules determine how each item can be sold.</p>
        </div>
        <button onClick={onAddProduct}>Add another SKU <ChevronRight size={16} /></button>
      </section>
    </div>
  );
}

function OfferSimulator({ onPublish }) {
  const [funding, setFunding] = useState(1.25);
  const [upfront, setUpfront] = useState(33);
  const conversion = (6.4 + funding * 1.85 + (33 - upfront) * 0.035).toFixed(1);
  const lift = Math.round(((Number(conversion) / 6.4) - 1) * 100);
  const offerCost = Math.round(5997 * (funding / 100));
  const contribution = Math.max(24, Math.round(126 - offerCost * 0.52));

  return (
    <section className="dashboard-panel offer-simulator">
      <div className="panel-header">
        <div>
          <p className="panel-eyebrow">Decision simulator</p>
          <h2>Fund the smallest offer that moves conversion</h2>
        </div>
        <span className="draft-status">Draft</span>
      </div>
      <div className="simulator-product">
        <ProductArt product={products[1]} />
        <div>
          <strong>BlendMini Mixer Grinder</strong>
          <span>₹5,997 · Home appliances</span>
        </div>
        <button>Change SKU</button>
      </div>

      <div className="slider-field">
        <div>
          <label htmlFor="funding">Seller subvention</label>
          <strong>{funding.toFixed(2)}%</strong>
        </div>
        <input
          id="funding"
          type="range"
          min="0"
          max="3"
          step="0.25"
          value={funding}
          onChange={(event) => setFunding(Number(event.target.value))}
          style={{ "--slider-value": `${(funding / 3) * 100}%` }}
        />
        <div className="range-labels"><span>0%</span><span>3%</span></div>
      </div>

      <div className="slider-field">
        <div>
          <label htmlFor="upfront">Customer pays today</label>
          <strong>{upfront}%</strong>
        </div>
        <input
          id="upfront"
          type="range"
          min="20"
          max="50"
          step="1"
          value={upfront}
          onChange={(event) => setUpfront(Number(event.target.value))}
          style={{ "--slider-value": `${((upfront - 20) / 30) * 100}%` }}
        />
        <div className="range-labels"><span>20%</span><span>50%</span></div>
      </div>

      <div className="customer-preview">
        <span>Customer sees</span>
        <strong>{formatINR(Math.round(5997 * upfront / 100))} today</strong>
        <p>+ {formatINR(Math.round((5997 - 5997 * upfront / 100) / 2))} × 2 · ₹0 fees</p>
      </div>

      <div className="forecast-grid">
        <div>
          <span>Forecast conversion</span>
          <strong>{conversion}%</strong>
          <small>+{lift}% vs UPI-only</small>
        </div>
        <div>
          <span>Seller cost/order</span>
          <strong>{formatINR(offerCost)}</strong>
          <small>Only on completed order</small>
        </div>
        <div>
          <span>Net contribution</span>
          <strong>{formatINR(contribution)}</strong>
          <small>After expected loss</small>
        </div>
      </div>
      <div className="simulator-warning">
        <ShieldCheck size={17} />
        <p>Forecast includes current approval, return, fraud, and 30+ DPD rates for this SKU.</p>
      </div>
      <button className="primary-button publish-button" onClick={onPublish}>
        <Zap size={17} /> Publish controlled test
      </button>
    </section>
  );
}

function OffersPage({ onToast }) {
  return (
    <div className="seller-page offers-layout">
      <div className="offers-left">
        <section className="offer-outcome-band">
          <div>
            <span>Affordability-attributed GMV</span>
            <strong>₹84.2L</strong>
            <small><ArrowUpRight size={13} /> 22.8% this month</small>
          </div>
          <div>
            <span>Seller funding spent</span>
            <strong>₹1.04L</strong>
            <small>1.24% of attributed GMV</small>
          </div>
          <div>
            <span>Incremental orders</span>
            <strong>1,428</strong>
            <small>Modelled vs holdout</small>
          </div>
        </section>

        <section className="dashboard-panel campaigns-panel">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Controlled supply funding</p>
              <h2>Campaigns</h2>
            </div>
            <button><ListFilter size={15} /> All statuses</button>
          </div>
          <div className="campaign-card">
            <div className="campaign-icon"><Zap size={19} /></div>
            <div className="campaign-main">
              <div>
                <strong>Pay in 3 · Mobile essentials</strong>
                <span className="status-positive">Live</span>
              </div>
              <p>1.25% seller funding · Eligible PayLater users · 18 SKUs</p>
              <div className="campaign-progress">
                <i><b style={{ width: "68%" }} /></i>
                <span>₹68,240 of ₹1,00,000 used</span>
              </div>
            </div>
            <div className="campaign-result">
              <span>Conversion lift</span><strong>+31%</strong><small>95% confidence</small>
            </div>
            <button className="table-action"><MoreHorizontal size={18} /></button>
          </div>
          <div className="campaign-card">
            <div className="campaign-icon coral"><Gift size={19} /></div>
            <div className="campaign-main">
              <div>
                <strong>₹150 cashback · Home upgrades</strong>
                <span className="status-scheduled">Scheduled</span>
              </div>
              <p>Fixed cashback · High-intent home cohort · 9 SKUs</p>
              <div className="campaign-progress">
                <i><b style={{ width: "0%" }} /></i>
                <span>Starts 28 Jul · Budget ₹75,000</span>
              </div>
            </div>
            <div className="campaign-result">
              <span>Forecast lift</span><strong>+18%</strong><small>Model estimate</small>
            </div>
            <button className="table-action"><MoreHorizontal size={18} /></button>
          </div>
        </section>

        <section className="dashboard-panel funding-principles">
          <div className="panel-header">
            <div>
              <p className="panel-eyebrow">Guardrails</p>
              <h2>Offer funding rules</h2>
            </div>
          </div>
          <div className="principles-grid">
            <div><ShieldCheck size={18} /><strong>Pay for outcomes</strong><p>Funding is charged only after a successful, non-cancelled order.</p></div>
            <div><ArrowLeftRight size={18} /><strong>Reverse with refunds</strong><p>Seller funding is proportionally reversed on full or partial returns.</p></div>
            <div><BarChart3 size={18} /><strong>Measure incrementality</strong><p>Every campaign reserves a holdout to separate lift from demand.</p></div>
          </div>
        </section>
      </div>
      <OfferSimulator onPublish={() => onToast("Controlled affordability test published")} />
    </div>
  );
}

function OrdersTable({ orders, compact = false }) {
  return (
    <div className="table-scroll">
      <table className={`orders-table ${compact ? "compact" : ""}`}>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Payment plan</th>
            <th>Order value</th>
            <th>Status</th>
            <th>Net settlement</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td><strong>{order.id}</strong><small>{order.time}</small></td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td><span className="plan-tag">{order.plan}</span></td>
              <td><strong>{formatINR(order.amount)}</strong></td>
              <td><span className={`order-status ${order.status.toLowerCase().replaceAll(" ", "-")}`}>{order.status}</span></td>
              <td><strong>{order.settlement}</strong></td>
              <td><button className="table-action" aria-label={`Open ${order.id}`}><ChevronRight size={17} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrdersPage({ onToast }) {
  return (
    <div className="seller-page">
      <section className="order-status-grid">
        <button><span>Action required</span><strong>12</strong><small>Pack within SLA</small></button>
        <button><span>Ready to ship</span><strong>26</strong><small>Pickup today</small></button>
        <button><span>In transit</span><strong>84</strong><small>3 delayed</small></button>
        <button><span>Return requested</span><strong>4</strong><small>1 needs review</small></button>
      </section>
      <section className="dashboard-panel orders-panel">
        <div className="catalogue-toolbar">
          <label><Search size={17} /><input placeholder="Search order or customer" /></label>
          <div className="table-tabs">
            <button className="active">All orders</button><button>Financed</button><button>Returns</button>
          </div>
          <button className="secondary-button"><Filter size={16} /> Filters</button>
          <button className="secondary-button" onClick={() => onToast("Order report exported")}><Download size={16} /> Export</button>
        </div>
        <OrdersTable orders={sellerOrders} />
        <div className="table-footer">
          <span>Showing 4 of 1,284 orders</span>
          <div><button disabled>Previous</button><button className="active">1</button><button>2</button><button>Next</button></div>
        </div>
      </section>
      <section className="order-orchestration">
        <div>
          <span><Check size={14} /></span><strong>Payment authorised</strong><small>super.money</small>
        </div><i />
        <div>
          <span><Check size={14} /></span><strong>Loan booked</strong><small>Lending partner</small>
        </div><i />
        <div>
          <span><PackageCheck size={15} /></span><strong>Seller fulfils</strong><small>One action required</small>
        </div><i />
        <div>
          <span><Banknote size={15} /></span><strong>Settlement</strong><small>T+2 after shipment</small>
        </div>
      </section>
    </div>
  );
}

function SettlementsPage({ onToast }) {
  const settlements = [
    ["ST-250727", "27 Jul 2026", "312", "₹9,42,186", "₹14,133", "₹11,285", "₹9,16,768", "Upcoming"],
    ["ST-250725", "25 Jul 2026", "284", "₹8,61,492", "₹12,922", "₹9,806", "₹8,38,764", "Paid"],
    ["ST-250723", "23 Jul 2026", "266", "₹7,92,104", "₹11,882", "₹8,714", "₹7,71,508", "Paid"],
    ["ST-250721", "21 Jul 2026", "249", "₹7,21,681", "₹10,825", "₹7,936", "₹7,02,920", "Paid"],
  ];
  return (
    <div className="seller-page">
      <section className="settlement-hero">
        <div>
          <p>Upcoming payout</p>
          <strong>₹9,16,768</strong>
          <span><CalendarDays size={15} /> Expected 27 Jul by 6 PM</span>
        </div>
        <div>
          <span>Gross order value</span><strong>₹9,42,186</strong>
        </div>
        <div>
          <span>Platform & payment fees</span><strong>−₹14,133</strong>
        </div>
        <div>
          <span>Offer funding & reversals</span><strong>−₹11,285</strong>
        </div>
        <button className="secondary-button" onClick={() => onToast("Settlement statement downloaded")}>
          <Download size={16} /> Download statement
        </button>
      </section>

      <section className="dashboard-panel settlement-table-panel">
        <div className="panel-header">
          <div><p className="panel-eyebrow">Reconciliation</p><h2>Settlement history</h2></div>
          <button>Last 90 days <ChevronDown size={15} /></button>
        </div>
        <div className="table-scroll">
          <table className="settlement-table">
            <thead><tr><th>Settlement ID</th><th>Date</th><th>Orders</th><th>Gross value</th><th>Fees</th><th>Offers & reversals</th><th>Net payout</th><th>Status</th><th /></tr></thead>
            <tbody>
              {settlements.map((row) => (
                <tr key={row[0]}>
                  {row.slice(0, 7).map((value, index) => <td key={index}><strong>{value}</strong></td>)}
                  <td><span className={row[7] === "Paid" ? "status-positive" : "status-scheduled"}>{row[7]}</span></td>
                  <td><button className="table-action"><ChevronRight size={17} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="reconciliation-grid">
        <div><FileCheck2 size={20} /><span>Matched automatically</span><strong>99.7%</strong><small>1,107 of 1,110 line items</small></div>
        <div><AlertTriangle size={20} /><span>Needs review</span><strong>3</strong><small>2 partial refunds · 1 return</small></div>
        <div><RefreshCcw size={20} /><span>Refund reversals</span><strong>₹18,406</strong><small>Applied to upcoming payout</small></div>
      </section>
    </div>
  );
}

function AnalyticsPage() {
  const cohorts = [
    ["Apr 2026", "8.1%", "₹3,284", "21.8%", "1.9%", "1.42%", "₹54"],
    ["May 2026", "8.4%", "₹3,396", "23.1%", "1.8%", "1.35%", "₹57"],
    ["Jun 2026", "8.7%", "₹3,486", "24.6%", "1.7%", "1.28%", "₹59"],
    ["Jul 2026", "9.0%", "₹3,542", "—", "1.6%", "1.21%", "₹62"],
  ];
  return (
    <div className="seller-page">
      <div className="analytics-top">
        <section className="dashboard-panel repeat-panel">
          <div className="panel-header">
            <div><p className="panel-eyebrow">Commerce flywheel</p><h2>Repeat purchase by first plan</h2></div>
            <button>90 days <ChevronDown size={15} /></button>
          </div>
          <div className="repeat-chart">
            {[
              ["Full UPI", 26, "11.2%"],
              ["Pay in 3", 62, "24.6%"],
              ["superCard EMI", 48, "19.1%"],
            ].map(([label, width, value]) => (
              <div key={label}><span>{label}</span><i><b style={{ width: `${width}%` }} /></i><strong>{value}</strong></div>
            ))}
          </div>
          <p className="insight-callout"><Sparkles size={16} /> On-time PayLater users repeat 2.2× more than UPI-only buyers.</p>
        </section>
        <section className="dashboard-panel risk-panel">
          <div className="panel-header">
            <div><p className="panel-eyebrow">Risk-adjusted growth</p><h2>Portfolio guardrails</h2></div>
            <span className="status-positive">Within target</span>
          </div>
          <div className="risk-metrics">
            <div><span>7+ DPD</span><strong>1.68%</strong><small>Target &lt; 2.0%</small><i><b style={{ width: "68%" }} /></i></div>
            <div><span>30+ DPD</span><strong>0.74%</strong><small>Target &lt; 1.0%</small><i><b style={{ width: "54%" }} /></i></div>
            <div><span>Return rate</span><strong>2.10%</strong><small>Target &lt; 3.0%</small><i><b style={{ width: "48%" }} /></i></div>
            <div><span>AutoPay success</span><strong>94.2%</strong><small>Target &gt; 92%</small><i><b style={{ width: "86%" }} /></i></div>
          </div>
        </section>
      </div>

      <section className="dashboard-panel cohort-panel">
        <div className="panel-header">
          <div><p className="panel-eyebrow">One table, full economics</p><h2>Financed customer cohorts</h2></div>
          <button><Download size={15} /> Export cohort</button>
        </div>
        <div className="table-scroll">
          <table className="cohort-table">
            <thead><tr><th>First purchase cohort</th><th>Conversion</th><th>AOV</th><th>90-day repeat</th><th>7+ DPD</th><th>Expected loss</th><th>Contribution/order</th></tr></thead>
            <tbody>
              {cohorts.map((row) => (
                <tr key={row[0]}>{row.map((value, index) => <td key={index}><strong>{value}</strong>{index === 0 && <small>PayLater buyers</small>}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="dashboard-panel category-matrix">
        <div className="panel-header">
          <div><p className="panel-eyebrow">Where to scale next</p><h2>Category decision matrix</h2></div>
        </div>
        <div className="matrix-grid">
          <div className="matrix-axis y">Contribution / order</div>
          <div className="matrix-axis x">Responsible repeat rate →</div>
          <span className="matrix-line horizontal" /><span className="matrix-line vertical" />
          <button className="matrix-bubble phones"><strong>Phones</strong><small>₹153 · 21%</small></button>
          <button className="matrix-bubble audio"><strong>Audio</strong><small>₹51 · 29%</small></button>
          <button className="matrix-bubble home"><strong>Home</strong><small>₹102 · 18%</small></button>
          <button className="matrix-bubble study"><strong>Study</strong><small>₹31 · 14%</small></button>
          <span className="quadrant-label top-right">Scale responsibly</span>
          <span className="quadrant-label bottom-left">Fix economics</span>
        </div>
      </section>
    </div>
  );
}

function AddProductModal({ onClose, onAdd }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="portal-modal add-product-modal" role="dialog" aria-modal="true" aria-label="Add product" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <div><p>Catalogue onboarding</p><h2>Add a financeable product</h2></div>
          <button onClick={onClose} aria-label="Close"><X size={20} /></button>
        </header>
        <div className="modal-steps">
          <span className={step >= 1 ? "active" : ""}>1. Product</span><i />
          <span className={step >= 2 ? "active" : ""}>2. Policy</span><i />
          <span className={step >= 3 ? "active" : ""}>3. Eligibility</span>
        </div>
        {step === 1 && (
          <div className="modal-form">
            <label>Product name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Compact air fryer" /></label>
            <div className="two-fields">
              <label>Seller SKU<input placeholder="Your unique SKU" /></label>
              <label>Category<select defaultValue=""><option value="" disabled>Select category</option><option>Home appliances</option><option>Mobile accessories</option><option>Work & study</option></select></label>
            </div>
            <div className="two-fields">
              <label>Selling price<input type="number" placeholder="₹ 0" /></label>
              <label>Available inventory<input type="number" placeholder="0 units" /></label>
            </div>
            <button className="upload-zone"><Upload size={22} /><strong>Upload product images</strong><span>PNG or JPG · Up to 5 images</span></button>
          </div>
        )}
        {step === 2 && (
          <div className="modal-form">
            <div className="two-fields">
              <label>Fulfilment SLA<select><option>Ships within 24 hours</option><option>Ships within 48 hours</option></select></label>
              <label>Return policy<select><option>7-day replacement</option><option>10-day return</option><option>Non-returnable</option></select></label>
            </div>
            <label>Warranty<select><option>1-year manufacturer warranty</option><option>6-month seller warranty</option><option>No warranty</option></select></label>
            <label className="modal-check"><input type="checkbox" defaultChecked /><span><Check size={13} /></span><p>This product complies with restricted-category and merchant catalogue policies.</p></label>
            <label className="modal-check"><input type="checkbox" defaultChecked /><span><Check size={13} /></span><p>Inventory and price updates will be sent through the catalogue API.</p></label>
          </div>
        )}
        {step === 3 && (
          <div className="eligibility-result">
            <div className="eligibility-score"><ShieldCheck size={28} /><strong>Likely eligible</strong><span>Preliminary catalogue assessment</span></div>
            <div className="eligibility-checks">
              <p><Check size={15} /> Category allowed</p>
              <p><Check size={15} /> Price within lender threshold</p>
              <p><Check size={15} /> Seller risk tier approved</p>
              <p><Clock3Icon /> Image and policy review pending</p>
            </div>
            <p className="eligibility-note">Final plans are determined after catalogue review and lender product-rule validation.</p>
          </div>
        )}
        <footer>
          <button className="secondary-button" onClick={step === 1 ? onClose : () => setStep(step - 1)}>{step === 1 ? "Cancel" : "Back"}</button>
          <button className="primary-button" disabled={step === 1 && !name} onClick={step === 3 ? onAdd : () => setStep(step + 1)}>
            {step === 3 ? "Submit for review" : "Continue"} <ChevronRight size={16} />
          </button>
        </footer>
      </section>
    </div>
  );
}

function Clock3Icon() {
  return <AlertTriangle size={15} />;
}

function CreateOfferModal({ onClose, onOpenOffers }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="portal-modal quick-offer-modal" role="dialog" aria-modal="true" aria-label="Create affordability offer" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <div><p>Affordability campaign</p><h2>Choose what you want to improve</h2></div>
          <button onClick={onClose} aria-label="Close"><X size={20} /></button>
        </header>
        <div className="offer-goals">
          <button onClick={onOpenOffers}><Zap size={20} /><strong>Increase conversion</strong><span>Reduce the amount customers pay today.</span><ChevronRight size={17} /></button>
          <button onClick={onOpenOffers}><IndianRupee size={20} /><strong>Increase order value</strong><span>Fund longer-tenor no-cost plans.</span><ChevronRight size={17} /></button>
          <button onClick={onOpenOffers}><Gift size={20} /><strong>Drive a product</strong><span>Add targeted cashback to selected SKUs.</span><ChevronRight size={17} /></button>
        </div>
        <p className="modal-footnote"><ShieldCheck size={15} /> Every campaign includes eligibility rules, budget caps, and a measurement holdout.</p>
      </section>
    </div>
  );
}

export default function SellerPortal() {
  const [active, setActive] = useState("overview");
  const [collapsed, setCollapsed] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const renderPage = () => {
    if (active === "overview") return <OverviewPage onNavigate={setActive} />;
    if (active === "catalogue") return <CataloguePage onAddProduct={() => setAddOpen(true)} onToast={showToast} />;
    if (active === "offers") return <OffersPage onToast={showToast} />;
    if (active === "orders") return <OrdersPage onToast={showToast} />;
    if (active === "settlements") return <SettlementsPage onToast={showToast} />;
    return <AnalyticsPage />;
  };

  return (
    <div className={`seller-body seller-app ${collapsed ? "sidebar-collapsed" : ""}`}>
      <SellerSidebar
        active={active}
        onChange={setActive}
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      />
      <div className="seller-main">
        <SellerHeader
          active={active}
          onCreateOffer={() => setOfferOpen(true)}
          onAddProduct={() => setAddOpen(true)}
          onOpenMobile={() => window.location.assign("/")}
          onMenu={() => setCollapsed(!collapsed)}
        />
        {renderPage()}
      </div>
      {addOpen && (
        <AddProductModal
          onClose={() => setAddOpen(false)}
          onAdd={() => {
            setAddOpen(false);
            showToast("Product submitted for catalogue and lender review");
          }}
        />
      )}
      {offerOpen && (
        <CreateOfferModal
          onClose={() => setOfferOpen(false)}
          onOpenOffers={() => {
            setOfferOpen(false);
            setActive("offers");
          }}
        />
      )}
      {toast && <div className="portal-toast"><Check size={16} /> {toast}</div>}
    </div>
  );
}
