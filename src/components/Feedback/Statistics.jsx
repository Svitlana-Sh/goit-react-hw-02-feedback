import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Statistics = ({ feedbackTypes, total, positivePercentage }) => {
  return (
    <div>
      {Object.entries(feedbackTypes).map(feedbackType => (
        <p key={nanoid()}>
          {feedbackType[0]}: {feedbackType[1]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>
        Positive feesdback: {`${positivePercentage}%`}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  feedbackTypes: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
