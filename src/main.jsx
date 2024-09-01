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
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/customers",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Customers />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/balls",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Balls />
          </Suspense>
        ),
      },
      {
        path: "/bags",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Bags />
          </Suspense>
        ),
      },
      {
        path: "/sticks",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Sticks />
          </Suspense>
        ),
      },
      {
        path: "/hats",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Hats />
          </Suspense>
        ),
      },
      {
        path: "/shirts",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Shirts />
          </Suspense>
        ),
      },
      {
        path: "/other",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Other />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
