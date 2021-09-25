import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("./dressApi.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className="products">
            <div className="product">
                <h3>Product:</h3>
            </div>
            <div className="product-order">
                <h3>Order</h3>
            </div>
        </div>
    );
};

export default Products;