import React, { useState ,useEffect} from 'react';
//  import { Link } from 'react-router-dom';
// import{ RiSearchLine} from 'react-icons/ri'
import { BsBagFill,BsFillPersonFill,BsCartFill} from "react-icons/bs";
import '../css/NavBarStyles.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';


const NavBar = ({cart}) => {
   console.log("cart",cart?.length)
  const[click,setClick]=useState(false)
const handleClick =()=>setClick(!click);


  return (
   <header>
    <nav>
        <div className='navbar'>
           <div className='navbar-icon'><BsBagFill/><h2>Mart</h2></div>
            {/* <div className='search-box'>
                <input type='search' name='search' placeholder='search for product'/>
                <div className='search-icon'><RiSearchLine/></div>
            </div>
             */}
             
                <ul className={ click ? "nav-menu active" : "nav-menu"}  style={{display:"flex",fontSize: "30px",
    fontWeight: "600", gap:"80px",listStyle:"none",marginLeft:"1080px"}} >
                   <li><Link  to='/' style={{color:'black',textDecoration:"none"}}>Home</Link></li>
                    <li><Link to='/shop'  style={{color:'black', textDecoration:"none"}}>Shop</Link></li>
                    <li><Link to='/Cart'  style={{color:'black', textDecoration:"none"}}>Cart</Link></li>
                </ul>
            
            <div className='nav-user'>
            <Link to="/shop" style={{color:"black"}}> <BsFillPersonFill /></Link>
             <Link to="/cart" style={{color:"black"}}> <BsCartFill /></Link>
              <div className='nav-cart-count'>{cart?.length}</div>
            
            <div className='hamburger' onClick={handleClick}>
              {click ?(<FaTimes size={20} style={{color:'black'}}/>
):(<FaBars size={20} style={{color:'black'}}></FaBars>
)}           </div>
            </div>
            
</div>
        
    </nav>
   </header>
  )
}

export default NavBar


// import React from 'react';
// import { faBagShopping, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../css/HomePage.css'
// export default function Navbar() {
//     return (
//         <div className=''>
//             <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light headers" >
//                 <div className="container">
//                     <div>
//                         <a className="navbar-brand navMarttext" href="m"><b>  <span><FontAwesomeIcon icon={faBagShopping} /></span> MART</b></a>
//                     </div>
//                     <div className="navbar-nav features">
//                         <a className="nav-link active" href="/"><b>Home</b></a>
//                         <a className="nav-link active" href='/shop'><b>Shop</b></a>
//                         <a className="nav-link active" href="/cart"><b>Cart</b></a>
//                         <a className="nav-link active" href="j"><b><FontAwesomeIcon icon={faUser} /></b></a>
//                         <a className="nav-link active" href="/cart"><b><FontAwesomeIcon icon={faShoppingCart} /></b></a>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }