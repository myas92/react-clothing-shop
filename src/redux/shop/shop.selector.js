import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jakests: 3,
//     womens: 4,
//     mens: 5,
// }

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ) 


export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key=> collections[key])
)  
