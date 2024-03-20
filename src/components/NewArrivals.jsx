import { Card, Space } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/Products'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cratContext } from '../App';
import { GoPlusCircle } from 'react-icons/go';

export default function NewArrivals() {
    const{cart,setCart}=useContext(cratContext)
 
    const [items, setItem] = useState(products);
    const getData = () => {
        let productData = items;
        let filterData = productData.filter((values) => (
            values.category === 'mobile' || values.category === 'wireless'
        ));
        setItem(filterData);
    }
    useEffect(() => {
        getData();
    }, [])

    const notify = () => toast("Product should be added!");

    const [total, setTotal] = useState(0);
 
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
   



    return (
        <div >
            <h3 style={{ textAlign: 'center', lineHeight: 5 }}>New Arrival Data</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', justifyContent: 'center', gap: 30, }}>
                {items.map((values) => (
                    <Link to={`/product/${values.id}`}>

                        <Space direction="vertical" size={16} key={values.id}>
                            <Card
                                style={{
                                    width: 320,
                                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                                }}
                            >
                                <div><img src={values.imgUrl} alt="" style={{ width: 250, height: 250 }} /></div>
                                <div><b>{values.productName}</b></div>
                                <div>{Array.from({ length: values.reviews[0].rating }, (_, i) => (
                                    <span key={i} className='text-warning'>&#9733;</span>
                                ))}</div>
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <h6><b>${values.price}</b></h6>
                                    {/* <a href="cart" style={{ textDecoration: 'none', color: 'inherit' }}><span style={{ fontSize: 26 }}>+</span>
                                    </a> */}
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