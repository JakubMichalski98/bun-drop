import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Menu from './components/pages/menu/Menu';
import SignIn from './components/pages/sign_in/SignIn';
import Register from './components/pages/register/Register';
import Cart from './components/pages/cart/Cart';
import Payment from './components/pages/payment/Payment'
import NotFound from './components/pages/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Confirmation from './components/pages/confirmation/Confirmation';

function App() {

  return (
    <div className='wrapper'>

          <CartProvider>
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
                element={<Menu/>}
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

                <Route
                path='/confirmation'
                element={<Confirmation/>}
                />

                <Route
                path='*'
                element={<NotFound/>}

                />
                
              </Routes>
              </UserProvider>
            </Router>
          </CartProvider>
      
    </div>
  )
}

export default App
