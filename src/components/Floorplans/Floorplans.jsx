import React from 'react'
import './Floorplans.css'
import floorplan_data from '../../assets/floorplan_data'
import react from'../../assets/react.svg'
import arrow from '../../assets/arrow.svg'

const Floorplans = () => {
  return (
      <div id='floorplans' className='floorplan'>
      <div className='floorplan-title'>
        <h1>Floor Plans</h1>
        <img src={react} alt=""/>
      </div>
      <div className="floorplan-container">
        {floorplan_data.map((eachPlan, index) => {
          return <img key={index} src={eachPlan.image} alt={eachPlan.name}/>
        })}
      </div>
      <div className='floorplan-showmore'>
        <p>Show More</p>
        <img src={arrow} alt="arrowicon" />
      </div>      
    </div>
  )
}

export default Floorplans
