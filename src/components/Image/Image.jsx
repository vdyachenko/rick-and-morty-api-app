import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Image.style';

const Image = (props) => (
  <Styled  {...props} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;