import React from 'react';
import Button from '../../button/Button';
import { useState, useEffect } from 'react';
import { useUser } from '../../../context/UserContext';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';


function PaymentForm({navigateToConfirmation}) {

    const [formValues, setFormValues] = useState({
        fullName: '',
        street: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expirationDate: '',
        cvcCode: '',
        phoneNumber: ''
    })

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const {saveUserOrder} = useUser();
    const {setCartItems} = useCart();

    useEffect(() => {
        if (Object.keys(errorMessages).length === 0 && isSubmitted) {
            navigateToConfirmation(true);
        }
    }, [errorMessages])
    
    function handleInputChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues);
        setIsSubmitted(true);
        }

    function handleOptionChange(e) {
        console.log(e.target.value);
        setSelectedOption(e.target.value);
    }

    function validateInput(values) {
        const errors = {}

        if (values.fullName.length < 1) {
            console.log("fullname");
            errors.fullName = 'Full name is required';
        }

        if (values.street.length < 1) {
            console.log("street");
            errors.street = 'Street address is required';
        }
        return errors;
        }

    function handleFormSubmit() {
        setErrorMessages(validateInput(formValues));
        if (Object.keys(errorMessages).length === 0 && isSubmitted) {
            const userCart = JSON.parse(localStorage.getItem('cart'));
            saveUserOrder(userCart);
            localStorage.setItem('order', JSON.stringify(userCart));
            setCartItems([]);
            navigateToConfirmation(true);
        }
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

            <div style={{display: 'flex'}}>
                <label>
                    <input value='card' checked={selectedOption === 'card'} type='radio' onChange={handleOptionChange}/>
                    Debit Card
                </label>
                <label>
                    <input value='swish' checked={selectedOption === 'swish'} type='radio' onChange={handleOptionChange}/>
                    Swish
                </label>
                {errorMessages.paymentOption && <p>{errorMessages.paymentOption}</p>}
            </div>

                {selectedOption === 'card' &&
                    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                        <input name='cardNumber' type='number' placeholder='Card Number' value={formValues.cardNumber} onChange={handleInputChange}/>
                        {errorMessages.cardNumber && <p>{errorMessages.cardNumber}</p>}

                        <input name='expirationDate' type='number' placeholder='Expiration Date' value={formValues.expirationDate} onChange={handleInputChange}/>
                        {errorMessages.expirationDate && <p>{errorMessages.expirationDate}</p>}

                        <input name='cvcCode' type='number' placeholder='CVC' value={formValues.cvcCode} onChange={handleInputChange}/>
                        {errorMessages.cvcCode && <p>{errorMessages.cvcCode}</p>}
                    </div>}
                    {selectedOption === 'swish' &&  <div>
                   
                   <input name='phoneNumber' type='number' placeholder='Phone number' value={formValues.phoneNumber} onChange={handleInputChange}/>
                   {errorMessages.phoneNumber && <p>{errorMessages.phoneNumber}</p>}
               </div> }

                <Button text={'Complete payment'} onClick={handleFormSubmit}/>

        </form>
     );
}

export default PaymentForm;