import { useState, useEffect } from "react";
import styles from "../../styles/SendNotification.module.css"; // Import external CSS
import { useSelector } from "react-redux";
import { fetchUsers } from "../../API/fetchUsers";
export const SendNotification: React.FC = () => {
  const events = useSelector((state) => state.events.events.events);
  const [users, setUsers] = useState([]);
  const initformData = {
    user: "",
    event: "",
    date: "",
  };
  const [formData, setFormData] = useState(initformData);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers.users);
    };
    getUsers();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/add-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    const data = await res.status;

    setFormData(initformData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Send Notification</h2>
        
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
