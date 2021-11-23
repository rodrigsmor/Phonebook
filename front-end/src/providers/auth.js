import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [ theme, setTheme ] = useState('light');

    return (
        <AuthContext.Provider
            value={{ theme, setTheme }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);