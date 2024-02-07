import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Login";
import { DashboardLayout } from "./DashboardLayout";
import { Schedules } from "../pages/Schedules";
import { Clients } from "../pages/Clients";
import { Services } from "../pages/Services";
import { Campaigns } from "../pages/Campaigns";
import { FormClients } from "../pages/FormClients";
import { FormServices } from "../pages/FormServices";

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
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/new",
        element: <FormClients />,
      },
      {
        path: "/clients/:id/edit",
        element: <FormClients />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/new",
        element: <FormServices />,
      },
      {
        path: "/services/:id/edit",
        element: <FormServices />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
