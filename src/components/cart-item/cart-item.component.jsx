import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="cart-details">
            <div className="name">{name}</div>
            <div className="price">{quantity} x ${price}</div>

        </div>

    </div>
)

export default CartItem;