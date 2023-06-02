import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../cart_item/CartItem';

function Cart() {

    const {cartItems} = useCart();


    return ( 
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '4rem', paddingBottom:'2rem'}}>
            <h1 style={{textAlign: 'center'}}>YOUR ITEMS</h1>
        {cartItems.map((i) => (
            <CartItem product={i.product}/>
        ))}
        </div>
     );
}

export default Cart;