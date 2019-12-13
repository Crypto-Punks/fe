import React from 'react';
import { shallow } from 'enzyme';
import Diversification from './Diversification';

const data = {
  investedCoins: []
};

describe('Diversification component', () => {
  it('renders Diversification', () => {
    const wrapper = shallow(<Diversification { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
