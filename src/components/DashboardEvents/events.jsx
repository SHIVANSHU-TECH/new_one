"use client";
import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import css from "@/components/DashboardEvents/dashboardEvents.css";


const events = () => {

  const [ver, setVer] = useState([])
  const [rej, setRej] = useState([])



  const getInverification = async()=>{

    try{
      
    const response = await fetch("http://localhost:5000/api/v1/event/inVer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    });

      const data = await response.json();
     
      alert(data.message);
      if(data.success == true){
        setVer(data.allEvents);
      }

    } catch (err) {
      console.log(err);
    }


  }
  const getRejected = async()=>{

    try{
      
    const response = await fetch("http://localhost:5000/api/v1/event/rej", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    });

      const data = await response.json();
     
      alert(data.message);
      if(data.success == true){
        setRej(data.allEvents);
      }

    } catch (err) {
      console.log(err);
    }


  }


  const handleUpdate =  async(id,status)=>{

    try{
      
      const response = await fetch(`http://localhost:5000/api/v1/event/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body:JSON.stringify({
          "status":status
        })
      });
  
        const data = await response.json();
       
        alert(data.message);
        if(data.success==true){
          getInverification();
          getRejected();
        }
  
      } catch (err) {
        console.log(err);
      }

  }

  useEffect(() => {
    getInverification();
    getRejected();

  }, [])
  


  
 
  


  return (
    <div className='events_main'>
      {ver && ver.map((event) => (
        <div className='eventContainer' key={event._id}>
          <div className='details'>
            <div className='evntName'>
              <p>{event.title}</p>
            </div>
            <div className='evntDate'>
              <p>{event.DeadlineDate}</p>
            </div>
            <div className='evntDesc'>
              <span>{event.description}</span>
            </div>
          </div>
          <div className='actionBtns'>
            <div className='accept'>
              <button onClick={ ()=> handleUpdate(event._id,"approved")}>
                <FaCheck />
              </button>
            </div>
            <div className='reject'>
              <button>
                <ImCross   onClick={()=> handleUpdate(event._id,"rejected")}/>
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2>Rejected Events</h2>
      {rej && rej.map((approved) => (
      <div className='eventContainer' key={approved._id}>
        <div className='details'>
          <div className='evntName'>
            <p>{approved.title}</p>
          </div>
          <div className='evntDate'>
            <p>{approved.DeadlineDate}</p>
          </div>
          <div className='evntDesc'>
            <span>{approved.description}</span>
          </div>
        </div>
        <div className='status'>
        <p>{approved.status}</p>
      </div>
      </div>
      ))}
    </div>
  )
}

export default events