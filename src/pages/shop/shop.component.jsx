import React from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CategoryPage from '../category/category.components';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { selectLoadingFetch, selectisCollectionLoaded } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import withSpinner from '../../components/with-spinner/with-spinner.components';

const CategoryPageWithSpinner = withSpinner(CategoryPage);

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
		// const collectionRef = firestore.collection('collection');
		// collectionRef.onSnapshot(async (snapshot) => {
		// 	const collectionMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionMap);
		// });
	}
	render() {
		const { match, isFetching, selectisCollectionLoaded } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}
				/>
				<Route
					path={`/shop/:categoryId`}
					render={(props) => <CategoryPageWithSpinner isLoading={!selectisCollectionLoaded} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isFetching: selectLoadingFetch,
	selectisCollectionLoaded: selectisCollectionLoaded
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
