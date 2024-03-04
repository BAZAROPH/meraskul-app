import React, { useContext, createContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userIsAuthenticated , setUserIsAuthenticated] = useState(false);
    const [role , setRole] = useState(null);
    return (
        <AuthContext.Provider value={{userIsAuthenticated , setUserIsAuthenticated, role , setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}
