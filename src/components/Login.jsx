import React, { useState } from 'react';
import { useAuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/admin/productos');
    }
  };

  return (
    <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Row className="justify-content-center w-100">
        <Col md={6} lg={4}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4"><h2>Iniciar Sesión</h2></Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Nombre de usuario:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Iniciar Sesión
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p className="mb-1">
                  <Link to="/olvide-contrasena" className="text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </p>
                <p className="mb-0">
                  <small className="text-muted">
                    ¿No tienes un usuario?{' '}
                    <Link to="/registrate" className="text-decoration-none">
                      Regístrate
                    </Link>
                  </small>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}