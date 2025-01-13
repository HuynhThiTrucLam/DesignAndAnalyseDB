import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.tsx";
import { baseTheme } from "./assets/global/Theme-variable.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>
);
