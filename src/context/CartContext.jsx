import React from "react";
import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState([]);


    //AGREGA UN PRODUCTTO AL CARRITO
    const addToCarrito = (product) => {
        setCart(prev => {
            const found = prev.find((item)=> item.id === product.id);
            if (found) {
                return prev.map((item) => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity +1} : item);
            } else {
                return [...prev, { ...product, quantity: 1}];
            }
        });
    };

    // ELIMINAR PRODUCTO DEL CARRITO 
    const removeFromCarrito = (id) => {
        setCart((prev)=> prev.filter ((item) => item.id !== id));
    };

    //DISMINUYE UN PRODUCTO (SI HAY 3, DISMINUYE UN PRODUCTO A 2)
    const decreaseFromCarrito = (id) => {
        setCart ((prev) =>
            prev.map((item) =>
                item.id === id
                ? { ...item, quantity: Math.max(item.quantity - 1, 1)}
                : item
            )
        );
    };

    //LIMPIA TODOO EL CARRITO
    const clearCarrito = () => setCart([]);

    const updateQty = (id, quantity) => {
        setCart(prev => prev.map((item) => item.id === id ? { ...item, quantity } : item));
    };

    const total = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

    return (
        <CartContext.Provider 
            value={{ cart, addToCarrito, removeFromCarrito, clearCarrito, updateQty, decreaseFromCarrito, total }}>
            {children}
        </CartContext.Provider>
    );
}