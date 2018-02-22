import React from 'react';
import { shallow } from 'enzyme';

import { Application } from '../';

describe('Application', () => {
  
  const applicationServiceMock = {
    postApplication: jest.fn()
  };
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Application />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with user info', () => {
    const user = {
      fullname: 'Test User',
      email: 'email@example.com'
    }
    const wrapper = shallow(
      <Application user={user} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('updates user info on new props', () => {
    const user = {
      fullname: 'Test User',
      email: 'email@example.com'
    }
    const wrapper = shallow(
      <Application user={user} />
    );
    wrapper.setProps({
      user: {
        fullname: 'Test2 User',
        email: 'email2@example.com'
      }
    })
    expect(wrapper).toMatchSnapshot();
  });

  it('updates info on onChange from login', () => {
    const user = {
      fullname: 'Test Login',
      email: 'email@example.com'
    }
    const wrapper = shallow(
      <Application user={user} />
    );
    wrapper.find('ConnectedServiceComponent').simulate('change', {
      name: 'Post Login',
      email: 'emaillogin@example.com'
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('updates info on onChange from SelectContainer', () => {
    const user = {
      fullname: 'Test Login',
      email: 'email@example.com'
    }
    const wrapper = shallow(
      <Application user={user} />
    );
    wrapper.find('SelectContainer').simulate('change', [
      "Dotkom"
    ]);
    expect(wrapper).toMatchSnapshot();
  });
});
