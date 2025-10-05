import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('/booksData.json'),
      },
    ],
  },
]);
