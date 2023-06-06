import React from 'react';
import PaymentForm from '../forms/payment_form/PaymentForm';
import { useState, useEffect } from 'react';

const [isCartEmpty, setIsCartEmpty] = useState(localStorage.getItem('cart') || true);

use

function Payment() {
    return ( 
        <>
            <PaymentForm/>
        </>
     );
}

export default Payment;