import React from 'react';
import './Order.css';

const Order = (props) => {
    // console.log(props.orderItem)
    const {orderItem} = props

    let totalCoust = orderItem.reduce((previous, productOrder) => previous + productOrder.price, 0)


    return (
        <div>
            <div>
                <h3>Order Dress:{props.orderItem.length}</h3>
                <h2>Total Money: ${totalCoust}</h2>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Order;