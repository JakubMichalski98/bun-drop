import React, { createContext, useContext, useState, useEffect } from 'react';

const ValidationContext = createContext();

export function ValidationProvider({ children }) {

    function handleInputChange(e, formValues) {
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

        <ValidationContext.Provider value={{handleInputChange}}>
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