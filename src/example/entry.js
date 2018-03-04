import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Library from './Library.redux-connected';
import { reducer } from '../Library.redux';

// redux init
const reducers = combineReducers({
	library: reducer
});
const store = createStore(reducers);

const render = App => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>,
		document.getElementById('target')
	);
};
render(Library);

if (module.hot) {
	module.hot.accept('./Library.redux-connected', () => {
		render(Library);
	});
}
