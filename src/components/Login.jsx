// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from './AuthContext'; // Ajusta la ruta si es necesario

export default function Login() {
    const [usuario , setUsuario] = useState('');
    const [password , setPassword] = useState('');
    const  { login } = useAuthContext(); // Obtén la función login del contexto
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'admin' && password === '1234') {
            login({ nombre: usuario, rol: 'admin' }); // Llama a la función login del contexto
            navigate('/carrito');
        }else{
            login({ nombre: usuario, rol: 'cliente' });
            navigate('/');
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="usuario"
                            placeholder=""
                            required
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">Recordarme</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                </form>

                <hr />

                <div className="text-center">
                    <p className="mb-1">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </p>
                    <p className="mb-0">
                        ¿No tenés cuenta? <a href="#">Registrate</a>
                    </p>
                </div>
            </div>
        </div>
    );
}