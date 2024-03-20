import React, { useState } from 'react'
import { MdOutlineAdd } from "react-icons/md";

import {CiHeart} from 'react-icons/ci';
import StarRating from './StarRating';
import Toastify from './Toastify';

function DiscountProduct({item}) {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <div className='col-md-4 d-flex align-items-center justify-content-center'>
    <div className="card my-4" style={{ width: '18rem' }}>
      {/* <div className="d-flex align-items-end flex-column bd-highlight mb-2">
      <div
      className={`p-2 bd-highlight primary ${isHovered ? 'show-on-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CiHeart className={`hide-on-hover ${isHovered ? 'show-on-hover' : ''}`} />
    </div>
  </div> */}
  <div className="d-flex justify-content-between mb-2">
   
<div style={{ backgroundColor: '#1e3a8a', width:"25%", color: 'white', borderRadius:"30px", textAlign: 'center',padding:"10px", margin:"5px" }}>{item.discount}%off</div>
<div className="p-2 bd-highlight"><CiHeart/></div>
  
       </div>                        
      <img src={item.imgUrl} className="card-img-top" style={{ height: "30vh" }} alt="..." />
      <div className="card-body ">
        <h5 className="card-title">{item.productName}</h5>
        <StarRating></StarRating>
        <div className='card-item d-flex justify-content-between'>
          <p className="d-flex justify-content-start" style={{ fontWeight: '700', fontSize: 'larger' }}>${item.price}</p>
          <a href="/cart" className="d-flex justify-content-end" style={{ color: 'black', fontSize: "30px", cursor: "pointer" }} onClick={<Toastify></Toastify>}><MdOutlineAdd /></a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default DiscountProduct