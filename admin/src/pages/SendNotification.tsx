import { useState, useEffect } from "react";
import styles from "../styles/SendNotification.module.css"; // Import external CSS
import { fetchUsers } from "../../API/fetchUsers";
export const SendNotification: React.FC = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      console.log("fetchedUsers :>> ", fetchedUsers);
      setUsers(fetchedUsers.users);
    };
    getUsers();
  }, []);

  console.log("Users in Component:", users);
  const initformData = {
    user: "",
    event: "",
    date: "",
  };
  const [formData, setFormData] = useState(initformData);

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
            onChange={handleChange}
            className={styles.select}
            required
          >
            {users.map((user) => {
              return <option value={user.userid}>{`${user.userid}`}</option>;
            })}
          </select>
        </div>

        {/* Second Dropdown */}
        <div className={styles.formInput}>
          <label className={styles.label}>Select Event</label>
          <select
            name="event"
            value={formData.option2}
            onChange={handleChange}
            className={styles.select}
            required
          >
            {events.map((event) => {
              return <option value={event.eventid}>{`${event.id}`}</option>;
            })}
          </select>
        </div>

        {/* Date Picker */}
        <div className={styles.formInput}>
          <label className={styles.label}>Select Date & Time</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.input}
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
