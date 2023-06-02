import React from 'react';
import Styles from './ProductModal.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import Button from '../button/Button'
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';

function ProductModal({product, handleXClick, handleAddClick}) {

    const [quantity, setQuantity] = useState(1);

    const {addToCart} = useCart();

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }
    
    return ( 
        <div className={Styles.modalbackground}>
            <div className={Styles.modalcontainer}>
                <div className={Styles.closeicon} onClick={handleXClick}>
                    X
                </div>
                    <img src={product.image}/>
                    <h1>{product.name}</h1>
                    <div className={Styles.quantityselectorcontainer}>
                        <QuantitySelector onChange={handleQuantityChange}/>
                    </div>
                    <div className={Styles.pricecontainer}>
                        <h2>{(product.price * quantity).toFixed(2)}€</h2>
                    </div>
                    <div onClick={() => addToCart(product, quantity)}>
                        <Button text={'Add to Cart'}/>
                    </div>
                </div>
        </div>
     );
}

export default ProductModal;