import React from 'react';

import { Empty } from 'antd';

import { withCenteredPosition } from 'hoc';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const Component = withCenteredPosition(Empty);
      return <Component description="Oops, something went wrong!" />;
    }

    return this.props.children;
  }
}