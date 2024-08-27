import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Components/CartContext ';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = () => {
        const result = addToCart(product);
        if (result.success) {
            // Success alert already handled in CartContext.js
        } else {
            // Already added alert already handled in CartContext.js
        }
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-60 h-60 object-cover" />
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
