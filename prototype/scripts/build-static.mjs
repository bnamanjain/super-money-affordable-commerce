import { resolve } from "node:path";
import { copyFileSync, rmSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { build } from "vite";

const projectRoot = resolve(import.meta.dirname, "..");
const staticRoot = resolve(projectRoot, "static");
const publicRoot = resolve(projectRoot, "public");

rmSync(resolve(publicRoot, "prototype-assets"), { recursive: true, force: true });
for (const file of ["buyer.html", "index.html", "seller.html"]) {
  rmSync(resolve(publicRoot, file), { force: true });
}

await build({
  root: staticRoot,
  publicDir: false,
  plugins: [react()],
  build: {
    outDir: resolve(projectRoot, "public"),
    emptyOutDir: false,
    assetsDir: "prototype-assets",
    rollupOptions: {
      input: {
        buyer: resolve(staticRoot, "buyer.html"),
        seller: resolve(staticRoot, "seller.html"),
      },
    },
  },
});

copyFileSync(
  resolve(publicRoot, "buyer.html"),
  resolve(publicRoot, "index.html"),
);

console.log("Built static buyer and seller applications into public/.");
