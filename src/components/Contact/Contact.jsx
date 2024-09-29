import React from 'react'
import './Contact.css'
import react from '../../assets/react.svg'
import call from '../../assets/callicon.svg'
import location from '../../assets/locationicon.svg'
import email from '../../assets/emailicon.svg'

const Contact = () => {
      const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "409c9a8d-7c18-431c-8db7-07b1fe553b5d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert(res.message);
    }
    };
    
  return (
      <div id='contact' className='contact'>
          <div className="contact-title">
              <h1>Get In Touch</h1>
              <img src={react} alt="theme" />
              <div class="contact-section">
                  <div class="contact-left">
                      <h1>Let's talk</h1>
                      <p>only 20 flats are left,<b>No GST</b></p>
                      <div className="contact-details">
                          <div className="contact-detail">
                              <img src={email} alt="mailid" />
                              <p>floraheights@gmail.com</p>
                              
                          </div>
                          <div className="contact-detail">
                              <img src={call} alt="callus" />
                              <p>9876123456</p>
                          </div>
                          <div className="contact-detail">
                              <img src={location} alt="location at" />
                              <p>Baba College road,near PM Palem last busstop</p>                              
                          </div>
                      </div>
                  </div>
                  <form onSubmit={onSubmit} className='contact-right'>
                      <label htmlFor="">Enter Name</label>
                      <input type="text" placeholder="Enter your name" name='name' />
                      <label htmlFor="">Enter Email</label>
                      <input type="email" placeholder="Enter your email" name='email' />
                      <label htmlFor="">Write message here</label>
                      <textarea name="message" rows="8" placeholder='Enter message'>
                      </textarea>   
                      <button type='submit' className='contact-enquiry'>
                          Enquiry Now
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contact
