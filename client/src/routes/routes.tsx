import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Favorites } from "../pages/Favorites"; // Import Favorites page
import {Upcoming} from '../pages/Upcoming';
import {EventPage} from '../pages/EventPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },{
    path: "/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/event",
    element: <EventPage/>
  }
]);
