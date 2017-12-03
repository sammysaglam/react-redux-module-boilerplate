import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers , createStore} from 'redux';
import {Provider , connect} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import Library from '../Library';
import {reducer , actionCreators} from '../Library.redux';

// redux init
const reducers = combineReducers({
	library:reducer
});
const store = createStore(
	reducers
);

// react-redux connection
const mapStateToProps = state => ({
	integerValue:state.library.integerValue
});
const mapDispatchToProps = dispatch => ({
	increment:() => {
		dispatch(actionCreators.increment());
	}
});
const LibraryContainer = connect(
	mapStateToProps ,
	mapDispatchToProps
)(Library);

const render = App => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App/>
			</Provider>
		</AppContainer> ,
		document.getElementById('target')
	);
};
render(LibraryContainer);

if ( module.hot ) {
	module.hot.accept('../Library' , () => {
		render(LibraryContainer);
	});
}