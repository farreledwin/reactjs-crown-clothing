import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectShopAll } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopAll
});

export default connect(mapStateToProps)(CollectionsOverview);
