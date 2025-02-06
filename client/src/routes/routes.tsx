import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Favorites } from "../pages/Favorites"; // Import Favorites page

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);
