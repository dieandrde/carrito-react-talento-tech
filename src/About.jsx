import { useState } from "react"

import './About.css'; // Asegurate de tener esta hoja de estilos personalizada

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Sobre Nosotros</h1>
          <p className="lead text-secondary">
            Tecnología, confianza y experiencia al servicio de tu negocio.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Oficina tecnológica"
              className="img-fluid rounded-4 shadow-lg border border-light-subtle"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-semibold text-dark">Nuestra Trayectoria</h3>
            <p className="text-muted">
              Desde nuestros inicios, nos especializamos en ofrecer productos tecnológicos de calidad que potencien la vida digital de nuestros clientes. Nos apasiona brindar una experiencia de compra simple, segura y accesible para todos.
            </p>
            <p className="text-muted">
              Nuestro equipo está comprometido con la mejora constante y la atención personalizada, adaptándonos a las nuevas tendencias del mercado para ofrecer siempre lo mejor.
            </p>
          </div>
        </div>

        <div className="row text-center mt-5 g-4">
          <div className="col-md-4">
            <div className="about-card p-4 h-100 shadow-sm rounded-4">
              <h5 className="fw-bold text-primary">Misión</h5>
              <p className="text-muted small">
                Ofrecer productos tecnológicos de calidad que inspiren confianza y mejoren la vida diaria de nuestros usuarios.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card p-4 h-100 shadow-sm rounded-4">
              <h5 className="fw-bold text-primary">Visión</h5>
              <p className="text-muted small">
                Convertirnos en la tienda tecnológica de referencia en Latinoamérica, destacando por nuestra innovación y cercanía.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card p-4 h-100 shadow-sm rounded-4">
              <h5 className="fw-bold text-primary">Compromiso</h5>
              <p className="text-muted small">
                Nos esforzamos por ofrecer una experiencia de usuario excepcional y una atención postventa que marca la diferencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
