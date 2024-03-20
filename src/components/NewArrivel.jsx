import React from 'react'
import { MdOutlineAdd } from "react-icons/md";
import '../css/NewArrivelProductStyles.css';
import {CiHeart} from 'react-icons/ci';

import StarRating from './StarRating';


const NewArrivel = ({item}) => {

    return (
      <div className='col-lg-4 d-flex align-items-center justify-content-center'>
        <div className="card my-4" style={{width:'18rem'}}>
      <div class="d-flex align-items-end flex-column bd-highlight mb-2">
        
      <div class="p-2 bd-highlight"><CiHeart/></div>
      </div>
    
    
        <img src={item.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.productName}</h5>
          <StarRating></StarRating>
          <div className='card-item d-flex justify-content-between'>
      
          <p className="d-flex justify-content-start" style={{fontWeight:'700', fontSize:'larger'}}>${item.price}</p>
         <a href="/cart" className="d-flex justify-content-end" style={{color:'black',fontSize:"30px",cursor:"pointer"}}><MdOutlineAdd /></a>
    </div>
    
        </div>
      </div>
      </div>
       
      )
}
export default NewArrivel
