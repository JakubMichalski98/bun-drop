import React from 'react';
import Styles from './ProductCard.module.css'

function ProductCard({product, onProductClick}) {

    function handleClick() {
        onProductClick(product);
    }

    return ( 
        <div onClick={handleClick} className={Styles.productcard}>
            <div className={Styles.imagecontainer}>
                <img src={product.image}/>
            </div>
            <div className={Styles.textcontainer}>
                <h3>{product.name}</h3>
                <h4>{product.price}€</h4>

            </div>
        </div>
     );
}

export default ProductCard;