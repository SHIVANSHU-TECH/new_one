import React from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import css from "@/components/DashboardEvents/dashboardEvents.css";


const events = () => {
  const eventData = [
    { name: 'Code Fit', date: '25-09-2023', description: 'Main campus' },
    { name: 'Hackathon', date: '20-09-2023', description: 'Main Campus' },
  ];
  const ApprovedEvent = [
    { name: 'Code Quiz', date: '12-10-2023', description: 'Main campus', status: 'Approved' },
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
    { name: 'Poster Making', date: '15-10-2023', description: 'Online' , status: 'Approved'},
  ];
  return (
    <div className='events_main'>
      {eventData.map((event, index) => (
        <div className='eventContainer' key={index}>
          <div className='details'>
            <div className='evntName'>
              <p>{event.name}</p>
            </div>
            <div className='evntDate'>
              <p>{event.date}</p>
            </div>
            <div className='evntDesc'>
              <span>{event.description}</span>
            </div>
          </div>
          <div className='actionBtns'>
            <div className='accept'>
              <button>
                <FaCheck />
              </button>
            </div>
            <div className='reject'>
              <button>
                <ImCross />
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2>Recent Events</h2>
      {ApprovedEvent.map((approved, index) => (
      <div className='eventContainer' key={index}>
        <div className='details'>
          <div className='evntName'>
            <p>{approved.name}</p>
          </div>
          <div className='evntDate'>
            <p>{approved.date}</p>
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