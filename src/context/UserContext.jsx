import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {

    const navigate = useNavigate();

    // SIGN IN
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('is-signed-in') || false);
    const [invalidLogin, setInvalidLogin] = useState('');

    useEffect(() => {
          fetchUsers();
          console.log(isSignedIn);
    }, [])
    

    async function fetchUsers() {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => setUsers(data));
      }

    function signInUser(username, password) {
        fetchUsers();
        let userExists = users.some(u => u.username === username && u.password === password);
        
        if (userExists)
        {
            localStorage.setItem('is-signed-in', true);
            console.log(localStorage.getItem('is-signed-in'));
            setIsSignedIn(true);
            navigate('/');

        }
        else
        {
            setInvalidLogin('Invalid Username or Password');
        }
    }

    function registeredSignIn() {
        localStorage.setItem('is-signed-in', true);
        navigate('/');
    }

    function signOutUser() {
        localStorage.setItem('is-signed-in', false);
        console.log(isSignedIn);
    }


    function registerUser(username, password) {
        console.log(username);
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "orders": [
      {
        "items": [

        ]
      }
    ]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
    }

    return (

        <UserContext.Provider value={{user, signInUser, isSignedIn, signOutUser, registerUser, invalidLogin, registeredSignIn}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
      }
      return context;
}