import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';


describe('button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Button />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    const wrapper = shallow(
      <Button text="Button with text" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with icon', () => {
    const wrapper = shallow(
      <Button text="Button with icon" iconLeft="icon.png" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with right icon', () => {
    const wrapper = shallow(
      <Button text="Button with icon right" iconRight="icon2.png" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
