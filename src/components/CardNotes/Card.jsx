import React from 'react'
import './cardNotes.css'

const Card = () => {
  return (
    <div className="containerCardNote">
        <div className='cardNote cardNote0'>
            <div className='border'>
                <h2>CSE</h2>
                <a className='cardNotesLink' href="https://drive.google.com/drive/folders/1nxOz5FWRr-dBSXbPJxKznkIJVAs8hNmG?usp=drive_link" target='_blank'>Find Notes</a>
            
            </div>
        </div>
        
        <div className='cardNote cardNote1'>
            <div className='border'>
                <h2>ECE</h2>
                <a className='cardNotesLink' href="https://drive.google.com/drive/folders/1_JbLm1GRdAfwgeMzMXRv7tOdycXfvSU8?usp=drive_link" target='_blank'>Find Notes</a>
            </div>
        </div>
        
        <div className='cardNote cardNote2'>
            <div className='border'>
                <h2>IT</h2>
                <a className='cardNotesLink' href="https://drive.google.com/drive/folders/1_JbLm1GRdAfwgeMzMXRv7tOdycXfvSU8?usp=drive_link" target='_blank'>Find Notes</a>
           
            </div>
        </div>
    </div>
  )
}

export default Card