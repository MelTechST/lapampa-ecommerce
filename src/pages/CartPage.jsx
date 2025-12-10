import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

//venta por cajas (categoria)! mas adelante

export default function CartPage() {
    const { carrito, addToCarrito, removeFromCarrito, decreaseFromCarrito, clearCarrito,} = useContext(CartContext);

    // CALCULO DEL TOTAL EN LA COMPRA
    const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const redondeoTotal=Math.round (total*100) / 100;

    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-4">Carrito</h2>
            {carrito.map((item) => (
                <Card key={item.id} className="mb-3 shadow-sm border-0">
                    <Card.Body>
                        <Row className="align-items-center">
                        {/* MINI IMAGEN */}
                        <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
                            <img
                                src={item.image}
                                alt={item.wine}
                                style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                }}
                            />
                        </Col>

                    {/* INFORMACIÓN */}
                        <Col xs={12} md={4}>
                            <h5 className="fw-bold">{item.title}</h5>
                            <p className="text-muted mb-0">ID: {item.id}</p>
                            {/* <p className="text-muted small mb-0">{item.location}</p> */}
                        </Col>

                        {/* LA CANTIDAD DEL PRODUC */}
                        <Col xs={12} md={3} className="d-flex align-items-center justify-content-center gap-2">
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => decreaseFromCarrito(item.id)}
                            >
                            −
                            </Button>
                            <Form.Control
                                type="number"
                                value={item.quantity}
                                readOnly
                                className="text-center"
                                style={{ width: "60px" }}
                            />
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => addToCarrito(item)}
                            >
                            +
                            </Button>
                        </Col>

                        {/* PRECIO Y SUMA */}
                        <Col xs={12} md={2} className="text-center fw-bold text-danger">
                            ${ (Math.round(item.price * item.quantity * 100) / 100).toFixed(2) }
                        </Col>

                        {/* QUITAR EL PRODUCTO (X)*/}
                        <Col xs={12} md={1} className="text-center">
                            <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeFromCarrito(item.id)}
                            >
                            ✕
                            </Button>
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

            {/* TOTAL */}
            <Card className="mt-4 border-0 shadow-sm">
                <Card.Body>
                    <Row>
                    <Col md={{ span: 6, offset: 6 }}>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <strong>${redondeoTotal.toFixed(2)}</strong>
                        </div>
                        <div className="d-flex justify-content-between mb-2 text-muted">
                            <span>Envío e impuestos</span>
                            <span>Calculado al pagar</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-4">
                            <strong>Total</strong>
                            <strong className="text-danger">${redondeoTotal.toFixed(2)}</strong>
                        </div>
                        <Button
                            variant="danger"
                            size="lg"
                            className="w-100 fw-bold"
                            onClick={() => {
                                toast.success("Compra realizada con éxito")
                                clearCarrito();
                            }}
                        >
                        Pagar
                        </Button>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}