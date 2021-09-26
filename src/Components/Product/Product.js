import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
// product component 
const Product = (props) => {
    // console.log(props)
    const {img, size, dress, brand, color, price} = props.product

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="product-container">
                <div className="product-imges">
                    <img src={img} alt="Empty!"/>
                </div>
                <div className="product-details">
                    <h3>{dress}</h3>
                    <p>Brand: {brand}</p>
                    <p>Color: {color}</p>
                    <p>Size: {size}</p>
                    <h3>Price: ${price}</h3>
                    <button onClick={() => props.handleToCart(props.product)}>{element}Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;