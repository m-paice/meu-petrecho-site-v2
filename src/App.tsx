import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Schedules } from "./pages/Schedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/schedules",
    element: <Schedules />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
