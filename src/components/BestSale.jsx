import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/Products'
import { Card,Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { GoPlusCircle } from "react-icons/go";
import { cratContext } from '../App';
import { toast } from 'react-toastify';
export default function BestSale() {
  const[items,setItems]=useState(products);
  const{cart,setCart}=useContext(cratContext)
  // const [cart, setCart] = useState([]);
   const [total, setTotal] = useState(0);
   const notify = () => toast("Product should be added!");

  const getData =() => {
    let productItems= items;
    let filterData = productItems.filter((values) =>(values.category==='sofa'));
    setItems(filterData);
  }
  useEffect(() =>{
      getData();
  },[])



  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
    notify();
  };
  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  }

  
  // const { id } = useParams();
  // const product = products.find(product => product.id === id);
  // if (!product) {
  //   return <div>Product not found</div>
  // }

  return (
    <div style={{backgroundColor:'#e2e8f0',}}>
        <h3 style={{textAlign:'center',lineHeight:5}}>Best Sales</h3>
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',justifyContent:'center',gap:30}}>
               {items.map((values)=>(
                 <Link to={`/product/${values.id}`}>
                      <Space direction="vertical" size={16} key={values.id}>
                   <Card
                       style={{
                           width: 320,
                       }}
                   >
                    <div><img src={values.imgUrl} alt="bestSales" style={{width:250,height:250}}/></div>
                    <div><b>{values.productName}</b></div>
                    <div>{Array.from({ length: values.reviews[0].rating }, (_, i) => (
                                <span key={i}className='text-warning'>&#9733;</span>
                            ))}</div>
                   <div style={{display:'flex',justifyContent:"space-between"}}>
                                <h6><b>${values.price}</b></h6> 
                             <button style={{fontSize:"30px",background:"none",border:"none"}} onClick={()=>addToCart(values)}><GoPlusCircle/>
                             </button>
                            </div>
                    </Card>
                    </Space>
                 </Link>
               ))}
        </div>
    </div>
  )
}