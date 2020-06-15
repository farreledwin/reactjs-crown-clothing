import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector([ selectShop ], (shop) => shop.collections);

export const selectShopAll = createSelector(
	[ selectShopData ],
	(collection) => (collection ? Object.keys(collection).map((keys) => collection[keys]) : [])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector([ selectShopData ], (collections) => (collections ? collections[collectionUrlParam] : null));

export const selectLoadingFetch = createSelector([ selectShop ], (shop) => shop.isFetching);

export const selectisCollectionLoaded = createSelector([ selectShop ], (shop) => (shop.collections ? true : false));
