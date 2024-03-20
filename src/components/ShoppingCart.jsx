import React from 'react'

const ShoppingCart = ({ cart, total, addToCart, removeFromCart }) => {
    const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  };
  //using findindex remove the values of add to cart
  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  }

  return (
    <div>
    <h1>Your Shopping Cart</h1>
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
    <p>Total: ${total.toFixed(2)}</p>
  </div>
);
};


export default ShoppingCart