import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCarrito } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
    // sampleapis no tiene endpoint singular por id para /wines/reds -> así que lo más simple es pedir todo y filtrar
        fetch("https://api.sampleapis.com/wines/reds")
            .then(res => {
                if (!res.ok) throw new Error("Error API");
                return res.json();
            })
            .then(data => {
                const found = data.find(item => String(item.id) === String(id));
                if (!found) {
                    setError("Producto no encontrado");
                } else {
                    setProduct(found);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Error al cargar el detalle");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Container className="text-center"><Spinner animation="border" /> <div>Cargando detalle...</div></Container>;
    if (error) return <Container><Alert variant="danger">{error}</Alert></Container>;
    if (!product) return null;

    const price = product.price || (product.rating ? product.rating.average * 2 : 10);

    return (
        <Container>
        <h2>{product.wine || product.name}</h2>
        {product.image && <img src={product.image} alt={product.wine} style={{maxWidth:300}} />}
        <p><strong>Bodega:</strong> {product.winery}</p>
        <p>{product.description}</p>
        <p><strong>Precio:</strong> ${price}</p>
        <Button onClick={() => addToCarrito({...product, price})}>Agregar al carrito</Button>
        </Container>
    );
}
