import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import CrudProductos from "./components/CrudProductos";
import { CartProvider } from "./context/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
// import Us from "./pages/Us";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/crudproductos" element={<ProtectedRoute><CrudProductos/></ProtectedRoute>}/>
          {/* <Route path="/us" element={<Us />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CartProvider>
      <ToastContainer position="botom-right" autoClose={1500}/>
    </div>
  );
}
