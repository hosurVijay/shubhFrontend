import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import Home from "./Pages/Home.jsx";
import ComingSoon from "./Pages/ComingSoon.jsx";
import App from "./App.jsx";
import Muhuratas from "./Pages/Muhurtas.jsx";
import Details from "./Pages/Details.jsx";
import Company from "./Pages/Company.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/howItWorks",
        element: <ComingSoon />,
      },
      {
        path: "/partnerLogin",
        element: <Details />,
      },
      {
        path: "/contact",
        element: <ComingSoon />,
      },
      {
        path: "/muhurat",
        element: <Muhuratas />,
      },
      {
        path: "/company",
        element: <Company />,
      },
    ],
  },
]);

if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
  window.gtag("config", import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
}

// console.log(import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
