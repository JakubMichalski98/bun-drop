import React from 'react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import Button from '../button/Button'
import InputField from '../input_field/InputField';
import { Link } from 'react-router-dom';

function SignIn() {

    const {signInUser, invalidLogin} = useUser();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <div style={{margin: '0',border:'2px red dotted' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginTop: '4rem', marginBottom: '4rem', width: '20rem', height: '24rem', boxShadow:'0px 2px 10px 2px rgba(0, 0, 0, 0.45)', backgroundColor:'white', padding:'2rem'}}>
                <h1>Sign In</h1>
                <form style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <InputField  type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) }/>
                    <InputField type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p style={{color:'red'}}>{invalidLogin}</p>
                </form>

                <div style={{paddingInline: '4rem', marginTop: '2rem',display: 'flex', flexDirection: 'column', gap: '1.4rem'}}>
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