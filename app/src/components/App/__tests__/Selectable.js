import React from 'react';
import { shallow } from 'enzyme';

import Selectable from '../Selectable';

describe('Selectable', () => {
  const committee = {
    name: 'Testkom',
    icon: 'icon-here',
  };
  
  it('renders correctly', () => {
    const wrapper = shallow(
      <Selectable committee={committee} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Selectable committee={committee} onClick={onClickMock} />
    );
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
