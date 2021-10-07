import React from 'react';
import { connect } from 'react-redux';
import CustomButtom from '../custom-button/custom-button.component';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';
const CollectionItem = ({ item, addItem }) => {
    const {  name, price, imageUrl } = item
    return (
        < div className="collection-item" >
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span className="price" >{price}</span>
            </div>
            <CustomButtom onClick={() => addItem(item)} inverted> Add to cart</CustomButtom>
        </div >
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

