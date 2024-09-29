import React from 'react'
import Contactus from './components/Contactus'
import Header from './components/Header'
import Flora from './components/Flora/Flora'
import About from './components/Abbout/About'
import Amenities from './components/Amenities/Amenities'
import Floorplans from './components/Floorplans/Floorplans'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Flora />
      <About />
      <Amenities />
      <Floorplans />
      <Contact />
      <Footer/>
      <Contactus />      
      
    </div>
  )
}

export default App
