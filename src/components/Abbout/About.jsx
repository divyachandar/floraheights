import React from 'react'
import './About.css'
import apartment from './apartment.jpg'
import livingroom from './livingroom.jpg'

const About = () => {
  return (
      <div id='abbout' className='about'>
          <div className='about-title'>
              <h1>About me</h1>
              <img src={apartment} alt="apartment"/>
          </div>
          <div className='about-sections'>
              <div className='about-left'>
                  <img src={livingroom} alt="flatimage"/>
              </div>
              <div className='about-right'>
                  <div className='about-para'>
                      <p>good apartment</p>
                      <p>124units</p>
                  </div>
                  <div className='about-flat-size'>
                      <div className='about-sft'>
                          <p>900SFT</p>
                          <hr style={{ width: "50%" }}/>
                      </div>
                      <div className='about-sft'>
                          <p>1225SFT</p>
                          <hr style={{ width: "70%" }}/>
                      </div>
                      <div className='about-sft'>
                          <p>1725SFT</p>
                          <hr style={{ width: "60%" }}/>
                      </div>
                      <div className='about-sft'>
                          <p>2025SFT</p>
                          <hr style={{ width: "50%" }}/>
                      </div>
                  </div>                   
                  <img src={livingroom} alt="flatimage"/>
              </div>              
          </div>
            <div className='about-delivery'>
            <div className='about-handover'>
                  <h1>50+</h1>
                  <p>YEARS OF EXPERIENCE</p>             
            </div>
            <hr/>
            <div className='about-handover'>
                  <h1>30+</h1>
                  <p>PROJECTS COMPLETED</p>             
            </div>
            <hr/>
            <div className='about-handover'>
                  <h1>1500+</h1>
                  <p>HAPPY CUSTOMERS</p>             
            </div>
            <hr/>
      </div>
      </div>
    
       
  )
}

export default About
