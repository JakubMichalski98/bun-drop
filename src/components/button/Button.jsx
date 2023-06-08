import React from 'react';
import Styles from './Button.module.css'

function Button({text, onClick, fontSize}) {


    return ( 
        <div onClick={onClick} className={Styles.button} style={{'--font-size': fontSize}}>
            {text}
        </div>
     );
}

export default Button;