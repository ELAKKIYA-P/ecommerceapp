import React from 'react'
import { BsBagFill } from 'react-icons/bs';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footers() {
  return (
    <>
    <div className='footer' style={{backgroundColor:"rgb(5, 69, 122)",color:"white",fontFamily: "sans-serif"
}}>
        <div className='row m-4 p-4 d-flex alingn-items-center'>
    <div className='col-md-4 p-2'style={{width:"30%"}}>
    <div className='d-flex align-items-center'><h3><span><FontAwesomeIcon icon={faBagShopping} /></span> Mart</h3>
           </div>
    <p>Lorem ipsum dolor sit ament,consectetur <br /> 
            adipiscing elit. Auctor libero id et,in <br />
            gravids.Sit diam duis mauris nulla <br />
            cursus.Erat et lectus vel ut sollicitudin <br /> elit at amet</p>
        
 </div>
 <div className='col-md-8 '>
         <div className='row d-flex'>
         <div className='col-4 p-4 '>
            <h3>About Us</h3>
            
             <p>Careers</p>
             <p>Our Strories</p>
              <p>Terms & Conditions</p>
              <p>Policy</p>
              
         </div>
         <div className='col-4 p-4 '>
            <h3>Customer Care</h3>
            
             <p>Help center</p>
             <p> How to buy</p>
             <p>Track your Order</p>
             <p> Corprated& purchasing</p>
             <p>Returns & Refunds</p>
             
         </div>
         <div className='col-4 p-4'>
            <h3>Contact Us</h3>
            
             <p>70,washington squre,</p>
             <p> South, New York</p>
             <p>United States</p>
             <p>Email: example@gmail.com</p>
             <p>Phone: +112 345 2345689</p>
             
         </div>
        
</div>
    </div>
    </div>
    </div>
     </>
  )
}

export default Footers