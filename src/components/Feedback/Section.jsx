import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, moreStyles, children }) => {
  return (
    <div moreStyles={moreStyles}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  moreStyles: PropTypes.string,
};