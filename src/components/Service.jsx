import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ServiceStyles.css'
// import { car,card,shieldHalfOutline,headset} from 'ionicons/icons';
<script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>




const Service = () => {
     const serviceData = [
        {
          icon: <ion-icon name="car"></ion-icon>,
          title: "Free Shipping",
          subtitle: "Lorem ipsum dolor sit amet.",
          bg: "#fdefe6",
        },
        {
          icon: <ion-icon name="card"></ion-icon>,
          title: "Safe Payment",
          subtitle: "Lorem ipsum dolor sit amet.",
          bg: "#ceebe9",
        },
        {
          icon: <ion-icon name="shield-half-outline"></ion-icon>,
          title: "Secure Payment",
          subtitle: "Lorem ipsum dolor sit amet.",
          bg: "#e2f2b2",
        },
        {
           icon: <ion-icon name="headset"></ion-icon>,
           title: " Back Guarantee",
          subtitle: "Lorem ipsum dolor sit amet.",
          bg: "#d6e5fb",
        },
      ];
      
  return (
    <div className="service d-flex p-2">
            
            {serviceData.map((item, index) => (
              <div key={index} style={{ background: item.bg ,height:'200px', width:'400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                

            <div className='row1' style={{textAlign:"center"}}>  
               <div className='ion-icon ' style={{marginLeft:"70px",marginTop:"40px",background:'white',fontSize:"40px",borderRadius:'20px',width:'50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >{item.icon}</div>
              
                 <div className='d-flex p-3'><h3>{item.title}</h3></div>
               <div> <p>{item.subtitle}</p></div>
                </div>
              </div>
            ))}
      


        </div>
 

        
 
  )
}
    
  

export default Service