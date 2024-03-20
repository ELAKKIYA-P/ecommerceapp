import React, { useContext } from 'react'
import StarRating from './StarRating'
import { CiHeart } from 'react-icons/ci'
import { MdOutlineAdd } from 'react-icons/md'

const ProductDetails = ({item}) => {

  return (
    
    <div className='col-lg-4'>
    <div className="card" style={{width:'18rem'}}>
  <div className="d-flex align-items-end flex-column bd-highlight mb-2">
    
  <div className="p-2 bd-highlight"><CiHeart/></div>
  </div>


    <img src={item.imgUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.productName}</h5>
      <StarRating></StarRating>
      <p className="d-flex justify-content-start" style={{fontWeight:'700', fontSize:'larger'}}>${item.price}</p>
     <a href="/cart" className="d-flex justify-content-end" style={{color:'black',fontSize:"30px",cursor:"pointer"}}><MdOutlineAdd /></a>

 
    </div>
  </div>
  </div>
 

    
   
   
   
   
   
   
   
   
   
   
   
   
    )
}

export default ProductDetails