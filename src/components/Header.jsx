import React from "react";
import { useContext } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Header(){
    const { cart} =useContext(CartContext);
    const { isAuthenticated, login, logout} = useContext(AuthContext);

    // // const itemsCount = cart.reduce((s,p) => s + (p.qty||0), 0);
    // const itemsCount = cart.reduce((acc,p) => acc + p.qty, 0);


    const navigate = useNavigate();
    const isAuth = isAuthenticated || localStorage.getItem('auth') === 'true';

    const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
    };


    return (
        <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                <strong>La Pampa</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/cartpage">Carrito</Nav.Link>
                            {/* {itemsCount > 0 && <Badge bg="danger">{itemsCount}</Badge>} */}
                        {/* <Nav.Link as={Link} to="/us">Nosotros</Nav.Link> */}
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>

                        {isAuthenticated && (
                        <>
                        <Nav.Link as={Link} to="/perfil/usuario123">Perfil</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        </>
                        )}
                    </Nav>
                    <div className="d-flex gap-3 justify-content-end">
                        {isAuthenticated ? (
                            <Button variant="outline-danger" onClick={logout}>Cerrar sesión</Button>
                        ) : (
                            <Button className="d-flex gap-3 justify-content-end"  variant="danger" onClick={login}>Iniciar sesión</Button>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}