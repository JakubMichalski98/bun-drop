import React from 'react';
import Button from '../../button/Button';
import { useState, useEffect } from 'react';
import { useUser } from '../../../context/UserContext';
import { useCart } from '../../../context/CartContext';

function PaymentForm({navigateToConfirmation}) {

    const {saveUserOrder} = useUser();
    const {setCartItems} = useCart();
    

    const [formValues, setFormValues] = useState({
        fullName: '',
        street: '',
        city: '',
        zipCode: ''
    })

    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (Object.keys(errorMessages).length === 0 && isSubmitted) {
            const userCart = JSON.parse(localStorage.getItem('cart'));
            saveUserOrder(userCart);
            localStorage.setItem('order', JSON.stringify(userCart));
            setCartItems([]);
            navigateToConfirmation(true);
        }

    }, [errorMessages])

    function handleInputChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        setIsSubmitted(true);
        console.log(formValues);
        }

        function validateInput(values) {
            const errors = {}
            
            if (!values.fullName) {
            errors.fullName = 'Full name is required';
            }
            else if (values.fullName < 5)
            {
                errors.fullName = 'AT LEAST 5'
            }
           
            if (!values.street) {
            errors.street = 'Street is required';
            }

            if (!values.city) {
                errors.city = 'City is requried';
            }
           
            if (!values.zipCode) {
            errors.zipCode = "Zipcode is required";
            }
            
            return errors;
           
            }

            function handleFormSubmit() {
                setErrorMessages(validateInput(formValues));
            }

    return ( 
        <form style={{display: 'flex', flexDirection: 'column', gap: '2rem' ,justifyContent: 'center', alignItems: 'center'}}>
            <input name='fullName' type='text' placeholder='Full Name' value={formValues.fullName} onChange={handleInputChange}/>
            {errorMessages.fullName && <p>{errorMessages.fullName}</p>}

            <input name='street' type='text' placeholder='Street Address' value={formValues.street} onChange={handleInputChange}/>
            {errorMessages.street && <p>{errorMessages.street}</p>}

            <input name='city' type='text' placeholder='City' value={formValues.city} onChange={handleInputChange}/>
            {errorMessages.city && <p>{errorMessages.city}</p>}

            <input name='zipCode' type='number' placeholder='Zip Code' value={formValues.zipCode} onChange={handleInputChange}/>
            {errorMessages.zipCode && <p>{errorMessages.zipCode}</p>}

                <Button text={'Complete payment'} onClick={handleFormSubmit}/>

        </form>
     );
}

export default PaymentForm;