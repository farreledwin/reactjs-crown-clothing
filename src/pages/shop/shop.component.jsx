import React from 'react';

import SHOPDATA from './shopdata.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} /> 
                ))}
            </div>
        );
    }

};

export default ShopPage;