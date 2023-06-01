import React from 'react';
import Styles from './ProductModal.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import Button from '../button/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductModal({product, handleXClick}) {

    const [quantity, setQuantity] = useState(1);

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
                    <Button text={'Add to Cart'}/>
                </div>
        </div>
     );
}

export default ProductModal;