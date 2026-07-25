import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.PROTOTYPE_URL || "http://localhost:4173/buyer.html";
const siteOrigin = new URL(baseUrl).origin;
const authToken = process.env.PROTOTYPE_AUTH_TOKEN;
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = new URL("../test-artifacts/", import.meta.url);

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox"],
});

const failures = [];

async function trackPage(page, label) {
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failures.push(`${label} HTTP ${response.status()}: ${response.url()}`);
    }
  });
  page.on("requestfailed", (request) => {
    failures.push(
      `${label} request failed: ${request.url()} (${request.failure()?.errorText || "unknown error"})`,
    );
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      failures.push(`${label} console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    failures.push(`${label} page error: ${error.message}`);
  });
}

async function assertNoPageOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
    failures.push(
      `${label} horizontal overflow: ${dimensions.scrollWidth}px > ${dimensions.clientWidth}px`,
    );
  }
}

async function newPage(options) {
  return browser.newPage({
    ...options,
    ...(authToken
      ? {
          extraHTTPHeaders: {
            "OAI-Sites-Authorization": `Bearer ${authToken}`,
          },
        }
      : {}),
  });
}

async function assertAtScrollOrigin(page, selector, label) {
  const scrollTop = await page.locator(selector).evaluate((element) => element.scrollTop);
  if (scrollTop !== 0) {
    failures.push(`${label} opened at scroll position ${scrollTop}px`);
  }
}

const mobile = await newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
});
await trackPage(mobile, "mobile");
await mobile.goto(baseUrl, { waitUntil: "domcontentloaded" });
await mobile.getByText("₹12,000", { exact: true }).first().waitFor();
await assertNoPageOverflow(mobile, "mobile home");
await mobile.screenshot({
  path: new URL("mobile-home.png", outputDir).pathname,
  fullPage: true,
});

await mobile.getByRole("button", { name: "Credit", exact: true }).click();
await mobile.getByRole("heading", { name: "₹12,000 available" }).waitFor();
await mobile.getByRole("button", { name: /Pay early/i }).click();
await mobile.getByText("Early repayment options opened", { exact: true }).waitFor();

await mobile.getByRole("button", { name: "You", exact: true }).click();
await mobile.getByRole("heading", { name: "Asha Mehta" }).waitFor();
await mobile.getByRole("button", { name: /Addresses/i }).click();
await mobile.getByText("Addresses opened", { exact: true }).waitFor();

await mobile.getByRole("button", { name: "Shop", exact: true }).click();
await mobile.getByPlaceholder("Search products or categories").waitFor();
await mobile.getByPlaceholder("Search products or categories").fill("not-a-real-product");
await mobile.getByRole("heading", { name: "No products found" }).waitFor();
await mobile.getByRole("button", { name: "Clear search" }).click();
await mobile
  .getByLabel("Product categories")
  .getByRole("button", { name: "Home", exact: true })
  .click();
await mobile.getByRole("button", { name: /BlendMini Mixer Grinder/i }).waitFor();
await mobile.getByRole("button", { name: "For you", exact: true }).click();
await mobile.getByRole("button", { name: /Nova X1 5G/i }).click();
await mobile.getByRole("heading", { name: "Nova X1 5G" }).waitFor();
await mobile.getByRole("button", { name: "Share" }).click();
await mobile.getByText("Product link ready to share", { exact: true }).waitFor();
await mobile.getByRole("button", { name: "Save product" }).click();
await mobile.getByRole("button", { name: "Remove from saved" }).waitFor();
await mobile.getByRole("button", { name: /Full UPI/i }).click();
await mobile.getByRole("button", { name: /Pay in 3/i }).click();
await mobile.screenshot({
  path: new URL("mobile-product.png", outputDir).pathname,
  fullPage: true,
});

await mobile.getByRole("button", { name: /^Continue/i }).click();
await mobile.getByRole("heading", { name: "Review purchase" }).waitFor();
await assertAtScrollOrigin(mobile, ".checkout-screen", "mobile checkout");
await mobile.getByRole("button", { name: "Go back" }).click();
await mobile.getByRole("heading", { name: "Nova X1 5G" }).waitFor();
await mobile.getByRole("button", { name: /^Continue/i }).click();
await mobile.getByRole("heading", { name: "Review purchase" }).waitFor();
await mobile.getByRole("button", { name: /superCard EMI/i }).click();
await mobile.getByRole("button", { name: /Pay in 3/i }).click();
await mobile.getByRole("checkbox").check();
await mobile.screenshot({
  path: new URL("mobile-checkout.png", outputDir).pathname,
  fullPage: true,
});

await mobile.getByRole("button", { name: /Confirm & pay/i }).click();
await mobile.getByRole("heading", { name: "It’s yours, Asha." }).waitFor({
  timeout: 5000,
});
await mobile.screenshot({
  path: new URL("mobile-success.png", outputDir).pathname,
  fullPage: true,
});
await mobile.getByRole("button", { name: /Track order & repayments/i }).click();
await mobile.getByRole("heading", { name: "₹12,000 available" }).waitFor();
await mobile.getByText("Nova X1 5G", { exact: true }).waitFor();
await mobile.getByRole("button", { name: "Home", exact: true }).click();
await mobile.getByText("Good afternoon, Asha", { exact: true }).waitFor();

const consumerDesktop = await newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await trackPage(consumerDesktop, "consumer desktop");
await consumerDesktop.goto(baseUrl, { waitUntil: "domcontentloaded" });
await consumerDesktop.getByRole("heading", {
  name: "Credit should shape the catalogue, not interrupt checkout.",
}).waitFor();
await assertNoPageOverflow(consumerDesktop, "consumer desktop");
await consumerDesktop.screenshot({
  path: new URL("consumer-presenter.png", outputDir).pathname,
  fullPage: true,
});

const seller = await newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await trackPage(seller, "seller");
await seller.goto(`${siteOrigin}/seller/`, { waitUntil: "domcontentloaded" });
await seller.getByRole("heading", { name: "Commerce overview" }).waitFor();
await assertNoPageOverflow(seller, "seller overview");
await seller.screenshot({
  path: new URL("seller-overview.png", outputDir).pathname,
  fullPage: true,
});

await seller.getByRole("button", { name: /Create offer/i }).click();
await seller.getByRole("dialog", { name: "Create affordability offer" }).waitFor();
await seller.getByRole("button", { name: /Increase conversion/i }).click();
await seller.getByRole("heading", { name: "Affordability", exact: true }).waitFor();
const fundingSlider = seller.locator("#funding");
await fundingSlider.fill("1.75");
await seller.getByText("1.75%", { exact: true }).waitFor();
await seller.locator("#upfront").fill("28");
await seller.getByText("28%", { exact: true }).waitFor();
await seller.getByRole("button", { name: /Publish controlled test/i }).click();
await seller.getByText("Controlled affordability test published", { exact: true }).waitFor();
await seller.screenshot({
  path: new URL("seller-affordability.png", outputDir).pathname,
  fullPage: true,
});

await seller.getByRole("button", { name: /Catalogue/ }).click();
await seller.getByRole("heading", { name: "Catalogue", exact: true }).waitFor();
await seller.getByPlaceholder("Search product or SKU").fill("Focus");
await seller.getByText("Focus Study Lamp", { exact: true }).waitFor();
await seller.getByPlaceholder("Search product or SKU").fill("");
await seller.getByRole("button", { name: "Needs review", exact: true }).click();
if ((await seller.locator(".catalogue-table tbody tr").count()) !== 1) {
  failures.push("seller catalogue Needs review filter did not return one SKU");
}
await seller.getByRole("button", { name: "Financeable", exact: true }).click();
if ((await seller.locator(".catalogue-table tbody tr").count()) !== 3) {
  failures.push("seller catalogue Financeable filter did not return three SKUs");
}
await seller.getByRole("button", { name: "All", exact: true }).click();
await seller.getByRole("button", { name: /Open Nova X1 5G/i }).click();
await seller.getByText("Nova X1 5G catalogue record opened", { exact: true }).waitFor();
await seller.screenshot({
  path: new URL("seller-catalogue.png", outputDir).pathname,
  fullPage: true,
});

await seller.getByRole("button", { name: "Add product", exact: true }).click();
const addProductDialog = seller.getByRole("dialog", { name: "Add product" });
await addProductDialog.waitFor();
await addProductDialog.getByLabel("Product name").fill("Compact Air Fryer");
await addProductDialog.getByLabel("Seller SKU").fill("VK-AF2-BLK");
await addProductDialog.getByLabel("Category").selectOption({ label: "Home appliances" });
await addProductDialog.getByLabel("Selling price").fill("4999");
await addProductDialog.getByLabel("Available inventory").fill("42");
await addProductDialog.getByRole("button", { name: /Continue/i }).click();
await addProductDialog.getByText("2. Policy", { exact: true }).waitFor();
await addProductDialog.getByRole("button", { name: /Continue/i }).click();
await addProductDialog.getByText("Likely eligible", { exact: true }).waitFor();
await addProductDialog.getByRole("button", { name: /Submit for review/i }).click();
await seller.getByText(
  "Product submitted for catalogue and lender review",
  { exact: true },
).waitFor();

await seller.getByRole("button", { name: /Orders/ }).click();
await seller.getByRole("heading", { name: "Orders", exact: true }).waitFor();
await seller.getByRole("button", { name: /Export/i }).click();
await seller.getByText("Order report exported", { exact: true }).waitFor();
await seller.screenshot({
  path: new URL("seller-orders.png", outputDir).pathname,
  fullPage: true,
});

await seller.getByRole("button", { name: /Settlements/ }).click();
await seller.getByRole("heading", { name: "Settlements", exact: true }).waitFor();
await seller.getByRole("button", { name: /Download statement/i }).click();
await seller.getByText("Settlement statement downloaded", { exact: true }).waitFor();
await seller.screenshot({
  path: new URL("seller-settlements.png", outputDir).pathname,
  fullPage: true,
});
await seller
  .getByText("Settlement statement downloaded", { exact: true })
  .waitFor({ state: "hidden" });

await seller.getByRole("button", { name: /Analytics/ }).click();
await seller.getByRole("heading", { name: "Growth & risk", exact: true }).waitFor();
await seller.getByRole("heading", { name: "Financed customer cohorts" }).waitFor();
await seller.screenshot({
  path: new URL("seller-analytics.png", outputDir).pathname,
  fullPage: true,
});

await browser.close();

if (failures.length) {
  console.error("Prototype verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Prototype verification passed.");
console.log("Buyer: home → credit/profile → catalogue → product → checkout → success.");
console.log("Seller: overview → offer → catalogue/onboarding → orders → settlements → analytics.");
