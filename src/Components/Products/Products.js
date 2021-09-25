import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("./dressApi.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="products">
            <div className="product">
                <h3>Product:</h3>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="product-order">
                <h3>Order</h3>
            </div>
        </div>
    );
};

export default Products;