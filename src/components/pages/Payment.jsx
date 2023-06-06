import React from 'react';
import PaymentForm from '../forms/payment_form/PaymentForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    
    const navigate = useNavigate();

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
        console.log(cart.length);
    }, [])

    function navigateToConfirmation(validationSuccess) {
        if (validationSuccess) {
            navigate('/confirmation');
        }
    }

    return ( 
        <>
        {cart.length < 1 ? (
            <h1>No products associated with payment. Please add products to your cart first.</h1>
        ) : (
            <PaymentForm navigateToConfirmation={(validationSuccess) => navigateToConfirmation(validationSuccess)}/>
        )}
        </>
     );
}

export default Payment;