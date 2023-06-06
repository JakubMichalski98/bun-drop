import React from 'react';
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import { useUser } from '../../context/UserContext';
import { useCart } from '../../context/CartContext';

function Navbar() {

    // TODO: Fix dynamic sign in / sign out

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
        
        if (!mobileMenuOpen)
        {
            setMobileNavClass(`${Styles.navmobile}`);
        }
        else
        {
            setMobileNavClass('');
        }
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
        signOutUser();
    }


    return ( 
        <nav className={Styles.navbar}>
            <Link onClick={handleClick} to='/'>
                <img src='/src\images\logo-color.png'/>
            </Link>
                <ul className={`${Styles.navlinks} ${mobileNavClass}`}>
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

                <div className={Styles.iconcontainer}>
                    <div onClick={toggleMobileMenu} className={Styles.hamburger}>
                        {!mobileMenuOpen ? (<RxHamburgerMenu className={Styles.hamburgericon}/>) : (<RxCross2 className={Styles.hamburgericon}/>)}
                    </div>
                    <div className={Styles.cart}>
                        <NavLink onClick={handleClick} to='/cart'>
                            <AiOutlineShoppingCart className={Styles.carticon}/>
                            <div className={Styles.cartitemcount}>{cartItemAmount}</div>
                        </NavLink>
                    </div>
                </div>

               
        </nav>
     );
}

export default Navbar;