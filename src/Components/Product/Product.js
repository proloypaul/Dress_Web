import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    // const {img} = props.product
    return (
        <div>
            <h4>product</h4>
            <img src={props.product.img} alt="Empty!"/>
        </div>
    );
};

export default Product;