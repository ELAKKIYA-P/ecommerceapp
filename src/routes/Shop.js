import React from 'react'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from '../components/Projects';
import ShopBackground from '../ShopPages/ShopBackground';


const Shop = () => {
  return (
    <div>
      <NavBar></NavBar>
    <ShopBackground></ShopBackground>
      {/* <Projects/> */}
    
    </div>
  )
}

export default Shop