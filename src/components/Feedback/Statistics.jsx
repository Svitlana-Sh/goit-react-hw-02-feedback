import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { MessageAlart, MessageTotal } from './feedback-staled';

export const Statistics = ({ feedbackTypes, total, positivePercentage }) => {
  return (
    <div>
      {Object.entries(feedbackTypes).map(feedbackType => (
        <p key={nanoid()}>
          {feedbackType[0]}: {feedbackType[1]}
        </p>
      ))}
      <MessageAlart>Total: {total}</MessageAlart>
      <MessageTotal
        style={{
          color: getColor(positivePercentage / 100)
        }}
      >
        Positive feedback: {`${positivePercentage}%`}
      </MessageTotal>
    </div>
  );
};

function getColor(value) {
  const hue = ((0 + value) * 120).toString(10);
  return `hsl(${hue},50%, 47%)`;
}

Statistics.propTypes = {
  feedbackTypes: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
