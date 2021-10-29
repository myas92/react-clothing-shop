import React from 'react';
import { Route } from 'react-router-dom';

import './shop.styles.scss'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//match:{ isExact, params, path:"/shop" , url}
const ShopPage = ({ match }) => {
    console.log("shop:",match);
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
    
}
export default ShopPage;