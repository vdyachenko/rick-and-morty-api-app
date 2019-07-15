import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { notification } from 'antd';

import { removeError } from 'store/actions';
import { getErrorsList } from './NotificationsSelectors';

const Notifications = ({ errors, removeError }) => {
  useEffect(() => {
    errors.forEach(({ id, message }) => {
      notification['error']({
        message,
        onClose: () => {
          removeError(id);
        },
      });
    });
  }, [errors, removeError]);
  return null;
};

Notifications.propTypes = {
  errors: PropTypes.array.isRequired,
  removeError: PropTypes.func.isRequired
};
const withMemo = React.memo(Notifications);

export default connect(state => ({
  errors: getErrorsList(state)
}), {
  removeError
})(withMemo);