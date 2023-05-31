import React from 'react';
import Styles from './Hero.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function Hero() {

    return ( 
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h1>Drop it like it's hot!</h1>
                <p>Whether you're looking for a quick bite or a full meal, we've got you covered. So why wait? Order now and experience the future of fast food delivery!
                </p>
                    <div className={Styles.desktopbuttoncontainer}>
                        <Link to='/menu'>
                            <Button text={'ORDER NOW'}/>
                        </Link>
                    </div>
            </div>
        
            <div className={Styles.imagecontainer}>
                <img className={Styles.heroimage} src='src\images\burger-6.png'/>
            </div>

            <div className={Styles.mobilebuttoncontainer}>
                <Link to='/menu'>
                    <Button text={'ORDER NOW'}/>
                </Link>
            </div>


        </div>
     );
}

export default Hero;