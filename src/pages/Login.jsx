import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
            navigate('/crudproductos');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                <Card className="shadow-lg p-4">
                    <Card.Body>
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Ingresar
                            </Button>
                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;