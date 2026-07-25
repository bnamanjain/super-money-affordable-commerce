import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import pptxgen from "pptxgenjs";

const root = resolve(import.meta.dirname, "..");
const outputDir = resolve(import.meta.dirname, "output");
const screenshots = resolve(root, "prototype", "test-artifacts");
const prototypeUrl =
  "https://super-money-affordable-commerce.naman884186.chatgpt.site";

await mkdir(outputDir, { recursive: true });

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Naman Jain";
pptx.company = "Product concept for super.money";
pptx.subject = "Affordable Commerce product strategy and prototype";
pptx.title = "Affordable Commerce inside super.money";
pptx.lang = "en-IN";
pptx.theme = {
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  lang: "en-IN",
};
pptx.defineLayout({ name: "CUSTOM_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "CUSTOM_WIDE";
pptx.margin = 0;

const C = {
  ink: "171817",
  inkSoft: "2D302D",
  paper: "F3F4EF",
  white: "FFFFFF",
  lime: "C9F044",
  limeDark: "668700",
  limeSoft: "EFF9CB",
  cobalt: "3566E8",
  cobaltSoft: "E8EDFF",
  coral: "F26A5D",
  coralSoft: "FFEBE8",
  mint: "DFF4E5",
  mintDark: "237346",
  amber: "E9A323",
  amberSoft: "FFF5D9",
  muted: "666C64",
  mutedLight: "8A9088",
  line: "DFE2DB",
  lineStrong: "C9CDC4",
};

const Shape = pptx.ShapeType;
const slides = [];

function addBrand(slide, { dark = false } = {}) {
  slide.addShape(Shape.roundRect, {
    x: 0.62,
    y: 0.36,
    w: 0.3,
    h: 0.3,
    rectRadius: 0.05,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("s", {
    x: 0.62,
    y: 0.355,
    w: 0.3,
    h: 0.3,
    fontFace: "Arial",
    fontSize: 15,
    bold: true,
    align: "center",
    valign: "mid",
    color: C.ink,
    margin: 0,
  });
  slide.addText(
    [
      { text: "super", options: { bold: true } },
      { text: ".money", options: { bold: true, color: C.lime } },
    ],
    {
      x: 1.02,
      y: 0.35,
      w: 1.4,
      h: 0.32,
      fontFace: "Arial",
      fontSize: 13,
      color: dark ? C.white : C.ink,
      margin: 0,
      breakLine: false,
    },
  );
}

function addFooter(slide, number, { dark = false, appendix = false } = {}) {
  slide.addShape(Shape.line, {
    x: 0.62,
    y: 7.13,
    w: 12.1,
    h: 0,
    line: {
      color: dark ? "3D413D" : C.line,
      width: 0.7,
    },
  });
  slide.addText(
    appendix ? "TECHNICAL APPENDIX" : "AFFORDABLE COMMERCE CONCEPT",
    {
      x: 0.62,
      y: 7.19,
      w: 3.5,
      h: 0.18,
      fontSize: 7.5,
      bold: true,
      color: dark ? "AEB5AC" : C.muted,
      charSpacing: 1.4,
      margin: 0,
    },
  );
  slide.addText(String(number).padStart(2, "0"), {
    x: 12.22,
    y: 7.17,
    w: 0.5,
    h: 0.2,
    fontSize: 8,
    bold: true,
    align: "right",
    color: dark ? "AEB5AC" : C.muted,
    margin: 0,
  });
}

function addHeader(slide, number, title, subtitle, options = {}) {
  const dark = options.dark ?? false;
  addBrand(slide, { dark });
  slide.addText(options.kicker ?? "PRODUCT THESIS", {
    x: 0.62,
    y: 0.91,
    w: 3.2,
    h: 0.2,
    fontSize: 8.5,
    bold: true,
    color: C.limeDark,
    charSpacing: 1.6,
    margin: 0,
  });
  slide.addText(title, {
    x: 0.62,
    y: 1.13,
    w: options.titleWidth ?? 8.8,
    h: 0.58,
    fontSize: options.titleSize ?? 27,
    bold: true,
    color: dark ? C.white : C.ink,
    margin: 0,
    fit: "shrink",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.64,
      y: 1.78,
      w: options.subtitleWidth ?? 9.8,
      h: 0.4,
      fontSize: 11.5,
      color: dark ? "C8CEC6" : C.muted,
      margin: 0,
      fit: "shrink",
    });
  }
  addFooter(slide, number, { dark, appendix: options.appendix });
}

function newSlide({
  title,
  subtitle,
  kicker,
  dark = false,
  appendix = false,
  titleSize,
  titleWidth,
  subtitleWidth,
  notes,
}) {
  const slide = pptx.addSlide();
  const number = slides.length + 1;
  slide.background = { color: dark ? C.ink : C.paper };
  addHeader(slide, number, title, subtitle, {
    kicker,
    dark,
    appendix,
    titleSize,
    titleWidth,
    subtitleWidth,
  });
  if (notes) slide.addNotes(notes);
  slides.push({ number, title, notes: notes ?? "" });
  return slide;
}

function addPill(slide, text, x, y, w, color = C.limeSoft, textColor = C.ink) {
  slide.addShape(Shape.roundRect, {
    x,
    y,
    w,
    h: 0.32,
    rectRadius: 0.08,
    fill: { color },
    line: { color },
  });
  slide.addText(text, {
    x: x + 0.08,
    y: y + 0.03,
    w: w - 0.16,
    h: 0.24,
    fontSize: 8.5,
    bold: true,
    color: textColor,
    align: "center",
    valign: "mid",
    margin: 0,
    fit: "shrink",
  });
}

function addSectionLabel(slide, text, x, y, w, color = C.muted) {
  slide.addText(text.toUpperCase(), {
    x,
    y,
    w,
    h: 0.18,
    fontSize: 7.5,
    bold: true,
    color,
    charSpacing: 1.3,
    margin: 0,
  });
}

function addBulletList(slide, items, x, y, w, h, options = {}) {
  const runs = [];
  for (const [index, item] of items.entries()) {
    runs.push({
      text: item,
      options: {
        bullet: { indent: options.indent ?? 13 },
        breakLine: index < items.length - 1,
        hanging: 3,
      },
    });
  }
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    fontSize: options.fontSize ?? 11,
    color: options.color ?? C.ink,
    breakLine: false,
    paraSpaceAfterPt: options.paraSpaceAfterPt ?? 8,
    margin: 0,
    valign: "top",
    fit: "shrink",
  });
}

function addImageFrame(slide, path, x, y, w, h, options = {}) {
  slide.addShape(Shape.rect, {
    x: x - 0.04,
    y: y - 0.04,
    w: w + 0.08,
    h: h + 0.08,
    fill: { color: options.frameColor ?? C.white },
    line: { color: options.lineColor ?? C.line, width: 0.8 },
    shadow: options.shadow
      ? {
          type: "outer",
          color: "000000",
          opacity: 0.16,
          blur: 1,
          angle: 45,
          distance: 1,
        }
      : undefined,
  });
  slide.addImage({
    path,
    x,
    y,
    w,
    h,
    sizing: { type: "contain", w, h },
  });
}

function addArrow(slide, x, y, w, color = C.lineStrong) {
  slide.addShape(Shape.chevron, {
    x,
    y,
    w,
    h: 0.26,
    fill: { color },
    line: { color },
  });
}

// 1. Cover
{
  const notes = `0:00-0:20

Hi, I am Naman Jain. Instead of sending only a resume, I wanted to show how I would approach the Commerce PM mission at super.money.

This is a focused product concept for turning UPI frequency into responsible, contribution-positive financed commerce. I built the product thesis, buyer and seller prototype, economics, system design, schema, APIs, and launch plan.`;
  const slide = pptx.addSlide();
  slide.background = { color: C.ink };
  slides.push({ number: 1, title: "Affordable Commerce inside super.money", notes });
  slide.addNotes(notes);
  addBrand(slide, { dark: true });
  slide.addText("AFFORDABLE COMMERCE", {
    x: 0.65,
    y: 1.05,
    w: 4.2,
    h: 0.25,
    fontSize: 10,
    bold: true,
    color: C.lime,
    charSpacing: 2.1,
    margin: 0,
  });
  slide.addText("Affordable Commerce\ninside super.money", {
    x: 0.62,
    y: 1.45,
    w: 6.7,
    h: 1.55,
    fontSize: 38,
    bold: true,
    color: C.white,
    breakLine: true,
    margin: 0,
    fit: "shrink",
  });
  slide.addText(
    "A credit-aware catalogue, native financed checkout, and merchant affordability OS.",
    {
      x: 0.65,
      y: 3.23,
      w: 5.8,
      h: 0.62,
      fontSize: 17,
      color: "D9DED7",
      margin: 0,
      fit: "shrink",
    },
  );
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 4.15,
    w: 5.65,
    h: 1.02,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText(
    "UPI gives frequency.\nCredit gives monetization.\nCommerce gives intent.",
    {
      x: 0.92,
      y: 4.37,
      w: 5.1,
      h: 0.58,
      fontSize: 16,
      bold: true,
      color: C.ink,
      margin: 0,
      breakLine: true,
      fit: "shrink",
    },
  );
  addImageFrame(
    slide,
    resolve(screenshots, "mobile-home.png"),
    8.42,
    0.78,
    2.5,
    5.41,
    { frameColor: C.inkSoft, lineColor: "444944", shadow: true },
  );
  slide.addShape(Shape.rect, {
    x: 7.65,
    y: 5.47,
    w: 4.3,
    h: 1.0,
    fill: { color: C.cobalt },
    line: { color: C.cobalt },
  });
  slide.addText("Product concept + clickable prototype", {
    x: 7.93,
    y: 5.72,
    w: 3.75,
    h: 0.25,
    fontSize: 12,
    bold: true,
    color: C.white,
    align: "center",
    margin: 0,
  });
  slide.addText("Naman Jain  |  Product Manager - Commerce", {
    x: 0.65,
    y: 6.55,
    w: 5.4,
    h: 0.28,
    fontSize: 10.5,
    color: "AEB5AC",
    margin: 0,
  });
  addFooter(slide, 1, { dark: true });
}

// 2. Opportunity
{
  const slide = newSlide({
    kicker: "THE OPPORTUNITY",
    title: "Do not put a generic marketplace inside a UPI app.",
    subtitle:
      "Use payments frequency and financial signals to make discovery affordable, responsible, and commercially viable.",
    titleWidth: 10.8,
    notes: `0:20-0:55

My starting point is what not to build. A generic marketplace would compete on breadth, logistics, and discounting. That is not the differentiated advantage of a high-frequency payments app.

The stronger wedge is to use payment frequency and financial context to qualify demand. The user should see products that fit what they can responsibly pay today, while the platform also checks SKU risk, seller economics, and lender rules.

That creates a commerce experience whose ranking objective is not clicks or raw GMV. It is contribution-positive financed GMV from repeat users.`,
  });

  const blocks = [
    {
      n: "01",
      title: "UPI frequency",
      body: "Daily habit creates trusted entry points and live cash-flow signals.",
      color: C.cobaltSoft,
      accent: C.cobalt,
    },
    {
      n: "02",
      title: "Commerce intent",
      body: "Useful, narrow categories convert a payment relationship into demand.",
      color: C.limeSoft,
      accent: C.limeDark,
    },
    {
      n: "03",
      title: "Responsible credit",
      body: "Pre-qualified plans lower upfront cost without hiding the obligation.",
      color: C.mint,
      accent: C.mintDark,
    },
  ];
  blocks.forEach((block, index) => {
    const x = 0.65 + index * 4.15;
    slide.addShape(Shape.rect, {
      x,
      y: 2.48,
      w: 3.73,
      h: 2.3,
      fill: { color: block.color },
      line: { color: block.color },
    });
    slide.addText(block.n, {
      x: x + 0.25,
      y: 2.72,
      w: 0.55,
      h: 0.35,
      fontSize: 19,
      bold: true,
      color: block.accent,
      margin: 0,
    });
    slide.addText(block.title, {
      x: x + 0.25,
      y: 3.2,
      w: 3.15,
      h: 0.35,
      fontSize: 18,
      bold: true,
      color: C.ink,
      margin: 0,
    });
    slide.addText(block.body, {
      x: x + 0.25,
      y: 3.72,
      w: 3.12,
      h: 0.66,
      fontSize: 11,
      color: C.muted,
      margin: 0,
      fit: "shrink",
    });
    if (index < blocks.length - 1) addArrow(slide, x + 3.78, 3.48, 0.26, C.lineStrong);
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 5.16,
    w: 12.05,
    h: 1.15,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addText("NORTH STAR", {
    x: 0.95,
    y: 5.42,
    w: 1.35,
    h: 0.2,
    fontSize: 8.5,
    bold: true,
    color: C.lime,
    charSpacing: 1.4,
    margin: 0,
  });
  slide.addText("Contribution-positive financed GMV from repeat users", {
    x: 2.38,
    y: 5.33,
    w: 8.9,
    h: 0.38,
    fontSize: 20,
    bold: true,
    color: C.white,
    margin: 0,
  });
  slide.addText("Not raw GMV", {
    x: 11.35,
    y: 5.42,
    w: 1.02,
    h: 0.24,
    fontSize: 9,
    bold: true,
    color: C.coral,
    align: "right",
    margin: 0,
  });
}

// 3. Personas
{
  const slide = newSlide({
    kicker: "PERSONAS",
    title: "Two users, one shared affordability problem.",
    subtitle:
      "The buyer needs certainty about cash flow. The seller needs measurable conversion without becoming a lender.",
    notes: `0:55-1:25

The first buyer persona is Asha, a 26-year-old salaried user in Bengaluru. She uses UPI daily, has a thin credit file, and avoids unclear fees. Her question is simple: what can I buy now, what is due today, and what happens after purchase?

The supply-side persona is a value merchant. The merchant wants higher conversion and AOV, but does not want to integrate multiple lenders, reconcile loan states, or spend on discounts that would have converted anyway.

The product must solve both jobs in the same transaction. Buyer transparency and seller incrementality cannot be designed separately.`,
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 2.42,
    w: 5.72,
    h: 3.72,
    fill: { color: C.white },
    line: { color: C.line },
  });
  slide.addShape(Shape.ellipse, {
    x: 0.95,
    y: 2.78,
    w: 0.88,
    h: 0.88,
    fill: { color: C.cobaltSoft },
    line: { color: C.cobaltSoft },
  });
  slide.addText("AM", {
    x: 0.95,
    y: 3.05,
    w: 0.88,
    h: 0.2,
    fontSize: 13,
    bold: true,
    align: "center",
    color: C.cobalt,
    margin: 0,
  });
  slide.addText("Asha, 26", {
    x: 2.05,
    y: 2.79,
    w: 2.2,
    h: 0.32,
    fontSize: 20,
    bold: true,
    color: C.ink,
    margin: 0,
  });
  slide.addText("First-job salaried user  |  Bengaluru", {
    x: 2.07,
    y: 3.19,
    w: 3.45,
    h: 0.24,
    fontSize: 10,
    color: C.muted,
    margin: 0,
  });
  addSectionLabel(slide, "Jobs to be done", 0.96, 3.91, 2.0);
  addBulletList(
    slide,
    [
      "Know the exact amount due today before browsing deeply",
      "Compare transparent plans without credit-card anxiety",
      "Track order, loan, refund, and repayment in one place",
    ],
    1.0,
    4.22,
    4.9,
    1.38,
    { fontSize: 11 },
  );
  addPill(slide, "Thin-file, not high-risk by default", 1.0, 5.69, 2.55, C.cobaltSoft, C.cobalt);

  slide.addShape(Shape.rect, {
    x: 6.65,
    y: 2.42,
    w: 6.05,
    h: 3.72,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addShape(Shape.roundRect, {
    x: 6.95,
    y: 2.78,
    w: 0.88,
    h: 0.88,
    rectRadius: 0.06,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("VK", {
    x: 6.95,
    y: 3.05,
    w: 0.88,
    h: 0.2,
    fontSize: 13,
    bold: true,
    align: "center",
    color: C.ink,
    margin: 0,
  });
  slide.addText("Value merchant", {
    x: 8.05,
    y: 2.79,
    w: 2.8,
    h: 0.32,
    fontSize: 20,
    bold: true,
    color: C.white,
    margin: 0,
  });
  slide.addText("Mobile accessories / small appliances", {
    x: 8.07,
    y: 3.19,
    w: 3.7,
    h: 0.24,
    fontSize: 10,
    color: "B8BFB6",
    margin: 0,
  });
  addSectionLabel(slide, "Jobs to be done", 6.98, 3.91, 2.0, C.lime);
  addBulletList(
    slide,
    [
      "Make more SKUs financeable without integrating lenders",
      "Fund only offers that create incremental conversion",
      "Reconcile orders, refunds, fees, and settlement cleanly",
    ],
    7.02,
    4.22,
    5.0,
    1.38,
    { fontSize: 11, color: C.white },
  );
  addPill(slide, "Pays for measured outcomes", 7.02, 5.69, 2.18, "3B4430", C.lime);
}

// 4. Scope
{
  const slide = newSlide({
    kicker: "NARROW SCOPE",
    title: "Three connected functions, not marketplace breadth.",
    subtitle:
      "Each function closes a specific commerce-credit loop and has a measurable P&L consequence.",
    notes: `1:25-1:55

I narrowed the initial scope to three connected functions.

First, a credit-aware affordable catalogue that ranks financeable SKUs by what the user can pay today.

Second, a native PayLater and EMI-on-UPI checkout that makes the lender, KFS, fees, mandate, and fallback explicit.

Third, a merchant affordability OS for catalogue onboarding, SKU eligibility, offer funding, orders, settlements, and analytics.

I would explicitly keep broad marketplace breadth, inventory ownership, high-risk categories, long-tenor lending, and a full underwriting or collections stack outside the first release.`,
  });
  const functions = [
    {
      no: "01",
      name: "Credit-aware catalogue",
      promise: "Show only relevant, financeable choices with the upfront amount first.",
      metric: "PDP open + quote view",
      impact: "Qualified demand",
      color: C.cobalt,
      soft: C.cobaltSoft,
    },
    {
      no: "02",
      name: "Native financed checkout",
      promise: "Orchestrate payment, mandate, loan, and order behind one review.",
      metric: "Cart-to-order success",
      impact: "Less abandonment",
      color: C.limeDark,
      soft: C.limeSoft,
    },
    {
      no: "03",
      name: "Merchant affordability OS",
      promise: "Make SKU and offer economics visible before a seller spends.",
      metric: "Incremental conversion",
      impact: "Profitable supply",
      color: C.coral,
      soft: C.coralSoft,
    },
  ];
  functions.forEach((item, index) => {
    const x = 0.65 + index * 4.15;
    slide.addShape(Shape.rect, {
      x,
      y: 2.38,
      w: 3.72,
      h: 3.24,
      fill: { color: item.soft },
      line: { color: item.soft },
    });
    slide.addText(item.no, {
      x: x + 0.25,
      y: 2.67,
      w: 0.52,
      h: 0.3,
      fontSize: 17,
      bold: true,
      color: item.color,
      margin: 0,
    });
    slide.addText(item.name, {
      x: x + 0.25,
      y: 3.16,
      w: 3.18,
      h: 0.52,
      fontSize: 18,
      bold: true,
      color: C.ink,
      margin: 0,
      fit: "shrink",
    });
    slide.addText(item.promise, {
      x: x + 0.25,
      y: 3.83,
      w: 3.08,
      h: 0.66,
      fontSize: 10.5,
      color: C.muted,
      margin: 0,
      fit: "shrink",
    });
    addSectionLabel(slide, "Primary metric", x + 0.25, 4.73, 1.5, item.color);
    slide.addText(item.metric, {
      x: x + 0.25,
      y: 4.99,
      w: 2.0,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.ink,
      margin: 0,
    });
    addPill(slide, item.impact, x + 2.18, 4.92, 1.18, C.white, item.color);
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 5.95,
    w: 12.05,
    h: 0.73,
    fill: { color: C.white },
    line: { color: C.line },
  });
  slide.addText("OUT OF SCOPE", {
    x: 0.9,
    y: 6.2,
    w: 1.2,
    h: 0.18,
    fontSize: 8,
    bold: true,
    color: C.coral,
    charSpacing: 1.3,
    margin: 0,
  });
  slide.addText(
    "Broad marketplace  |  Inventory ownership  |  High-return categories  |  Long-tenor shopping loans  |  Full LMS / collections stack",
    {
      x: 2.15,
      y: 6.13,
      w: 10.2,
      h: 0.28,
      fontSize: 9.5,
      color: C.muted,
      margin: 0,
      fit: "shrink",
    },
  );
}

// 5. Buyer flow
{
  const slide = newSlide({
    kicker: "BUYER MOBILE",
    title: "Affordability starts discovery - it does not interrupt checkout.",
    subtitle:
      "Every screen answers a credit question before the user is asked to commit.",
    titleWidth: 11.3,
    notes: `1:55-2:50

The buyer journey starts on the UPI home with a pre-qualified shopping limit. This converts a payment habit into qualified commerce intent without opening an endless marketplace.

In discovery and on the product page, the amount due today is more prominent than the total price. Asha sees the approved plan, dates, lender, zero fees, return policy, and full UPI fallback before checkout.

Checkout then asks for one informed confirmation. Behind that, the platform coordinates the down payment, AutoPay mandate, loan booking, and seller order.

The confirmation does not split the experience into a seller order and a lender account. It presents one timeline with order ID, loan ID, delivery, and next due date. That unified obligation is important for trust, support cost, and repayment quality.`,
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 2.42,
    w: 3.15,
    h: 3.93,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  addSectionLabel(slide, "The product decisions", 0.95, 2.76, 2.2, C.lime);
  addBulletList(
    slide,
    [
      "Activate with a responsible limit, not a sale banner",
      "Rank by upfront affordability and approval fit",
      "Show lender, fees, KFS, dates, and fallback early",
      "Unify order and repayment after purchase",
    ],
    0.98,
    3.18,
    2.45,
    2.05,
    { fontSize: 11, color: C.white, paraSpaceAfterPt: 10 },
  );
  addPill(slide, "Buyer app = mobile", 0.98, 5.65, 1.62, "3B4430", C.lime);

  const mobileShots = [
    ["1. ACTIVATE", "mobile-home.png"],
    ["2. EXPLAIN", "mobile-product.png"],
    ["3. CONSENT", "mobile-checkout.png"],
    ["4. UNIFY", "mobile-success.png"],
  ];
  mobileShots.forEach(([label, file], index) => {
    const x = 4.04 + index * 2.14;
    addSectionLabel(slide, label, x, 2.36, 1.74, index === 1 ? C.cobalt : C.muted);
    addImageFrame(slide, resolve(screenshots, file), x, 2.69, 1.8, 3.9, {
      shadow: true,
    });
    if (index < mobileShots.length - 1) addArrow(slide, x + 1.87, 4.47, 0.18, C.lineStrong);
  });
}

// 6. Seller flow
{
  const slide = newSlide({
    kicker: "SELLER WEB PORTAL",
    title: "The supply side is an affordability operating system.",
    subtitle:
      "Sellers should manage SKU quality, offer incrementality, fulfilment, and payout - not lender workflows.",
    notes: `2:50-3:40

The seller experience is a desktop operating portal.

Catalogue eligibility is evaluated per SKU, not just per merchant. Category risk, price, margin, stock, seller SLA, returns, and lender rules decide whether an item can carry a plan.

The affordability simulator makes seller funding an economic decision. A merchant can change subvention and the customer upfront amount, then see forecast conversion, cost per order, and net contribution before publishing a controlled test.

Once orders arrive, the merchant sees one commerce state. Payment authorization and loan booking are already coordinated; the seller only fulfils. Settlements then reconcile platform fees, offer funding, refund reversals, and net payout.

This is the path to a white-label affordability product through Breeze as well as in-app commerce.`,
  });
  const sellerShots = [
    {
      label: "SKU-LEVEL CATALOGUE",
      file: "seller-catalogue.png",
      caption: "Financeability, inventory, returns, and contribution per SKU",
    },
    {
      label: "OFFER SIMULATOR",
      file: "seller-affordability.png",
      caption: "Fund the smallest offer that creates measurable lift",
    },
    {
      label: "SHARED ORDER STATE",
      file: "seller-orders.png",
      caption: "One fulfilment workflow across payment, loan, and settlement",
    },
  ];
  sellerShots.forEach((item, index) => {
    const x = 0.65 + index * 4.15;
    addSectionLabel(slide, item.label, x, 2.37, 3.7, index === 1 ? C.limeDark : C.muted);
    addImageFrame(slide, resolve(screenshots, item.file), x, 2.72, 3.72, 2.33, {
      shadow: true,
    });
    slide.addText(item.caption, {
      x,
      y: 5.3,
      w: 3.72,
      h: 0.5,
      fontSize: 10.3,
      bold: true,
      color: C.ink,
      align: "center",
      margin: 0,
      fit: "shrink",
    });
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.02,
    w: 12.05,
    h: 0.62,
    fill: { color: C.limeSoft },
    line: { color: C.limeSoft },
  });
  slide.addText(
    "Merchant promise: higher conversion and AOV without building a lending stack.",
    {
      x: 0.92,
      y: 6.2,
      w: 11.5,
      h: 0.24,
      fontSize: 12,
      bold: true,
      color: C.ink,
      align: "center",
      margin: 0,
    },
  );
}

// 7. Checkout depth
{
  const slide = newSlide({
    kicker: "FINTECH DEPTH",
    title: "One customer action coordinates four independently failing systems.",
    subtitle:
      "The checkout orchestrator owns idempotency, state transitions, compensation, and one customer timeline.",
    titleWidth: 11.6,
    notes: `3:40-4:25

This is where the problem becomes a fintech lending platform problem rather than a commerce UI problem.

A single purchase can fail at payment, mandate creation, lender booking, or seller order placement. The checkout orchestrator therefore needs an explicit state machine and idempotency key for every external action.

For example, if the down payment succeeds but the loan fails, release or refund the payment. If the loan books but the order fails, cancel or reverse the loan before presenting success. If an order is later returned, adjust outstanding principal first and only then calculate any user refund.

The customer should not see internal compensation mechanics, but support and operations need the complete joined event history. That is why checkout session is the central entity linking quote, payment, loan, order, mandate, and refund.`,
  });
  const states = [
    ["01", "Quote locked", C.cobaltSoft, C.cobalt],
    ["02", "Consent + KFS", C.limeSoft, C.limeDark],
    ["03", "Pay + mandate", C.amberSoft, C.amber],
    ["04", "Loan booked", C.mint, C.mintDark],
    ["05", "Order placed", C.coralSoft, C.coral],
  ];
  states.forEach(([no, label, fill, accent], index) => {
    const x = 0.65 + index * 2.48;
    slide.addShape(Shape.rect, {
      x,
      y: 2.48,
      w: 2.12,
      h: 1.03,
      fill: { color: fill },
      line: { color: fill },
    });
    slide.addText(no, {
      x: x + 0.18,
      y: 2.68,
      w: 0.38,
      h: 0.21,
      fontSize: 10,
      bold: true,
      color: accent,
      margin: 0,
    });
    slide.addText(label, {
      x: x + 0.18,
      y: 2.99,
      w: 1.75,
      h: 0.23,
      fontSize: 11.5,
      bold: true,
      color: C.ink,
      margin: 0,
      fit: "shrink",
    });
    if (index < states.length - 1) addArrow(slide, x + 2.18, 2.86, 0.2, C.lineStrong);
  });

  const compensations = [
    ["Payment succeeds, loan fails", "Release / refund down payment"],
    ["Loan books, order fails", "Cancel loan before success"],
    ["Return after delivery", "Adjust principal, then user refund"],
  ];
  compensations.forEach(([failure, action], index) => {
    const y = 3.98 + index * 0.63;
    slide.addShape(Shape.roundRect, {
      x: 0.65,
      y,
      w: 3.78,
      h: 0.43,
      rectRadius: 0.04,
      fill: { color: C.coralSoft },
      line: { color: C.coralSoft },
    });
    slide.addText(failure, {
      x: 0.84,
      y: y + 0.12,
      w: 3.4,
      h: 0.18,
      fontSize: 9.5,
      bold: true,
      color: C.coral,
      margin: 0,
    });
    addArrow(slide, 4.55, y + 0.08, 0.32, C.lineStrong);
    slide.addShape(Shape.roundRect, {
      x: 5.0,
      y,
      w: 3.72,
      h: 0.43,
      rectRadius: 0.04,
      fill: { color: C.mint },
      line: { color: C.mint },
    });
    slide.addText(action, {
      x: 5.19,
      y: y + 0.12,
      w: 3.35,
      h: 0.18,
      fontSize: 9.5,
      bold: true,
      color: C.mintDark,
      margin: 0,
    });
  });
  slide.addShape(Shape.rect, {
    x: 9.13,
    y: 3.98,
    w: 3.57,
    h: 1.69,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  addSectionLabel(slide, "Non-negotiable controls", 9.42, 4.28, 2.8, C.lime);
  addBulletList(
    slide,
    [
      "Idempotency on every external action",
      "Persisted consent and KFS version",
      "Full-UPI fallback",
      "Unified support timeline",
    ],
    9.46,
    4.62,
    2.85,
    0.8,
    { fontSize: 9.5, color: C.white, paraSpaceAfterPt: 5 },
  );
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.02,
    w: 12.05,
    h: 0.62,
    fill: { color: C.cobaltSoft },
    line: { color: C.cobaltSoft },
  });
  slide.addText(
    "Central key: checkout_session_id links quote, payment, mandate, loan, order, refund, and support events.",
    {
      x: 0.93,
      y: 6.2,
      w: 11.5,
      h: 0.23,
      fontSize: 11.5,
      bold: true,
      color: C.cobalt,
      align: "center",
      margin: 0,
    },
  );
}

// 8. Economics
{
  const slide = newSlide({
    kicker: "ILLUSTRATIVE P&L",
    title: "Scale the cohorts that repay and repeat - not the GMV that looks large.",
    subtitle:
      "A simple funnel is useful only when revenue, incentives, returns, operations, and credit loss are joined.",
    titleWidth: 11.7,
    notes: `4:25-5:00

I would manage this as a business line, so the product model needs an explicit contribution equation.

This illustrative case starts with five million exposed active users. With an eight percent commerce entry rate, thirty-five percent PDP conversion, thirty percent checkout start, and forty-five percent financed completion, it produces about eighteen thousand nine hundred monthly orders.

At a three-thousand-rupee AOV, that is roughly five-point-seven crore of financed GMV. If net revenue is three percent and variable cost is one-point-seven percent, contribution is about one-point-three percent of GMV, or seven-point-four lakh per month before fixed cost.

The number is deliberately modest. The early objective is to identify which cohorts, SKUs, sellers, and offer constructs produce repeat contribution after returns and delinquency. Scale should follow repayment performance.`,
  });
  addSectionLabel(slide, "Monthly funnel", 0.65, 2.4, 2.0);
  const funnel = [
    ["5.0M", "UPI users exposed", 4.8, C.cobalt],
    ["400K", "Commerce entries", 4.1, "5B7EEA"],
    ["140K", "Product views", 3.4, "7E99EF"],
    ["42K", "Checkout starts", 2.75, "A6B8F4"],
    ["18.9K", "Orders", 2.15, C.lime],
  ];
  funnel.forEach(([value, label, width, color], index) => {
    const y = 2.78 + index * 0.63;
    const x = 0.65 + (4.8 - width) / 2;
    slide.addShape(Shape.rect, {
      x,
      y,
      w: width,
      h: 0.47,
      fill: { color },
      line: { color },
    });
    slide.addText(`${value}  ${label}`, {
      x: x + 0.15,
      y: y + 0.13,
      w: width - 0.3,
      h: 0.18,
      fontSize: 9.5,
      bold: true,
      color: index === 4 ? C.ink : C.white,
      align: "center",
      margin: 0,
      fit: "shrink",
    });
  });

  slide.addShape(Shape.rect, {
    x: 6.15,
    y: 2.42,
    w: 6.55,
    h: 3.65,
    fill: { color: C.white },
    line: { color: C.line },
  });
  addSectionLabel(slide, "Per-month output", 6.5, 2.78, 2.4, C.cobalt);
  slide.addText("₹5.7 Cr", {
    x: 6.47,
    y: 3.12,
    w: 2.15,
    h: 0.55,
    fontSize: 30,
    bold: true,
    color: C.ink,
    margin: 0,
  });
  slide.addText("financed GMV", {
    x: 6.5,
    y: 3.7,
    w: 1.75,
    h: 0.22,
    fontSize: 10,
    color: C.muted,
    margin: 0,
  });
  const economics = [
    ["Net revenue", "3.0%", C.cobalt],
    ["Variable cost", "1.7%", C.coral],
    ["Contribution", "1.3%", C.mintDark],
  ];
  economics.forEach(([label, value, color], index) => {
    const y = 4.25 + index * 0.48;
    slide.addText(label, {
      x: 6.5,
      y,
      w: 1.45,
      h: 0.2,
      fontSize: 10,
      color: C.muted,
      margin: 0,
    });
    slide.addShape(Shape.rect, {
      x: 8.05,
      y: y + 0.03,
      w: index === 0 ? 2.65 : index === 1 ? 1.5 : 1.15,
      h: 0.14,
      fill: { color },
      line: { color },
    });
    slide.addText(value, {
      x: 10.92,
      y,
      w: 0.72,
      h: 0.2,
      fontSize: 10.5,
      bold: true,
      color,
      align: "right",
      margin: 0,
    });
  });
  slide.addShape(Shape.rect, {
    x: 11.72,
    y: 3.11,
    w: 0.68,
    h: 2.36,
    fill: { color: C.limeSoft },
    line: { color: C.limeSoft },
  });
  slide.addText("₹7.4L", {
    x: 11.77,
    y: 3.72,
    w: 0.58,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: C.limeDark,
    rotate: 270,
    align: "center",
    margin: 0,
  });
  slide.addText("contribution", {
    x: 11.77,
    y: 4.16,
    w: 0.58,
    h: 0.55,
    fontSize: 8,
    bold: true,
    color: C.limeDark,
    rotate: 270,
    align: "center",
    margin: 0,
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.28,
    w: 12.05,
    h: 0.4,
    fill: { color: C.amberSoft },
    line: { color: C.amberSoft },
  });
  slide.addText(
    "Illustrative assumptions, not a forecast. Expansion gate = repeat contribution after refunds, incentives, fraud, and expected credit loss.",
    {
      x: 0.9,
      y: 6.39,
      w: 11.55,
      h: 0.18,
      fontSize: 8.8,
      bold: true,
      color: "8A5C00",
      align: "center",
      margin: 0,
    },
  );
}

// 9. Metrics and experiments
{
  const slide = newSlide({
    kicker: "MEASUREMENT",
    title: "A metric tree that protects growth from credit and incentive leakage.",
    subtitle:
      "The North Star only moves when conversion, repayment, and unit economics improve together.",
    notes: `5:00-5:25

The measurement model starts with one North Star and three guardrail families.

Growth covers qualified entry, checkout completion, AOV, and repeat. Credit covers mandate success, seven-plus and thirty-plus DPD, and expected loss. Economics covers net contribution per order, refund-adjusted GMV, offer cost, and support cost.

The first experiments should isolate the biggest product decisions: whether upfront affordability labels improve relevant discovery, what down payment balances approval and risk, whether seller subvention creates incremental conversion, and how repayment reminders affect AutoPay success.

Every offer test needs a holdout. Otherwise the merchant may subsidize orders that would have happened anyway.`,
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 2.39,
    w: 12.05,
    h: 0.8,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addText("NORTH STAR", {
    x: 0.98,
    y: 2.67,
    w: 1.1,
    h: 0.18,
    fontSize: 8,
    bold: true,
    color: C.lime,
    charSpacing: 1.4,
    margin: 0,
  });
  slide.addText("Contribution-positive financed GMV from repeat users", {
    x: 2.26,
    y: 2.56,
    w: 8.5,
    h: 0.3,
    fontSize: 18.5,
    bold: true,
    color: C.white,
    margin: 0,
  });
  const metricGroups = [
    {
      title: "GROWTH",
      color: C.cobalt,
      soft: C.cobaltSoft,
      items: ["Eligible-user activation", "Checkout completion", "AOV + 60-day repeat"],
    },
    {
      title: "CREDIT",
      color: C.mintDark,
      soft: C.mint,
      items: ["Mandate success", "7+ / 30+ DPD", "Expected loss by cohort"],
    },
    {
      title: "ECONOMICS",
      color: C.coral,
      soft: C.coralSoft,
      items: ["Contribution / order", "Refund-adjusted GMV", "Offer + support cost"],
    },
  ];
  metricGroups.forEach((group, index) => {
    const x = 0.65 + index * 4.15;
    slide.addShape(Shape.rect, {
      x,
      y: 3.48,
      w: 3.72,
      h: 1.55,
      fill: { color: group.soft },
      line: { color: group.soft },
    });
    addSectionLabel(slide, group.title, x + 0.25, 3.76, 1.5, group.color);
    addBulletList(slide, group.items, x + 0.26, 4.1, 3.0, 0.67, {
      fontSize: 10.5,
      paraSpaceAfterPt: 5,
    });
  });
  addSectionLabel(slide, "First controlled experiments", 0.65, 5.34, 3.3);
  const experiments = [
    "Upfront label",
    "Down payment",
    "Seller subvention",
    "Repayment reminder",
  ];
  experiments.forEach((item, index) => {
    const x = 0.65 + index * 3.02;
    slide.addShape(Shape.roundRect, {
      x,
      y: 5.72,
      w: 2.68,
      h: 0.62,
      rectRadius: 0.05,
      fill: { color: C.white },
      line: { color: C.line },
    });
    slide.addText(`${index + 1}. ${item}`, {
      x: x + 0.18,
      y: 5.92,
      w: 2.3,
      h: 0.2,
      fontSize: 10.5,
      bold: true,
      color: C.ink,
      align: "center",
      margin: 0,
      fit: "shrink",
    });
  });
}

// 10. Roadmap
{
  const slide = newSlide({
    kicker: "90-DAY MVP",
    title: "Build one closed loop before adding catalogue breadth.",
    subtitle:
      "Launch with three categories, eligible users, one core BNPL plan, and a full-UPI fallback.",
    notes: `5:25-5:50

The first ninety days are designed to answer one question: can credit-aware discovery and seller-funded affordability create repeat, contribution-positive commerce?

Days zero to fifteen define user, seller, category, lender, and compliance constraints using interviews and existing funnel data.

Days sixteen to thirty lock the buyer and seller prototype, API contracts, schema, refund design, and experiment plan.

Days thirty-one to sixty build the closed loop: catalogue ingestion, eligibility, quote, checkout orchestration, lender adapter, order bridge, repayment ledger, and support timeline.

Days sixty-one to ninety launch a controlled beta with three categories and twenty to fifty sellers or a controlled catalogue. Expansion is a go or no-go decision based on conversion, repeat, DPD, and contribution.`,
  });
  const phases = [
    {
      days: "0-15",
      title: "Define constraints",
      items: ["User + seller research", "Lender / compliance map", "Category + risk rules"],
      color: C.cobalt,
      soft: C.cobaltSoft,
    },
    {
      days: "16-30",
      title: "Lock the contract",
      items: ["Clickable prototype", "Schema + API contracts", "Refund + experiment plan"],
      color: C.limeDark,
      soft: C.limeSoft,
    },
    {
      days: "31-60",
      title: "Build the loop",
      items: ["Eligibility + quote", "Checkout + lender + order", "Ledger + support timeline"],
      color: C.mintDark,
      soft: C.mint,
    },
    {
      days: "61-90",
      title: "Controlled beta",
      items: ["3 categories", "20-50 sellers", "Daily funnel + risk review"],
      color: C.coral,
      soft: C.coralSoft,
    },
  ];
  phases.forEach((phase, index) => {
    const x = 0.65 + index * 3.02;
    slide.addShape(Shape.rect, {
      x,
      y: 2.5,
      w: 2.68,
      h: 3.23,
      fill: { color: phase.soft },
      line: { color: phase.soft },
    });
    slide.addText(`DAYS ${phase.days}`, {
      x: x + 0.22,
      y: 2.79,
      w: 1.25,
      h: 0.2,
      fontSize: 8,
      bold: true,
      color: phase.color,
      charSpacing: 1.2,
      margin: 0,
    });
    slide.addText(phase.title, {
      x: x + 0.22,
      y: 3.22,
      w: 2.24,
      h: 0.5,
      fontSize: 17,
      bold: true,
      color: C.ink,
      margin: 0,
      fit: "shrink",
    });
    addBulletList(slide, phase.items, x + 0.24, 4.02, 2.1, 1.08, {
      fontSize: 10,
      paraSpaceAfterPt: 7,
    });
    slide.addShape(Shape.ellipse, {
      x: x + 2.23,
      y: 2.71,
      w: 0.24,
      h: 0.24,
      fill: { color: phase.color },
      line: { color: phase.color },
    });
    if (index < phases.length - 1) addArrow(slide, x + 2.75, 4.02, 0.18, C.lineStrong);
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.02,
    w: 12.05,
    h: 0.62,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addText("GO / NO-GO AT DAY 90", {
    x: 0.94,
    y: 6.22,
    w: 1.85,
    h: 0.18,
    fontSize: 8,
    bold: true,
    color: C.lime,
    charSpacing: 1.3,
    margin: 0,
  });
  slide.addText(
    "Checkout completion  |  60-day repeat  |  DPD within threshold  |  Contribution improving week on week",
    {
      x: 3.0,
      y: 6.16,
      w: 9.2,
      h: 0.26,
      fontSize: 9.8,
      bold: true,
      color: C.white,
      margin: 0,
      fit: "shrink",
    },
  );
}

// 11. Close
{
  const slide = newSlide({
    kicker: "THE BET",
    title: "Make affordability a system capability, not a checkout widget.",
    subtitle:
      "The focused wedge connects buyer trust, seller incrementality, and lending discipline.",
    dark: true,
    titleWidth: 10.8,
    notes: `5:50-6:10

The core bet is that affordability should be a system capability, not a checkout widget.

Credit should shape which products are discovered. Checkout should coordinate the regulated obligation. The seller platform should prove incrementality and contribution before funding an offer.

The prototype and accompanying document make the assumptions explicit, including what I would not build first. I would value the opportunity to walk through the decisions, compare them with what the super.money team is learning, and then adjust the roadmap from real user, seller, risk, and P&L data.

Thank you for watching.`,
  });
  slide.addText(
    "Credit-aware discovery\n+\nNative financed checkout\n+\nMerchant affordability OS",
    {
      x: 0.7,
      y: 2.45,
      w: 4.55,
      h: 2.72,
      fontSize: 22,
      bold: true,
      color: C.white,
      align: "center",
      valign: "mid",
      margin: 0,
      fit: "shrink",
    },
  );
  slide.addShape(Shape.line, {
    x: 5.55,
    y: 2.4,
    w: 0,
    h: 3.0,
    line: { color: "444944", width: 1.2 },
  });
  slide.addText("WHAT I BUILT", {
    x: 6.1,
    y: 2.47,
    w: 2.0,
    h: 0.2,
    fontSize: 8.5,
    bold: true,
    color: C.lime,
    charSpacing: 1.6,
    margin: 0,
  });
  addBulletList(
    slide,
    [
      "Mobile buyer prototype",
      "Seller operations portal",
      "Product, P&L, and GTM blueprint",
      "System, schema, and API design",
      "90-day experiment-led launch plan",
    ],
    6.12,
    2.9,
    3.65,
    2.1,
    { fontSize: 13, color: C.white, paraSpaceAfterPt: 10 },
  );
  slide.addShape(Shape.rect, {
    x: 9.95,
    y: 2.46,
    w: 2.72,
    h: 2.55,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("OPEN THE\nPROTOTYPE", {
    x: 10.25,
    y: 3.1,
    w: 2.12,
    h: 0.74,
    fontSize: 20,
    bold: true,
    color: C.ink,
    align: "center",
    margin: 0,
    fit: "shrink",
    hyperlink: { url: prototypeUrl },
  });
  slide.addText(prototypeUrl.replace("https://", ""), {
    x: 9.93,
    y: 5.35,
    w: 2.8,
    h: 0.58,
    fontSize: 8.4,
    color: "BFC5BD",
    align: "center",
    margin: 0,
    fit: "shrink",
    hyperlink: { url: prototypeUrl },
  });
  slide.addText("Naman Jain", {
    x: 0.7,
    y: 6.2,
    w: 2.1,
    h: 0.28,
    fontSize: 13,
    bold: true,
    color: C.lime,
    margin: 0,
  });
}

// 12. Architecture appendix
{
  const slide = newSlide({
    kicker: "APPENDIX A",
    title: "System architecture: personalized supply into one orchestrated obligation.",
    subtitle:
      "Separate decisioning, orchestration, and ledgers so each can scale and fail independently.",
    appendix: true,
    titleSize: 25,
    titleWidth: 11.5,
    notes: `Appendix.

Use this slide only if the audience asks how the product hangs together technically.

The left side ingests user financial signals and seller catalogue data. Eligibility and offer services combine those constraints into user-SKU quotes. The checkout orchestrator then coordinates payment, mandate, lender, and order adapters. Events populate the repayment ledger, refund reconciliation, unified timeline, seller settlement, and analytics.`,
  });
  const boxes = [
    [0.65, 2.5, 2.25, 0.72, "Buyer mobile\nSeller portal", C.cobaltSoft, C.cobalt],
    [0.65, 3.55, 2.25, 0.72, "User signals\nCatalogue feeds", C.limeSoft, C.limeDark],
    [3.42, 2.5, 2.28, 0.72, "Catalogue +\nSKU risk", C.white, C.ink],
    [3.42, 3.55, 2.28, 0.72, "Credit eligibility +\noffer engine", C.white, C.ink],
    [6.23, 2.99, 2.42, 0.88, "CHECKOUT\nORCHESTRATOR", C.ink, C.lime],
    [9.17, 2.25, 1.66, 0.62, "Payment", C.cobaltSoft, C.cobalt],
    [11.04, 2.25, 1.66, 0.62, "Mandate", C.amberSoft, C.amber],
    [9.17, 3.12, 1.66, 0.62, "Lender", C.mint, C.mintDark],
    [11.04, 3.12, 1.66, 0.62, "Order", C.coralSoft, C.coral],
  ];
  boxes.forEach(([x, y, w, h, text, fill, color]) => {
    slide.addShape(Shape.rect, {
      x,
      y,
      w,
      h,
      fill: { color: fill },
      line: { color: fill === C.white ? C.line : fill },
    });
    slide.addText(text, {
      x: x + 0.1,
      y: y + 0.13,
      w: w - 0.2,
      h: h - 0.25,
      fontSize: 10.5,
      bold: true,
      color,
      align: "center",
      valign: "mid",
      margin: 0,
      fit: "shrink",
    });
  });
  addArrow(slide, 2.98, 2.75, 0.25, C.lineStrong);
  addArrow(slide, 2.98, 3.8, 0.25, C.lineStrong);
  addArrow(slide, 5.78, 3.3, 0.25, C.lineStrong);
  addArrow(slide, 8.75, 3.3, 0.25, C.lineStrong);
  slide.addShape(Shape.line, {
    x: 1.78,
    y: 4.67,
    w: 9.2,
    h: 0,
    line: { color: C.lineStrong, width: 1.2, beginArrowType: "none", endArrowType: "triangle" },
  });
  addSectionLabel(slide, "Events and read models", 0.65, 4.95, 2.4, C.muted);
  const outputs = [
    "Repayment ledger",
    "Refund reconciliation",
    "Unified timeline",
    "Seller settlement",
    "Risk + analytics",
  ];
  outputs.forEach((text, index) => {
    const x = 0.65 + index * 2.45;
    slide.addShape(Shape.rect, {
      x,
      y: 5.34,
      w: 2.15,
      h: 0.68,
      fill: { color: index === 2 ? C.limeSoft : C.white },
      line: { color: index === 2 ? C.limeSoft : C.line },
    });
    slide.addText(text, {
      x: x + 0.12,
      y: 5.56,
      w: 1.91,
      h: 0.2,
      fontSize: 9.8,
      bold: true,
      color: C.ink,
      align: "center",
      margin: 0,
      fit: "shrink",
    });
  });
}

// 13. Schema appendix
{
  const slide = newSlide({
    kicker: "APPENDIX B",
    title: "Core schema: one checkout session joins commerce and credit.",
    subtitle:
      "The model keeps user eligibility, SKU rules, financial obligation, and fulfilment independently auditable.",
    appendix: true,
    titleWidth: 11.3,
    notes: `Appendix.

The core data-model decision is to make checkout_session the join point, not order or loan alone.

User financial signals and credit profiles determine affordability. Products and product finance rules determine SKU-level eligibility. A quote is frozen into checkout session. Loan, repayment, order, and refund records then remain separate regulated or operational ledgers linked by stable identifiers.`,
  });
  const groups = [
    {
      x: 0.65,
      title: "IDENTITY + RISK",
      color: C.cobalt,
      soft: C.cobaltSoft,
      entities: ["users", "user_financial_signals", "credit_profiles"],
    },
    {
      x: 3.25,
      title: "SUPPLY",
      color: C.limeDark,
      soft: C.limeSoft,
      entities: ["sellers", "products", "product_finance_rules"],
    },
    {
      x: 5.85,
      title: "DECISION + SESSION",
      color: C.amber,
      soft: C.amberSoft,
      entities: ["affordability_quotes", "checkout_sessions"],
    },
    {
      x: 8.45,
      title: "OBLIGATION",
      color: C.mintDark,
      soft: C.mint,
      entities: ["loans", "repayments", "mandates"],
    },
    {
      x: 11.05,
      title: "COMMERCE",
      color: C.coral,
      soft: C.coralSoft,
      entities: ["orders", "refunds", "seller_settlements"],
    },
  ];
  groups.forEach((group, index) => {
    slide.addShape(Shape.rect, {
      x: group.x,
      y: 2.53,
      w: 2.25,
      h: 3.35,
      fill: { color: group.soft },
      line: { color: group.soft },
    });
    addSectionLabel(slide, group.title, group.x + 0.2, 2.83, 1.88, group.color);
    group.entities.forEach((entity, entityIndex) => {
      const y = 3.35 + entityIndex * 0.72;
      slide.addShape(Shape.roundRect, {
        x: group.x + 0.19,
        y,
        w: 1.87,
        h: 0.48,
        rectRadius: 0.04,
        fill: { color: C.white },
        line: { color: C.white },
      });
      slide.addText(entity, {
        x: group.x + 0.3,
        y: y + 0.14,
        w: 1.65,
        h: 0.18,
        fontSize: 8.8,
        bold: entity === "checkout_sessions",
        color: entity === "checkout_sessions" ? C.amber : C.ink,
        align: "center",
        margin: 0,
        fit: "shrink",
      });
    });
    if (index < groups.length - 1) addArrow(slide, group.x + 2.32, 4.26, 0.18, C.lineStrong);
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.18,
    w: 12.05,
    h: 0.48,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addText(
    "Key IDs: user_id  →  product_id  →  quote_id  →  checkout_session_id  →  loan_id + order_id  →  refund_id",
    {
      x: 0.92,
      y: 6.32,
      w: 11.5,
      h: 0.19,
      fontSize: 9.5,
      bold: true,
      color: C.white,
      align: "center",
      margin: 0,
    },
  );
}

// 14. API appendix
{
  const slide = newSlide({
    kicker: "APPENDIX C",
    title: "API surface: personalized commerce in, auditable events out.",
    subtitle:
      "Consumer and merchant contracts share quote, checkout, order, and refund semantics.",
    appendix: true,
    notes: `Appendix.

The consumer APIs personalize home, product listing, affordability, checkout, and the unified timeline.

Merchant APIs support catalogue upsert, affordability quotes, merchant checkout sessions, refunds, and operational webhooks.

All create or confirm endpoints require an idempotency key. Quotes are versioned and expire. Webhooks are signed and replay-safe. The merchant sees super.money checkout semantics rather than lender-specific APIs.`,
  });
  const columns = [
    {
      x: 0.65,
      w: 5.82,
      title: "CONSUMER",
      color: C.cobalt,
      soft: C.cobaltSoft,
      rows: [
        ["GET", "/v1/commerce/home", "Personalized rails"],
        ["GET", "/v1/products", "Affordable catalogue"],
        ["GET", "/v1/products/{id}/affordability", "Eligible plans"],
        ["POST", "/v1/checkout-sessions", "Freeze quote"],
        ["POST", "/v1/checkout-sessions/{id}/confirm", "Orchestrate purchase"],
        ["GET", "/v1/orders/{id}/timeline", "Unified obligation"],
      ],
    },
    {
      x: 6.75,
      w: 5.95,
      title: "MERCHANT",
      color: C.limeDark,
      soft: C.limeSoft,
      rows: [
        ["POST", "/v1/merchants", "Onboard seller"],
        ["POST", "/v1/catalogue/products:bulk_upsert", "Sync supply"],
        ["POST", "/v1/affordability/quote", "White-label quote"],
        ["POST", "/v1/checkout/merchant-session", "Start Breeze flow"],
        ["POST", "/v1/orders/{id}/refund", "Reconcile return"],
        ["POST", "/v1/webhooks/order-status", "Sync fulfilment"],
      ],
    },
  ];
  columns.forEach((column) => {
    slide.addShape(Shape.rect, {
      x: column.x,
      y: 2.43,
      w: column.w,
      h: 3.73,
      fill: { color: C.white },
      line: { color: C.line },
    });
    slide.addShape(Shape.rect, {
      x: column.x,
      y: 2.43,
      w: column.w,
      h: 0.52,
      fill: { color: column.soft },
      line: { color: column.soft },
    });
    addSectionLabel(slide, column.title, column.x + 0.23, 2.61, 1.55, column.color);
    column.rows.forEach(([method, path, purpose], index) => {
      const y = 3.14 + index * 0.47;
      addPill(
        slide,
        method,
        column.x + 0.22,
        y,
        0.62,
        method === "GET" ? C.cobaltSoft : C.limeSoft,
        method === "GET" ? C.cobalt : C.limeDark,
      );
      slide.addText(path, {
        x: column.x + 0.96,
        y: y + 0.07,
        w: 3.43,
        h: 0.2,
        fontFace: "Courier New",
        fontSize: 7.8,
        bold: true,
        color: C.ink,
        margin: 0,
        fit: "shrink",
      });
      slide.addText(purpose, {
        x: column.x + 4.45,
        y: y + 0.07,
        w: column.w - 4.68,
        h: 0.2,
        fontSize: 8.2,
        color: C.muted,
        align: "right",
        margin: 0,
        fit: "shrink",
      });
    });
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.38,
    w: 12.05,
    h: 0.3,
    fill: { color: C.ink },
    line: { color: C.ink },
  });
  slide.addText(
    "Contract rules: idempotency keys  |  quote expiry + version  |  signed webhooks  |  replay protection  |  event audit trail",
    {
      x: 0.9,
      y: 6.46,
      w: 11.55,
      h: 0.16,
      fontSize: 8.4,
      bold: true,
      color: C.white,
      align: "center",
      margin: 0,
    },
  );
}

// 15. Risk appendix
{
  const slide = newSlide({
    kicker: "APPENDIX D",
    title: "Risk guardrails are product requirements, not post-launch controls.",
    subtitle:
      "Responsible limits, SKU restrictions, seller quality, disclosure, and refund design determine whether the flywheel works.",
    appendix: true,
    titleWidth: 11.8,
    notes: `Appendix.

The initial product should control credit loss through small limits, meaningful down payments, short tenors, category restrictions, and repayment-led limit growth.

Return abuse is managed at user, seller, and SKU level. Seller quality requires KYB, risk tiers, SLA monitoring, and settlement controls.

Regulatory trust requires lender disclosure, a versioned KFS, stored consent, clear separation of order and loan contracts, and transparent refund adjustment.

The user-facing mitigation for complexity is one plain-language timeline across purchase, fulfilment, refund, and repayment.`,
  });
  const risks = [
    ["CREDIT LOSS", "Small limits, down payment, short tenor, DPD cohort gates", C.cobaltSoft, C.cobalt],
    ["RETURN ABUSE", "Exclude high-return SKUs; hold limit until resolution", C.coralSoft, C.coral],
    ["SELLER QUALITY", "KYB, risk tiers, SLA monitoring, settlement holds", C.limeSoft, C.limeDark],
    ["REGULATORY", "Lender disclosure, KFS, stored consent, audit trail", C.mint, C.mintDark],
    ["USER CONFUSION", "One timeline; plain refund and repayment language", C.amberSoft, C.amber],
  ];
  risks.forEach(([risk, mitigation, fill, accent], index) => {
    const y = 2.43 + index * 0.78;
    slide.addShape(Shape.rect, {
      x: 0.65,
      y,
      w: 2.2,
      h: 0.58,
      fill: { color: fill },
      line: { color: fill },
    });
    slide.addText(risk, {
      x: 0.86,
      y: y + 0.2,
      w: 1.78,
      h: 0.17,
      fontSize: 8.5,
      bold: true,
      color: accent,
      charSpacing: 1,
      margin: 0,
    });
    addArrow(slide, 3.0, y + 0.16, 0.34, C.lineStrong);
    slide.addShape(Shape.rect, {
      x: 3.52,
      y,
      w: 9.18,
      h: 0.58,
      fill: { color: C.white },
      line: { color: C.line },
    });
    slide.addText(mitigation, {
      x: 3.8,
      y: y + 0.18,
      w: 8.6,
      h: 0.2,
      fontSize: 10.5,
      bold: true,
      color: C.ink,
      margin: 0,
      fit: "shrink",
    });
  });
  slide.addShape(Shape.rect, {
    x: 0.65,
    y: 6.45,
    w: 12.05,
    h: 0.25,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText(
    "Expansion follows repayment quality and contribution - never approval rate alone.",
    {
      x: 0.88,
      y: 6.49,
      w: 11.6,
      h: 0.16,
      fontSize: 8.8,
      bold: true,
      color: C.ink,
      align: "center",
      margin: 0,
    },
  );
}

const deckPath = resolve(outputDir, "super-money-affordable-commerce-pitch.pptx");
await pptx.writeFile({ fileName: deckPath, compression: true });

const mainSlides = slides.slice(0, 11);
const appendixSlides = slides.slice(11);
const notesMarkdown = `# Affordable Commerce Intro Video - Speaker Notes

Recommended length: 5:30 to 6:10

Prototype: ${prototypeUrl}

Use slides 1-11 for the recorded introduction. Slides 12-15 are an appendix for a live follow-up.

${mainSlides
  .map(
    (slide) => `## Slide ${slide.number}: ${slide.title}

${slide.notes}
`,
  )
  .join("\n")}

# Appendix Notes

${appendixSlides
  .map(
    (slide) => `## Slide ${slide.number}: ${slide.title}

${slide.notes}
`,
  )
  .join("\n")}
`;

await writeFile(
  resolve(outputDir, "intro-video-speaker-notes.md"),
  notesMarkdown,
  "utf8",
);

console.log(`Created ${deckPath}`);
console.log(`Created ${resolve(outputDir, "intro-video-speaker-notes.md")}`);
console.log(`Slides: ${slides.length}`);
