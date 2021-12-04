import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [ theme, setTheme ] = useState(() => {
       const storageValue = localStorage.getItem('theme');
       
        if(storageValue) {
            return JSON.parse(storageValue);
        }
        else {
            return 'light';
        }
    });
    const [ displayModal, setDisplayModal ] = useState('');

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [ theme ])

    return (
        <AuthContext.Provider
            value={{ 
                theme, 
                setTheme,
                displayModal,
                setDisplayModal 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);