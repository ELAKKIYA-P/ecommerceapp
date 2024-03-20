import React, { useEffect, useState ,useContext} from 'react'
import NavBar from './NavBar'
import { products } from '../assets/Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { cratContext } from '../App'


const ViewCart = ({item}) => {
const{cart}=useContext(cratContext)

    const[total,setTotal]=useState(0);
    useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0));
    },[cart]);
  return (
    <>
    <NavBar></NavBar>
    
    <div className='cart-container'>
        <div className="row">
    <div className='col-lg-8'>
    {cart.map((product)=>
    <div
    key={product.id}
     className=' d-flex m-5 p-5' style={{width:"1050px",height:"30vh",background:"white",color:"white",boxShadow:" 1px 1px 1px 1px black"}}>
    
    <div className="cart-img">
                  <img
                    src={product.imageUrl} // Set the image URL dynamically
                    alt={product.name} // Use a meaningful alt text
                    style={{ width: '100px', height: '100px' }} // Set a fixed size or adjust accordingly
                  />

    </div>
    <div className="cart-product-details">
        <div className='row d-flex'>
            <div className='productname'><h3>pr</h3></div>
            <div style={{fontSize:"30px", color:"black",justifyContent:"end"}}><FontAwesomeIcon icon={faTrashAlt}/></div>
        </div>
        
    </div>

    </div>
  )}   
    </div>
    <div className='col-lg-4 p-5'>
        <div className="cart" style={{display:"flex",width:"500px",height:"30vh",boxShadow:" 1px 1px 1px 1px black"}}>
            <h1 style={{color:"black", alignItems:"center"}}>Cart Summary</h1>
            <div className='row' >
            <h3 style={{display:"flex",alignItems:"center"}}>Total price: ${total}</h3>
         </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ViewCart