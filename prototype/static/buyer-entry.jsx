import React from "react";
import { createRoot } from "react-dom/client";
import ConsumerApp from "../src/main";
import "../src/styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConsumerApp />
  </React.StrictMode>,
);
