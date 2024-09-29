import React from 'react'
import './Amenities.css'
import Amenities_data from './Amenities_data'
import apartment from '../../assets/apartment.svg'
import arrow from '../../assets/arrow.svg'

const Amenities = () => {
  return (
    <div id='amenities' className='amenities'>
      <div title='amenities-title'>
        <h1>Amenities</h1>
        <img src={apartment} alt="amenities"/>
      </div>
      <div className='amenities-container'>
        {Amenities_data.map((eachAmenity, index) => {
            return <div key={index} className='amenity-format'>
              <h3>{eachAmenity.num}</h3>
              <h2>{eachAmenity.name}</h2>
              <p>{eachAmenity.description}</p>
              <div className='amenities-seemore'>
                <p>See More</p>
                <img src={arrow} alt="arrowicon"/>
              </div>
               </div>
          })}      
    </div>
      </div>
  )
}

export default Amenities
