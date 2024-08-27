import React, { useEffect, useState } from 'react';
import { useCart } from '../../Components/CartContext ';

const AddCard = () => {
    const { cart, removeFromCart } = useCart(); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const cartProducts = cart.map(item => {
        const product = products.find(product => product.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
    }).filter(product => product !== null); 

    return (
        <div>
            <h2>Cart</h2>
            {cartProducts.length === 0 ? (
                <p>No products in the cart.</p>
            ) : (
                <div>
                    <h3>Product Items:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cartProducts.map(product => (
                            <div key={product.id} className="card card-compact shadow-xl">
                                <figure className='h-5/6'>
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">${product.price}</h2>
                                    <p>{product.name}</p>
                                    <div className="card-actions justify-end">
                                        <button 
                                            onClick={() => removeFromCart(product.id)} 
                                            className="btn btn-sm btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCard;
