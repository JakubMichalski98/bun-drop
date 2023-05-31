import React from 'react';
import Styles from './Button.module.css'

function Button({text, onClick}) {

    function handleClick() {
        if (onClick)
        {
            onClick();
        }
    }

    return ( 
        <div className={Styles.button}>
            {text}
        </div>
     );
}

export default Button;