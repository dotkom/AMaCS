import React from 'react';
import { shallow } from 'enzyme';

import AdminContainer from '../AdminContainer';

describe('AdminContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AdminContainer />
    )
    expect(wrapper).toMatchSnapshot();
  });
});
