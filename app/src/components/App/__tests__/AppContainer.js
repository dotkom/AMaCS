import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import AppContainer from '../AppContainer';

const createAppContainer = (path, user) => (
  <AppContainer
    match={{ path }}
    user={user}
  />
)

describe('AppContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      createAppContainer('/')
    );
    expect(wrapper).toMatchSnapshot();
  });
});
