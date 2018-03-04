// actions
export const ACTIONS = {
	INCREMENT: 'library/INCREMENT'
};

// reducer
export const reducer = (state = { integerValue: 8 }, action = {}) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return {
				...state,
				integerValue: state.integerValue + 1
			};

		default:
			return state;
	}
};

// action Creators
export const actionCreators = {
	increment: () => ({
		type: ACTIONS.INCREMENT
	})
};
