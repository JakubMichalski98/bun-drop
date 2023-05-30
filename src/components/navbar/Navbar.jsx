import React from 'react';
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Navbar() {
    return ( 
        <nav className={Styles.navbar}>
            <Link to='/'>
                <img src='/src\images\logo-color.png'/>
            </Link>
                <ul className={Styles.navmenu}>
                    <li>
                        <NavLink to='/'>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin'>
                            SIGN IN
                        </NavLink>
                    </li>
                </ul>
                <div className={Styles.cart}>
                    <AiOutlineShoppingCart className={Styles.carticon}/>
                </div>
        </nav>
     );
}

export default Navbar;