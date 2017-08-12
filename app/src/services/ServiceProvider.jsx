import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import { ServiceManager } from 'services';

export class ServiceProvider extends Component {
  getChildContext() {
    const { serviceManager } = this.props;
    return { serviceManager };
  }

  render() {
    return Children.only(this.props.children);
  }
}

ServiceProvider.childContextTypes = {
  serviceManager: PropTypes.instanceOf(ServiceManager),
}
