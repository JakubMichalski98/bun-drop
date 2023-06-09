import React from 'react';
import Button from '../../button/Button';
import InputField from '../../input_field/InputField';
import { useState, useEffect } from 'react';
import Styles from './RegisterForm.module.css';

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
                }

    return ( 
        <div className={Styles.registercontainer}>
            <div className={Styles.register}>
                <h1>Register</h1>
                <form>
                    <InputField name={'username'} type={'text'} placeholder={'Username'} value={formValues.username} onChange={handleInputChange} />
                    {errorMessages.username && <p>{errorMessages.username}</p>}
                    <InputField  name={'password'} type={'password'} placeholder={'Password'} value={formValues.password} onChange={handleInputChange} />
                    {errorMessages.password && <p>{errorMessages.password}</p>}
                    <InputField name={'confirmPassword'} type={'password'} placeholder={'Confirm Password'} value={formValues.confirmPassword} onChange={handleInputChange} />
                    {errorMessages.confirmPassword && <p>{errorMessages.confirmPassword}</p>}
                </form>
                <div className={Styles.buttoncontainer}>
                    <Button onClick={handleFormSubmit} text={'Register'}/>
                </div>
            </div>
        </div>
     );
}

export default RegisterForm;