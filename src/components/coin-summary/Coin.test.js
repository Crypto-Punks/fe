import React from 'react';
import { shallow } from 'enzyme';
import Coin from './Coin';

const data = {
  item: {},
};

describe('Coin component', () => {
  it('renders Coin', () => {
    const wrapper = shallow(<Coin { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
