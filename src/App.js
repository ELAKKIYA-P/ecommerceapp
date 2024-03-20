import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Shop from './routes/Shop';
import { createContext, useState } from 'react';
import Home from './Pages/Home';
import ProductDetail from './components/Productdetail';
import ViewCart from './components/ViewCart';
import Cart from './Pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cratContext= createContext();
function App() {
 const[cart,setCart]=useState([]);
 const notify = () => toast("Product should be added!");

  return (
    <cratContext.Provider value={{cart,setCart}}>
      <ToastContainer/>
      <Routes>
    <Route path='/' element={<Main/>}>
     <Route path='/'element={<Home></Home>}></Route>
     </Route>
     <Route path="/product/:id" element ={ <>
                      <ProductDetail />
              </>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
 
    </cratContext.Provider>
       
     );
}

export default App;
