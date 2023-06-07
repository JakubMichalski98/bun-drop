import React from 'react';
import Styles from './CartItem.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import {BsTrash} from 'react-icons/bs'

function CartItem({item, handleChange, handleRemoveClick}) {

    return ( 
        <div className={Styles.cartitem}>
            <div className={Styles.leftside}>
                <img src={item.product.image}/>
                <h2>{item.product.name}</h2>
            </div>
            <div className={Styles.rightside}>
                <div className={Styles.quantityselector}>
                    <QuantitySelector currentQuantity={item.quantity} onChange={(quantity) => handleChange(quantity)}/>
                </div>
                
                <h3 className={Styles.price}>{item.product.price * item.quantity}€</h3>
                <div className={Styles.trashiconcontainer}>
                    <BsTrash onClick={handleRemoveClick} className={Styles.trashicon}/>
                </div>
                </div>
        </div>
     );
}

export default CartItem;