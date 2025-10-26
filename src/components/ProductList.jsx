import { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch("https://api.sampleapis.com/wines/reds")
        .then(res => {
            if (!res.ok) throw new Error("Error al obtener vinos");
            return res.json();
        })
        .then(data => {
            setProducts(data.slice(0, 10));
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
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
    
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map(product => (
            <Col key={product.id}>
            <ProductCard product={product} />
            </Col>
            ))}
        </Row>
    );
}

// import { useEffect, useState } from "react";
// import { Row, Col, Spinner, Alert } from "react-bootstrap";
// import ProductCard from "./ProductCard";

// export default function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await fetch("https://api.sampleapis.com/wines/reds");
//                 if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
                
//                 const data = await res.json();
//                 console.log("Data recibida de la API:", data);

//                 if (!Array.isArray(data)) {
//                     throw new Error("Los datos recibidos no son un array");
//                 }

//                 setProducts(data.slice(0, 10));
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error al cargar productos:", err);
//                 setError("No se pudieron cargar los vinos. Intente más tarde.");
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading)
//         return (
//             <div className="text-center py-5">
//                 <Spinner animation="border" variant="danger" />
//                 <p className="mt-3">Cargando vinos...</p>
//             </div>
//         );

//     if (error)
//         return <Alert variant="danger" className="text-center">{error}</Alert>;

//     if (!products || products.length === 0)
//         return <Alert variant="info" className="text-center">No hay vinos para mostrar.</Alert>;

//     return (
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//             {products.map(product => (
//                 <Col key={product.id || Math.random()}>
//                     <ProductCard product={product} />
//                 </Col>
//             ))}
//         </Row>
//     );
// }

