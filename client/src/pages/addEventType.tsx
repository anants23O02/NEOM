import {useState} from "react";

export const EventTypeForm:React.FC = () => {
    const [formData,setformData] = useState({
        eventName:"",
        eventDescription:"",
    });
    const handleChange = (e) => {
        const {type,name,value} = e.target;
        setformData({...formData,[name]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('formData :>> ', formData);
        const response = await fetch("/api/admin/add-event-type",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(formData),
        })
        if(!response.ok){
            console.log('failed to submit :>> ');
        }
        const redirect = await response.json();
        window.location.href= `/${redirect.redirect}`;
    }
    return(
        <section className="container">
            <div className="section">
                <div className="sectionHeading">
                    Add Event Type
                </div>
                <form action="" onSubmit={handleSubmit} className="event-form">
                    <input type="text" name="eventName" onChange={handleChange} />
                    <input type="text" name="eventDescription" onChange={handleChange} />
                    <button type="submit" className="submit-button"> 
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}