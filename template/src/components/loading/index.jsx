import React from 'react';

import { LoadingView } from '@openmrs/react-components';

const LoadingComponent = props => {
  return (
    <div>
      <h1>Loading Component</h1><hr />
      <LoadingView />
    </div>

  );
};

export default LoadingComponent;
