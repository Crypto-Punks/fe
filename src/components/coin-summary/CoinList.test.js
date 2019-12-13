import React from 'react';
import { shallow } from 'enzyme';
import CoinList from './CoinList';

const data = {
  items: []
};

describe('CoinList component', () => {
  it('renders CoinList', () => {
    const wrapper = shallow(<CoinList { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
