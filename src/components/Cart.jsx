// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Container, ListGroup, Button, Form } from "react-bootstrap";

// export default function Cart() {
//     const { cart, removeFromCart, clearCart, updateQty, total } = useContext(CartContext);

//     // if (cart.length === 0) return <Container><p>El carrito está vacío.</p></Container>;

//     return (
//         <Container className="">
//             <h2>Carrito</h2>
//             <ListGroup variant="flush">
//                 {cart.map(item => (
//                     <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
//                         <div>
//                             <strong>{item.wine || item.name}</strong>
//                             <div>${item.price}</div>
//                         </div>
//                         <div style={{width:200, display:"flex", gap:8, alignItems:"center"}}>
//                             <Form.Control type="number" value={item.qty} min={1}
//                                 onChange={(e) => updateQty(item.id, Number(e.target.value))} />
//                             <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
//                         </div>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//             <div className="mt-3">
//                 <h4>Total: ${total.toFixed(2)}</h4>
//                 <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>{" "}
//                 <Button variant="success"> Comprar (simulado)</Button>
//             </div>
//         </Container>
//     );
// }
