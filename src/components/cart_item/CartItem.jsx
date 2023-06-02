import React from 'react';
import Styles from './CartItem.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import {BsTrash} from 'react-icons/bs'

function CartItem(item) {
    return ( 
        <div className={Styles.cartitem}>
            <div className={Styles.leftside}>
                <img src={item.product.image}/>
                <h2>{item.product.name}</h2>
            </div>
            <div className={Styles.rightside}>
                <div className={Styles.quantityselector}>
                    <QuantitySelector/>
                </div>
                
                <h3 className={Styles.price}>{item.product.price}€</h3>
                <div className={Styles.trashiconcontainer}>
                    <BsTrash className={Styles.trashicon}/>
                </div>
                </div>
        </div>
     );
}

export default CartItem;