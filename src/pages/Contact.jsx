import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Contact(){
    return (
        <Container className="mb-5 mt-5">
            <Row>
                <Col>
                    <Container className="p-3">
                        <h1>Newsletter</h1>
                        <p>¡Contactese con nosotros!</p>
                        <Form 
                            className="p-4 me-auto" 
                            action="https://formspree.io/f/xldqlavd" 
                            method="POST"
                        > 
                            <Form.Group className="p-3 m-1" style={{ width: "400px" }}>
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="Nombre"
                                    placeholder="Ingrese su nombre"
                                />
                            </Form.Group>
                            <Form.Group className="p-3 m-1" style={{ width: "400px" }}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="Email"
                                    placeholder="Ingrese su correo electrónico"
                                    />
                            </Form.Group>
                            <Form.Group className="p-3 m-1" style={{ width: "400px" }}>
                                <Form.Label>Asunto:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="Asunto"
                                    placeholder="Ingrese un asunto del mensaje"
                                />
                            </Form.Group>
                            <Form.Group className="p-3 m-1" style={{ width: "400px" }}>
                                <Form.Label>Mensaje:</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    name="Mensaje"
                                    placeholder="Escriba un mensaje"
                                />
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit"
                                className="mt-2"  
                                style={{ width: "400px" }}
                            >
                                Enviar
                            </Button>
                        </Form>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3 border rounded mt-5">
                        <h2>Información de Contacto</h2>
                        <Row>
                            <Col>
                                <p>Dirección</p>
                            </Col>
                            <Col>
                                <p>Lugar</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Teléfono</p>
                            </Col>
                            <Col>
                                <p>+54 9 (11) xxxx-xxxx</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Correo</p>
                            </Col>
                            <Col>
                                <p>info@lapampa.com</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
