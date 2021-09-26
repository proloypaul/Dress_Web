import React, { useEffect, useState } from 'react';
import Order from '../OrderDetails/Order';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("./dressApi.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [orderItem, setOrderItem] = useState([])
    const handleToCart = (product) => {
        // console.log(product);
        const orderIncrement = [...orderItem, product]
        setOrderItem(orderIncrement);
        
    };
    return (
        <div className="products">
            <div className="product">
                {
                    products.map(product => <Product handleToCart={handleToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="product-order">
                <h3>Order</h3>
                <Order orderItem={orderItem}></Order>
            </div>
        </div>
    );
};

export default Products;