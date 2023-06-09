import React from 'react';
import Styles from './InputField.module.css';
import { useState } from 'react';

function InputField({name, type, placeholder, value, onChange}) {

    return ( 
        <div className={Styles.inputcontainer}>
            <div className={Styles.inputwrapper}>
                <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            </div>
        </div>
     );
}

export default InputField;