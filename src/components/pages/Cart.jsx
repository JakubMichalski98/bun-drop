import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../cart_item/CartItem';

function Cart() {

    const {cartItems} = useCart();


    return ( 

        <div>
            {cartItems.length > 0 ? (
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', paddingBottom:'2rem', gap: '2rem'}}>
                    <h1 style={{textAlign: 'center'}}>YOUR ITEMS</h1>
                    {cartItems.map((i) => (
                        <CartItem key={i.product.id} product={i.product}/>
                    ))}
            </div>
            ) : (<div><h1 style={{textAlign: 'center', marginTop: '8rem', color:''}}>Looks empty here...</h1></div>)}
             
        </div>

       

     );
}

export default Cart;