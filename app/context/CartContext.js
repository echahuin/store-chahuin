"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (isInCart(product)) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + product.quantity };
                } else {
                    return item;
                }
            });
            setCart(newCart);
            return;
        } else{
            setCart((prevCart) => [product, ...prevCart]);
        }
    }

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product));
    }

    const totalItems = () => {
        return cart.reduce((sum, product) => sum + product.quantity, 0);
    }

    const isInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, totalItems, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}