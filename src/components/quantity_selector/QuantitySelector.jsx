import React from 'react';
import Styles from './QuantitySelector.module.css'
import { useState } from 'react';

function QuantitySelector({onChange}) {

    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        if (quantity < 10)
        {
            setQuantity(quantity + 1);
            onChange(quantity + 1);
        }


    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onChange(quantity - 1);
        }

    }

    return ( 
        <div className={Styles.quantityselector}>
            <button onClick={decrementQuantity}>-</button>
            <h3>{quantity}</h3>
            <button onClick={incrementQuantity}>+</button>
            <h4></h4>
        </div>
     );
}

export default QuantitySelector;