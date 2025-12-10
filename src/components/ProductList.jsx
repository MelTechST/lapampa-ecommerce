import { useContext, useEffect, useState } from "react";
import { Row, Col, Spinner, Alert, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {agregarAlCarrito} = useContext(CartContext);
    const [barraSearch, setBarraSearch] = useState("");

    useEffect(() => {
    // fetch("https://api.sampleapis.com/wines/reds")
        fetch("https://691fc34131e684d7bfca9dc7.mockapi.io/Products") //API de mockapi
        .then((response) => {
            if (!response.ok) throw new Error("Error al obtener vinos");
            return response.json();
        })
        .then((data) => {
            setProducts(data.slice(0, 10));
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setError("No se pudieron cargar los vinos. Intente más tarde.");
            setLoading(false);
        });
    }, []);

    if (loading)
        return (
        <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-3">Cargando vinos...</p>
        </div>
        );

    if (error)
        return <Alert variant="danger" className="text-center">{error}</Alert>;
    

    const filteredProducts=products.filter(product => 
        product.title.toLowerCase().includes(barraSearch.toLowerCase()) ||
        product.description.toLowerCase().includes(barraSearch.toLowerCase())
    );


    return (
        <>
        <Form.Control
        type="text"
        placeholder="Buscar Productos"
        className="mb-4"
        value={barraSearch}
        onChange={(e) => setBarraSearch(e.target.value)}
        >
        </Form.Control>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredProducts.map((product) => (
                <Col key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
            </Col>
            ))}
        </Row>
        </>
    );
}
