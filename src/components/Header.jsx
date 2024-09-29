import React, { useState,useRef} from 'react'
import './Header.css'
import florasmlogo from './florasmlogo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import react from '../assets/react.svg' 

const Header = () => {

  const [menu, setMenu] = useState("home"); 
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }


  return (
      <div className='navbar'>
      <img src={florasmlogo} alt="" />
      <img src={react} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} onClick={openMenu} className='nav-menu'>
        <img src={react} alt="" className='nav-mob-close'/>
              <li><AnchorLink className='anchor-link' offset={50} href='#abbout'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={florasmlogo} alt=''/>:<></>}</li>
              <li><AnchorLink className='anchor-link' offset={50} href='#flora'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="abbout"?<img src={florasmlogo} alt=''/>:<></>}</li>
              <li><AnchorLink className='anchor-link' offset={50} href='#amenities'><p onClick={()=>setMenu("amenities")}>Amenities</p></AnchorLink>{menu==="amenities"?<img src={florasmlogo} alt=''/>:<></>}</li>
              <li><AnchorLink className='anchor-link' offset={50} href='#floorplans'><p onClick={()=>setMenu("floorplan")}>Floor Plans</p></AnchorLink>{menu==="floorplans"?<img src={florasmlogo} alt=''/>:<></>}</li>
              <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("location")}>Location</p></AnchorLink>{menu==="location"?<img src={florasmlogo} alt=''/>:<></>}</li>
          </ul>
      <div className='nav-connect'>
      Enquire Now</div>       
    </div>
  )
} 

export default Header
