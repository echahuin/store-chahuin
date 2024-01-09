"use client"
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [storedValue, setValue] = useLocalStorage("cart", cart);

    const addToCart = (product) => {
        if (isInCart(product)) {
            const newCart = cart.map((item) => {
                if (item.slug === product.slug) {
                    return { ...item, quantity: item.quantity + product.quantity };
                } else {
                    return item;
                }
            });
            setCart(newCart);
            setValue(product);

            return;
        } else{
            // setValue()
            setCart((prevCart) => [product, ...prevCart]);
            setValue(cart);
        }
        setValue(product);
    }

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.slug !== product));
    }

    const totalItems = () => {
        return cart.reduce((sum, product) => sum + product.quantity, 0);
    }

    const isInCart = (product) => {
        return cart.some((item) => item.slug === product.slug);
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