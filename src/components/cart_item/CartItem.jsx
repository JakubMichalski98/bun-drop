import React from 'react';
import Styles from './CartItem.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import {BsTrash} from 'react-icons/bs'

function CartItem({item, handleChange, handleRemoveClick}) {

    const itemTotal = (item.product.price * item.quantity).toFixed(1);

    return ( 
        <div className={Styles.cartitem}>
            <div className={Styles.leftside}>
                <img src={item.product.image}/>
                <div>
                    <h2>{item.product.name}</h2>
                    <h3 className={Styles.mobileprice}>{itemTotal}€</h3>
                </div>
            </div>
            <div className={Styles.rightside}>
                <div className={Styles.quantityselector}>
                    <QuantitySelector currentQuantity={item.quantity} onChange={(quantity) => handleChange(quantity)}/>
                </div>
                
                <h3 className={Styles.price}>{itemTotal}€</h3>
                </div>
                <div className={Styles.trashiconcontainer}>
                    <BsTrash onClick={handleRemoveClick} className={Styles.trashicon}/>
                </div>
        </div>
     );
}

export default CartItem;