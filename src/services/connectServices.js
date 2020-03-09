import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ServiceManager } from 'services';

export function connectServices(mapServicesToProps) {
  return (WrappedComponent) => {
    class ConnectedServiceComponent extends Component {
      render() {
        const { serviceManager } = this.context;
        const serviceProps = mapServicesToProps(serviceManager);
        return <WrappedComponent {...serviceProps} {...this.props} />;
      }
    }

    ConnectedServiceComponent.contextTypes = {
      serviceManager: PropTypes.instanceOf(ServiceManager),
    };

    return ConnectedServiceComponent;
  };
}
