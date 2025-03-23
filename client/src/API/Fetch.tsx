import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "../store/events";
import CircularProgress from "@mui/material/CircularProgress";

export const Fetch: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchingEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error("u suck");
        }
        const events = await res.json();
        dispatch(setEvents(events));
        window.location.href = "/dashboard";
      } catch (error) {
        console.log("error caught:>> ", error);
      }
    };
    fetchingEvents();
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          width:"100%",
          height:"100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          textAlign:"center",
        }}
      >
        Fetching Events....
      </div>
      ;
    </>
  );
};
