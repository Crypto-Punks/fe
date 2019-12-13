import React from 'react';
import { shallow } from 'enzyme';
import AssetList from './AssetList';

const data = {
  investedCoins: []
};

describe('AssetList component', () => {
  it('renders AssetList', () => {
    const wrapper = shallow(<AssetList { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
