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
        path: "/clients",
        element: <Clients />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
