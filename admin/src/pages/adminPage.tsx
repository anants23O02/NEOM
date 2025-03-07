import { useNavigate } from "react-router-dom";

export const Admin: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate("/add-events")}>Add Event</button>
      <button onClick={() => navigate("/add-event-type")}>Add Event Type</button>
      <button>Add Event Experience</button>
      <button>Add Location</button>
      <button>Add Operator Review</button>
    </>
  );
};
