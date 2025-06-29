import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext();
export function AuthProvider({ children }){
    const[user , setUser] = useState(null);

    const login = (userData) => {
        const token = `fake-token-${userData.nombre}`;
        localStorage.setItem('authToken' , token);
        setUser(userData);
    };
    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);