import React from 'react';

import { connect } from 'react-redux';


import './collection.styles.scss'
// import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ match, collection }) => {
    console.log("match-------------->", match);
    console.log("collection*********", collection);
    return (
        <div className="collection">
            <h2>collection Page</h2>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
