import React from 'react';
import { shallow } from 'enzyme';
import AboutUsItem from './AboutUsItem';

const data = {
  name: 'test',
  spiritAnimal: 'test',
  image: 'test',
  blurb: 'test'
};

describe('AboutUsItem component', () => {
  it('renders AboutUsItem', () => {
    const wrapper = shallow(<AboutUsItem { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
