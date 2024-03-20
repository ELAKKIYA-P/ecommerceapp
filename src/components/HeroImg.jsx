import React from 'react'
import '../css/HeroImgStyles.css'
import IntroImg from '../assets/Images/hero-img.png'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='mask'>
     <div className='intro-text'>
        <h1>50% OFF For Your First Shopping </h1>
        <p> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        </p>
        <Link to='/shop'>View Collection</Link>
       </div>
       <div>
       <img className='intro-img' src={IntroImg} alt='introimage'/>
      </div>
  
      </div>

    
  
  )
}

export default HeroImg;