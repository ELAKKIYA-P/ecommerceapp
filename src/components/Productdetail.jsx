import React from 'react';
import "../css/ProductsStyles.css"
import { products } from '../assets/Products';
import { useParams } from 'react-router-dom';
import { Card, Space } from 'antd';
import { useContext } from 'react';import { cratContext } from '../App';
import { useState } from 'react';
import Toastify from './Toastify';
import { toast } from 'react-toastify';

const tableImg = require('../assets/Images/table.jpg');
export default function ProductDetail() {
  const{cart,setCart}=useContext(cratContext)
 // const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const notify = () => toast("Product should be added!");

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
    notify();
  };
  //using findindex remove the values of add to cart
  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  }

  
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  if (!product) {
    return <div>Product not found</div>
  }


  return (
    <>
       <div className='image-container'>
        <img src={tableImg} alt="table" id='tableImg' />
        <div className='background-text'><b>{product.productName}</b></div>
      </div>

      <div style={{ height: '500px', display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center', alignItems: 'center', gap: 50 }}>
        <div>
          <img src={product.imgUrl} alt="DetailImage" style={{ width: '500px', height: "480px" }} />
        </div>
        <div style={{ lineHeight: 2 }}>
          <h3>{product.productName}</h3>
          <div >{Array.from({ length: product.reviews[0].rating }, (_, i) => (
            <span key={i} className='text-warning'>&#9733;</span> 
          ))}<span className='p-3'>{product.reviews[0].rating}ratings</span></div>
          <div style={{display:"flex",gap:"30px"}}><b>${product.price}</b> <span>Category:{product.category}</span></div>
          <div style={{ fontSize: '13px', padding:"10px" }}>{product.shortDesc}</div>
          <div><input type='number' placeholder='1' name='items' style={{fontSize:"15px"}}/></div>
          <button style={{ backgroundColor: '#1e3a8a', border: 'none', color: 'white', fontSize: '14px', width: '100px', height: '30px' }} 
          
          onClick={()=>addToCart(product)} >Add to Cart</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: 'column', height: '250px', justifyContent: 'center', alignContent: 'space-evenly' }}>
        <h6>Description <span style={{ fontSize: '12px' }}>Reviews({product.reviews.length})</span></h6>
        <p style={{ fontSize: '14px' }}>{product.description}</p>
      </div>

      <div>
        <h3>You Might also like</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'center', gap: 30 }}>
          {products.filter(items => items.category === product.category)
            .map((items) => (

              <Space direction="vertical" size={16} key={items.id}>
                <Card
                  style={{
                    width: 320,
                  }}
                >
                  {/* <div style={{ backgroundColor: '#1e3a8a', width: 50, color: 'white', borderRadius: 25, textAlign: 'center' }}>{items.discount}%</div> */}
                  <div><img src={items.imgUrl} alt="" style={{ width: 250, height: 250, textAlign: 'center' }} /></div>
                  <div><b>{items.productName}</b></div>
                  <div>
                    {Array.from({ length: items.reviews[0].rating }, (_, i) => (
                      <span key={i} className='text-warning'>&#9733;</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h6><b>${items.price}</b></h6>
                    {/* <a href="cart" style={{ textDecoration: 'none', color: 'inherit' }}><span style={{ fontSize: 26 }}>+</span>
                    </a> */}
                    <button style={{border:'none',backgroundColor:'transparent'}}onClick={()=>addToCart(items)}><span style={{ fontSize: 26 }}>+</span></button>
              
                  </div>
                </Card>
              </Space>

            ))}
        </div>
      </div>
    </>
  )
}