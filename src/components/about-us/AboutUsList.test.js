import React from 'react';
import { shallow } from 'enzyme';
import AboutUsList from './AboutUsList';

describe('AboutUsList component', () => {
  it('renders AboutUsList', () => {
    const wrapper = shallow(<AboutUsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
