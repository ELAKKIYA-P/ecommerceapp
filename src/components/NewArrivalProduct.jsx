import phone01 from "../assets/Images/phone-01.jpg";
import phone03 from "../assets/Images/phone-03.png";
import phone04 from "../assets/Images/phone-04.jpg";
import phone05 from "../assets/Images/phone-05.jpg";
import phone06 from "../assets/Images/phone-06.jpg";
import phone08 from "../assets/Images/phone-08.png";

import wireless01 from "../assets/Images/wireless-01.png";
import wireless02 from "../assets/Images/wireless-02.png";
import wireless03 from "../assets/Images/wireless-03.png";
import wireless04 from "../assets/Images/wireless-04.png";
import React from 'react';
import NewArrivel from "./NewArrivel";
 
 
 function NewArrivalProduct() {
    const newarrivel =[ 
        {
            id: "11",
            productName: "Apple iPhone 12 Max",
            imgUrl: phone08,
            category: "mobile",
            price: 799,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          },
        
           {
            id: "12",
            productName: "Realme 8",
            imgUrl: phone03,
            category: "mobile",
            price: 599,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          }, {
            id: "11",
            productName: "Apple iPhone 12 Max",
            imgUrl: phone01,
            category: "mobile",
            price: 799,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          },
        
        
        
          {
            id: "13",
            productName: "One Plus Nord",
            imgUrl: phone04,
            category: "mobile",
            price: 799,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          },
        
          {
            id: "14",
            productName: "Apple iPhone 13 Pro",
            imgUrl: phone05,
            category: "mobile",
            price: 899,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          },
        
          {
            id: "15",
            productName: "Samsung Galaxy S22",
            imgUrl: phone06,
            category: "mobile",
            price: 699,
            shortDesc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
              {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
            avgRating: 4.8,
          },
     {
        id: "20",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01,
        category: "wireless",
        price: 199,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
    
      {
        id: "21",
        productName: "Beat EP Headphones",
        imgUrl: wireless03,
        category: "wireless",
        price: 199,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "22",
        productName: "Black Headphones",
        imgUrl: wireless02,
        category: "wireless",
        price: 169,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      },
      {
        id: "23",
        productName: "Bluetooth Headphones",
        imgUrl: wireless04,
        category: "wireless",
        price: 139,
        shortDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
          {
            rating: 4.8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.8,
      }]           
   return (
    <div className="newarrival p-2">
    <div className="row2 p-4">
    <h1 className="p-5"><center> New Arrivel</center></h1>
        
      
        <div className='row'>
            {
            newarrivel.map((item)=>{
                    return <NewArrivel item={item} />
                })
            }

        </div>
        </div>
        </div>
        
 
   )
 }
 
 export default NewArrivalProduct


