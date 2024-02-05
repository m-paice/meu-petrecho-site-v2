import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";
import { Schedules } from "../pages/Schedules";
import { DashboardLayout } from "./DashboardLayout";
import { Clients } from "../pages/Clients";
import { Services } from "../pages/Services";

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
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
