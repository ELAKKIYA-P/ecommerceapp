import Card from 'antd/es/card/Card';
import { products } from '../assets/Products';
import { cratContext } from '../App';
import { useContext ,useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import NavBar from '../components/NavBar';
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { toast } from 'react-toastify';
    

export default function Cart() {
    const data2 = localStorage.getItem('k');
     const data1 = JSON.parse(data2)||[]
     const s = data1.map((v) => v.id)
    //  const FilterData = products.filter((values) => s.includes(values.id));
    //  console.log(FilterData);
    
     const{cart,setCart}=useContext(cratContext)
     const notify = () => toast("Product should be added!");

     console.log('led',cart)
    // // const [cart, setCart] = useState([]);
    let addToCart = (item) => {
        setCart([...cart, item])
        setTotal(total + item.price)
        notify();
      };
    
     const [total, setTotal] = useState(0);
   console.log("total",total)
   console.log("cart",cart.price)
   useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

       let removeFromCart = (item) => {
        let index = cart.findIndex((obj) => obj.id === item.id);
        cart.splice(index, 1);
        setCart([...cart]);
      }
   
   


    return (
        <>
        <NavBar cart={cart}></NavBar>
        <div style={{backgroundColor:'#f8fafc'}}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center', alignItems: 'baseline', gap: 40, marginTop: 80 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {cart.map((value) => (
                        <Card key={value.id}
                            style={{
                                width: 850,
                                height: 190,
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex' ,justifyContent:'center',alignItems:'center',gap:40}}>
                                    <div><img src={value.imgUrl} alt="" style={{ width: 150, height: 150 }} /></div>
                                    <div style={{lineHeight:3}}>
                                        <h6>{value.productName}</h6>
                                        <div>${value.price}</div>
                                    </div>
                                </div>
                                <div>
                                <div style={{fontSize:"30px", color:"black",justifyContent:"end"}}><RxCross2 onClick={()=>removeFromCart(value)}/>
                                </div>
                                    
                                <div   style={{display:"flex",justifyContent:"space-between", fontSize:"25px",margin:"40px 0"}}>
                                 <span className='border border-1'><button style={{background:"none",border:"none"}} onClick={()=>addToCart(value) }><LuPlus /></button>
                            </span> 
                            <span className='border border-1 '> <button style={{background:"none",border:"none"}} onClick={()=>removeFromCart(value)}><FaMinus /></button></span>
                              
                            
                            </div>

                            </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div>
                    <Card
                        title={<h1>Cart Summary</h1>}
                        bordered={false}
                        style={{
                            width: 450,
                            height: 250
                        }}
                    >
                        <h3>Total Price:${total}</h3>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}