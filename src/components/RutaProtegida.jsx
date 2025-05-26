// RutaProtegida.jsx
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext'; // Importa el hook del contexto

export default function RutaProtegida({ children }){
    const { user } = useAuthContext(); // Obtén el usuario del contexto

    // Si no hay usuario, redirige a la página de login
    if(!user) {
        return <Navigate to="/login" replace/>
    }

    // Si hay usuario, renderiza los hijos
    return children;
}