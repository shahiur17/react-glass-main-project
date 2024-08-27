import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        // Check if the product is already in the cart
        const isProductInCart = cart.some(item => item.id === product.id);
        if (!isProductInCart) {
            setCart([...cart, product]);
            return { success: true, message: 'Added to cart successfully!' };
        } else {
            return { success: false, message: 'Product is already in the cart.' };
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
        return 'Deleted successfully!';
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
