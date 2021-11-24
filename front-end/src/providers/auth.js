import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [ theme, setTheme ] = useState('light');
    const [ displayModal, setDisplayModal ] = useState('');

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