import "../src/styles.css";

export const metadata = {
  title: "super.money | Affordable Commerce Concept",
  description:
    "An interactive mobile buyer experience and desktop seller portal for credit-aware commerce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
