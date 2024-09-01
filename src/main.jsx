import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import Products from "./components/Products";
import About from "./components/About";
import Customers from "./components/Customers";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Balls from "./components/Balls";
import Sticks from "./components/Sticks";
import Bags from "./components/Bags.jsx";
import Hats from "./components/Hats.jsx";
import Shirts from "./components/Shirts.jsx";
import Other from "./components/Other.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/customers",
        element: <Customers/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/balls",
        element: <Balls />,
      },
      {
        path: "/bags",
        element: <Bags />,
      },
      {
        path: "/sticks",
        element: <Sticks />,
      },
      {
        path: "/hats",
        element: <Hats />,
      },
      {
        path: "/shirts",
        element: <Shirts />,
      },
      {
        path: "/other",
        element: <Other />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
