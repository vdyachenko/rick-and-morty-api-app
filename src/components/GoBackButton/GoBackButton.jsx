import React from 'react';

import { Button, Icon } from 'antd';

import { withLink } from 'hoc';

const GoBackButton = () => (
  <Button type="primary" shape="circle">
    <Icon type="left" />
  </Button>
);

export default withLink(GoBackButton, () => `/`);