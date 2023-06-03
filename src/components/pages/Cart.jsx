import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../cart_item/CartItem';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function Cart() {

    const {cartItems, removeFromCart, changeItemQuantity, calculateTotalPrice} = useCart();

    const total = calculateTotalPrice();

    return ( 

        <div>
            {cartItems.length > 0 ? (
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', paddingBottom:'2rem', gap: '2rem'}}>
                    <h1 style={{textAlign: 'center'}}>YOUR ITEMS</h1>
                    {cartItems.map((item) => (
                        
                        <CartItem key={item.product.id} item={item} handleChange={ (quantity) => changeItemQuantity(item, quantity)} handleRemoveClick={() => removeFromCart(item)}/>

                    ))}
                </div>
            ) : (<div><h1 style={{textAlign: 'center', marginTop: '8rem', color:''}}>Looks empty here...</h1></div>)}

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    <div style={{marginRight: '8rem'}}>
                        <h3 style={{marginBottom: '1rem'}}>Total: {total}€</h3>
                        <div style={{marginBottom: '3rem'}}>
                            <Link to='/payment'>
                                <Button text={'CHECKOUT'}/>
                            </Link>
                        </div>
                    </div>
            </div>
             
        </div>

       

     );
}

export default Cart;