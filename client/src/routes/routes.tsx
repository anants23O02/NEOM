import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Favorites } from "../pages/Favorites"; 
import { Upcoming } from "../pages/Upcoming";
import { EventPage } from "../pages/EventPage";
import { Settings } from "../pages/settings";
import { Feedback } from "../pages/Feedback";
import { EditProfile } from "../pages/EditProfile";
import { Login } from "../pages/Login";
import { SetUser } from "../services/LoginServices/setUser";
import { Fetch } from "../API/Fetch";
import { SignUp } from "../services/LoginServices/SignUp";
import { SignIn } from "../services/LoginServices/signIn";
import {Logout} from "../pages/Logout";
import {Websocket} from "../pages/websocket";
import { RescheduledEvent } from "../pages/rescheduleEvent";
import CountdownTimer from "../components/CountDownTimer/alternateEvent";
import { AlternateEvent } from "../pages/alternateEvent";
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
    path: "/web-socket",
    element: <Websocket/>,
  }, 
  {
    path: "/rescheduled-event/:eventid",
    element: <RescheduledEvent/>,
  },{
    path: "/alternate-event",
    element: <AlternateEvent/>,
  },
]);
