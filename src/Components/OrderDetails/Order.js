import React from 'react';
import './Order.css';
// order component 
const Order = (props) => {
    // console.log(props.orderItem)
    const {orderItem} = props

    const totalCoust = orderItem.reduce((previous, productOrder) => previous + productOrder.price, 0)
    const showDress = orderItem.reduce((previous, productDress)=> previous + productDress.dress, "");


    return (
        <div className="order-container">
            <div className="dress-order">
                <h3>Order Dress: {props.orderItem.length}</h3>
                <h2>Total Money: ${totalCoust}</h2>
            </div>
            <div className="show-dress">
                <h3>Dress Name</h3>
                <p>{showDress}</p>
            </div>
        </div>
    );
};

export default Order;