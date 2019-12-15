import React from 'react';
import { shallow } from 'enzyme';
import TransactionForm from './TransactionForm';

const data = {
  handleSubmit: () => {},
  currencies: [],
  investedCoins: []
};

describe('TransactionForm component', () => {
  it('renders TransactionForm', () => {
    const wrapper = shallow(<TransactionForm { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
