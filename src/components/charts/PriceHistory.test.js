import React from 'react';
import { shallow } from 'enzyme';
import PriceHistory from './PriceHistory';

const data = {
  id: 'test',
  historyDuration: 'test'
};

describe('PriceHistory component', () => {
  it('renders PriceHistory', () => {
    const wrapper = shallow(<PriceHistory { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
