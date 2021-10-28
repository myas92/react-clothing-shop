import React from 'react';

import './shop.styles.scss'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router';
import CollectionPage from '../collection/collection.component';

//match:{ isExact, params, path:"/shop" , url}
const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
)

export default ShopPage;