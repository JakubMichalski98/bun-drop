import React from 'react';
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import { useUser } from '../../context/UserContext';
import { useCart } from '../../context/CartContext';

function Navbar() {

    const { signOutUser, isSignedIn } = useUser();
    const {cartItemAmount} = useCart();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileNavClass, setMobileNavClass] = useState('');

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    },[mobileMenuOpen])


    function toggleMobileMenu()
    {
        setMobileMenuOpen(!mobileMenuOpen);
    
    }

    function handleClick() {
        if (mobileMenuOpen)
        {
            toggleMobileMenu();

        }
    }

    function handleSignInClick() {
        handleClick();
    }

    function handleSignOutClick() {
        handleClick();
        signOutUser();
    }


    return ( 
        <div>
            <nav className={Styles.navbar}>
                <Link onClick={handleClick} to='/'>
                    <img src='/src\images\logo-color.png'/>
                </Link>
                {!mobileMenuOpen &&  
                <ul className={`${Styles.navlinks}`}>
                    <li>
                        <NavLink onClick={handleClick} to='/'>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to='/menu'>
                            MENU
                        </NavLink>
                    </li>
                    <li>
                    {isSignedIn}
                    {!isSignedIn && <NavLink onClick={handleSignInClick} to='/signin'>
                        SIGN&nbsp;IN
                        </NavLink>}
                    {isSignedIn && <div onClick={handleSignOutClick}>SIGN&nbsp;OUT</div> }
                    </li>
                </ul>}

                <div className={Styles.iconcontainer}>
                    <div onClick={toggleMobileMenu} className={Styles.hamburger}>
                        {!mobileMenuOpen ? (<RxHamburgerMenu className={Styles.hamburgericon}/>) : (<RxCross2 className={Styles.hamburgericon}/>)}
                    </div>
                    <div className={Styles.cart}>
                        <NavLink onClick={handleClick} to='/cart'>
                            <AiOutlineShoppingCart className={Styles.carticon}/>
                            {cartItemAmount > 0 && <div className={Styles.cartitemcount}>{cartItemAmount}</div>}

                        </NavLink>
                    </div>
                </div> 
            </nav>
            {mobileMenuOpen && 
            
            <div>
                <ul className={Styles.mobilenav}>
                <li>
                    <NavLink onClick={handleClick} to='/'>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to='/menu'>
                        MENU
                    </NavLink>
                </li>
                <li>
                {isSignedIn}
                {!isSignedIn && <NavLink onClick={handleSignInClick} to='/signin'>
                    SIGN&nbsp;IN
                    </NavLink>}
                {isSignedIn && <div onClick={handleSignOutClick}>SIGN&nbsp;OUT</div> }
                    </li>
                </ul>
            </div>}
        </div>

    
     );
}

export default Navbar;