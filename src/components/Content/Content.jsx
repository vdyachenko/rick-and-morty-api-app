import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import Styled from './Content.style';

const Content = ({ children }) => (
  <Styled>
    <Layout.Content>
        { children }
    </Layout.Content>
  </Styled>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;