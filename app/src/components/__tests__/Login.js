import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../Login';

describe('Login', () => {
  const authServiceMock = {
    login: jest.fn(),
    logout: jest.fn(),
  };

  const onChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('renders correctly', () => {
    const wrapper = shallow(
      <Login />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with user info', () => {
    const wrapper = shallow(
      <Login
        info={{name: 'Name', mail: 'email@example.com'}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with user info and logged in', () => {
    const wrapper = shallow(
      <Login
        info={{name: 'Name', mail: 'email@example.com'}}
        loggedIn
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls auth service login when login button clicked', () => {
    const wrapper = shallow(
      <Login
        info={{name: 'Name', mail: 'email@example.com'}}
        authService={authServiceMock}
      />
    );
    wrapper.find('Button').simulate('click');
    expect(authServiceMock.login).toHaveBeenCalled();
  });


  it('calls auth service logout when logout button clicked', () => {
    const wrapper = shallow(
      <Login
        info={{name: 'Name', mail: 'email@example.com'}}
        authService={authServiceMock}
        loggedIn
      />
    );
    wrapper.find('Button').simulate('click');
    expect(authServiceMock.logout).toHaveBeenCalled();
  });

  it('calls onChange when name changes', () => {
    const name = 'Name';
    const email = 'email@example.com';
    const wrapper = shallow(
      <Login
        info={{name, email}}
        authService={authServiceMock}
        onChange={onChangeMock}
      />
    );
    const changedText = 'new Name';
    wrapper.find('Input').first().simulate('change', {
      target: { value: changedText}
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      'name': changedText,
      email,
    });
  });

  it('calls onChange when mail changes', () => {
    const name = 'Name';
    const email = 'email@example.com';
    const wrapper = shallow(
      <Login
        info={{name, email}}
        authService={authServiceMock}
        onChange={onChangeMock}
      />
    );
    const changedText = 'email2@example.com';
    wrapper.find('Input').last().simulate('change', {
      target: { value: changedText}
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      name,
      email: changedText,
    });
  });
});
