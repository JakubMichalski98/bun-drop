import React, { createContext, useContext, useState, useEffect } from 'react';

const ValidationContext = createContext();

export function ValidationProvider({ children }) {

    const [formValues, setFormValues] = useState(
        {
            username: '',
            password: '',
            confirmPassword: ''
        }
    );

    const [inputs, setInputs] = useState([
        {
        id: 1,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        },
        {
            id: 3,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
        }
    ]
    );

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidationSuccess, setIsValidationSuccess] = useState(false);

    useEffect(() => {
        if (Object.keys(errorMessages).length === 0 && isSubmitted) {
            setIsValidationSuccess(true);
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

    function handleFormSubmit(e) {
        e.preventDefault();
        setErrorMessages(validateInput(formValues));
    }

    return (

        <ValidationContext.Provider value={{inputs, formValues, handleInputChange, handleFormSubmit, validateInput, errorMessages, isValidationSuccess, setIsValidationSuccess}}>
            {children}
        </ValidationContext.Provider>
    )
}

export function useValidation() {
    const context = useContext(ValidationContext);
    if (!context) {
        throw new Error('useValidation must be used within a ValidationProvider');
      }
      return context;
}