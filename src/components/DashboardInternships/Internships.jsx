"use client";
import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import css from "@/components/DashboardInternships/dashboardInternships.css";

const Internships = () => {

  const [ver, setVer] = useState([])
  const [rej, setRej] = useState([])



  const getInverification = async()=>{

    try{
      
    const response = await fetch("http://localhost:5000/api/v1/opp/inVer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    });

      const data = await response.json();
     
      alert(data.message);
      if(data.success == true){
        setVer(data.allJobs);
      }

    } catch (err) {
      console.log(err);
    }


  }
  const getRejected = async()=>{

    try{
      
    const response = await fetch("http://localhost:5000/api/v1/opp/rej", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    });

      const data = await response.json();
     
      alert(data.message);
      if(data.success == true){
        setRej(data.allJobs);
      }

    } catch (err) {
      console.log(err);
    }


  }


  const handleUpdate =  async(id,status)=>{

    try{
      
      const response = await fetch(`http://localhost:5000/api/v1/opp/update/${id}`, {
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
    <div className='I_main'>
      {ver && ver.map((internship) => (
        <div className='IContainer' key={internship._id}>
          <div className='details'>
            <div className='IName'>
              <p>{internship.title}</p>
            </div>
            <div className='IDate'>
              <p>{internship.companyName}</p>
            </div>
            <div className='IDesc'>
              <span>{internship.description}</span>
            </div>
          </div>
          <div className='actionBtns'>
            <div className='accept'>
              <button onClick={ ()=> handleUpdate(internship._id,"approved")}>
                <FaCheck />
              </button>
            </div>
            <div className='reject'>
              <button onClick={ ()=> handleUpdate(internship._id,"rejected")}>
                <ImCross />
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2>Recent Internships</h2>
      {rej && rej.map((Internships) => (
      <div className='IContainer' key={Internships._id}>
        <div className='details'>
          <div className='IName'>
            <p>{Internships.title}</p>
          </div>
          <div className='IDate'>
            <p>{Internships.companyName}</p>
          </div>
          <div className='IDesc'>
            <span>{Internships.description}</span>
          </div>
        </div>
        <div className='status'>
        <p>{Internships.status}</p>
      </div>
      </div>
      ))}
    </div>
  )
}

export default Internships