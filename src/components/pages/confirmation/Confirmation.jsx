import React from 'react';
import { useState } from 'react';
import Styles from './Confirmation.module.css';

function Confirmation() {

    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));
    const time = Math.floor(Math.random() * 51) + 5;

    return ( 
        <div className={Styles.confirmationcontainer}>
            <img src='src\images\drone.png'/>
            <h1>Thank you for your order!</h1>
            <p>Your order will arrive in approximately</p>
            <h1 className={Styles.time}>{time} minutes</h1>
            <div className={Styles.orderdetails}>
                <h1 style={{alignSelf: 'center'}}>Your Order Details</h1>
                {order.map((item) => (
                    <div className={Styles.confirmationproduct} key={item.id}>
                        <h4>{item.quantity} x {item.product.name}</h4>
                        <h5>{(item.product.price * item.quantity).toFixed(2)}€</h5>
                    </div>
                ))}
            </div>
           
            
        </div>
     );
}

export default Confirmation;