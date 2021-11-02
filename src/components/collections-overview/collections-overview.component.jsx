import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { selectCollections } from '../../redux/shop/shop.selector';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';
const CollectionsOverview = ({ collections, match }) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$:",match);
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview 
})

export default connect(mapStateToProps)(CollectionsOverview);