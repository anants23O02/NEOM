import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setEvents} from "../store/events"


export const Fetch:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchingEvents = async() => {
          try{ 
            const res = await fetch('/api/events');
            if(!res.ok){
              throw new Error("u suck"); 
            }
            const events = await res.json();
            dispatch(setEvents(events)); 
            window.location.href = "/admin";
          }
          catch(error){
            console.log('error caught:>> ', error);
          }
        }
        fetchingEvents();
      },[dispatch])

      return(
        <>
        <div style={{margin:"auto"}} >
            Fetching events....
        </div>
        </>
      );
}