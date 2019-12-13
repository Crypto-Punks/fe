import React from 'react';
import { shallow } from 'enzyme';
import AssetItem from './AssetItem';

const data = {
  activeCoin: {}
};

describe('AssetItem component', () => {
  it('renders AssetItem', () => {
    const wrapper = shallow(<AssetItem { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
