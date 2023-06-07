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
        zipCode: '',
    })

    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

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

        function handleOptionChange(e) {
            setSelectedOption(e.target.value);
        }

        function validateInput(values) {
            const errors = {}
            
            if (!values.fullName) {
            errors.fullName = 'Full name is required';
            }
           
            if (!values.street) {
            errors.street = 'Street is required';
            }

            if (!values.city) {
                errors.city = 'City is requried';
            }
           
            if (!values.zipCode) {
            errors.zipCode = 'Zipcode is required';
            }

            if(selectedOption === '') {
                errors.selectedOption = 'Payment option is required';
            }
            else if (selectedOption === 'card') {
                
                if (!values.cardNumber) {
                    errors.cardNumber = 'Card number is required';
                }

                if (!values.expirationDate) {
                    errors.expirationDate = 'Card number is required';
                }

                if (!values.cvcCode) {
                    errors.cvcCode = 'CVC Code is required';
                }
            }
            else if (selectedOption === 'swish') {
                if (!values.phoneNumber) {
                    errors.phoneNumber = 'Phone number is required';
                }
            }
            
            console.log(errors);
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

            <div style={{display: 'flex'}}>
                <label>
                    <input value='card' checked={selectedOption === 'card'} type='radio' onChange={handleOptionChange}/>
                    Debit Card
                </label>
                <label>
                    <input value='swish' checked={selectedOption === 'swish'} type='radio' onChange={handleOptionChange}/>
                    Swish
                </label>
                {errorMessages.selectedOption && <div><p>{errorMessages.selectedOption}</p></div>}
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