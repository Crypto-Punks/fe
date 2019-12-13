import React from 'react';
import { shallow } from 'enzyme';
import CoinSearchForm from './CoinSearchForm';

const data = {
  handleSubmit: () => {}
};

describe('CoinSearchForm component', () => {
  it('renders CoinSearchForm', () => {
    const wrapper = shallow(<CoinSearchForm { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
