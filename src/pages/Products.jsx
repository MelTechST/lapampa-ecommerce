import React from "react";
import { useContext } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";

import ProductList from "../components/ProductList";

export default function Products(){
    return(
        <Container className="py-5">
            <h2 className="py-3 mb-6 fw-bold">Explore nuestras colecciones</h2>
            <ProductList />
        </Container>
    );
}