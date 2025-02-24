import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Favorites } from "../pages/Favorites"; // Import Favorites page
import {Upcoming} from '../pages/Upcoming';
import {EventPage} from '../pages/EventPage';
import {Settings} from '../pages/settings';
import {Feedback} from '../pages/Feedback';
import {Admin} from '../pages/adminPage'
import {EditProfile} from '../pages/EditProfile';
import {Login} from '../pages/Login';
import {EventForm} from '../pages/addEvent';
import {EventTypeForm} from '../pages/addEventType';
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
  },
  {
    path:"/settings",
    element: <Settings/>
  },
  {
    path:"/feedback",
    element: <Feedback/>
  },
  {
    path:"/edit-profile",
    element: <EditProfile/>

  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/Admin",
    element: <Admin/>
  },
  {
    path:"/add-events",
    element: <EventForm/>
  },
  {
    path:"/add-event-type",
    element: <EventTypeForm/>
  }
]);
