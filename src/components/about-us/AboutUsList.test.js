import React from 'react';
import { shallow } from 'enzyme';
import AboutUsList from './AboutUsList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('AboutUsList component', () => {
  it('renders AboutUsList', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AboutUsList />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
