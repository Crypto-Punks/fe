import React from 'react';
import { shallow } from 'enzyme';
import Derivative from './Derivative';

const data = {
  id: 'test',
  derivativeDuration: 'test'
};

describe('Derivative component', () => {
  it('renders Derivative', () => {
    const wrapper = shallow(<Derivative { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
