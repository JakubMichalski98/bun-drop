import React from 'react';
import InputField from '../input_field/InputField';
import Button from '../button/Button';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { useValidation } from '../../context/ValidationContext';


function Register() {

    const {registerUser, registeredSignIn} = useUser();
    const {inputs, formValues, handleInputChange, handleFormSubmit, errorMessages, isValidationSuccess, setIsValidationSuccess} = useValidation();


    useEffect(() => {

    }, [])

    function handleRegister(e) {
        handleFormSubmit(e);
        if (isValidationSuccess)
        {
            registerUser(formValues.username, formValues.password);
            registeredSignIn();
            
        }
        console.log(isValidationSuccess.toString());
    }

    return ( 
        <>
            Register
            <form>
                <pre>{formValues.username}</pre>
                {inputs.map((i) => (
                    <div key={i.id}>
                        <InputField onChange={(e) => handleInputChange(e)} value={formValues[i.name]} name={i.name} type={i.type} placeholder={i.placeholder}/>
                        <p>{errorMessages[i.name]}</p>
                    </div>
                    
                ))}
                <Button onClick={handleRegister} text={'Register'}/>
            </form>
        </>
     );
}

export default Register;