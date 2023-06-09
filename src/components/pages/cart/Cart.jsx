import React from 'react';
import { useCart } from '../../../context/CartContext';
import { useUser } from '../../../context/UserContext';
import CartItem from '../../cart_item/CartItem';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';
import Styles from './Cart.module.css'

function Cart() {

    const {cartItems, removeFromCart, changeItemQuantity, calculateTotalPrice} = useCart();
    const {isSignedIn} = useUser();

    const total = calculateTotalPrice();

    const cartContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width:'52rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        paddingBottom:'2rem',
        gap: '2rem',
        '@media (max-width: 992px)': {
            width: '46rem'
        }
    }

    return ( 

        <div style={{display: 'flex', justifyContent: 'center'}}>
            {cartItems.length > 0 ? (
                <div className={Styles.cartcontainer}>
                    <h1 style={{textAlign: 'center'}}>YOUR ITEMS</h1>
                    {cartItems.map((item) => (
                        
                        <CartItem key={item.product.id} item={item} handleChange={ (quantity) => changeItemQuantity(item, quantity)} handleRemoveClick={() => removeFromCart(item)}/>

                    ))}

                    <div className={Styles.payment}>
                        <h3 style={{marginBottom: '1rem'}}>Total: {total}€</h3>
                        <Link to={isSignedIn ? '/payment' : '/signin'}>
                            <Button fontSize= '1.4rem' text={'CHECKOUT'}/>
                        </Link>
                    </div>
           

                </div>
            ) : (<div><h1 style={{textAlign: 'center', marginTop: '8rem', color:''}}>Looks empty here...</h1></div>)}

        </div>

     );
}

export default Cart;