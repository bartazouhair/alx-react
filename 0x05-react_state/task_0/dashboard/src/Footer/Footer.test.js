import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
	it('Footer renders without crashing', () => {
		shallow(<Footer />);
	});
	it('Footer at the very least render the text “Copyright”', () => {
		const footer = shallow(<Footer />);
		const text = footer.text();
		expect(text).toContain('Copyright');
	});
});
