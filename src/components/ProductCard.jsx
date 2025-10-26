import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function ProductCard({ product }) {
    const { addToCarrito } = useContext(CartContext);

    const price = product.price || (product.rating ? product.rating.average * 2 : 15);

    return (
        <Card className="h-100 shadow-sm border-0">
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.wine}
                className="mx-auto d-block"
                style={{ 
                    height: "220px", 
                    width: "90%",
                    objectFit: "cover", 
                    borderRadius: "8px",
                    display: "block",  
                    marginTop: "10px"
                }}/>
            <Card.Body className="d-flex flex-column justify-content-between">
            
            <div>
                <Card.Title className="fw-bold text-danger">{product.wine}</Card.Title>
                <Card.Text className="text-muted mb-2">{product.winery}</Card.Text>
                <Card.Text className="fw-semibold">${price}</Card.Text>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => addToCarrito({ ...product, price })}>
                    Agregar
                </Button>
                <Button
                as={Link}
                to={`/products/${product.id}`}
                variant="outline-dark"
                size="sm">
                    Ver
                </Button>
            </div>
            </Card.Body>
        </Card>
    );
}
