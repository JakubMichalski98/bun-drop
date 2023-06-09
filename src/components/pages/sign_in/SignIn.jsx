import React from 'react';
import { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import Button from '../../button/Button'
import InputField from '../../input_field/InputField';
import { Link } from 'react-router-dom';
import Styles from './SignIn.module.css'

function SignIn() {

    const {signInUser, invalidLogin} = useUser();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <div className={Styles.signincontainer}>
            <div className={Styles.signin}>
                <h1>Sign In</h1>
                <form>
                    <InputField  type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) }/>
                    <InputField type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p style={{color:'red'}}>{invalidLogin}</p>
                </form>

                <div className={Styles.buttoncontainer}>
                    <Button onClick={() => signInUser(username, password)} text='LOG IN'/>
                        
                    <Link to='/register'>
                        <Button text={'Register'}/>
                    </Link>
                </div>

            </div>
        </div>
     );
}

export default SignIn;