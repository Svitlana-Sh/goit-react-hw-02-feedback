import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FeedbackBtnPoll } from './feedback-staled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <FeedbackBtnPoll
          key={nanoid(10)}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e)}
        >
          {option}
        </FeedbackBtnPoll>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};