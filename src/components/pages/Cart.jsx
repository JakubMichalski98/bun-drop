import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {

    const [cartItems, setCartItems] = useContext(CartContext);

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