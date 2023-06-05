import React from 'react';
import InputField from '../input_field/InputField';
import Button from '../button/Button';
import RegisterForm from '../forms/register_form/RegisterForm';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';


function Register() {

    const {registerUser, registeredSignIn} = useUser();


    function handleRegister(isValidationSuccess, formValues) {
        if (isValidationSuccess)
        {
            registerUser(formValues.username, formValues.password);
            registeredSignIn();
            
        }
    }

    return ( 
        <>
            Register
            <RegisterForm handleRegister = {handleRegister}/>
        </>
     );
}

export default Register;