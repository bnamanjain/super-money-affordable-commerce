import React from "react";
import { createRoot } from "react-dom/client";
import SellerPortal from "../src/seller";
import "../src/styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SellerPortal />
  </React.StrictMode>,
);
