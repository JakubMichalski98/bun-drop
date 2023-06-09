import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {

    const navigate = useNavigate();

    // SIGN IN
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user-id')) || null)
    const [isSignedIn, setIsSignedIn] = useState(JSON.parse(localStorage.getItem('is-signed-in')) || false);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        fetchUsers();
    }, [])

    

    useEffect(() => {
        localStorage.setItem('is-signed-in', isSignedIn);
        localStorage.setItem('user-id', userId);
    }, [isSignedIn])

    async function fetchUsers() {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => setUsers(data));
      }

    function signInUser(username, password) {
        let userExists = users.some(u => u.username === username && u.password === password);
        
        if (userExists)
        {
            const user = users.find(u => u.username === username);
            setUserId(user.id);
            setIsSignedIn(true);
            setErrorMessage('');
            navigate('/');

        }
        else
        {
            setErrorMessage('Invalid Username or Password');
        }
    }

    function signOutUser() {
        setIsSignedIn(false);
        setUserId(null);
        navigate('/signin')
    }


    function registerUser(username, password) {

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "orders": [],
                "favorites": []
        })
    })
    .then(response => response.json())
    .then(data => {
        users.push(data);
        signInUser(username, password);
      });
    }

    function saveUserOrder(order) {
        
        const user = users.find(u => u.id === JSON.parse(localStorage.getItem('user-id')));

        const newOrders = user.orders;

        newOrders.push(order);

        const updatedUser = {
            "username": user.username,
            "password": user.password,
            "orders": newOrders,
            "favorites": []
        }

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
          })
        }

        function saveUserFavorite(product) {
            const user = users.find(u => u.id === JSON.parse(localStorage.getItem('user-id')));

            const newFavorites = user.favorites;

            newFavorites.push(product);

            const updatedUser = {
                "username": user.username,
                "password": user.password,
                "orders": user.orders,
                "favorites": newFavorites
            }
    
            fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
              })
        }

        function removeUserFavorite(product) {
            const user = users.find(u => u.id === JSON.parse(localStorage.getItem('user-id')));

            const newFavorites = user.favorites;

            let favoriteIndex = newFavorites.indexOf(product);

            newFavorites.splice(favoriteIndex, 1);

            const updatedUser = {
                "username": user.username,
                "password": user.password,
                "orders": user.orders,
                "favorites": newFavorites
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

        <UserContext.Provider value={{signInUser, setIsSignedIn, signOutUser, registerUser, invalidLogin: errorMessage, saveUserOrder, saveUserFavorite, removeUserFavorite, users, userId, isSignedIn, fetchUsers}}>
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