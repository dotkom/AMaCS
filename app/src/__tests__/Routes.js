import React from 'react';
import { mount, shallow } from 'enzyme';
import { ServiceProvider, ServiceManager } from 'services';
import { StaticRouter } from 'react-router-dom';

import ConnectedRoutes, { Routes } from '../Routes';

describe('Routes component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Routes />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ConnectedRoutes', () => {
  class AuthServiceMock {
    constructor() {
      this.loginMock = jest.fn();
      this.logoutMock = jest.fn();
      this.getUserMock = jest.fn();
      this.onUserChangeMock = {
        subscribe: jest.fn()
      };
    }
    setToken() {

    }
    login() {
      return this.loginMock;
    }
    logout() {
      return this.loginMock;
    }
    getUser() {
      return this.getUserMock;
    }
    onUserChange() {
      return this.onUserChangeMock;
    }
  } 
  const serviceManager = new ServiceManager();
  serviceManager.registerService("auth.service", AuthServiceMock);
  serviceManager.alias("auth","auth.service");
  
  it('renders mounted root route', () => {
    const wrapper = mount(
      <ServiceProvider serviceManager={serviceManager}>
        <StaticRouter context={{}}>
          <ConnectedRoutes />
        </StaticRouter>
      </ServiceProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
})
