import React from "react";
import { useContext } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header(){
    const { token, logout} = useAuth();
    const {carrito = []}=useContext(CartContext);

    const itemsCount = carrito.reduce(
        (acc, item) => acc + (item.quantity || 1),
        0
    );

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

                        <Nav.Link as={Link} to="/cartpage" className="position-relative">
                        Carrito
                        {itemsCount >0 && (
                            <Badge 
                                bg="danger"
                                pill
                                className="ms-1"
                            >
                                {itemsCount}
                            </Badge>
                        )}
                        </Nav.Link>


                            {/* {itemsCount > 0 && <Badge bg="danger">{itemsCount}</Badge>} */}
                        {/* <Nav.Link as={Link} to="/us">Nosotros</Nav.Link> */}
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        {token && (
                            <Nav.Link as={Link} to="/crudproductos">CRUD</Nav.Link>
                        )}
                    </Nav>
                    <div className="d-flex gap-3 justify-content-end">
                        {token ? (
                            <Button variant="outline-danger" onClick={logout}>Cerrar sesión</Button>
                        ) : ( 
                            <Button className="d-flex gap-3 justify-content-end" variant="danger" as={Link} to="/login">Admin</Button>
                        )} 
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}