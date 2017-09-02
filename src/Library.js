import React from 'react';
import PropTypes from 'prop-types';
import HelloWorld from './components/HelloWorld/HelloWorld';

const Library = props => (
	<div className="library">
		<HelloWorld world="World"/>
		<div className="state-management-example">
			<button onClick={props.increment}>Increment</button>
			<br/>
			<span className="integer-value">{props.integerValue}</span>
		</div>
	</div>
);

Library.propTypes = {
	integerValue:PropTypes.number.isRequired ,
	increment:PropTypes.func.isRequired
};

export default Library;