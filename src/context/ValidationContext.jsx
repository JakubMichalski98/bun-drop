import React, { createContext, useContext, useState, useEffect } from 'react';

const ValidationContext = createContext();

export function ValidationProvider({ children }) {
    
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