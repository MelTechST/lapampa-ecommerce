import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

export default function Login() {
    const navigate = useNavigate();

    const autenticar = () => {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!username || !password) {
        alert("Ingrese usuario y contraseña");
        return;
    }

    localStorage.setItem('auth', 'true');
    navigate(`/perfil/${username}`);
};

    return (
        <Container className="mt-5" style={{ maxWidth: 400 }}>
        <h2>Iniciar sesión</h2>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
        <Button variant="primary" onClick={autenticar}>Entrar</Button>
        </Form>
        </Container>
    );
}
