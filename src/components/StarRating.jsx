
import React from 'react'
import { FaStar } from 'react-icons/fa' 
import { useState } from 'react';

function StarRating() {
    const [rating, setRating] = useState(0);
    return (
      <div className="star-i">
        {[...Array(5)].map(star => {
          
          return (
           
     
    <FaStar size={30} color='yellow' ></FaStar>
   )})
          }

    </div>
  )
}

export default StarRating