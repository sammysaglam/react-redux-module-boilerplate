import React from 'react';
import { mount } from 'enzyme';
import Library from '../src/Library';

/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
// eslint-disable-next-line func-style
function setup() {
	const props = {
		increment: jest.fn(),
		integerValue: 45,
	};

	const enzymeWrapper = mount(<Library {...props} />);

	return {
		props,
		enzymeWrapper,
	};
}

describe('components', () => {
	describe('Library', () => {
		it('should render self and subcomponents', () => {
			const { enzymeWrapper } = setup();

			expect(enzymeWrapper.hasClass('library')).toBe(true);

			const todoInputProps = enzymeWrapper.find('HelloWorld').props();
			expect(todoInputProps.world).toBe('World');

			expect(enzymeWrapper.find('.integer-value').text()).toBe('45');
		});
	});
});
