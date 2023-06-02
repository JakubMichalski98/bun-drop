import React from 'react';
import { useCart } from '../../context/CartContext';

function Cart() {

    const {cartItems} = useCart();


    return ( 
        <>
        {cartItems.map((i) => (
            <div>
                <h1>{i.name}</h1>
            </div>

        ))}
        </>
     );
}

export default Cart;