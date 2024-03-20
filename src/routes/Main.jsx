import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { BsBagFill,BsFillPersonFill,BsCartFill} from "react-icons/bs";
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';


// import HeroImg from '../components/HeroImg'
//import InfoPages from '../components/InfoPages'
// import BigDiscount from '../components/BigDiscount'

// import NewArrivalProduct from '../components/NewArrivalProduct'
// import Footer from '../components/Footer'
// import BestSales from '../components/BestSales'
// import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Footers from '../components/Footers';

const Main = () => {
  const[click,setClick]=useState(false)
const handleClick =()=>setClick(!click);
 
  return (
    <div>
        {/* <div className='row'>
          <div className='navbar px-4'>
          <div className='d-flex' style={{fontSize:"40px"}}><BsBagFill/><h2>Mart</h2></div>
           
          <ul className={ click ? "nav-menu active" : "nav-menu"}  >
                   <li><Link className='col' to='/' style={{color:'black'}}>Home</Link></li>
                    <li><Link to='/shop'  style={{color:'black'}}>Shop</Link></li>
                    <li><Link to='/Cart'  style={{color:'black'}}>Cart</Link></li>
                </ul>
            
            <div className='nav-user d-flex ' style={{fontSize:"40px"}}>
              <BsFillPersonFill />
              <BsCartFill />
              <div className='nav-cart-count d-flex px-2 mt-0'
               style={{background:"black",color:"white",
               fontSize:"14px",
               borderRadius:"20px",
               width: "22px",height: "22px" }}>0</div>
            
            <div className='hamburger d-none' onClick={handleClick}>
              {click ?(<FaTimes size={20} style={{color:'black'}}/>
):(<FaBars size={20} style={{color:'black'}}></FaBars>
)}           </div>
            </div>


          </div>

  </div>*/}

  <NavBar></NavBar>
        <Outlet></Outlet> 
        
       
      
        {/* <HeroImg></HeroImg>
        <Service></Service>
        <BigDiscount></BigDiscount>
        <NewArrivalProduct/>
        <BestSales/> */}
        <Footers></Footers>
        
    </div>
  )
}

export default Main