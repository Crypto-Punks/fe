import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './Hamburger';
import { Provider } from 'react-redux';
import store from '../../store';


describe('Hamburger component', () => {
  it('renders Hamburger', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Hamburger />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
