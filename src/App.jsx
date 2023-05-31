import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';

function App() {

  return (
    <div className='wrapper'>
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

      </Routes>

    </Router>
    
    </div>
  )
}

export default App
