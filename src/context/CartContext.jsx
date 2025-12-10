import React from "react";
import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [carrito, setCarrito] = useState([]);


    //AGREGA UN PRODUCTTO AL CARRITO
    const addToCarrito = (product) => {
        setCarrito((prevCarrito) => {
            const found = prevCarrito.find((item)=> item.id === product.id);
            if (found) {
                return prevCarrito.map((item) => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity +1} : item);
            } else {
                return [...prevCarrito, { ...product, quantity: 1}];
            }
        });
    };

    // ELIMINA EL PRODUCTO DEL CARRITO (POR ID)
    const removeFromCarrito = (id) => {
        setCarrito((prevCarrito)=> 
            prevCarrito.filter((item) => item.id !== id)
        );
    };


    //DISMINUYE UN PRODUCTO (SI HAY 3, DISMINUYE UN PRODUCTO A 2)
    const decreaseFromCarrito = (id) => {
        setCarrito ((prev) =>
            prev.map((item) =>
                item.id === id
                ? { ...item, quantity: Math.max(item.quantity - 1, 1)}
                : item
            )
        );
    };

    //LIMPIA TODOO EL CARRITO
    const clearCarrito = () => setCarrito([]);

    //ACTUALIZA LA CANTIDAD MANUALMENTEE
    const updateQty = (id, quantity) => {
        setCarrito(prev => 
            prev.map((item) => 
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    //total
    const total = carrito.reduce(
        (sum, item) => sum + (item.price || 0) * item.quantity, 
        0
    );

    return (
        <CartContext.Provider 
            value={{
                carrito, 
                addToCarrito, 
                removeFromCarrito, 
                clearCarrito, 
                updateQty, 
                decreaseFromCarrito, 
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

