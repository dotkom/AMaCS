import React from 'react';
import { shallow } from 'enzyme';

import NavigationButton from '../NavigationButton';

describe('NavigationButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NavigationButton link="/url">
        Content
      </NavigationButton>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
