import React from 'react';
import PropTypes from 'prop-types';

import { GlobalSpinner } from 'components';

const ComponentLoading = ({ isLoading, children }) => {
  return isLoading ? <GlobalSpinner/> : children;
};

ComponentLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ComponentLoading;