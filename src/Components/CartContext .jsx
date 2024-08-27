import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const isProductInCart = cart.some(item => item.id === product.id);
        if (!isProductInCart) {
            setCart([...cart, product]);

            // Success alert when a product is added
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product added successfully!",
                showConfirmButton: false,
                timer: 1500
            });

            return { success: true };
        } else {
            // Alert for already added product
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Product already added!",
                showConfirmButton: false,
                timer: 1500
            });

            return { success: false };
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));

        // Success alert when a product is removed
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product removed successfully!",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
