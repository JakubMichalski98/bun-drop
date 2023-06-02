import React from 'react';
import { useCart } from '../../context/CartContext';

function Cart() {

    const {cartItems} = useCart();


    return ( 
        <>
        {cartItems.map((i) => (
            <div key = {i.item.id}>
                <h1>{i.item.name}</h1>
                <p>x{i.quantity}</p>
            </div>

        ))}
        </>
     );
}

export default Cart;