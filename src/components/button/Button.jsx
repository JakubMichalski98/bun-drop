import React from 'react';
import Styles from './Button.module.css'

function Button({text, onClick}) {


    return ( 
        <div onClick={onClick} className={Styles.button}>
            {text}
        </div>
     );
}

export default Button;