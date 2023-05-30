import React from 'react';
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'

function Navbar() {

    const [isMenuClicked, setIsMenuClicked] = useState(true);

    function toggleMenuIcon()
    {
        setIsMenuClicked(!isMenuClicked);
    }

    return ( 
        <nav className={Styles.navbar}>
            <Link to='/'>
                <img src='/src\images\logo-color.png'/>
            </Link>
                <ul className={Styles.mobileicons}>
                    <li>
                        <div onClick={toggleMenuIcon}>
                            {!isMenuClicked ? (
                                <RxHamburgerMenu className={Styles.hamburgermenu}/>
                            ) : 
                            (
                                <RxCross2 className={Styles.hamburgermenu}/> 
                            )}
                        </div>
                    </li>
                    <li>
                        <div>
                            <NavLink to='/cart'>
                                <AiOutlineShoppingCart className={Styles.carticon}/>
                            </NavLink>
                        </div>
                    </li>
                </ul>
                <ul className={isMenuClicked? Styles.mobilemenu : Styles.navmenu}>
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
                            SIGN&nbsp;IN
                        </NavLink>
                    </li>
                </ul>

                <div className={Styles.cart}>
                            <NavLink className={Styles.cartcontainer} to='/cart'>
                                <AiOutlineShoppingCart className={Styles.carticon}/>
                            </NavLink>
                        </div>
        </nav>
     );
}

export default Navbar;