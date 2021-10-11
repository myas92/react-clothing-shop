import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import CustomButtom from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems , history }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {(cartItems.length) ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>

        <CustomButtom onClick={()=> history.push('/checkout')}>Go To Checkout</CustomButtom>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));