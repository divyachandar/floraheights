import React from 'react'
import './Footer.css'
import react from '../../assets/react.svg'
import user from '../../assets/usericon.svg'

const Footer = () => {
  return (
      <div className='footer'>
          <div className="footer-top">
              <div className="footer-top-left">
                  <img src={react} alt="footer logo" />
                  <p>Flora constructions,with 25 years of experience</p>
              </div>
              <div className="footer-top-right">
                  <div className="footer-email-input">
                      <img src={user} alt="" />
                      <input type="email" placeholder="Enter your mail" />                      
                  </div>
                  <div className="footer-subscribe">
                      Subscribe
                  </div>
              </div>
              <hr />
              <div className="footer-bottom">
                  <p className="footer-bottom-left">
                      @ 2024 Flora.All rights are reserved
                  </p>
                  <div className='footer-bottom-right'>
                      <p>Term of Services</p>
                      <p>Privacy Policy</p>
                      <p>connect with us</p>
                  </div>
              </div>
          </div>      
    </div>
  )
}

export default Footer
