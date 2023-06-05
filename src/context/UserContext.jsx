import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {

    const navigate = useNavigate();

    // SIGN IN
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('is-signed-in') || false);
    const [invalidLogin, setInvalidLogin] = useState('');

    useEffect(() => {
          fetchUsers();
    }, [])   
    
    useEffect(() => {
        localStorage.setItem('is-signed-in', isSignedIn);
    }, [isSignedIn])

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
            const user = users.find(u => u.username === username);
            setUser(user);
            setIsSignedIn(true);
            navigate('/');

        }
        else
        {
            setInvalidLogin('Invalid Username or Password');
        }
    }

    function signOutUser() {
        setIsSignedIn(false);
        setUser(null);
        console.log(isSignedIn);
        console.log("SIGNED OUT");
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
                "orders": []
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .then(signInUser(username, password));
    
    }

    function saveUserOrder(order) {

        const newOrders = user.orders;

        newOrders.push(order);

        console.log(newOrders);

        const updatedUser = {
            "username": user.username,
            "password": user.password,
            "orders": newOrders
        }

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
          })
        }

    return (

        <UserContext.Provider value={{signInUser, isSignedIn, signOutUser, registerUser, invalidLogin, saveUserOrder}}>
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