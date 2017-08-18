import React from 'react';
import { shallow, mount } from 'enzyme';

import ToggleSwitch from '../ToggleSwitch';

describe('ToggleSwitch.jsx', () => {
  
  const onChangeMock = jest.fn();


  afterEach(() => {
    jest.clearAllMocks();
  });


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
    const wrapper = mount(
      <ToggleSwitch />
    );
    expect(wrapper.state('checked')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('checked')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });


  it('toggles checked when clicked and component updates as an uncontrolled component', () => {
    const wrapper = mount(
      <ToggleSwitch />
    );
    expect(wrapper.state('checked')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('checked')).toBe(true);
    wrapper.update();
    expect(wrapper.state('checked')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('toggles un-checked when clicked and component updates as a controlled component', () => {
    const checked=true;
    const wrapper = mount(
      <ToggleSwitch checked={checked} />
    );
    expect(wrapper.state('checked')).toBe(checked);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('checked')).toBe(!checked);
    wrapper.update();
    expect(wrapper.state('checked')).toBe(checked);
    expect(wrapper).toMatchSnapshot();
  });

  it('toggles and checks if onChange is called with correct values', () => {
    const checked=true;
    const wrapper = mount(
      <ToggleSwitch 
        checked={checked} 
        onChange={onChangeMock}
      />
    );

    wrapper.find('button').simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith(!checked);
    wrapper.find('button').simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith(checked);
    expect(wrapper).toMatchSnapshot();
  });
});
