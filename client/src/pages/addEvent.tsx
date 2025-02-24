import { useState } from "react";
// import "./EventForm.css";

export const EventForm = () => {
  const [images, setImages] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    stars: "",
    reviews: "",
    city: "",
    country: "",
    event_type_id: 1,
    about_location_id: 1,
    user_experience_id: 1,
    start_date: "",
    end_date: "",
    category: "",
    event_desc: [],
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    if (type === "file" && e.target instanceof HTMLInputElement && e.target.files) {
      console.log("Selected File:", e.target.files[0]); // Debugging
      setImages(e.target.files[0]);
    } else if (name === "event_desc") {
      setFormData({ ...formData, [name]: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sendingData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      sendingData.append(key, value);
    });
    console.log('images :>> ', typeof images);
    if (images instanceof File) {
      sendingData.append("images", images);
    } else {
      console.error("Images must be a file.");
    }

    // console.log("Form Data:", formData);

    
    try {
      const response = await fetch(
        "/api/admin/add-event",
        {
          method: "POST",
          body: sendingData,
        }
      );
      if (!response.ok) throw new Error("Failed to submit form");
      console.log("Form submitted successfully");
      const redirect = await response.json();
      console.log('redirect :>> ', redirect);
      window.location.href = `/${redirect.redirect}`;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="container">
      <div className="section">
        <h2 className="sectionHeading">Create New Event</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
          />
          <input
            type="number"
            name="stars"
            value={formData.stars}
            onChange={handleChange}
            placeholder="Stars"
            required
          />
          <input
            type="number"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            placeholder="Reviews"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={handleChange}
            placeholder="Image URLs (comma separated)"
            required
          />
          <input
            type="datetime-local"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <textarea
            name="event_desc"
            value={formData.event_desc.join(",")}
            onChange={handleChange}
            placeholder="Event Description"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
