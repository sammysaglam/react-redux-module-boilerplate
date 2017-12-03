import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({world}) => (
	<div className="hello-world">
		<h1>Hello {world}! base64 encoded font here</h1>
		<div>
			A base64 embedded image:
		</div>
		<div className="use-anton-font">
			The image with text:
			<img src={require('./img/like.png')}/>
		</div>
	</div>
);

HelloWorld.propTypes = {
	world:PropTypes.string.isRequired
};

export default HelloWorld;