import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SlidingNavProvider from "./context/SlidingNavProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SlidingNavProvider>
      <App />
    </SlidingNavProvider>
  </StrictMode>
);
