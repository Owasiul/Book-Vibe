import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/Readlist/ReadList";
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
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/bookDeatails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/read",
        Component: ReadList,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);
