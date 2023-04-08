import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";
import GlobalStyle from "./style/GlobalStyle";
import router from "./router";
import AuthProvider from "./auth/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
