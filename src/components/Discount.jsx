import { Card, Space } from 'antd'
import { discoutProducts } from '../assets/Products'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { cratContext } from '../App';
import { GoPlusCircle } from 'react-icons/go';

export default function Discount() {
    const{cart,setCart}=useContext(cratContext)
 

    const [total, setTotal] = useState(0);
 const notify = () => toast("Product should be added!");


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
        <div style={{ backgroundColor: '#e2e8f0'}}>
            <h3 style={{ textAlign: 'center', lineHeight: 5 }}>Big Discount</h3>
            <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 30}}>
                {discoutProducts.map((items) => (
                    <Link to={`/product/${items.id}`}>
                        <Space direction="horizontal" size={16} key={items.id}>
                            <Card
                                style={{
                                    width: 320,
                                }}
                            >
                                <div style={{ backgroundColor: '#1e3a8a', width: 50, color: 'white', borderRadius: 25, textAlign: 'center' }}>{items.discount}%</div>
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
                                    <button style={{fontSize:"30px",background:"none",border:"none"}} onClick={()=>addToCart(items)}><GoPlusCircle/>
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