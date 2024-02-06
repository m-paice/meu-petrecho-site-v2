import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Login";
import { DashboardLayout } from "./DashboardLayout";
import { Schedules } from "../pages/Schedules";
import { Clients } from "../pages/Clients";
import { Services } from "../pages/Services";
import { Campaigns } from "../pages/Campaigns";

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
        path: "/services",
        element: <Services />,
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
