import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import pptxgen from "pptxgenjs";

const root = resolve(import.meta.dirname, "..");
const outputDir = resolve(import.meta.dirname, "output");
const screenshots = resolve(root, "prototype", "test-artifacts");

await mkdir(outputDir, { recursive: true });

const pptx = new pptxgen();
pptx.defineLayout({ name: "CUSTOM_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "CUSTOM_WIDE";
pptx.author = "Naman Jain";
pptx.company = "Independent product concept";
pptx.subject = "super.money Affordable Commerce strategy";
pptx.title = "Affordable Commerce after credit";
pptx.lang = "en-IN";
pptx.theme = {
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  lang: "en-IN",
};
pptx.margin = 0;

const S = pptx.ShapeType;
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

const slides = [];

function brand(slide, dark = false) {
  slide.addShape(S.roundRect, {
    x: 0.62, y: 0.34, w: 0.3, h: 0.3,
    rectRadius: 0.05,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("s", {
    x: 0.62, y: 0.35, w: 0.3, h: 0.27,
    fontSize: 15, bold: true, color: C.ink,
    align: "center", valign: "mid", margin: 0,
  });
  slide.addText([
    { text: "super", options: { bold: true } },
    { text: ".money", options: { bold: true, color: C.lime } },
  ], {
    x: 1.02, y: 0.35, w: 1.45, h: 0.3,
    fontSize: 13, color: dark ? C.white : C.ink, margin: 0,
  });
}

function footer(slide, number, { dark = false, appendix = false } = {}) {
  slide.addShape(S.line, {
    x: 0.62, y: 7.12, w: 12.08, h: 0,
    line: { color: dark ? "414641" : C.line, width: 0.7 },
  });
  slide.addText(appendix ? "TECHNICAL APPENDIX" : "AFFORDABLE COMMERCE", {
    x: 0.62, y: 7.18, w: 3.4, h: 0.16,
    fontSize: 7.2, bold: true, color: dark ? "AEB5AC" : C.muted,
    charSpacing: 1.4, margin: 0,
  });
  slide.addText(String(number).padStart(2, "0"), {
    x: 12.2, y: 7.17, w: 0.5, h: 0.17,
    fontSize: 8, bold: true, align: "right",
    color: dark ? "AEB5AC" : C.muted, margin: 0,
  });
}

function addSlide({
  title,
  subtitle = "",
  kicker = "PRODUCT DECISION",
  dark = false,
  appendix = false,
  notes = "",
  titleSize = 27,
}) {
  const slide = pptx.addSlide();
  const number = slides.length + 1;
  slide.background = { color: dark ? C.ink : C.paper };
  brand(slide, dark);
  slide.addText(kicker, {
    x: 0.62, y: 0.89, w: 3.3, h: 0.17,
    fontSize: 8, bold: true, color: dark ? C.lime : C.limeDark,
    charSpacing: 1.5, margin: 0,
  });
  slide.addText(title, {
    x: 0.62, y: 1.11, w: 11.9, h: 0.55,
    fontSize: titleSize, bold: true,
    color: dark ? C.white : C.ink, margin: 0, fit: "shrink",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.64, y: 1.73, w: 11.6, h: 0.35,
      fontSize: 11, color: dark ? "C9CFC7" : C.muted,
      margin: 0, fit: "shrink",
    });
  }
  footer(slide, number, { dark, appendix });
  slide.addNotes(notes);
  slides.push({ number, title, notes, appendix });
  return slide;
}

function label(slide, text, x, y, w, color = C.muted) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.16,
    fontSize: 7.3, bold: true, charSpacing: 1.2, color, margin: 0,
  });
}

function pill(slide, text, x, y, w, fill = C.limeSoft, color = C.ink) {
  slide.addShape(S.roundRect, {
    x, y, w, h: 0.34,
    rectRadius: 0.07,
    fill: { color: fill },
    line: { color: fill },
  });
  slide.addText(text, {
    x: x + 0.06, y: y + 0.055, w: w - 0.12, h: 0.2,
    fontSize: 8.3, bold: true, color, align: "center", margin: 0, fit: "shrink",
  });
}

function card(slide, x, y, w, h, options = {}) {
  slide.addShape(S.roundRect, {
    x, y, w, h,
    rectRadius: options.radius ?? 0.06,
    fill: { color: options.fill ?? C.white },
    line: { color: options.line ?? C.line, width: options.lineWidth ?? 0.8 },
    shadow: options.shadow ? {
      type: "outer", color: "000000", opacity: 0.12,
      blur: 1, angle: 45, distance: 1,
    } : undefined,
  });
}

function image(slide, file, x, y, w, h, options = {}) {
  card(slide, x - 0.04, y - 0.04, w + 0.08, h + 0.08, {
    fill: options.frame ?? C.white,
    line: options.line ?? C.line,
    shadow: options.shadow,
  });
  slide.addImage({
    path: resolve(screenshots, file),
    x, y, w, h,
    sizing: { type: "contain", w, h },
  });
}

function node(slide, { x, y, w, h = 0.72, title, detail, fill = C.white, line = C.line, titleColor = C.ink }) {
  card(slide, x, y, w, h, { fill, line });
  slide.addText(title, {
    x: x + 0.1, y: y + 0.11, w: w - 0.2, h: 0.2,
    fontSize: 10, bold: true, color: titleColor, align: "center", margin: 0, fit: "shrink",
  });
  if (detail) {
    slide.addText(detail, {
      x: x + 0.09, y: y + 0.38, w: w - 0.18, h: h - 0.44,
      fontSize: 7.4, color: titleColor === C.white ? "D7DDD5" : C.muted,
      align: "center", margin: 0, fit: "shrink",
    });
  }
}

function chevron(slide, x, y, w = 0.22, color = C.lineStrong) {
  slide.addShape(S.chevron, {
    x, y, w, h: 0.25,
    fill: { color }, line: { color },
  });
}

function metric(slide, { x, y, w, label: metricLabel, value, detail, tone = C.cobalt }) {
  card(slide, x, y, w, 1.02, { fill: C.white });
  slide.addShape(S.rect, {
    x, y, w: 0.07, h: 1.02,
    fill: { color: tone }, line: { color: tone },
  });
  slide.addText(metricLabel.toUpperCase(), {
    x: x + 0.17, y: y + 0.13, w: w - 0.25, h: 0.15,
    fontSize: 7.2, bold: true, color: C.muted, charSpacing: 0.8, margin: 0,
  });
  slide.addText(value, {
    x: x + 0.17, y: y + 0.34, w: w - 0.25, h: 0.3,
    fontSize: 19, bold: true, color: C.ink, margin: 0, fit: "shrink",
  });
  slide.addText(detail, {
    x: x + 0.17, y: y + 0.73, w: w - 0.25, h: 0.14,
    fontSize: 7.3, color: C.muted, margin: 0, fit: "shrink",
  });
}

// Slide 1: Current state and hook
{
  const notes = `0:00-0:20

Hi, I am Naman Jain. I started with the current super.money product rather than a blank page.

The app already connects payments with credit score, credit building, credit access, and a Splitstore commerce entry. My question was what comes next: how can that existing relationship become an affordability-first commerce business with repeat usage and positive contribution?`;
  const slide = addSlide({
    title: "Affordable Commerce after credit.",
    subtitle: "Start from the product super.money already has, then build the next high-value use case.",
    kicker: "WHY NOW",
    dark: true,
    notes,
    titleSize: 31,
  });

  label(slide, "Observed current relationship", 0.65, 2.35, 2.7, C.lime);
  const flow = [
    ["Payments", "Frequent UPI relationship", C.inkSoft, "3F443F"],
    ["Credit Health", "Score and education", C.inkSoft, "3F443F"],
    ["Credit access", "Building and borrowing", C.inkSoft, "3F443F"],
    ["Affordable Commerce", "Credit becomes useful at purchase intent", C.lime, C.lime],
  ];
  flow.forEach(([title, detail, fill, line], index) => {
    node(slide, {
      x: 0.65 + index * 2.05,
      y: 2.72,
      w: 1.68,
      h: 1.0,
      title,
      detail,
      fill,
      line,
      titleColor: index === 3 ? C.ink : C.white,
    });
    if (index < flow.length - 1) chevron(slide, 2.42 + index * 2.05, 3.09, 0.2, "6A706A");
  });

  card(slide, 0.65, 4.25, 7.8, 1.28, { fill: C.cobalt, line: C.cobalt });
  slide.addText("The strategic question", {
    x: 0.92, y: 4.49, w: 1.8, h: 0.16,
    fontSize: 8, bold: true, color: "CFD9FF", charSpacing: 1.0, margin: 0,
  });
  slide.addText("Can affordability become a repeat, contribution-positive commerce layer?", {
    x: 0.92, y: 4.78, w: 7.0, h: 0.4,
    fontSize: 18, bold: true, color: C.white, margin: 0, fit: "shrink",
  });
  image(slide, "mobile-home.png", 9.35, 1.12, 2.55, 5.5, {
    frame: C.inkSoft, line: "444944", shadow: true,
  });
}

// Slide 2: Cohort and categories
{
  const notes = `0:20-0:45

I would launch for existing high-frequency UPI users considering a practical five-to-thirty-thousand-rupee purchase. That includes credit-underserved users, cash-flow-constrained users, and full-UPI deal seekers.

I would begin with budget phones, small appliances, and work or study devices. These categories combine real affordability need with manageable returns and available supply. The first release is one hundred to three hundred governed SKUs, so product-market-fit evidence is not hidden by marketplace breadth.`;
  const slide = addSlide({
    title: "One launch cohort. Three category groups.",
    subtitle: "A narrow wedge produces clearer product-market-fit and unit-economics evidence.",
    kicker: "WHO + WHAT",
    notes,
  });

  card(slide, 0.65, 2.35, 4.0, 3.95, { fill: C.ink, line: C.ink });
  label(slide, "Initial customer", 0.92, 2.65, 2.0, C.lime);
  slide.addText("High-frequency\nUPI users", {
    x: 0.92, y: 3.02, w: 3.2, h: 0.64,
    fontSize: 23, bold: true, color: C.white, margin: 0, fit: "shrink",
  });
  slide.addText("Existing user | Practical purchase: Rs. 5K-Rs. 30K", {
    x: 0.92, y: 3.78, w: 3.35, h: 0.24,
    fontSize: 9.4, bold: true, color: C.lime, margin: 0, fit: "shrink",
  });
  [
    ["Credit underserved", "Suitable short-tenor access"],
    ["Cash-flow constrained", "Smaller amount due today"],
    ["Deal seeker", "Full UPI + funded offer"],
  ].forEach(([title, detail], index) => {
    slide.addShape(S.ellipse, {
      x: 0.94, y: 4.39 + index * 0.55, w: 0.16, h: 0.16,
      fill: { color: C.lime }, line: { color: C.lime },
    });
    slide.addText(title, {
      x: 1.22, y: 4.33 + index * 0.55, w: 1.65, h: 0.19,
      fontSize: 9.3, bold: true, color: C.white, margin: 0,
    });
    slide.addText(detail, {
      x: 2.75, y: 4.33 + index * 0.55, w: 1.5, h: 0.2,
      fontSize: 7.7, color: "BFC5BD", margin: 0, fit: "shrink",
    });
  });

  const categories = [
    ["01", "Budget + refurbished phones", "High affordability need", C.cobaltSoft, C.cobalt],
    ["02", "Small home appliances", "Low return complexity", C.limeSoft, C.limeDark],
    ["03", "Work, study + accessories", "Bundle and repeat potential", C.coralSoft, "A8473F"],
  ];
  categories.forEach(([number, title, detail, fill, color], index) => {
    const y = 2.35 + index * 1.2;
    card(slide, 5.0, y, 4.65, 0.98, { fill, line: fill });
    slide.addText(number, {
      x: 5.22, y: y + 0.25, w: 0.42, h: 0.25,
      fontSize: 15, bold: true, color, margin: 0,
    });
    slide.addText(title, {
      x: 5.83, y: y + 0.18, w: 2.8, h: 0.24,
      fontSize: 12, bold: true, color: C.ink, margin: 0, fit: "shrink",
    });
    slide.addText(detail, {
      x: 5.83, y: y + 0.53, w: 2.8, h: 0.17,
      fontSize: 8, color: C.muted, margin: 0,
    });
    pill(slide, "LAUNCH", 8.72, y + 0.31, 0.68, C.white, color);
  });

  card(slide, 9.95, 2.35, 2.75, 3.95, { fill: C.white });
  label(slide, "Selection rule", 10.22, 2.65, 1.6);
  slide.addText("Category\nattractiveness", {
    x: 10.22, y: 2.98, w: 1.9, h: 0.58,
    fontSize: 19, bold: true, color: C.ink, margin: 0,
  });
  slide.addText("Intent x affordability x AOV x supply", {
    x: 10.22, y: 3.84, w: 1.95, h: 0.5,
    fontSize: 11.5, bold: true, color: C.cobalt, margin: 0, fit: "shrink",
  });
  slide.addShape(S.line, {
    x: 10.22, y: 4.52, w: 1.9, h: 0,
    line: { color: C.lineStrong, width: 1 },
  });
  slide.addText("Returns + fraud + operational cost", {
    x: 10.22, y: 4.72, w: 1.95, h: 0.5,
    fontSize: 11, bold: true, color: C.coral, margin: 0, fit: "shrink",
  });
  pill(slide, "100-300 SKUs", 10.22, 5.65, 1.65, C.ink, C.white);
}

// Slide 3: Borrower product
{
  const notes = `0:45-1:15

The borrower experience begins with affordability, not a finance option discovered at the last step.

Splitstore lets Asha browse by what is due today. The product page exposes price, plan, lender, fees, KFS, dates, and full-UPI fallback. The new bag is the AOV decision surface: it shows remaining limit and one relevant add-on with the exact repayment change. Credit Health remains under Profile and supports source, freshness, factors, actions, delay, and correction without promising approval.`;
  const slide = addSlide({
    title: "Affordability starts discovery and governs the bag.",
    subtitle: "Every growth mechanic exposes its cash-flow consequence before confirmation.",
    kicker: "BORROWER PRODUCT",
    notes,
  });

  image(slide, "mobile-home.png", 0.78, 2.35, 1.8, 3.88, { shadow: true });
  image(slide, "mobile-product.png", 3.05, 2.35, 1.8, 3.88, { shadow: true });
  image(slide, "mobile-bag-bundle.png", 5.32, 2.35, 1.8, 3.88, { shadow: true });
  image(slide, "credit-health-dashboard.png", 7.59, 2.35, 1.8, 3.88, { shadow: true });

  [
    ["1", "Splitstore", "Due-today discovery"],
    ["2", "PDP", "Approved plans before cart"],
    ["3", "Bag", "AOV within remaining limit"],
    ["4", "Credit Health", "Trust, action, correction"],
  ].forEach(([number, title, detail], index) => {
    const x = 0.78 + index * 2.27;
    slide.addShape(S.ellipse, {
      x: x + 0.02, y: 6.42, w: 0.26, h: 0.26,
      fill: { color: C.lime }, line: { color: C.limeDark },
    });
    slide.addText(number, {
      x: x + 0.02, y: 6.47, w: 0.26, h: 0.12,
      fontSize: 7.5, bold: true, align: "center", margin: 0,
    });
    slide.addText(title, {
      x: x + 0.37, y: 6.39, w: 1.33, h: 0.16,
      fontSize: 8.6, bold: true, margin: 0,
    });
    slide.addText(detail, {
      x: x + 0.37, y: 6.59, w: 1.38, h: 0.14,
      fontSize: 6.8, color: C.muted, margin: 0, fit: "shrink",
    });
  });

  card(slide, 9.88, 2.35, 2.82, 3.88, { fill: C.ink, line: C.ink });
  label(slide, "Decisions demonstrated", 10.14, 2.67, 2.1, C.lime);
  const decisions = [
    ["Rs. 12,000", "Available limit visible"],
    ["Rs. 3,832", "Bundle payment today"],
    ["Rs. 504", "Limit remains after bag"],
    ["Score != offer", "Separate purpose and policy"],
  ];
  decisions.forEach(([value, detail], index) => {
    slide.addText(value, {
      x: 10.14, y: 3.08 + index * 0.69, w: 1.03, h: 0.25,
      fontSize: 13, bold: true, color: C.white, margin: 0, fit: "shrink",
    });
    slide.addText(detail, {
      x: 11.22, y: 3.1 + index * 0.69, w: 1.17, h: 0.22,
      fontSize: 7.5, color: "BFC5BD", margin: 0, fit: "shrink",
    });
    if (index < decisions.length - 1) {
      slide.addShape(S.line, {
        x: 10.14, y: 3.51 + index * 0.69, w: 2.25, h: 0,
        line: { color: "414641", width: 0.7 },
      });
    }
  });
}

// Slide 4: Seller and channels
{
  const notes = `1:15-1:40

The supply side is an affordability operating system.

Sellers complete KYB, settlement, catalogue, and webhook checks; manage SKU financeability; fund measured offers; fulfil one order state; and reconcile payout. The same platform supports two channels: Splitstore inside super.money and a white-label option on a merchant site. The merchant creates one signed session and receives approved offers, final order status, refunds, and settlement webhooks without integrating each lender.`;
  const slide = addSlide({
    title: "One merchant OS. Two distribution channels.",
    subtitle: "Splitstore proves the marketplace; merchant APIs extend the affordability engine.",
    kicker: "SUPPLY + DISTRIBUTION",
    notes,
  });

  image(slide, "seller-integrations.png", 0.65, 2.25, 8.15, 4.58, { shadow: true });

  card(slide, 9.12, 2.25, 3.58, 1.3, { fill: C.limeSoft, line: "D4E790" });
  label(slide, "Channel 1", 9.38, 2.51, 1.1, C.limeDark);
  slide.addText("Splitstore marketplace", {
    x: 9.38, y: 2.83, w: 2.5, h: 0.25,
    fontSize: 15, bold: true, margin: 0,
  });
  slide.addText("super.money owns discovery through repayment.", {
    x: 9.38, y: 3.18, w: 2.7, h: 0.18,
    fontSize: 8, color: C.muted, margin: 0,
  });

  card(slide, 9.12, 3.78, 3.58, 1.3, { fill: C.cobaltSoft, line: "C4D0F5" });
  label(slide, "Channel 2", 9.38, 4.04, 1.1, C.cobalt);
  slide.addText("Merchant checkout", {
    x: 9.38, y: 4.36, w: 2.5, h: 0.25,
    fontSize: 15, bold: true, margin: 0,
  });
  slide.addText("Signed session, shared eligibility, signed webhooks.", {
    x: 9.38, y: 4.71, w: 2.7, h: 0.18,
    fontSize: 8, color: C.muted, margin: 0,
  });

  card(slide, 9.12, 5.31, 3.58, 1.52, { fill: C.white });
  label(slide, "Merchant value", 9.38, 5.56, 1.2);
  slide.addText("Conversion + AOV uplift", {
    x: 9.38, y: 5.88, w: 2.6, h: 0.23,
    fontSize: 13, bold: true, color: C.ink, margin: 0,
  });
  slide.addText("Measured incrementality  |  Predictable settlement\nOne integration  |  No lender workflow", {
    x: 9.38, y: 6.23, w: 2.8, h: 0.36,
    fontSize: 8, color: C.muted, margin: 0, fit: "shrink",
  });
}

// Slide 5: Economics and metrics
{
  const notes = `1:40-2:10

I would use monthly repeat commerce buyers as the product North Star because one subsidised purchase does not prove a habit.

Contribution is the scale gate. In the illustrative hundred-crore annualised case, one-point-five million targeted monthly exposures produce ten-thousand-eight-hundred orders at a seventy-seven-hundred-rupee AOV. The example order contributes about seventy rupees after rewards, payments, support, fraud, refunds, and platform risk exposure.

The first experiment compares a price-first PDP with due-today affordability. The primary metric is PDP-to-bag, with contribution, returns, and thirty-plus DPD as guardrails.`;
  const slide = addSlide({
    title: "Repeat buyers lead. Contribution decides scale.",
    subtitle: "The metric tree joins product-market-fit, merchant value, and credit quality.",
    kicker: "BUSINESS + DATA",
    notes,
  });

  metric(slide, {
    x: 0.65, y: 2.3, w: 2.75,
    label: "North Star", value: "Repeat buyers",
    detail: "Monthly returning commerce purchasers", tone: C.limeDark,
  });
  metric(slide, {
    x: 3.57, y: 2.3, w: 2.75,
    label: "12-month direction", value: "Rs. 100 Cr",
    detail: "Annualised GMV scenario", tone: C.cobalt,
  });
  metric(slide, {
    x: 6.49, y: 2.3, w: 2.75,
    label: "AOV", value: "Rs. 7,700",
    detail: "10.8K monthly orders", tone: C.coral,
  });
  metric(slide, {
    x: 9.41, y: 2.3, w: 2.75,
    label: "Scale gate", value: "Rs. 70",
    detail: "Contribution/order before fixed cost", tone: C.mintDark,
  });

  card(slide, 0.65, 3.58, 7.25, 2.74, { fill: C.white });
  label(slide, "Canonical monthly funnel", 0.93, 3.86, 2.0);
  const funnel = [
    ["Targeted", "1.5M", 100],
    ["Store", "180K", 77],
    ["PDP", "54K", 62],
    ["Bag", "18.9K", 48],
    ["Checkout", "14.6K", 39],
    ["Orders", "10.8K", 30],
  ];
  funnel.forEach(([name, value, width], index) => {
    const y = 4.23 + index * 0.31;
    slide.addText(name, {
      x: 0.94, y, w: 0.74, h: 0.14,
      fontSize: 7.5, color: C.muted, margin: 0,
    });
    slide.addShape(S.roundRect, {
      x: 1.75, y: y + 0.015, w: 4.7, h: 0.12,
      rectRadius: 0.03,
      fill: { color: "EDF0EB" }, line: { color: "EDF0EB" },
    });
    slide.addShape(S.roundRect, {
      x: 1.75, y: y + 0.015, w: 4.7 * width / 100, h: 0.12,
      rectRadius: 0.03,
      fill: { color: index < 2 ? C.cobalt : C.limeDark },
      line: { color: index < 2 ? C.cobalt : C.limeDark },
    });
    slide.addText(value, {
      x: 6.62, y, w: 0.72, h: 0.14,
      fontSize: 7.5, bold: true, align: "right", margin: 0,
    });
  });

  card(slide, 8.17, 3.58, 4.53, 2.74, { fill: C.ink, line: C.ink });
  label(slide, "Illustrative Rs. 7,700 order", 8.45, 3.86, 2.3, C.lime);
  const economics = [
    ["Variable revenue", "+ Rs. 246", C.white],
    ["Rewards + payment", "- Rs. 65", "C8CEC6"],
    ["Support + operations", "- Rs. 46", "C8CEC6"],
    ["Risk exposure", "- Rs. 65", "C8CEC6"],
    ["Contribution", "Rs. 70", C.lime],
  ];
  economics.forEach(([line, value, color], index) => {
    const y = 4.25 + index * 0.38;
    slide.addText(line, {
      x: 8.45, y, w: 2.2, h: 0.17,
      fontSize: index === 4 ? 10 : 8.5,
      bold: index === 4, color, margin: 0,
    });
    slide.addText(value, {
      x: 10.93, y, w: 1.3, h: 0.17,
      fontSize: index === 4 ? 12 : 8.5,
      bold: true, color, align: "right", margin: 0,
    });
    if (index === 3) {
      slide.addShape(S.line, {
        x: 8.45, y: y + 0.3, w: 3.78, h: 0,
        line: { color: "4B504B", width: 0.8 },
      });
    }
  });
  pill(slide, "Experiment: affordability on PDP", 8.45, 6.03, 2.55, C.cobalt, C.white);
  slide.addText("Primary: PDP -> bag   |   Guardrails: contribution, returns, 30+ DPD", {
    x: 8.45, y: 6.48, w: 3.7, h: 0.16,
    fontSize: 7.2, color: "C8CEC6", margin: 0, fit: "shrink",
  });
}

// Slide 6: Architecture and failure
{
  const notes = `2:10-2:35

The simple experience depends on one difficult system decision.

Catalogue and Credit Health feed separate eligibility and offer services. The checkout orchestrator then coordinates payment, mandate, lender, and order systems.

For example, if the loan books and order creation fails, the session cannot show success. It enters a compensation state, requests loan cancellation or reversal, and reconciliation verifies both partners. Idempotency and explicit state are required because these systems cannot share one database transaction.`;
  const slide = addSlide({
    title: "One checkout coordinates independent systems.",
    subtitle: "The technical depth is in state, compensation, and reconciliation.",
    kicker: "SYSTEM DECISION",
    notes,
  });

  const top = [
    ["Borrower app", "In-app journey", C.cobaltSoft, C.cobalt],
    ["Catalogue", "Valid supply", C.white, C.lineStrong],
    ["Eligibility", "User + SKU policy", C.white, C.lineStrong],
    ["Offer engine", "Frozen terms", C.limeSoft, "D4E790"],
    ["Checkout", "Durable saga", C.ink, C.ink],
  ];
  top.forEach(([title, detail, fill, line], index) => {
    node(slide, {
      x: 0.65 + index * 2.2,
      y: 2.32,
      w: 1.72,
      h: 0.9,
      title, detail, fill, line,
      titleColor: index === 4 ? C.white : C.ink,
    });
    if (index < top.length - 1) chevron(slide, 2.47 + index * 2.2, 2.65, 0.2);
  });

  const branches = [
    ["Payment + mandate", "Authorisation truth", 7.05, C.cobaltSoft, C.cobalt],
    ["Lender", "Legal credit truth", 9.12, C.coralSoft, C.coral],
    ["Merchant order", "Fulfilment truth", 11.19, C.limeSoft, C.limeDark],
  ];
  branches.forEach(([title, detail, x, fill, line]) => {
    node(slide, { x, y: 3.75, w: 1.75, h: 0.84, title, detail, fill, line });
    slide.addShape(S.line, {
      x: 9.16, y: 3.21, w: x - 8.29, h: 0.54,
      line: { color: C.lineStrong, width: 1.2, beginArrowType: "none", endArrowType: "triangle" },
    });
  });

  card(slide, 0.65, 3.75, 5.72, 2.48, { fill: C.ink, line: C.ink });
  label(slide, "Failure worth designing", 0.93, 4.04, 2.3, C.lime);
  const failure = [
    ["1", "Loan booked", C.mint, C.mintDark],
    ["2", "Order creation failed", C.coralSoft, C.coral],
    ["3", "Compensation requested", C.amberSoft, "9A6500"],
    ["4", "Reconciliation verifies outcome", C.cobaltSoft, C.cobalt],
  ];
  failure.forEach(([number, title, fill, color], index) => {
    slide.addShape(S.ellipse, {
      x: 0.94, y: 4.42 + index * 0.39, w: 0.22, h: 0.22,
      fill: { color: fill }, line: { color },
    });
    slide.addText(number, {
      x: 0.94, y: 4.46 + index * 0.39, w: 0.22, h: 0.1,
      fontSize: 6.8, bold: true, color, align: "center", margin: 0,
    });
    slide.addText(title, {
      x: 1.3, y: 4.42 + index * 0.39, w: 3.2, h: 0.18,
      fontSize: 9, bold: true, color: C.white, margin: 0,
    });
  });
  pill(slide, "No customer success until terminal state is valid", 0.94, 5.98, 3.45, C.lime, C.ink);

  card(slide, 6.65, 5.0, 6.05, 1.23, { fill: C.white });
  label(slide, "Four engineering controls", 6.95, 5.28, 2.3);
  ["Idempotency", "State machine", "Compensation", "Reconciliation"].forEach((item, index) => {
    pill(
      slide,
      item,
      6.95 + index * 1.35,
      5.7,
      1.18,
      index === 1 ? C.cobalt : C.surface ?? C.paper,
      index === 1 ? C.white : C.ink,
    );
  });
}

// Slide 7: GTM and close
{
  const notes = `2:35-3:00

I would launch this over six months.

Month one locks the user, merchant, category, P-and-L, and regulatory constraints. Month two locks prototypes and contracts. Months three and four build one reconciled commerce loop. Month five is a one-thousand-user alpha, and month six is a feature-flagged fifty-thousand-user beta with experiment holdouts.

The result is an affordability layer built on something super.money already understands about the customer: their ability to pay. The marketplace proves the engine; white-label merchant checkout expands its distribution.`;
  const slide = addSlide({
    title: "Six months to prove one closed loop.",
    subtitle: "Expansion follows repeat contribution, operational quality, and credit guardrails.",
    kicker: "GTM + CLOSE",
    dark: true,
    notes,
  });

  const phases = [
    ["M1", "Define", "30 buyers\n15 merchants", C.cobalt],
    ["M2", "Lock", "Prototype\ncontracts", C.cobalt],
    ["M3", "Build", "Catalogue\nquotes", C.limeDark],
    ["M4", "Operate", "Checkout\nrefunds", C.limeDark],
    ["M5", "Alpha", "1K users\n3 sellers", C.coral],
    ["M6", "Beta", "50K users\nholdouts", C.coral],
  ];
  phases.forEach(([month, title, detail, tone], index) => {
    const x = 0.65 + index * 2.02;
    card(slide, x, 2.4, 1.65, 1.45, { fill: C.inkSoft, line: "414641" });
    pill(slide, month, x + 0.2, 2.62, 0.48, tone, C.white);
    slide.addText(title, {
      x: x + 0.2, y: 3.02, w: 1.18, h: 0.22,
      fontSize: 13, bold: true, color: C.white, margin: 0,
    });
    slide.addText(detail, {
      x: x + 0.2, y: 3.34, w: 1.2, h: 0.3,
      fontSize: 8, color: "BFC5BD", margin: 0, breakLine: true,
    });
    if (index < phases.length - 1) chevron(slide, x + 1.76, 3.0, 0.16, "5A605A");
  });

  label(slide, "Expansion gates", 0.65, 4.37, 2.0, C.lime);
  const gates = [
    ["Repeat", "30/60/90-day habit"],
    ["Economics", "Positive cohort contribution"],
    ["Risk", "DPD + fraud within threshold"],
    ["Operations", "Refund + settlement matched"],
    ["Trust", "Consent + complaints healthy"],
  ];
  gates.forEach(([title, detail], index) => {
    card(slide, 0.65 + index * 2.42, 4.72, 2.13, 0.85, {
      fill: C.inkSoft, line: "414641",
    });
    slide.addText(title, {
      x: 0.83 + index * 2.42, y: 4.91, w: 0.85, h: 0.17,
      fontSize: 9.5, bold: true, color: C.white, margin: 0,
    });
    slide.addText(detail, {
      x: 0.83 + index * 2.42, y: 5.2, w: 1.65, h: 0.15,
      fontSize: 7, color: "BFC5BD", margin: 0, fit: "shrink",
    });
  });

  card(slide, 0.65, 5.95, 12.05, 0.75, { fill: C.lime, line: C.lime });
  slide.addText(
    "Marketplace -> prove the affordability engine -> extend it to merchant checkout",
    {
      x: 1.0, y: 6.18, w: 11.35, h: 0.27,
      fontSize: 17, bold: true, color: C.ink,
      align: "center", margin: 0, fit: "shrink",
    },
  );
}

// Slide 8: Credit Health appendix
{
  const notes = `Appendix.

Credit Health is a complete borrower module. Consent leads to a latest-available bureau pull, an immutable dated snapshot, governed factor explanations, three safe actions, and a tracked correction service. A partner timeout keeps the last valid snapshot and never invents a score. Eligibility uses a separate approved purpose.`;
  const slide = addSlide({
    title: "Credit Health: explain, act, correct, and degrade honestly.",
    subtitle: "The score is a dated bureau fact; the action plan and correction case are separate product state.",
    kicker: "CREDIT HEALTH",
    appendix: true,
    notes,
    titleSize: 25,
  });
  image(slide, "credit-health-dashboard.png", 0.7, 2.3, 2.0, 4.31, { shadow: true });
  image(slide, "credit-health-partner-delay.png", 3.05, 2.3, 2.0, 4.31, { shadow: true });
  image(slide, "credit-health-dispute-success.png", 5.4, 2.3, 2.0, 4.31, { shadow: true });

  const services = [
    ["Consent", "Purpose evidence"],
    ["Bureau adapter", "Canonical pull"],
    ["Snapshot", "Source + freshness"],
    ["Explanation", "Governed factors"],
    ["Action plan", "Three safe steps"],
    ["Case service", "Tracked correction"],
  ];
  services.forEach(([title, detail], index) => {
    node(slide, {
      x: 7.85 + (index % 2) * 2.35,
      y: 2.3 + Math.floor(index / 2) * 1.12,
      w: 2.05,
      h: 0.88,
      title,
      detail,
      fill: index === 1 ? C.cobaltSoft : C.white,
      line: index === 1 ? C.cobalt : C.line,
    });
  });
  card(slide, 7.85, 5.83, 4.4, 0.78, { fill: C.amberSoft, line: "E8CF8C" });
  slide.addText("Boundary: Credit Health consent cannot silently become lending consent.", {
    x: 8.12, y: 6.08, w: 3.85, h: 0.22,
    fontSize: 10, bold: true, color: "75541B", align: "center", margin: 0, fit: "shrink",
  });
}

// Slide 9: Category and experiments appendix
{
  const notes = `Appendix.

Category choice uses affordability need and supply readiness minus return, fraud, and operational complexity. The first experiments isolate discovery, bag AOV, down payment, and seller funding. Each treatment has contribution and credit-quality guardrails.`;
  const slide = addSlide({
    title: "Category and experiment decisions are explicit.",
    subtitle: "Scope and growth both use measurable gates.",
    kicker: "EXPERIMENT APPENDIX",
    appendix: true,
    notes,
  });

  card(slide, 0.65, 2.32, 5.78, 3.95, { fill: C.white });
  label(slide, "Category prioritisation", 0.93, 2.63, 2.1);
  const rows = [
    ["Budget phones", "High", "Medium", "Launch"],
    ["Small appliances", "High", "Low", "Launch"],
    ["Work/study", "Medium-high", "Low", "Launch"],
    ["Fashion", "Medium", "High", "Later"],
    ["Travel", "High", "High", "Later"],
  ];
  ["Category", "Need", "Complexity", "Decision"].forEach((heading, index) => {
    slide.addText(heading, {
      x: 0.93 + [0, 2.15, 3.18, 4.25][index],
      y: 3.05, w: [1.9, 0.85, 0.9, 0.8][index], h: 0.16,
      fontSize: 7.2, bold: true, color: C.muted, margin: 0,
    });
  });
  rows.forEach((row, rowIndex) => {
    const y = 3.38 + rowIndex * 0.47;
    slide.addShape(S.line, {
      x: 0.93, y: y - 0.08, w: 4.95, h: 0,
      line: { color: C.line, width: 0.6 },
    });
    row.forEach((value, index) => {
      slide.addText(value, {
        x: 0.93 + [0, 2.15, 3.18, 4.25][index],
        y, w: [1.9, 0.85, 0.9, 0.8][index], h: 0.17,
        fontSize: 8, bold: index === 0 || index === 3,
        color: index === 3 ? (value === "Launch" ? C.mintDark : C.muted) : C.ink,
        margin: 0, fit: "shrink",
      });
    });
  });

  card(slide, 6.72, 2.32, 5.98, 3.95, { fill: C.ink, line: C.ink });
  label(slide, "First controlled experiments", 7.0, 2.63, 2.6, C.lime);
  const experiments = [
    ["01", "Due-today discovery", "PDP -> bag", "Contribution + DPD"],
    ["02", "Responsible bundle", "AOV + attach", "Checkout + returns"],
    ["03", "20 / 33 / 50% down", "Positive orders", "30+ DPD"],
    ["04", "Seller funding holdout", "Incremental orders", "Seller contribution"],
  ];
  experiments.forEach(([number, title, primary, guard], index) => {
    const y = 3.07 + index * 0.69;
    pill(slide, number, 7.0, y, 0.43, C.lime, C.ink);
    slide.addText(title, {
      x: 7.58, y: y + 0.02, w: 1.9, h: 0.19,
      fontSize: 9, bold: true, color: C.white, margin: 0,
    });
    slide.addText(`Primary: ${primary}`, {
      x: 9.58, y: y + 0.02, w: 1.3, h: 0.17,
      fontSize: 7.2, color: "C8CEC6", margin: 0, fit: "shrink",
    });
    slide.addText(`Guard: ${guard}`, {
      x: 10.96, y: y + 0.02, w: 1.35, h: 0.17,
      fontSize: 7.2, color: C.lime, margin: 0, fit: "shrink",
    });
  });
}

// Slide 10: API and data appendix
{
  const notes = `Appendix.

The central data-model decision is to use checkout session as the join point across quote, payment, loan, order, refund, and settlement. In-app and merchant checkout share canonical offer and orchestration contracts. Every write is idempotent; quotes expire; webhooks are signed and replay-safe.`;
  const slide = addSlide({
    title: "Shared contracts connect in-app and merchant checkout.",
    subtitle: "One session links transparent terms to independent legal and operational records.",
    kicker: "API + SCHEMA APPENDIX",
    appendix: true,
    notes,
  });

  card(slide, 0.65, 2.32, 6.05, 3.97, { fill: C.white });
  label(slide, "Public API", 0.94, 2.63, 1.2);
  const endpoints = [
    ["POST", "/v1/affordability/quotes", "Freeze user-SKU plans"],
    ["POST", "/v1/checkout-sessions", "Create durable session"],
    ["POST", "/v1/checkout-sessions/{id}/confirm", "Run saga"],
    ["POST", "/v1/merchant-sessions", "External checkout"],
    ["POST", "/v1/refunds", "Reconcile obligation"],
  ];
  endpoints.forEach(([method, path, detail], index) => {
    const y = 3.02 + index * 0.54;
    pill(slide, method, 0.94, y, 0.58, C.cobaltSoft, C.cobalt);
    slide.addText(path, {
      x: 1.68, y: y + 0.07, w: 2.75, h: 0.15,
      fontFace: "Courier New", fontSize: 7.5, bold: true, margin: 0, fit: "shrink",
    });
    slide.addText(detail, {
      x: 4.57, y: y + 0.07, w: 1.55, h: 0.15,
      fontSize: 7.2, color: C.muted, margin: 0, fit: "shrink",
    });
  });
  pill(slide, "Idempotency key", 0.94, 5.95, 1.35, C.ink, C.white);
  pill(slide, "Expiring quote", 2.43, 5.95, 1.25, C.ink, C.white);
  pill(slide, "Signed webhook", 3.82, 5.95, 1.35, C.ink, C.white);

  card(slide, 6.98, 2.32, 5.72, 3.97, { fill: C.ink, line: C.ink });
  label(slide, "Checkout session is the join point", 7.27, 2.63, 3.0, C.lime);
  node(slide, {
    x: 8.78, y: 3.06, w: 2.12, h: 0.82,
    title: "CHECKOUT_SESSION", detail: "quote + consent + state",
    fill: C.lime, line: C.lime, titleColor: C.ink,
  });
  const entities = [
    ["QUOTE", 7.22, 4.32],
    ["PAYMENT", 9.28, 4.32],
    ["LOAN", 11.15, 4.32],
    ["ORDER", 7.22, 5.38],
    ["REFUND", 9.28, 5.38],
    ["SETTLEMENT", 11.15, 5.38],
  ];
  entities.forEach(([title, x, y]) => {
    node(slide, {
      x, y, w: 1.35, h: 0.62, title, detail: "separate record",
      fill: C.inkSoft, line: "4A4F4A", titleColor: C.white,
    });
    slide.addShape(S.line, {
      x: 9.84, y: 3.88, w: x + 0.68 - 9.84, h: y - 3.88,
      line: { color: "697069", width: 0.8 },
    });
  });
}

// Slide 11: Trust appendix
{
  const notes = `Appendix.

Compliance is represented as product and system state: purpose-bound consent, lender attribution, APR and total repayment, versioned KFS, auditable acceptance, grievance and correction, refund allocation, and data minimisation. The main launch risks are credit loss, returns, seller quality, partner outages, and misleading claims. Each has a product control and a kill switch or operating owner.`;
  const slide = addSlide({
    title: "Trust controls are part of the product state.",
    subtitle: "A controlled launch needs transparent credit, correct money, and reversible partner operations.",
    kicker: "RISK + COMPLIANCE APPENDIX",
    appendix: true,
    notes,
  });

  const controls = [
    ["Consent", "Separate Credit Health, commerce, and lending purposes", C.cobaltSoft, C.cobalt],
    ["Disclosure", "Lender, APR, fees, dates, total repayment, KFS", C.limeSoft, C.limeDark],
    ["Correction", "Bureau case and grievance tracked to outcome", C.amberSoft, "956311"],
    ["Refund", "Outstanding obligation adjusts before excess cash refund", C.coralSoft, C.coral],
  ];
  controls.forEach(([title, detail, fill, color], index) => {
    card(slide, 0.65, 2.32 + index * 0.97, 5.55, 0.78, { fill, line: fill });
    slide.addText(title, {
      x: 0.92, y: 2.55 + index * 0.97, w: 1.08, h: 0.2,
      fontSize: 11, bold: true, color, margin: 0,
    });
    slide.addText(detail, {
      x: 2.06, y: 2.54 + index * 0.97, w: 3.72, h: 0.2,
      fontSize: 8.2, color: C.ink, margin: 0, fit: "shrink",
    });
  });

  card(slide, 6.5, 2.32, 6.2, 3.69, { fill: C.ink, line: C.ink });
  label(slide, "Launch risk register", 6.79, 2.63, 2.2, C.lime);
  const risks = [
    ["Credit loss", "Small limits + down payment + DPD gate"],
    ["Return abuse", "User / seller / SKU policy"],
    ["Seller quality", "KYB + SLA + settlement controls"],
    ["Partner outage", "Adapter + cache + retry + reconciliation"],
    ["Misleading claims", "Governed content + approval language"],
  ];
  risks.forEach(([risk, control], index) => {
    const y = 3.07 + index * 0.48;
    slide.addText(risk, {
      x: 6.8, y, w: 1.28, h: 0.18,
      fontSize: 8.5, bold: true, color: C.white, margin: 0,
    });
    slide.addText(control, {
      x: 8.22, y, w: 3.8, h: 0.18,
      fontSize: 8, color: "C8CEC6", margin: 0, fit: "shrink",
    });
    slide.addShape(S.line, {
      x: 6.8, y: y + 0.31, w: 5.27, h: 0,
      line: { color: "414641", width: 0.6 },
    });
  });
  pill(slide, "Feature flag", 6.8, 5.63, 1.18, C.coral, C.white);
  pill(slide, "Circuit breaker", 8.13, 5.63, 1.35, C.cobalt, C.white);
  pill(slide, "Audit trail", 9.63, 5.63, 1.12, C.lime, C.ink);
  pill(slide, "Named owner", 10.9, 5.63, 1.15, C.amber, C.ink);

  card(slide, 0.65, 6.25, 12.05, 0.46, { fill: C.white });
  slide.addText(
    "Decision rule: expansion stops when contribution, repayment, refund, seller, consent, or complaint guardrails fail.",
    {
      x: 0.94, y: 6.39, w: 11.45, h: 0.17,
      fontSize: 9.3, bold: true, color: C.ink, align: "center", margin: 0, fit: "shrink",
    },
  );
}

const outputPath = resolve(outputDir, "super-money-affordable-commerce-pitch.pptx");
await pptx.writeFile({ fileName: outputPath });

const mainSlides = slides.filter((slide) => !slide.appendix);
const appendixSlides = slides.filter((slide) => slide.appendix);
const notes = `# Affordable Commerce Intro Video - Speaker Notes

Recommended length: 3:00

Borrower prototype: https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer

Seller prototype: https://super-money-affordable-commerce.naman884186.chatgpt.site/seller

Use slides 1-7 for the recorded introduction. Slides 8-11 are an appendix for
follow-up discussion.

${mainSlides.map((slide) => `## Slide ${slide.number}: ${slide.title}

${slide.notes}
`).join("\n")}

# Appendix Notes

${appendixSlides.map((slide) => `## Slide ${slide.number}: ${slide.title}

${slide.notes}
`).join("\n")}
`;

await writeFile(resolve(outputDir, "intro-video-speaker-notes.md"), notes, "utf8");

console.log(`Presentation written to ${outputPath}`);
console.log(`Slides: ${slides.length} (${mainSlides.length} main + ${appendixSlides.length} appendix)`);
