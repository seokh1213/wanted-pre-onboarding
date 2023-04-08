import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import React from "react";
import MainPage from "./pages/MainPage";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);

export default router;
