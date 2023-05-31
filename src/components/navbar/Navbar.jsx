import React from 'react';
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileNavClass, setMobileNavClass] = useState('');

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    },[mobileMenuOpen])

    function toggleMobileMenu()
    {
        setMobileMenuOpen(!mobileMenuOpen);
        
        if (!mobileMenuOpen)
        {
            setMobileNavClass(`${Styles.navmobile}`);
        }
        else
        {
            setMobileNavClass('');
        }
    }

    function handleCartClick() {
        if (mobileMenuOpen)
        {
            toggleMobileMenu();
        }
    }

    return ( 
        <nav className={Styles.navbar}>
            <Link to='/'>
                <img src='/src\images\logo-color.png'/>
            </Link>
                <ul className={`${Styles.navlinks} ${mobileNavClass}`}>
                    <li>
                        <NavLink onClick={toggleMobileMenu} to='/'>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileMenu} to='/menu'>
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileMenu} to='/signin'>
                            SIGN&nbsp;IN
                        </NavLink>
                    </li>
                </ul>

                <div className={Styles.iconcontainer}>
                    <div onClick={toggleMobileMenu} className={Styles.hamburger}>
                        {!mobileMenuOpen ? (<RxHamburgerMenu className={Styles.hamburgericon}/>) : (<RxCross2 className={Styles.hamburgericon}/>)}
                    </div>
                    <div className={Styles.cart}>
                        <NavLink onClick={handleCartClick} to='/cart'>
                            <AiOutlineShoppingCart className={Styles.carticon}/>
                        </NavLink>
                    </div>
                </div>

               
        </nav>
     );
}

export default Navbar;