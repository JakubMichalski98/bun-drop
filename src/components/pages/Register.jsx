import React from 'react';
import Button from '../button/Button';
import RegisterForm from '../forms/register_form/RegisterForm';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';


function Register() {

    const {registerUser, isSignedIn} = useUser();


    function handleRegister(isValidationSuccess, formValues) {
        if (isValidationSuccess)
        {
            registerUser(formValues.username, formValues.password);
            
        }
    }

    return ( 
        <>
            {!isSignedIn ? (
                <RegisterForm handleRegister = {handleRegister}/>
            ) : (<div>
                    <h1>You're signed in</h1>
                    <p>If you wish to register a new account, sign out first</p>
                </div>)}
        </>
     );
}

export default Register;