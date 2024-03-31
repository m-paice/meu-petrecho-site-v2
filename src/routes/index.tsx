import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Login";
import { DashboardLayout } from "./DashboardLayout";
import { Services } from "../pages/Services";
import { Clients } from "../pages/Clients";
import { Schedules } from "../pages/Schedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/schedules",
        element: <Schedules />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <Services />,
      },
      {
        path: "/services/:id/delete",
        element: <Services />,
      },
      {
        path: "/services/:id/edit",
        element: <Services />,
      },
      {
        path: "/services/new",
        element: <Services />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/new",
        element: <Clients />,
      },
      {
        path: "/clients/:id",
        element: <Clients />,
      },
      {
        path: "/clients/:id/edit",
        element: <Clients />,
      },
      {
        path: "/clients/:id/delete",
        element: <Clients />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
