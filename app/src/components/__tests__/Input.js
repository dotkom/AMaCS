import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Input />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders label', () => {
    const wrapper = shallow(
      <Input label="Test label" />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('passes props', () => {
    const wrapper = shallow(
      <Input name="labely" placeholder="Placeholder" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
