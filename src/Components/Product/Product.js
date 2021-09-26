import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img, size, dress, brand, color, price} = props.product
    return (
        <div>
            <div className="product-container">
                <div className="product-imges">
                    <img src={img} alt="Empty!"/>
                </div>
                <div>
                    <h3>{dress}</h3>
                    <p>Brand: {brand}</p>
                    <p>Color: {color}</p>
                    <p>Size: {size}</p>
                    <h3>Price: ${price}</h3>
                    <button onClick={() => props.handleToCart(props.product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;