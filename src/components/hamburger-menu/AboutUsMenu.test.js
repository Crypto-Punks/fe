import React from 'react';
import { shallow } from 'enzyme';
import AboutUsMenu from './AboutUsMenu';
import { Provider } from 'react-redux';
import store from '../../store';

describe('AboutUsMenu component', () => {
  it('renders AboutUsMenu', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AboutUsMenu />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
