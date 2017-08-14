import React from 'react';
import { shallow } from 'enzyme';

import CommitteeInfo from '../CommitteeInfo';

describe('CommitteeInfo', () => {
  const committee = {
    name: 'Testkom',
    icon: 'icon-here',
    info: 'Testkom does stuff'
  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <CommitteeInfo committee={committee} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly after click', () => {
    const wrapper = shallow(
      <CommitteeInfo committee={committee} />
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
