import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
	it('Login renders without crashing', () => {
		shallow(<Login />);
	});

	it('Login enders 2 input tags and 2 label tags', () => {
		const login = shallow(<Login />);

		const inputs = login.find('input');
		const labels = login.find('label');

		expect(inputs).toHaveLength(2);
		expect(labels).toHaveLength(2);
	});
});
