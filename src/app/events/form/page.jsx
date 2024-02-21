"use client";
import React, { useState } from 'react';
import "../form/efom.css";


export default function EForm() { // Changed component name to follow React conventions
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [event_category, set_category] = useState('cultural');
  const [eimg, setEimg] = useState('');
  const [elink, setElink] = useState('');
  

  console.log(event,date,desc,event_category,eimg,elink)

  
  const handleSubmit = async (e) => {
    try {
    e.preventDefault();

    console.log(event_category);

      const token = localStorage.getItem("token");
    console.log(token);
      const response = await fetch("http://localhost:5000/api/v1/event/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: event,
          description: desc,
          image: eimg,
          category: event_category,
          link: elink,
          DeadlineDate: date,
        }),
      });

        const data = await response.json();
        console.log(data);
        alert(data.message);
        location.href="/events"
      } catch (err) {
        console.log(err);
      }
    };
  const handleCategory =(e)=>{
    set_category(e.target.value)
  }



  return (
    <div>
      <form className='eForm'>
        <label htmlFor="event">Event Name</label>
        <input
          type="text"
          id="ename"
          name="event"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Event name"
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />

        <label htmlFor="desc">Event Description</label>
        <input
          type="text"
          id="text"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />

        <label htmlFor="event_category">Category</label>
        <select
          id="event_category"
          name="event_category"
          value={event_category}
          onChange={(e) => handleCategory(e)}
        >
          <option value="cultural" selected >Cultural</option>
          <option value="technical">Technical</option>
          <option value="sports">Sports</option>
        </select>

        <label>Event Image</label>
        <input
          type="file"
          name="eimg"
          value={eimg}
          onChange={(e) => setEimg(e.target.value)}
        />

        <label>Event Link</label>
        <input
          type="url"
          name="elink"
          value={elink}
          onChange={(e) => setElink(e.target.value)}
        />

        <input type="submit" onClick={(e) => handleSubmit(e)} value="Submit" />
      </form>
    </div>
  );
}
