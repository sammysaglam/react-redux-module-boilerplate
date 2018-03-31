import React from 'react';
import PropTypes from 'prop-types';
import HelloWorld from './components/HelloWorld/HelloWorld';

const Library = ({ increment, integerValue }) => (
	<div className="library">
		<HelloWorld world="World" />
		<div className="state-management-example">
			<button onClick={increment} type="button">
				Increment
			</button>
			<br />
			<span className="integer-value">{integerValue}</span>
		</div>
	</div>
);

Library.propTypes = {
	increment: PropTypes.func.isRequired,
	integerValue: PropTypes.number.isRequired,
};

export default Library;
