import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Row.style';

const Row = ({ children }) => (
  <Styled>
    { children }
  </Styled>
);

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;