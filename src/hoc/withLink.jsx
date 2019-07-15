import React from 'react';
import { Link } from 'react-router-dom';

const withLink = (Component, getLink) => ownProps => {
  return (
    <Link to={getLink(ownProps)}>
        <Component {...ownProps} />
    </Link>
  );
};

export default withLink;
