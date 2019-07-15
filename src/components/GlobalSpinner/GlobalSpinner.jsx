import React from 'react';

import { Spin } from 'antd';

import { withCenteredPosition } from 'hoc';

const GlobalSpinner = () =>  <Spin size="large" />;

export default withCenteredPosition(GlobalSpinner);