import React from 'react';
import Button from '../../button/Button';
import { useState, useEffect } from 'react';

function RegisterForm({handleRegister}) {

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        comfirmPassword: ''
    })

    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (Object.keys(errorMessages).length === 0 && isSubmitted) {
            handleRegister(true, formValues);
        }

    }, [errorMessages])

    function handleInputChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        setIsSubmitted(true);
        }

        function validateInput(values) {
            const errors = {}
            
            if (!values.username) {
            errors.username = 'Username is required';
            }
            else if (values.username.length < 4 || values.username.length > 8)
            {
            errors.username = 'Username must be 4-8 characters long';
            }
           
            if (!values.password) {
            errors.password = 'Password is required';
            }
            else if (values.password.length < 8 || values.password.length > 16) {
            errors.password = 'Password must be 8-16 characters long';
            }
           
            if (!values.confirmPassword || values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords must match";
            }
            
            return errors;
           
            }

            function handleFormSubmit() {
                setErrorMessages(validateInput(formValues));
                    if (Object.keys(errorMessages).length === 0 && isSubmitted) {
                        console.log(formValues);
                        handleRegister(true, formValues);
                    }
                }

    return ( 
        <>
         <form>
            <pre>{formValues.username}</pre>
            <input name={'username'} type={'text'} placeholder={'Username'} value={formValues.username} onChange={handleInputChange} />
            {errorMessages.username && <p>{errorMessages.username}</p>}
            <input  name={'password'} type={'password'} placeholder={'Password'} value={formValues.password} onChange={handleInputChange} />
            {errorMessages.password && <p>{errorMessages.password}</p>}
            <input name={'confirmPassword'} type={'password'} placeholder={'Confirm Password'} value={formValues.confirmPassword} onChange={handleInputChange} />
            {errorMessages.confirmPassword && <p>{errorMessages.confirmPassword}</p>}
            <Button onClick={handleFormSubmit} text={'Register'}/>
            </form>
        
        </>
     );
}

export default RegisterForm;