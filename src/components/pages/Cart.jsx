import React from 'react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {

    const products = useContext(CartContext);

    return ( 
        <>
            {products.map((p) => (
                <div>{p.msg}</div>
            ))}
        </>
     );
}

export default Cart;