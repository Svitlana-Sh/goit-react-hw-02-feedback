import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={nanoid(10)}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};