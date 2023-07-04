import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import ThemeProvider from "./providers/theme.provider";
import { getRoutes } from "./routes/getRoutes";

import "./index.css";

const router = getRoutes();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={ router } />
    </ThemeProvider>
  </React.StrictMode>
);
