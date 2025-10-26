import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Products from "./pages/Products";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
// import Us from "./pages/Us";
import Contact from "./pages/Contact";

function Admin() {
  return <Container><h2>Panel admin (protegido)</h2><p>Área protegida.</p></Container>;
}

// function Login() {
//   const { isAuthenticated, login, logout } = useContext(AuthContext);
//   return (
//     <Container>
//       <h2>Login simulado</h2>
//       <p>Estado: {isAuthenticated ? "Autenticado" : "No autenticado"}</p>
//       {!isAuthenticated ? <Button onClick={login}>Iniciar sesión</Button> : <Button onClick={logout}>Cerrar sesión</Button>}
//     </Container>
//   );
// }

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
        <Route path="/cartpage" element={<CartPage />} />
        {/* <Route path="/us" element={<Us />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/perfil:id" element={
          <ProtectedRoute><Perfil /></ProtectedRoute>
        }>
        </Route>
        <Route path="/admin" element={
          <ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="*" element={<Container><h3>404 - Página no encontrada</h3></Container>} />
      </Routes>
      <Footer />
    </div>
    
  );
}
