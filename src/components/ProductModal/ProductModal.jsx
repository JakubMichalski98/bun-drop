import React from 'react';
import Styles from './ProductModal.module.css'

function ProductModal({product}) {
    return ( 
        <div className={Styles.modalbackground}>
            <div className={Styles.modalcontainer}>
                <h1>{product.name}</h1>
                    <img src={product.image}/>
            </div>
        </div>
     );
}

export default ProductModal;