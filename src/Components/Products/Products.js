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
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="product-order">
                <h3>Order</h3>
            </div>
        </div>
    );
};

export default Products;