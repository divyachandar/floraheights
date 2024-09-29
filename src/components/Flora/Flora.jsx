import React from 'react'
import './Flora.css'
import florah from './florah.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Flora = () => {
  return (
      <div id="flora" className='flora'>
      <img src={florah} alt="" />
      <h1><span>Flora</span>Constructions</h1>
      <p>Strongbuilding construction</p>
      <div className='flora-action'>
        <div className='flora-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("location")}>Location</p></AnchorLink>Contact Us</div>
        <div className='flora-construct'>
          My flat
        </div>
      </div>     
      
    </div>
  )
}

export default Flora
