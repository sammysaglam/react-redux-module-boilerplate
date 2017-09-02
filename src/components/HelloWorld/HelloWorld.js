import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = props => (
	<div className="hello-world">
		<h1>Hello {props.world}!</h1>
		<div>
			A base64 embedded image:
		</div>
		<div className="use-anton-font">
			An image copied to build folder:
			<img src="components/HelloWorld/img/like.png"/>
		</div>
	</div>
);

HelloWorld.propTypes = {
	world:PropTypes.string.isRequired
};

export default HelloWorld;