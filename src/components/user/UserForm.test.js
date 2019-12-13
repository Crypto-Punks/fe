import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';
import { Provider } from 'react-redux';
import store from '../../store';

const data = {
  buttonText: 'test',
  redirectText: 'test',
  redirectLink: 'test',
  error: 'test',
  handleSubmit: () => {},
  handleClearError: () => {}
};

describe('UserForm component', () => {
  it('renders UserForm', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <UserForm { ...data } />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});