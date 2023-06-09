import React from 'react';
import RegisterForm from '../../forms/register_form/RegisterForm';
import { useUser } from '../../../context/UserContext';


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
            ) : (<div style={{textAlign: 'center', alignSelf: 'center', marginTop: '8rem'}}>
                    <h1>You're signed in</h1>
                    <p>If you wish to register a new account, sign out first.</p>
                </div>)}
        </>
     );
}

export default Register;