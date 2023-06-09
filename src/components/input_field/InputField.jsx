import React from 'react';
import Styles from './InputField.module.css';
import { useState } from 'react';

function InputField({name, type, placeholder, value, onChange, maxLength}) {

    return ( 
        <div className={Styles.inputcontainer}>
            <div className={Styles.inputwrapper}>
                <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength}/>
            </div>
        </div>
     );
}

export default InputField;