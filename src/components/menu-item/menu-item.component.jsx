import React from 'react';

import './menu-item.styles.scss';

const menuItem = ({ title, imageUrl, size, url }) => (
	<div className={`${size} menu-item`}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h1 className="title">{title}</h1>
			<a href={`${url}`}>
				<span className="subtitle">SHOP NOW</span>
			</a>
		</div>
	</div>
);

export default menuItem;
