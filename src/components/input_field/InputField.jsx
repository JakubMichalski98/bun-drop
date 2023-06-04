import React from 'react';
import Styles from './InputField.module.css';
import { useState } from 'react';

function InputField({type, placeholder, onChange, name}) {

    return ( 
        <>
        <input name={name} type={type} placeholder={placeholder} onChange={onChange}/>
        <span></span>
        </>
     );
}

export default InputField;