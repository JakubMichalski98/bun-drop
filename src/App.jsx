import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';
import Payment from './components/pages/Payment'
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { ValidationProvider } from './context/ValidationContext';

function App() {

  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <div className='wrapper'>

      <ValidationProvider>
          <CartProvider value={selectedProduct}>
            <Router>
            <UserProvider>
              <Navbar/>
              <Routes>

                <Route
                exact
                path='/'
                element={<Home/>}
                />

                <Route
                path='/menu'
                element={<Menu onAddClick={(product) => setSelectedProduct(product)}/>}
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

                <Route
                path='/payment'
                element={<Payment/>}
                />
                
              </Routes>
              </UserProvider>
            </Router>
          </CartProvider>
      </ValidationProvider>
      
    </div>
  )
}

export default App
