import React from 'react';
import PropTypes from 'prop-types';
import { MessageAlart } from './feedback-staled';

export const Notification = ({ message }) => <MessageAlart>{message}</MessageAlart>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
