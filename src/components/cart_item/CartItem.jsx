import React from 'react';
import Styles from './CartItem.module.css'

function CartItem(item) {
    return ( 
        <div className={Styles.cartitem}>
            <div className={Styles.leftside}>
                <img src={item.product.image}/>
                <h2>{item.product.name}</h2>
            </div>
        </div>
     );
}

export default CartItem;