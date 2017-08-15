import React from 'react';
import { shallow } from 'enzyme';

import ToggleSwitch from '../ToggleSwitch';

describe('ToggleSwitch.jsx', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ToggleSwitch />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked', () => {
    const wrapper = shallow(
      <ToggleSwitch checked />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('toggles checked when clicked', () => {
    const wrapper = shallow(
      <ToggleSwitch />
    );
    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
