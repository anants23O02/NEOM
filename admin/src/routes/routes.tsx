import { Admin } from "../pages/adminPage";
import { EventForm } from "../pages/addEvent";
import { EventTypeForm } from "../pages/addEventType";
import { SendNotification } from "../pages/sendNotification";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Fetch} from "../API/Fetch";
export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/",
    element: <Fetch />,
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
    path: "/admin-event-reschedule",
    element: <SendNotification />,
  },
]);
