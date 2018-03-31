import * as LibraryRedux from '../src/Library.redux';

/* eslint-disable no-undef */
describe('Library reducer', () => {
	it('should return the initial state', () => {
		expect(LibraryRedux.reducer(undefined, {})).toEqual({
			integerValue: 8,
		});
	});

	it('should increment "integerValue" by 1', () => {
		const mockInitialState = {
			integerValue: 92,
		};

		const mockAction = {
			type: LibraryRedux.ACTIONS.INCREMENT,
		};

		expect(LibraryRedux.reducer(mockInitialState, mockAction)).toEqual({
			integerValue: 93,
		});
	});
});

describe('Library action creators', () => {
	it('should create an action to increment the value by 1', () => {
		const expectedAction = {
			type: LibraryRedux.ACTIONS.INCREMENT,
		};

		expect(LibraryRedux.actionCreators().increment()).toEqual(expectedAction);
	});
});
