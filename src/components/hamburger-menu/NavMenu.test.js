import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from './NavMenu';
import { Provider } from 'react-redux';
import store from '../../store';

describe('NavMenu component', () => {
  it('renders NavMenu', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavMenu />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
