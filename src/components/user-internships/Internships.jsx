import React from 'react'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import css from "@/components/DashboardInternships/dashboardInternships.css";

const Internships = () => {
  // const internshipData = [
  //   { name: 'Amazone', role: 'Analyst', venue: 'Main campus' },
  //   { name: 'Accenture', role: 'Developer', venue: 'Main Campus' },
  // ];
  const AData = [
    { name: 'Accenture', role: 'SDE', venue: 'Main campus', status: 'Approved' },
    { name: 'Amazone', role: 'Analyst', venue: 'Online' , status: 'Approved'},
    { name: 'Amazone', role: 'Analyst', venue: 'Online' , status: 'Approved'},
  ];
  return (
    <div className='I_main'>
      {/* {internshipData.map((internship, index) => (
        <div className='IContainer' key={index}>
          <div className='details'>
            <div className='IName'>
              <p>{internship.name}</p>
            </div>
            <div className='IDate'>
              <p>{internship.role}</p>
            </div>
            <div className='IDesc'>
              <span>{internship.venue}</span>
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
      ))} */}
      <h2>Recent Internships</h2>
      {AData.map((Internships, index) => (
      <div className='IContainer' key={index}>
        <div className='details'>
          <div className='IName'>
            <p>{Internships.name}</p>
          </div>
          <div className='IDate'>
            <p>{Internships.role}</p>
          </div>
          <div className='IDesc'>
            <span>{Internships.venue}</span>
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