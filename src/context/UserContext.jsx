import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {

    const localStorageSignedIn = localStorage.getItem('is-signed-in');

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isSignedIn, setIsSignedIn] = useState(localStorageSignedIn);

    useEffect(() => {
        async function fetchUsers() {
            fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
          }
          fetchUsers();
    }, [])

    useEffect(() => {
        localStorage.setItem('is-signed-in', isSignedIn)
    }, [isSignedIn])

    function signInUser(username, password) {
        let userExists = users.some(u => u.username === username && u.password === password);
        
        if (userExists)
        {
            setIsSignedIn(true);
        }
    }

    function signOutUser() {
        
        setIsSignedIn(false);

        console.log(`isSignedIn: ${isSignedIn}`)
    }

    return (

        <UserContext.Provider value={{user, signInUser, isSignedIn, signOutUser}}>
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