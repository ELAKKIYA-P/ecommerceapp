// import React, { useState } from 'react'
import { MdOutlineAdd } from "react-icons/md";
import '../css/BestSalesStyles.css';
import {CiHeart} from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import StarRating from './StarRating';

import { useContext, useState } from "react";
import { cratContext } from "../App";
import{products} from "../assets/Products.js"
import { IoAddCircleOutline } from "react-icons/io5";




function BestSalesProduct({item}) {
  const notify = () => toast("Product should be added!");
  const{cart,setCart}=useContext(cratContext)
  const [total, setTotal] = useState(0);
  
  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  };
  
  return (
    <div className='col-lg-4 mb-2'>
    <div className="card" style={{width:'18rem'}}>
  <div className="d-flex align-items-end flex-column bd-highlight mb-2">
   <div className="p-2 bd-highlight"><CiHeart/></div>
  </div>


    <img src={item.imgUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.productName}</h5>
      <StarRating></StarRating>
      <div className='card-item d-flex justify-content-between'>
      <p className="d-flex justify-content-start" style={{fontWeight:'700',fontSize:'larger'}}>${item.price}</p>
      <button onClick={notify}><IoAddCircleOutline />
</button>
      <button style={{border:'none',backgroundColor:'transparent'}}onClick={()=>addToCart(item)}><span style={{ fontSize: 26 }}>+</span></button>
 
     {/* <a href="/cart" className="d-flex justify-content-end" style={{color:'black',fontSize:"30px",cursor:"pointer"}} ><MdOutlineAdd/></a> */}
</div>
 
    </div>
  </div>
  
  
   </div>
   )
}

export default BestSalesProduct