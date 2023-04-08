import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";
import GlobalStyle from "./style/GlobalStyle";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
