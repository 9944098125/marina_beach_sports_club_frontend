import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Construction from "../Components/Construction";
import Events from "../Pages/Events";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Newsroom from "../Pages/Newsroom";
import GetInvolved from "../Pages/GetInvolved";
import ProTour from "../Pages/ProTour";
import AsianChampionship from "../Pages/AsianChampionship";
import FivbChallenge from "../Pages/FivbChallenge";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Construction /> */}
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news-events",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/newsroom",
        element: <Newsroom />,
      },
      {
        path: "/get-involved",
        element: <GetInvolved />,
      },
      {
        path: "/pro-tour",
        element: <ProTour />,
      },
      {
        path: "fivb-challenge",
        element: <FivbChallenge />,
      },
      {
        path: "/asian-championship",
        element: <AsianChampionship />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
