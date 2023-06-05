import React from 'react';
import { useState } from 'react';

function Confirmation() {

    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));

    return ( 
        <>
            Confirmation
            {order.map((item) => (
                <div key={item.id}>
                    <h4>{item.quantity} x {item.product.name}</h4>
                    <h5>{item.product.price * item.quantity}</h5>
                </div>
            ))}
            
        </>
     );
}

export default Confirmation;