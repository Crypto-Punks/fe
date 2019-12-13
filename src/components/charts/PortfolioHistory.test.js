import React from 'react';
import { shallow } from 'enzyme';
import PortfolioHistory from './PortfolioHistory';

describe('PortfolioHistory component', () => {
  it('renders PortfolioHistory', () => {
    const wrapper = shallow(<PortfolioHistory />);
    expect(wrapper).toMatchSnapshot();
  });
});
