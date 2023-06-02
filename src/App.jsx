import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';
import { CartContext } from './context/CartContext';

function App() {

  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(product)
  {
    cartItems.push(product);
    console.log(cartItems);
  }

  return (
    <div className='wrapper'>

      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Router>
          <Navbar/>
          <Routes>

            <Route
            exact
            path='/'
            element={<Home/>}
            />

            <Route
            path='/menu'
            element={<Menu onAddClick={addItemToCart}/>}
            />

            <Route
            path='/signin'
            element={<SignIn/>}
            />

            <Route
            path='/register'
            element={<Register/>}
            />

            <Route
            path='/cart'
            element={<Cart/>}
            />

          </Routes>

        </Router>
      </CartContext.Provider>
    </div>
  )
}

export default App
