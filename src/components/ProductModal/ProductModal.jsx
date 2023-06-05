import React from 'react';
import Styles from './ProductModal.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import Button from '../button/Button'
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

function ProductModal({product, handleXClick, handleAddClick}) {

    //TODO Check if object is in users favorites, if it is the button enabled and when clicked removes
    // from user favorites

    const [quantity, setQuantity] = useState(1);
    const [productFavorited, setProductFavorited] = useState(false);

    const {saveUserFavorite, userId} = useUser();

    useEffect(() => {
    }, [])


    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    function handleFavoriteClick() {
        saveUserFavorite(product);
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
                    <div className={Styles.btn}>
                        <Button onClick={() => handleAddClick(product, quantity)} text={'Add to Cart'}/>
                        {productFavorited ? (
                             <h4 onClick={handleFavoriteClick} style={{textAlign: 'center'}}>FAVORITE</h4>
                        ) : (
                            <h4 style={{textAlign: 'center'}}>UNFAVORITE</h4>
                        )}
                       
                    </div>
                </div>
        </div>
     );
}

export default ProductModal;