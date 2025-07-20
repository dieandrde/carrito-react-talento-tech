import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from 'react-toastify'; 

const AuthContext = createContext();

// ---roles ---
const users = [
    { nombre: 'admin', password: '1234', rol: 'admin' },
    { nombre: 'usuario', password: 'contraseña', rol: 'usuario' },

];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Error al parsear el usuario del localStorage", e);
                localStorage.removeItem('currentUser'); 
            }
        }
    }, []);

    // login y rol
    const login = (nombre, password) => {
        const foundUser = users.find(
            (u) => u.nombre === nombre && u.password === password
        );

        if (foundUser) {
        
            const userDataToStore = { nombre: foundUser.nombre, rol: foundUser.rol };
            localStorage.setItem('currentUser', JSON.stringify(userDataToStore));
            setUser(userDataToStore);
            toast.success(`Bienvenido, ${foundUser.nombre}! (Rol: ${foundUser.rol})`);
            return true; // login exitoso
        } else {
            toast.error('Nombre de usuario o contraseña incorrectos.');
            return false; // login fallido
        }
    };

    const logout = () => {
        localStorage.removeItem('currentUser'); //limpiar
        setUser(null);
        toast.info('Sesión cerrada.');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);