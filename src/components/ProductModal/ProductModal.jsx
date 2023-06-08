import React from 'react';
import Styles from './ProductModal.module.css'
import QuantitySelector from '../quantity_selector/QuantitySelector';
import Button from '../button/Button'
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

function ProductModal({product, handleXClick, handleAddClick}) {

    const [quantity, setQuantity] = useState(1);
    const [productFavorited, setProductFavorited] = useState(false);

    const {saveUserFavorite, removeUserFavorite, users, userId} = useUser();

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('is-signed-in'))) {
            const user = users.find(u => u.id === userId);

            if (user.favorites.some(f => f === product)) {
                setProductFavorited(true);
            }
            else
            {
                setProductFavorited(false);
            }
        }


    }, [product])


    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    function handleFavoriteClick() {
        const user = users.find(u => u.id === userId);
      
        if (user.favorites.some(f => f === product)) {
            removeUserFavorite(product);
            setProductFavorited(false);
        } 
        else  {
            saveUserFavorite(product);
            setProductFavorited(true);
        }
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
                        {JSON.parse(localStorage.getItem('is-signed-in')) && 
                        <div>
                             {!productFavorited ? (
                             <h4 onClick={handleFavoriteClick} style={{textAlign: 'center'}}>FAVORITE</h4>
                        ) : (
                            <h4 onClick={handleFavoriteClick} style={{textAlign: 'center'}}>UNFAVORITE</h4>
                        )}
                        </div> }
                       
                    </div>
                </div>
        </div>
     );
}

export default ProductModal;