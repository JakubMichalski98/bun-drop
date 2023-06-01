import React from 'react';
import Styles from './ProductCard.module.css'

function ProductCard({productName, price, image}) {
    return ( 
        <div className={Styles.productcard}>
            <div className={Styles.imagecontainer}>
                <img src={image}/>
            </div>
            <div className={Styles.textcontainer}>
                <h3>{productName}</h3>
                <h4>{price}€</h4>

            </div>
        </div>
     );
}

export default ProductCard;