import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";

const Layout = lazy(() => import("./components/Layout"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const Customers = lazy(() => import("./components/Customers"));
const About = lazy(() => import("./components/About"));
const Products = lazy(() => import("./components/Products"));
const Contact = lazy(() => import("./components/Contact"));
const Balls = lazy(() => import("./components/Balls"));
const Sticks = lazy(() => import("./components/Sticks"));
const Bags = lazy(() => import("./components/Bags"));
const Hats = lazy(() => import("./components/Hats"));
const Shirts = lazy(() => import("./components/Shirts"));
const Other = lazy(() => import("./components/Other"));
const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    element: (
        <Layout />
    ),
    errorElement: (
        <ErrorPage />
    ),
    children: [
      {
        path: "/customers",
        element: (
            <Customers />
        ),
      },
      {
        path: "/about",
        element: (
            <About />
        ),
      },
      {
        path: "/products",
        element: (
            <Products />
        ),
      },
      {
        path: "/contact",
        element: (
            <Contact />
        ),
      },
      {
        path: "/balls",
        element: (
            <Balls />
        ),
      },
      {
        path: "/bags",
        element: (
            <Bags />
        ),
      },
      {
        path: "/sticks",
        element: (
            <Sticks />
        ),
      },
      {
        path: "/hats",
        element: (
            <Hats />
        ),
      },
      {
        path: "/shirts",
        element: (
            <Shirts />
        ),
      },
      {
        path: "/other",
        element: (
            <Other />
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
        <Home />
    ),
    errorElement: (
        <ErrorPage />
    ),
  },
  {
    path: "/home",
    element: (
        <Home />
    ),
    errorElement: (
        <ErrorPage />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
