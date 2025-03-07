import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Favorites } from "../pages/Favorites"; // Import Favorites page
import { Upcoming } from "../pages/Upcoming";
import { EventPage } from "../pages/EventPage";
import { Settings } from "../pages/settings";
import { Feedback } from "../pages/Feedback";
import { Admin } from "../pages/adminPage";
import { EditProfile } from "../pages/EditProfile";
import { Login } from "../pages/Login";
import { EventForm } from "../pages/addEvent";
import { EventTypeForm } from "../pages/addEventType";
import { SetUser } from "../services/LoginServices/setUser";
import { Fetch } from "../API/Fetch";
import { SignUp } from "../services/LoginServices/SignUp";
import { SignIn } from "../services/LoginServices/signIn";
import {Logout} from "../pages/Logout";
import {SendNotification} from "../services/adminServices/sendNotification";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/event/:eventId",
    element: <EventPage />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/add-events",
    element: <EventForm />,
  },
  {
    path: "/add-event-type",
    element: <EventTypeForm />,
  },
  {
    path: "/setUser",
    element: <SetUser />,
  },
  {
    path: "/fetch",
    element: <Fetch />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  ,
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/admin-event-reschedule",
    element: <SendNotification />,
  },
]);
