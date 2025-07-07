import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import GSTAdmissionPage from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GSTAdmissionPage />
  </StrictMode>
);
