import React from 'react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function SignIn() {

    const {signInUser} = useUser();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <>
            Sign In
            <form>
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) }/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Link to='/'>
                    <Button onClick={() => signInUser(username, password)} text='LOG IN'/>
                </Link>
            </form>

            <h2>Don't have an account?</h2>
            <Link to='/register'>
                <Button text={'Register'}/>
            </Link>

        </>
     );
}

export default SignIn;