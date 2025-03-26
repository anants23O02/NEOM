import { useState, useEffect } from "react";
import styles from "../styles/SendNotification.module.css"; // Import external CSS
import { fetchUsers } from "../API/fetchUsers";
import { useSelector } from "react-redux";

export const SendNotification: React.FC = () => {
  const events = useSelector((state) => state.events.events.events);
  const [users, setUsers] = useState([]);
  const [input, setinput] = useState(true);
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [minDate, setminDate] = useState();
  const [data, setData] = useState();
  const initformData = {
    user: "",
    event: "",
    date: "",
  };

  const [formData, setFormData] = useState(initformData);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      console.log("fetchedUsers :>> ", fetchedUsers);
      setUsers(fetchedUsers.users);
    };
    getUsers();
  }, []);

  const handleSetUser = async (e) => {
    try {
      const response = await fetch(`/api/user-data?userid=${e.target.value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      handleChange(e);
      setinput(false);
      console.log(data);
      setScheduledEvents(
        data.user_events.reduce((acc, event) => {
          if (event.status === "scheduled") acc.push(event.event_id);
          return acc;
        }, [])
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    const res = await fetch("/api/admin/add-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    setFormData(initformData);
    const data = await res.status;
    console.log(" data from api", data);
  };

  const setevent = (e) => {
    console.log(data);
    handleChange(e);
    setminDate(
      data.user_events.find(
        (event) => event.event_id === Number(e.target.value)
      ).event_date
    );
    // console.log(
    //   data.user_events.find((event) => event.event_id === Number(e.target.value))
    //     .event_date
    // );
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (selectedDate < minDate) {
      alert(`Please select a date on or after ${minDate}`);
      e.target.value = minDate; // Reset input to minDate
    }

    handleChange(e); // Keep your original handler
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Send Notification</h2>
        {/* First Dropdown */}
        <div className={styles.formInput}>
          <label className={styles.label}>Select User</label>
          <select
            name="user"
            value={formData.option1}
            onChange={(e) => {
              handleSetUser(e);
            }}
            className={styles.select}
            required
          >
            {users.map((user) => {
              return <option value={user.userid}>{`${user.userid}`}</option>;
            })}
          </select>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label}>Select Event</label>
          <select
            name="event"
            value={formData.option2}
            onChange={(e) => setevent(e)}
            className={styles.select}
              required
            disabled={input}
          >
            {scheduledEvents.map((event) => {
              return <option value={event}>{`${event}`}</option>;
            })}
          </select>
        </div>
        {/* Date Picker */}
        <div className={styles.formInput}>
       { minDate  && (<div className={styles.label}>
          {`Please select a date between ${minDate.split("T")}`}
        </div>)}
          <label className={styles.label}>Select Reschedule Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.input}
            min={minDate}
            required
          />
        </div>
        
        <button type="submit" className={styles.button}>
          Send Notification
        </button>
      </form>
    </div>
  );
};
