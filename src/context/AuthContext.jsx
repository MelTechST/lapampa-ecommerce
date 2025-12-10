// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export function AuthProvider ({ children }) {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => setIsAuthenticated(true);
//     const logout = () => setIsAuthenticated(false);

//     return(    
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//         {children}
//     </AuthContext.Provider>
//     );
// }

import { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    const login = (username, password) => {
        if (username === 'nfernandez' && password === '1234') {
            const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTY5ODAwMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            setToken(token);
            localStorage.setItem('token', token); // guardamos token
            return true;
        }
            return false;
        };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token'); // borramos token
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
