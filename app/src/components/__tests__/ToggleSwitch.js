import React from 'react';
import { shallow } from 'enzyme';

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
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <ToggleSwitch checked={false} onChange={onChangeMock} />
    );
    wrapper.find('button').simulate('click');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('toggles checked when clicked and already checked', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <ToggleSwitch checked={true} onChange={onChangeMock} />
    );
    wrapper.find('button').simulate('click');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
