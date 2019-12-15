import React from 'react';
import { shallow } from 'enzyme';
import NetWorth from './NetWorth';
import { Provider } from 'react-redux';
import store from '../../store';

describe('NetWorth component', () => {
  it('renders NetWorth', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NetWorth />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
