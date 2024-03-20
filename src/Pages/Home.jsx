import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from '../assets/Images/hero-img.png';
import Service from '../components/Service'
import BigDiscount from '../components/BigDiscount'
import NewArrivalProduct from '../components/NewArrivalProduct'
 
// import Slider from '../components/Slider';
import  { useState } from 'react'
import { SliderData } from '../assets/Products'
import { Carousel } from "react-bootstrap";

import { products } from '../assets/Products';
import BestSale from '../components/BestSale';
import Discount from '../components/Discount';
import NewArrivals from '../components/NewArrivals';



const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(products)
  return (
    <div>
        {/* <div className='row  p-2 d-flex align-items-center' style={{backgroundColor:"azure"}}>
        <div className='col-md-7 p-5 '>
        <h1>50% OFF For Your First Shopping </h1>
        <p> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        </p>
        <Link to='/shop'>View Collection</Link>
       </div>
       <div className='col-md-5 p-5'>
       <img style={{width:"100%",height:"100%"}} src={IntroImg} alt='introimage'/>
      </div>
  
        </div> */}

<Carousel  className= "mt-5" activeIndex={index} onSelect={handleSelect} style={{ backgroundColor: "rgba(242, 247, 252, 0.842)", height: "30rem" }}>
      {SliderData.map((slide, index) => (
        <Carousel.Item key={index}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, width: "100%" }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "0 5rem" }}>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <img src={slide.cover} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
        <div className='row p-5 m-4'><Service></Service></div>
        <div className='row'><Discount></Discount></div>
        <div className='row p-4'><NewArrivals></NewArrivals></div>
        <div className='row p-4'><BestSale></BestSale></div>


    </div>
  )
}

export default Home