import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Heading />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
