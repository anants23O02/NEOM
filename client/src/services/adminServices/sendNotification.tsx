import { useState } from "react";
import styles from "../../styles/SendNotification.module.css"; // Import external CSS
import {useSelector} from "react-redux";
import {fetchUsers} from "./fetchUsers";
export const SendNotification: React.FC =  () => {
    const events = useSelector((state) => state.events.events.events);
    const {users} =  fetchUsers()
    console.log('users.results :>> ', users);
    const [formData, setFormData] = useState({
        option1: "",
        option2: "",
        date: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Send Notification</h2>

                {/* First Dropdown */}
                <div className={styles.formInput} >
                    <label className={styles.label}>Select User</label>
                    <select
                        name="option1"
                        value={formData.option1}
                        onChange={handleChange}
                        className={styles.select}
                        required
                    >
                        <option value="">All</option>
                        <option value="optionA">Option A</option>
                        <option value="optionB">Option B</option>
                    </select>
                </div>

                {/* Second Dropdown */}
                <div className={styles.formInput} >
                    <label className={styles.label}>Select Event</label>
                    <select
                        name="option2"
                        value={formData.option2}
                        onChange={handleChange}
                        className={styles.select}
                        required
                    >
                        
                        {
                            events.map((event) => {
                                return (
                                    <option value={event.eventid}>{`event ${event.id}`}</option>
                                )
                            })
                        }
                    </select>
                </div>

                {/* Date Picker */}
                <div className={styles.formInput} >
                    <label className={styles.label}>Select Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.button}>
                    Send Notification 📩
                </button>
            </form>
        </div>
    );
};
