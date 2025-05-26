export default function Contact() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white">
                        <h2 className="mb-0">Contáctanos</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre Completo</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="phone" placeholder="+54 11 1234-5678" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="topic" className="form-label">Motivo de consulta</label>
                                <select className="form-select" id="topic" required>
                                    <option value="">Seleccioná una opción</option>
                                    <option>Soporte Técnico</option>
                                    <option>Consulta Comercial</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Escribí tu mensaje..." required></textarea>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" id="terms" required />
                                <label className="form-check-label" htmlFor="terms">
                                    Acepto los términos y condiciones
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
