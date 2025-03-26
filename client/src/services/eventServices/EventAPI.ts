import { useSelector } from "react-redux";
import { rescheduleEvent } from "../../store/userSlice";
import {useDispatch} from "react-redux";
export const addToSchedule = async (eventid,userid) => {
  console.log('eventid :>> ', eventid);
    try {
      const res = await fetch("/api/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventid, userid }),
      });
      if (!res.ok) {
        throw new Error("Failed to add event to schedule");
      }
      return await res.json(); 
    } catch (error) {
      console.error("Error adding event:", error);
      return { success: false, message: error.message };
    }
  };
  

  export const addToFavorite = async (eventid,userid) => {
    console.log('userid,eventid :>> ', userid,eventid);
    try{
      const res = await fetch("api/addFavorite",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({eventid,userid}),
      });

      if(!res.ok){
        throw new Error("Failed to add to schedule");

      }
      return await res.json();
    } catch(error) {
      console.log('error :>> ', error);
      return {sucess:false,message:error.message};
    }
  }

  export const removeFromFavorite = async (eventid,userid) => {
console.log('here :>> ');
    try{
      const res = await fetch("/api/remove-favorite",{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({userid,eventid})
      });
      return await res
    } catch(error) {
      console.log('error.message :>> ', error.message);
    }
  }

  export const rescheduleThisEvent = async (eventid, rescDate, dispatch) => {
    try {
      console.log("Event is being rescheduled");
      const res = await fetch("/api/reschedule-event", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventid, rescDate }),
      });
  
      if (!res.ok) {
        throw new Error(`Failed to reschedule event. Status: ${res.status}`);
      }
  
      console.log(res.status, "Status of API");
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error rescheduling event:", error.message);
    }
  };
  