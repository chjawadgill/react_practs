import React from 'react';
import './Layout.css'; // Optional: Add styles in a separate CSS file

const Layout = () => {
    const product = {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: "$199.99",
        image: "https://picsum.photos/200/300", // Replace with your product image URL
    };

    return (
        <div className="layout">
            <header className="header">
                <h1>E-Commerce Store</h1>
            </header>
            <main className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </main>
        </div>
    );
};

export default Layout;