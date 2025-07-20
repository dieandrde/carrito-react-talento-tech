// RutaProtegida.jsx
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

export default function RutaProtegida({ children, allowedRoles }) {
    const { user } = useAuthContext();

    // si no hay usuario logueado, redirige a la página de login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && allowedRoles.length > 0) {
        if (!user.rol || !allowedRoles.includes(user.rol)) {
            toast.error('Acceso denegado. No tienes los permisos necesarios.');
            return <Navigate to="/" replace />; // pagina de acceso denegado
        }
    }

    return children;
}